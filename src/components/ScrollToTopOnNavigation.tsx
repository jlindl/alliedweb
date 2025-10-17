"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    // Prefer manual scroll restoration so we control where the page lands
    const supportsScrollRestoration = typeof window !== 'undefined' && 'scrollRestoration' in history;
    const previous = supportsScrollRestoration ? history.scrollRestoration : undefined;
    if (supportsScrollRestoration) history.scrollRestoration = 'manual';

    // Ensure initial load to homepage scrolls to top (respect reduced-motion)
    if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
      if (!window.location.hash) {
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, left: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
      }
    }

    return () => {
      if (supportsScrollRestoration && previous !== undefined) {
        history.scrollRestoration = previous;
      }
    };
  // run once on mount
  }, []);

  useEffect(() => {
    // Scroll to top on route change (skip when a hash anchor is present)
    if (typeof window === 'undefined') return;
    // If there's a hash, we want the browser's default anchor navigation to run.
    if (window.location.hash) return;

    const runScroll = () => {
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior: ScrollBehavior = prefersReduced ? 'auto' : 'smooth';

      // If navigating to root, scroll to top
      if (pathname === '/' || pathname === '') {
        // Use requestAnimationFrame to wait for layout/paint then scroll
        let raf = 0 as number;
        raf = window.requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior });
        });
        return () => window.cancelAnimationFrame(raf);
      }

      // For in-page hash navigation triggered via Next link with hash in URL
      if (window.location.hash) {
        // Wait a tick for the element to exist, then scroll into view
        const id = window.setTimeout(() => {
          const el = document.getElementById(window.location.hash.substring(1));
          if (el) el.scrollIntoView({ block: 'start', behavior });
        }, 50);
        return () => window.clearTimeout(id);
      }

      return undefined;
    };

    // Small debounce to avoid double-scrolls when multiple route events fire rapidly
    const timeout = window.setTimeout(runScroll, 10);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
}
