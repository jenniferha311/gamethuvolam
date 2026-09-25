import { UserProfile, Friend, DailyQuest, LeaderboardEntry, Grade } from '../types/game';
import { PLAYER_AVATARS, getTitleForLevel } from '../data/characters';

const STORAGE_KEY = 'phuong_chick_wulin_profile';
const FRIENDS_KEY = 'phuong_chick_wulin_friends';
const QUESTS_KEY = 'phuong_chick_wulin_quests';
const ONBOARDED_KEY = 'phuong_chick_wulin_onboarded';

export function hasOnboarded(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const raw = localStorage.getItem(ONBOARDED_KEY);
    if (raw === 'true') return true;
    const profileRaw = localStorage.getItem(STORAGE_KEY);
    if (profileRaw) {
      const parsed = JSON.parse(profileRaw);
      if (parsed.hasCustomNickname) return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function setOnboarded(status = true): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ONBOARDED_KEY, status ? 'true' : 'false');
  } catch {
    // ignore
  }
}

export function calculateLevel(xp: number): { level: number; currentXp: number; nextLevelXp: number } {
  let level = 1;
  let remainingXp = xp;

  while (true) {
    const required = 100 + (level - 1) * 60;
    if (remainingXp >= required) {
      remainingXp -= required;
      level++;
    } else {
      return {
        level,
        currentXp: remainingXp,
        nextLevelXp: required
      };
    }
  }
}

export const INITIAL_PROFILE: UserProfile = {
  id: 'guest_' + Math.random().toString(36).substring(2, 9),
  nickname: 'Hiệp Khách',
  grade: 10,
  avatar: PLAYER_AVATARS[0].image,
  avatarId: PLAYER_AVATARS[0].id,
  level: 1,
  xp: 45,
  maxHp: 100,
  hp: 100,
  energy: 50,
  maxEnergy: 50,
  title: 'Tân Thủ Giang Hồ',
  streak: 3,
  sect: 'English Wulin Tông Môn',
  lastLoginDate: new Date().toISOString().split('T')[0],
  loveSentToday: 1,
  badges: ['Tân Thủ Giang Hồ'],
  completedUnits: {},
  hasCustomNickname: false
};

export const INITIAL_FRIENDS: Friend[] = [
  {
    id: 'f1',
    nickname: 'Bạch Y Kiếm Khách',
    grade: 10,
    avatar: PLAYER_AVATARS[1].image,
    level: 4,
    xp: 380,
    title: 'Thiếu Hiệp Sơ Xuất',
    hasSentLoveToday: true,
    canSendLove: true
  },
  {
    id: 'f2',
    nickname: 'Thanh Phong Nữ Hiệp',
    grade: 11,
    avatar: PLAYER_AVATARS[0].image,
    level: 7,
    xp: 720,
    title: 'Phong Vân Kiếm Khách',
    hasSentLoveToday: false,
    canSendLove: true
  },
  {
    id: 'f3',
    nickname: 'Hà Thành Độc Cô',
    grade: 12,
    avatar: PLAYER_AVATARS[3].image,
    level: 12,
    xp: 1540,
    title: 'Uy Chấn Tứ Hải',
    hasSentLoveToday: false,
    canSendLove: true
  },
  {
    id: 'f4',
    nickname: 'Phú Thọ Kiếm Linh',
    grade: 10,
    avatar: PLAYER_AVATARS[2].image,
    level: 9,
    xp: 990,
    title: 'Phong Vân Kiếm Khách',
    hasSentLoveToday: true,
    canSendLove: false
  },
  {
    id: 'f5',
    nickname: 'Bích Trúc Tiểu Muội',
    grade: 11,
    avatar: PLAYER_AVATARS[4].image,
    level: 5,
    xp: 490,
    title: 'Thiếu Hiệp Sơ Xuất',
    hasSentLoveToday: false,
    canSendLove: true
  }
];

export const INITIAL_QUESTS: DailyQuest[] = [
  {
    id: 'q1',
    title: 'Luyện 10 Thẻ Tàng Kinh Các',
    desc: 'Luyện tập phát âm và ngữ nghĩa 10 từ vựng cốt lõi.',
    target: 10,
    current: 4,
    xpReward: 50,
    completed: false,
    claimed: false
  },
  {
    id: 'q2',
    title: 'Trảm Diệt 1 Hắc Ám Yêu Ma',
    desc: 'Vượt qua 1 trận quyết chiến Phá Quan Trảm Tướng.',
    target: 1,
    current: 0,
    xpReward: 80,
    completed: false,
    claimed: false
  },
  {
    id: 'q3',
    title: 'Gửi Tâm Ý Cho 3 Bằng Hữu',
    desc: 'Kết nối tình huynh đệ giang hồ, chia sẻ nội lực.',
    target: 3,
    current: 1,
    xpReward: 40,
    completed: false,
    claimed: false
  },
  {
    id: 'q4',
    title: 'Thu Nạp 100 Điểm Công Lực',
    desc: 'Tích lũy công lực thông qua mọi hoạt động võ học.',
    target: 100,
    current: 45,
    xpReward: 60,
    completed: false,
    claimed: false
  }
];

export function getProfile(): UserProfile {
  if (typeof window === 'undefined') return INITIAL_PROFILE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROFILE;
    const parsed = JSON.parse(raw);
    const { level } = calculateLevel(parsed.xp || 0);
    parsed.level = level;
    parsed.title = getTitleForLevel(level);
    return parsed;
  } catch {
    return INITIAL_PROFILE;
  }
}

export function saveProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') return;
  try {
    const { level } = calculateLevel(profile.xp);
    profile.level = level;
    profile.title = getTitleForLevel(level);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // Storage error
  }
}

export function getFriends(): Friend[] {
  if (typeof window === 'undefined') return INITIAL_FRIENDS;
  try {
    const raw = localStorage.getItem(FRIENDS_KEY);
    return raw ? JSON.parse(raw) : INITIAL_FRIENDS;
  } catch {
    return INITIAL_FRIENDS;
  }
}

export function saveFriends(friends: Friend[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(FRIENDS_KEY, JSON.stringify(friends));
  } catch {
    //
  }
}

export function getQuests(): DailyQuest[] {
  if (typeof window === 'undefined') return INITIAL_QUESTS;
  try {
    const raw = localStorage.getItem(QUESTS_KEY);
    return raw ? JSON.parse(raw) : INITIAL_QUESTS;
  } catch {
    return INITIAL_QUESTS;
  }
}

export function saveQuests(quests: DailyQuest[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(QUESTS_KEY, JSON.stringify(quests));
  } catch {
    //
  }
}

export function generateLeaderboard(currentProfile: UserProfile, activeTab: 'all' | 'g10' | 'g11' | 'g12' | 'friends'): LeaderboardEntry[] {
  const npcRanks: LeaderboardEntry[] = [
    { rank: 1, id: 'npc1', nickname: 'Bắc Kiều Phong', grade: 12, avatar: PLAYER_AVATARS[1].image, title: 'Nhất Đại Cao Thủ', level: 32, xp: 4850, badge: 'Đệ Nhất Giang Hồ' },
    { rank: 2, id: 'npc2', nickname: 'Nam Mộ Dung', grade: 12, avatar: PLAYER_AVATARS[3].image, title: 'Võ Học Tông Sư', level: 28, xp: 4120, badge: 'Vạn Kiếm Tông Sư' },
    { rank: 3, id: 'npc3', nickname: 'Tiểu Long Nữ', grade: 11, avatar: PLAYER_AVATARS[0].image, title: 'Danh Chấn Võ Lâm', level: 25, xp: 3790, badge: 'Ngọc Nữ Tâm Kinh' },
    { rank: 4, id: 'npc4', nickname: 'Lý Tầm Hoan', grade: 11, avatar: PLAYER_AVATARS[1].image, title: 'Danh Chấn Võ Lâm', level: 22, xp: 3240, badge: 'Tiểu Lý Phi Đao' },
    { rank: 5, id: 'npc5', nickname: 'Hoàng Dung', grade: 10, avatar: PLAYER_AVATARS[2].image, title: 'Uy Chấn Tứ Hải', level: 19, xp: 2680, badge: 'Trí Dũng Song Toàn' },
    { rank: 6, id: 'npc6', nickname: 'Dương Quá', grade: 11, avatar: PLAYER_AVATARS[1].image, title: 'Uy Chấn Tứ Hải', level: 17, xp: 2310, badge: 'Huyền Thiết Trọng Kiếm' },
    { rank: 7, id: 'npc7', nickname: 'Triệu Mẫn', grade: 10, avatar: PLAYER_AVATARS[0].image, title: 'Phong Vân Kiếm Khách', level: 14, xp: 1950, badge: 'Thần Toán Tử' },
    { rank: 8, id: 'npc8', nickname: 'Trương Vô Kỵ', grade: 12, avatar: PLAYER_AVATARS[3].image, title: 'Phong Vân Kiếm Khách', level: 12, xp: 1620, badge: 'Cửu Dương Chân Kinh' },
    { rank: 9, id: 'npc9', nickname: 'Chu Chỉ Nhược', grade: 10, avatar: PLAYER_AVATARS[4].image, title: 'Thiếu Hiệp Sơ Xuất', level: 8, xp: 980, badge: 'Cửu Âm Bạch Cốt' }
  ];

  // Insert current player
  const list: LeaderboardEntry[] = [...npcRanks];
  const userEntry: LeaderboardEntry = {
    rank: 0,
    id: currentProfile.id,
    nickname: currentProfile.nickname,
    grade: currentProfile.grade,
    avatar: currentProfile.avatar,
    title: currentProfile.title,
    level: currentProfile.level,
    xp: currentProfile.xp,
    badge: currentProfile.badges[0] || 'Tân Thủ Giang Hồ',
    isCurrentUser: true
  };
  list.push(userEntry);

  // Filter based on tab
  let filtered = list;
  if (activeTab === 'g10') filtered = list.filter(item => item.grade === 10);
  if (activeTab === 'g11') filtered = list.filter(item => item.grade === 11);
  if (activeTab === 'g12') filtered = list.filter(item => item.grade === 12);
  if (activeTab === 'friends') {
    const friendNames = INITIAL_FRIENDS.map(f => f.nickname);
    filtered = list.filter(item => item.isCurrentUser || friendNames.includes(item.nickname));
  }

  // Sort by XP descending
  filtered.sort((a, b) => b.xp - a.xp);

  // Recalculate rank 1-indexed
  return filtered.map((item, idx) => ({
    ...item,
    rank: idx + 1
  }));
}

export interface WeakQuestionItem {
  id: string;
  unitId: string;
  unitTitle: string;
  grade: Grade;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  wrongCount: number;
  consecutiveCorrect: number;
  mastered: boolean;
  lastFailedAt: string;
}

const WEAK_QUESTIONS_KEY = 'wulin_weak_questions_v1';

export function getWeakQuestions(): WeakQuestionItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(WEAK_QUESTIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveWeakQuestion(item: {
  id: string;
  unitId: string;
  unitTitle: string;
  grade: Grade;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}): void {
  if (typeof window === 'undefined') return;
  try {
    const list = getWeakQuestions();
    const existingIdx = list.findIndex((q) => q.id === item.id || q.prompt === item.prompt);
    if (existingIdx >= 0) {
      list[existingIdx].wrongCount += 1;
      list[existingIdx].consecutiveCorrect = 0;
      list[existingIdx].mastered = false;
      list[existingIdx].lastFailedAt = new Date().toISOString();
    } else {
      list.push({
        ...item,
        wrongCount: 1,
        consecutiveCorrect: 0,
        mastered: false,
        lastFailedAt: new Date().toISOString()
      });
    }
    localStorage.setItem(WEAK_QUESTIONS_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('saveWeakQuestion error', e);
  }
}

export function recordWeakQuestionResult(id: string, isCorrect: boolean): WeakQuestionItem | undefined {
  if (typeof window === 'undefined') return undefined;
  try {
    const list = getWeakQuestions();
    const item = list.find((q) => q.id === id);
    if (!item) return undefined;

    if (isCorrect) {
      item.consecutiveCorrect += 1;
      if (item.consecutiveCorrect >= 2) {
        item.mastered = true;
      }
    } else {
      item.consecutiveCorrect = 0;
      item.wrongCount += 1;
      item.mastered = false;
      item.lastFailedAt = new Date().toISOString();
    }
    localStorage.setItem(WEAK_QUESTIONS_KEY, JSON.stringify(list));
    return item;
  } catch (e) {
    console.warn('recordWeakQuestionResult error', e);
    return undefined;
  }
}

export function removeWeakQuestion(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const list = getWeakQuestions().filter((q) => q.id !== id);
    localStorage.setItem(WEAK_QUESTIONS_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('removeWeakQuestion error', e);
  }
}

