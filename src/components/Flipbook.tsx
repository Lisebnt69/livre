import { useEffect, useMemo, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Maximize2, X } from "lucide-react";

export default function Flipbook({ images }: { images: string[] }) {
  const [zoom, setZoom] = useState(false);
  const pages = useMemo(() => images, [images]);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom]);

  const cfg = zoom
    ? { width: 520, height: 790, minWidth: 380, maxWidth: 900, minHeight: 520, maxHeight: 1200 }
    : { width: 420, height: 640, minWidth: 300, maxWidth: 520, minHeight: 440, maxHeight: 790 };

  const book = (
    <HTMLFlipBook
      width={cfg.width}
      height={cfg.height}
      size="stretch"
      minWidth={cfg.minWidth}
      maxWidth={cfg.maxWidth}
      minHeight={cfg.minHeight}
      maxHeight={cfg.maxHeight}
      showCover
      mobileScrollSupport
      maxShadowOpacity={0.25}
      className="mx-auto"
      style={{}}
      startPage={0}
      drawShadow
      flippingTime={700}
      usePortrait
      startZIndex={0}
      autoSize
      clickEventForward
      useMouseEvents
      swipeDistance={30}
      showPageCorners
      disableFlipByClick={false}
    >
      {pages.map((src, i) => (
        <div key={src} className="flex h-full w-full select-none items-center justify-center overflow-hidden bg-white">
          <img src={src} alt={i === 0 ? "Couverture" : `Page ${i + 1} de l’extrait`} className="h-full w-full object-contain" draggable={false} />
        </div>
      ))}
    </HTMLFlipBook>
  );

  if (!zoom) {
    return (
      <div>
        <div className="mb-4 flex justify-end">
          <button type="button" onClick={() => setZoom(true)} className="btn-ghost !py-2 !text-sm">
            <Maximize2 size={16} aria-hidden="true" /> Plein écran
          </button>
        </div>
        {book}
        <p className="mt-4 text-center text-sm text-muted">Cliquez ou glissez sur un coin de page pour la tourner.</p>
      </div>
    );
  }

  return (
    <div role="dialog" aria-modal="true" aria-label="Extrait en plein écran" className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-3">
      <div className="absolute inset-0" onClick={() => setZoom(false)} aria-hidden="true" />
      <div className="relative z-10 w-full max-w-6xl">
        <div className="mb-3 flex justify-end">
          <button type="button" onClick={() => setZoom(false)} className="btn-light !py-2 !text-sm">
            <X size={16} aria-hidden="true" /> Fermer (Échap)
          </button>
        </div>
        <div className="rounded-xl bg-card p-2 shadow-book md:p-4">{book}</div>
      </div>
    </div>
  );
}
