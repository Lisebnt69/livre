import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";
import { home } from "../data/home";
import { book } from "../data/book";

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
  const [images, setImages] = useState<string[]>([]);
  const [usePdf, setUsePdf] = useState(false);

  useEffect(() => {
    async function loadImages() {
      const loaded: string[] = [];
      let i = 1; // ✅ commence à 01 (toi tu faisais 00)
      while (true) {
        const url = `/flip/page-${String(i).padStart(2, "0")}.jpg`;
        try {
          const res = await fetch(url, { method: "HEAD" });
          if (!res.ok) break;
          loaded.push(url);
          i++;
        } catch {
          break;
        }
      }
      if (loaded.length > 0) {
        setImages(loaded);
        setUsePdf(false);
      } else {
        setUsePdf(true);
      }
    }
    loadImages();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-primaryBlue font-sans">
      {/* HERO */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-14"
        variants={fadeUp}
        {...sectionView}
        custom={0}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} custom={1} className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-primaryRed text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-5">
              {home.hero.badge}
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5">
              {home.hero.title}
              <br />
              <span className="text-primaryRed">{home.hero.titleEmphasis}</span>
            </h1>

            <p className="text-lg text-textDark max-w-xl mb-9 leading-relaxed">
              {home.hero.lead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <CTAButton label={home.hero.ctaPrimary} href="/livre" className="bg-red-900 hover:bg-red-700 hover:text-white"/>
              <CTAButton
                label={home.hero.ctaSecondary}
                href={book.amazonUrl}
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={2} className="flex justify-center md:justify-end">
            <img
              src="/cover.jpg"
              alt="Couverture du livre"
              className="rounded-3xl shadow-2xl max-w-sm md:max-w-md hover:scale-[1.02] transition duration-500"
              draggable={false}
            />
          </motion.div>
        </div>
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
              Ce n’est pas la peur qui est le problème.
              <span className="text-primaryRed"> C’est l’impréparation.</span>
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
              Ici, pas une brochure.
              <span className="text-primaryRed"> Du vécu. Du vrai.</span>
            </h3>

            <p className="mt-6 text-base md:text-lg text-[#384c8b]/80 leading-relaxed max-w-3xl">
              Ce que les brochures ne racontent pas. Ce que les organismes n’ont pas toujours le temps d’expliquer. Ce que les parents découvrent parfois une fois que
              l’enfant est déjà sur place.
            </p>

            <p className="mt-4 text-base md:text-lg text-[#384c8b]/80 leading-relaxed max-w-3xl">
              Ce guide répond à ces questions <span className="font-bold text-[#384c8b]">sans filtre</span> : ce qui est bien, et ce qui est moins bien —{" "}
              <span className="font-bold text-[#384c8b]">avec des solutions</span>.
            </p>
          </article>

          <article className="pl-6 border-l-4 border-[#384c8b]/20">
            <h3 className="text-2xl md:text-3xl font-black text-[#384c8b] leading-snug">
              Écrit par une mère qui l’a vécu
              <span className="text-primaryRed"> avec ses deux enfants.</span>
            </h3>

            <p className="mt-6 text-base md:text-lg text-[#384c8b]/80 leading-relaxed max-w-3xl">
              Je ne suis ni une agence, ni un organisme. Je suis une maman. J’ai vécu les moments de joie, les doutes, les difficultés et les réussites.
            </p>

            <p className="mt-4 text-base md:text-lg text-[#384c8b]/80 leading-relaxed max-w-3xl">
              Ce livre est <span className="font-bold text-[#384c8b]">le guide que j’aurais voulu avoir</span> avant leur départ.
            </p>
          </article>
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
              { big: "+100", small: "Retours d’expérience utilisés" },
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

      {/* VIDEO */}
      <motion.section
        className="max-w-5xl mx-auto px-6 md:px-10 pb-6 text-center"
        variants={fadeUp}
        {...sectionView}
        custom={0}
      >
        <h2 className="text-3xl font-semibold mb-4">🎥 Pourquoi j’ai écrit ce livre</h2>
        <p className="mb-10 max-w-2xl mx-auto text-primaryBlue/90">
          {home.video.subtitle}
        </p>

        {home.video.youtubeUrl ? (
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-black">
            <iframe
              src={home.video.youtubeUrl}
              title="Vidéo présentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl bg-slate-100 grid place-items-center text-slate-400 italic shadow">
            Vidéo à venir...
          </div>
        )}

        <div className="mt-8">
          <CTAButton href={book.amazonUrl} label={home.video.cta} className="bg-red-900 hover:bg-red-700 hover:text-white"/>
        </div>
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
          <CTAButton
            href={book.amazonUrl}
            label={home.finalCta.button}
            
          />
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
