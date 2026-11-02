import { Link } from "react-router-dom";
import { book } from "../data/book";
import { guides } from "../data/guides";
import { Cover } from "../components/Cover";
import { BuyBox } from "../components/Amazon";
import { Breadcrumb, Faq, Section, SectionHead } from "../components/Ui";
import { Rich } from "../lib/rich";
import { FinalCta, GuideLinks, Toc } from "../components/Blocks";
import type { FaqItem } from "../lib/schema";

export const livreFaq: FaqItem[] = [
  {
    q: "Le livre est-il utile si mon enfant part avec un organisme ?",
    a: "Oui. L’organisme gère le cadre, mais pas tous les détails du quotidien. Le guide vous aide à comprendre les règles, anticiper les situations classiques et savoir quoi faire si ça se complique, sans paniquer.",
  },
  {
    q: "Est-il trop tard si nous avons déjà commencé les démarches ?",
    a: "Non. Même si le départ approche, il reste beaucoup à sécuriser : préparation mentale, communication, attentes réalistes, règles de l’école et de la famille d’accueil, et surtout le retour.",
  },
  {
    q: "Est-ce un livre pour les parents ou pour l’étudiant ?",
    a: "Pour les deux. Les parents y trouvent un plan clair et rassurant, les étudiants des repères concrets sur la vie sur place. Si l’étudiant ne le lit pas, les parents peuvent l’utiliser pour le guider et le soutenir.",
  },
  {
    q: "Dans quels formats le livre est-il disponible ?",
    a: "En broché (papier), idéal pour annoter et surligner, et en Kindle, pour lire sur téléphone, tablette ou liseuse. Les deux sont vendus sur Amazon.fr, qui gère le prix, le paiement et la livraison.",
  },
  {
    q: "Puis-je lire un extrait avant d’acheter ?",
    a: "Oui. La préface, le sommaire et les premières pages sont en lecture libre sur la page « Extrait gratuit », sans compte ni e-mail.",
  },
];

const benefits = [
  { t: "Comprendre sans se noyer", d: "Les règles, les démarches et ce qui compte vraiment, expliqués simplement." },
  { t: "Anticiper les imprévus", d: "Ce qui surprend le plus souvent, et comment rester serein quand ça bouge." },
  { t: "Savoir réagir quand ça coince", d: "Sans drame ni escalade : les bons réflexes au bon moment." },
  { t: "Préparer le retour", d: "Le grand oublié. Pour éviter le choc du retour et retrouver ses repères." },
];

export default function Livre({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <>
      <header className="pt-5 sm:pt-6">
        <div className="wrap"><Breadcrumb items={crumbs} /></div>
        <div className="wrap mt-4">
         <div className="rounded-4xl bg-lav px-5 py-10 sm:rounded-5xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="mx-auto w-[min(70vw,320px)] lg:col-span-4 lg:w-full">
              <Cover priority sizes="(min-width:1024px) 340px, 70vw" />
            </div>
            <div className="lg:col-span-8">
              <h1 className="text-display-xl !text-[clamp(2.2rem,4.8vw,4.2rem)]"><Rich text="**Réussir son année** de High School aux États-Unis" /></h1>
              <p className="mt-4 max-w-[40rem] text-lg leading-relaxed text-ink/85 sm:text-xl">{book.subtitle}.</p>
              <dl className="mt-6 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 border-y border-ink/10 py-5 text-[15px] sm:grid-cols-4">
                {[
                  ["Autrice", book.author],
                  ["Pages", String(book.pages)],
                  ["Langue", "Français"],
                  ["Formats", "Broché, Kindle"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-ink/65">{k}</dt>
                    <dd className="font-semibold text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 max-w-xl">
                <BuyBox placement="livre-hero" />
              </div>
            </div>
          </div>
         </div>
        </div>
      </header>

      <Section>
        <SectionHead title="Ce que ce guide **change vraiment**." lead={book.tagline} center />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <div key={b.t} className={`rounded-4xl p-7 sm:p-9 ${["bg-peach", "bg-mint", "bg-rose", "bg-butter"][i]}`}>
              <h3 className="text-2xl font-bold">{b.t}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-ink/85">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sommaire" className="!pt-0">
        <SectionHead center title="Le sommaire, **chapitre par chapitre**." lead="Tel qu’il figure dans le livre. Chaque ligne est une question que des familles se sont posée." />
        <div className="mt-12"><Toc detailed /></div>
      </Section>

      <Section tone="lav">
        <SectionHead title="Est-ce **fait pour vous** ?" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-4xl bg-card p-7 shadow-lift">
            <h3 className="text-2xl font-bold">Oui, <span className="text-locker">si…</span></h3>
            <ul className="mt-4 space-y-3 text-[17px] leading-relaxed">
              {["Vous voulez être rassuré avant le départ", "Vous voulez éviter les erreurs classiques", "Vous voulez comprendre sans jargon", "Vous prenez au sérieux le retour en France"].map((t) => (
                <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-locker" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-4xl bg-card p-7 shadow-lift">
            <h3 className="text-2xl font-bold">Pas idéal si…</h3>
            <ul className="mt-4 space-y-3 text-[17px] leading-relaxed text-ink/80">
              {["Vous cherchez un récit « instagrammable »", "Vous ne voulez rien anticiper", "Vous préférez « on verra bien »", "Vous voulez juste une checklist sans contexte"].map((t) => (
                <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead title="Le résumé en **trois paragraphes**." />
          </div>
          <div className="space-y-5 text-[18px] leading-[1.7] text-ink/90 lg:col-span-7">
            <p>Une année de lycée aux États-Unis est une aventure extraordinaire, à condition d’y être bien préparé.</p>
            <p>
              Derrière le rêve (bal de fin d’année, football, casiers, nouvelles amitiés), il y a aussi des décisions, des
              démarches et une réalité culturelle qu’on ne découvre pas sur TikTok.
            </p>
            <p>
              Ce guide accompagne les étudiants d’échange et leurs parents avant le départ, pendant le séjour et au retour. Il
              aide à comprendre, anticiper et garder les bons réflexes, sans dramatiser. Un guide pour dire « oui » en confiance.
            </p>
            <Link to="/extrait/" className="link inline-block">Lire les premières pages gratuitement</Link>
          </div>
        </div>
      </Section>

      <Section tone="peach">
        <GuideLinks slugs={guides.map((g) => g.slug)} title="Le livre, **selon votre situation**" />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHead title="Questions **sur le livre**" /></div>
          <div className="lg:col-span-8"><Faq items={livreFaq} /></div>
        </div>
      </Section>

      <FinalCta placement="livre-final" />
    </>
  );
}
