import { motion } from "framer-motion";
import { openCookiePreferences } from "../lib/cookieConsent";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-primaryBlue">
      <motion.section
        className="max-w-4xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          Politique de confidentialité
        </h1>
        

        <div className="mt-10 space-y-8 text-sm md:text-base leading-relaxed text-primaryBlue/85">
          <section>
            <h2 className="text-xl font-black text-primaryBlue">1) Données collectées</h2>
            <p className="mt-2">
              Ce site ne propose pas de compte utilisateur, ni de formulaire de paiement.
              Les seules données possibles sont :
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li><span className="font-semibold">Cookies nécessaires</span> : fonctionnement technique du site.</li>
              <li><span className="font-semibold">Mesure d’audience</span> (optionnelle) : uniquement si vous l’acceptez.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-primaryBlue">2) Cookies</h2>
            <p className="mt-2">
              Vous pouvez accepter, refuser ou personnaliser vos cookies à tout moment.
            </p>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold bg-white border border-primaryBlue/20 hover:border-primaryBlue/50 shadow-sm hover:shadow transition"
            >
              Gérer mes cookies
            </button>
          </section>

          <section>
            <h2 className="text-xl font-black text-primaryBlue">3) Mesure d’audience (si acceptée)</h2>
            <p className="mt-2">
              Si vous acceptez la mesure d’audience, elle sert uniquement à comprendre
              les pages les plus utiles et améliorer le site. L’adresse IP est anonymisée.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-primaryBlue">4) Destinataires</h2>
            <p className="mt-2">
              Les données de mesure d’audience (si activées) sont traitées par le fournisseur d’analytics.
              Aucune vente de données. Aucun ciblage publicitaire via ce site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-primaryBlue">5) Durée de conservation</h2>
            <p className="mt-2">
              Les cookies sont conservés selon les durées standard du module de consentement et de l’outil d’audience.
              Vous pouvez les supprimer via votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-primaryBlue">6) Vos droits</h2>
            <p className="mt-2">
              Vous pouvez refuser ou retirer votre consentement à tout moment via “Gérer mes cookies”.
             
            </p>
          </section>
        </div>
      </motion.section>
    </main>
  );
}
