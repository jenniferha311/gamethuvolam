import React, { useState } from 'react';
import { UserProfile } from '../types/game';
import { calculateLevel } from '../lib/storage';
import { X, Award, Shield, Heart, Flame, Star, Sparkles, Edit3, Check, AlertCircle } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onOpenAvatarStudio: () => void;
  onUpdateNickname: (newNickname: string) => void;
}

const ALL_AVAILABLE_BADGES = [
  { key: 'Tân Thủ Giang Hồ', title: 'Tân Thủ Giang Hồ', desc: 'Bước đầu gia nhập thế giới English Wulin', icon: '🌱' },
  { key: 'Bí Kíp Từ Vựng', title: 'Bí Kíp Từ Vựng', desc: 'Lĩnh hội trọn vẹn hơn 20 khẩu quyết từ vựng', icon: '📜' },
  { key: 'Phá Quan Trảm Tướng', title: 'Phá Quan Trảm Tướng', desc: 'Trảm diệt thành công ít nhất 1 đầu lĩnh Hắc Ám', icon: '⚔️' },
  { key: 'Tri Kỷ Võ Lâm', title: 'Tri Kỷ Võ Lâm', desc: 'Gửi Tâm Ý kết giao cùng 3 huynh đệ giang hồ', icon: '❤️' },
  { key: 'Nhất Đại Cao Thủ', title: 'Nhất Đại Cao Thủ', desc: 'Đạt cảnh giới cấp 10 trở lên', icon: '👑' },
  { key: 'Thần Kiếm Ngữ Pháp', title: 'Thần Kiếm Ngữ Pháp', desc: 'Vượt qua ải khảo thí ngữ pháp không một vết xước', icon: '⚡' }
];

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onOpenAvatarStudio,
  onUpdateNickname
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(profile.nickname);
  const [nameError, setNameError] = useState('');

  if (!isOpen) return null;

  const { level, currentXp, nextLevelXp } = calculateLevel(profile.xp);
  const xpPercent = Math.min(100, Math.round((currentXp / nextLevelXp) * 100));

  const handleStartEdit = () => {
    setNewName(profile.nickname);
    setNameError('');
    setIsEditingName(true);
  };

  const handleCancelEdit = () => {
    setIsEditingName(false);
    setNameError('');
    setNewName(profile.nickname);
  };

  const handleSaveName = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed) {
      setNameError('Hãy nhập tên của bạn trước nhé!');
      soundEffects.playDamageTaken();
      return;
    }

    onUpdateNickname(trimmed);
    soundEffects.playVictoryFanfare();
    setIsEditingName(false);
    setNameError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-amber-500/80 bg-gradient-to-b from-[#180a0e] via-[#10070a] to-[#0c0d14] p-6 sm:p-8 text-neutral-100 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 pb-6 border-b border-neutral-800 text-center sm:text-left">
          <div className="relative group">
            <img
              src={profile.avatar}
              alt={profile.nickname}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-amber-400 shadow-xl"
            />
            <button
              onClick={() => {
                onClose();
                onOpenAvatarStudio();
              }}
              className="absolute -bottom-2 -right-2 bg-red-800 hover:bg-red-700 text-amber-300 p-2 rounded-full border border-amber-400 shadow-lg cursor-pointer transition-transform hover:scale-110"
              title="Đổi Avatar Võ Lâm"
            >
              <Edit3 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 w-full">
            {/* Nickname display or inline editing */}
            {!isEditingName ? (
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1.5">
                <span className="text-xs text-neutral-400 font-mono">Hiệp khách:</span>
                <h2 className="text-2xl font-bold font-wuxia text-amber-200">
                  {profile.nickname}
                </h2>
                <span className="px-2 py-0.5 rounded bg-red-950 border border-red-700 text-red-300 font-mono text-xs">
                  {profile.title}
                </span>

                {/* Prominent "Đổi tên" button */}
                <button
                  onClick={handleStartEdit}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-neutral-900 hover:bg-neutral-800 text-amber-300 border border-amber-500/50 hover:border-amber-400 transition-colors shadow-sm cursor-pointer"
                  title="Đổi tên / Nickname của bạn"
                >
                  <Edit3 className="w-3 h-3 text-amber-400" />
                  <span>Đổi tên</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSaveName} className="mb-3 p-3 rounded-xl bg-neutral-900/90 border border-amber-500/70 text-left">
                <label className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1 font-mono">
                  Tên/Nickname mới của bạn:
                </label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="text"
                    autoFocus
                    value={newName}
                    maxLength={24}
                    onChange={(e) => {
                      setNewName(e.target.value);
                      if (nameError) setNameError('');
                    }}
                    placeholder="Nhập tên mới của bạn..."
                    className="flex-1 px-3 py-1.5 rounded-lg bg-black/60 border border-amber-500/60 text-sm text-amber-100 focus:outline-none focus:border-amber-400 font-medium"
                  />
                  <div className="flex items-center gap-1.5">
                    <button
                      type="submit"
                      className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-700 to-amber-600 hover:from-red-600 hover:to-amber-500 text-amber-100 text-xs font-bold font-wuxia border border-amber-400 cursor-pointer shadow"
                    >
                      Lưu tên
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs border border-neutral-600 cursor-pointer"
                    >
                      Hủy
                    </button>
                  </div>
                </div>

                {nameError && (
                  <div className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{nameError}</span>
                  </div>
                )}
              </form>
            )}

            <p className="text-xs text-neutral-400 font-serif-wuxia mb-3">
              Môn phái: <strong className="text-amber-300">{profile.sect}</strong> • Tu luyện:{' '}
              <strong className="text-emerald-400">Khối {profile.grade} (Global Success)</strong>
            </p>

            {/* Công Lực Bar */}
            <div className="max-w-md mx-auto sm:mx-0">
              <div className="flex justify-between text-xs text-neutral-300 mb-1 font-mono">
                <span className="text-amber-400 font-bold">Cấp Độ {level}</span>
                <span>{currentXp} / {nextLevelXp} XP</span>
              </div>
              <div className="w-full h-2.5 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 rounded-full"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
          <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-[10px] text-neutral-400 block font-mono">TỔNG CÔNG LỰC</span>
            <span className="text-base font-bold text-amber-300 font-mono">{profile.xp} XP</span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-[10px] text-neutral-400 block font-mono">CHUỖI ĐĂNG NHẬP</span>
            <span className="text-base font-bold text-red-400 font-mono">{profile.streak} Ngày</span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-[10px] text-neutral-400 block font-mono">CỬA ẢI ĐÃ PHÁ</span>
            <span className="text-base font-bold text-emerald-400 font-mono">
              {Object.values(profile.completedUnits || {}).filter(u => u.completed).length} Ải
            </span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-[10px] text-neutral-400 block font-mono">TÂM Ý HÔM NAY</span>
            <span className="text-base font-bold text-blue-300 font-mono">
              {profile.loveSentToday || 0}/5
            </span>
          </div>
        </div>

        {/* Badges Collection */}
        <div className="text-left">
          <h3 className="text-sm font-bold text-amber-300 font-wuxia uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            BỘ SƯU TẬP HUY HIỆU VÕ LÂM ({profile.badges?.length || 1} / {ALL_AVAILABLE_BADGES.length})
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ALL_AVAILABLE_BADGES.map((badge) => {
              const isUnlocked = (profile.badges || []).includes(badge.key);
              return (
                <div
                  key={badge.key}
                  className={`p-3 rounded-xl border flex items-center gap-3 transition-colors ${
                    isUnlocked
                      ? 'bg-amber-950/20 border-amber-500/50 text-neutral-100'
                      : 'bg-neutral-950/40 border-neutral-800 text-neutral-600 opacity-60'
                  }`}
                >
                  <div className="text-2xl">{badge.icon}</div>
                  <div>
                    <div className="text-xs font-bold font-wuxia text-amber-200">
                      {badge.title}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-serif-wuxia">
                      {badge.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
