import React, { useState } from 'react';
import { UserProfile, LeaderboardEntry } from '../types/game';
import { generateLeaderboard } from '../lib/storage';
import { X, Award, Medal, Crown, TrendingUp, Sparkles, Star } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  profile
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'g10' | 'g11' | 'g12' | 'friends'>('all');

  if (!isOpen) return null;

  const entries = generateLeaderboard(profile, activeTab);
  const userRankEntry = entries.find((e) => e.isCurrentUser);
  const userRank = userRankEntry ? userRankEntry.rank : 1;

  // Find the entry immediately ahead of the user
  const entryAhead = userRank > 1 ? entries.find((e) => e.rank === userRank - 1) : null;
  const xpDifference = entryAhead && userRankEntry ? Math.max(10, entryAhead.xp - userRankEntry.xp) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-amber-500/80 bg-gradient-to-b from-[#180a0e] via-[#10070a] to-[#0c0d14] p-6 sm:p-8 text-neutral-100 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-950 border border-amber-600 text-amber-300 mb-2">
            <Award className="w-3.5 h-3.5 text-yellow-400" />
            BẢNG VÀNG PHONG THẦN ANH NGỮ
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200">
            VÕ LÂM CAO THỦ
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mt-1">
            Nơi ghi danh những bậc kỳ tài Anh ngữ xuất chúng trong toàn cõi giang hồ
          </p>
        </div>

        {/* Player Rank Encouragement Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/80 via-neutral-900 to-amber-950/80 border border-amber-500/60 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center font-extrabold font-wuxia text-amber-300 text-lg">
              #{userRank}
            </div>
            <div>
              <div className="text-xs font-bold text-amber-200">
                Vị Trí Hiện Tại Của Bạn: <span className="text-amber-400 font-mono text-sm">#{userRank}</span>
              </div>
              <div className="text-[11px] text-neutral-300 font-serif-wuxia mt-0.5">
                {entryAhead ? (
                  <span>
                    Chỉ còn <strong className="text-yellow-400 font-mono">{xpDifference} XP</strong> để vượt qua cao thủ{' '}
                    <strong className="text-neutral-100 font-wuxia">{entryAhead.nickname}</strong> (#{userRank - 1})!
                  </span>
                ) : (
                  <span className="text-emerald-400 font-bold">
                    Thiếu hiệp đang độc cô cầu bại, ngự trị tại ngôi đầu bảng!
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs text-neutral-400 block font-mono">Tổng Công Lực:</span>
            <span className="text-base font-bold text-amber-300 font-mono">
              {profile.xp} XP
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-neutral-800 pb-3">
          {[
            { id: 'all', label: 'Toàn Võ Lâm' },
            { id: 'g10', label: 'Khối 10 (Sơ Nhập)' },
            { id: 'g11', label: 'Khối 11 (Hành Tẩu)' },
            { id: 'g12', label: 'Khối 12 (Cao Thủ)' },
            { id: 'friends', label: 'Bằng Hữu' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as typeof activeTab);
                soundEffects.playSwordSlash();
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-wuxia transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-950/40'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950/60">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/80 text-neutral-400 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-3 px-4 text-center w-16">Hạng</th>
                <th className="py-3 px-4">Hiệp Khách</th>
                <th className="py-3 px-4 hidden md:table-cell">Cảnh Giới</th>
                <th className="py-3 px-4 text-center">Cấp Độ</th>
                <th className="py-3 px-4 text-right">Công Lực (XP)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900">
              {entries.map((entry) => {
                const isUser = entry.isCurrentUser;
                let rankBadge = null;

                if (entry.rank === 1) {
                  rankBadge = <Crown className="w-5 h-5 text-yellow-400 inline mx-auto fill-yellow-400" />;
                } else if (entry.rank === 2) {
                  rankBadge = <Medal className="w-5 h-5 text-neutral-300 inline mx-auto" />;
                } else if (entry.rank === 3) {
                  rankBadge = <Medal className="w-5 h-5 text-amber-600 inline mx-auto" />;
                } else {
                  rankBadge = <span className="font-mono text-neutral-400">#{entry.rank}</span>;
                }

                return (
                  <tr
                    key={entry.id}
                    className={`transition-colors ${
                      isUser
                        ? 'bg-red-950/50 border-l-4 border-amber-400 font-semibold'
                        : 'hover:bg-neutral-900/50'
                    }`}
                  >
                    <td className="py-3.5 px-4 text-center font-bold">
                      {rankBadge}
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={entry.avatar}
                          alt={entry.nickname}
                          className="w-9 h-9 rounded-full object-cover border border-amber-400/50"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`font-wuxia font-bold ${isUser ? 'text-amber-300' : 'text-neutral-100'}`}>
                              {entry.nickname}
                            </span>
                            {isUser && (
                              <span className="text-[10px] bg-amber-400 text-black px-1 rounded font-bold font-mono">
                                Bạn
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-neutral-400 font-serif-wuxia md:hidden">
                            {entry.title}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 hidden md:table-cell text-neutral-300 font-serif-wuxia text-xs">
                      {entry.title}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 rounded bg-black/40 border border-neutral-800 text-amber-400 font-mono text-xs">
                        Lv.{entry.level}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-right font-mono font-bold text-amber-300">
                      {entry.xp.toLocaleString()} XP
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
