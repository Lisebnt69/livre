const CONSENT_KEY = "cookie_consent_v1";

// check simple : l’utilisateur a accepté ?
export function hasAnalyticsConsent() {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

export function trackEvent(
  name: string,
  params?: Record<string, any>
) {
  if (!hasAnalyticsConsent()) return;
  window.gtag?.("event", name, params ?? {});
}
