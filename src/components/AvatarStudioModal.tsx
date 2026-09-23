import React, { useState, useEffect } from 'react';
import { UserProfile, PlayerAvatar } from '../types/game';
import { PLAYER_AVATARS } from '../data/characters';
import { X, Check, Sparkles, Shield, User, Heart } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface AvatarStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

const SECTS = [
  'English Wulin Tông Môn',
  'Nga Mi Phái',
  'Hoa Sơn Phái',
  'Võ Đang Phái',
  'Tiêu Dao Phái',
  'Cổ Mộ Phái'
];

export const AvatarStudioModal: React.FC<AvatarStudioModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile
}) => {
  const [selectedAvatarId, setSelectedAvatarId] = useState(profile.avatarId || PLAYER_AVATARS[0].id);
  const [nickname, setNickname] = useState(profile.nickname);
  const [sect, setSect] = useState(profile.sect || SECTS[0]);
  const [grade, setGrade] = useState<10 | 11 | 12>(profile.grade);

  useEffect(() => {
    if (isOpen) {
      setNickname(profile.nickname);
      setSelectedAvatarId(profile.avatarId || PLAYER_AVATARS[0].id);
      setSect(profile.sect || SECTS[0]);
      setGrade(profile.grade);
    }
  }, [isOpen, profile]);

  if (!isOpen) return null;

  const currentAvatar = PLAYER_AVATARS.find((a) => a.id === selectedAvatarId) || PLAYER_AVATARS[0];

  const handleSave = () => {
    soundEffects.playVictoryFanfare();
    onUpdateProfile({
      avatar: currentAvatar.image,
      avatarId: currentAvatar.id,
      nickname: nickname.trim() || profile.nickname,
      sect,
      grade
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border-2 border-amber-500/80 bg-gradient-to-b from-[#170a0e] via-[#120a10] to-[#0c0d14] p-6 sm:p-8 text-neutral-100 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-950 border border-red-600 text-amber-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            HỒ SƠ HIỆP KHÁCH & AVATAR VÕ LÂM
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200">
            Tuyệt Sắc Hiệp Khách Võ Lâm
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mt-1">
            Chọn diện mạo võ lâm chân thực, phong thái tuyệt mỹ theo đúng chuẩn hiệp sĩ Trung Nguyên
          </p>
        </div>

        {/* Two Column Layout: Preview Card & Avatar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Selected Character Card Preview */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-xl border border-amber-500/50 p-5 text-center shadow-xl">
            <div className="relative w-48 h-56 mx-auto rounded-xl overflow-hidden border-2 border-amber-400 shadow-2xl mb-4 group">
              <img
                src={currentAvatar.image}
                alt={currentAvatar.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded py-1 px-2 border border-white/20">
                <span className="text-[11px] font-bold text-amber-300 font-mono">
                  {currentAvatar.title}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold font-wuxia text-amber-200 mb-1">
              {nickname || 'Vô Danh Hiệp'}
            </h3>
            
            <div className="flex items-center justify-center gap-2 text-xs mb-3">
              <span className="px-2 py-0.5 rounded bg-red-950 border border-red-700 text-red-300 font-mono">
                {profile.title}
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-700 text-blue-300 font-mono">
                {sect}
              </span>
            </div>

            <p className="text-xs text-neutral-400 font-serif-wuxia italic px-2 leading-relaxed">
              "{currentAvatar.description}"
            </p>
          </div>

          {/* Right: Avatar Selection Grid & Info inputs */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            {/* Avatar Selector Grid */}
            <div>
              <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                1. Chọn Dung Mạo Võ Lâm:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PLAYER_AVATARS.map((avatar) => {
                  const isSelected = avatar.id === selectedAvatarId;
                  return (
                    <div
                      key={avatar.id}
                      onClick={() => {
                        setSelectedAvatarId(avatar.id);
                        soundEffects.playSwordSlash();
                      }}
                      className={`relative rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-200 p-1.5 flex flex-col items-center ${
                        isSelected
                          ? 'border-amber-400 bg-red-950/40 ring-2 ring-amber-400/50 scale-102 shadow-lg shadow-amber-950/40'
                          : 'border-neutral-800 bg-neutral-900/80 hover:border-neutral-600'
                      }`}
                    >
                      <div className="w-full h-24 rounded-lg overflow-hidden mb-1.5 bg-black">
                        <img
                          src={avatar.image}
                          alt={avatar.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <span className="text-[11px] font-bold text-neutral-200 truncate w-full text-center font-wuxia">
                        {avatar.name}
                      </span>
                      <span className="text-[9px] text-amber-400/80 font-mono">
                        {avatar.gender === 'female' ? 'Nữ hiệp' : 'Nam hiệp'}
                      </span>

                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center shadow">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Nickname & Sect inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-300 block mb-1">
                  2. Ngoại Hiệu Hiệp Khách:
                </label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="Nhập ngoại hiệu giang hồ..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-amber-200 text-sm focus:border-amber-400 focus:outline-none"
                  maxLength={20}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-300 block mb-1">
                  3. Môn Phái Quy Thuộc:
                </label>
                <select
                  value={sect}
                  onChange={(e) => setSect(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-amber-200 text-sm focus:border-amber-400 focus:outline-none"
                >
                  {SECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grade Selection */}
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">
                4. Khối Lớp Trọng Tâm (Global Success):
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[10, 11, 12].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrade(g as 10 | 11 | 12)}
                    className={`py-2 px-3 rounded-lg border text-xs font-bold font-mono transition-all ${
                      grade === g
                        ? 'bg-red-900/60 border-amber-400 text-amber-200 shadow'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    Khối {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-2 text-right">
              <button
                onClick={handleSave}
                className="w-full sm:w-auto px-8 py-3 rounded-xl font-wuxia font-bold text-sm text-black bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 border border-amber-300 shadow-lg cursor-pointer"
              >
                Xác Nhận Dung Mạo Võ Lâm ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
