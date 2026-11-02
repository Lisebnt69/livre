import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { chapters } from "../data/book";
import { guides } from "../data/guides";
import { BuyBox } from "./Amazon";
import { Section } from "./Ui";
import type { Worry } from "../data/guides";
import { Rich } from "../lib/rich";

const PASTELS = ["bg-lav", "bg-rose", "bg-sky", "bg-rose", "bg-lav"] as const;

/** Problème -> réponse : chaque inquiétude renvoie à un chapitre précis du livre. */
export function WorryTable({ title, worries }: { title: string; worries: Worry[] }) {
  return (
    <div>
      <h2 className="mx-auto max-w-3xl text-center text-display-l">
        <Rich text={title} />
      </h2>
      <div className="mt-10 overflow-hidden rounded-4xl bg-card shadow-lift">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{title.replace(/\*\*/g, "")}</caption>
          <thead className="sr-only md:not-sr-only">
            <tr className="bg-lav text-sm text-ink/70">
              <th scope="col" className="px-7 py-3.5 font-semibold">La question</th>
              <th scope="col" className="px-7 py-3.5 font-semibold">Ce que vous trouvez</th>
              <th scope="col" className="w-56 px-7 py-3.5 font-semibold">Dans le livre</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            {worries.map((w) => (
              <tr key={w.worry} className="block md:table-row">
                <th scope="row" className="block px-6 pt-6 text-lg font-semibold leading-snug text-ink md:table-cell md:w-[30%] md:px-7 md:py-6">
                  <Rich text={w.worry} />
                </th>
                <td className="block px-6 pt-2 text-[16px] leading-relaxed text-ink/85 md:table-cell md:px-7 md:py-6">
                  <Rich text={w.answer} />
                </td>
                <td className="block px-6 pb-6 pt-3 text-[14px] leading-snug md:table-cell md:px-7 md:py-6">
                  <span className="inline-block rounded-full bg-rose px-2.5 py-0.5 font-bold text-locker">
                    Chap. {w.chapter} · p.{w.page}
                  </span>
                  <span className="mt-1.5 block text-muted">{w.label}</span>
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
  if (!detailed) {
    return (
      <ol className="grid gap-x-10 sm:grid-cols-2">
        {chapters.map((c) => (
          <li key={c.n} className="flex items-baseline gap-4 border-b border-ink/10 py-3.5">
            <span className="w-7 shrink-0 text-2xl font-bold text-locker tnum">{c.n}</span>
            <span className="flex-1 text-lg font-semibold leading-snug text-ink">{c.title}</span>
            <span className="text-sm text-muted tnum">p.{c.page}</span>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ol className="grid gap-5 md:grid-cols-2">
      {chapters.map((c, i) => (
        <li key={c.n} className="overflow-hidden rounded-4xl bg-card shadow-lift">
          <div className={`flex items-baseline gap-4 px-6 py-5 sm:px-7 ${PASTELS[i % PASTELS.length]}`}>
            <span className="w-9 shrink-0 text-4xl font-bold leading-none text-locker tnum">{c.n}</span>
            <span className="flex-1 text-xl font-semibold leading-snug text-ink">{c.title}</span>
            <span className="text-sm font-medium text-ink/70 tnum">p.{c.page}</span>
          </div>
          {c.items.length > 0 && (
            <ul className="space-y-1.5 px-6 py-5 text-[15px] leading-snug text-ink/80 sm:px-7">
              {c.items.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-locker/70" />
                  {it}
                </li>
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
      <h2 className="text-display-m">
        <Rich text={title} />
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((g, i) => (
          <li key={g.slug}>
            <Link
              to={g.path}
              className={`group flex h-full items-start justify-between gap-4 rounded-4xl p-6 transition-transform hover:-translate-y-0.5 ${PASTELS[i % PASTELS.length]}`}
            >
              <span>
                <span className="block text-xl font-semibold leading-snug text-ink">{g.short}</span>
                <span className="mt-1 block text-[15px] leading-snug text-ink/75">{g.forWho}</span>
              </span>
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-locker">
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Bandeau de conversion final : le livre, le bouton Amazon, rien d'autre. */
export function FinalCta({
  title = "Partez avec **le guide**, pas à l’aveugle.",
  text = "145 pages concrètes pour **comprendre, anticiper et accompagner**. Disponible sur Amazon.fr en broché et en Kindle.",
  placement = "final",
}: {
  title?: string;
  text?: string;
  placement?: string;
}) {
  return (
    <Section tone="red" className="!pb-6 sm:!pb-8">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="text-display-l !text-card">
            <Rich text={title} tone="red" />
          </h2>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-card/90">
            <Rich text={text} tone="red" />
          </p>
          <p className="mt-6 text-card/85">
            Envie de goûter avant d’acheter ?{" "}
            <Link to="/extrait/" className="font-semibold text-card underline decoration-[#FFC2C6] decoration-2 underline-offset-[5px]">
              Feuilleter les premières pages
            </Link>
          </p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <BuyBox placement={placement} dark />
        </div>
      </div>
    </Section>
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
