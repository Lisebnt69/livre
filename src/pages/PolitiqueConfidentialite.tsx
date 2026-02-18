import { motion } from "framer-motion";
import { openCookiePreferences } from "../lib/cookieConsent";
import Seo from "../components/Seo";
import { site } from "../data/site";


const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-primaryBlue">
      <Seo
        title="Politique de confidentialité | Réussir son année de High School aux États-Unis"
        description="Politique de confidentialité et cookies : données collectées, base légale, durée de conservation et gestion des préférences."
        canonical={`${site.baseUrl}/confidentialite`}
      />


      <motion.section
        className="max-w-4xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-primaryBlue/75 leading-relaxed">
          Ce site est un site vitrine. Nous appliquons le principe : minimum de données, maximum de clarté.
        </p>

        <div className="mt-10 space-y-10 text-sm md:text-base leading-relaxed text-primaryBlue/85">
          <section>
            <h2 className="text-xl font-black">1) Responsable de traitement</h2>
            <p className="mt-2">
              Responsable : <strong>Stéphanie Oyarsabal</strong>. <br />
              Contact : <strong>livrestephanieoyarsabal@gmail.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">2) Données collectées</h2>
            <ul className="mt-3 list-disc list-inside space-y-2">
              <li><strong>Cookies nécessaires</strong> : fonctionnement du site et du module de consentement.</li>
              <li><strong>Mesure d’audience</strong> (optionnelle) : uniquement si vous l’acceptez.</li>
            </ul>
            <p className="mt-3 text-primaryBlue/75">
              Aucun compte, aucun paiement sur le site, pas de ciblage publicitaire via ce site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">3) Base légale</h2>
            <ul className="mt-3 list-disc list-inside space-y-2">
              <li>Cookies nécessaires : <strong>intérêt légitime</strong> (fonctionnement du site).</li>
              <li>Mesure d’audience : <strong>consentement</strong>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black">4) Cookies : gérer vos choix</h2>
            <p className="mt-2">
              Vous pouvez accepter, refuser ou modifier votre choix à tout moment.
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
            <h2 className="text-xl font-black">5) Durées de conservation</h2>
            <p className="mt-2">
              Les cookies sont conservés selon les durées standard du module de consentement et de l’outil d’audience.
              Vous pouvez aussi les supprimer via votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">6) Vos droits</h2>
            <p className="mt-2">
              Vous pouvez retirer votre consentement (cookies) à tout moment via “Gérer mes cookies”.<br />
              Pour toute demande : <strong>livrestephanieoyarsabal@gmail.com</strong>.
            </p>
          </section>
        </div>
      </motion.section>
    </main>
  );
}
