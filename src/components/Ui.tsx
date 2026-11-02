import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Plus } from "lucide-react";
import type { Crumb, FaqItem } from "../lib/schema";
import { Rich } from "../lib/rich";

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
            {i < items.length - 1 ? (
              <Link to={c.path} className="underline-offset-4 hover:text-ink hover:underline">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Faq({ items, id }: { items: FaqItem[]; id?: string }) {
  return (
    <div id={id} className="space-y-3">
      {items.map((f) => (
        <details key={f.q} className="group rounded-3xl bg-card shadow-lift open:bg-card">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left sm:px-7 [&::-webkit-details-marker]:hidden">
            <h3 className="text-lg font-semibold leading-snug text-ink sm:text-xl">{f.q}</h3>
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lav text-ink transition-colors group-open:bg-locker group-open:text-card">
              <Plus size={18} aria-hidden="true" className="transition-transform duration-200 group-open:rotate-45" />
            </span>
          </summary>
          <p className="max-w-prose px-6 pb-6 pr-12 text-[17px] leading-relaxed text-ink/85 sm:px-7">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Bloc « L'essentiel en 30 secondes » : réponse directe, citable par Google et les moteurs IA. */
export function Tldr({ items, title = "L’essentiel en 30 secondes" }: { items: string[]; title?: string }) {
  return (
    <aside aria-label={title} className="rounded-4xl bg-butter p-6 sm:p-9">
      <h2 className="text-2xl sm:text-3xl">
        <Rich text={title} />
      </h2>
      <ul className="mt-5 space-y-3.5">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-[17px] leading-relaxed text-ink">
            <span aria-hidden="true" className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-locker" />
            <span>
              <Rich text={t} />
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

type Tone = "paper" | "lav" | "peach" | "rose" | "butter" | "mint" | "card" | "ink" | "mist";

const PANEL: Record<Exclude<Tone, "paper">, string> = {
  lav: "bg-lav",
  mist: "bg-lav",
  peach: "bg-peach",
  rose: "bg-rose",
  butter: "bg-butter",
  mint: "bg-mint",
  card: "bg-card shadow-lift",
  ink: "bg-ink text-card",
};

/**
 * Section de page. Fond crème par défaut ; toute autre tonalité s'affiche en bloc arrondi inséré,
 * comme les grands blocs pastel d'Alan.
 */
export function Section({
  children,
  tone = "paper",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  if (tone === "paper") {
    return (
      <section id={id} className={`py-14 sm:py-20 lg:py-24 ${className}`}>
        <div className="wrap">{children}</div>
      </section>
    );
  }
  return (
    <section id={id} className={`py-3 sm:py-4 ${className}`}>
      <div className="wrap">
        <div className={`rounded-4xl px-5 py-12 sm:rounded-5xl sm:px-10 sm:py-16 lg:px-16 lg:py-20 ${PANEL[tone]}`}>{children}</div>
      </div>
    </section>
  );
}

export function SectionHead({
  title,
  lead,
  tone = "paper",
  center = false,
}: {
  title: string;
  lead?: string;
  tone?: "paper" | "ink";
  center?: boolean;
}) {
  const dark = tone === "ink";
  return (
    <header className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className={`text-display-l ${dark ? "!text-card" : ""}`}>
        <Rich text={title} tone={dark ? "dark" : "light"} />
      </h2>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed sm:text-xl ${dark ? "text-card/80" : "text-muted"}`}>
          <Rich text={lead} tone={dark ? "dark" : "light"} />
        </p>
      )}
    </header>
  );
}
