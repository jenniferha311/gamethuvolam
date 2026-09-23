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

// Components
import { Navbar } from './components/Navbar';
import { BangChuBanner } from './components/BangChuBanner';
import { GuardiansList } from './components/GuardiansList';
import { WorldMap } from './components/WorldMap';
import { Flashcards } from './components/Flashcards';
import { PracticeArena } from './components/PracticeArena';
import { BossBattle } from './components/BossBattle';
import { AvatarStudioModal } from './components/AvatarStudioModal';
import { FriendsModal } from './components/FriendsModal';
import { DailyQuestsModal } from './components/DailyQuestsModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { SupabaseModal } from './components/SupabaseModal';
import { ProfileModal } from './components/ProfileModal';
import { WelcomeNicknameModal } from './components/WelcomeNicknameModal';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(getProfile);
  const [friends, setFriends] = useState<Friend[]>(getFriends);
  const [quests, setQuests] = useState<DailyQuest[]>(getQuests);

  const [currentView, setCurrentView] = useState<'map' | 'flashcards' | 'practice' | 'boss'>('map');
  const [selectedUnit, setSelectedUnit] = useState<UnitRealm>(UNITS_DATA[0]);
  const [selectedGrade, setSelectedGrade] = useState<10 | 11 | 12>(profile.grade || 10);
  const [isMuted, setIsMuted] = useState(false);

  // Modals state
  const [isAvatarStudioOpen, setIsAvatarStudioOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFriendsOpen, setIsFriendsOpen] = useState(false);
  const [isQuestsOpen, setIsQuestsOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isSupabaseOpen, setIsSupabaseOpen] = useState(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(() => !hasOnboarded());

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

  const handleSelectUnit = (unit: UnitRealm) => {
    setSelectedUnit(unit);
    setCurrentView('flashcards');
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

    setCurrentView('map');
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
        onOpenSupabase={() => setIsSupabaseOpen(true)}
        onReturnToMap={() => setCurrentView('map')}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Game Screen */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 sm:px-6">
        {currentView === 'map' && (
          <>
            {/* Bang Chu Ms. Ha Anh Phuong Hero Banner */}
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
            />
          </>
        )}

        {currentView === 'flashcards' && (
          <Flashcards
            unit={selectedUnit}
            onProceedToPractice={() => setCurrentView('practice')}
            onBackToMap={() => setCurrentView('map')}
            profile={profile}
          />
        )}

        {currentView === 'practice' && (
          <PracticeArena
            unit={selectedUnit}
            onProceedToBoss={() => setCurrentView('boss')}
            onBackToFlashcards={() => setCurrentView('flashcards')}
            onAddXp={handleAddXp}
            profile={profile}
          />
        )}

        {currentView === 'boss' && (
          <BossBattle
            unit={selectedUnit}
            profile={profile}
            onVictory={handleVictory}
            onBackToMap={() => setCurrentView('map')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-neutral-900 bg-[#07080b] py-6 px-4 text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-wuxia font-bold text-neutral-300">
              PHƯƠNG CHICK ENGLISH WULIN
            </span>
            <span className="text-[10px] text-amber-500/80 font-serif-wuxia">
              • Tam Niên Anh Ngữ – Nhất Thống Võ Lâm
            </span>
          </div>
          <div className="text-[11px] text-neutral-400 font-serif-wuxia">
            Cảm hứng từ cô giáo Hà Ánh Phượng • Khung chương trình THPT Global Success 10 - 11 - 12
          </div>
        </div>
      </footer>

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

      <SupabaseModal
        isOpen={isSupabaseOpen}
        onClose={() => setIsSupabaseOpen(false)}
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
