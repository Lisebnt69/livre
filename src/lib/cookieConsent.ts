import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

export const initCookieConsent = () => {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom right",
        equalWeightButtons: true,
      },
      preferencesModal: {
        layout: "box",
      },
    },

    categories: {
      necessary: {
        readOnly: true
      },
      analytics: {}
    },

    language: {
      default: "fr",
      translations: {
        fr: {
          consentModal: {
            title: "On respecte ta vie privée 🛡️",
            description:
              "On utilise des cookies pour mesurer l’audience et améliorer l’expérience.",
            acceptAllBtn: "Accepter",
            acceptNecessaryBtn: "Refuser",
            showPreferencesBtn: "Personnaliser"
          },
          preferencesModal: {
            title: "Gestion des cookies",
            acceptAllBtn: "Tout accepter",
            acceptNecessaryBtn: "Tout refuser",
            savePreferencesBtn: "Enregistrer",
            sections: [
              {
                title: "Cookies analytiques",
                description:
                  "Ils nous permettent de mesurer les visites (Google Analytics).",
                linkedCategory: "analytics"
              }
            ]
          }
        }
      }
    }
  });
};
