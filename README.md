# PHUONG CHICK ENGLISH WULIN
> **Tam Niên Anh Ngữ – Nhất Thống Võ Lâm**

A high-fantasy, playable wuxia RPG English learning web application designed for Vietnamese high school students based on the **Global Success Grade 10, 11, and 12 curriculum**, inspired by teacher **Ms. Hà Ánh Phượng** (Bang Chủ) and the **Five Guardians of English Wulin**.

---

## 🗡️ Key Features

- **Bang Chủ Ms. Hà Ánh Phượng**: Cinematic red-and-black fantasy heroine with glasses, sword, interactive martial quotes, and guidance.
- **Five Guardians (Ngũ Đại Hộ Pháp)**:
  - *Mr. Đặng Trần Hà* (Navy Blue - Grammar & Logic)
  - *Ms. Liên Phạm* (Purple - Speaking & Communication)
  - *Ms. Phương Tú* (Green / Emerald - Vocabulary & Growth)
  - *Ms. Nguyệt Nguyễn* (Moon White / Silver - Reading & Comprehension)
  - *Ms. Hoàng Vân* (Gold / Amber - Listening & Rhythm)
- **Authentic Chinese Wuxia Avatars**:
  - High fantasy male and female peerless martial hero avatars (Hồng Nhan Kiếm Thần, Thiếu Niên Hiệp Khách, Thần Nữ Tiêu Dao, Bạch Nguyệt Tiên Tử).
  - Avatar Studio & sect selection (Nga Mi, Hoa Sơn, Võ Đang, Tiêu Dao, Cổ Mộ, English Wulin).
- **Three Martial Stages (30 Realms)**:
  - *Grade 10*: Sơ Nhập Giang Hồ
  - *Grade 11*: Hành Tẩu Võ Lâm
  - *Grade 12*: Nhất Đại Cao Thủ
- **Complete Gameplay Loop**:
  1. *Story Intro*: Meet the guardian and receive martial commission
  2. *Tàng Kinh Các*: Vocabulary flashcards with audio pronunciation, IPA, collocation, and example sentences
  3. *Luyện Công*: Practice arena with multiple choice, matching, fill-in-the-blank, and combo multipliers
  4. *Phá Quan Trảm Tướng*: Real-time Boss battle with animated sword slashes, floating damage numbers, boss HP, combo critical hits, and victory rewards
- **Social & Community**:
  - *Bằng Hữu*: Search and add friends
  - *Gửi Tâm Ý*: Send Love (max 5/day, +5 Nội lực for friend)
  - *Võ Lâm Cao Thủ*: Leaderboard with real-time gap tracking (*"Bạn đang #... — còn ... XP để vượt"*).
- **Engagement**:
  - Daily Quests (*Nhiệm vụ Sư Môn*)
  - Login Streak flame tracker
  - Collectible martial badges (*Huy hiệu Võ Lâm*)
- **Synthesized Audio Engine**:
  - Zero external sound asset lag: Built with Web Audio API synthesizers for metallic sword slashes, critical hit gongs, fanfares, and browser speech synthesis for English pronunciation.

---

## ⚡ Free-Tier Optimization Rules (Vercel + Supabase)

- **Zero Cost Audio**: All sound effects generated client-side via Web Audio API.
- **Static Curriculum**: Lesson content stored as optimized JSON to eliminate database query fees.
- **Milestone Persistence**: Database writes only occur on milestone events (unit completion, quest claim, send love), not on every quiz click.
- **Hybrid Guest Mode**: Instant play without requiring account creation (stored in localStorage) with seamless Supabase cloud sync when credentials are provided.

---

## 🚀 Local Installation

```bash
# 1. Clone repository
git clone https://github.com/your-username/phuong-chick-english-wulin.git
cd phuong-chick-english-wulin

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🗄️ Supabase Database Setup

Run the following SQL in your Supabase SQL Editor:

```sql
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nickname text unique not null,
  grade int check (grade in (10,11,12)),
  avatar text,
  level int default 1,
  xp int default 0,
  title text default 'Tân Thủ Giang Hồ',
  sect text default 'English Wulin Tông Môn',
  streak int default 1,
  created_at timestamptz default now()
);

create table if not exists progress (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id) on delete cascade,
  unit_id text not null,
  grade int not null,
  completed boolean default false,
  score int default 0,
  stars int default 0,
  updated_at timestamptz default now(),
  unique(user_id, unit_id)
);

create table if not exists friendships (
  id bigint generated always as identity primary key,
  requester_id uuid references profiles(id) on delete cascade,
  addressee_id uuid references profiles(id) on delete cascade,
  status text default 'pending' check (status in ('pending','accepted','rejected')),
  created_at timestamptz default now()
);

create table if not exists love_logs (
  id bigint generated always as identity primary key,
  sender_id uuid references profiles(id) on delete cascade,
  receiver_id uuid references profiles(id) on delete cascade,
  sent_date date default current_date,
  created_at timestamptz default now()
);

create table if not exists badges (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id) on delete cascade,
  badge_key text not null,
  unlocked_at timestamptz default now(),
  unique(user_id, badge_key)
);

create table if not exists daily_quests (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id) on delete cascade,
  quest_key text not null,
  progress int default 0,
  target int default 1,
  completed boolean default false,
  quest_date date default current_date,
  updated_at timestamptz default now(),
  unique(user_id, quest_key, quest_date)
);
```

---

## 📜 Adding More Curriculum Units

Add new unit entries in `src/data/units.ts`:

```typescript
{
  id: 'g10-u04',
  grade: 10,
  unit: 4,
  title: 'For A Better Community',
  realmName: 'Nghĩa Hiệp Cảnh - Tương Trợ Đồng Bào',
  guardianName: 'Phương Tú',
  guardianColor: '#059669',
  storyIntro: '...',
  bossName: 'Vô Cảm Quỷ Vương',
  bossTitle: 'Hóa Thân Ích Kỷ',
  bossHp: 140,
  xpReward: 180,
  vocabulary: [...],
  practice: [...],
  bossQuestions: [...]
}
```
