import React, { useState } from 'react';
import { UserProfile, Friend } from '../types/game';
import { X, Heart, UserPlus, Search, Sparkles, Shield, Check, Flame } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface FriendsModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  friends: Friend[];
  onSendLove: (friendId: string) => void;
  onAddFriend: (nickname: string) => void;
}

export const FriendsModal: React.FC<FriendsModalProps> = ({
  isOpen,
  onClose,
  profile,
  friends,
  onSendLove,
  onAddFriend
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newFriendName, setNewFriendName] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const maxDailyLove = 5;
  const remainingLove = Math.max(0, maxDailyLove - (profile.loveSentToday || 0));

  const handleSendLoveClick = (friend: Friend) => {
    if (remainingLove <= 0) {
      setToastMessage('Hôm nay hiệp khách đã gửi hết 5 lượt Tâm Ý!');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    soundEffects.playHeartChime();
    onSendLove(friend.id);
    setToastMessage(`❤️ Đã gửi Tâm Ý cho bằng hữu ${friend.nickname}! (+5 Nội Lực)`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddNewFriend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFriendName.trim()) return;
    onAddFriend(newFriendName.trim());
    soundEffects.playVictoryFanfare();
    setToastMessage(`🤝 Đã kết giao thành công với hiệp khách "${newFriendName.trim()}"!`);
    setNewFriendName('');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredFriends = friends.filter((f) =>
    f.nickname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-red-800/80 bg-gradient-to-b from-[#18090c] via-[#10070a] to-[#0b0c12] p-6 sm:p-8 text-neutral-100 shadow-2xl">
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
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            BẰNG HỮU & GỬI TÂM Ý
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-amber-300 to-red-300">
            Giang Hồ Huynh Đệ Tương Trợ
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mt-1">
            "Giang hồ hiểm ác, có bằng hữu đồng hành chính là phúc phận lớn nhất của đời người."
          </p>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-4 p-3 rounded-xl bg-amber-950/80 border border-amber-500/80 text-amber-200 text-xs sm:text-sm font-serif-wuxia text-center animate-bounce">
            {toastMessage}
          </div>
        )}

        {/* Daily Love Quota Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-red-950/60 to-neutral-900 border border-red-800/60 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-900/60 border border-red-600 flex items-center justify-center">
              <Heart className="w-5 h-5 text-red-400 fill-red-400 animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-amber-300 font-wuxia">
                TÂM Ý HẰNG NGÀY
              </div>
              <div className="text-[11px] text-neutral-300 font-serif-wuxia">
                Gửi Tâm Ý giúp bằng hữu hồi phục +5 Nội lực & tăng điểm Hiệp Nghĩa
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs text-neutral-400 block font-mono">Lượt Gửi Còn Lại:</span>
            <span className="text-lg font-extrabold text-amber-300 font-mono">
              {remainingLove} / {maxDailyLove}
            </span>
          </div>
        </div>

        {/* Add Friend Form & Search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <form onSubmit={handleAddNewFriend} className="flex gap-2">
            <input
              type="text"
              value={newFriendName}
              onChange={(e) => setNewFriendName(e.target.value)}
              placeholder="Nhập ngoại hiệu để kết giao..."
              className="flex-1 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-amber-100 placeholder-neutral-500 focus:border-amber-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-red-900 hover:bg-red-800 border border-red-600 text-amber-200 text-xs font-bold font-wuxia flex items-center gap-1 cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Kết Giao</span>
            </button>
          </form>

          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm bằng hữu trong danh sách..."
              className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-amber-100 placeholder-neutral-500 focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Friends List */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider text-left">
            Danh Sách Bằng Hữu ({filteredFriends.length})
          </div>

          {filteredFriends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-600/40 transition-colors"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="relative">
                  <img
                    src={friend.avatar}
                    alt={friend.nickname}
                    className="w-11 h-11 rounded-lg object-cover border border-amber-500/50"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-red-700 text-white text-[9px] font-bold px-1 rounded border border-amber-300">
                    K{friend.grade}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-neutral-100 font-wuxia">
                      {friend.nickname}
                    </span>
                    <span className="text-[10px] text-amber-400 font-mono">
                      Lv.{friend.level}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 font-serif-wuxia">
                    {friend.title} • {friend.xp} Công lực
                  </div>
                </div>
              </div>

              {/* Action: Send Love Button */}
              <div>
                <button
                  onClick={() => handleSendLoveClick(friend)}
                  disabled={remainingLove <= 0}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold font-wuxia border transition-all cursor-pointer ${
                    remainingLove > 0
                      ? 'bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-amber-200 border-red-600 shadow'
                      : 'bg-neutral-900 text-neutral-500 border-neutral-800 cursor-not-allowed'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                  <span>Gửi Tâm Ý</span>
                </button>
              </div>
            </div>
          ))}

          {filteredFriends.length === 0 && (
            <div className="py-8 text-center text-xs text-neutral-500 font-serif-wuxia">
              Chưa tìm thấy bằng hữu nào phù hợp. Hãy nhập ngoại hiệu để kết giao thêm tri kỷ!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
