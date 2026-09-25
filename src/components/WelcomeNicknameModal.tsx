import React, { useState } from 'react';
import { Sparkles, Sword, User, AlertCircle, Shield, X, BookOpen, Trophy, Compass, ArrowRight } from 'lucide-react';
import { soundEffects } from '../lib/audio';
import { UNITS_DATA } from '../data/units';

interface WelcomeNicknameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveNickname: (nickname: string) => void;
  initialNickname?: string;
  onSelectGrade?: (grade: 10 | 11 | 12) => void;
  onOpenQuests?: () => void;
  onOpenLeaderboard?: () => void;
}

export const WelcomeNicknameModal: React.FC<WelcomeNicknameModalProps> = ({
  isOpen,
  onClose,
  onSaveNickname,
  initialNickname = '',
  onSelectGrade,
  onOpenQuests,
  onOpenLeaderboard
}) => {
  const [name, setName] = useState(
    initialNickname && initialNickname !== 'Hiệp Khách' && initialNickname !== 'Lệnh Hồ Hiệp'
      ? initialNickname
      : ''
  );
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Hãy nhập tên của bạn trước nhé!');
      soundEffects.playDamageTaken();
      return;
    }

    setError('');
    soundEffects.playVictoryFanfare();
    onSaveNickname(trimmed);
  };

  const handleLinkToGrade = (grade: 10 | 11 | 12) => {
    const trimmed = name.trim();
    if (trimmed) {
      onSaveNickname(trimmed);
    }
    if (onSelectGrade) {
      onSelectGrade(grade);
    }
    onClose();
  };

  const handleLinkToQuests = () => {
    const trimmed = name.trim();
    if (trimmed) onSaveNickname(trimmed);
    onClose();
    if (onOpenQuests) onOpenQuests();
  };

  const handleLinkToLeaderboard = () => {
    const trimmed = name.trim();
    if (trimmed) onSaveNickname(trimmed);
    onClose();
    if (onOpenLeaderboard) onOpenLeaderboard();
  };

  const g10Units = UNITS_DATA.filter((u) => u.grade === 10);
  const g11Units = UNITS_DATA.filter((u) => u.grade === 11);
  const g12Units = UNITS_DATA.filter((u) => u.grade === 12);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Decorative ambient glow */}
      <div className="absolute w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-xl my-auto rounded-2xl border-2 border-amber-500/80 bg-gradient-to-b from-[#1c0c11] via-[#12070c] to-[#0b0c12] p-5 sm:p-7 text-neutral-100 shadow-[0_0_50px_rgba(220,38,38,0.35)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-amber-300 hover:bg-neutral-800/80 transition-colors"
          title="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Ornament Badge */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-950/90 border border-red-600 text-amber-300 shadow-md mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>CỬA SỔ ĐẶT TÊN & DANH HIỆP GIANG HỒ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-red-300 tracking-wide">
            Nhập tên của bạn để bắt đầu hành trình
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mt-1.5 leading-relaxed max-w-md mx-auto">
            Đặt tên để khắc ghi danh tính trên Bảng Phong Thần và cá nhân hóa lộ trình tu luyện Anh ngữ Global Success.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="flex items-center justify-between text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5 font-mono">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-400" />
                Tên/Nickname của bạn
              </span>
              <span className="text-[11px] text-neutral-400 font-normal lowercase">
                (tối đa 24 ký tự)
              </span>
            </label>

            <div className="relative">
              <input
                type="text"
                autoFocus
                value={name}
                maxLength={24}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Nhập tên của bạn (tối đa 24 ký tự)..."
                className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 border text-base text-amber-100 placeholder:text-neutral-500 font-medium focus:outline-none transition-all ${
                  error
                    ? 'border-red-500 ring-2 ring-red-500/40 bg-red-950/20'
                    : 'border-amber-500/60 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/40'
                }`}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-1.5 text-xs text-red-400 mt-2 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-wuxia font-extrabold text-sm sm:text-base text-amber-100 bg-gradient-to-r from-red-700 via-red-600 to-amber-600 hover:from-red-600 hover:to-amber-500 border border-amber-400 shadow-xl shadow-red-950/60 transition-all duration-200 cursor-pointer"
            >
              <Sword className="w-4 h-4 text-amber-300" />
              <span>Bắt đầu Hành Trình</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 rounded-xl border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800/80 text-xs font-serif-wuxia transition-colors"
            >
              Khám phá trước
            </button>
          </div>
        </form>

        {/* Navigation Quick Links Below Name Box */}
        <div className="mt-5 pt-4 border-t border-neutral-800">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold text-amber-300/90 font-wuxia flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              Khám Phá Nhanh Nội Dung & Cửa Ải Các Khối Lớp:
            </span>
            <span className="text-[10px] text-neutral-400 font-mono">
              Global Success THPT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
            {/* Grade 10 Card */}
            <button
              type="button"
              onClick={() => handleLinkToGrade(10)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-950/60 to-neutral-900 border border-emerald-700/60 hover:border-emerald-400 text-left transition-all group"
            >
              <div className="flex items-center justify-between text-xs font-bold text-emerald-300 font-wuxia">
                <span>Khối 10: Sơ Nhập</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                {g10Units.length} Cửa Ải • {g10Units.reduce((acc, u) => acc + u.vocabulary.length, 0)} Từ Vựng
              </div>
              <div className="text-[10px] text-emerald-200/70 truncate mt-1">
                Family Life, Environment, Music...
              </div>
            </button>

            {/* Grade 11 Card */}
            <button
              type="button"
              onClick={() => handleLinkToGrade(11)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-blue-950/60 to-neutral-900 border border-blue-700/60 hover:border-blue-400 text-left transition-all group"
            >
              <div className="flex items-center justify-between text-xs font-bold text-blue-300 font-wuxia">
                <span>Khối 11: Hành Tẩu</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                {g11Units.length} Cửa Ải • {g11Units.reduce((acc, u) => acc + u.vocabulary.length, 0)} Từ Vựng
              </div>
              <div className="text-[10px] text-blue-200/70 truncate mt-1">
                Healthy Life, Generation Gap, Cities...
              </div>
            </button>

            {/* Grade 12 Card */}
            <button
              type="button"
              onClick={() => handleLinkToGrade(12)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-red-950/60 to-neutral-900 border border-red-700/60 hover:border-red-400 text-left transition-all group"
            >
              <div className="flex items-center justify-between text-xs font-bold text-red-300 font-wuxia">
                <span>Khối 12: Cao Thủ</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                {g12Units.length} Cửa Ải • {g12Units.reduce((acc, u) => acc + u.vocabulary.length, 0)} Từ Vựng
              </div>
              <div className="text-[10px] text-red-200/70 truncate mt-1">
                Life Stories, Multicultural, Green Living...
              </div>
            </button>
          </div>

          {/* Quick link chips for Quests & Leaderboard */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleLinkToQuests}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-300 hover:text-amber-200 transition-colors font-serif-wuxia text-[11px]"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Nhiệm Vụ Hằng Ngày</span>
              </button>
              <button
                type="button"
                onClick={handleLinkToLeaderboard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-300 hover:text-amber-200 transition-colors font-serif-wuxia text-[11px]"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Bảng Phong Thần</span>
              </button>
            </div>
            <div className="text-[11px] text-neutral-500 font-mono">
              Tự lưu tên trên trình duyệt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
