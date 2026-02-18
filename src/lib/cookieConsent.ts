import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

export const initCookieConsent = () => {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom right"
      }
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
              title: "🍪 Expérience améliorée",
              description:
                "Nous utilisons quelques cookies pour améliorer votre navigation et mesurer l’audience.",
              acceptAllBtn: "Accepter",
              acceptNecessaryBtn: "Refuser",
              showPreferencesBtn: "Personnaliser"
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
                  linkedCategory: "analytics"
                }
              ]
            }
          }
        }
      }
  });
};
