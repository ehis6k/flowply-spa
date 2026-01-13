import { useCallback } from "react";

// Analytics event types
export type AnalyticsEvent = 
  | "cta_primary_click"
  | "cta_secondary_click"
  | "nav_click"
  | "pricing_select"
  | "contact_submit"
  | "learn_more_click"
  | "use_case_click";

interface AnalyticsPayload {
  event: AnalyticsEvent;
  properties?: Record<string, string | number | boolean>;
}

// Lightweight analytics hook - logs events for now, can be extended to send to analytics service
export function useAnalytics() {
  const track = useCallback((event: AnalyticsEvent, properties?: Record<string, string | number | boolean>) => {
    const payload: AnalyticsPayload = { event, properties };
    
    // Log to console in development
    if (import.meta.env.DEV) {
      console.log("[Analytics]", payload);
    }
    
    // Future: Send to analytics service
    // Example: window.gtag?.('event', event, properties);
    // Example: posthog?.capture(event, properties);
  }, []);

  const trackCTAPrimary = useCallback((source?: string) => {
    track("cta_primary_click", { source: source || "unknown" });
  }, [track]);

  const trackCTASecondary = useCallback((source?: string) => {
    track("cta_secondary_click", { source: source || "unknown" });
  }, [track]);

  const trackNavClick = useCallback((label: string, href: string) => {
    track("nav_click", { label, href });
  }, [track]);

  const trackPricingSelect = useCallback((plan: string) => {
    track("pricing_select", { plan });
  }, [track]);

  const trackContactSubmit = useCallback((systemsCount: string) => {
    track("contact_submit", { systems_count: systemsCount });
  }, [track]);

  const trackLearnMore = useCallback((service: string) => {
    track("learn_more_click", { service });
  }, [track]);

  const trackUseCaseClick = useCallback((useCase: string) => {
    track("use_case_click", { use_case: useCase });
  }, [track]);

  return {
    track,
    trackCTAPrimary,
    trackCTASecondary,
    trackNavClick,
    trackPricingSelect,
    trackContactSubmit,
    trackLearnMore,
    trackUseCaseClick,
  };
}
