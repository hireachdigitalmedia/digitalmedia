import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to `#section` links after navigation, or to the top for normal page changes. */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    // Wait a frame so the target page has rendered.
    const frame = requestAnimationFrame(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
}
