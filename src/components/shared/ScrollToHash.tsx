import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures hash navigation (e.g. /controls#audit-compliance) scrolls to the right section
 * in an SPA, accounting for the fixed header height.
 */
export function ScrollToHash({ offset = 96 }: { offset?: number }) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");

    // If no hash, scroll to top on page change.
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    const id = decodeURIComponent(hash);

    // Allow layout to paint before measuring.
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const y = window.scrollY + el.getBoundingClientRect().top - offset;
      window.scrollTo({ top: y, left: 0, behavior: "smooth" });
      // Also move focus for accessibility (without jumping again)
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }, 0);

    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash, offset]);

  return null;
}
