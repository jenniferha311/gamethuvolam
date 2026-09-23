export type Grade = 10 | 11 | 12;

export interface VocabularyItem {
  id: string;
  word: string;
  ipa: string;
  meaningVi: string;
  partOfSpeech: string;
  collocation: string;
  example: string;
  audioText?: string;
}

export interface PracticeQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'collocation';
  prompt: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface BossQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index 0-3
  damage: number;
  explanation: string;
}

export interface UnitRealm {
  id: string;
  grade: Grade;
  unit: number;
  title: string;
  realmName: string;
  guardianName: string;
  guardianColor: string;
  storyIntro: string;
  bossName: string;
  bossTitle: string;
  bossHp: number;
  xpReward: number;
  vocabulary: VocabularyItem[];
  practice: PracticeQuestion[];
  bossQuestions: BossQuestion[];
}

export interface Guardian {
  id: string;
  name: string;
  title: string;
  specialty: string;
  colorName: string;
  colorHex: string;
  quote: string;
  description: string;
  image: string;
}

export interface PlayerAvatar {
  id: string;
  name: string;
  gender: 'female' | 'male';
  title: string;
  image: string;
  sect: string;
  description: string;
}

export interface UserProfile {
  id: string;
  nickname: string;
  grade: Grade;
  avatar: string;
  avatarId: string;
  level: number;
  xp: number;
  maxHp: number;
  hp: number;
  energy: number; // Nội lực
  maxEnergy: number;
  title: string;
  streak: number;
  sect: string;
  lastLoginDate: string;
  loveSentToday: number;
  badges: string[];
  completedUnits: { [unitId: string]: { completed: boolean; score: number; stars: number } };
}

export interface Friend {
  id: string;
  nickname: string;
  grade: Grade;
  avatar: string;
  level: number;
  xp: number;
  title: string;
  hasSentLoveToday: boolean;
  canSendLove: boolean;
}

export interface DailyQuest {
  id: string;
  title: string;
  desc: string;
  target: number;
  current: number;
  xpReward: number;
  completed: boolean;
  claimed: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  id: string;
  nickname: string;
  grade: Grade;
  avatar: string;
  title: string;
  level: number;
  xp: number;
  badge: string;
  isCurrentUser?: boolean;
}
