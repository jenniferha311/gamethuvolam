import React, { useState } from 'react';
import { UnitRealm, VocabularyItem, UserProfile } from '../types/game';
import { Volume2, RotateCw, CheckCircle2, ChevronLeft, ChevronRight, BookOpen, Sparkles, Sword, FileText, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { soundEffects } from '../lib/audio';
import { saveWeakQuestion } from '../lib/storage';

interface FlashcardsProps {
  unit: UnitRealm;
  onProceedToPractice: () => void;
  onBackToMap: () => void;
  profile?: UserProfile;
}

export const Flashcards: React.FC<FlashcardsProps> = ({
  unit,
  onProceedToPractice,
  onBackToMap,
  profile
}) => {
  const [activeTab, setActiveTab] = useState<'vocab' | 'passage'>('vocab');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredWords, setMasteredWords] = useState<string[]>([]);
  const [unmasteredWords, setUnmasteredWords] = useState<string[]>([]);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const vocab = unit.vocabulary;
  const currentItem: VocabularyItem = vocab[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setFeedbackMsg(null);
    if (currentIndex < vocab.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setFeedbackMsg(null);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMarkRemembered = () => {
    soundEffects.playHeartChime();
    if (!masteredWords.includes(currentItem.id)) {
      setMasteredWords((prev) => [...prev, currentItem.id]);
    }
    setUnmasteredWords((prev) => prev.filter((id) => id !== currentItem.id));
    setFeedbackMsg('Đã ghi nhớ khẩu quyết này!');
    setTimeout(() => {
      if (currentIndex < vocab.length - 1) {
        handleNext();
      }
    }, 500);
  };

  const handleMarkForgotten = () => {
    soundEffects.playDamageTaken();
    if (!unmasteredWords.includes(currentItem.id)) {
      setUnmasteredWords((prev) => [...prev, currentItem.id]);
    }
    setMasteredWords((prev) => prev.filter((id) => id !== currentItem.id));

    // Save automatically into Weak Questions for Retrieval Practice
    saveWeakQuestion({
      id: `vocab_${currentItem.id}`,
      unitId: unit.id,
      unitTitle: unit.realmName,
      grade: unit.grade,
      prompt: `Từ vựng cần củng cố: "${currentItem.word}" (${currentItem.ipa}) - ${currentItem.partOfSpeech}. Hãy chọn ý nghĩa chuẩn xác nhất:`,
      options: [
        currentItem.meaningVi,
        'Hành động không liên quan trong ngữ cảnh',
        'Một trạng thái tâm lý đối lập hoàn toàn',
        'Khái niệm mang ý nghĩa tiêu cực'
      ],
      correctAnswer: currentItem.meaningVi,
      explanation: `Từ "${currentItem.word}" có nghĩa là: "${currentItem.meaningVi}". Khẩu quyết: ${currentItem.collocation || currentItem.example}`
    });

    setFeedbackMsg('Đã lưu vào danh sách "🔥 LUYỆN LẠI ĐIỂM YẾU"!');
    setTimeout(() => {
      if (currentIndex < vocab.length - 1) {
        handleNext();
      }
    }, 700);
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
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-300 transition-colors cursor-pointer"
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
          Lĩnh Hội Tâm Pháp & Bài Đọc Hiểu
        </h2>
        <p className="text-xs text-neutral-400 font-serif-wuxia mt-1">
          Hộ pháp <strong className="text-amber-300">{unit.guardianName}</strong> truyền trao khẩu quyết từ vựng, từ đồng nghĩa/trái nghĩa cấp cao và bài đọc hiểu cho {profile?.nickname ? <strong className="text-amber-300">hiệp khách {profile.nickname}</strong> : 'hiệp khách'}.
        </p>
      </div>

      {/* Tabs Switcher: Vocabulary vs Reading Passage */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <button
          onClick={() => {
            setActiveTab('vocab');
            soundEffects.playCardFlip();
          }}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold font-wuxia transition-all cursor-pointer ${
            activeTab === 'vocab'
              ? 'bg-gradient-to-r from-red-800 to-amber-700 text-amber-100 border border-amber-400 shadow-md scale-105'
              : 'bg-neutral-900/90 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Thẻ Từ Vựng & Đồng/Trái Nghĩa ({vocab.length})</span>
        </button>

        {unit.readingPassage && (
          <button
            onClick={() => {
              setActiveTab('passage');
              soundEffects.playCardFlip();
            }}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold font-wuxia transition-all cursor-pointer ${
              activeTab === 'passage'
                ? 'bg-gradient-to-r from-amber-700 to-yellow-600 text-neutral-950 border border-amber-300 shadow-md scale-105'
                : 'bg-neutral-900/90 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>📜 Bài Đọc Hiểu (Reading Passage)</span>
          </button>
        )}
      </div>

      {/* TAB 1: FLASHCARDS WITH SYNONYMS & ANTONYMS */}
      {activeTab === 'vocab' && (
        <>
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
              className={`relative min-h-[360px] sm:min-h-[400px] w-full rounded-2xl cursor-pointer p-6 sm:p-8 transition-all duration-500 border-2 select-none shadow-2xl flex flex-col justify-between ${
                isFlipped
                  ? 'bg-gradient-to-br from-[#181a28] via-[#10121d] to-[#0a0c13] border-amber-500/80 text-neutral-100'
                  : 'bg-gradient-to-br from-[#2a0e12] via-[#1b080a] to-[#0f0406] border-red-700/80 text-neutral-100'
              }`}
            >
              {/* Top Card Bar */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10 text-amber-300 font-bold">
                  {currentItem.partOfSpeech}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMastery(currentItem.id);
                    }}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${
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
                    className="p-1.5 rounded-full bg-black/40 text-neutral-400 hover:text-white cursor-pointer"
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
                      className="p-2 rounded-full bg-red-900/60 hover:bg-red-800 text-amber-300 border border-red-700 transition-transform active:scale-90 cursor-pointer"
                      title="Phát âm tiếng Anh chuẩn"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-xs text-neutral-400 font-serif-wuxia italic">
                    (Nhấp vào thẻ để xem dịch nghĩa, từ đồng/trái nghĩa & ví dụ thực chiến)
                  </p>
                </div>
              ) : (
                <div className="text-left my-auto py-2 space-y-3">
                  {/* Meaning */}
                  <div>
                    <span className="text-[11px] text-amber-400 font-mono uppercase tracking-wider block mb-0.5">
                      Ý Nghĩa Tiếng Việt:
                    </span>
                    <p className="text-lg sm:text-xl font-bold text-white font-serif-wuxia">
                      {currentItem.meaningVi}
                    </p>
                  </div>

                  {/* Synonyms & Antonyms (High Level) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentItem.synonyms && currentItem.synonyms.length > 0 && (
                      <div className="bg-purple-950/40 p-2.5 rounded-lg border border-purple-800/60">
                        <span className="text-[10px] text-purple-300 font-mono font-bold block mb-1">
                          ⚡ TỪ ĐỒNG NGHĨA (SYNONYMS - B2/C1):
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentItem.synonyms.map((syn, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-purple-900/60 text-purple-200 text-xs font-mono font-semibold">
                              {syn}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentItem.antonyms && currentItem.antonyms.length > 0 && (
                      <div className="bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/60">
                        <span className="text-[10px] text-rose-300 font-mono font-bold block mb-1">
                          ⚔️ TỪ TRÁI NGHĨA (ANTONYMS - B2/C1):
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentItem.antonyms.map((ant, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-rose-900/60 text-rose-200 text-xs font-mono font-semibold">
                              {ant}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Collocation */}
                  <div className="bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800">
                    <span className="text-[10px] text-emerald-400 font-mono block mb-0.5 font-bold">
                      Khẩu Quyết Cố Định (Collocation):
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-amber-200 font-mono">
                      {currentItem.collocation}
                    </p>
                  </div>

                  {/* Example */}
                  <div className="bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800">
                    <span className="text-[10px] text-blue-400 font-mono block mb-0.5 font-bold">
                      Ví Dụ Thực Chiến (Example):
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 italic font-serif-wuxia">
                      "{currentItem.example}"
                    </p>
                    {currentItem.exampleVi && (
                      <p className="text-xs text-amber-200/90 font-serif-wuxia mt-1 pt-1 border-t border-white/10">
                        👉 {currentItem.exampleVi}
                      </p>
                    )}
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

          {/* Feedback banner if marked */}
          {feedbackMsg && (
            <div className="mb-4 py-2 px-4 rounded-xl bg-amber-950/70 border border-amber-600/50 text-amber-200 text-xs font-mono font-bold flex items-center justify-center gap-2 animate-fadeIn">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
              <span>{feedbackMsg}</span>
            </div>
          )}

          {/* Flashcard Action Buttons: ĐÃ NHỚ & CHƯA NHỚ */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            <button
              onClick={() => {
                setIsFlipped(!isFlipped);
                soundEffects.playSwordSlash();
              }}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-bold text-neutral-200 cursor-pointer shadow transition-all active:scale-95"
            >
              <RotateCw className="w-4 h-4 text-amber-400" />
              <span>Lật Thẻ</span>
            </button>

            <button
              onClick={handleMarkRemembered}
              className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold font-mono cursor-pointer shadow transition-all active:scale-95 ${
                masteredWords.includes(currentItem.id)
                  ? 'bg-emerald-800 border-emerald-400 text-white'
                  : 'bg-emerald-950/80 hover:bg-emerald-900 border-emerald-600/80 text-emerald-200'
              }`}
            >
              <Check className="w-4 h-4 text-emerald-400" />
              <span>ĐÃ NHỚ</span>
            </button>

            <button
              onClick={handleMarkForgotten}
              className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold font-mono cursor-pointer shadow transition-all active:scale-95 ${
                unmasteredWords.includes(currentItem.id)
                  ? 'bg-rose-800 border-rose-400 text-white'
                  : 'bg-rose-950/80 hover:bg-rose-900 border-rose-600/80 text-rose-200'
              }`}
              title="Lưu vào Luyện Lại Điểm Yếu"
            >
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>CHƯA NHỚ</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playVictoryFanfare();
                onProceedToPractice();
              }}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-wuxia font-bold text-xs text-neutral-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 border border-amber-300 shadow cursor-pointer transition-all active:scale-95"
            >
              <Sword className="w-4 h-4" />
              <span>Luyện Công →</span>
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Trước
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === vocab.length - 1}
                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Sau
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-neutral-400 font-mono">
              Từ {currentIndex + 1} / {vocab.length}
            </div>
          </div>
        </>
      )}

      {/* TAB 2: READING PASSAGE VIEW */}
      {activeTab === 'passage' && unit.readingPassage && (
        <div className="wuxia-card rounded-2xl p-6 sm:p-8 border border-amber-600/50 shadow-2xl text-left bg-gradient-to-b from-[#1c1917] to-[#0c0a09]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-amber-700/40">
            <div>
              <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                Chủ Đề Đọc Hiểu Võ Học (Reading Comprehension):
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-wuxia text-amber-200 mt-1">
                {unit.readingPassage.title}
              </h3>
              <p className="text-xs text-neutral-400 font-serif-wuxia mt-0.5">
                {unit.readingPassage.topic}
              </p>
            </div>

            <button
              onClick={(e) => handleSpeak(e, unit.readingPassage?.fullText || '')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 text-amber-300 text-xs font-mono font-bold cursor-pointer transition-colors self-start sm:self-auto"
              title="Lắng nghe giọng đọc AI toàn bài"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>Nghe Toàn Bài</span>
            </button>
          </div>

          {/* Passage Body */}
          <div className="text-neutral-200 text-sm sm:text-base font-serif-wuxia leading-relaxed space-y-4 mb-6 bg-black/40 p-5 rounded-xl border border-neutral-800">
            {unit.readingPassage.fullText.split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx} className="indent-4 text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights & Key Takeaway */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-amber-700/30">
            <div className="bg-amber-950/30 p-3.5 rounded-xl border border-amber-700/50">
              <span className="text-xs font-bold text-amber-300 font-mono block mb-1">
                🔑 Ý Nghĩa Cốt Lõi (Key Takeaway):
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 font-serif-wuxia">
                {unit.readingPassage.keyTakeaway}
              </p>
            </div>

            <div className="bg-red-950/30 p-3.5 rounded-xl border border-red-700/50">
              <span className="text-xs font-bold text-red-300 font-mono block mb-1">
                📚 Từ Vựng Trọng Tâm Trong Bài:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {unit.readingPassage.vocabularyHighlights?.map((w, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-neutral-900 border border-amber-500/40 text-amber-200 text-xs font-mono font-bold">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action to Practice */}
          <div className="mt-6 text-right">
            <button
              onClick={() => {
                soundEffects.playVictoryFanfare();
                onProceedToPractice();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 border border-amber-300 shadow-xl cursor-pointer"
            >
              <span>Vào Làm Bài Tập Đọc Hiểu & Từ Vựng (Bước 2)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
