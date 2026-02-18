// src/pages/Livre.tsx
import { useEffect, useState } from "react";
import Flipbook from "../components/Flipbook";
import PdfViewer from "../components/PdfViewer";
import CTAButton from "../components/CTAButton";
import { book } from "../data/book";
import Seo from "../components/Seo";
import { site } from "../data/site";

const Livre = () => {
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

    return (
      <main className="min-h-screen bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
          <Seo
            title="Le livre | Réussir son année de High School aux États-Unis"
            description="Découvrez le guide de Stéphanie Oyarsabal : sommaire, thèmes abordés, extrait à feuilleter, et lien d’achat Amazon (broché & Kindle)."
            canonical={`${site.baseUrl}/livre`}
          />

          {/* Info Livre */}
          <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Texte */}
            <div className="lg:col-span-7">
              <h1 className="text-primaryRed text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                {book.title}
              </h1>

              <h2 className="mt-4 text-primaryBlue text-base sm:text-lg md:text-xl leading-snug">
                {book.subtitle}
              </h2>

              <p className="mt-4 italic text-textDark/90 text-sm sm:text-base leading-relaxed">
                {book.tagline}
              </p>

              {/* Thèmes -> responsive (grid sur grand écran) */}
              <div className="mt-8 bg-white/90 rounded-2xl p-5 sm:p-6 shadow-md border border-black/5">
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

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <CTAButton href={book.amazonUrl} label="Acheter le livre" eventName="click_amazon"/>
                <a
                  href="#extrait"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white text-primaryBlue border border-black/10 hover:border-black/20 shadow-sm hover:shadow transition"
                >
                  Lire un extrait ↓
                </a>
              </div>
            </div>

            {/* Cover */}
            <div className="lg:col-span-5">
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
                  <div className="absolute -inset-6 bg-gradient-to-r from-primaryRed/15 to-primaryBlue/15 blur-2xl opacity-70" />
                  <img
                    src="/cover.jpg"
                    alt="Couverture du livre"
                    className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/60"
                    draggable={false}
                  />
                  <p className="mt-3 text-center text-xs sm:text-sm text-primaryBlue/60">
                    Disponible sur Amazon (broché & Kindle)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conseils */}
          <section className="mt-10 sm:mt-14">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-5 sm:p-6 border border-black/5 text-primaryBlue/80">
              <p className="text-sm sm:text-base leading-relaxed">
                <span className="font-semibold text-primaryBlue">Conseil :</span>{" "}
                cliquez à droite ou à gauche sur la page, ou faites glisser le coin pour tourner.
              </p>
            </div>
          </section>

          {/* Flipbook / PDF */}
          <section id="extrait" className="mt-8 sm:mt-10">
            <div className="max-w-6xl mx-auto">
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
          </section>

          {/* Résumé */}
          <section className="mt-12 sm:mt-16">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-6 sm:p-8 md:p-10 border border-black/5 text-primaryBlue">
              <h2 className="text-2xl sm:text-3xl font-black mb-6">
                Résumé
              </h2>

              <div className="space-y-4 text-primaryBlue/85 leading-relaxed text-sm sm:text-base">
                <p>
                  Une année de lycée aux États-Unis est une aventure extraordinaire… à condition d’y être bien préparé.
                </p>
                <p>
                  Chaque année, des milliers de lycéens francophones partent étudier dans une High School américaine.
                </p>
                <p>
                  Derrière le rêve (casiers colorés, football du vendredi soir, Prom Night), se cachent des décisions parfois plus complexes,
                  des démarches exigeantes et une réalité culturelle différente.
                </p>
                <p>
                  Ce guide a été conçu pour accompagner les étudiants d’échange et leurs parents, avant le départ, pendant le séjour et au retour.
                  Vous y trouverez notamment :
                </p>

                <ul className="list-disc list-inside ml-1 sm:ml-6 space-y-2">
                  <li>une explication claire des programmes et visas J-1 et F-1</li>
                  <li>des conseils concrets pour choisir le bon organisme et éviter les pièges</li>
                  <li>une immersion réaliste dans la vie en High School (famille d’accueil ou internat)</li>
                  <li>des clés pour gérer le choc culturel, le homesickness et la communication à distance</li>
                  <li>un accompagnement précieux pour le retour</li>
                </ul>

                <p>
                  Nourri de nombreuses expériences de terrain, ce livre prépare, rassure et éclaire, sans dramatiser.
                </p>
                <p>
                  Un guide de référence pour aider les parents à dire « oui » en confiance, et permettre aux jeunes de vivre pleinement
                  l’une des expériences les plus fondatrices de leur vie.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

export default Livre;
