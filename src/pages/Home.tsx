import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { book } from "../data/book";
import { guides } from "../data/guides";
import { AmazonButton } from "../components/Amazon";
import { Cover } from "../components/Cover";
import { Faq, Section, SectionHead, Tldr } from "../components/Ui";
import { FinalCta, Toc, WorryTable } from "../components/Blocks";
import type { FaqItem } from "../lib/schema";
import { Rich } from "../lib/rich";
import { StarRow, StripesBand, UsFlag } from "../components/Us";

export const homeFaq: FaqItem[] = [
  {
    q: "Quelle est la différence entre un visa J-1 et un visa F-1 ?",
    a: "Le J-1 est un programme d’échange supervisé par le Département d’État : famille d’accueil bénévole, lycée public sans frais de scolarité, mais ni l’État ni l’école ne se choisissent et le séjour dure dix mois maximum. Le F-1 correspond à une scolarité classique : école privée ou publique payante, choix de l’établissement souvent possible, plusieurs années possibles, internat ou famille rémunérée, et un budget bien plus élevé.",
  },
  {
    q: "Comment sont choisies les familles d’accueil ?",
    a: "Un coordinateur local, mandaté par l’organisme américain, rencontre chaque famille, visite la maison et vérifie que l’environnement est chaleureux et sécurisé. Les familles J-1 sont bénévoles et de profils variés. Le dossier du jeune (lettre, photos, résultats) sert à trouver une famille aux valeurs proches.",
  },
  {
    q: "L’assurance santé est-elle importante pour étudier aux États-Unis ?",
    a: "Oui. Les frais médicaux sont élevés : une simple visite aux urgences peut coûter plusieurs centaines de dollars. La plupart des programmes incluent une couverture de base, mais soins dentaires, sports à risque ou certaines franchises peuvent rester à votre charge. Une assurance complémentaire ou une option rapatriement est souvent recommandée.",
  },
  {
    q: "Quand faut-il commencer à se préparer ?",
    a: "Plusieurs mois à l’avance. Plus vous anticipez, plus vous gardez le contrôle sur les démarches. S’y prendre à la dernière minute, c’est ajouter du stress inutile.",
  },
  {
    q: "Le livre est-il utile si mon enfant part avec un organisme ?",
    a: "Oui. L’organisme gère le cadre, pas tous les détails du quotidien. Le guide vous aide à comprendre les règles, anticiper les situations classiques et savoir quoi faire si ça se complique.",
  },
  {
    q: "Où acheter le livre, et en quels formats ?",
    a: "Le livre est vendu sur Amazon.fr en version broché et en version Kindle. Le broché est idéal pour annoter et surligner ; le Kindle se lit sur téléphone, tablette ou liseuse. Prix, paiement et livraison sont gérés par Amazon.",
  },
];

const phases = [
  {
    label: "Avant",
    tone: "bg-butter",
    chapters: "Chapitres 1 à 4",
    text: "Choisir entre **J-1 et F-1**, comprendre le rôle de l’organisme, monter le dossier, gérer assurances, budget, santé, valise et premiers mots d’anglais.",
    to: "/j1-ou-f1/",
    toLabel: "J-1 ou F-1 : le comparatif",
  },
  {
    label: "Pendant",
    tone: "bg-mint",
    chapters: "Chapitres 5 à 8",
    text: "Vivre en **famille d’accueil**, comprendre la High School américaine, se faire des amis, traverser le **mal du pays** et garder le lien à distance.",
    to: "/famille-d-accueil/",
    toLabel: "La vie en famille d’accueil",
  },
  {
    label: "Après",
    tone: "bg-rose",
    chapters: "Chapitre 9",
    text: "Gérer le **choc du retour**, retrouver sa place à la maison, reprendre le lycée en France et valoriser l’année.",
    to: "/retour-en-france/",
    toLabel: "Préparer le retour",
  },
];

const usWords = [
  { term: "Locker", text: "Le casier de chaque élève, décor emblématique des High Schools américaines.", ref: "" },
  { term: "Dress code", text: "Ce qu’on peut porter, ou pas, à l’école. Mieux vaut le savoir avant de faire sa valise.", ref: "Chap. 7 · p.109" },
  { term: "Cafeteria", text: "Le déjeuner à l’américaine : où, comment et avec qui on mange.", ref: "Chap. 7 · p.108" },
  { term: "Team spirit", text: "L’esprit d’équipe et la fierté de son école, au cœur de la vie lycéenne.", ref: "Chap. 7 · p.110" },
  { term: "Drama", text: "Les histoires entre élèves : les connaître avant d’être mêlé à l’une d’elles.", ref: "Chap. 7 · p.112" },
  { term: "Prom & co", text: "Les grands moments de l’année, du football au bal de fin d’année.", ref: "Chap. 7 · p.114" },
];

const personaCards: Record<string, { label: string; tone: string }> = {
  parents: { label: "Je suis parent", tone: "bg-peach" },
  lyceens: { label: "Je suis lycéen", tone: "bg-mint" },
  "sport-etudes": { label: "Je suis sportif", tone: "bg-rose" },
};

export default function Home() {
  const parents = guides.find((g) => g.slug === "parents")!;
  const personas = ["parents", "lyceens", "sport-etudes"].map((s) => guides.find((g) => g.slug === s)!);

  return (
    <>
      {/* HERO : bloc pastel arrondi, boîte d'achat et preuve sociale à portée de clic */}
      <section className="pt-3 sm:pt-4">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-4xl bg-lav px-5 pb-16 pt-10 sm:rounded-5xl sm:px-10 sm:pb-20 sm:pt-14 lg:px-16 lg:pb-24 lg:pt-20">
            <StripesBand className="absolute inset-x-0 bottom-0 !h-3.5" />
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="text-display-xl">
                  Une année de High School aux <span className="whitespace-nowrap">États-Unis</span> : <Rich text="**partez préparés**" />, pas à l’aveugle.
                </h1>
                <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
                  Le guide pratique des <strong className="font-semibold">lycéens et de leurs parents</strong> : visa J-1 ou F-1, famille
                  d’accueil, budget, vie au lycée, retour en France. Écrit par une maman dont les deux fils sont partis.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <AmazonButton placement="hero" className="!py-4 !text-base">
                    Acheter sur Amazon
                  </AmazonButton>
                  <Link to="/extrait/" className="btn-ghost !py-4 !text-base">
                    Lire un extrait gratuit
                  </Link>
                </div>
                <p className="mt-4 text-sm text-ink/70">
                  Broché et Kindle · {book.pages} pages · Paiement et livraison par Amazon.fr
                </p>

                <figure className="mt-8 flex max-w-lg items-start gap-3 rounded-3xl bg-card p-4 shadow-lift">
                  <Quote size={22} className="mt-0.5 shrink-0 text-locker" aria-hidden="true" />
                  <div>
                    <blockquote className="text-[16px] leading-snug text-ink">
                      <strong className="font-bold text-locker">Ce guide manquait sincèrement.</strong> J’aurais tellement aimé en avoir
                      un avant le départ de ma fille.
                    </blockquote>
                    <figcaption className="mt-1 text-sm text-muted">Parent, groupe d’échange · Février 2026</figcaption>
                  </div>
                </figure>
              </div>

              <div className="relative mx-auto w-[min(70vw,330px)] lg:col-span-5 lg:w-full lg:max-w-[390px] lg:justify-self-end">
                <Cover priority className="relative !rounded-[10px]" />
                <span aria-hidden="true" className="absolute -left-3 top-[38%] flex -rotate-6 items-center gap-2 rounded-full bg-card py-2 pl-2.5 pr-4 text-sm font-bold text-ink shadow-lift sm:-left-10">
                  <UsFlag className="h-[18px] w-[34px] rounded-[3px] ring-1 ring-ink/10" />
                  High School USA
                </span>
                <span aria-hidden="true" className="absolute -right-2 top-[64%] rotate-3 rounded-full bg-butter px-4 py-2 text-sm font-bold text-ink shadow-lift sm:-right-8">
                  {book.pages} pages
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* « JE SUIS… » */}
      <Section>
        <SectionHead title="Le guide, **selon votre situation**." center />
        <nav aria-label="Choisir son profil" className="mt-10">
          <ul className="grid gap-4 md:grid-cols-3">
            {personas.map((g) => {
              const c = personaCards[g.slug];
              return (
                <li key={g.slug}>
                  <Link to={g.path} className={`group flex h-full min-h-[220px] flex-col justify-between rounded-4xl p-7 transition-transform hover:-translate-y-1 ${c.tone}`}>
                    <span>
                      <span className="block text-3xl font-bold leading-tight tracking-tight text-ink">{c.label}</span>
                      <span className="mt-2 block text-[16px] leading-snug text-ink/80">{g.forWho}</span>
                    </span>
                    <span className="mt-6 flex h-11 w-11 items-center justify-center self-end rounded-full bg-card text-locker">
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Section>

      {/* L'ESSENTIEL */}
      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHead
              title="Ce que les brochures **ne racontent pas**."
              lead="Les moments plus délicats, les organismes les dévoilent rarement. Les parents et les jeunes les découvrent une fois sur place. Ce guide en parle **sans filtre**, et avec des solutions."
            />
          </div>
          <div className="lg:col-span-7">
            <Tldr
              items={[
                "**J-1 ou F-1**, ce n’est pas qu’un visa : c’est un budget, un type de famille, un degré de liberté. À comprendre avant de choisir un organisme.",
                "En J-1, le jeune **ne choisit ni son État ni son école**. En F-1, souvent oui, mais le budget est bien plus élevé.",
                "Une famille d’accueil se construit : communication, attentes dites, patience. Et le **mal du pays** existe, même chez les motivés.",
                "**Le retour** est le grand oublié. Il se prépare dès le départ.",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* PROBLÈME -> RÉPONSE */}
      <Section className="!pt-0">
        <WorryTable title="Les questions que se posent les familles, et **où le livre y répond**" worries={parents.worries.slice(0, 6)} />
        <p className="mt-6 text-center text-[15px] text-muted">
          Les numéros de chapitre et de page renvoient au sommaire réel du livre.{" "}
          <Link to="/livre/" className="link">Voir le sommaire détaillé</Link>
        </p>
        <div className="mt-8 flex justify-center">
          <AmazonButton placement="home-worries">Lire les réponses dans le livre</AmazonButton>
        </div>
      </Section>

      {/* AVANT / PENDANT / APRÈS */}
      <Section className="!pt-0">
        <SectionHead title="Avant, pendant, après : **toute l’année est couverte**." center />
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {phases.map((p) => (
            <li key={p.label} className={`flex flex-col rounded-4xl p-7 sm:p-8 ${p.tone}`}>
              <h3 className="text-5xl font-bold tracking-tight text-ink">{p.label}</h3>
              <p className="mt-1 text-sm font-medium text-ink/70">{p.chapters}</p>
              <p className="mt-5 flex-1 text-[17px] leading-relaxed text-ink/90">
                <Rich text={p.text} />
              </p>
              <Link to={p.to} className="link mt-6 self-start">{p.toLabel}</Link>
            </li>
          ))}
        </ol>
      </Section>

      {/* L'AMÉRIQUE CÔTÉ LYCÉE */}
      <Section tone="ink" className="!mt-0">
        <div className="mx-auto max-w-3xl text-center">
          <StarRow className="mx-auto h-5 w-[118px] text-[#FF9AA0]" />
          <h2 className="mt-5 text-display-l !text-card">
            <Rich text="L’Amérique côté lycée : **le vocabulaire** et les codes" tone="dark" />
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-card/80">
            Casiers, football, bal de fin d’année : le lycée américain a ses mots et ses règles. Mieux vaut les connaître
            avant d’atterrir. Le chapitre 7 du guide les passe en revue.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {usWords.map((w, i) => (
            <li key={w.term} className={`flex flex-col rounded-4xl p-7 ${["bg-peach", "bg-mint", "bg-butter", "bg-rose", "bg-lav", "bg-peach"][i]}`}>
              <h3 className="text-3xl font-bold tracking-tight text-ink">{w.term}</h3>
              <p className="mt-2 flex-1 text-[16px] leading-snug text-ink/85">{w.text}</p>
              {w.ref && (
                <span className="mt-5 self-start rounded-full bg-card px-3 py-1 text-[13px] font-bold text-locker">{w.ref}</span>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* SOMMAIRE + EXTRAIT */}
      <Section tone="card" className="mt-3">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead title="10 chapitres, 145 pages, un seul objectif : **être prêt**." />
            <div className="mt-8">
              <Toc />
            </div>
            <Link to="/livre/" className="link mt-6 inline-block">Voir le détail de chaque chapitre</Link>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-4xl bg-lav p-6 sm:p-8">
              <h3 className="text-display-m">Feuilletez <span className="text-locker">avant d’acheter</span></h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink/85">
                Préface, sommaire et premières pages en lecture libre, sans compte ni e-mail.
              </p>
              <div className="mt-6 flex gap-3" aria-hidden="true">
                {["/flip/page-01.jpg", "/flip/page-02.jpg"].map((src) => (
                  <img key={src} src={src} alt="" loading="lazy" width={131} height={200} className="h-auto w-1/2 rounded-[6px] bg-card shadow-lift" />
                ))}
              </div>
              <Link to="/extrait/" className="btn-ink mt-6 w-full">
                Lire l’extrait gratuit
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* AUTRICE */}
      <Section tone="peach" className="mt-3">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <img
              src="/author.jpg"
              alt={`${book.author}, autrice du guide`}
              width={900}
              height={854}
              loading="lazy"
              className="aspect-[4/5] w-full max-w-sm rounded-4xl object-cover object-[40%_30%] shadow-lift"
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-display-l">
              Écrit par une maman qui <span className="text-locker">a vécu l’expérience</span> sous plusieurs formes.
            </h2>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/90">
              Un fils en famille d’accueil (visa J-1), un autre en internat sport-études (visa F-1), des années d’échanges
              avec des centaines de parents concernés, et une partie de l’année passée aux États-Unis. Ce livre est le guide
              concret que {book.author.split(" ")[0]} aurait aimé avoir avant le départ de ses fils.
            </p>
            <Link to="/autrice/" className="link mt-6 inline-block">Faire connaissance avec l’autrice</Link>
          </div>
        </div>
      </Section>

      {/* AVIS */}
      <Section tone="rose" className="mt-3">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:col-span-7">
            <blockquote className="text-display-m font-semibold leading-snug text-ink">
              « <span className="text-locker">Ce guide manquait sincèrement.</span> J’aurais tellement aimé en avoir un avant le
              départ de ma fille. Un support concret, basé sur du <span className="text-locker">vécu réel</span>… c’est précieux. »
            </blockquote>
            <figcaption className="mt-5 text-ink/70">Parent, commentaire dans un groupe d’échange · Février 2026</figcaption>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/avis/" className="btn-ghost">Lire les retours des familles</Link>
              <AmazonButton placement="home-avis" variant="ink">Voir sur Amazon</AmazonButton>
            </div>
          </figure>
          <div className="lg:col-span-4 lg:col-start-9">
            <img
              src="/reviews/avis-parent.jpg"
              alt="Capture d’écran du commentaire d’un parent dans un groupe Facebook d’échange scolaire"
              width={720}
              height={1280}
              loading="lazy"
              className="mx-auto max-h-[420px] w-auto rounded-3xl object-cover object-top shadow-lift"
            />
            <p className="mt-2 text-center text-sm text-ink/70">Capture d’écran d’un commentaire réel</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title="Questions **fréquentes**" lead="Les réponses courtes. Le livre détaille le reste." />
          </div>
          <div className="lg:col-span-8">
            <Faq items={homeFaq} />
          </div>
        </div>
      </Section>

      <FinalCta placement="home-final" />
    </>
  );
}
