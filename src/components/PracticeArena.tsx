import React, { useState, useEffect, useRef, useMemo } from 'react';
import { UnitRealm, PracticeQuestion, UserProfile, Grade } from '../types/game';
import { Check, X, Shield, ArrowRight, RotateCcw, Award, ChevronLeft, BookOpen, FileText, Clock, Flame, Sparkles, AlertTriangle, Target } from 'lucide-react';
import { soundEffects } from '../lib/audio';
import { saveWeakQuestion } from '../lib/storage';
import { recordQuestionResult } from '../lib/analytics';

interface PracticeArenaProps {
  unit: UnitRealm;
  onProceedToBoss: () => void;
  onBackToFlashcards: () => void;
  onAddXp: (amount: number) => void;
  onDeductHp?: (amount: number) => void;
  onShowAchievementToast?: (title: string, subtitle: string, icon?: string) => void;
  profile?: UserProfile;
}

const QUESTION_TIME_LIMIT = 25; // 25 seconds per question
const MAX_ATTEMPTS = 2;

// Utility to shuffle an array immutably
function shuffleOptions<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const PracticeArena: React.FC<PracticeArenaProps> = ({
  unit,
  onProceedToBoss,
  onBackToFlashcards,
  onAddXp,
  onDeductHp,
  onShowAchievementToast,
  profile
}) => {
  const questions: PracticeQuestion[] = unit.practice;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [attemptsOnCurrent, setAttemptsOnCurrent] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [showPassageModal, setShowPassageModal] = useState(false);

  // Stats for the end summary screen
  const [firstAttemptCorrectCount, setFirstAttemptCorrectCount] = useState(0);
  const [totalCorrectCount, setTotalCorrectCount] = useState(0);
  const [totalWrongCount, setTotalWrongCount] = useState(0);
  const [totalXpEarned, setTotalXpEarned] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [isSessionFinished, setIsSessionFinished] = useState(false);
  const [wrongQuestionsInSession, setWrongQuestionsInSession] = useState<PracticeQuestion[]>([]);

  // Timer ref to prevent multiple active intervals
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQ = questions[currentIdx];

  // Shuffle options whenever currentIdx changes, or when restarting
  const [shuffledOptions, setShuffledOptions] = useState<string[]>(() => {
    return currentQ?.options ? shuffleOptions(currentQ.options) : [];
  });

  // Re-shuffle options and reset question state whenever currentIdx changes
  useEffect(() => {
    if (!currentQ) return;
    if (currentQ.options) {
      setShuffledOptions(shuffleOptions(currentQ.options));
    }
    setSelectedAnswer(null);
    setAttemptsOnCurrent(0);
    setIsAnswered(false);
    setIsProcessing(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
  }, [currentIdx, currentQ]);

  // Clean and start timer for each question
  useEffect(() => {
    if (isSessionFinished) return;

    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Only run timer if not answered and not currently processing
    if (!isAnswered && !isProcessing) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            // Handle timeout as wrong attempt
            handleTimeExpired();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentIdx, isAnswered, isProcessing, isSessionFinished]);

  const handleTimeExpired = () => {
    soundEffects.playDamageTaken();
    setIsProcessing(true);
    setAttemptsOnCurrent((prev) => prev + 1);
    setTotalWrongCount((prev) => prev + 1);
    setCurrentStreak(0);

    // Save weak question
    saveWeakQuestion({
      id: currentQ.id,
      unitId: unit.id,
      unitTitle: unit.realmName,
      grade: unit.grade,
      prompt: currentQ.prompt,
      options: currentQ.options || [],
      correctAnswer: currentQ.correctAnswer,
      explanation: currentQ.explanation
    });

    recordQuestionResult(false, {
      id: currentQ.id,
      prompt: currentQ.prompt,
      options: currentQ.options,
      correctAnswer: currentQ.correctAnswer,
      grade: unit.grade,
      unitId: unit.id,
      unitTitle: unit.realmName
    });

    if (onDeductHp) onDeductHp(3);

    setTimeout(() => {
      setIsAnswered(true);
      setIsProcessing(false);
    }, 400);
  };

  const handleSelectOption = (option: string) => {
    if (isAnswered || isProcessing) return;

    // Stop timer immediately
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setIsProcessing(true);
    setSelectedAnswer(option);

    const isCorrect = option === currentQ.correctAnswer;
    const currentAttempt = attemptsOnCurrent + 1;
    setAttemptsOnCurrent(currentAttempt);

    if (isCorrect) {
      soundEffects.playCriticalHit();
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }

      // Calculate XP based on attempt and streak bonus
      let earnedXp = 20;
      if (currentAttempt === 1) {
        setFirstAttemptCorrectCount((prev) => prev + 1);
        if (newStreak >= 5) earnedXp = 40;
        else if (newStreak >= 3) earnedXp = 30;
        else if (newStreak >= 2) earnedXp = 24;
      } else {
        earnedXp = 10; // reduced XP for 2nd attempt
      }

      setTotalCorrectCount((prev) => prev + 1);
      setTotalXpEarned((prev) => prev + earnedXp);
      onAddXp(earnedXp);

      recordQuestionResult(true, {
        id: currentQ.id,
        prompt: currentQ.prompt,
        options: currentQ.options,
        correctAnswer: currentQ.correctAnswer,
        grade: unit.grade,
        unitId: unit.id,
        unitTitle: unit.realmName
      });

      setTimeout(() => {
        setIsAnswered(true);
        setIsProcessing(false);
      }, 350);
    } else {
      // Wrong answer
      soundEffects.playDamageTaken();
      setCurrentStreak(0);
      setTotalWrongCount((prev) => prev + 1);

      // Deduct light HP / Công lực penalty
      if (onDeductHp) onDeductHp(3);

      // Save question for Weakness Retraining
      saveWeakQuestion({
        id: currentQ.id,
        unitId: unit.id,
        unitTitle: unit.realmName,
        grade: unit.grade,
        prompt: currentQ.prompt,
        options: currentQ.options || [],
        correctAnswer: currentQ.correctAnswer,
        explanation: currentQ.explanation
      });

      if (!wrongQuestionsInSession.some((q) => q.id === currentQ.id)) {
        setWrongQuestionsInSession((prev) => [...prev, currentQ]);
      }

      recordQuestionResult(false, {
        id: currentQ.id,
        prompt: currentQ.prompt,
        options: currentQ.options,
        correctAnswer: currentQ.correctAnswer,
        grade: unit.grade,
        unitId: unit.id,
        unitTitle: unit.realmName
      });

      setTimeout(() => {
        setIsAnswered(true);
        setIsProcessing(false);
      }, 400);
    }
  };

  const handleRetryQuestion = () => {
    // Allow ONE retry on current question
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsProcessing(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      // Completed all questions in the arena!
      finishSession();
    }
  };

  const finishSession = () => {
    setIsSessionFinished(true);
    soundEffects.playVictoryFanfare();

    const accuracy = Math.round((totalCorrectCount / questions.length) * 100);
    if (accuracy >= 80 && onShowAchievementToast) {
      setTimeout(() => {
        onShowAchievementToast(
          '🎖️ Vượt Ải Thực Chiến Xuất Sắc!',
          `Độ chuẩn xác ${accuracy}%! Đã sẵn sàng nghênh chiến Thủ Lĩnh Hắc Ám!`
        );
      }, 800);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setAttemptsOnCurrent(0);
    setIsAnswered(false);
    setIsProcessing(false);
    setFirstAttemptCorrectCount(0);
    setTotalCorrectCount(0);
    setTotalWrongCount(0);
    setTotalXpEarned(0);
    setCurrentStreak(0);
    setLongestStreak(0);
    setWrongQuestionsInSession([]);
    setIsSessionFinished(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
    if (questions[0]?.options) {
      setShuffledOptions(shuffleOptions(questions[0].options));
    }
  };

  // Determine category badge label and style
  const getCategoryBadge = () => {
    if (currentQ.category === 'synonym' || currentQ.type === 'synonym') {
      return (
        <span className="px-2.5 py-0.5 rounded bg-purple-950/80 border border-purple-600/80 text-purple-300 font-mono text-[11px] font-bold">
          ⚡ TỪ ĐỒNG NGHĨA (SYNONYM - B2/C1)
        </span>
      );
    }
    if (currentQ.category === 'antonym' || currentQ.type === 'antonym') {
      return (
        <span className="px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-600/80 text-rose-300 font-mono text-[11px] font-bold">
          ⚔️ TỪ TRÁI NGHĨA (ANTONYM - B2/C1)
        </span>
      );
    }
    if (currentQ.category === 'reading' || currentQ.type === 'reading-comprehension' || currentQ.passageExcerpt) {
      return (
        <span className="px-2.5 py-0.5 rounded bg-amber-950/80 border border-amber-600/80 text-amber-300 font-mono text-[11px] font-bold">
          📜 ĐỌC HIỂU ĐOẠN VĂN (READING COMPREHENSION)
        </span>
      );
    }
    if (currentQ.category === 'collocation' || currentQ.type === 'collocation') {
      return (
        <span className="px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-600/80 text-emerald-300 font-mono text-[11px] font-bold">
          🎯 CỤM TỪ CỐ ĐỊNH (COLLOCATION)
        </span>
      );
    }
    return (
      <span className="px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-600/80 text-blue-300 font-mono text-[11px] font-bold">
        🛡️ VẬN DỤNG TỪ VỰNG & NGỮ CẢNH
      </span>
    );
  };

  // EXTRACT A PEDAGOGICAL HINT FOR 1ST FAILED ATTEMPT
  const getQuestionHint = () => {
    if (currentQ.category === 'synonym' || currentQ.type === 'synonym') {
      return 'Gợi ý: Tìm từ có trường nghĩa tương đồng, chú ý các tiếp đầu ngữ / gốc từ mang nghĩa tích cực hoặc tiêu cực.';
    }
    if (currentQ.category === 'antonym' || currentQ.type === 'antonym') {
      return 'Gợi ý: Hãy tìm từ mang ý nghĩa đối lập hoàn toàn, lưu ý các tiền tố phủ định như un-, in-, im-, dis-.';
    }
    if (currentQ.passageExcerpt) {
      return 'Gợi ý: Hãy đối chiếu kỹ các từ khóa trong câu hỏi với trích đoạn văn bản phía trên.';
    }
    return 'Gợi ý: Chú ý cấu trúc ngữ pháp và ngữ cảnh tình huống của câu để chọn phương án tự nhiên nhất.';
  };

  const isCurrentCorrect = selectedAnswer === currentQ?.correctAnswer;
  const canRetry = !isCurrentCorrect && attemptsOnCurrent < MAX_ATTEMPTS;

  // SUMMARY SCREEN DISPLAY
  if (isSessionFinished) {
    const accuracy = Math.round((totalCorrectCount / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto py-8 px-4 text-left animate-fadeIn">
        <div className="rounded-2xl border-2 border-amber-500/80 bg-gradient-to-b from-[#1c0c11] via-[#12070c] to-[#0b0c12] p-6 sm:p-8 text-neutral-100 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-3xl mb-3 animate-bounce">
              🏆
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 mb-1">
              HOÀN THÀNH ẢI THỰC CHIẾN!
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia">
              Hiệp khách <strong className="text-amber-300">{profile?.nickname || 'Bạn'}</strong> đã xuất sắc vượt qua toàn bộ khảo hạch tại {unit.realmName}!
            </p>
          </div>

          {/* Grid Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <div className="bg-neutral-950/80 border border-neutral-800 p-3 rounded-xl text-center">
              <span className="text-[10px] text-neutral-400 font-mono block mb-1">ĐỘ CHUẨN XÁC</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-amber-300">{accuracy}%</span>
            </div>
            <div className="bg-neutral-950/80 border border-neutral-800 p-3 rounded-xl text-center">
              <span className="text-[10px] text-neutral-400 font-mono block mb-1">ĐÚNG NGAY LẦN 1</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400">{firstAttemptCorrectCount} / {questions.length}</span>
            </div>
            <div className="bg-neutral-950/80 border border-neutral-800 p-3 rounded-xl text-center">
              <span className="text-[10px] text-neutral-400 font-mono block mb-1">CHUỖI DÀI NHẤT</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-yellow-400">🔥 x{longestStreak}</span>
            </div>
            <div className="bg-neutral-950/80 border border-neutral-800 p-3 rounded-xl text-center">
              <span className="text-[10px] text-neutral-400 font-mono block mb-1">TỔNG ĐÚNG</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-cyan-400">{totalCorrectCount} / {questions.length}</span>
            </div>
            <div className="bg-neutral-950/80 border border-neutral-800 p-3 rounded-xl text-center">
              <span className="text-[10px] text-neutral-400 font-mono block mb-1">CÔNG LỰC TÍCH LŨY</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-amber-400">+{totalXpEarned} XP</span>
            </div>
            <div className="bg-neutral-950/80 border border-neutral-800 p-3 rounded-xl text-center">
              <span className="text-[10px] text-neutral-400 font-mono block mb-1">SINH LỰC HIỆN TẠI</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-rose-400">{profile?.hp || 100} HP</span>
            </div>
          </div>

          {/* Feedback on Weak points if any */}
          {wrongQuestionsInSession.length > 0 && (
            <div className="mb-6 p-4 rounded-xl bg-rose-950/30 border border-rose-800/50">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-xs sm:text-sm mb-1.5 font-mono">
                <Target className="w-4 h-4 text-rose-400" />
                <span>Hệ thống đã tự động lưu {wrongQuestionsInSession.length} câu cần củng cố vào &quot;Luyện Lại Điểm Yếu&quot;!</span>
              </div>
              <p className="text-xs text-neutral-300 font-serif-wuxia leading-relaxed">
                Hiệp khách có thể luyện tập riêng các câu sai bất cứ lúc nào để đạt cảnh giới <strong>Tinh Thông (Mastered)</strong>.
              </p>
            </div>
          )}

          {/* Navigation Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-800">
            <button
              onClick={handleRestart}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-amber-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>Luyện Lại Ải Này (Đảo Đáp Án Mới)</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playVictoryFanfare();
                onProceedToBoss();
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 border border-amber-300 shadow-xl cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>Quyết Đấu Boss ({unit.bossName}) →</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBackToFlashcards}
          className="flex items-center gap-1 text-xs text-neutral-400 hover:text-amber-300 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Tàng Kinh Các</span>
        </button>

        <div className="flex items-center gap-2.5">
          {/* Combo Streak Pill */}
          {currentStreak > 1 && (
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/50 px-2.5 py-0.5 rounded-full font-bold animate-pulse font-mono flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Combo x{currentStreak}!</span>
            </span>
          )}

          {/* Question Index Pill */}
          <span className="text-xs text-neutral-400 font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-lg">
            Câu {currentIdx + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Title & Lore */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono mb-1">
          <Shield className="w-3.5 h-3.5" />
          <span>BƯỚC 2: LUYỆN CÔNG THỰC CHIẾN</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-amber-100">
          Vận Dụng Khẩu Quyết & Khảo Thí
        </h2>
        <p className="text-xs text-neutral-400 font-serif-wuxia mt-1">
          {profile?.nickname ? <strong className="text-amber-300">{profile.nickname}</strong> : 'Hiệp khách'} hãy suy nghĩ cẩn trọng trước khi xuất chiêu. Đáp án được đảo ngẫu nhiên mỗi lần thử thách!
        </p>

        {/* Button to view reading passage if available */}
        {unit.readingPassage && (
          <div className="mt-2.5">
            <button
              onClick={() => setShowPassageModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/60 hover:bg-amber-900 border border-amber-600/50 text-amber-300 text-xs font-mono font-medium cursor-pointer transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Tra cứu bài đọc: {unit.readingPassage.title}</span>
            </button>
          </div>
        )}
      </div>

      {/* Question Card */}
      <div className="wuxia-card rounded-2xl p-6 sm:p-8 mb-6 border border-neutral-700/80 shadow-2xl text-left bg-gradient-to-b from-[#191919] to-[#0f0f0f] relative overflow-hidden">
        {/* Real-time Question Timer Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
            <span className="flex items-center gap-1 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Thời gian suy nghĩ:</span>
            </span>
            <span className={`font-bold ${timeLeft <= 5 ? 'text-red-400 animate-pulse text-sm' : 'text-amber-300'}`}>
              {timeLeft}s
            </span>
          </div>
          <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 10 ? 'bg-amber-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${(timeLeft / QUESTION_TIME_LIMIT) * 100}%` }}
            />
          </div>
        </div>

        {/* Category Badge & Attempt Indicator */}
        <div className="mb-3 flex items-center justify-between">
          {getCategoryBadge()}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-neutral-400">
              Lượt thử: <strong className="text-amber-300">{attemptsOnCurrent}/{MAX_ATTEMPTS}</strong>
            </span>
          </div>
        </div>

        {/* Passage Excerpt if available */}
        {currentQ.passageExcerpt && (
          <div className="mb-4 p-4 rounded-xl bg-amber-950/30 border-l-4 border-amber-500 text-neutral-200 text-xs sm:text-sm font-serif-wuxia leading-relaxed">
            <div className="text-[11px] font-mono text-amber-300 font-bold uppercase mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Trích đoạn văn bản (Reading Excerpt):</span>
            </div>
            <p className="italic text-neutral-200 pl-2">
              &quot;{currentQ.passageExcerpt}&quot;
            </p>
          </div>
        )}

        {/* Question Prompt */}
        <div className="mb-5">
          <p className="text-base sm:text-lg font-medium text-neutral-100 leading-relaxed font-serif-wuxia whitespace-pre-line">
            {currentQ.prompt}
          </p>
        </div>

        {/* Options Grid (Randomized order A, B, C, D) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {shuffledOptions.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQ.correctAnswer;

            let buttonStyle = 'bg-neutral-900/90 border-neutral-700 text-neutral-200 hover:border-amber-400 hover:bg-neutral-800';

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold ring-1 ring-emerald-500';
              } else if (isSelected && !isCorrect) {
                buttonStyle = 'bg-red-950/90 border-red-500 text-red-200 ring-1 ring-red-500';
              } else {
                buttonStyle = 'bg-neutral-950/50 border-neutral-800 text-neutral-500 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered || isProcessing}
                onClick={() => handleSelectOption(option)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between text-xs sm:text-sm ${
                  isAnswered || isProcessing ? 'cursor-default' : 'cursor-pointer'
                } ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-md bg-black/40 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-amber-300">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-snug">{option}</span>
                </div>

                {isAnswered && isCorrect && <Check className="w-5 h-5 text-emerald-400 shrink-0" />}
                {isAnswered && isSelected && !isCorrect && <X className="w-5 h-5 text-red-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Educational Feedback Banner */}
        {isAnswered && (
          <div
            className={`p-4 rounded-xl border text-left text-xs sm:text-sm animate-fadeIn ${
              isCurrentCorrect
                ? 'bg-emerald-950/40 border-emerald-600/60 text-emerald-200'
                : 'bg-red-950/40 border-red-600/60 text-red-200'
            }`}
          >
            <div className="font-bold mb-1.5 flex items-center gap-2">
              {isCurrentCorrect ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {profile?.nickname ? `${profile.nickname} xuất chiêu chuẩn xác!` : 'Xuất Chiêu Chuẩn Xác!'}
                    {attemptsOnCurrent === 1 ? ' (+20 Công Lực)' : ' (+10 Công Lực)'}
                  </span>
                </>
              ) : (
                <div className="w-full">
                  <div className="flex items-center gap-2 text-rose-400 font-extrabold text-sm sm:text-base">
                    <span>⚔️ Công lực -5</span>
                  </div>
                  <div className="text-xs text-amber-300 font-medium mt-0.5">
                    Kiến thức này chưa vững. Hãy luyện lại!
                  </div>
                </div>
              )}
            </div>

            {/* Hint for 1st wrong attempt */}
            {!isCurrentCorrect && canRetry && (
              <div className="mt-2 p-3 rounded-lg bg-neutral-950/70 border border-amber-600/40 text-amber-200 text-xs">
                <strong className="text-amber-400 block mb-0.5">💡 Bí Kíp Chỉ Điểm:</strong>
                <p className="font-serif-wuxia">{getQuestionHint()}</p>
                <div className="mt-2 text-right">
                  <button
                    onClick={handleRetryQuestion}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs font-bold transition-colors cursor-pointer shadow"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Thử Sức Lại Lần 2 (Chỉ 1 cơ hội)</span>
                  </button>
                </div>
              </div>
            )}

            {/* Full explanation when answered correctly OR when 2nd attempt was wrong */}
            {(isCurrentCorrect || !canRetry) && (
              <div className="mt-2 pt-2 border-t border-white/10 text-neutral-200 font-serif-wuxia">
                {!isCurrentCorrect && (
                  <p className="font-bold text-amber-300 mb-1">
                    🎯 Đáp án đúng: {currentQ.correctAnswer}
                  </p>
                )}
                <p className="text-neutral-300 leading-relaxed">
                  <strong className="text-amber-400">Giải thích tâm pháp: </strong>
                  {currentQ.explanation}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-400">
          Chính xác: <strong className="text-amber-300 font-mono">{totalCorrectCount}</strong> / {questions.length}
        </div>

        <div>
          {/* Next Question button when answered and either correct or exhausted 2 attempts */}
          {isAnswered && (isCurrentCorrect || !canRetry) && (
            <button
              onClick={handleNextQuestion}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-amber-200 bg-neutral-900 border border-amber-600/60 hover:bg-neutral-800 transition-colors shadow cursor-pointer active:scale-95"
            >
              <span>{currentIdx < questions.length - 1 ? 'Chiêu Tiếp Theo' : 'Xem Tổng Kết Chiến Tích'}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          )}
        </div>
      </div>

      {/* Modal: View Full Reading Passage */}
      {showPassageModal && unit.readingPassage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-neutral-950 border-2 border-amber-600/70 rounded-2xl p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <h3 className="text-base sm:text-lg font-bold font-wuxia text-amber-200">
                  {unit.readingPassage.title}
                </h3>
              </div>
              <button
                onClick={() => setShowPassageModal(false)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg bg-neutral-900 border border-neutral-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-200 font-serif-wuxia leading-relaxed">
              {unit.readingPassage.fullText.split('\n\n').map((para, i) => (
                <p key={i} className="indent-4 text-justify">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-right">
              <button
                onClick={() => setShowPassageModal(false)}
                className="px-5 py-2 rounded-xl text-xs font-bold font-mono bg-amber-600 text-white hover:bg-amber-500 cursor-pointer"
              >
                Đóng & Tiếp Tục Làm Bài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
