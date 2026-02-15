import { useEffect, useMemo, useState } from "react";
import HTMLFlipBook from "react-pageflip";

interface Flipbook{
  images: string[];
}

const Flipbook = ({ images }: Flipbook) => {
  const [zoom, setZoom] = useState(false);

  const pages = useMemo(() => images ?? [], [images]);

  useEffect(() => {
    if (!zoom) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
    };

    document.addEventListener("keydown", onKeyDown);
    // bloquer le scroll derrière
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [zoom]);

  if (!pages.length) {
    return <div className="text-center">Chargement du flipbook...</div>;
  }

  // tailles : 1 page = width/height, pageflip affichera 2 pages si place suffisante
  const base = {
    width: 420,
    height: 600,
    minWidth: 320,
    maxWidth: 520,
    minHeight: 460,
    maxHeight: 740,
  };

  const zoomed = {
    width: 520,
    height: 740,
    minWidth: 380,
    maxWidth: 900,
    minHeight: 520,
    maxHeight: 1100,
  };

  const cfg = zoom ? zoomed : base;

  const Book = (
    <HTMLFlipBook
      width={cfg.width}
      height={cfg.height}
      size="stretch"
      minWidth={cfg.minWidth}
      maxWidth={cfg.maxWidth}
      minHeight={cfg.minHeight}
      maxHeight={cfg.maxHeight}
      showCover={true}
      mobileScrollSupport={true}
      maxShadowOpacity={0.25}
      className="mx-auto"
    >
      {pages.map((src, index) => (
        <div
          key={src}
          className="bg-white w-full h-full flex items-center justify-center overflow-hidden select-none"
          style={{ userSelect: "none" }}
        >
          <img
            src={src}
            alt={`Page ${index}`}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      ))}
    </HTMLFlipBook>
  );

  // ✅ mode normal : clic = zoom
  if (!zoom) {
    return (
      <div className="w-full flex justify-center">
        <button
          type="button"
          onClick={() => setZoom(true)}
          className="cursor-zoom-in"
          aria-label="Agrandir le livre"
        >
          {Book}
        </button>
      </div>
    );
  }

  // ✅ mode zoom : overlay, clic dehors = fermer
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3">
      <div
        className="absolute inset-0"
        onClick={() => setZoom(false)}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-6xl cursor-zoom-out">
        <div className="flex justify-end mb-3">
          <button
            type="button"
            onClick={() => setZoom(false)}
            className="bg-white/90 hover:bg-white text-black font-semibold px-4 py-2 rounded-lg shadow"
          >
            Fermer (Esc)
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-2 md:p-4">
          {Book}
        </div>
      </div>
    </div>
  );
};

export default Flipbook;
