import { book } from "../data/book";

export function Cover({ className = "", priority = false, sizes = "(min-width:1024px) 420px, 70vw" }: { className?: string; priority?: boolean; sizes?: string }) {
  return (
    <img
      src="/cover-800.jpg"
      srcSet="/cover-480.jpg 480w, /cover-800.jpg 800w"
      sizes={sizes}
      width={800}
      height={1219}
      alt={`Couverture du livre ${book.title}, de ${book.author}`}
      className={`h-auto w-full rounded-[6px] shadow-book ${className}`}
      {...(priority ? ({ fetchpriority: "high" } as object) : { loading: "lazy" as const })}
      decoding={priority ? "sync" : "async"}
    />
  );
}
