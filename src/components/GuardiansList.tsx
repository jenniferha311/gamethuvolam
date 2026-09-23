import React from 'react';
import { GUARDIANS } from '../data/characters';
import { Shield, Sparkles, MessageCircle } from 'lucide-react';
import { soundEffects } from '../lib/audio';

export const GuardiansList: React.FC = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-wuxia text-amber-200 flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            NGŨ ĐẠI HỘ PHÁP VÕ LÂM
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-serif-wuxia">
            Năm vị đại cao thủ trấn giữ ngũ hành tri thức, đồng hành cùng Hồng Y Tông Chủ Hà Ánh Phượng
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {GUARDIANS.map((guardian) => (
          <div
            key={guardian.id}
            className="group relative rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-500/60 bg-gradient-to-b from-neutral-900 to-neutral-950 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-950/20"
          >
            {/* Guardian Image */}
            <div className="relative h-60 w-full overflow-hidden bg-black">
              <img
                src={guardian.image}
                alt={guardian.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />
              
              {/* Specialty Badge */}
              <div 
                className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-md border border-white/20"
                style={{ backgroundColor: guardian.colorHex }}
              >
                {guardian.specialty.split(' - ')[0]}
              </div>
            </div>

            {/* Content */}
            <div className="p-3.5 text-left">
              <div className="text-[10px] font-mono text-amber-400 tracking-wider mb-0.5">
                {guardian.colorName}
              </div>
              <h3 className="text-base font-bold text-neutral-100 font-wuxia group-hover:text-amber-300 transition-colors">
                {guardian.name}
              </h3>
              <p className="text-[11px] text-neutral-400 font-serif-wuxia italic mb-2 line-clamp-2">
                “{guardian.quote}”
              </p>
              
              <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px]">
                <span className="text-neutral-500 text-[10px]">Lĩnh vực chủ trì:</span>
                <span className="text-amber-300/90 font-medium text-[10px]">
                  {guardian.specialty.split(' - ')[1] || guardian.specialty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
