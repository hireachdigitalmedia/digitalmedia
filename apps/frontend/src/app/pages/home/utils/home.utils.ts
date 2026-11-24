/** Smoothly scrolls to a section on the current page. */
export function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}

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

/** Zero-based index → 1-based step label ("1", "2", …). */
export function formatStepNumber(index: number): string {
  return String(index + 1);
}
