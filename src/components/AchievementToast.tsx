import React, { useEffect } from 'react';
import { Award, X, Sparkles, Star } from 'lucide-react';
import { soundEffects } from '../lib/audio';

export interface ToastData {
  id: string;
  title: string;
  subtitle: string;
  icon?: string;
  type?: 'achievement' | 'victory' | 'streak';
}

interface AchievementToastProps {
  toast: ToastData | null;
  onClose: () => void;
}

export const AchievementToast: React.FC<AchievementToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (!toast) return;

    soundEffects.playVictoryFanfare();
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 max-w-sm w-full animate-bounce sm:animate-none">
      <div className="relative rounded-2xl border-2 border-amber-400 bg-gradient-to-r from-[#1f0b10] via-[#160a0f] to-[#0c0d15] p-4 shadow-[0_10px_35px_rgba(234,179,8,0.35)] text-left backdrop-blur-md">
        {/* Glow */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-500/20 to-red-600/20 blur pointer-events-none" />

        <div className="relative flex items-start gap-3">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-amber-500/20 to-red-950 border border-amber-400/80 flex items-center justify-center text-2xl shadow-inner">
            {toast.icon || '🏆'}
          </div>

          <div className="flex-1 pr-4">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
              <span>{toast.type === 'streak' ? 'Đại Thần Đắc Lực' : 'Chiến Tích Võ Lâm'}</span>
            </div>
            <h4 className="text-sm font-extrabold font-wuxia text-amber-100 leading-snug">
              {toast.title}
            </h4>
            <p className="text-xs text-neutral-300 font-serif-wuxia mt-0.5 leading-relaxed">
              {toast.subtitle}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800/80 transition-colors"
            title="Đóng thông báo"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3.5s progress bar */}
        <div className="mt-2.5 h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-400 to-red-500 animate-[shrink_4s_linear_forwards]" />
        </div>
      </div>
    </div>
  );
};
