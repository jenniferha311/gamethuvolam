import { UnitRealm } from '../types/game';
import { UNITS_GRADE_10 } from './unitsGrade10';
import { UNITS_GRADE_10_PART2 } from './unitsGrade10Part2';
import { UNITS_GRADE_11 } from './unitsGrade11';
import { UNITS_GRADE_11_PART2 } from './unitsGrade11Part2';
import { UNITS_GRADE_12 } from './unitsGrade12';
import { UNITS_GRADE_12_PART2 } from './unitsGrade12Part2';
import { EXISTING_VOCAB_TRANSLATIONS } from './existingVocabTranslations';
import { EXTRA_VOCAB_GRADE_10 } from './extraVocabGrade10';
import { EXTRA_VOCAB_GRADE_11 } from './extraVocabGrade11';
import { EXTRA_VOCAB_GRADE_12 } from './extraVocabGrade12';

const RAW_UNITS: UnitRealm[] = [
  ...UNITS_GRADE_10,
  ...UNITS_GRADE_10_PART2,
  ...UNITS_GRADE_11,
  ...UNITS_GRADE_11_PART2,
  ...UNITS_GRADE_12,
  ...UNITS_GRADE_12_PART2
];

// Enriched UNITS_DATA: Every unit has 20-22 authentic Global Success vocabulary items with exampleVi and complete metadata
export const UNITS_DATA: UnitRealm[] = RAW_UNITS.map((unit) => {
  const existingEnriched = unit.vocabulary.map((v) => ({
    ...v,
    meaning: v.meaning || v.meaningVi,
    exampleVi: EXISTING_VOCAB_TRANSLATIONS[v.id] || v.exampleVi || `Ví dụ minh họa cho "${v.word}": ${v.example}`
  }));

  const extras = unit.grade === 10 ? (EXTRA_VOCAB_GRADE_10[unit.id] || [])
               : unit.grade === 11 ? (EXTRA_VOCAB_GRADE_11[unit.id] || [])
               : (EXTRA_VOCAB_GRADE_12[unit.id] || []);

  return {
    ...unit,
    vocabulary: [...existingEnriched, ...extras]
  };
});

// Helper to get units for a specific grade
export function getUnitsByGrade(grade: 10 | 11 | 12): UnitRealm[] {
  return UNITS_DATA.filter((u) => u.grade === grade);
}

export function getUnitById(id: string): UnitRealm | undefined {
  return UNITS_DATA.find((u) => u.id === id);
}

