import React from 'react';
import { UnitRealm, UserProfile } from '../types/game';
import { UNITS_DATA } from '../data/units';
import { MapPin, Lock, Unlock, Star, Skull, Shield, ArrowRight } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface WorldMapProps {
  grade: 10 | 11 | 12;
  profile: UserProfile;
  onSelectUnit: (unit: UnitRealm) => void;
}

export const WorldMap: React.FC<WorldMapProps> = ({
  grade,
  profile,
  onSelectUnit
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
          desc: 'Rời núi hạ sơn, xông pha trăm ngả đường, hoàn thiện khẩu quyết giao tiếp và tư duy ngữ liệu.',
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

  return (
    <div className="mb-10">
      {/* Stage Banner */}
      <div className={`p-6 rounded-2xl border border-neutral-800 bg-gradient-to-r ${stage.themeColor} shadow-xl mb-6 text-left`}>
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
            <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mt-1 max-w-2xl">
              Hiệp khách <strong className="text-amber-300">{profile.nickname}</strong>: {stage.desc}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-neutral-900/80 border border-neutral-700/60 px-4 py-2 rounded-xl">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <div className="text-right">
              <div className="text-xs font-bold text-neutral-200">Chiến Tích Của {profile.nickname}</div>
              <div className="text-[11px] text-amber-300/80 font-mono">
                {Object.values(profile.completedUnits || {}).filter(u => u.completed).length} / {units.length} Cửa Ải Đã Phá
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Realm Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {units.map((unit, index) => {
          const isCompleted = profile.completedUnits?.[unit.id]?.completed;
          const stars = profile.completedUnits?.[unit.id]?.stars || 0;
          // In quick play or MVP, let player access any unit or first unlocked
          const isUnlocked = true;

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
                  : 'bg-neutral-900/70 border-neutral-800 hover:border-red-700/60 hover:shadow-lg hover:shadow-red-950/30'
              } hover:-translate-y-1`}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: unit.guardianColor }}
              />

              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-700 flex items-center justify-center font-bold text-amber-300 text-xs font-mono">
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

                {/* Stars / Completion Status */}
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

              {/* Story Teaser */}
              <p className="text-xs text-neutral-300 font-serif-wuxia line-clamp-2 mb-4 leading-relaxed">
                {unit.storyIntro}
              </p>

              {/* Guardian & Boss badges */}
              <div className="flex items-center justify-between text-[11px] pt-3 border-t border-neutral-800/80">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Shield className="w-3.5 h-3.5" style={{ color: unit.guardianColor }} />
                  <span>Hộ pháp: <strong className="text-neutral-200">{unit.guardianName}</strong></span>
                </div>

                <div className="flex items-center gap-1.5 text-red-400 font-mono text-[10px]">
                  <Skull className="w-3.5 h-3.5" />
                  <span>{unit.bossName}</span>
                </div>
              </div>

              {/* Enter Button */}
              <div className="mt-3 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:text-amber-300">
                <span className="text-[11px] text-neutral-500 font-mono">
                  + {unit.xpReward} Công lực
                </span>
                <span className="flex items-center gap-1">
                  Khiêu chiến bí cảnh <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
