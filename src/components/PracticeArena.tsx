import React, { useState } from 'react';
import { UnitRealm, PracticeQuestion } from '../types/game';
import { Check, X, Shield, ArrowRight, RotateCcw, Award, ChevronLeft } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface PracticeArenaProps {
  unit: UnitRealm;
  onProceedToBoss: () => void;
  onBackToFlashcards: () => void;
  onAddXp: (amount: number) => void;
}

export const PracticeArena: React.FC<PracticeArenaProps> = ({
  unit,
  onProceedToBoss,
  onBackToFlashcards,
  onAddXp
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [combo, setCombo] = useState(0);

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

  const isLastQuestion = currentIdx === questions.length - 1;

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBackToFlashcards}
          className="flex items-center gap-1 text-xs text-neutral-400 hover:text-amber-300 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Tàng Kinh Các</span>
        </button>

        <div className="flex items-center gap-2">
          {combo > 1 && (
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/50 px-2.5 py-0.5 rounded-full font-bold animate-pulse">
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
          Vận Dụng Khẩu Quyết Võ Học
        </h2>
        <p className="text-xs text-neutral-400 font-serif-wuxia mt-1">
          Lựa chọn chiêu thức ngữ nghĩa chính xác để gia tăng nội lực và hóa giải trận thế.
        </p>
      </div>

      {/* Question Card */}
      <div className="wuxia-card rounded-2xl p-6 sm:p-8 mb-6 border border-neutral-700/80 shadow-2xl text-left">
        <div className="mb-4">
          <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-2">
            Đề Mục Khảo Thí:
          </span>
          <p className="text-base sm:text-xl font-medium text-neutral-100 leading-relaxed font-serif-wuxia">
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
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between text-sm sm:text-base cursor-pointer ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-black/40 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-amber-300">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>

                {isAnswered && isCorrect && <Check className="w-5 h-5 text-emerald-400" />}
                {isAnswered && isSelected && !isCorrect && <X className="w-5 h-5 text-red-400" />}
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
                  <span>Xuất Chiêu Chuẩn Xác! (+20 Công Lực)</span>
                </>
              ) : (
                <>
                  <X className="w-4 h-4 text-red-400" />
                  <span>Tẩu Hỏa Nhập Ma! Hãy xem lại khẩu quyết:</span>
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
          Chính xác: <strong className="text-amber-300">{correctCount}</strong> / {questions.length}
        </div>

        {isAnswered && (
          <div>
            {!isLastQuestion ? (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-100 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 cursor-pointer"
              >
                <span>Chiêu Tiếp Theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  soundEffects.playVictoryFanfare();
                  onProceedToBoss();
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 border border-amber-400 shadow-lg animate-bounce cursor-pointer"
              >
                <span>Tiến Đánh Trảm Tướng (Boss Battle) ⚔️</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
