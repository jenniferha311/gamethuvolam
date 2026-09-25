import React, { useState, useEffect, useRef } from 'react';
import { UnitRealm, VocabularyItem, UserProfile } from '../types/game';
import { Sword, Check, X, Clock, Flame, RotateCcw, ArrowRight, Sparkles, AlertTriangle, Shield } from 'lucide-react';
import { soundEffects } from '../lib/audio';
import { saveWeakQuestion } from '../lib/storage';
import { recordQuestionResult } from '../lib/analytics';

interface VocabPracticeTabProps {
  unit: UnitRealm;
  profile?: UserProfile;
  onProceedToQuiz: () => void;
  onAddXp: (amount: number) => void;
  onDeductHp?: (amount: number) => void;
  onShowToast?: (title: string, subtitle: string, icon?: string) => void;
}

interface DynamicQuestion {
  id: string;
  typeTitle: string;
  typeBadge: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  targetWord: VocabularyItem;
}

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const VocabPracticeTab: React.FC<VocabPracticeTabProps> = ({
  unit,
  profile,
  onProceedToQuiz,
  onAddXp,
  onDeductHp,
  onShowToast
}) => {
  const [questions, setQuestions] = useState<DynamicQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25);
  const [streak, setStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate 10 diverse practice questions from the unit's vocabulary
  const generateQuestions = (): DynamicQuestion[] => {
    const vocab = unit.vocabulary;
    if (vocab.length < 4) return [];

    const shuffledVocab = shuffleArray(vocab).slice(0, 10);
    const generated: DynamicQuestion[] = [];

    shuffledVocab.forEach((item, index) => {
      // Pick 3 distractors
      const otherVocab = vocab.filter((v) => v.id !== item.id);
      const distractors = shuffleArray(otherVocab).slice(0, 3);

      const activityType = index % 5;

      if (activityType === 0) {
        // Type 1: English -> Vietnamese
        const options = shuffleArray([item.meaningVi, ...distractors.map((d) => d.meaningVi)]);
        generated.push({
          id: `drill_${unit.id}_${item.id}_${index}`,
          typeTitle: '1. Nhận Diện Ý Nghĩa (English → Vietnamese)',
          typeBadge: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60',
          prompt: `Khẩu quyết tiếng Anh: "${item.word}" (${item.ipa}) [${item.partOfSpeech}]. Hãy chọn ý nghĩa tiếng Việt chuẩn xác nhất:`,
          options,
          correctAnswer: item.meaningVi,
          explanation: `Từ "${item.word}" có nghĩa là: "${item.meaningVi}". Ví dụ: "${item.example}" (${item.exampleVi || ''})`,
          targetWord: item
        });
      } else if (activityType === 1) {
        // Type 2: Vietnamese -> English
        const options = shuffleArray([item.word, ...distractors.map((d) => d.word)]);
        generated.push({
          id: `drill_${unit.id}_${item.id}_${index}`,
          typeTitle: '2. Xuất Chiêu Từ Khóa (Vietnamese → English)',
          typeBadge: 'bg-blue-950/80 text-blue-300 border-blue-700/60',
          prompt: `Tâm pháp tiếng Việt: "${item.meaningVi}". Hãy chọn từ vựng tiếng Anh tương ứng:`,
          options,
          correctAnswer: item.word,
          explanation: `Ý nghĩa "${item.meaningVi}" tương ứng với từ "${item.word}" (${item.ipa}).`,
          targetWord: item
        });
      } else if (activityType === 2 && item.example) {
        // Type 3: Fill in the missing word in example sentence
        // Replace target word in example with blank '_____'
        const regex = new RegExp(`\\b${item.word.split(' ')[0]}\\w*`, 'gi');
        const blankedSentence = item.example.replace(regex, '_____');

        const options = shuffleArray([item.word, ...distractors.map((d) => d.word)]);
        generated.push({
          id: `drill_${unit.id}_${item.id}_${index}`,
          typeTitle: '3. Điền Khẩu Quyết Vào Ngữ Cảnh (Fill in the Blank)',
          typeBadge: 'bg-purple-950/80 text-purple-300 border-purple-700/60',
          prompt: `Hãy chọn từ chuẩn xác nhất để điền vào chỗ trống:\n\n"${blankedSentence}"`,
          options,
          correctAnswer: item.word,
          explanation: `Câu hoàn chỉnh: "${item.example}". Dịch nghĩa: ${item.exampleVi || item.meaningVi}`,
          targetWord: item
        });
      } else if (activityType === 3 && item.collocation) {
        // Type 4: Collocation match
        const options = shuffleArray([item.collocation, ...distractors.map((d) => d.collocation || `make ${d.word}`)]);
        generated.push({
          id: `drill_${unit.id}_${item.id}_${index}`,
          typeTitle: '4. Kết Hợp Khẩu Quyết (Collocation Mastery)',
          typeBadge: 'bg-amber-950/80 text-amber-300 border-amber-700/60',
          prompt: `Cụm từ cố định (Collocation) chuẩn nhất đi với từ "${item.word}" là gì?`,
          options,
          correctAnswer: item.collocation,
          explanation: `Khẩu quyết chuẩn: "${item.collocation}". Đây là cụm từ tự nhiên theo tiêu chuẩn Global Success.`,
          targetWord: item
        });
      } else {
        // Type 5: Definition / Usage comprehension
        const options = shuffleArray([item.meaningVi, ...distractors.map((d) => d.meaningVi)]);
        generated.push({
          id: `drill_${unit.id}_${item.id}_${index}`,
          typeTitle: '5. Tinh Thông Định Nghĩa (Definition Drill)',
          typeBadge: 'bg-rose-950/80 text-rose-300 border-rose-700/60',
          prompt: `Trong chủ đề "${unit.title}", từ vựng "${item.word}" biểu thị khái niệm nào dưới đây?`,
          options,
          correctAnswer: item.meaningVi,
          explanation: `Trong chủ đề này, "${item.word}" chỉ: "${item.meaningVi}". Ví dụ: "${item.example}".`,
          targetWord: item
        });
      }
    });

    return generated;
  };

  const handleRestart = () => {
    const freshQs = generateQuestions();
    setQuestions(freshQs);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsProcessing(false);
    setTimeLeft(25);
    setStreak(0);
    setCorrectCount(0);
    setWrongCount(0);
    setIsFinished(false);
  };

  useEffect(() => {
    handleRestart();
  }, [unit.id]);

  const currentQ = questions[currentIdx];

  // Timer logic
  useEffect(() => {
    if (isFinished || !currentQ || isAnswered || isProcessing) return;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeExpired();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIdx, isAnswered, isProcessing, isFinished]);

  const handleTimeExpired = () => {
    if (isAnswered || isProcessing) return;
    setIsProcessing(true);
    setSelectedAnswer(null);
    setIsAnswered(true);
    soundEffects.playDamageTaken();
    setWrongCount((prev) => prev + 1);
    setStreak(0);

    if (onDeductHp) onDeductHp(5);

    saveWeakQuestion({
      id: currentQ.id,
      unitId: unit.id,
      unitTitle: unit.realmName,
      grade: unit.grade,
      prompt: currentQ.prompt,
      options: currentQ.options,
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
    setIsProcessing(false);
  };

  const handleSelectOption = (option: string) => {
    if (isAnswered || isProcessing) return;
    setIsProcessing(true);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === currentQ.correctAnswer;

    if (isCorrect) {
      soundEffects.playCorrectAnswer();
      setCorrectCount((prev) => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);

      const xpGained = 20 + Math.min(newStreak * 2, 10);
      onAddXp(xpGained);

      recordQuestionResult(true, {
        id: currentQ.id,
        prompt: currentQ.prompt,
        options: currentQ.options,
        correctAnswer: currentQ.correctAnswer,
        grade: unit.grade,
        unitId: unit.id,
        unitTitle: unit.realmName
      });
    } else {
      soundEffects.playDamageTaken();
      setWrongCount((prev) => prev + 1);
      setStreak(0);

      if (onDeductHp) onDeductHp(5);

      // Save automatically into weak questions
      saveWeakQuestion({
        id: currentQ.id,
        unitId: unit.id,
        unitTitle: unit.realmName,
        grade: unit.grade,
        prompt: currentQ.prompt,
        options: currentQ.options,
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
    }

    setIsProcessing(false);
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsProcessing(false);
      setTimeLeft(25);
    } else {
      setIsFinished(true);
      soundEffects.playVictoryFanfare();
      if (onShowToast) {
        onShowToast('⚔️ Hoàn Thành Vòng Luyện Công!', `Chính xác ${correctCount + (selectedAnswer === currentQ.correctAnswer ? 1 : 0)} / ${questions.length} chiêu thức.`);
      }
    }
  };

  if (isFinished) {
    const accuracy = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="max-w-2xl mx-auto py-8 px-4 text-center animate-fadeIn">
        <div className="p-8 rounded-2xl bg-gradient-to-b from-[#1c1917] to-[#0c0a09] border-2 border-amber-600/70 shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-950/80 border border-amber-500/80 flex items-center justify-center text-3xl">
            ⚔️
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-amber-200 mb-2">
            Chiến Tích Vòng Luyện Công
          </h2>
          <p className="text-xs text-neutral-300 font-serif-wuxia mb-6">
            Hiệp khách đã hoàn thành {questions.length} thử thách xoay tua từ vựng của <strong className="text-amber-300">{unit.realmName}</strong>.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6 font-mono text-center">
            <div className="bg-black/50 p-3.5 rounded-xl border border-neutral-800">
              <span className="text-[11px] text-neutral-400 block mb-1">Chính Xác</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-400">{accuracy}%</span>
            </div>
            <div className="bg-black/50 p-3.5 rounded-xl border border-neutral-800">
              <span className="text-[11px] text-neutral-400 block mb-1">Đúng / Tổng</span>
              <span className="text-xl sm:text-2xl font-bold text-amber-300">{correctCount} / {questions.length}</span>
            </div>
            <div className="bg-black/50 p-3.5 rounded-xl border border-neutral-800">
              <span className="text-[11px] text-neutral-400 block mb-1">Lưu Ôn Lại</span>
              <span className="text-xl sm:text-2xl font-bold text-rose-400">{wrongCount} câu</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>Luyện Lại Vòng Này</span>
            </button>

            <button
              onClick={onProceedToQuiz}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 border border-amber-300 shadow flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <span>Vào Khảo Hạch Quiz (🎯)</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto py-4 text-left animate-fadeIn">
      {/* Top Banner */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono mb-1 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/60">
          <Sword className="w-3.5 h-3.5" />
          <span>PHẦN 3: LUYỆN CÔNG THỰC CHIẾN TỪ VỰNG</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-amber-100">
          Đa Dạng Hóa Bài Tập Xoay Tua
        </h2>
        <p className="text-xs text-neutral-400 font-serif-wuxia mt-1">
          Luyện tập phản xạ từ vựng: Anh ➔ Việt, Việt ➔ Anh, Điền khuyết, Collocation và Định nghĩa. Đáp án được đảo ngẫu nhiên.
        </p>
      </div>

      {/* Progress & Stats Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 px-1">
        <span>Chiêu thức {currentIdx + 1} / {questions.length}</span>
        <div className="flex items-center gap-3">
          {streak > 1 && (
            <span className="flex items-center gap-1 text-amber-400 font-bold animate-pulse">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span>Chuỗi {streak}x</span>
            </span>
          )}
          <span className="text-emerald-400">Đúng: {correctCount}</span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-gradient-to-b from-[#191b26] to-[#0f111a] rounded-2xl border-2 border-neutral-800 p-6 sm:p-8 shadow-2xl mb-6">
        {/* Timer Bar */}
        <div className="mb-5">
          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
            <span className="text-neutral-400 flex items-center gap-1.5">
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
              style={{ width: `${(timeLeft / 25) * 100}%` }}
            />
          </div>
        </div>

        {/* Activity Type Badge */}
        <div className="mb-3">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${currentQ.typeBadge}`}>
            {currentQ.typeTitle}
          </span>
        </div>

        {/* Prompt */}
        <div className="mb-6">
          <p className="text-base sm:text-lg font-medium text-neutral-100 leading-relaxed font-serif-wuxia whitespace-pre-line">
            {currentQ.prompt}
          </p>
        </div>

        {/* Options Grid (Randomized) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isTarget = option === currentQ.correctAnswer;

            let buttonStyle = 'bg-neutral-900/90 border-neutral-700 text-neutral-200 hover:border-amber-400 hover:bg-neutral-800';

            if (isAnswered) {
              if (isTarget) {
                buttonStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold ring-1 ring-emerald-500';
              } else if (isSelected && !isTarget) {
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

                {isAnswered && isTarget && <Check className="w-5 h-5 text-emerald-400 shrink-0" />}
                {isAnswered && isSelected && !isTarget && <X className="w-5 h-5 text-red-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Feedback Banner */}
        {isAnswered && (
          <div
            className={`p-4 rounded-xl border text-left text-xs sm:text-sm animate-fadeIn ${
              isCorrect
                ? 'bg-emerald-950/40 border-emerald-600/60 text-emerald-200'
                : 'bg-red-950/40 border-red-600/60 text-red-200'
            }`}
          >
            <div className="font-bold mb-1 flex items-center gap-2">
              {isCorrect ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {profile?.nickname ? `${profile.nickname} xuất chiêu chuẩn xác!` : 'Xuất Chiêu Chuẩn Xác!'} (+20 Công Lực)
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

            <div className="mt-2 pt-2 border-t border-white/10 text-neutral-200 font-serif-wuxia">
              {!isCorrect && (
                <p className="font-bold text-amber-300 mb-1">
                  🎯 Đáp án đúng: {currentQ.correctAnswer}
                </p>
              )}
              <p className="text-neutral-300 leading-relaxed">
                <strong className="text-amber-400">Giải thích tâm pháp: </strong>
                {currentQ.explanation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-400">
          Chính xác: <strong className="text-amber-300 font-mono">{correctCount}</strong> / {questions.length}
        </div>

        {isAnswered && (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-amber-200 bg-neutral-900 border border-amber-600/60 hover:bg-neutral-800 transition-colors shadow cursor-pointer active:scale-95"
          >
            <span>{currentIdx < questions.length - 1 ? 'Chiêu Tiếp Theo' : 'Xem Chiến Tích Luyện Công'}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        )}
      </div>
    </div>
  );
};
