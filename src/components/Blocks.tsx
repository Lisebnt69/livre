import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { chapters } from "../data/book";
import { guides } from "../data/guides";
import { BuyBox } from "./Amazon";
import type { Worry } from "../data/guides";

/** Problème -> réponse : chaque inquiétude renvoie à un chapitre précis du livre. */
export function WorryTable({ title, worries }: { title: string; worries: Worry[] }) {
  return (
    <div>
      <h2 className="text-display-l max-w-3xl">{title}</h2>
      <div className="mt-10 overflow-hidden rounded-2xl border border-rule bg-card">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{title}</caption>
          <thead className="sr-only md:not-sr-only">
            <tr className="border-b border-rule bg-mist text-sm text-muted">
              <th scope="col" className="px-6 py-3 font-semibold">La question</th>
              <th scope="col" className="px-6 py-3 font-semibold">Ce que vous trouvez</th>
              <th scope="col" className="w-56 px-6 py-3 font-semibold">Dans le livre</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {worries.map((w) => (
              <tr key={w.worry} className="block md:table-row">
                <th scope="row" className="block px-5 pt-5 text-lg font-bold leading-snug text-ink md:table-cell md:w-[30%] md:px-6 md:py-5" style={{ fontStretch: "90%" }}>
                  {w.worry}
                </th>
                <td className="block px-5 pt-2 text-[16px] leading-relaxed text-ink/85 md:table-cell md:px-6 md:py-5">{w.answer}</td>
                <td className="block px-5 pb-5 pt-2 text-[14px] leading-snug md:table-cell md:px-6 md:py-5">
                  <span className="font-semibold text-locker">Chap. {w.chapter}</span>
                  <span className="text-muted"> · p.{w.page}</span>
                  <span className="mt-0.5 block text-muted">{w.label}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Sommaire du livre : chapitres + pages, comme sur l'exemplaire papier. */
export function Toc({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className={detailed ? "grid gap-x-12 gap-y-10 lg:grid-cols-2" : "grid gap-x-12 lg:grid-cols-2"}>
      {chapters.map((c) => (
        <li key={c.n} className={detailed ? "" : "border-b border-rule py-3"}>
          <div className={`flex items-baseline gap-4 ${detailed ? "border-b-2 border-ink pb-2" : ""}`}>
            <span className="w-8 shrink-0 font-display text-2xl font-extrabold text-locker tnum" style={{ fontStretch: "80%" }}>
              {c.n}
            </span>
            <span className="flex-1 font-display text-xl font-bold leading-snug text-ink" style={{ fontStretch: "88%" }}>
              {c.title}
            </span>
            <span className="text-sm text-muted tnum">p.{c.page}</span>
          </div>
          {detailed && c.items.length > 0 && (
            <ul className="mt-3 space-y-1.5 pl-12 text-[15px] leading-snug text-ink/80">
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export function GuideLinks({ slugs, title = "Pour aller plus loin" }: { slugs: string[]; title?: string }) {
  const items = slugs.map((s) => guides.find((g) => g.slug === s)!).filter(Boolean);
  return (
    <div>
      <h2 className="text-display-m">{title}</h2>
      <ul className="mt-6 grid gap-0 border-t border-rule sm:grid-cols-2">
        {items.map((g) => (
          <li key={g.slug} className="border-b border-rule sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">
            <Link to={g.path} className="group flex items-start justify-between gap-4 py-5">
              <span>
                <span className="block font-display text-xl font-bold leading-snug text-ink group-hover:text-locker" style={{ fontStretch: "88%" }}>
                  {g.short}
                </span>
                <span className="mt-1 block text-[15px] leading-snug text-muted">{g.forWho}</span>
              </span>
              <ArrowRight size={20} className="mt-1 shrink-0 text-locker transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Bandeau de conversion final : le livre, le bouton Amazon, rien d'autre. */
export function FinalCta({
  title = "Partez avec le guide, pas à l’aveugle.",
  text = "145 pages concrètes pour comprendre, anticiper et accompagner. Disponible sur Amazon.fr en broché et en Kindle.",
  placement = "final",
}: {
  title?: string;
  text?: string;
  placement?: string;
}) {
  return (
    <section className="bg-ink py-16 text-card sm:py-20 lg:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="text-display-l !text-card">{title}</h2>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-card/80">{text}</p>
          <p className="mt-6 text-card/70">
            Envie de goûter avant d’acheter ?{" "}
            <Link to="/extrait/" className="font-semibold text-card underline decoration-locker decoration-2 underline-offset-[5px]">
              Feuilleter les premières pages
            </Link>
          </p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <BuyBox placement={placement} dark />
        </div>
      </div>
    </section>
  );
}

export function ShareToParents() {
  const subject = encodeURIComponent("Un guide pour mon année de High School aux USA");
  const body = encodeURIComponent(
    `Salut,\n\nJ’ai trouvé un guide pour préparer mon année de High School aux États-Unis (visa, famille d’accueil, budget, retour…). Tu peux le regarder ici :\n\nhttps://www.reussir-son-annee-de-high-school-aux-etats-unis.com/parents/\n\nIl existe en broché et en Kindle sur Amazon.`
  );
  return (
    <a href={`mailto:?subject=${subject}&body=${body}`} className="btn-ghost">
      Envoyer cette page à mes parents
    </a>
  );
}

