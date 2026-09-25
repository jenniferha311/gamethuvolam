import React, { useState } from 'react';
import { UnitRealm, VocabularyItem, UserProfile } from '../types/game';
import { Volume2, Search, Filter, BookOpen, Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { soundEffects } from '../lib/audio';
import { saveWeakQuestion } from '../lib/storage';

interface VocabularyTabProps {
  unit: UnitRealm;
  profile?: UserProfile;
  onSelectWordForFlashcard?: (wordIndex: number) => void;
  onProceedToFlashcards: () => void;
  onShowToast?: (title: string, subtitle: string, icon?: string) => void;
}

export const VocabularyTab: React.FC<VocabularyTabProps> = ({
  unit,
  profile,
  onSelectWordForFlashcard,
  onProceedToFlashcards,
  onShowToast
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'noun' | 'verb' | 'adjective' | 'phrase'>('all');
  const [savedWords, setSavedWords] = useState<string[]>([]);

  const vocab = unit.vocabulary;

  const filteredVocab = vocab.filter((item) => {
    const matchesSearch =
      item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaningVi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.collocation && item.collocation.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'noun') return item.partOfSpeech.toLowerCase().includes('noun');
    if (selectedFilter === 'verb') return item.partOfSpeech.toLowerCase().includes('verb');
    if (selectedFilter === 'adjective') return item.partOfSpeech.toLowerCase().includes('adj');
    if (selectedFilter === 'phrase') return item.partOfSpeech.toLowerCase().includes('phrase');
    return true;
  });

  const handleSpeak = (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    soundEffects.speakEnglish(word);
  };

  const handleSaveToWeak = (e: React.MouseEvent, item: VocabularyItem) => {
    e.stopPropagation();
    soundEffects.playDamageTaken();
    saveWeakQuestion({
      id: `vocab_${item.id}`,
      unitId: unit.id,
      unitTitle: unit.realmName,
      grade: unit.grade,
      prompt: `Từ vựng cần củng cố: "${item.word}" (${item.ipa}) - ${item.partOfSpeech}. Hãy chọn ý nghĩa chuẩn xác nhất:`,
      options: [
        item.meaningVi,
        'Hành động không liên quan trong ngữ cảnh bài học',
        'Một trạng thái cảm xúc đối lập hoàn toàn',
        'Khái niệm mang ý nghĩa tiêu cực'
      ],
      correctAnswer: item.meaningVi,
      explanation: `Từ "${item.word}" có nghĩa là: "${item.meaningVi}". Khẩu quyết: ${item.collocation || item.example}`
    });

    setSavedWords((prev) => [...prev, item.id]);
    if (onShowToast) {
      onShowToast('🔥 Đã Lưu Điểm Yếu', `Đã đưa từ "${item.word}" vào danh sách Ôn Câu Sai.`);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-4 text-left animate-fadeIn">
      {/* Intro Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono mb-1 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/60">
          <BookOpen className="w-3.5 h-3.5" />
          <span>PHẦN 1: TÀNG KINH CÁC TỪ VỰNG ({vocab.length} TỪ KHÓA)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-amber-100">
          Ngân Hàng Từ Vựng Chuẩn Global Success
        </h2>
        <p className="text-xs text-neutral-400 font-serif-wuxia mt-1 max-w-2xl mx-auto">
          Tra cứu toàn bộ {vocab.length} từ vựng và cụm khẩu quyết trọng tâm của <strong className="text-amber-300">{unit.title}</strong>, có phát âm chuẩn quốc tế, phiên âm IPA, nghĩa tiếng Việt và ví dụ song ngữ.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-4 mb-6 shadow-lg backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search box */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm từ vựng tiếng Anh hoặc nghĩa tiếng Việt..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-950 border border-neutral-700/80 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
            <span className="text-neutral-500 flex items-center gap-1 text-[11px] shrink-0 mr-1">
              <Filter className="w-3 h-3" /> Lọc:
            </span>
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'noun', label: 'Danh từ' },
              { id: 'verb', label: 'Động từ' },
              { id: 'adjective', label: 'Tính từ' },
              { id: 'phrase', label: 'Cụm từ' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as any)}
                className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all cursor-pointer shrink-0 ${
                  selectedFilter === f.id
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vocabulary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {filteredVocab.map((item, idx) => {
          const originalIdx = vocab.findIndex((v) => v.id === item.id);
          const isSaved = savedWords.includes(item.id);

          return (
            <div
              key={item.id}
              className="group bg-gradient-to-b from-[#171922] to-[#0e1017] rounded-xl border border-neutral-800 hover:border-amber-600/70 p-4 transition-all duration-200 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-neutral-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl font-bold font-wuxia text-amber-200 group-hover:text-amber-300 transition-colors">
                        {item.word}
                      </span>
                      <button
                        onClick={(e) => handleSpeak(e, item.word)}
                        className="p-1 rounded-md bg-neutral-800/90 hover:bg-red-900/80 text-amber-400 border border-neutral-700 hover:border-red-600 transition-all cursor-pointer"
                        title="Nghe phát âm chuẩn"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-xs text-neutral-400 font-mono">
                      {item.ipa}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-amber-400/90 border border-neutral-700/80 font-bold shrink-0">
                    {item.partOfSpeech}
                  </span>
                </div>

                {/* Meaning */}
                <p className="text-sm font-semibold text-neutral-100 font-serif-wuxia mb-2.5">
                  👉 {item.meaningVi}
                </p>

                {/* Collocation */}
                {item.collocation && (
                  <div className="mb-2 p-2 rounded-lg bg-black/40 border border-neutral-800 text-xs">
                    <span className="text-[10px] font-mono text-emerald-400 block font-bold">
                      ⚔️ Khẩu quyết (Collocation):
                    </span>
                    <span className="text-neutral-200 font-mono">
                      {item.collocation}
                    </span>
                  </div>
                )}

                {/* Example sentence & Translation */}
                <div className="mb-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/80 text-xs font-serif-wuxia space-y-1">
                  <p className="text-neutral-300 italic">
                    "{item.example}"
                  </p>
                  {item.exampleVi && (
                    <p className="text-amber-200/90 text-[11px] pt-1 border-t border-neutral-800">
                      → {item.exampleVi}
                    </p>
                  )}
                </div>

                {/* Synonyms & Antonyms tags if available */}
                {(item.synonyms?.length || item.antonyms?.length) ? (
                  <div className="flex flex-wrap gap-1 mb-2 text-[10px] font-mono">
                    {item.synonyms?.map((syn, sIdx) => (
                      <span key={sIdx} className="px-1.5 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/60">
                        ={syn}
                      </span>
                    ))}
                    {item.antonyms?.map((ant, aIdx) => (
                      <span key={aIdx} className="px-1.5 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-800/60">
                        ≠{ant}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 mt-2 border-t border-neutral-800/80 text-xs">
                <button
                  onClick={() => onSelectWordForFlashcard && onSelectWordForFlashcard(originalIdx)}
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-mono text-[11px] cursor-pointer"
                >
                  <span>Luyện Thẻ Này ➔</span>
                </button>

                <button
                  onClick={(e) => handleSaveToWeak(e, item)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono transition-colors cursor-pointer ${
                    isSaved
                      ? 'bg-rose-950 text-rose-300 border border-rose-700'
                      : 'bg-neutral-900 text-neutral-400 hover:text-rose-300 border border-neutral-800'
                  }`}
                  title="Lưu vào danh sách cần luyện lại"
                >
                  <AlertCircle className="w-3 h-3 text-rose-400" />
                  <span>{isSaved ? 'Đã Lưu Ôn' : 'Lưu Ôn Lại'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredVocab.length === 0 && (
        <div className="text-center py-12 text-neutral-500 font-mono text-sm">
          Không tìm thấy từ vựng nào khớp với từ khóa "{searchTerm}".
        </div>
      )}

      {/* Call to action at bottom */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/80 via-neutral-900 to-amber-950/80 border border-amber-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <h3 className="text-base sm:text-lg font-bold font-wuxia text-amber-200">
            Sẵn Sàng Ghi Nhớ Khẩu Quyết?
          </h3>
          <p className="text-xs text-neutral-300 font-serif-wuxia mt-0.5">
            Chuyển sang chế độ Thẻ Flashcards 3D để kiểm tra khả năng ghi nhớ và phân loại từ đã thuộc.
          </p>
        </div>

        <button
          onClick={onProceedToFlashcards}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 border border-amber-300 shadow cursor-pointer transition-all active:scale-95 shrink-0"
        >
          <span>Tiến Vào Flashcards (🃏)</span>
          <ArrowRight className="w-4 h-4 text-neutral-950" />
        </button>
      </div>
    </div>
  );
};
