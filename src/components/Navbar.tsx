import React from 'react';
import { UserProfile } from '../types/game';
import { calculateLevel } from '../lib/storage';
import { Volume2, VolumeX, Flame, Heart, Award, Users, BookOpen, Sparkles, Database } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface NavbarProps {
  profile: UserProfile;
  onOpenProfile: () => void;
  onOpenAvatarStudio: () => void;
  onOpenFriends: () => void;
  onOpenQuests: () => void;
  onOpenLeaderboard: () => void;
  onOpenSupabase: () => void;
  onReturnToMap: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenProfile,
  onOpenAvatarStudio,
  onOpenFriends,
  onOpenQuests,
  onOpenLeaderboard,
  onOpenSupabase,
  onReturnToMap,
  isMuted,
  onToggleMute
}) => {
  const { level, currentXp, nextLevelXp } = calculateLevel(profile.xp);
  const xpPercent = Math.min(100, Math.round((currentXp / nextLevelXp) * 100));

  return (
    <header className="sticky top-0 z-40 bg-[#0d0e14]/95 backdrop-blur-md border-b border-red-900/40 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div 
          onClick={onReturnToMap}
          className="flex items-center gap-3 cursor-pointer group transition-transform active:scale-95"
        >
          <div className="relative w-10 h-10 rounded-full border-2 border-red-600 bg-red-950/80 flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:border-amber-400 transition-colors">
            <span className="text-xl">🗡️</span>
            <div className="absolute -bottom-1 -right-1 bg-amber-600 text-black text-[9px] font-bold px-1 rounded-full border border-amber-300">
              K{profile.grade}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-wuxia font-extrabold text-sm sm:text-base text-red-100 tracking-wider group-hover:text-amber-300 transition-colors">
                GLOBAL SUCCESS ENGLISH WULIN
              </span>
              <span className="hidden md:inline-block text-[10px] bg-red-900/60 text-red-200 border border-red-700/50 px-2 py-0.5 rounded font-mono">
                THPT 10 - 11 - 12
              </span>
            </div>
            <p className="text-[11px] text-amber-500/90 font-serif-wuxia tracking-wide hidden sm:block">
              Tam Niên Anh Ngữ – Nhất Thống Võ Lâm
            </p>
          </div>
        </div>

        {/* Player Stats Bar */}
        <div className="flex items-center gap-3 md:gap-5 order-3 sm:order-2">
          {/* Avatar & Title */}
          <div 
            onClick={onOpenProfile}
            className="flex items-center gap-2.5 bg-neutral-900/80 hover:bg-neutral-800/90 border border-amber-600/30 hover:border-amber-500/60 px-2.5 py-1.5 rounded-lg cursor-pointer transition-all shadow-md"
            title="Xem hồ sơ hiệp khách"
          >
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.nickname}
                className="w-9 h-9 rounded-full object-cover border border-amber-400 shadow-inner"
              />
              <span className="absolute -top-1 -left-1 bg-red-700 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-amber-300">
                {level}
              </span>
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold text-amber-200 truncate max-w-[140px] flex items-center gap-1">
                <span className="text-neutral-400 font-normal text-[11px]">Xin chào,</span>
                <span className="text-amber-300 font-wuxia truncate">{profile.nickname}</span>
              </div>
              <div className="text-[10px] text-red-300/80 truncate max-w-[140px]">
                Hiệp khách • {profile.title}
              </div>
            </div>
          </div>

          {/* Công Lực (XP Bar) */}
          <div className="hidden sm:flex flex-col w-28 md:w-36">
            <div className="flex justify-between text-[10px] mb-0.5">
              <span className="text-amber-400 font-semibold flex items-center gap-1">
                <span>⚡</span> Công lực
              </span>
              <span className="text-neutral-400 font-mono text-[9px]">
                {currentXp}/{nextLevelXp}
              </span>
            </div>
            <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800 p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-amber-600 to-yellow-400 rounded-full transition-all duration-500"
                style={{ width: `${xpPercent}%` }}
              />
            </div>
          </div>

          {/* Sinh Lực (HP) */}
          <div className="flex items-center gap-1 bg-red-950/60 border border-red-800/50 px-2 py-1 rounded text-[11px] text-red-200 font-mono">
            <span className="text-red-400">❤️</span>
            <span>{profile.hp}</span>
          </div>

          {/* Nội Lực (Energy) */}
          <div className="hidden md:flex items-center gap-1 bg-blue-950/60 border border-blue-800/50 px-2 py-1 rounded text-[11px] text-blue-200 font-mono">
            <span className="text-blue-400">✨</span>
            <span>{profile.energy}/{profile.maxEnergy}</span>
          </div>

          {/* Chuỗi đăng nhập (Streak) */}
          <div className="flex items-center gap-1 bg-amber-950/50 border border-amber-700/40 px-2 py-1 rounded text-[11px] text-amber-300 font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>{profile.streak} ngày</span>
          </div>
        </div>

        {/* Action Menu Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 order-2 sm:order-3">
          {/* Avatar Studio */}
          <button
            onClick={onOpenAvatarStudio}
            className="flex items-center gap-1 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-amber-200 border border-amber-500/50 hover:border-amber-400 px-2.5 py-1.5 rounded-md text-xs font-semibold shadow-md transition-all active:scale-95"
            title="Đổi Avatar Võ Lâm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Avatar</span>
          </button>

          {/* Friends & Send Love */}
          <button
            onClick={onOpenFriends}
            className="relative flex items-center justify-center p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-red-300 transition-colors"
            title="Bằng Hữu & Gửi Tâm Ý"
          >
            <Heart className="w-4 h-4 text-red-400" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              5
            </span>
          </button>

          {/* Daily Quests */}
          <button
            onClick={onOpenQuests}
            className="relative flex items-center justify-center p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-amber-300 transition-colors"
            title="Nhiệm Vụ Sư Môn"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
          </button>

          {/* Leaderboard */}
          <button
            onClick={onOpenLeaderboard}
            className="flex items-center justify-center p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-amber-300 transition-colors"
            title="Võ Lâm Cao Thủ (Xếp Hạng)"
          >
            <Award className="w-4 h-4 text-yellow-400" />
          </button>

          {/* Cloud Sync / Supabase */}
          <button
            onClick={onOpenSupabase}
            className="flex items-center justify-center p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-emerald-400 hover:text-emerald-300 transition-colors"
            title="Kết Nối Supabase Cloud"
          >
            <Database className="w-4 h-4" />
          </button>

          {/* Sound Mute Toggle */}
          <button
            onClick={() => {
              onToggleMute();
              soundEffects.playSwordSlash();
            }}
            className="flex items-center justify-center p-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white transition-colors"
            title={isMuted ? 'Bật âm thanh võ hiệp' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-neutral-500" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
