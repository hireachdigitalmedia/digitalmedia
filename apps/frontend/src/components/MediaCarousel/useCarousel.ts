import { useCallback, useRef } from 'react';
import { getCarouselStep } from '../../utils/carousel';
import { CARD_GAP } from './MediaCarousel.style';

/** Ref for a MediaCarousel plus prev/next handlers for CarouselControls. */
export function useCarousel(cardWidth: number) {
  const ref = useRef<HTMLUListElement>(null);

  const scroll = useCallback(
    (direction: 1 | -1) => {
      const el = ref.current;
      if (!el) return;
      el.scrollBy({
        left: direction * getCarouselStep(el.clientWidth, cardWidth, CARD_GAP),
        behavior: 'smooth',
      });
    },
    [cardWidth],
  );

  return { ref, prev: () => scroll(-1), next: () => scroll(1) };
}
