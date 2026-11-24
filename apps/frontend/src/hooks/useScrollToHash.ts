import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to `#section` links after navigation, or to the top for normal page changes.
 * Arriving from another page jumps straight to the section; links within the same page
 * scroll smoothly.
 */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;

    if (!hash) {
      if (!samePage) window.scrollTo({ top: 0 });
      return;
    }
    // Wait a frame so the target page has rendered.
    const frame = requestAnimationFrame(() => {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: samePage ? 'smooth' : 'auto' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
}
