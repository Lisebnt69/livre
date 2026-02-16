// src/pages/Livre.tsx

import { useEffect, useState } from "react";
import Flipbook from "../components/Flipbook";
import PdfViewer from "../components/PdfViewer";
import CTAButton from "../components/CTAButton";
import { book } from "../data/book";

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

          if (idx > 12) break; 
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
    <main className="min-h-screen bg-bgLight p-6 md:p-12 flex flex-col items-center">
      {/* Info Livre */}
      <section className="max-w-7xl w-full grid md:grid-cols-2 gap-16 mb-16 items-center">
        <div>
          <h1 className="text-primaryRed text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            {book.title}
          </h1>
          <h2 className="text-primaryBlue text-xl mb-4">{book.subtitle}</h2>
          <p className="italic text-textDark mb-6">{book.tagline}</p>

          <ul className="bg-white bg-opacity-90 rounded-xl p-6 shadow-md text-primaryBlue space-y-3 max-w-md font-semibold">
            {book.themes.map(({ title, desc }) => (
              <li key={title}>
                <span className="underline decoration-primaryRed">{title}</span>:{" "}
                {desc}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CTAButton href={book.amazonUrl} label="Acheter le livre" />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/cover.jpg"
            alt="Couverture du livre"
            className="rounded-xl shadow-lg max-w-sm md:max-w-md"
            draggable={false}
          />
        </div>
      </section>

      {/* Conseils */}
      <section className="max-w-[720px] w-full bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-300 text-gray-700">
        <strong className="block mb-2 text-gray-900 font-semibold">
          Conseils pour tourner les pages :
        </strong>
        Cliquez à droite ou à gauche sur la page, ou glissez le coin de la page
        pour tourner.
      </section>

      {/* Flipbook / PDF */}
      <section className="w-full flex flex-col items-center mb-10">
        <div className="relative w-full max-w-[720px] shadow-2xl rounded-xl overflow-hidden bg-white">
          {loading ? (
            <div className="p-10 text-center text-primaryBlue font-semibold">
              Chargement du flipbook...
            </div>
          ) : usePdf ? (
            <div className="p-4">
              <PdfViewer />
            </div>
          ) : (
            <div className="p-3 md:p-4">
              <Flipbook images={images} />
            </div>
          )}
        </div>

        <a
          href="/preface.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-primaryRed font-semibold underline hover:text-secondaryBlue transition"
        >
          Ouvrir le PDF complet
        </a>
      </section>

      {/* Résumé */}
      <section className="max-w-3xl bg-white rounded-xl shadow-md p-8 border border-gray-300 text-gray-900 select-none">
        <h2 className="text-2xl font-bold mb-6">Résumé</h2>

        <p>
          Une année de lycée aux États-Unis est une aventure extraordinaire… à
          condition d’y être bien préparé.
        </p>
        <p>
          Chaque année, des milliers de lycéens francophones partent étudier dans
          une High School américaine.
        </p>
        <p>
          Derrière le rêve (casiers colorés, football du vendredi soir,
          Prom Night), se cachent des décisions parfois plus complexes, des démarches
          exigeantes et une réalité culturelle diiférente.
        </p>
        <p>
          Ce guide a été conçu pour accompagner les étudiants d’échange
          et leurs parents, avant le départ, pendant le séjour et au retour. Vous
          y trouverez notamment :
        </p>

        <ul className="list-disc list-inside ml-6 mb-6 space-y-1">
          <li>une explication claire des programmes et visas J-1 et F-1</li>
          <li>
            des conseils concrets pour choisir le bon organisme et éviter les
            pièges
          </li>
          <li>
            une immersion réaliste dans la vie en High School (famille d’accueil
            ou internat)
          </li>
          <li>
            des clés pour gérer le choc culturel, le homesickness et la
            communication à distance
          </li>
          <li>un accompagnement précieux pour le retour</li>
        </ul>

        <p>Nourri de nombreuses expériences de terrain, ce livre prépare, rassure et éclaire, sans dramatiser.</p>
        <p>
          Un guide de référence pour aider les parents à dire « oui » en
          confiance, et permettre aux jeunes de vivre pleinement l’une des
          expériences les plus fondatrices de leur vie.
        </p>
      </section>
    </main>
  );
};

export default Livre;
