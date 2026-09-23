import React, { useState, useEffect } from 'react';
import { BANG_CHU } from '../data/characters';
import { Volume2, Sparkles, Sword, Play } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface BangChuBannerProps {
  onStartLearning: () => void;
  grade: 10 | 11 | 12;
  onSelectGrade: (grade: 10 | 11 | 12) => void;
}

export const BangChuBanner: React.FC<BangChuBannerProps> = ({
  onStartLearning,
  grade,
  onSelectGrade
}) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % BANG_CHU.quotes.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const handleSpeakQuote = () => {
    setIsSpeaking(true);
    soundEffects.playVictoryFanfare();
    setTimeout(() => setIsSpeaking(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-red-900/60 bg-gradient-to-r from-[#1b080a] via-[#160d13] to-[#0c0d15] shadow-2xl p-6 sm:p-8 mb-8">
      {/* Decorative Wuxia Background Patterns & Drifting Petals */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Petal Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-500/40 text-xs animate-[floatPetal_12s_infinite_linear]"
            style={{
              left: `${15 + i * 14}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${10 + (i % 3) * 3}s`
            }}
          >
            🌸
          </div>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Bang Chu Portrait & Halo */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative group">
            {/* Ornate Gold Border & Glowing Red Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-red-600 via-amber-500 to-red-700 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-xl overflow-hidden border-2 border-amber-400 shadow-2xl bg-black">
              <img
                src={BANG_CHU.image}
                alt={BANG_CHU.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              {/* Badge on Image */}
              <div className="absolute bottom-2 left-2 right-2 text-center bg-red-950/80 backdrop-blur-sm border border-red-700/60 rounded-md py-1 px-2">
                <p className="text-xs font-bold text-amber-300 font-wuxia tracking-wider">
                  BANG CHỦ HÀ ÁNH PHƯỢNG
                </p>
                <p className="text-[10px] text-red-200 font-serif-wuxia">
                  {BANG_CHU.weapon} • {BANG_CHU.signatureColor}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Wuxia Message, Story, Grade Selectors, & Launch Button */}
        <div className="lg:col-span-8 flex flex-col justify-center text-left">
          {/* Header Banner */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-900/80 text-amber-200 border border-red-600 shadow">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Minh Chủ Võ Lâm Anh Ngữ
            </span>
            <span className="text-xs text-amber-400/80 font-mono">
              Chương trình THPT Chuẩn Global Success
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold font-wuxia text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-red-400 tracking-wide mb-2 leading-tight">
            PHƯƠNG CHICK ENGLISH WULIN
          </h1>

          <p className="text-sm sm:text-base text-amber-200/90 font-serif-wuxia italic mb-4">
            « Tam Niên Anh Ngữ – Nhất Thống Võ Lâm »
          </p>

          {/* Bang Chu Interactive Speech Bubble */}
          <div className="relative bg-[#1f1115]/90 border border-red-700/60 rounded-xl p-4 sm:p-5 shadow-lg mb-6 backdrop-blur-sm">
            <div className="absolute -top-3 left-6 bg-red-800 text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded border border-red-500 flex items-center gap-1">
              <span>📜</span> Lời Dặn Của Bang Chủ
            </div>
            
            <p className="text-sm sm:text-base text-neutral-100 font-serif-wuxia leading-relaxed pt-1">
              “{BANG_CHU.quotes[currentQuoteIndex]}”
            </p>

            <div className="mt-3 flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-red-900/40">
              <span className="text-amber-400/80 text-[11px]">
                {currentQuoteIndex + 1} / {BANG_CHU.quotes.length} Khẩu Quyết
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentQuoteIndex((prev) => (prev + 1) % BANG_CHU.quotes.length)}
                  className="text-[11px] text-amber-300 hover:text-amber-100 hover:underline"
                >
                  Lời Dặn Tiếp Theo →
                </button>
                <button
                  onClick={handleSpeakQuote}
                  className="p-1 rounded bg-red-950/70 hover:bg-red-900 text-amber-300 border border-red-800 transition-colors"
                  title="Nghe âm vang bang chủ"
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-bounce text-amber-400' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Grade Selector (3 Martial Stages) */}
          <div className="mb-6">
            <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2">
              Chọn Cảnh Giới Tu Luyện (Khối Lớp):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { g: 10, title: 'Khối 10', stage: 'Sơ Nhập Giang Hồ', color: 'border-emerald-600/70 hover:border-emerald-400' },
                { g: 11, title: 'Khối 11', stage: 'Hành Tẩu Võ Lâm', color: 'border-blue-600/70 hover:border-blue-400' },
                { g: 12, title: 'Khối 12', stage: 'Nhất Đại Cao Thủ', color: 'border-red-600/70 hover:border-red-400' }
              ].map(({ g, title, stage, color }) => (
                <button
                  key={g}
                  onClick={() => {
                    onSelectGrade(g as 10 | 11 | 12);
                    soundEffects.playSwordSlash();
                  }}
                  className={`text-left p-3 rounded-lg border transition-all ${
                    grade === g
                      ? 'bg-red-900/40 border-amber-400 ring-2 ring-amber-400/50 shadow-lg shadow-amber-900/30'
                      : `bg-neutral-900/60 ${color} text-neutral-400 hover:bg-neutral-800/80`
                  }`}
                >
                  <div className="text-xs font-bold text-amber-300 flex items-center justify-between">
                    <span>{title}</span>
                    {grade === g && <span className="text-[10px] bg-amber-400 text-black px-1.5 rounded font-mono">Đang chọn</span>}
                  </div>
                  <div className="text-[11px] text-neutral-300 font-serif-wuxia mt-0.5">
                    {stage}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                soundEffects.playVictoryFanfare();
                onStartLearning();
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-wuxia font-bold text-sm sm:text-base text-amber-100 bg-gradient-to-r from-red-700 via-red-600 to-amber-700 hover:from-red-600 hover:to-amber-600 border border-amber-400/70 shadow-lg shadow-red-900/60 hover:shadow-amber-900/50 transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              <Sword className="w-5 h-5 text-amber-300" />
              <span>Nhập Giang Hồ Luyện Công</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
