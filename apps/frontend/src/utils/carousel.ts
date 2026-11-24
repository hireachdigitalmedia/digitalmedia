/**
 * How far a carousel should scroll for one "page": the visible width minus one card,
 * so the last visible card stays on screen for context.
 */
export function getCarouselStep(
  viewportWidth: number,
  cardWidth: number,
  gap: number,
): number {
  return Math.max(cardWidth + gap, viewportWidth - cardWidth - gap);
}
