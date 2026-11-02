import { book } from "../data/book";
import { reviews, stories } from "../data/reviews";
import { Breadcrumb, Section, SectionHead } from "../components/Ui";
import { AmazonButton } from "../components/Amazon";
import { FinalCta } from "../components/Blocks";

const REVIEW_URL = "https://www.amazon.fr/review/create-review?asin=B0GN4WDVWC";

export default function Avis({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  const [main, ...others] = reviews;
  return (
    <>
      <header className="border-b border-rule">
        <div className="wrap py-10 sm:py-14">
          <Breadcrumb items={crumbs} />
          <h1 className="mt-6 max-w-4xl text-display-xl !text-[clamp(2.2rem,5vw,4.2rem)]">
            Ce que disent les premiers parents et lecteurs du guide.
          </h1>
          <p className="mt-5 max-w-[38rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
            Des retours spontanés, publiés dans des groupes d’échange ou envoyés à l’autrice. Leur point commun : le
            soulagement d’avoir anticipé.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AmazonButton placement="avis-hero">Lire les avis sur Amazon</AmazonButton>
          </div>
        </div>
      </header>

      <Section tone="card">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:col-span-7">
            <blockquote className="font-display text-display-m font-bold leading-snug text-ink" style={{ fontStretch: "92%" }}>
              « {main.text} »
            </blockquote>
            <figcaption className="mt-5 text-muted">
              {main.role}, {main.source.toLowerCase()} · {main.dateLabel}
            </figcaption>
          </figure>
          <div className="lg:col-span-4 lg:col-start-9">
            <img
              src={main.image}
              alt="Capture d’écran du commentaire d’un parent dans un groupe Facebook d’échange scolaire"
              width={720}
              height={1280}
              loading="lazy"
              className="mx-auto max-h-[460px] w-auto rounded-[8px] border border-rule object-cover object-top shadow-lift"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead title="D’autres retours." />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((r) => (
            <li key={r.id} className="flex flex-col rounded-2xl border border-rule bg-card p-6">
              <p className="flex-1 text-[18px] leading-relaxed text-ink">« {r.text} »</p>
              <p className="mt-5 border-t border-rule pt-3 text-sm text-muted">
                {r.role} · {r.source} · {r.dateLabel}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Ces commentaires sont des retours de lecteurs, pas des notes Amazon. Les avis vérifiés se trouvent sur la fiche du livre.
        </p>
      </Section>

      <Section tone="mist">
        <SectionHead title="Le livre vu sur Instagram." lead="Les stories de familles et d’étudiants qui en parlent." />
        <ul
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          aria-label="Stories Instagram"
          tabIndex={0}
        >
          {stories.map((src, i) => (
            <li key={src} className="w-[200px] shrink-0 snap-start sm:w-[230px]">
              <img src={src} alt={`Story Instagram ${i + 1} parlant du livre`} loading="lazy" width={230} height={409} className="aspect-[9/16] w-full rounded-[14px] border border-rule object-cover shadow-lift" />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="card">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-m">Vous avez lu le guide ?</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink/85">
            Votre avis honnête, positif ou non, aide les prochaines familles à choisir. Il se dépose directement sur la fiche Amazon.
          </p>
          <a href={REVIEW_URL} target="_blank" rel="noopener" className="btn-ghost mt-6">
            Donner mon avis sur Amazon
          </a>
        </div>
      </Section>

      <FinalCta placement="avis-final" title={`Lire le guide de ${book.author}`} />
    </>
  );
}
