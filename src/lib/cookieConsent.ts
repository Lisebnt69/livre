import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

const GA_ID = "G-TT502FRSXG"; // <- ton ID

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    __gaLoaded?: boolean;
  }
}

function loadGA() {
  if (window.__gaLoaded) return;
  window.__gaLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
}

export function openCookiePreferences() {
  // @ts-ignore
  if (CookieConsent?.showPreferences) CookieConsent.showPreferences();
}

export const initCookieConsent = () => {
  // évite double init (React StrictMode)
  // @ts-ignore
  if (window.__ccInited) return;
  // @ts-ignore
  window.__ccInited = true;

  CookieConsent.run({
    guiOptions: {
      consentModal: { layout: "box", position: "bottom right" },
      preferencesModal: { layout: "box" },
    },

    categories: {
      necessary: { readOnly: true },
      analytics: {},
    },

    onAccept: ({ cookie }) => {
      if (cookie.categories.includes("analytics")) loadGA();
    },

    onChange: ({ changedCategories, cookie }) => {
      if (
        changedCategories.includes("analytics") &&
        cookie.categories.includes("analytics")
      ) {
        loadGA();
      }
    },

    language: {
      default: "fr",
      translations: {
        fr: {
          consentModal: {
            title: "🍪 Expérience améliorée",
            description:
              "On utilise quelques cookies pour améliorer votre expérience. Vous pouvez accepter, refuser, ou personnaliser.",
            acceptAllBtn: "Accepter",
            acceptNecessaryBtn: "Refuser",
            showPreferencesBtn: "Personnaliser",
          },
          preferencesModal: {
            title: "Préférences cookies",
            acceptAllBtn: "Tout accepter",
            acceptNecessaryBtn: "Tout refuser",
            savePreferencesBtn: "Enregistrer",
            sections: [
              {
                title: "Mesure d’audience",
                description:
                  "Nous aide à comprendre l’utilisation du site pour l’améliorer.",
                linkedCategory: "analytics",
              },
            ],
          },
        },
      },
    },
  });
};
