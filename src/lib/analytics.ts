export const GA_ID = "G-TT502FRSXG";

declare global {
  interface Window {
    __ccInited?: boolean;
  }
}

/** Envoie un évènement GA4 (le consentement est géré par Consent Mode dans index.html). */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params ?? {});
}

export function trackPageView(path: string, title: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

export function setAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  window.gtag?.("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}
