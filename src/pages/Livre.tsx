// src/pages/Livre.tsx
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Flipbook from "../components/Flipbook";
import PdfViewer from "../components/PdfViewer";
import CTAButton from "../components/CTAButton";
import { book } from "../data/book";

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

export default function Livre() {
  const [images, setImages] = useState<string[]>([]);
  const [usePdf, setUsePdf] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadImages() {
      setLoading(true);

      const loaded: string[] = [];
      let idx = 0;

      while (true) {
        const url = `/flip/page-${String(idx).padStart(2, "0")}.jpg`;

        try {
          const res = await fetch(url, { method: "HEAD", cache: "no-store" });
          if (!res.ok) break;

          loaded.push(url);
          idx++;

          // limite pages pour éviter d’aspirer tout le dossier
          if (idx > 9) break;
        } catch {
          break;
        }
      }

      if (cancelled) return;

      if (loaded.length > 0) {
        setImages(loaded);
        setUsePdf(false);
      } else {
        setUsePdf(true);
      }

      setLoading(false);
    }

    loadImages();
    return () => {
      cancelled = true;
    };
  }, []);

  const benefits = useMemo(
    () => [
      {
        title: "Comprendre sans se noyer",
        desc: "Les règles, les démarches, et ce qui compte vraiment, expliqué simplement.",
      },
      {
        title: "Anticiper les imprévus",
        desc: "Ce qui surprend le plus souvent… et comment rester serein quand ça bouge.",
      },
      {
        title: "Savoir réagir quand ça coince",
        desc: "Sans drama, sans escalade : les bons réflexes au bon moment.",
      },
      {
        title: "Préparer le retour (souvent oublié)",
        desc: "Pour éviter le “choc du retour” et reprendre ses repères plus facilement.",
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-primaryBlue">

      {/* Sticky CTA mobile */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40">
        <div className="mx-auto max-w-7xl px-4 pb-4">
          <div className="rounded-2xl border border-black/10 bg-white/85 backdrop-blur shadow-lg p-3 flex gap-2">
            <a
              href="#extrait"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold bg-white text-primaryBlue border border-black/10 hover:border-black/20 transition"
            >
              Lire un extrait
            </a>
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold bg-primaryRed text-white hover:bg-primaryRed/90 transition"
            >
              Acheter
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-14 pb-12">

        {/* HERO */}
        <motion.section
          className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start"
          variants={fadeUp}
          {...sectionView}
        >
          {/* Texte */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-white border border-black/10 text-primaryBlue">
              🇺🇸 <span className="text-primaryBlue/70">Guide pratique • Parents & lycéens</span>
            </div>

            <h1 className="mt-5 text-primaryRed text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Réussir son année de High School aux États-Unis,{" "}
              <span className="text-primaryBlue">sans stress inutile.</span>
            </h1>

            <p className="mt-4 text-primaryBlue text-base sm:text-lg md:text-xl leading-snug">
              Un guide clair pour comprendre, anticiper et éviter les pièges :{" "}
              <span className="font-semibold">avant</span> le départ,{" "}
              <span className="font-semibold">pendant</span> le séjour et{" "}
              <span className="font-semibold">au retour</span>.
            </p>

            <p className="mt-4 text-primaryBlue/80 italic text-sm sm:text-base leading-relaxed">
              {book.tagline}
            </p>

            {/* Micro tension (sans spoiler) */}
            <div className="mt-6 rounded-2xl bg-white/90 border border-black/5 shadow-sm p-5 text-primaryBlue/80">
              <p className="text-sm sm:text-base leading-relaxed">
                Une année peut être incroyable… mais partir “au feeling” peut coûter cher
                (stress, incompréhensions, isolement, retour compliqué).
                <span className="font-semibold text-primaryBlue">
                  {" "}L’idée : être prêt, pas surpris.
                </span>
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <CTAButton
                href={book.amazonUrl}
                label="Acheter sur Amazon"
                eventName="click_amazon"
                className="bg-primaryRed text-white hover:bg-primaryRed/90"
              />
              <a
                href="#extrait"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white text-primaryBlue border border-black/10 hover:border-black/20 shadow-sm hover:shadow transition"
              >
                Lire un extrait ↓
              </a>
            </div>

            {/* Ce que vous trouverez (sommaire light) */}
            <div className="mt-10 bg-white/90 rounded-2xl p-5 sm:p-6 shadow-md border border-black/5">
              <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60 mb-4">
                Ce que vous trouverez dans le guide
              </p>

              <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {book.themes.map(({ title, desc }) => (
                  <li key={title} className="text-primaryBlue">
                    <p className="text-sm sm:text-base font-semibold">
                      <span className="underline decoration-primaryRed underline-offset-4">
                        {title}
                      </span>
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-primaryBlue/80 leading-relaxed">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cover */}
          <div className="lg:col-span-5">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px]">
                <div className="absolute -inset-6 bg-gradient-to-r from-primaryRed/15 to-primaryBlue/15 blur-2xl opacity-70" />
                <img
                  src="/cover.jpg"
                  alt="Couverture du livre"
                  className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/60"
                  draggable={false}
                />
                <div className="mt-4 text-center">
                  <p className="text-xs sm:text-sm text-primaryBlue/60">
                    Disponible sur Amazon (broché & Kindle)
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-white border border-black/10 text-primaryBlue">
                    ★★★★★ <span className="text-primaryBlue/70">Premiers retours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* BENEFITS (sans spoiler) */}
        <motion.section
          className="mt-12 sm:mt-16"
          variants={fadeUp}
          {...sectionView}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
                <p className="mt-3 text-center text-xs text-primaryBlue/60">
                  Paiement et livraison gérés par Amazon • Broché & Kindle
                </p>
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-primaryBlue">
                Ce que ce guide change vraiment
              </h2>
            </div>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-3xl border border-black/10 shadow-sm p-6"
                >
                  <p className="text-lg font-black text-primaryBlue">{b.title}</p>
                  <p className="mt-2 text-sm text-primaryBlue/75 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <CTAButton
                href={book.amazonUrl}
                label="Acheter sur Amazon"
                eventName="click_amazon"
                className="bg-primaryBlue text-white hover:bg-primaryBlue/90"
              />
            </div>
          </div>
        </motion.section>

        {/* POUR QUI / PAS POUR QUI */}
        <motion.section
          className="mt-12 sm:mt-16"
          variants={fadeUp}
          {...sectionView}
        >
          <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-black/10 shadow-sm p-7 md:p-10">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
                Pour qui ?
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-primaryBlue">
                Est-ce que c’est fait pour vous ?
              </h2>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-black/10 p-6">
                <p className="text-sm font-semibold text-primaryBlue/70 uppercase tracking-widest">
                  Oui si…
                </p>
                <ul className="mt-4 space-y-3 text-primaryBlue/85">
                  <li>• Vous voulez être rassuré avant le départ</li>
                  <li>• Vous voulez éviter les erreurs “classiques”</li>
                  <li>• Vous voulez comprendre sans jargon</li>
                  <li>• Vous prenez au sérieux le retour en France</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-black/10 p-6">
                <p className="text-sm font-semibold text-primaryBlue/70 uppercase tracking-widest">
                  Pas idéal si…
                </p>
                <ul className="mt-4 space-y-3 text-primaryBlue/85">
                  <li>• Vous cherchez un récit “instagrammable”</li>
                  <li>• Vous ne voulez rien anticiper</li>
                  <li>• Vous préférez “on verra bien”</li>
                  <li>• Vous voulez juste une checklist sans contexte</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton
                href={book.amazonUrl}
                label="Acheter sur Amazon"
                eventName="click_amazon"
                className="bg-primaryRed text-white hover:bg-primaryRed/90"
              />
              <a
                href="/avis"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white text-primaryBlue border border-black/10 hover:border-black/20 shadow-sm hover:shadow transition"
              >
                Voir les avis →
              </a>
            </div>
          </div>
        </motion.section>

        {/* EXTRACT / PDF */}
        <motion.section
          id="extrait"
          className="mt-12 sm:mt-16"
          variants={fadeUp}
          {...sectionView}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
                Extrait
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-primaryBlue">
                Feuilletez quelques pages
              </h2>
            
            </div>

            <div className="relative bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden">
              <div className="p-2 sm:p-3 md:p-5">
                {loading ? (
                  <div className="py-14 text-center text-primaryBlue font-semibold">
                    Chargement de l’extrait…
                  </div>
                ) : usePdf ? (
                  <PdfViewer />
                ) : (
                  <Flipbook images={images} />
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/preface.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white text-primaryBlue border border-primaryBlue/20 hover:border-primaryBlue/40 shadow-sm hover:shadow transition"
              >
                Ouvrir le PDF complet
              </a>

              <CTAButton
                href={book.amazonUrl}
                label="Acheter sur Amazon"
                className="bg-primaryBlue text-white hover:bg-primaryBlue/90 border border-primaryBlue"
                eventName="click_amazon"
              />
            </div>
          </div>
        </motion.section>

        {/* RÉSUMÉ (raccourci + plus punchy) */}
        <motion.section
          className="mt-12 sm:mt-16 pb-10"
          variants={fadeUp}
          {...sectionView}
        >
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-6 sm:p-8 md:p-10 border border-black/5 text-primaryBlue">
            <h2 className="text-2xl sm:text-3xl font-black mb-6">
              Résumé
            </h2>

            <div className="space-y-4 text-primaryBlue/85 leading-relaxed text-sm sm:text-base">
              <p>
                Une année de lycée aux États-Unis est une aventure extraordinaire… à condition d’y être bien préparé.
              </p>
              <p>
                Derrière le rêve (Prom, football, casiers, nouvelles amitiés), il y a aussi des décisions,
                des démarches et une réalité culturelle qu’on ne découvre pas sur TikTok.
              </p>
              <p>
                Ce guide accompagne les étudiants d’échange et leurs parents avant le départ, pendant le séjour et au retour.
                Il aide à comprendre, anticiper et garder les bons réflexes, sans dramatiser.
              </p>

              <div className="mt-6 rounded-2xl bg-primaryBlue/5 border border-primaryBlue/10 p-5">
                <p className="font-semibold text-primaryBlue">
                  En bref : un guide pour dire “oui” en confiance.
                </p>
                <p className="mt-2 text-primaryBlue/80">
                  Et pour aider les jeunes à vivre pleinement l’une des expériences les plus fondatrices de leur vie.
                </p>
              </div>

              <div className="mt-8 text-center">
                <CTAButton
                  href={book.amazonUrl}
                  label="Acheter sur Amazon"
                  eventName="click_amazon"
                  className="bg-primaryRed text-white hover:bg-primaryRed/90"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* petit spacer pour le sticky mobile */}
      <div className="sm:hidden h-24" />
      {/* FAQ ACHAT */}
      <motion.section
        className="sm:mt-16 pb-20"
        variants={fadeUp}
        {...sectionView}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
              Questions fréquentes
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-primaryBlue">
              FAQ 
            </h2>
            
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Est-ce que ce guide est utile si mon enfant part avec un organisme ?",
                a: "Oui. Justement : un organisme gère le cadre, mais pas tous les détails du quotidien. Le guide vous aide à comprendre les règles, anticiper les situations classiques et savoir quoi faire si ça se complique (sans paniquer).",
              },
              {
                q: "Est-ce que c’est trop tard si on a déjà commencé les démarches ?",
                a: "Non. Même si le départ approche, il reste plein de choses à sécuriser : préparation mentale, communication, attentes réalistes, règles de la school/host family, et surtout le retour. Vous gagnerez du temps et vous éviterez des erreurs évitables.",
              },
              {
                q: "Est-ce que c’est plutôt pour les parents ou pour l’étudiant ?",
                a: "Les deux. Les parents y trouvent un plan clair et rassurant. Les étudiants y trouvent des repères concrets sur la vie sur place. Si l’étudiant ne le lit pas, les parents peuvent quand même l’utiliser pour guider et soutenir.",
              },
              
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-2xl border border-black/10 shadow-sm p-5 md:p-6"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <span className="text-base md:text-lg font-semibold text-primaryBlue">
                    {item.q}
                  </span>
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primaryBlue/5 text-primaryBlue border border-primaryBlue/10">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">–</span>
                  </span>
                </summary>

                <div className="mt-3 text-primaryBlue/80 leading-relaxed text-sm md:text-base">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

        </div>
      </motion.section>
      
    </main>
  );
}