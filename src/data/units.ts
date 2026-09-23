import { UnitRealm } from '../types/game';
import { UNITS_GRADE_10 } from './unitsGrade10';
import { UNITS_GRADE_11 } from './unitsGrade11';
import { UNITS_GRADE_12 } from './unitsGrade12';

export const UNITS_DATA: UnitRealm[] = [
  ...UNITS_GRADE_10,
  ...UNITS_GRADE_11,
  ...UNITS_GRADE_12
];

// Helper to get units for a specific grade
export function getUnitsByGrade(grade: 10 | 11 | 12): UnitRealm[] {
  return UNITS_DATA.filter((u) => u.grade === grade);
}

export function getUnitById(id: string): UnitRealm | undefined {
  return UNITS_DATA.find((u) => u.id === id);
}
