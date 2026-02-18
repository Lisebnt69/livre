export const GA_ID = "G-TT502FRSXG";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    __gaLoaded?: boolean;
  }
}

export function loadGA() {
  if (window.__gaLoaded) return;
  window.__gaLoaded = true;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: any[]) {
      window.dataLayer!.push(args);
    };

  window.gtag("js", new Date());

  
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });


  window.gtag("config", GA_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (!window.gtag) return;
  window.gtag("event", eventName, params ?? {});
}
