import { motion } from "framer-motion";
import Seo from "../components/Seo";
import { site } from "../data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-primaryBlue">

      <Seo
        title="Mentions légales | Réussir son année de High School aux États-Unis"
        description="Mentions légales : éditeur du site, responsable de publication, hébergement, propriété intellectuelle et contact."
        canonical={`${site.baseUrl}/mentions-legales`}
        />


      <motion.section
        className="max-w-4xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-5xl font-black mb-12">
          Mentions légales
        </h1>

        <div className="space-y-10 text-sm md:text-base leading-relaxed text-primaryBlue/85">

          {/* Éditeur */}
          <section>
            <h2 className="text-xl font-bold text-primaryBlue mb-2">
              Éditeur du site
            </h2>
            <p>Stéphanie Oyarsabal</p>
          </section>

          {/* Responsable publication */}
          <section>
            <h2 className="text-xl font-bold text-primaryBlue mb-2">
              Responsable de la publication
            </h2>
            <p>Stéphanie Oyarsabal</p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-primaryBlue mb-2">
              Contact
            </h2>
            <p>livrestephanieoyarsabal@gmail.com</p>
          </section>

          {/* Conception */}
          <section>
            <h2 className="text-xl font-bold text-primaryBlue mb-2">
              Conception et réalisation
            </h2>
            <p>Lise Benoit</p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-xl font-bold text-primaryBlue mb-2">
              Hébergement
            </h2>
            <p>
              Cloudflare, Inc. <br />
              101 Townsend Street <br />
              San Francisco, CA 94107 <br />
              États-Unis <br />
              <a
                href="https://www.cloudflare.com"
                target="_blank"
                className="text-primaryRed hover:underline"
              >
                https://www.cloudflare.com
              </a>
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-bold text-primaryBlue mb-2">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des contenus présents sur ce site (textes, images,
              graphismes, logo, vidéos) est protégé par le droit d’auteur.
              Toute reproduction, représentation, modification ou adaptation,
              totale ou partielle, est interdite sans autorisation préalable.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-xl font-bold text-primaryBlue mb-2">
              Données personnelles
            </h2>
            <p>
              Ce site ne collecte pas de données personnelles sans votre
              consentement.  
              Les outils de mesure d’audience sont activés uniquement après
              acceptation des cookies.
            </p>
            
          </section>

        </div>
      </motion.section>
    </main>
  );
}
