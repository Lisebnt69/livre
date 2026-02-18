import { book } from "../data/book";

export default function FlipbookCTA() {
  return (
    <section className="flex h-full w-full items-center justify-center bg-white">
      <div className="max-w-[420px] px-6 py-8 text-center">

        {/* auteur */}
        <div className="text-[13px] font-medium text-slate-500">
          {book.author}
        </div>

        {/* titre */}
        <h2 className="mt-2 text-[26px] font-extrabold leading-tight text-slate-900">
          {book.title}
        </h2>

        {/* tagline */}
        <p className="mt-3 text-[14px] italic text-slate-600">
          {book.tagline}
        </p>

        {/* cover */}
        <div className="mt-6 flex justify-center">
          <img
            src="/cover.jpg"
            alt={book.title}
            className="h-[180px] w-auto rounded-xl shadow-md"
          />
        </div>

        {/* CTA broché */}
        <a
          href={book.amazonUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-[#FF9900] px-8 py-3 text-[15px] font-bold text-white transition hover:scale-[1.02]"
        >
          Acheter le broché
        </a>

        {/* formats dispo */}
        <div className="mt-6 text-[12px] text-slate-500">
          Disponible en {book.formats.join(" et ")}
        </div>

        {/* logos */}
        <div className="mt-3 flex items-center justify-center gap-6 opacity-80">
          {/* amazon */}
          <span className="text-[14px] font-semibold tracking-wide text-slate-700">
            Amazon
          </span>

          {/* kindle link */}
          <a
            href={book.kindleUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[14px] font-semibold tracking-wide text-slate-400 underline underline-offset-4"
          >
            Kindle
          </a>
        </div>

      </div>
    </section>
  );
}
