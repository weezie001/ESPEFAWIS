import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Resets scroll position to the top on route change so each page opens at its
 * hero — wouter does not do this automatically. Skips when the URL has a hash
 * (so in-page anchor links, e.g. /services#asset-management, still work).
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location]);

  return null;
}
