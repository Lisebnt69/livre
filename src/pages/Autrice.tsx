import { book } from "../data/book";
import { Breadcrumb, Section } from "../components/Ui";
import { FinalCta } from "../components/Blocks";

export default function Autrice({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <>
      <header className="border-b border-rule">
        <div className="wrap py-10 sm:py-14">
          <Breadcrumb items={crumbs} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h1 className="text-display-xl !text-[clamp(2.2rem,5vw,4.2rem)]">
                {book.author}, maman et autrice du guide.
              </h1>
              <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
                « Je ne suis ni une agence, ni un organisme. Je suis une maman. J’ai vécu les moments de joie, les doutes, les
                difficultés et les réussites. »
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <img
                src="/author.jpg"
                alt={`${book.author}, autrice de ${book.title}`}
                width={900}
                height={854}
                className="aspect-[4/5] w-full max-w-sm rounded-[8px] object-cover object-[40%_30%] shadow-lift"
              />
            </div>
          </div>
        </div>
      </header>

      <Section tone="card">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8 lg:col-start-3">
            <section>
              <h2 className="text-display-m">Une expérience vécue sous plusieurs formes</h2>
              <p className="mt-4 text-[18px] leading-[1.7] text-ink/90">
                Un fils en famille d’accueil (visa J-1), un autre en internat sport-études (visa F-1), des années d’échanges
                avec des centaines de parents concernés, et une partie de l’année vécue aux États-Unis : ce guide s’appuie sur
                du vécu réel, pas sur une brochure.
              </p>
            </section>
            <section>
              <h2 className="text-display-m">Pourquoi ce livre</h2>
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
              <h2 className="text-display-m">Ce que vous ne trouverez pas ici</h2>
              <p className="mt-4 text-[18px] leading-[1.7] text-ink/90">
                Pas de promesse commerciale d’organisme, pas de séjour à vendre. Un guide qui dit ce qui est bien, ce qui est
                difficile, et ce qu’on peut faire, rien de plus.
              </p>
              <p className="mt-4 text-[18px] leading-[1.7]">
                <a href={book.instagram} target="_blank" rel="noopener noreferrer" className="link">Suivre le guide sur Instagram</a>
              </p>
            </section>
          </div>
        </div>
      </Section>
      <FinalCta placement="autrice-final" />
    </>
  );
}
