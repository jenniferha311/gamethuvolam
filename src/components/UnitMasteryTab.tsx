import React from 'react';
import { UnitRealm, UserProfile } from '../types/game';
import { Star, Crown, CheckCircle2, RotateCcw, ArrowRight, Shield, Award, BookOpen, Sword, Skull, Target, Flame } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface UnitMasteryTabProps {
  unit: UnitRealm;
  profile: UserProfile;
  onRetakeVocab: () => void;
  onRetakePractice: () => void;
  onRetakeBoss: () => void;
  onOpenWeakReview: () => void;
  onNextUnit?: () => void;
  onBackToMap: () => void;
}

export const UnitMasteryTab: React.FC<UnitMasteryTabProps> = ({
  unit,
  profile,
  onRetakeVocab,
  onRetakePractice,
  onRetakeBoss,
  onOpenWeakReview,
  onNextUnit,
  onBackToMap
}) => {
  const completedData = profile.completedUnits?.[unit.id];
  const isCompleted = !!completedData?.completed;
  const stars = completedData?.stars || (isCompleted ? 3 : 1);
  const score = completedData?.score || (isCompleted ? 100 : 0);

  let statusBadge = (
    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-neutral-800 text-neutral-400 border border-neutral-700 flex items-center gap-1.5">
      <span>⚔️ Đang Tôi Luyện</span>
    </span>
  );

  if (isCompleted && stars === 3) {
    statusBadge = (
      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500 flex items-center gap-1.5 shadow-lg shadow-amber-950/50">
        <Crown className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        <span>👑 Mastered (Tinh Thông Tuyệt Luân)</span>
      </span>
    );
  } else if (isCompleted) {
    statusBadge = (
      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-600 flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        <span>✅ Đã Hoàn Thành Cửa Ải</span>
      </span>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-4 text-left animate-fadeIn">
      {/* Top Banner */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono mb-1 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/60">
          <Award className="w-3.5 h-3.5" />
          <span>PHẦN 7: BẢNG VÀNG CHIẾN TÍCH & TINH THÔNG</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-amber-100">
          Cảnh Giới Tinh Thông – {unit.realmName}
        </h2>
        <p className="text-xs text-neutral-400 font-serif-wuxia mt-1">
          Đánh giá mức độ thông thạo kiến thức của {profile?.nickname ? <strong className="text-amber-300">hiệp khách {profile.nickname}</strong> : 'hiệp khách'} tại cửa ải này.
        </p>
      </div>

      {/* Main Mastery Card */}
      <div className="bg-gradient-to-b from-[#1c1917] via-[#121014] to-[#0a090c] rounded-2xl border-2 border-amber-600/70 p-6 sm:p-8 shadow-2xl mb-8 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-700 font-mono font-bold text-xs text-amber-300">
                Unit {unit.unit} • Khối {unit.grade}
              </span>
              {statusBadge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-wuxia text-white">
              {unit.title}
            </h3>
            <p className="text-xs text-neutral-400 font-serif-wuxia mt-1">
              Hộ pháp: <strong className="text-neutral-200">{unit.guardianName}</strong> • Đầu lĩnh: <strong className="text-red-400">{unit.bossName}</strong>
            </p>
          </div>

          {/* Golden Stars */}
          <div className="flex flex-col items-center sm:items-end gap-1">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((starIdx) => (
                <Star
                  key={starIdx}
                  className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform ${
                    starIdx <= stars
                      ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] scale-110'
                      : 'text-neutral-700'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-amber-300/90 mt-1">
              {stars === 3 ? 'Tam Tinh Tuyệt Kỹ' : stars === 2 ? 'Song Tinh Đắc Đạo' : 'Nhất Tinh Sơ Thành'}
            </span>
          </div>
        </div>

        {/* Breakdown Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-black/40 border border-neutral-800 p-3.5 rounded-xl text-center">
            <BookOpen className="w-5 h-5 mx-auto mb-1 text-amber-400" />
            <span className="text-[11px] text-neutral-400 block">Ngân Hàng Từ Vựng</span>
            <span className="text-lg font-bold font-mono text-amber-200">{unit.vocabulary.length} Từ Khóa</span>
          </div>

          <div className="bg-black/40 border border-neutral-800 p-3.5 rounded-xl text-center">
            <Sword className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
            <span className="text-[11px] text-neutral-400 block">Câu Khảo Hạch Quiz</span>
            <span className="text-lg font-bold font-mono text-cyan-200">{unit.practice.length} Chiêu Thức</span>
          </div>

          <div className="bg-black/40 border border-neutral-800 p-3.5 rounded-xl text-center">
            <Skull className="w-5 h-5 mx-auto mb-1 text-red-400" />
            <span className="text-[11px] text-neutral-400 block">Quyết Đấu Boss</span>
            <span className="text-lg font-bold font-mono text-red-200">
              {isCompleted ? 'Đã Trảm Tướng' : 'Chưa Hạ Gục'}
            </span>
          </div>

          <div className="bg-black/40 border border-neutral-800 p-3.5 rounded-xl text-center">
            <Award className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
            <span className="text-[11px] text-neutral-400 block">Điểm Tinh Thông</span>
            <span className="text-lg font-bold font-mono text-emerald-200">{score} / 100</span>
          </div>
        </div>

        {/* Philosophy Note */}
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 text-xs sm:text-sm text-neutral-300 font-serif-wuxia leading-relaxed mb-6">
          <strong className="text-amber-300 block mb-1">📜 Lời Răn Sư Môn:</strong>
          Võ học và Anh ngữ không phải học một lần là xong, mà là hành trình tôi luyện thường xuyên. Cửa ải đã hoàn thành luôn mở cửa để hiệp khách bấm <strong className="text-amber-200">"LUYỆN LẠI"</strong> hoặc <strong className="text-amber-200">"ÔN LẠI ẢI NÀY"</strong> bất cứ lúc nào nhằm đạt cảnh giới phản xạ xuất quỷ nhập thần!
        </div>

        {/* Action Buttons for Self-Practice & Replay */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => {
              soundEffects.playCardFlip();
              onRetakeVocab();
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-mono font-bold cursor-pointer transition-all active:scale-95 shadow"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>LUYỆN LẠI TỪ VỰNG</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playSwordSlash();
              onRetakePractice();
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-mono font-bold cursor-pointer transition-all active:scale-95 shadow"
          >
            <Sword className="w-4 h-4 text-cyan-400" />
            <span>ÔN LẠI ẢI NÀY (QUIZ)</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playSwordSlash();
              onOpenWeakReview();
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-700/80 text-rose-200 text-xs font-mono font-bold cursor-pointer transition-all active:scale-95 shadow"
          >
            <Target className="w-4 h-4 text-rose-400" />
            <span>LUYỆN CÂU SAI CÒN LẠI</span>
          </button>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          onClick={onBackToMap}
          className="text-xs text-neutral-400 hover:text-white font-mono flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>← Về Bản Đồ Giang Hồ</span>
        </button>

        {onNextUnit && (
          <button
            onClick={onNextUnit}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 border border-amber-300 shadow flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <span>Tiến Lên Cửa Ải Kế Tiếp</span>
            <ArrowRight className="w-4 h-4 text-neutral-950" />
          </button>
        )}
      </div>
    </div>
  );
};
