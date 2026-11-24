import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** Margin around the viewport; the default triggers a little before an element is fully on screen. */
  rootMargin?: string;
  threshold?: number;
}

/**
 * Returns a ref and whether that element has scrolled into view (latches to `true` once seen).
 * Falls back to "visible" where IntersectionObserver isn't available (old browsers, tests).
 */
export function useInView<T extends Element>({
  rootMargin = '0px 0px -12% 0px',
  threshold = 0.08,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin, threshold]);

  return { ref, inView };
}
