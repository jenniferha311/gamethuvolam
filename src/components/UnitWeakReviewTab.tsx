import React, { useState, useEffect } from 'react';
import { UnitRealm, UserProfile } from '../types/game';
import { Target, CheckCircle2, RotateCcw, Award, Check, X, ShieldAlert, Sparkles, Flame, ArrowRight } from 'lucide-react';
import { soundEffects } from '../lib/audio';
import {
  getWeakQuestions,
  recordWeakQuestionResult,
  WeakQuestionItem,
  removeWeakQuestion
} from '../lib/storage';

interface UnitWeakReviewTabProps {
  unit: UnitRealm;
  profile?: UserProfile;
  onProceedToBoss: () => void;
  onAddXp: (amount: number) => void;
  onShowToast?: (title: string, subtitle: string, icon?: string) => void;
  onOpenGlobalWeakReview?: () => void;
}

function shuffleOptions<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const UnitWeakReviewTab: React.FC<UnitWeakReviewTabProps> = ({
  unit,
  profile,
  onProceedToBoss,
  onAddXp,
  onShowToast,
  onOpenGlobalWeakReview
}) => {
  const [unitWeakQuestions, setUnitWeakQuestions] = useState<WeakQuestionItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  // Load weak questions for this specific unit
  const loadUnitQuestions = () => {
    const all = getWeakQuestions();
    const forThisUnit = all.filter((q) => q.unitId === unit.id);
    setUnitWeakQuestions(forThisUnit);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsProcessing(false);
    setFeedback(null);
  };

  useEffect(() => {
    loadUnitQuestions();
  }, [unit.id]);

  const currentQ = unitWeakQuestions[currentIdx];

  // Shuffle options for the active question
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  useEffect(() => {
    if (currentQ?.options) {
      setShuffledOptions(shuffleOptions(currentQ.options));
    }
  }, [currentQ]);

  const handleSelectOption = (option: string) => {
    if (isAnswered || isProcessing || !currentQ) return;
    setIsProcessing(true);
    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === currentQ.correctAnswer;

    if (isCorrect) {
      soundEffects.playCorrectAnswer();
      const updated = recordWeakQuestionResult(currentQ.id, true);

      if (updated?.mastered) {
        onAddXp(25);
        setFeedback({
          isCorrect: true,
          text: '🎉 Xuất sắc! Ngươi đã trả lời đúng 2 lần liên tiếp. Kiến thức này đã đạt trạng thái: ✅ ĐÃ THÀNH THẠO (+25 Công Lực)!'
        });
        if (onShowToast) {
          onShowToast('✅ Đã Thành Thạo Chiêu Thức!', `Ngươi đã khắc phục hoàn toàn điểm yếu trong ải ${unit.realmName}!`);
        }
      } else {
        onAddXp(15);
        setFeedback({
          isCorrect: true,
          text: '⚔️ Trả lời đúng! Hãy đúng thêm 1 lần nữa để chuyển sang trạng thái ✅ ĐÃ THÀNH THẠO (+15 Công Lực).'
        });
      }
    } else {
      soundEffects.playDamageTaken();
      recordWeakQuestionResult(currentQ.id, false);
      setFeedback({
        isCorrect: false,
        text: 'Kiến thức này chưa vững. Hãy ghi nhớ giải thích tâm pháp bên dưới và tiếp tục tôi luyện!'
      });
    }

    setIsProcessing(false);
  };

  const handleNext = () => {
    const all = getWeakQuestions();
    const forThisUnit = all.filter((q) => q.unitId === unit.id);
    setUnitWeakQuestions(forThisUnit);

    if (currentIdx < forThisUnit.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsProcessing(false);
      setFeedback(null);
    } else {
      setCurrentIdx(0);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsProcessing(false);
      setFeedback(null);
    }
  };

  const handleRemoveQuestion = (id: string) => {
    removeWeakQuestion(id);
    loadUnitQuestions();
  };

  // If no weak questions for this unit
  if (unitWeakQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4 text-center animate-fadeIn">
        <div className="p-8 rounded-2xl bg-gradient-to-b from-[#181a26] to-[#0c0d15] border-2 border-emerald-600/60 shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-950/80 border border-emerald-500/80 flex items-center justify-center text-3xl">
            🏆
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-emerald-300 mb-2">
            Tuyệt Đỉnh Công Phu!
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mb-6 leading-relaxed max-w-lg mx-auto">
            {profile?.nickname ? <strong className="text-amber-300">Hiệp khách {profile.nickname}</strong> : 'Hiệp khách'} hiện không có câu hỏi nào cần ôn lại trong <strong className="text-amber-300">{unit.realmName}</strong>. Toàn bộ khẩu quyết đã được lĩnh hội vững vàng!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {onOpenGlobalWeakReview && (
              <button
                onClick={onOpenGlobalWeakReview}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-mono font-bold cursor-pointer transition-colors"
              >
                Xem Điểm Yếu Toàn Giang Hồ
              </button>
            )}

            <button
              onClick={onProceedToBoss}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:from-red-500 hover:to-amber-400 border border-amber-300 shadow flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <span>Quyết Đấu Boss (👹)</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-4 text-left animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs text-rose-400 font-mono mb-1 bg-rose-950/40 px-3 py-1 rounded-full border border-rose-800/60">
          <Target className="w-3.5 h-3.5" />
          <span>PHẦN 5: ÔN LUYỆN ĐIỂM YẾU CỬA ẢI ({unitWeakQuestions.length} CÂU CẦN TÔI LUYỆN)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-amber-100">
          Luyện Lại Điểm Yếu – Hóa Giải Chỗ Trũng
        </h2>
        <p className="text-xs text-neutral-400 font-serif-wuxia mt-1">
          Hệ thống tự động lưu các câu làm sai và từ đánh dấu "Chưa nhớ" trong ải này. Trả lời đúng 2 lần liên tiếp để chuyển sang trạng thái <strong className="text-emerald-400">✅ Đã Thành Thạo</strong>.
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 px-1">
        <span>Câu yếu {currentIdx + 1} / {unitWeakQuestions.length}</span>
        <div className="flex items-center gap-2">
          {currentQ.consecutiveCorrect > 0 && (
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              Đúng liên tiếp: {currentQ.consecutiveCorrect}/2
            </span>
          )}
          {currentQ.mastered && (
            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 font-bold text-[10px]">
              ✅ ĐÃ THÀNH THẠO
            </span>
          )}
        </div>
      </div>

      {/* Drill Card */}
      <div className="bg-gradient-to-b from-[#1c1822] to-[#100e16] rounded-2xl border-2 border-rose-900/60 p-6 sm:p-8 shadow-2xl mb-6">
        <div className="mb-4">
          <p className="text-base sm:text-lg font-medium text-neutral-100 leading-relaxed font-serif-wuxia whitespace-pre-line">
            {currentQ.prompt}
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {shuffledOptions.map((option, idx) => {
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

        {/* Feedback */}
        {feedback && (
          <div
            className={`p-4 rounded-xl border text-left text-xs sm:text-sm animate-fadeIn ${
              feedback.isCorrect
                ? 'bg-emerald-950/40 border-emerald-600/60 text-emerald-200'
                : 'bg-red-950/40 border-red-600/60 text-red-200'
            }`}
          >
            <p className="font-bold mb-1">{feedback.text}</p>
            <div className="mt-2 pt-2 border-t border-white/10 text-neutral-300 font-serif-wuxia">
              {!feedback.isCorrect && (
                <p className="font-bold text-amber-300 mb-1">
                  🎯 Đáp án đúng: {currentQ.correctAnswer}
                </p>
              )}
              <p>
                <strong className="text-amber-400">Giải thích tâm pháp: </strong>
                {currentQ.explanation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => handleRemoveQuestion(currentQ.id)}
          className="text-xs text-neutral-500 hover:text-rose-400 font-mono underline cursor-pointer transition-colors"
        >
          Xóa câu này khỏi danh sách yếu
        </button>

        {isAnswered && (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-amber-200 bg-neutral-900 border border-amber-600/60 hover:bg-neutral-800 transition-colors shadow cursor-pointer active:scale-95"
          >
            <span>{currentIdx < unitWeakQuestions.length - 1 ? 'Câu Yếu Tiếp Theo' : 'Quay Lại Câu Đầu'}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        )}
      </div>
    </div>
  );
};
