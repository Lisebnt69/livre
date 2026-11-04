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

// Pixel Metricool : une image chargée à chaque page vue, seulement après acceptation de la mesure d'audience.
const METRICOOL_PIXEL = "https://tracker.metricool.com/c3po.jpg?hash=ae4235e7a0dcebfe578e1671ef12fa48";
let analyticsGranted = false;

function metricoolHit() {
  if (!analyticsGranted) return;
  const img = new Image(1, 1);
  img.referrerPolicy = "no-referrer-when-downgrade";
  img.src = `${METRICOOL_PIXEL}&_=${Date.now()}`;
}

export function trackPageView(path: string, title: string) {
  if (typeof window === "undefined") return;
  metricoolHit();
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

export function setAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  const first = granted && !analyticsGranted;
  analyticsGranted = granted;
  if (first) metricoolHit(); // la page en cours, vue avant le choix
  window.gtag?.("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}
