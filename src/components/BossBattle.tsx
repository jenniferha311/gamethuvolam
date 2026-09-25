import React, { useState, useEffect, useRef } from 'react';
import { UnitRealm, UserProfile, BossQuestion } from '../types/game';
import { soundEffects } from '../lib/audio';
import { Skull, Shield, Sword, Heart, Star, Award, RotateCcw, ArrowRight, Zap, Clock, AlertCircle } from 'lucide-react';
import { recordQuestionResult } from '../lib/analytics';

interface BossBattleProps {
  unit: UnitRealm;
  profile: UserProfile;
  onVictory: (unitId: string, stars: number, xpGained: number) => void;
  onBackToMap: () => void;
}

const BOSS_TURN_TIME = 22; // 22s combat decision timer

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const BossBattle: React.FC<BossBattleProps> = ({
  unit,
  profile,
  onVictory,
  onBackToMap
}) => {
  const [bossHp, setBossHp] = useState(unit.bossHp);
  const [playerHp, setPlayerHp] = useState(profile.hp);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [combo, setCombo] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [slashActive, setSlashActive] = useState(false);
  const [screenShake, setScreenShake] = useState(false);
  const [floatingDamage, setFloatingDamage] = useState<{ text: string; isCrit: boolean } | null>(null);
  const [battleFinished, setBattleFinished] = useState<'victory' | 'defeat' | null>(null);
  const [timeLeft, setTimeLeft] = useState(BOSS_TURN_TIME);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const questions: BossQuestion[] = unit.bossQuestions;
  const currentQ = questions[currentIdx % questions.length];

  // Randomized options and dynamic correct index
  const [shuffledData, setShuffledData] = useState<{
    options: string[];
    correctIndex: number;
  }>(() => {
    if (!currentQ) return { options: [], correctIndex: 0 };
    const correctText = currentQ.options[currentQ.correctAnswer];
    const shuffled = shuffleArray(currentQ.options);
    return {
      options: shuffled,
      correctIndex: shuffled.indexOf(correctText)
    };
  });

  // Re-shuffle whenever turn or question changes
  useEffect(() => {
    if (!currentQ) return;
    const correctText = currentQ.options[currentQ.correctAnswer];
    const shuffled = shuffleArray(currentQ.options);
    setShuffledData({
      options: shuffled,
      correctIndex: shuffled.indexOf(correctText)
    });
    setIsAnswered(false);
    setIsProcessing(false);
    setTimeLeft(BOSS_TURN_TIME);
  }, [currentIdx, currentQ]);

  // Turn combat countdown timer
  useEffect(() => {
    if (battleFinished) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (!isAnswered && !isProcessing) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            handleTimeExpired();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentIdx, isAnswered, isProcessing, battleFinished]);

  const handleTimeExpired = () => {
    if (isAnswered || battleFinished) return;
    setIsProcessing(true);
    setScreenShake(true);
    soundEffects.playDamageTaken();

    const playerDmg = 25;
    const nextPlayerHp = Math.max(0, playerHp - playerDmg);
    setPlayerHp(nextPlayerHp);
    setCombo(0);

    setFloatingDamage({
      text: `QUÁ GIỜ XUẤT CHIÊU! -${playerDmg} HP`,
      isCrit: false
    });

    recordQuestionResult(false, {
      id: currentQ.id,
      prompt: currentQ.question,
      options: currentQ.options,
      correctAnswer: currentQ.options[currentQ.correctAnswer],
      grade: unit.grade,
      unitId: unit.id,
      unitTitle: unit.realmName
    });

    setTimeout(() => {
      setScreenShake(false);
      setFloatingDamage(null);
      setIsAnswered(true);
      setIsProcessing(false);

      if (nextPlayerHp <= 0) {
        setBattleFinished('defeat');
      }
    }, 900);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered || isProcessing || battleFinished) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setIsProcessing(true);
    setIsAnswered(true);

    const isCorrect = idx === shuffledData.correctIndex;

    recordQuestionResult(isCorrect, {
      id: currentQ.id,
      prompt: currentQ.question,
      options: currentQ.options,
      correctAnswer: currentQ.options[currentQ.correctAnswer],
      grade: unit.grade,
      unitId: unit.id,
      unitTitle: unit.realmName
    });

    if (isCorrect) {
      // Player attack success!
      setSlashActive(true);
      soundEffects.playCriticalHit();

      const isCrit = combo >= 1;
      const baseDmg = currentQ.damage;
      const totalDmg = isCrit ? Math.round(baseDmg * 1.5) : baseDmg;

      setFloatingDamage({
        text: isCrit ? `CHÍ MẠNG KIẾM KHÍ! -${totalDmg} HP` : `-${totalDmg} HP`,
        isCrit
      });

      const nextBossHp = Math.max(0, bossHp - totalDmg);
      setBossHp(nextBossHp);
      setCombo((prev) => prev + 1);

      setTimeout(() => {
        setSlashActive(false);
        setFloatingDamage(null);
        setIsProcessing(false);

        if (nextBossHp <= 0) {
          // Boss Defeated!
          soundEffects.playVictoryFanfare();
          setBattleFinished('victory');
        }
      }, 900);
    } else {
      // Wrong answer -> Boss counter attacks!
      setScreenShake(true);
      soundEffects.playDamageTaken();

      const playerDmg = 25;
      const nextPlayerHp = Math.max(0, playerHp - playerDmg);
      setPlayerHp(nextPlayerHp);
      setCombo(0);

      setFloatingDamage({
        text: `TẨU HỎA NHẬP MA! -${playerDmg} HP`,
        isCrit: false
      });

      setTimeout(() => {
        setScreenShake(false);
        setFloatingDamage(null);
        setIsProcessing(false);

        if (nextPlayerHp <= 0) {
          setBattleFinished('defeat');
        }
      }, 900);
    }
  };

  const handleNextTurn = () => {
    setIsAnswered(false);
    setIsProcessing(false);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Loop questions if boss still has HP
      setCurrentIdx(0);
    }
  };

  const calculateStars = () => {
    if (playerHp >= 80) return 3;
    if (playerHp >= 40) return 2;
    return 1;
  };

  const handleClaimVictory = () => {
    const stars = calculateStars();
    onVictory(unit.id, stars, unit.xpReward);
  };

  const bossHpPercent = Math.max(0, Math.round((bossHp / unit.bossHp) * 100));
  const playerHpPercent = Math.max(0, Math.round((playerHp / 100) * 100));

  return (
    <div className={`max-w-4xl mx-auto py-6 px-4 ${screenShake ? 'animate-shake' : ''}`}>
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBackToMap}
          className="text-xs text-neutral-400 hover:text-amber-300 transition-colors cursor-pointer"
        >
          ← Rút Lui Về Bản Đồ
        </button>
        <span className="text-xs font-mono bg-red-950 text-red-300 border border-red-700/60 px-3 py-1 rounded-full">
          Quyết Chiến: {unit.realmName}
        </span>
      </div>

      {/* Combatant Arena Header: Boss vs Player */}
      <div className="relative rounded-2xl border-2 border-red-900/80 bg-gradient-to-b from-[#180a0d] via-[#10070a] to-[#0a0507] p-6 shadow-2xl mb-6 overflow-hidden">
        {/* Sword slash visual effect */}
        {slashActive && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
            <div className="w-[120%] h-3 bg-gradient-to-r from-transparent via-amber-200 to-transparent blur-[2px] shadow-[0_0_40px_#f59e0b] animate-sword-slash" />
            <div className="w-[120%] h-1 bg-white blur-[0.5px] animate-sword-slash" />
          </div>
        )}

        {/* Floating Damage Text */}
        {floatingDamage && (
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-xl sm:text-3xl font-extrabold font-wuxia animate-bounce ${
            floatingDamage.isCrit
              ? 'text-yellow-300 drop-shadow-[0_0_15px_rgba(234,179,8,0.9)]'
              : 'text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.9)]'
          }`}>
            {floatingDamage.text}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left: Player Status */}
          <div className="flex items-center gap-4 text-left">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.nickname}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-amber-400 shadow-lg"
              />
              <span className="absolute -bottom-2 -left-1 bg-amber-600 text-black font-extrabold text-[10px] px-1.5 py-0.5 rounded border border-amber-300">
                Lv.{profile.level}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-bold text-amber-200">
                <span className="flex items-center gap-1 truncate max-w-[150px]">
                  <span className="text-neutral-400 font-normal">Hiệp khách:</span>
                  <span className="text-amber-300 font-wuxia">{profile.nickname}</span>
                </span>
                <span className="font-mono text-red-400">{playerHp} / 100 HP</span>
              </div>
              <div className="w-full h-3 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800 my-1 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${playerHpPercent}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-neutral-400">
                <span>{profile.title}</span>
                {combo > 0 && (
                  <span className="text-amber-400 font-bold font-mono">
                    🔥 Combo x{combo}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Boss Status */}
          <div className="flex items-center gap-4 text-left md:flex-row-reverse">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-red-950/80 border-2 border-red-600 flex items-center justify-center shadow-lg text-3xl">
                👹
              </div>
              <span className="absolute -bottom-2 -right-1 bg-red-700 text-white font-bold text-[10px] px-1.5 py-0.5 rounded border border-red-400 font-mono">
                BOSS
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-bold text-red-300">
                <span>{unit.bossName}</span>
                <span className="font-mono">{bossHp} / {unit.bossHp} HP</span>
              </div>
              <div className="w-full h-3 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800 my-1 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-red-800 to-red-500 rounded-full transition-all duration-300"
                  style={{ width: `${bossHpPercent}%` }}
                />
              </div>
              <div className="text-[11px] text-neutral-400 truncate">
                {unit.bossTitle}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Battle Flow: Victory Screen, Defeat Screen, or Question Combat */}
      {battleFinished === 'victory' ? (
        <div className="wuxia-card rounded-2xl p-8 text-center border-2 border-amber-500 shadow-2xl animate-fadeIn">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-4xl mb-4 animate-bounce">
            🏆
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-wuxia text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 mb-2">
            CHÚC MỪNG {profile.nickname.toUpperCase()} ĐẠI PHÁ {unit.bossName.toUpperCase()}!
          </h2>
          <p className="text-sm text-neutral-300 font-serif-wuxia mb-6">
            Hiệp khách <strong className="text-amber-300 font-bold">{profile.nickname}</strong> đã dùng kiếm chiêu ngữ nghĩa trảm diệt yêu ma, giải cứu thanh bình cho {unit.realmName}!
          </p>

          {/* Stars & Rewards */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 ${
                  star <= calculateStars()
                    ? 'text-amber-400 fill-amber-400 animate-pulse'
                    : 'text-neutral-700'
                }`}
              />
            ))}
          </div>

          <div className="max-w-md mx-auto bg-neutral-950/70 border border-neutral-800 rounded-xl p-4 mb-6 grid grid-cols-2 gap-4 text-center">
            <div>
              <span className="text-[11px] text-neutral-400 block font-mono">CÔNG LỰC NHẬN ĐƯỢC</span>
              <span className="text-xl font-bold text-amber-300 font-mono">+{unit.xpReward} XP</span>
            </div>
            <div>
              <span className="text-[11px] text-neutral-400 block font-mono">HUY HIỆU CHIẾN THẮNG</span>
              <span className="text-sm font-bold text-emerald-400 font-mono">Phá Quan Trảm Tướng</span>
            </div>
          </div>

          <button
            onClick={handleClaimVictory}
            className="px-8 py-3.5 rounded-xl font-wuxia font-bold text-base text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 border border-amber-200 shadow-xl shadow-amber-900/50 cursor-pointer"
          >
            Thu Nạp Công Lực & Tiếp Tục Giang Hồ ⚔️
          </button>
        </div>
      ) : battleFinished === 'defeat' ? (
        <div className="wuxia-card rounded-2xl p-8 text-center border-2 border-red-700 shadow-2xl">
          <div className="text-5xl mb-4">💔</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-wuxia text-red-400 mb-2">
            TẨU HỎA NHẬP MA!
          </h2>
          <p className="text-sm text-neutral-300 font-serif-wuxia mb-6">
            Hiệp khách <strong className="text-amber-300">{profile.nickname}</strong> đã cạn kiệt sinh lực trước ma khí của {unit.bossName}. Hãy tịnh dưỡng, rèn lại khẩu quyết tại Tàng Kinh Các rồi trở lại tái chiến!
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setPlayerHp(100);
                setBossHp(unit.bossHp);
                setBattleFinished(null);
                setCurrentIdx(0);
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-wuxia font-bold text-sm text-amber-200 bg-red-950 border border-red-700 hover:bg-red-900 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Quyết Chiến Lại</span>
            </button>
            <button
              onClick={onBackToMap}
              className="px-6 py-3 rounded-xl font-wuxia text-sm text-neutral-300 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 cursor-pointer"
            >
              Về Tịnh Dưỡng
            </button>
          </div>
        </div>
      ) : (
        /* Active Combat Turn */
        <div className="wuxia-card rounded-2xl p-6 sm:p-8 text-left border border-neutral-700 shadow-2xl">
          {/* Turn timer */}
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="text-neutral-400">
              Trận Khảo Sát Số {currentIdx + 1} • Sát thương kiếm chiêu: <strong className="text-amber-300">+{currentQ.damage} DMG</strong>
            </span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className={`font-bold ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-amber-300'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white font-serif-wuxia leading-relaxed mb-6">
            {currentQ.question}
          </h3>

          {/* Shuffled Options (Randomized order A, B, C, D) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {shuffledData.options.map((opt, idx) => {
              const isCorrect = idx === shuffledData.correctIndex;
              let style = 'bg-neutral-900/90 border-neutral-700 text-neutral-200 hover:border-amber-400 hover:bg-neutral-800';

              if (isAnswered) {
                if (isCorrect) {
                  style = 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold ring-1 ring-emerald-500';
                } else {
                  style = 'bg-neutral-950/50 border-neutral-800 text-neutral-500 opacity-50';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered || isProcessing}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 text-sm sm:text-base ${
                    isAnswered || isProcessing ? 'cursor-default' : 'cursor-pointer'
                  } ${style}`}
                >
                  <span className="w-6 h-6 rounded-md bg-black/40 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-amber-300 shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation if answered */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs sm:text-sm text-neutral-300 font-serif-wuxia mb-4">
              <strong className="text-amber-400 block mb-1">Kiếm Pháp Bí Quyết:</strong>
              {currentQ.explanation}
            </div>
          )}

          {isAnswered && !battleFinished && (
            <div className="text-right">
              <button
                onClick={handleNextTurn}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-wuxia font-bold text-xs sm:text-sm text-amber-200 bg-red-900 hover:bg-red-800 border border-amber-500/60 cursor-pointer shadow-lg active:scale-95"
              >
                <span>Hồi Chiêu Kế Tiếp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
