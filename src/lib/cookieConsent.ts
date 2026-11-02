import { setAnalyticsConsent } from "./analytics";

// La bibliothèque est chargée dynamiquement : elle ne doit jamais s'exécuter pendant le pré-rendu.
type CC = typeof import("vanilla-cookieconsent");
let cc: CC | null = null;

export function openCookiePreferences() {
  void import("vanilla-cookieconsent").then((m) => m.showPreferences());
}

export const initCookieConsent = async () => {
  if (window.__ccInited) return;
  window.__ccInited = true;

  await import("vanilla-cookieconsent/dist/cookieconsent.css");
  cc = await import("vanilla-cookieconsent");
  const sync = () => setAnalyticsConsent(cc!.acceptedCategory("analytics"));

  cc.run({
    guiOptions: {
      consentModal: { layout: "box", position: "bottom right" },
      preferencesModal: { layout: "box" },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: {},
    },
    // Appelé au premier choix ET à chaque visite suivante
    onConsent: sync,
    onChange: sync,
    language: {
      default: "fr",
      translations: {
        fr: {
          consentModal: {
            title: "Mesure d’audience",
            description:
              "Ce site utilise un outil de mesure d’audience pour comprendre quelles pages aident le plus les familles. Rien n’est activé sans votre accord.",
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
                title: "Cookies nécessaires",
                description: "Indispensables au fonctionnement du site et à la mémorisation de votre choix.",
                linkedCategory: "necessary",
              },
              {
                title: "Mesure d’audience",
                description: "Nous aide à comprendre l’utilisation du site pour l’améliorer.",
                linkedCategory: "analytics",
              },
            ],
          },
        },
      },
    },
  });
};
