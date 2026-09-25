import React, { useState } from 'react';
import { UnitRealm, UserProfile } from '../types/game';
import { UNITS_DATA } from '../data/units';
import { BookOpen, RotateCw, Sword, Target, Flame, Skull, Award, ChevronLeft, Star, Shield, Crown, CheckCircle2 } from 'lucide-react';
import { soundEffects } from '../lib/audio';

// Section Components
import { VocabularyTab } from './VocabularyTab';
import { Flashcards } from './Flashcards';
import { VocabPracticeTab } from './VocabPracticeTab';
import { PracticeArena } from './PracticeArena';
import { UnitWeakReviewTab } from './UnitWeakReviewTab';
import { BossBattle } from './BossBattle';
import { UnitMasteryTab } from './UnitMasteryTab';

export type UnitSection = 'vocab' | 'flashcards' | 'practice' | 'quiz' | 'weak-review' | 'boss' | 'mastery';

interface UnitHubProps {
  unit: UnitRealm;
  profile: UserProfile;
  onBackToMap: () => void;
  onSelectUnit: (unit: UnitRealm) => void;
  onAddXp: (amount: number) => void;
  onDeductHp: (amount: number) => void;
  onVictory: (unitId: string, stars: number, xpGained: number) => void;
  onShowToast: (title: string, subtitle: string, icon?: string) => void;
  onOpenGlobalWeakReview: () => void;
  initialSection?: UnitSection;
}

export const UnitHub: React.FC<UnitHubProps> = ({
  unit,
  profile,
  onBackToMap,
  onSelectUnit,
  onAddXp,
  onDeductHp,
  onVictory,
  onShowToast,
  onOpenGlobalWeakReview,
  initialSection = 'vocab'
}) => {
  const [activeSection, setActiveSection] = useState<UnitSection>(initialSection);
  const [flashcardInitialWordIndex, setFlashcardInitialWordIndex] = useState<number>(0);

  const completedData = profile.completedUnits?.[unit.id];
  const isCompleted = !!completedData?.completed;
  const stars = completedData?.stars || 0;

  // Handle section switch with sound
  const handleSwitchSection = (section: UnitSection) => {
    setActiveSection(section);
    if (section === 'flashcards') soundEffects.playCardFlip();
    else if (section === 'boss') soundEffects.playSwordSlash();
    else soundEffects.playHeartChime();
  };

  // Find next unit in the curriculum
  const currentGradeUnits = UNITS_DATA.filter((u) => u.grade === unit.grade);
  const currentUnitIndex = currentGradeUnits.findIndex((u) => u.id === unit.id);
  const nextUnit = currentUnitIndex < currentGradeUnits.length - 1 ? currentGradeUnits[currentUnitIndex + 1] : null;

  const handleNextUnit = () => {
    if (nextUnit) {
      onSelectUnit(nextUnit);
      setActiveSection('vocab');
      soundEffects.playVictoryFanfare();
    } else {
      onBackToMap();
    }
  };

  // Navigation Tabs configuration
  const sectionsList: { id: UnitSection; label: string; icon: React.ReactNode; shortLabel: string }[] = [
    { id: 'vocab', label: '1. TỪ VỰNG', shortLabel: 'Từ Vựng', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'flashcards', label: '2. FLASHCARDS', shortLabel: 'Flashcards', icon: <RotateCw className="w-3.5 h-3.5" /> },
    { id: 'practice', label: '3. LUYỆN CÔNG', shortLabel: 'Luyện Công', icon: <Sword className="w-3.5 h-3.5" /> },
    { id: 'quiz', label: '4. QUIZ', shortLabel: 'Quiz', icon: <Target className="w-3.5 h-3.5" /> },
    { id: 'weak-review', label: '5. ÔN CÂU SAI', shortLabel: 'Ôn Câu Sai', icon: <Flame className="w-3.5 h-3.5" /> },
    { id: 'boss', label: '6. BOSS CHALLENGE', shortLabel: 'Boss', icon: <Skull className="w-3.5 h-3.5" /> },
    { id: 'mastery', label: '7. KẾT QUẢ', shortLabel: 'Kết Quả', icon: <Award className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-2">
      {/* Top Unit Banner */}
      <div className="bg-gradient-to-r from-[#1c1214] via-[#141219] to-[#0c0d14] rounded-2xl border border-neutral-800 p-4 sm:p-5 mb-5 shadow-xl text-left">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToMap}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-amber-300 text-xs font-mono transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Bản Đồ Giang Hồ</span>
              <span className="sm:hidden">Bản Đồ</span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-950 text-amber-300 border border-red-800 font-bold">
                  Khối {unit.grade} • Unit {unit.unit}
                </span>
                <span className="text-xs text-neutral-400 font-mono hidden md:inline">
                  {unit.title}
                </span>
              </div>
              <h1 className="text-lg sm:text-2xl font-bold font-wuxia text-amber-200 mt-0.5">
                {unit.realmName}
              </h1>
            </div>
          </div>

          {/* Right Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((starIdx) => (
                <Star
                  key={starIdx}
                  className={`w-4 h-4 ${
                    starIdx <= stars
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-neutral-700'
                  }`}
                />
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/40 border border-neutral-800 text-xs font-mono text-neutral-300">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Hộ pháp: {unit.guardianName}</span>
            </div>
          </div>
        </div>

        {/* 7 Section Tabs Navigation Bar */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {sectionsList.map((sec) => {
            const isActive = activeSection === sec.id;

            let activeStyle = 'bg-neutral-900/90 text-neutral-400 hover:text-white border-neutral-800';
            if (isActive) {
              if (sec.id === 'vocab') activeStyle = 'bg-gradient-to-r from-amber-600 to-yellow-600 text-neutral-950 font-bold border-amber-300 shadow-md scale-105';
              else if (sec.id === 'flashcards') activeStyle = 'bg-gradient-to-r from-red-800 to-amber-700 text-amber-100 font-bold border-amber-400 shadow-md scale-105';
              else if (sec.id === 'practice') activeStyle = 'bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-bold border-cyan-400 shadow-md scale-105';
              else if (sec.id === 'quiz') activeStyle = 'bg-gradient-to-r from-purple-800 to-indigo-700 text-purple-100 font-bold border-purple-400 shadow-md scale-105';
              else if (sec.id === 'weak-review') activeStyle = 'bg-gradient-to-r from-rose-800 to-red-700 text-rose-100 font-bold border-rose-400 shadow-md scale-105';
              else if (sec.id === 'boss') activeStyle = 'bg-gradient-to-r from-red-700 via-rose-600 to-orange-600 text-white font-bold border-red-400 shadow-md scale-105';
              else if (sec.id === 'mastery') activeStyle = 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-neutral-950 font-bold border-yellow-300 shadow-md scale-105';
            }

            return (
              <button
                key={sec.id}
                onClick={() => handleSwitchSection(sec.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-mono transition-all cursor-pointer shrink-0 border ${activeStyle}`}
              >
                {sec.icon}
                <span className="hidden sm:inline">{sec.label}</span>
                <span className="sm:hidden">{sec.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Active Section View */}
      <div className="w-full">
        {/* 1. TỪ VỰNG */}
        {activeSection === 'vocab' && (
          <VocabularyTab
            unit={unit}
            profile={profile}
            onProceedToFlashcards={() => handleSwitchSection('flashcards')}
            onSelectWordForFlashcard={(idx) => {
              setFlashcardInitialWordIndex(idx);
              handleSwitchSection('flashcards');
            }}
            onShowToast={onShowToast}
          />
        )}

        {/* 2. FLASHCARDS */}
        {activeSection === 'flashcards' && (
          <Flashcards
            unit={unit}
            profile={profile}
            onProceedToPractice={() => handleSwitchSection('practice')}
            onBackToMap={onBackToMap}
          />
        )}

        {/* 3. LUYỆN CÔNG */}
        {activeSection === 'practice' && (
          <VocabPracticeTab
            unit={unit}
            profile={profile}
            onProceedToQuiz={() => handleSwitchSection('quiz')}
            onAddXp={onAddXp}
            onDeductHp={onDeductHp}
            onShowToast={onShowToast}
          />
        )}

        {/* 4. QUIZ */}
        {activeSection === 'quiz' && (
          <PracticeArena
            unit={unit}
            profile={profile}
            onProceedToBoss={() => handleSwitchSection('boss')}
            onBackToFlashcards={() => handleSwitchSection('flashcards')}
            onAddXp={onAddXp}
            onDeductHp={onDeductHp}
            onShowAchievementToast={onShowToast}
          />
        )}

        {/* 5. ÔN CÂU SAI */}
        {activeSection === 'weak-review' && (
          <UnitWeakReviewTab
            unit={unit}
            profile={profile}
            onProceedToBoss={() => handleSwitchSection('boss')}
            onAddXp={onAddXp}
            onShowToast={onShowToast}
            onOpenGlobalWeakReview={onOpenGlobalWeakReview}
          />
        )}

        {/* 6. BOSS CHALLENGE */}
        {activeSection === 'boss' && (
          <BossBattle
            unit={unit}
            profile={profile}
            onVictory={(unitId, wonStars, wonXp) => {
              onVictory(unitId, wonStars, wonXp);
              // Switch to Mastery tab on victory
              setActiveSection('mastery');
            }}
            onBackToMap={onBackToMap}
          />
        )}

        {/* 7. KẾT QUẢ / MASTERY */}
        {activeSection === 'mastery' && (
          <UnitMasteryTab
            unit={unit}
            profile={profile}
            onRetakeVocab={() => handleSwitchSection('vocab')}
            onRetakePractice={() => handleSwitchSection('quiz')}
            onRetakeBoss={() => handleSwitchSection('boss')}
            onOpenWeakReview={() => handleSwitchSection('weak-review')}
            onNextUnit={nextUnit ? handleNextUnit : undefined}
            onBackToMap={onBackToMap}
          />
        )}
      </div>
    </div>
  );
};
