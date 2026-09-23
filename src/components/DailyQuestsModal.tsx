import React from 'react';
import { DailyQuest, UserProfile } from '../types/game';
import { X, BookOpen, CheckCircle, Gift, Flame, Sparkles } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface DailyQuestsModalProps {
  isOpen: boolean;
  onClose: () => void;
  quests: DailyQuest[];
  profile: UserProfile;
  onClaimQuest: (questId: string) => void;
}

export const DailyQuestsModal: React.FC<DailyQuestsModalProps> = ({
  isOpen,
  onClose,
  quests,
  profile,
  onClaimQuest
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-red-800/80 bg-gradient-to-b from-[#18090c] via-[#10070a] to-[#0c0d12] p-6 sm:p-8 text-neutral-100 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-950 border border-red-600 text-amber-300 mb-2">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            NHIỆM VỤ SƯ MÔN HẰNG NGÀY
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-amber-300 to-red-300">
            Khổ Luyện Thành Danh
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mt-1">
            <strong className="text-amber-300">{profile.nickname}</strong>, nhiệm vụ tiếp theo của bạn đã sẵn sàng! Mỗi ngày hoàn thành các huấn lệnh từ Hồng Y Tông Chủ để gia tăng công lực.
          </p>
        </div>

        {/* Streak Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/60 to-red-950/60 border border-amber-600/50 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
              <Flame className="w-6 h-6 text-amber-500 animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-amber-200 font-wuxia">
                HIỆP KHÁCH {profile.nickname.toUpperCase()} • CHUỖI ĐĂNG NHẬP: {profile.streak} NGÀY
              </div>
              <div className="text-[11px] text-neutral-300 font-serif-wuxia">
                Duy trì đăng nhập mỗi ngày để nhận thêm bí kíp và huy hiệu sư môn
              </div>
            </div>
          </div>
        </div>

        {/* Quests List */}
        <div className="space-y-3.5">
          {quests.map((quest) => {
            const isCompleted = quest.current >= quest.target;
            const progressPercent = Math.min(100, Math.round((quest.current / quest.target) * 100));

            return (
              <div
                key={quest.id}
                className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left"
              >
                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-neutral-100 font-wuxia">
                      {quest.title}
                    </h3>
                    <span className="text-xs font-mono text-amber-400 font-bold">
                      +{quest.xpReward} XP
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 font-serif-wuxia mb-2">
                    {quest.desc}
                  </p>

                  {/* Progress bar */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {quest.current}/{quest.target}
                    </span>
                  </div>
                </div>

                {/* Claim or Status Button */}
                <div className="w-full sm:w-auto text-right">
                  {quest.claimed ? (
                    <span className="inline-flex items-center gap-1 text-xs text-neutral-500 font-mono px-3 py-1.5 rounded-lg bg-black/40 border border-neutral-800">
                      <CheckCircle className="w-3.5 h-3.5 text-neutral-600" />
                      Đã Nhận
                    </span>
                  ) : isCompleted ? (
                    <button
                      onClick={() => {
                        soundEffects.playVictoryFanfare();
                        onClaimQuest(quest.id);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black text-xs font-bold font-wuxia shadow-md animate-bounce cursor-pointer"
                    >
                      <Gift className="w-3.5 h-3.5" />
                      <span>Nhận Thưởng</span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center text-xs text-neutral-500 font-mono px-3 py-1.5 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
                      Đang Tiến Hành
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
