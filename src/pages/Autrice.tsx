import { Breadcrumb, Section } from "../components/Ui";
import { FinalCta } from "../components/Blocks";
import { SocialLinks } from "../components/Social";
import { Rich } from "../lib/rich";
import { StripesBand } from "../components/Us";

export default function Autrice({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <>
      <header className="pt-5 sm:pt-6">
        <div className="wrap"><Breadcrumb items={crumbs} /></div>
        <div className="wrap mt-4">
         <div className="relative overflow-hidden rounded-4xl bg-rose px-5 pb-16 pt-10 sm:rounded-5xl sm:px-10 sm:pb-20 sm:pt-14 lg:px-16 lg:pb-20 lg:pt-16">
          <StripesBand className="absolute inset-x-0 bottom-0 !h-3" />
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h1 className="text-display-xl !text-[clamp(2.2rem,4.8vw,4rem)]">
                <Rich text={`Une **maman** derrière le guide.`} />
              </h1>
              <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
                « Je ne suis ni une agence, ni un organisme. <strong className="font-bold text-locker">Je suis une maman.</strong> J’ai vécu les moments de joie, les doutes, les
                difficultés et les réussites. »
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <img
                src="/illustrations/depart.svg"
                alt=""
                width={640}
                height={800}
                className="aspect-[4/5] w-full max-w-sm rounded-4xl object-cover shadow-lift"
              />
            </div>
          </div>
         </div>
        </div>
      </header>

      <Section tone="card" className="mt-3">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8 lg:col-start-3">
            <section>
              <h2 className="text-display-m">Une expérience <span className="text-locker">vécue sous plusieurs formes</span></h2>
              <p className="mt-4 text-[18px] leading-[1.7] text-ink/90">
                Un fils en famille d’accueil (visa J-1), un autre en internat sport-études (visa F-1), des années d’échanges
                avec des centaines de parents concernés, et une partie de l’année vécue aux États-Unis : ce guide s’appuie sur
                du vécu réel, pas sur une brochure.
              </p>
              <figure className="mt-8">
                <img
                  src="/illustrations/deux-chemins.svg"
                  alt="Deux chemins : une maison de famille d’accueil d’un côté, un internat avec son terrain de sport de l’autre"
                  width={1200}
                  height={520}
                  loading="lazy"
                  className="w-full rounded-4xl shadow-lift"
                />
                <figcaption className="mt-3 flex justify-between gap-4 text-sm text-muted">
                  <span><strong className="text-ink">Visa J-1</strong> · en famille d’accueil</span>
                  <span className="text-right"><strong className="text-ink">Visa F-1</strong> · en internat sport-études</span>
                </figcaption>
              </figure>
            </section>
            <section>
              <h2 className="text-display-m">Pourquoi <span className="text-locker">ce livre</span></h2>
              <div className="mt-4 space-y-4 text-[18px] leading-[1.7] text-ink/90">
                <p>
                  Parce qu’il n’existait aucun guide pour accompagner à la fois les jeunes de 14 à 18 ans et leurs parents dans
                  le cadre d’une année de scolarité aux États-Unis. Pourtant, leurs interrogations, leurs défis comme leurs
                  moments inoubliables se ressemblent souvent.
                </p>
                <p>
                  J’ai voulu répondre à ce besoin avec un guide concret qui aide les familles à aborder cette aventure avec
                  confiance. Comprendre en amont ce que l’on va vivre permet de mieux se préparer, de prendre du recul et de
                  profiter pleinement de cette expérience unique, que ce soit pour le jeune qui part ou pour ses parents qui
                  l’accompagnent à distance.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-display-m">Ce que vous <span className="text-locker">ne trouverez pas</span> ici</h2>
              <p className="mt-4 text-[18px] leading-[1.7] text-ink/90">
                Pas de promesse commerciale d’organisme, pas de séjour à vendre. Un guide qui dit ce qui est bien, ce qui est
                difficile, et ce qu’on peut faire, rien de plus.
              </p>
              <p className="mt-6 text-[18px] font-semibold text-ink">Suivre le guide</p>
              <SocialLinks placement="autrice" className="mt-3" />
            </section>
          </div>
        </div>
      </Section>
      <FinalCta placement="autrice-final" />
    </>
  );
}
