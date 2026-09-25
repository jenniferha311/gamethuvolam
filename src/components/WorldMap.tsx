import React from 'react';
import { UnitRealm, UserProfile } from '../types/game';
import { UNITS_DATA } from '../data/units';
import { MapPin, Lock, Unlock, Star, Skull, Shield, ArrowRight, RotateCcw, Target, Crown, CheckCircle } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface WorldMapProps {
  grade: 10 | 11 | 12;
  profile: UserProfile;
  onSelectUnit: (unit: UnitRealm) => void;
  onOpenWeakReview?: () => void;
}

export const WorldMap: React.FC<WorldMapProps> = ({
  grade,
  profile,
  onSelectUnit,
  onOpenWeakReview
}) => {
  const units = UNITS_DATA.filter((u) => u.grade === grade);

  const getStageInfo = (g: 10 | 11 | 12) => {
    switch (g) {
      case 10:
        return {
          title: 'SƠ NHẬP GIANG HỒ',
          desc: 'Bước đầu lập chí võ lâm, xây dựng nền tảng từ vựng và ngữ pháp căn bản vững như bàn thạch.',
          themeColor: 'from-emerald-950 via-neutral-900 to-neutral-950',
          badgeColor: 'border-emerald-500 text-emerald-400'
        };
      case 11:
        return {
          title: 'HÀNH TẨU VÕ LÂM',
          desc: 'Rời núi hạ sơn, xông pha trăm ngả đường, hoàn thiện khẩu quyết giao tiếp và tư duy ngữ liệu B2/C1.',
          themeColor: 'from-blue-950 via-neutral-900 to-neutral-950',
          badgeColor: 'border-blue-500 text-blue-400'
        };
      case 12:
        return {
          title: 'NHẤT ĐẠI CAO THỦ',
          desc: 'Đỉnh phong quyết chiến, thâu tóm toàn bộ tinh hoa văn chương và cấu trúc đỉnh cao, sẵn sàng đại đăng khoa.',
          themeColor: 'from-red-950 via-neutral-900 to-neutral-950',
          badgeColor: 'border-red-500 text-red-400'
        };
    }
  };

  const stage = getStageInfo(grade);
  const completedCount = units.filter((u) => profile.completedUnits?.[u.id]?.completed).length;

  return (
    <div className="mb-10 text-left">
      {/* Stage Banner */}
      <div className={`p-6 rounded-2xl border border-neutral-800 bg-gradient-to-r ${stage.themeColor} shadow-xl mb-6`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${stage.badgeColor}`}>
                Cảnh Giới Khối {grade}
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                {units.length} Phân Vực / Cửa Ải
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-amber-100 tracking-wide">
              {stage.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mt-1 max-w-2xl leading-relaxed">
              Hiệp khách <strong className="text-amber-300">{profile.nickname}</strong>: {stage.desc}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {onOpenWeakReview && (
              <button
                onClick={onOpenWeakReview}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-700/60 text-rose-200 text-xs font-mono font-bold transition-all shadow cursor-pointer active:scale-95"
              >
                <Target className="w-4 h-4 text-rose-400" />
                <span>Luyện Lại Điểm Yếu</span>
              </button>
            )}

            <div className="flex items-center gap-2 bg-neutral-900/80 border border-neutral-700/60 px-4 py-2 rounded-xl">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <div className="text-right">
                <div className="text-xs font-bold text-neutral-200">Chiến Tích Khối {grade}</div>
                <div className="text-[11px] text-amber-300/80 font-mono">
                  {completedCount} / {units.length} Cửa Ải Đã Phá
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progression Journey Flow Indicator */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-neutral-300">
          <span className="text-neutral-400">Lộ trình học tập:</span>
          <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-amber-300">
            1. Tàng Kinh Các (Từ vựng & Đọc hiểu)
          </span>
          <span className="text-neutral-600">→</span>
          <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-cyan-300">
            2. Luyện Công Thực Chiến (Quiz đảo đáp án)
          </span>
          <span className="text-neutral-600">→</span>
          <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-red-300">
            3. Phá Quan Trảm Tướng (Boss Battle)
          </span>
          <span className="text-neutral-600">→</span>
          <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-emerald-300">
            4. Tinh Thông & Khai Mở Ải Tiếp Theo
          </span>
        </div>
      </div>

      {/* Realm Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {units.map((unit, index) => {
          const isCompleted = profile.completedUnits?.[unit.id]?.completed;
          const stars = profile.completedUnits?.[unit.id]?.stars || 0;
          
          // Learning progression: Unit 1 unlocked, or previous unit completed
          const prevUnit = index > 0 ? units[index - 1] : null;
          const isUnlocked = index === 0 || (prevUnit && profile.completedUnits?.[prevUnit.id]?.completed) || isCompleted;

          // Status label
          let statusBadge = (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-neutral-800 text-neutral-400 border border-neutral-700 flex items-center gap-1">
              <Lock className="w-3 h-3 text-neutral-500" />
              <span>🔒 Chưa Mở</span>
            </span>
          );

          if (isCompleted && stars === 3) {
            statusBadge = (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-500/80 flex items-center gap-1">
                <Crown className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span>👑 Mastered (Tinh Thông)</span>
              </span>
            );
          } else if (isCompleted) {
            statusBadge = (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-600/80 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>✅ Đã Hoàn Thành</span>
              </span>
            );
          } else if (isUnlocked) {
            statusBadge = (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-950/80 text-blue-300 border border-blue-600/80 flex items-center gap-1">
                <Unlock className="w-3 h-3 text-cyan-400" />
                <span>⚔️ Đang Luyện</span>
              </span>
            );
          }

          return (
            <div
              key={unit.id}
              onClick={() => {
                soundEffects.playSwordSlash();
                onSelectUnit(unit);
              }}
              className={`group relative rounded-xl border p-5 text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                isCompleted
                  ? 'bg-neutral-900/90 border-amber-500/50 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-950/40'
                  : isUnlocked
                  ? 'bg-neutral-900/80 border-neutral-700/80 hover:border-red-600/80 hover:shadow-lg hover:shadow-red-950/30'
                  : 'bg-neutral-950/60 border-neutral-900 opacity-75 hover:opacity-90 hover:border-neutral-700'
              } hover:-translate-y-1`}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: unit.guardianColor }}
              />

              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-700 flex items-center justify-center font-bold text-amber-300 text-xs font-mono shrink-0">
                    U{unit.unit}
                  </span>
                  <div>
                    <span className="text-[11px] text-neutral-400 font-mono block">
                      Khối {unit.grade} • {unit.title}
                    </span>
                    <h3 className="text-base font-bold text-neutral-100 font-wuxia group-hover:text-amber-300 transition-colors">
                      {unit.realmName}
                    </h3>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3].map((starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-3.5 h-3.5 ${
                        starIdx <= stars
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-neutral-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              <div className="mb-3">
                {statusBadge}
              </div>

              {/* Story Teaser */}
              <p className="text-xs text-neutral-300 font-serif-wuxia line-clamp-2 mb-4 leading-relaxed">
                {unit.storyIntro}
              </p>

              {/* Guardian & Boss badges */}
              <div className="flex items-center justify-between text-[11px] pt-3 border-t border-neutral-800/80">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Shield className="w-3.5 h-3.5 shrink-0" style={{ color: unit.guardianColor }} />
                  <span>Hộ pháp: <strong className="text-neutral-200">{unit.guardianName}</strong></span>
                </div>

                <div className="flex items-center gap-1.5 text-red-400 font-mono text-[10px]">
                  <Skull className="w-3.5 h-3.5 shrink-0" />
                  <span>{unit.bossName}</span>
                </div>
              </div>

              {/* Enter / Replay Button */}
              <div className="mt-3 flex items-center justify-between text-xs font-semibold">
                <span className="text-[11px] text-neutral-500 font-mono">
                  + {unit.xpReward} Công lực
                </span>
                {isCompleted ? (
                  <span className="flex items-center gap-1 text-emerald-400 group-hover:text-emerald-300 font-mono">
                    <RotateCcw className="w-3 h-3" />
                    <span>Luyện lại / Ôn lại ải này →</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-amber-400 group-hover:text-amber-300">
                    Khiêu chiến bí cảnh <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
