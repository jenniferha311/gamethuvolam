import React, { useState } from 'react';
import { UnitRealm, VocabularyItem } from '../types/game';
import { Volume2, RotateCw, CheckCircle2, ChevronLeft, ChevronRight, BookOpen, Sparkles, Sword } from 'lucide-react';
import { soundEffects } from '../lib/audio';

interface FlashcardsProps {
  unit: UnitRealm;
  onProceedToPractice: () => void;
  onBackToMap: () => void;
}

export const Flashcards: React.FC<FlashcardsProps> = ({
  unit,
  onProceedToPractice,
  onBackToMap
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredWords, setMasteredWords] = useState<string[]>([]);

  const vocab = unit.vocabulary;
  const currentItem: VocabularyItem = vocab[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < vocab.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleMastery = (wordId: string) => {
    soundEffects.playHeartChime();
    setMasteredWords((prev) =>
      prev.includes(wordId) ? prev.filter((id) => id !== wordId) : [...prev, wordId]
    );
  };

  const handleSpeak = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    soundEffects.speakEnglish(text);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-300 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Bản Đồ Giang Hồ</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-red-950/80 text-amber-300 border border-red-800 px-3 py-1 rounded-full font-mono">
            {unit.realmName}
          </span>
        </div>
      </div>

      {/* Title & Lore */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1 text-xs text-amber-400 font-mono mb-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>BƯỚC 1: TÀNG KINH CÁC VÕ HỌC</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-amber-100">
          Lĩnh Hội Tâm Pháp Từ Vựng
        </h2>
        <p className="text-xs text-neutral-400 font-serif-wuxia mt-1">
          Hộ pháp <strong>{unit.guardianName}</strong> truyền trao khẩu quyết từ vựng cốt lõi. Nhấp vào thẻ để lật giải nghĩa.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
        <span>Từ {currentIndex + 1} / {vocab.length}</span>
        <span className="text-amber-400 font-semibold font-mono">
          Đã Lĩnh Hội: {masteredWords.length}/{vocab.length}
        </span>
      </div>
      <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden mb-6 border border-neutral-800">
        <div
          className="h-full bg-gradient-to-r from-red-600 to-amber-500 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / vocab.length) * 100}%` }}
        />
      </div>

      {/* Interactive 3D Flashcard Container */}
      <div className="perspective-1000 mb-6">
        <div
          onClick={() => {
            setIsFlipped(!isFlipped);
            soundEffects.playSwordSlash();
          }}
          className={`relative min-h-[320px] sm:min-h-[360px] w-full rounded-2xl cursor-pointer p-6 sm:p-10 transition-all duration-500 border-2 select-none shadow-2xl flex flex-col justify-between ${
            isFlipped
              ? 'bg-gradient-to-br from-[#1a1c29] to-[#0f111a] border-amber-500/80 text-neutral-100'
              : 'bg-gradient-to-br from-[#2a0e12] to-[#120709] border-red-700/80 text-neutral-100'
          }`}
        >
          {/* Top Card Bar */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/40 border border-white/10 text-amber-300">
              {currentItem.partOfSpeech}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMastery(currentItem.id);
                }}
                className={`p-1.5 rounded-full transition-colors ${
                  masteredWords.includes(currentItem.id)
                    ? 'bg-emerald-600 text-white'
                    : 'bg-black/40 text-neutral-400 hover:text-white'
                }`}
                title="Đánh dấu đã lĩnh hội"
              >
                <CheckCircle2 className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(!isFlipped);
                }}
                className="p-1.5 rounded-full bg-black/40 text-neutral-400 hover:text-white"
                title="Lật thẻ"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Front vs Back Card Body */}
          {!isFlipped ? (
            <div className="text-center my-auto py-6">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-amber-200 tracking-wide font-wuxia mb-3">
                {currentItem.word}
              </h3>
              
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-base sm:text-lg text-neutral-400 font-mono">
                  {currentItem.ipa}
                </span>
                <button
                  onClick={(e) => handleSpeak(e, currentItem.word)}
                  className="p-2 rounded-full bg-red-900/60 hover:bg-red-800 text-amber-300 border border-red-700 transition-transform active:scale-90"
                  title="Phát âm tiếng Anh"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-neutral-400 font-serif-wuxia italic">
                (Nhấp vào thẻ để xem dịch nghĩa & ngữ cảnh võ lâm)
              </p>
            </div>
          ) : (
            <div className="text-left my-auto py-4">
              <div className="mb-4">
                <span className="text-[11px] text-amber-400 font-mono uppercase tracking-wider block mb-1">
                  Ý Nghĩa Tiếng Việt:
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white font-serif-wuxia">
                  {currentItem.meaningVi}
                </p>
              </div>

              <div className="mb-4 bg-neutral-900/60 p-3.5 rounded-lg border border-neutral-800">
                <span className="text-[11px] text-emerald-400 font-mono block mb-1">
                  Khẩu Quyết Cố Định (Collocation):
                </span>
                <p className="text-sm font-semibold text-amber-200 font-mono">
                  {currentItem.collocation}
                </p>
              </div>

              <div className="bg-neutral-900/60 p-3.5 rounded-lg border border-neutral-800">
                <span className="text-[11px] text-blue-400 font-mono block mb-1">
                  Ví Dụ Thực Chiến (Example):
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 italic font-serif-wuxia">
                  "{currentItem.example}"
                </p>
              </div>
            </div>
          )}

          {/* Bottom Card Footer */}
          <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-white/10">
            <span>Bí Kíp Tàng Kinh Các</span>
            <span>Chạm để lật 🔄</span>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Trước
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === vocab.length - 1}
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Sau
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Proceed to Practice Button */}
        <button
          onClick={() => {
            soundEffects.playVictoryFanfare();
            onProceedToPractice();
          }}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-amber-200 bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-700 hover:to-amber-600 border border-amber-400 shadow-lg cursor-pointer"
        >
          <Sword className="w-4 h-4 text-amber-300" />
          <span>Tiến Vào Luyện Công (Bước 2) →</span>
        </button>
      </div>
    </div>
  );
};
