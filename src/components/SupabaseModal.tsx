import React, { useState } from 'react';
import { X, Database, Copy, Check, ShieldCheck, Key, Server, Terminal } from 'lucide-react';

interface SupabaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUPABASE_SQL_SCHEMA = `-- ==========================================
-- PHUONG CHICK ENGLISH WULIN - SUPABASE DDL
-- Master schema: profiles, progress, friendships, love_logs, badges, daily_quests
-- ==========================================

-- 1. Profiles Table
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

-- 2. Progress Table
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

-- 3. Friendships Table (Bằng Hữu)
create table if not exists friendships (
  id bigint generated always as identity primary key,
  requester_id uuid references profiles(id) on delete cascade,
  addressee_id uuid references profiles(id) on delete cascade,
  status text default 'pending' check (status in ('pending','accepted','rejected')),
  created_at timestamptz default now()
);

-- 4. Love Logs Table (Gửi Tâm Ý - max 5/ngày)
create table if not exists love_logs (
  id bigint generated always as identity primary key,
  sender_id uuid references profiles(id) on delete cascade,
  receiver_id uuid references profiles(id) on delete cascade,
  sent_date date default current_date,
  created_at timestamptz default now()
);

-- 5. Badges Table (Huy Hiệu Võ Lâm)
create table if not exists badges (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id) on delete cascade,
  badge_key text not null,
  unlocked_at timestamptz default now(),
  unique(user_id, badge_key)
);

-- 6. Daily Quests Table (Nhiệm Vụ Sư Môn)
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

-- Enable Row Level Security (RLS)
alter table profiles enable row level security;
alter table progress enable row level security;
alter table friendships enable row level security;
alter table love_logs enable row level security;
alter table badges enable row level security;
alter table daily_quests enable row level security;

-- Public leaderboard policy (everyone can read profiles)
create policy "Allow public read on profiles" on profiles for select using (true);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can read own progress" on progress for all using (auth.uid() = user_id);
`;

export const SupabaseModal: React.FC<SupabaseModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');
  const [savedStatus, setSavedStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('supabase_custom_url', supabaseUrl);
      localStorage.setItem('supabase_custom_key', supabaseKey);
    }
    setSavedStatus('Đã lưu cấu hình kết nối Supabase thành công!');
    setTimeout(() => setSavedStatus(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-emerald-600/80 bg-gradient-to-b from-[#0b1411] via-[#08100d] to-[#0c0d14] p-6 sm:p-8 text-neutral-100 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-emerald-400 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 border border-emerald-600 text-emerald-300 mb-2">
            <Database className="w-3.5 h-3.5" />
            KẾT NỐI SUPABASE CLOUD & SCHEMA DDL
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-100">
            Kiến Trúc Lưu Trữ Đám Mây (Supabase + Vercel)
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia mt-1">
            Ứng dụng vận hành linh hoạt: Chơi ngay ở chế độ Cục Bộ (Guest) hoặc kết nối Supabase Postgres cho hệ thống Bằng Hữu, Gửi Tâm Ý và Xếp Hạng.
          </p>
        </div>

        {savedStatus && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-200 text-xs text-center font-bold">
            {savedStatus}
          </div>
        )}

        {/* SQL Schema Copy Block */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Mã SQL Thiết Lập Bảng (Chạy trong SQL Editor của Supabase):
            </span>
            <button
              onClick={handleCopySql}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-emerald-300 text-xs font-mono border border-neutral-600 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã Sao Chép SQL' : 'Sao Chép SQL'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-[11px] text-emerald-200/90 overflow-x-auto max-h-52 text-left leading-relaxed">
            {SUPABASE_SQL_SCHEMA}
          </pre>
        </div>

        {/* Free-Tier Optimization Rules Summary */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-left mb-6 text-xs leading-relaxed">
          <div className="font-bold text-amber-300 mb-2 font-wuxia">
            ⚡ Nguyên Tắc Tối Ưu Hóa Gói Miễn Phí (Vercel Hobby + Supabase Free):
          </div>
          <ul className="list-disc list-inside space-y-1 text-neutral-400 font-serif-wuxia">
            <li>Nội dung 30 Units học tập được đóng gói tĩnh dạng JSON, không tốn băng thông database.</li>
            <li>Âm thanh võ hiệp và phát âm từ vựng sử dụng Web Audio API & SpeechSynthesis của trình duyệt.</li>
            <li>Chỉ ghi nhận database khi đạt cột mốc: hoàn thành Unit, gửi Tâm Ý, nhận huân chương.</li>
            <li>Không polling liên tục bảng xếp hạng; bảng xếp hạng cập nhật theo sự kiện.</li>
          </ul>
        </div>

        {/* Custom Supabase Keys Input */}
        <form onSubmit={handleSaveConfig} className="space-y-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">
                NEXT_PUBLIC_SUPABASE_URL:
              </label>
              <input
                type="text"
                placeholder="https://xyzcompany.supabase.co"
                value={supabaseUrl}
                onChange={(e) => setSupabaseUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-emerald-200 focus:outline-none focus:border-emerald-400 font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">
                NEXT_PUBLIC_SUPABASE_ANON_KEY:
              </label>
              <input
                type="password"
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC..."
                value={supabaseKey}
                onChange={(e) => setSupabaseKey(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-emerald-200 focus:outline-none focus:border-emerald-400 font-mono"
              />
            </div>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 border border-emerald-300 shadow-md cursor-pointer"
            >
              Lưu Cấu Hình Supabase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
