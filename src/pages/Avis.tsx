import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";
import ReviewHighlight from "../components/ReviewHighlight";
import TextReviews from "../components/TextReviews";
import { reviews } from "../data/reviews";
import { book } from "../data/book";
import Seo from "../components/Seo";
import { site } from "../data/site";


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

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}

export default function Avis() {
  const hero = reviews.find((r) => r.highlight);

  const sources = useMemo(
    () => ["Tous", ...Array.from(new Set(reviews.map((r) => r.source).filter(Boolean)))],
    []
  );
  const roles = useMemo(
    () => ["Tous", ...Array.from(new Set(reviews.map((r) => r.role).filter(Boolean)))],
    []
  );

  const [q, setQ] = useState("");
  const [source, setSource] = useState("Tous");
  const [role, setRole] = useState("Tous");

  const filtered = useMemo(() => {
    const nq = normalize(q);
    return reviews.filter((r) => {
      if (source !== "Tous" && r.source !== source) return false;
      if (role !== "Tous" && r.role !== role) return false;
      if (!nq) return true;
      const hay = normalize(
        `${r.author ?? ""} ${r.text ?? ""} ${r.source ?? ""} ${r.role ?? ""}`
      );
      return hay.includes(nq);
    });
  }, [q, source, role]);

  const stats = useMemo(() => {
    const total = reviews.length;
    const s = new Set(reviews.map((r) => r.source).filter(Boolean)).size;
    const t = new Set(reviews.map((r) => r.role).filter(Boolean)).size;
    return { total, sources: s, types: t };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-primaryBlue">
      <Seo
        title="Avis lecteurs | Réussir son année de High School aux États-Unis"
        description="Avis de parents, d’étudiants et de proches sur le guide : retours authentiques, captures et extraits lisibles."
        canonical={`${site.baseUrl}/avis`}
      />

      {/* BG blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primaryRed/10 blur-3xl" />
        <div className="absolute top-24 -right-24 h-96 w-96 rounded-full bg-primaryBlue/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-primaryRed/5 blur-3xl" />
      </div>

      {/* HERO */}
      <motion.section
        className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-10"
        variants={fadeUp}
        {...sectionView}
      >
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
            Preuve sociale
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">
            Avis lecteurs
       
          </h1>

          <p className="mt-5 text-lg md:text-xl text-primaryBlue/80 max-w-3xl mx-auto leading-relaxed">
            Des retours réels de parents, d’étudiants et de proches.  
            L’objectif : vous aider à décider.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <CTAButton
              label="Acheter sur Amazon"
              href={book.amazonUrl}
              className="bg-primaryRed text-white hover:bg-primaryRed/90"
              eventName="click_amazon"
            />
            <CTAButton
              label="Lire les premières pages"
              href="/livre#extrait"
              className="bg-primaryBlue text-white hover:bg-primaryBlue/90 border border-primaryBlue"
              eventName="click_amazon"
            />
          </div>
        </div>

        {/* mini stats */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { big: `${stats.total}`, small: "avis sur le site" },
            { big: `${stats.sources}`, small: "sources" },
            { big: `${stats.types}`, small: "profils" },
          ].map((s) => (
            <div
              key={s.small}
              className="bg-white/80 backdrop-blur rounded-2xl border border-black/5 shadow-sm px-6 py-5 text-center"
            >
              <p className="text-3xl md:text-4xl font-black text-primaryBlue">{s.big}</p>
              <p className="mt-1 text-xs font-semibold text-primaryBlue/60 uppercase tracking-widest">
                {s.small}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Sticky action bar */}
      <div className="sticky top-0 z-20 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-3 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="text-sm font-semibold text-primaryBlue/70">
            Avis & retours — <span className="text-primaryBlue">{filtered.length}</span> affichés
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="#avis"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold bg-white border border-black/10 hover:border-black/20 shadow-sm hover:shadow transition"
            >
              Aller aux avis ↓
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold bg-white border border-black/10 hover:border-black/20 shadow-sm hover:shadow transition"
            >
              Story Instagram
            </a>
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold bg-primaryBlue text-white hover:bg-primaryBlue/90 transition"
            >
              Amazon →
            </a>
          </div>
        </div>
      </div>

      {/* HERO HIGHLIGHT */}
      {hero ? (
        <motion.section
          className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-14"
          variants={fadeUp}
          {...sectionView}
        >
          <ReviewHighlight item={hero} amazonUrl={book.amazonUrl} />
        </motion.section>
      ) : null}

      {/* FILTERS + REVIEWS */}
      <motion.section
        id="avis"
        className="max-w-6xl mx-auto px-6 md:px-10 pb-20"
        variants={fadeUp}
        {...sectionView}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
              Lisibles & citables
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-primaryBlue">
              Ce que disent les lecteurs
            </h2>
            <p className="mt-3 text-primaryBlue/70 max-w-2xl leading-relaxed">
              Cherche un mot-clé et filtre par profil.
            </p>
          </div>

          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-primaryRed hover:underline underline-offset-4"
          >
            Voir sur Amazon →
          </a>
        </div>

        {/* Controls */}
        <div className="bg-white/80 backdrop-blur rounded-3xl border border-black/5 shadow-sm p-5 md:p-6 mb-10">
          <div className="grid lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-6">
              <label className="text-xs font-semibold text-primaryBlue/60 uppercase tracking-widest">
                Recherche
              </label>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Ex: rassurant, démarches, famille d’accueil, retour…"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primaryBlue placeholder:text-primaryBlue/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryBlue/30"
              />
            </div>

            <div className="lg:col-span-3">
              <label className="text-xs font-semibold text-primaryBlue/60 uppercase tracking-widest">
                Source
              </label>
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primaryBlue shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryBlue/30"
              >
                {sources.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-3">
              <label className="text-xs font-semibold text-primaryBlue/60 uppercase tracking-widest">
                Profil
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-primaryBlue shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryBlue/30"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setQ("");
                setSource("Tous");
                setRole("Tous");
              }}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-white border border-black/10 hover:border-black/20 shadow-sm hover:shadow transition"
            >
              Reset
            </button>

            <span className="px-4 py-2 rounded-xl text-sm font-semibold bg-primaryBlue/5 text-primaryBlue border border-primaryBlue/10">
              {filtered.length} résultat(s)
            </span>
          </div>
        </div>

        {/* Reviews list */}
        <TextReviews items={filtered} />

        {/* Bottom CTA */}
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

      {/* STORY INSTAGRAM */}
      <motion.section
        id="story"
        className="max-w-6xl mx-auto px-6 md:px-10 pb-24"
        variants={fadeUp}
        {...sectionView}
      >
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/60">
            Vu sur Instagram
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-primaryBlue">
            La story qui résume tout
          </h2>
          
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-[300px] sm:w-[340px]">
              <div className="absolute -inset-5 bg-gradient-to-r from-primaryRed/15 to-primaryBlue/20 blur-2xl opacity-70" />
              <div className="relative rounded-[2.4rem] bg-slate-900 p-3 shadow-2xl">
                <div className="rounded-[1.9rem] bg-white overflow-hidden">
                  <img
                    src="/reviews/story-1.png"
                    alt="Story Instagram - avis"
                    className="w-full h-auto"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
              <p className="mt-3 text-xs text-primaryBlue/60 text-center">
                Capture • Story Instagram
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-black/10 shadow-xl p-7 md:p-9">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-white border border-black/10 text-primaryBlue">
                💬 <span className="text-primaryBlue/70">retour spontané</span>
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl font-black text-primaryBlue">
                Un guide qui rassure, même à distance.
              </h3>

              <p className="mt-4 text-lg text-primaryBlue/80 leading-relaxed max-w-xl">
                Démarches, intégration, imprévus, retour…  
                <span className="font-semibold text-primaryBlue">
                  l’idée c’est d’être prêt, pas surpris.
                </span>
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <CTAButton
                  label="Acheter sur Amazon"
                  href={book.amazonUrl}
                  className="bg-primaryRed text-white hover:bg-primaryRed/90 hover:text-white"
                  eventName="click_amazon"
                />
                <CTAButton
                  label="Lire les premières pages"
                  href="/livre#extrait"
                  className="bg-primaryBlue text-white hover:bg-primaryBlue/90 border border-primaryBlue hover:text-white"
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
