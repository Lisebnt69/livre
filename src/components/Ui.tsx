import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Plus } from "lucide-react";
import type { Crumb, FaqItem } from "../lib/schema";

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
            {i < items.length - 1 ? (
              <Link to={c.path} className="hover:text-ink hover:underline underline-offset-4">
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
    <div id={id} className="divide-y divide-rule border-y border-rule">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl" style={{ fontStretch: "90%" }}>
              {f.q}
            </h3>
            <Plus
              size={22}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-locker transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="max-w-prose pb-6 pr-10 text-[17px] leading-relaxed text-ink/85">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Bloc "L'essentiel en 30 secondes" : réponse directe, citable par Google et les moteurs IA. */
export function Tldr({ items, title = "L’essentiel en 30 secondes" }: { items: string[]; title?: string }) {
  return (
    <aside aria-label={title} className="rounded-2xl border border-navy/15 bg-mist p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      <ul className="mt-5 space-y-3.5">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-[17px] leading-relaxed text-ink">
            <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-locker" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function Section({
  children,
  tone = "paper",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "paper" | "mist" | "ink" | "card";
  className?: string;
  id?: string;
}) {
  const bg = { paper: "bg-paper", mist: "bg-mist", card: "bg-card", ink: "bg-ink text-card" }[tone];
  return (
    <section id={id} className={`${bg} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function SectionHead({
  title,
  lead,
  tone = "paper",
}: {
  title: string;
  lead?: string;
  tone?: "paper" | "ink";
}) {
  return (
    <header className="max-w-3xl">
      <h2 className={`text-display-l ${tone === "ink" ? "!text-card" : ""}`}>{title}</h2>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed sm:text-xl ${tone === "ink" ? "text-card/80" : "text-muted"}`}>{lead}</p>
      )}
    </header>
  );
}
