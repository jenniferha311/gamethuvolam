import React, { useState, useEffect } from 'react';
import { UserProfile, UnitRealm, Friend, DailyQuest } from './types/game';
import { UNITS_DATA } from './data/units';
import {
  getProfile,
  saveProfile,
  getFriends,
  saveFriends,
  getQuests,
  saveQuests,
  hasOnboarded,
  setOnboarded
} from './lib/storage';
import { soundEffects } from './lib/audio';
import { trackVisit } from './lib/analytics';

// Components
import { Navbar } from './components/Navbar';
import { BangChuBanner } from './components/BangChuBanner';
import { GuardiansList } from './components/GuardiansList';
import { WorldMap } from './components/WorldMap';
import { UnitHub, UnitSection } from './components/UnitHub';
import { WeakReviewArena } from './components/WeakReviewArena';
import { AdminDashboard } from './components/AdminDashboard';
import { AchievementToast, ToastData } from './components/AchievementToast';
import { AvatarStudioModal } from './components/AvatarStudioModal';
import { FriendsModal } from './components/FriendsModal';
import { DailyQuestsModal } from './components/DailyQuestsModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { ProfileModal } from './components/ProfileModal';
import { WelcomeNicknameModal } from './components/WelcomeNicknameModal';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(getProfile);
  const [friends, setFriends] = useState<Friend[]>(getFriends);
  const [quests, setQuests] = useState<DailyQuest[]>(getQuests);

  const [currentView, setCurrentView] = useState<'map' | 'unit-hub' | 'weak-review'>('map');
  const [selectedUnit, setSelectedUnit] = useState<UnitRealm>(UNITS_DATA[0]);
  const [unitInitialSection, setUnitInitialSection] = useState<UnitSection>('vocab');
  const [selectedGrade, setSelectedGrade] = useState<10 | 11 | 12>(profile.grade || 10);
  const [isMuted, setIsMuted] = useState(false);

  // Modals state
  const [isAvatarStudioOpen, setIsAvatarStudioOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFriendsOpen, setIsFriendsOpen] = useState(false);
  const [isQuestsOpen, setIsQuestsOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(() => !hasOnboarded());

  // Non-intrusive achievement/congratulation toast
  const [toastData, setToastData] = useState<ToastData | null>(null);

  // Auto-track visit in background without blocking UI
  useEffect(() => {
    trackVisit(profile.id, profile.nickname, selectedGrade, currentView, selectedUnit?.id);
  }, [profile.id, profile.nickname, selectedGrade, currentView, selectedUnit?.id]);

  // Check URL hash for admin access
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setIsAdminOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Sync profile to local storage whenever updated
  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  // Sync friends & quests
  useEffect(() => {
    saveFriends(friends);
  }, [friends]);

  useEffect(() => {
    saveQuests(quests);
  }, [quests]);

  const handleUpdateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updates };
      if (updates.grade && updates.grade !== selectedGrade) {
        setSelectedGrade(updates.grade);
      }
      return next;
    });
  };

  const handleSaveWelcomeNickname = (nickname: string) => {
    const updated = {
      ...profile,
      nickname,
      hasCustomNickname: true
    };
    setProfile(updated);
    saveProfile(updated);
    setOnboarded(true);
    setIsWelcomeModalOpen(false);
  };

  const handleUpdateNickname = (newNickname: string) => {
    const updated = {
      ...profile,
      nickname: newNickname,
      hasCustomNickname: true
    };
    setProfile(updated);
    saveProfile(updated);
    setOnboarded(true);
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundEffects.setMuted(nextMuted);
  };

  const handleSelectUnit = (unit: UnitRealm, section: UnitSection = 'vocab') => {
    setSelectedUnit(unit);
    setUnitInitialSection(section);
    setCurrentView('unit-hub');
  };

  const handleShowToast = (title: string, subtitle: string, icon: string = '🏆') => {
    setToastData({
      id: String(Date.now()),
      title,
      subtitle,
      icon,
      type: 'achievement'
    });
  };

  const handleDeductHp = (amount: number) => {
    setProfile((prev) => ({
      ...prev,
      hp: Math.max(10, prev.hp - amount), // Keep at least 10 HP to encourage continuation
      xp: Math.max(0, prev.xp - 5) // Trừ nhẹ 5 công lực khi trả lời sai
    }));
  };

  const handleAddXp = (amount: number) => {
    setProfile((prev) => {
      const nextXp = prev.xp + amount;
      return {
        ...prev,
        xp: nextXp
      };
    });

    // Update quest 4 (Earn 100 XP)
    setQuests((prev) =>
      prev.map((q) => {
        if (q.id === 'q4') {
          const nextVal = Math.min(q.target, q.current + amount);
          return { ...q, current: nextVal, completed: nextVal >= q.target };
        }
        return q;
      })
    );
  };

  const handleVictory = (unitId: string, stars: number, xpGained: number) => {
    setProfile((prev) => {
      const completedUnits = { ...prev.completedUnits };
      const prevStars = completedUnits[unitId]?.stars || 0;
      completedUnits[unitId] = {
        completed: true,
        score: Math.max(completedUnits[unitId]?.score || 0, 100),
        stars: Math.max(prevStars, stars)
      };

      const newBadges = [...prev.badges];
      if (!newBadges.includes('Phá Quan Trảm Tướng')) {
        newBadges.push('Phá Quan Trảm Tướng');
      }

      return {
        ...prev,
        xp: prev.xp + xpGained,
        completedUnits,
        badges: newBadges
      };
    });

    // Update quest 2 (Defeat 1 boss)
    setQuests((prev) =>
      prev.map((q) => (q.id === 'q2' ? { ...q, current: 1, completed: true } : q))
    );

    // Show achievement celebration toast (non-intrusive)
    handleShowToast(
      '🏆 Trảm Ma Đắc Thắng!',
      `Đại phá thành công đầu lĩnh ${selectedUnit.bossName}! Khai mở cảnh giới tiếp theo!`
    );
  };

  const handleSendLove = (friendId: string) => {
    setProfile((prev) => ({
      ...prev,
      loveSentToday: (prev.loveSentToday || 0) + 1,
      xp: prev.xp + 15,
      energy: Math.min(prev.maxEnergy, prev.energy + 5)
    }));

    setFriends((prev) =>
      prev.map((f) => (f.id === friendId ? { ...f, hasSentLoveToday: true } : f))
    );

    // Update quest 3 (Send Love to 3 friends)
    setQuests((prev) =>
      prev.map((q) => {
        if (q.id === 'q3') {
          const nextVal = Math.min(q.target, q.current + 1);
          return { ...q, current: nextVal, completed: nextVal >= q.target };
        }
        return q;
      })
    );
  };

  const handleAddFriend = (nickname: string) => {
    const newFriend: Friend = {
      id: 'friend_' + Date.now(),
      nickname,
      grade: profile.grade,
      avatar: profile.avatar,
      level: 1,
      xp: 120,
      title: 'Tân Thủ Giang Hồ',
      hasSentLoveToday: false,
      canSendLove: true
    };
    setFriends((prev) => [newFriend, ...prev]);
  };

  const handleClaimQuest = (questId: string) => {
    const quest = quests.find((q) => q.id === questId);
    if (!quest || quest.claimed) return;

    handleAddXp(quest.xpReward);
    setQuests((prev) =>
      prev.map((q) => (q.id === questId ? { ...q, claimed: true } : q))
    );

    handleShowToast('📜 Hoàn Thành Nhiệm Vụ!', `Thu nhận +${quest.xpReward} Công Lực từ Sư Môn!`);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f1ede4] flex flex-col selection:bg-red-800 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        profile={profile}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenAvatarStudio={() => setIsAvatarStudioOpen(true)}
        onOpenFriends={() => setIsFriendsOpen(true)}
        onOpenQuests={() => setIsQuestsOpen(true)}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        onOpenWeakReview={() => setCurrentView('weak-review')}
        onReturnToMap={() => setCurrentView('map')}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Game Screen */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 sm:px-6">
        {currentView === 'map' && (
          <>
            {/* Hong Y Tong Chu Ms. Ha Anh Phuong Hero Banner */}
            <BangChuBanner
              onStartLearning={() => {
                const firstUnit = UNITS_DATA.find((u) => u.grade === selectedGrade) || UNITS_DATA[0];
                handleSelectUnit(firstUnit);
              }}
              grade={selectedGrade}
              onSelectGrade={(g) => setSelectedGrade(g)}
              profile={profile}
            />

            {/* Five Guardians of English Wulin */}
            <GuardiansList />

            {/* World Map for Selected Stage */}
            <WorldMap
              grade={selectedGrade}
              profile={profile}
              onSelectUnit={handleSelectUnit}
              onOpenWeakReview={() => setCurrentView('weak-review')}
            />
          </>
        )}

        {currentView === 'unit-hub' && (
          <UnitHub
            key={`${selectedUnit.id}-${unitInitialSection}`}
            unit={selectedUnit}
            profile={profile}
            initialSection={unitInitialSection}
            onBackToMap={() => setCurrentView('map')}
            onSelectUnit={(nextU) => {
              setSelectedUnit(nextU);
              setUnitInitialSection('vocab');
            }}
            onAddXp={handleAddXp}
            onDeductHp={handleDeductHp}
            onVictory={handleVictory}
            onShowToast={handleShowToast}
            onOpenGlobalWeakReview={() => setCurrentView('weak-review')}
          />
        )}

        {currentView === 'weak-review' && (
          <WeakReviewArena
            profile={profile}
            onBackToMap={() => setCurrentView('map')}
            onAddXp={handleAddXp}
            onShowAchievementToast={handleShowToast}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-neutral-900 bg-[#07080b] py-6 px-4 text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-wuxia font-bold text-neutral-300">
              GLOBAL SUCCESS ENGLISH WULIN
            </span>
            <span className="text-[10px] text-amber-500/80 font-serif-wuxia">
              • Tam Niên Anh Ngữ – Nhất Thống Võ Lâm
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-400 font-serif-wuxia">
            <span>Game được thiết kế bởi cô giáo Hà Ánh Phượng dựa vào khung chương trình Tiếng Anh THPT Global Success và các nhân vật thầy cô truyền cảm hứng trong cộng đồng Thầy cô không ngừng học- TNSL</span>
            {/* Discreet link for teacher/admin access */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-neutral-600 hover:text-amber-400/80 text-[10px] underline cursor-pointer transition-colors"
              title="Khu vực sư phạm dành cho giáo viên"
            >
              Quản Trị Sư Phạm
            </button>
          </div>
        </div>
      </footer>

      {/* Non-intrusive Achievement / Congratulation Toast */}
      <AchievementToast
        toast={toastData}
        onClose={() => setToastData(null)}
      />

      {/* Admin Dashboard Modal for Cô Phượng */}
      {isAdminOpen && (
        <AdminDashboard onClose={() => setIsAdminOpen(false)} />
      )}

      {/* Modals */}
      <AvatarStudioModal
        isOpen={isAvatarStudioOpen}
        onClose={() => setIsAvatarStudioOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={profile}
        onOpenAvatarStudio={() => setIsAvatarStudioOpen(true)}
        onUpdateNickname={handleUpdateNickname}
      />

      <FriendsModal
        isOpen={isFriendsOpen}
        onClose={() => setIsFriendsOpen(false)}
        profile={profile}
        friends={friends}
        onSendLove={handleSendLove}
        onAddFriend={handleAddFriend}
      />

      <DailyQuestsModal
        isOpen={isQuestsOpen}
        onClose={() => setIsQuestsOpen(false)}
        quests={quests}
        profile={profile}
        onClaimQuest={handleClaimQuest}
      />

      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        profile={profile}
      />

      {/* Cửa sổ đặt tên & Điều hướng nhanh */}
      <WelcomeNicknameModal
        isOpen={isWelcomeModalOpen}
        onClose={() => setIsWelcomeModalOpen(false)}
        onSaveNickname={handleSaveWelcomeNickname}
        initialNickname={profile.nickname}
        onSelectGrade={(g) => setSelectedGrade(g)}
        onOpenQuests={() => setIsQuestsOpen(true)}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
      />
    </div>
  );
}
