import React, { useState } from 'react';
import { UnitRealm, PracticeQuestion, UserProfile } from '../types/game';
import { Check, X, Shield, ArrowRight, RotateCcw, Award, ChevronLeft, BookOpen, FileText, ExternalLink } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface PracticeArenaProps {
  unit: UnitRealm;
  onProceedToBoss: () => void;
  onBackToFlashcards: () => void;
  onAddXp: (amount: number) => void;
  profile?: UserProfile;
}

export const PracticeArena: React.FC<PracticeArenaProps> = ({
  unit,
  onProceedToBoss,
  onBackToFlashcards,
  onAddXp,
  profile
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [combo, setCombo] = useState(0);
  const [showPassageModal, setShowPassageModal] = useState(false);

  const questions: PracticeQuestion[] = unit.practice;
  const currentQ = questions[currentIdx];

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === currentQ.correctAnswer;
    if (isCorrect) {
      soundEffects.playCriticalHit();
      setCorrectCount((prev) => prev + 1);
      setCombo((prev) => prev + 1);
      onAddXp(20 + combo * 5);
    } else {
      soundEffects.playDamageTaken();
      setCombo(0);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setCombo(0);
  };

  const isLastQuestion = currentIdx === questions.length - 1;

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

        <div className="flex items-center gap-2">
          {combo > 1 && (
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/50 px-2.5 py-0.5 rounded-full font-bold animate-pulse font-mono">
              🔥 Combo x{combo}!
            </span>
          )}
          <span className="text-xs text-neutral-400 font-mono">
            Câu {currentIdx + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono mb-1">
          <Shield className="w-3.5 h-3.5" />
          <span>BƯỚC 2: LUYỆN CÔNG THỰC CHIẾN</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-amber-100">
          Vận Dụng Khẩu Quyết & Bài Đọc Hiểu
        </h2>
        <p className="text-xs text-neutral-400 font-serif-wuxia mt-1">
          {profile?.nickname ? <strong className="text-amber-300">{profile.nickname}</strong> : 'Hiệp khách'} hãy vận dụng từ vựng, từ đồng nghĩa/trái nghĩa và đọc hiểu đoạn văn để hóa giải các chiêu thức khảo thí.
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
      <div className="wuxia-card rounded-2xl p-6 sm:p-8 mb-6 border border-neutral-700/80 shadow-2xl text-left bg-gradient-to-b from-[#191919] to-[#0f0f0f]">
        {/* Category Badge */}
        <div className="mb-3 flex items-center justify-between">
          {getCategoryBadge()}
          <span className="text-xs font-mono text-neutral-500">
            {currentIdx + 1}/{questions.length}
          </span>
        </div>

        {/* Passage Excerpt if available */}
        {currentQ.passageExcerpt && (
          <div className="mb-4 p-4 rounded-xl bg-amber-950/30 border-l-4 border-amber-500 text-neutral-200 text-xs sm:text-sm font-serif-wuxia leading-relaxed">
            <div className="text-[11px] font-mono text-amber-300 font-bold uppercase mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Trích đoạn văn bản (Reading Excerpt):</span>
            </div>
            <p className="italic text-neutral-200 pl-2">
              "{currentQ.passageExcerpt}"
            </p>
          </div>
        )}

        {/* Question Prompt */}
        <div className="mb-5">
          <p className="text-base sm:text-lg font-medium text-neutral-100 leading-relaxed font-serif-wuxia whitespace-pre-line">
            {currentQ.prompt}
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {currentQ.options?.map((option, idx) => {
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
                disabled={isAnswered}
                onClick={() => handleSelectOption(option)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between text-xs sm:text-sm cursor-pointer ${buttonStyle}`}
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

        {/* Explanation Banner */}
        {isAnswered && (
          <div className={`p-4 rounded-xl border text-left text-xs sm:text-sm animate-fadeIn ${
            selectedAnswer === currentQ.correctAnswer
              ? 'bg-emerald-950/40 border-emerald-600/60 text-emerald-200'
              : 'bg-red-950/40 border-red-600/60 text-red-200'
          }`}>
            <div className="font-bold mb-1 flex items-center gap-1.5">
              {selectedAnswer === currentQ.correctAnswer ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{profile?.nickname ? `${profile.nickname} xuất chiêu chuẩn xác!` : 'Xuất Chiêu Chuẩn Xác!'} (+20 Công Lực)</span>
                </>
              ) : (
                <>
                  <X className="w-4 h-4 text-red-400" />
                  <span>{profile?.nickname ? `Tẩu hỏa nhập ma rồi ${profile.nickname}! Khẩu quyết chuẩn xác là:` : 'Tẩu Hỏa Nhập Ma! Khẩu quyết chuẩn xác là:'}</span>
                </>
              )}
            </div>
            <p className="font-serif-wuxia text-neutral-300 mt-1">
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-400">
          Chính xác: <strong className="text-amber-300 font-mono">{correctCount}</strong> / {questions.length}
        </div>

        <div>
          {isAnswered && !isLastQuestion && (
            <button
              onClick={handleNextQuestion}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-amber-200 bg-neutral-900 border border-amber-600/60 hover:bg-neutral-800 transition-colors shadow cursor-pointer"
            >
              <span>Chiêu Tiếp Theo</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          )}

          {isAnswered && isLastQuestion && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleRestart}
                className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-mono bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Luyện Lại</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.playVictoryFanfare();
                  onProceedToBoss();
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 border border-amber-300 shadow-xl cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Quyết Đấu Boss ({unit.bossName}) →</span>
              </button>
            </div>
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
