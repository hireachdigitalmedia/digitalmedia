/** Zero-based index → 1-based step label ("1", "2", …). */
export function formatStepNumber(index: number): string {
  return String(index + 1);
}

/**
 * Column span for the last card of a grid so the final row is always filled.
 * e.g. 5 cards in 3 columns → the 5th card spans 2 columns.
 */
export function getLastRowSpan(
  index: number,
  total: number,
  columns: number,
): number {
  if (index !== total - 1) return 1;
  return columns - ((total - 1) % columns);
}
