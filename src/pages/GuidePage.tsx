import { Link } from "react-router-dom";
import { Breadcrumb, Faq, Section, Tldr } from "../components/Ui";
import { AmazonButton } from "../components/Amazon";
import { FinalCta, GuideLinks, ShareToParents, WorryTable } from "../components/Blocks";
import { Cover } from "../components/Cover";
import type { Guide } from "../data/guides";

const COMPARISON: [string, string, string][] = [
  ["Principe", "Programme d’échange supervisé par le Département d’État", "Scolarité classique aux États-Unis"],
  ["École", "Lycée public, sans frais de scolarité", "Privée ou publique payante"],
  ["Hébergement", "Famille d’accueil bénévole", "Internat ou famille d’accueil rémunérée"],
  ["Choix de l’État et de l’école", "Non", "Souvent oui"],
  ["Programme sportif ou artistique", "Non choisi", "Possible"],
  ["Durée", "Dix mois maximum, sans prolongation", "Peut s’étaler sur plusieurs années"],
  ["Budget", "Nettement plus faible", "Bien plus élevé"],
];

function Comparison() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-rule bg-card">
      <table className="w-full min-w-[34rem] border-collapse text-left">
        <caption className="sr-only">Comparatif visa J-1 et visa F-1</caption>
        <thead>
          <tr className="border-b border-rule bg-mist">
            <td className="px-5 py-4" />
            <th scope="col" className="px-5 py-4 font-display text-xl font-extrabold" style={{ fontStretch: "85%" }}>Visa J-1</th>
            <th scope="col" className="px-5 py-4 font-display text-xl font-extrabold" style={{ fontStretch: "85%" }}>Visa F-1</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-rule">
          {COMPARISON.map(([k, a, b]) => (
            <tr key={k}>
              <th scope="row" className="px-5 py-4 text-[15px] font-semibold text-muted">{k}</th>
              <td className="px-5 py-4 text-[16px] leading-snug">{a}</td>
              <td className="px-5 py-4 text-[16px] leading-snug">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-rule px-5 py-3 text-[13px] text-muted">
        Informations générales. Les règles de visa évoluent : vérifiez toujours auprès de votre organisme et des sources officielles.
      </p>
    </div>
  );
}

export default function GuidePage({ guide: g, crumbs }: { guide: Guide; crumbs: { name: string; path: string }[] }) {
  return (
    <>
      {/* HERO */}
      <header className="border-b border-rule">
        <div className="wrap grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-8">
            <Breadcrumb items={crumbs} />
            <h1 className="mt-6 text-display-xl !text-[clamp(2.2rem,5vw,4.2rem)]">{g.h1}</h1>
            <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-ink/85 sm:text-xl">{g.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AmazonButton placement={`guide-${g.slug}-hero`} className="!py-3.5 !text-base">
                Voir le guide sur Amazon
              </AmazonButton>
              {g.tu ? <ShareToParents /> : <Link to="/extrait/" className="btn-ghost !py-3.5 !text-base">Lire un extrait gratuit</Link>}
            </div>
          </div>
          <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
            <Cover sizes="260px" className="max-w-[260px] justify-self-end" />
          </div>
        </div>
      </header>

      {/* TL;DR */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Tldr items={g.tldr} />
        </div>
      </Section>

      {/* COMPARATIF (page J-1 / F-1 uniquement) */}
      {g.slug === "j1-ou-f1" && (
        <Section tone="card">
          <h2 className="text-display-l max-w-3xl">Le comparatif en un coup d’œil</h2>
          <div className="mt-8"><Comparison /></div>
        </Section>
      )}

      {/* CONTENU */}
      <Section tone={g.slug === "j1-ou-f1" ? "paper" : "card"}>
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Sommaire de la page" className="sticky top-24 text-[15px]">
              <p className="mb-3 font-semibold text-muted">Sur cette page</p>
              <ul className="space-y-2 border-l border-rule pl-4">
                {g.sections.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`} className="text-ink/80 hover:text-locker">{s.h2}</a></li>
                ))}
                <li><a href="#questions" className="text-ink/80 hover:text-locker">Questions fréquentes</a></li>
              </ul>
            </nav>
          </aside>
          <div className="space-y-14 lg:col-span-8 lg:col-start-5">
            {g.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-display-m">{s.h2}</h2>
                <div className="mt-4 space-y-4 text-[18px] leading-[1.7] text-ink/90">
                  {s.body.map((p) => <p key={p}>{p}</p>)}
                </div>
                {s.list && (
                  <ul className="mt-5 space-y-3 text-[18px] leading-[1.6] text-ink/90">
                    {s.list.map((li) => (
                      <li key={li} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-locker" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {g.quote && (
              <figure className="rounded-2xl bg-mist p-7 sm:p-9">
                <blockquote className="font-display text-2xl font-bold leading-snug text-ink" style={{ fontStretch: "92%" }}>
                  « {g.quote.text} »
                </blockquote>
                <figcaption className="mt-3 text-muted">{g.quote.who}</figcaption>
              </figure>
            )}
          </div>
        </div>
      </Section>

      {/* OÙ LE LIVRE RÉPOND */}
      <Section tone="mist">
        <WorryTable title={g.worriesTitle} worries={g.worries} />
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <AmazonButton placement={`guide-${g.slug}-table`}>Lire les réponses dans le livre</AmazonButton>
          <Link to="/livre/" className="link">Voir le sommaire complet</Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="questions" className="text-display-l scroll-mt-24">Questions fréquentes</h2>
          </div>
          <div className="lg:col-span-8"><Faq items={g.faq} /></div>
        </div>
      </Section>

      <Section tone="card">
        <GuideLinks slugs={g.related} />
      </Section>

      <FinalCta title={g.ctaTitle} text={g.ctaText} placement={`guide-${g.slug}-final`} />
    </>
  );
}
