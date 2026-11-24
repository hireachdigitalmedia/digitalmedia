import { getLastRowSpan } from '../../../../utils/format';

export const CAPABILITY_COLUMNS = 3;

/** Grid column span for a capability card (the last card fills any leftover space). */
export function getCapabilitySpan(index: number, total: number): number {
  return getLastRowSpan(index, total, CAPABILITY_COLUMNS);
}
