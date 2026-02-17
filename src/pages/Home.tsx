import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";
import { home } from "../data/home";
import { book } from "../data/book";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const sectionView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.25 },
};

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-primaryBlue font-sans">
      {/* HERO */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-14"
        variants={fadeUp}
        {...sectionView}
        custom={0}
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeUp} custom={1} className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-primaryRed text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 md:mb-8">
              {home.hero.badge}
            </span>

            <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] md:leading-[1.02] mb-6 text-primaryBlue">
              {home.hero.title}
              <span className="block text-primaryRed mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {home.hero.titleEmphasis}
              </span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg md:text-xl text-textDark mb-10 leading-relaxed">
              {home.hero.lead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <CTAButton
                label={home.hero.ctaPrimary}
                href="/livre"
                className="bg-red-900 hover:bg-red-700 shadow-lg hover:shadow-xl transition"
              />
              <CTAButton
                label={home.hero.ctaSecondary}
                href={book.amazonUrl}
                className="border border-black/10 hover:border-black/20 transition"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={2} className="flex justify-center md:justify-end">
            <img
              src="/cover.jpg"
              alt="Couverture du livre"
              className="rounded-3xl shadow-2xl w-[320px] md:w-[380px] lg:w-[420px] hover:-translate-y-1 hover:scale-[1.02] transition duration-500"
              draggable={false}
            />
          </motion.div>
        </div>
      </motion.section>
      
{/* STATS */}
      <motion.section
        className="py-20 px-6 md:px-10"
        variants={fadeUp}
        {...sectionView}
        custom={0}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#384c8b] mb-14">
            Un guide construit sur le réel
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { big: "+650", small: "Retours d’expérience de Famille" },
              { big: "+50", small: "Situations concrètes & conseils actionnables" },
              { big: "Préparer + rassurer", small: "L’objectif du livre", bigClass: "text-2xl md:text-3xl" },
            ].map((s, idx) => (
              <motion.div
                key={s.small}
                variants={fadeUp}
                custom={idx + 1}
                className="bg-white rounded-2xl shadow-xl p-10"
              >
                <p className={`${s.bigClass ?? "text-5xl"} font-black text-primaryRed mb-4`}>
                  {s.big}
                </p>
                <p className="text-sm font-semibold text-[#384c8b]">
                  {s.small}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* INTRO CONTEXT */}
      <motion.section
        className="max-w-4xl mx-auto px-6 md:px-10 pb-20 text-center"
        variants={fadeUp}
        {...sectionView}
        custom={3}
      >
        <p className="text-lg md:text-xl leading-relaxed text-primaryBlue/85">
          Une année de High School aux États-Unis est une expérience unique : immersion linguistique,
          découverte d’une nouvelle culture, autonomie et confiance en soi.
        </p>

        <p className="mt-5 text-lg md:text-xl leading-relaxed text-primaryBlue/80">
          Entre moments dignes d’un film américain et situations qui demandent adaptation et résilience,
          cette aventure se prépare en famille et s’accompagne tout au long de l’année.
        </p>

        <p className="mt-5 text-lg md:text-xl leading-relaxed font-semibold text-primaryBlue">
          Ce guide très concret vous aide à anticiper la réalité du quotidien et à aborder cette expérience
          avec sérénité, dès aujourd’hui.
        </p>
      </motion.section>


      {/* STORYTELLING (sans cards) */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-10 pb-16"
        variants={fadeUp}
        {...sectionView}
        custom={0}
      >
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#384c8b]/70">
            Pourquoi ce guide existe
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-[#384c8b] leading-tight">
            Du vécu. Des réponses. Un plan clair.
          </h2>
        </div>

        <div className="space-y-12">
          <article className="pl-6 border-l-4 border-primaryRed">
            <h3 className="text-2xl md:text-3xl font-black text-[#384c8b] leading-snug">
              Anticiper pour être correctement préparé et
              <span className="text-primaryRed"> éviter les soucis</span>
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Solitude / isolement en famille d’accueil",
                "Choc culturel + perte de repères",
                "Démarches et règles mal comprises",
                "Retour en France plus difficile que prévu",
              ].map((t) => (
                <span
                  key={t}
                  className="text-sm font-semibold text-[#384c8b] bg-white/70 border border-[#384c8b]/10 rounded-full px-4 py-2"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-6 text-base md:text-lg text-[#384c8b]/80 leading-relaxed max-w-3xl">
              Vous ne pouvez pas tout contrôler. Mais vous pouvez{" "}
              <span className="font-bold text-[#384c8b]">comprendre</span>,{" "}
              <span className="font-bold text-[#384c8b]">anticiper</span> et{" "}
              <span className="font-bold text-[#384c8b]">accompagner</span>. Ce livre vous donne des repères clairs et des solutions concrètes.
            </p>
          </article>

          <article className="pl-6 border-l-4 border-[#384c8b]/20">
            <h3 className="text-2xl md:text-3xl font-black text-[#384c8b] leading-snug">
              Un guide, pas un livre promotionnel.
              <span className="text-primaryRed"> Du vécu. Du vrai.</span>
            </h3>

            <p className="mt-6 text-base md:text-lg text-[#384c8b]/80 leading-relaxed max-w-3xl">
              Les moments plus délicats que les organismes ne dévoilent pas souvent, les étudiants et leurs parents les découvriront une fois le jeune sur place.
            </p>

            <p className="mt-4 text-base md:text-lg text-[#384c8b]/80 leading-relaxed max-w-3xl">
              Ce guide répond à ces questions <span className="font-bold text-[#384c8b]">sans filtre</span> : ce qui est bien, et ce qui est difficile —{" "}
              <span className="font-bold text-[#384c8b]">avec des solutions</span>.
            </p>
          </article>

          <article className="pl-6 border-l-4 border-[#384c8b]/20">
            <h3 className="text-2xl md:text-3xl font-black text-[#384c8b] leading-snug">
              Écrit par une maman qui a vécu l’expérience
              <span className="text-primaryRed"> sous plusieurs formes.</span>
            </h3>

            <p className="mt-6 text-base md:text-lg text-[#384c8b]/80 leading-relaxed max-w-3xl">
              Un enfant en famille d’accueil (visa J-1), un autre en internat sport-études (visa F-1), des années d’échanges avec des centaines de parents concernés et elle vit une partie de l’année aux USA.
            </p>

            <p className="mt-4 text-base md:text-lg text-[#384c8b]/80 leading-relaxed max-w-3xl">
              Ce livre est <span className="font-bold text-[#384c8b]">le guide concret que j’aurais aimé avoir </span> avant le départ de mes fils. »
            </p>
          </article>
        </div>
      </motion.section>

      {/* ⭐ AVIS (HOME) — version + clean, + premium, + lisible */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-10 "
        variants={fadeUp}
        {...sectionView}
        custom={0}
      >
          {/* Titre section avis */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
          Preuve sociale
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-black text-primaryBlue">
          Avis lecteurs
          <span className="text-primaryRed"> — du vrai.</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-primaryBlue/75 max-w-2xl mx-auto">
          Des retours authentiques partagés par des parents et des proches.
        </p>
      </div>

        {/* HERO review */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Screenshot (moins dominant, mieux “posé”) */}
          <motion.div variants={fadeUp} custom={1} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primaryRed/20 to-primaryBlue/20 blur-2xl opacity-50" />
              <div className="relative rounded-3xl bg-white/70 border border-black/10 shadow-2xl p-3">
                <img
                  src="/reviews/avis-parent.png"
                  alt="Avis parent (capture)"
                  className="w-full rounded-2xl"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>

            <p className="mt-3 text-xs text-primaryBlue/60">
              Capture d’écran d’un avis réel (groupe de parents / réseaux).
            </p>
          </motion.div>

          {/* Texte (devient l’élément principal) */}
          <motion.div variants={fadeUp} custom={2} className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-black/10 shadow-xl p-7 md:p-9">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-primaryBlue text-white">
                  ★★★★★ <span className="opacity-80">Avis parent</span>
                </span>

                <span className="text-xs font-semibold text-primaryBlue/60">
                  Groupe Facebook • Parent
                </span>
              </div>

              <p className="mt-5 text-xl md:text-2xl text-primaryBlue leading-relaxed font-medium">
                « Ce guide manquait sincèrement. J’aurais tellement aimé en avoir un avant le départ de ma fille.
                Un support concret, basé sur du vécu réel… c’est précieux. »
              </p>

              <p className="mt-4 text-sm font-semibold text-primaryRed">
                — Parent d’étudiant en échange
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <CTAButton
                  label="Voir sur Amazon"
                  href={book.amazonUrl}
                  className="bg-primaryBlue text-white hover:bg-primaryBlue/90 border border-primaryBlue"
                />

                <Link
                  to="/avis"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white text-primaryBlue border border-primaryBlue/30 hover:border-primaryBlue/60 shadow-sm hover:shadow transition"
                >
                  Voir tous les avis →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mini reviews (centrées + cohérentes) */}
        <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              source: "Groupe Facebook",
              text: "Bravo pour cette initiative 👏 Je suis sûre que votre guide aidera de nombreuses familles. Un tel ouvrage manquait !",
            },
            {
              source: "Groupe Facebook",
              text: "Bravo pour ce livre : à part ce groupe, on se sent un peu seul quand on démarre cette aventure. Ce guide va aider les prochaines familles.",
            },
          ].map((r, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              custom={idx + 3}
              className="bg-white rounded-2xl shadow-lg p-6 border border-black/5 hover:shadow-xl transition"
            >
              <p className="text-xs font-semibold text-primaryBlue/60 uppercase tracking-widest">
                {r.source}
              </p>
              <p className="mt-4 text-primaryBlue/85 leading-relaxed">
                “{r.text}”
              </p>
            </motion.article>
          ))}
        </div>

        {/* micro CTA discret (ça finit propre) */}
        <div className="text-center mt-10">
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-primaryBlue/70 hover:text-primaryBlue underline underline-offset-4"
          >
            Lire les avis Amazon →
          </a>
        </div>
      </motion.section>


      {/* Video intro header */}
      <motion.section
        className="max-w-5xl mx-auto px-6 md:px-10 pb-6 text-center"
        variants={fadeUp}
        {...sectionView}
        custom={0}
      >
        <h2 className="text-3xl font-semibold mb-4">Pourquoi j’ai écrit ce livre</h2>
        <p className="mb-10 max-w-2xl mx-auto text-primaryBlue/90">
          {home.video.subtitle}
        </p>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-10 pb-24"
        variants={fadeUp}
        {...sectionView}
        custom={0}
      >
        <div className="bg-primaryRed text-white rounded-3xl py-16 px-8 md:px-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{home.finalCta.title}</h2>
          <p className="text-lg mb-10 opacity-95">{home.finalCta.subtitle}</p>
          <CTAButton href={book.amazonUrl} label={home.finalCta.button} />
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
