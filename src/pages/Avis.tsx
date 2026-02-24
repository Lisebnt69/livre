import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";
import ReviewHighlight from "../components/ReviewHighlight";
import TextReviews from "../components/TextReviews";
import { reviews } from "../data/reviews";
import { book } from "../data/book";
import StoryPhoneCarousel from "../components/StoryPhoneCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

const sectionView = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, amount: 0.22 },
};

export default function Avis() {
  const hero = reviews.find((r) => r.highlight);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-primaryBlue">

      {/* HERO */}
      <motion.section
        className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-14 text-center"
        variants={fadeUp}
        {...sectionView}
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
          Preuve sociale
        </p>

        <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">
          Avis lecteurs
        </h1>

        <p className="mt-5 text-lg md:text-xl text-primaryBlue/80 max-w-3xl mx-auto leading-relaxed">
          Les premiers parents et étudiants partagent leur retour.
          Leur point commun ? Le soulagement d’avoir anticipé.
        </p>

        {/* Note lancement */}
        <div className="mt-10 bg-white rounded-2xl border border-black/5 shadow-sm px-6 py-6 max-w-3xl mx-auto">
          <div className="text-3xl font-black text-primaryBlue">★★★★★</div>
          <p className="mt-2 text-primaryBlue/70">
            <span className="font-semibold text-primaryBlue">5,0/5</span> —
            Premiers retours depuis la sortie du livre.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <CTAButton
            label="Acheter sur Amazon"
            href={book.amazonUrl}
            className="bg-primaryRed text-white hover:bg-primaryRed/90"
            eventName="click_amazon"
          />
          <CTAButton
            label="Lire les premières pages"
            href="/livre#extrait"
            className="bg-primaryBlue text-white hover:bg-primaryBlue/90"
            eventName="click_amazon"
          />
        </div>
      </motion.section>

      {/* Avis principal mis en avant */}
      {hero && (
        <motion.section
          className="max-w-5xl mx-auto px-6 md:px-10 pb-16"
          variants={fadeUp}
          {...sectionView}
        >
          <ReviewHighlight item={hero} amazonUrl={book.amazonUrl} />
        </motion.section>
      )}

      {/* Citation forte */}
      <motion.section
        className="max-w-5xl mx-auto px-6 md:px-10 pb-16"
        variants={fadeUp}
        {...sectionView}
      >
        <div className="bg-white rounded-3xl border border-black/10 shadow-xl p-8 md:p-10 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
            Le retour qui résume tout
          </p>
          <p className="mt-4 text-2xl md:text-3xl font-black text-primaryBlue leading-snug">
            “Un guide concret, basé sur du vécu réel. C’est précieux.”
          </p>
          <p className="mt-4 text-sm text-primaryBlue/60">
            — Parent d’élève parti aux États-Unis
          </p>
        </div>
      </motion.section>

      {/* Tous les avis */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-10 pb-20"
        variants={fadeUp}
        {...sectionView}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primaryBlue">
            Ce que disent les lecteurs
          </h2>
          <p className="mt-3 text-primaryBlue/70 max-w-2xl mx-auto">
            Des retours spontanés, authentiques et non sponsorisés.
          </p>
        </div>

        <TextReviews items={reviews} />

        <div className="text-center mt-12">
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold bg-primaryBlue text-white hover:bg-primaryBlue/90 transition"
          >
            Voir les avis sur Amazon →
          </a>
        </div>
      </motion.section>

      {/* Stories Instagram */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-10 pb-24"
        variants={fadeUp}
        {...sectionView}
      >
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
            Vu sur Instagram
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-primaryBlue">
            Les stories qui parlent du livre
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-[300px] sm:w-[340px]">
              <div className="relative rounded-[2.4rem] bg-slate-900 p-3 shadow-2xl">
                <div className="rounded-[1.9rem] bg-white overflow-hidden">
                  <div className="aspect-[9/16] w-full">
                    <StoryPhoneCarousel
                      images={[
                        "/reviews/story-1.png",
                        "/reviews/story-2.png",
                        "/reviews/story-3.png",
                        "/reviews/story-4.png"
                      ]}
                      intervalMs={3200}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-black/10 shadow-xl p-7 md:p-9">
              <h3 className="text-2xl md:text-3xl font-black text-primaryBlue">
                Un guide qui rassure, même à distance.
              </h3>

              <p className="mt-4 text-lg text-primaryBlue/80 leading-relaxed">
                Démarches, intégration, imprévus, retour…
                <span className="font-semibold text-primaryBlue">
                  l’idée c’est d’être prêt, pas surpris.
                </span>
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <CTAButton
                  label="Acheter sur Amazon"
                  href={book.amazonUrl}
                  className="bg-primaryRed text-white hover:bg-primaryRed/90"
                  eventName="click_amazon"
                />
                <CTAButton
                  label="Lire les premières pages"
                  href="/livre#extrait"
                  className="bg-primaryBlue text-white hover:bg-primaryBlue/90"
                  eventName="click_amazon"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </main>
  );
}