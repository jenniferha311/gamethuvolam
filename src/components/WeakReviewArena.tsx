import React, { useState, useEffect } from 'react';
import { UserProfile, Grade } from '../types/game';
import { getWeakQuestions, recordWeakQuestionResult, removeWeakQuestion, WeakQuestionItem } from '../lib/storage';
import { soundEffects } from '../lib/audio';
import { Target, CheckCircle2, RotateCcw, ArrowRight, ChevronLeft, Shield, AlertTriangle, Check, X, Sparkles, BookOpen } from 'lucide-react';

interface WeakReviewArenaProps {
  profile: UserProfile;
  onBackToMap: () => void;
  onAddXp: (amount: number) => void;
  onShowAchievementToast?: (title: string, subtitle: string, icon?: string) => void;
}

function shuffleOptions<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const WeakReviewArena: React.FC<WeakReviewArenaProps> = ({
  profile,
  onBackToMap,
  onAddXp,
  onShowAchievementToast
}) => {
  const [weakList, setWeakList] = useState<WeakQuestionItem[]>(() => getWeakQuestions());
  const [activeTab, setActiveTab] = useState<'practicing' | 'mastered'>('practicing');
  const [isDrilling, setIsDrilling] = useState(false);
  const [drillIdx, setDrillIdx] = useState(0);

  // Drill question state
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // Filter items
  const activeQuestions = weakList.filter((q) => !q.mastered);
  const masteredQuestions = weakList.filter((q) => q.mastered);
  const currentDrillQ = activeQuestions[drillIdx];

  // Refresh shuffled options when question index changes
  useEffect(() => {
    if (isDrilling && currentDrillQ && currentDrillQ.options) {
      setShuffledOptions(shuffleOptions(currentDrillQ.options));
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  }, [isDrilling, drillIdx, currentDrillQ]);

  const handleStartDrill = () => {
    if (activeQuestions.length === 0) return;
    setDrillIdx(0);
    setIsDrilling(true);
    soundEffects.playSwordSlash();
  };

  const handleSelectOption = (option: string) => {
    if (isAnswered || !currentDrillQ) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === currentDrillQ.correctAnswer;
    recordWeakQuestionResult(currentDrillQ.id, isCorrect);

    if (isCorrect) {
      soundEffects.playCriticalHit();
      onAddXp(15);
      const isNowMastered = currentDrillQ.consecutiveCorrect + 1 >= 2;
      if (isNowMastered && onShowAchievementToast) {
        onShowAchievementToast('✅ Đã Thành Thạo Chiêu Thức!', `Hiệp khách đã khắc phục hoàn toàn điểm yếu câu hỏi vừa rồi!`);
      }
    } else {
      soundEffects.playDamageTaken();
    }

    // Refresh list in memory
    setWeakList(getWeakQuestions());
  };

  const handleNextDrill = () => {
    if (drillIdx < activeQuestions.length - 1) {
      setDrillIdx((prev) => prev + 1);
    } else {
      // Done drill loop
      setIsDrilling(false);
      soundEffects.playVictoryFanfare();
    }
  };

  const handleRemove = (id: string) => {
    removeWeakQuestion(id);
    setWeakList(getWeakQuestions());
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 text-left">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-300 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Bản Đồ Giang Hồ</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-rose-950/80 text-rose-300 border border-rose-800/80 px-3 py-1 rounded-full font-mono flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-rose-400" />
            <span>{activeQuestions.length} Câu Cần Củng Cố</span>
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="p-6 rounded-2xl border border-rose-900/60 bg-gradient-to-r from-[#20080c] via-[#140608] to-[#0c0d15] shadow-xl mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold border border-rose-500/80 text-rose-300 font-mono">
                RETRIEVAL PRACTICE
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                Phương pháp Ôn Tập Chủ Động
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-rose-100 tracking-wide flex items-center gap-2">
              <span>🔥 Luyện Lại Điểm Yếu (Ôn Câu Sai)</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mt-1 max-w-2xl leading-relaxed">
              Hệ thống tự động ghi nhận những khẩu quyết và bài đọc mà hiệp khách <strong className="text-amber-300">{profile.nickname}</strong> từng trả lời chưa chính xác. Luyện tập đúng 2 lần liên tiếp để chuyển sang cảnh giới <strong className="text-emerald-400">✅ Đã Thành Thạo</strong>!
            </p>
          </div>

          {!isDrilling && activeQuestions.length > 0 && (
            <button
              onClick={handleStartDrill}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 border border-amber-300 shadow-xl cursor-pointer active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Bắt Đầu Ôn Lại Ngay ({activeQuestions.length} câu)</span>
            </button>
          )}
        </div>
      </div>

      {/* DRILL MODE VIEW */}
      {isDrilling && currentDrillQ ? (
        <div className="wuxia-card rounded-2xl p-6 sm:p-8 mb-6 border border-neutral-700 shadow-2xl bg-gradient-to-b from-[#181818] to-[#0e0e0e]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-amber-400">
              Đang ôn câu {drillIdx + 1} / {activeQuestions.length} • Khối {currentDrillQ.grade} ({currentDrillQ.unitTitle})
            </span>
            <span className="text-xs font-mono text-rose-400">
              Đã sai {currentDrillQ.wrongCount} lần trước đây
            </span>
          </div>

          <p className="text-base sm:text-lg font-medium text-neutral-100 font-serif-wuxia leading-relaxed mb-6 whitespace-pre-line">
            {currentDrillQ.prompt}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {shuffledOptions.map((opt, idx) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === currentDrillQ.correctAnswer;

              let style = 'bg-neutral-900/90 border-neutral-700 text-neutral-200 hover:border-amber-400 hover:bg-neutral-800';
              if (isAnswered) {
                if (isCorrect) {
                  style = 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold ring-1 ring-emerald-500';
                } else if (isSelected && !isCorrect) {
                  style = 'bg-red-950/90 border-red-500 text-red-200 ring-1 ring-red-500';
                } else {
                  style = 'bg-neutral-950/50 border-neutral-800 text-neutral-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(opt)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between text-xs sm:text-sm ${
                    isAnswered ? 'cursor-default' : 'cursor-pointer'
                  } ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-md bg-black/40 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-amber-300">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isAnswered && isCorrect && <Check className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <X className="w-5 h-5 text-red-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          {isAnswered && (
            <div className={`p-4 rounded-xl border text-left text-xs sm:text-sm mb-4 animate-fadeIn ${
              selectedAnswer === currentDrillQ.correctAnswer
                ? 'bg-emerald-950/40 border-emerald-600/60 text-emerald-200'
                : 'bg-red-950/40 border-red-600/60 text-red-200'
            }`}>
              <div className="font-bold mb-1 flex items-center gap-2">
                {selectedAnswer === currentDrillQ.correctAnswer ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Chính xác tuyệt đối! (+15 Công Lực)</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span>Chưa chính xác! Cần lưu tâm khẩu quyết này.</span>
                  </>
                )}
              </div>
              <p className="font-serif-wuxia text-neutral-300 mt-1">
                <strong className="text-amber-400">Giải thích: </strong>
                {currentDrillQ.explanation}
              </p>
            </div>
          )}

          {isAnswered && (
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setIsDrilling(false)}
                className="text-xs text-neutral-400 hover:text-white"
              >
                Tạm dừng ôn tập
              </button>
              <button
                onClick={handleNextDrill}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 cursor-pointer shadow"
              >
                <span>{drillIdx < activeQuestions.length - 1 ? 'Câu Ôn Tiếp Theo' : 'Hoàn Thành Đợt Ôn'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* LIST VIEW: TABS & ITEMS */
        <div>
          {/* Tab Switcher */}
          <div className="flex items-center gap-3 mb-4 border-b border-neutral-800 pb-3">
            <button
              onClick={() => setActiveTab('practicing')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold font-mono transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'practicing'
                  ? 'bg-rose-900/60 text-rose-200 border border-rose-600'
                  : 'text-neutral-400 hover:text-neutral-200 bg-neutral-900'
              }`}
            >
              <span>⚔️ Cần Luyện Lại ({activeQuestions.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('mastered')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold font-mono transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'mastered'
                  ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-600'
                  : 'text-neutral-400 hover:text-neutral-200 bg-neutral-900'
              }`}
            >
              <span>✅ Đã Thành Thạo ({masteredQuestions.length})</span>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'practicing' ? (
            activeQuestions.length === 0 ? (
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-12 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-lg font-bold font-wuxia text-amber-200 mb-1">
                  Không Có Điểm Yếu Cần Củng Cố!
                </h3>
                <p className="text-xs text-neutral-400 font-serif-wuxia max-w-md mx-auto">
                  Hiệp khách đã làm chủ toàn bộ các câu hỏi đã gặp. Hãy tiếp tục tiến nhập các cửa ải mới để thử thách công lực!
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {activeQuestions.map((q, i) => (
                  <div
                    key={q.id || i}
                    className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:border-rose-700/60 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800/60">
                          Khối {q.grade} • {q.unitTitle}
                        </span>
                        <span className="text-[11px] text-neutral-400 font-mono">
                          Sai {q.wrongCount} lần • Tiến độ: {q.consecutiveCorrect}/2 đúng liên tiếp
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemove(q.id)}
                        className="text-neutral-500 hover:text-rose-400 text-xs cursor-pointer p-1"
                        title="Bỏ qua câu này"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-200 font-serif-wuxia line-clamp-2 mb-2">
                      {q.prompt}
                    </p>

                    <div className="text-[11px] text-neutral-400 font-serif-wuxia">
                      <strong className="text-amber-400">Đáp án chuẩn: </strong>
                      <span className="text-emerald-300 font-semibold">{q.correctAnswer}</span>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : masteredQuestions.length === 0 ? (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-12 text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-lg font-bold font-wuxia text-neutral-300 mb-1">
                Chưa Có Câu Thành Thạo
              </h3>
              <p className="text-xs text-neutral-400 font-serif-wuxia">
                Trả lời đúng 2 lần liên tiếp trong mục &quot;Luyện Lại Điểm Yếu&quot; để đưa câu hỏi vào danh sách này.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {masteredQuestions.map((q, i) => (
                <div
                  key={q.id || i}
                  className="p-4 rounded-xl border border-emerald-900/40 bg-emerald-950/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Đã Tinh Thông • Khối {q.grade}</span>
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {q.unitTitle}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 font-serif-wuxia mb-1">
                    {q.prompt}
                  </p>
                  <p className="text-[11px] text-emerald-400 font-mono">
                    Đáp án đúng: {q.correctAnswer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
