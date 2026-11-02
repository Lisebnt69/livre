import { useEffect, useState, type ComponentType } from "react";
import { Link } from "react-router-dom";
import { AmazonButton } from "./Amazon";
import { book } from "../data/book";

const PAGES = Array.from({ length: 10 }, (_, i) => `/flip/page-${String(i).padStart(2, "0")}.jpg`);

/** Flipbook chargé uniquement dans le navigateur : le HTML pré-rendu contient les pages en images simples. */
export function ExtractViewer() {
  const [Book, setBook] = useState<ComponentType<{ images: string[] }> | null>(null);
  useEffect(() => {
    let live = true;
    import("./Flipbook").then((m) => live && setBook(() => m.default));
    return () => {
      live = false;
    };
  }, []);

  if (Book) return <Book images={PAGES} />;
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4" aria-busy="true">
      {PAGES.slice(0, 2).map((src, i) => (
        <img key={src} src={src} alt={i === 0 ? "Couverture du livre" : "Page de l’extrait"} width={420} height={640} loading={i === 0 ? "eager" : "lazy"} className="h-auto w-full rounded-[6px] bg-card shadow-lift" />
      ))}
    </div>
  );
}

export function ExtractEnd() {
  return (
    <div className="mt-10 rounded-4xl bg-lav p-7 text-center sm:p-10">
      <p className="text-2xl font-bold sm:text-3xl">
        La suite est dans le livre : <span className="text-locker">{book.pages} pages, 10 chapitres</span>.
      </p>
      <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
        <AmazonButton placement="extrait-fin">Acheter le broché</AmazonButton>
        <AmazonButton format="kindle" variant="ghost" placement="extrait-fin-kindle">Version Kindle</AmazonButton>
      </div>
      <p className="mt-4 text-sm text-muted">
        <a href="/preface.pdf" target="_blank" rel="noopener" className="link">Ouvrir la préface en PDF</a>
        {" · "}
        <Link to="/livre/" className="link">Voir le sommaire détaillé</Link>
      </p>
    </div>
  );
}
