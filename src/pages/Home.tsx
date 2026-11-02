import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { book } from "../data/book";
import { guides } from "../data/guides";
import { AmazonButton } from "../components/Amazon";
import { Cover } from "../components/Cover";
import { Faq, Section, SectionHead, Tldr } from "../components/Ui";
import { FinalCta, Toc, WorryTable } from "../components/Blocks";
import type { FaqItem } from "../lib/schema";

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
    chapters: "Chapitres 1 à 4",
    text: "Choisir entre J-1 et F-1, comprendre le rôle de l’organisme, monter le dossier, gérer assurances, budget, santé, valise et premiers mots d’anglais.",
    to: "/j1-ou-f1/",
    toLabel: "J-1 ou F-1 : le comparatif",
  },
  {
    label: "Pendant",
    chapters: "Chapitres 5 à 8",
    text: "Vivre en famille d’accueil, comprendre la High School américaine, se faire des amis, traverser le mal du pays et garder le lien à distance.",
    to: "/famille-d-accueil/",
    toLabel: "La vie en famille d’accueil",
  },
  {
    label: "Après",
    chapters: "Chapitre 9",
    text: "Gérer le choc du retour, retrouver sa place à la maison, reprendre le lycée en France et valoriser l’année.",
    to: "/retour-en-france/",
    toLabel: "Préparer le retour",
  },
];

export default function Home() {
  const parents = guides.find((g) => g.slug === "parents")!;
  const personas = ["parents", "lyceens", "sport-etudes"].map((s) => guides.find((g) => g.slug === s)!);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-rule">
        <div className="wrap grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <div className="lg:col-span-7">
            <h1 className="text-display-xl">
              Une année de High School aux <span className="whitespace-nowrap">États-Unis</span> : partez préparés, pas à l’aveugle.
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
              Le guide pratique des lycéens et de leurs parents : visa J-1 ou F-1, famille d’accueil, budget, vie au lycée,
              retour en France. Écrit par une maman dont les deux fils sont partis.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AmazonButton placement="hero" className="!py-3.5 !text-base">
                Acheter sur Amazon
              </AmazonButton>
              <Link to="/extrait/" className="btn-ghost !py-3.5 !text-base">
                Lire un extrait gratuit
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">
              Broché et Kindle · {book.pages} pages · Paiement et livraison par Amazon.fr
            </p>
          </div>

          <div className="relative mx-auto w-[min(72vw,340px)] lg:col-span-5 lg:w-full lg:max-w-[400px] lg:justify-self-end">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-[10px] bg-mist" />
            <Cover priority className="relative" />
          </div>
        </div>
      </section>

      {/* « JE SUIS… » */}
      <nav aria-label="Choisir son profil" className="border-b border-rule bg-card">
        <ul className="wrap grid divide-y divide-rule md:grid-cols-3 md:divide-x md:divide-y-0">
          {personas.map((g) => (
            <li key={g.slug}>
              <Link to={g.path} className="group flex h-full items-start justify-between gap-4 py-6 md:px-6 md:first:pl-0 md:last:pr-0">
                <span>
                  <span className="block font-display text-2xl font-extrabold text-ink group-hover:text-locker" style={{ fontStretch: "82%" }}>
                    {g.slug === "parents" ? "Je suis parent" : g.slug === "lyceens" ? "Je suis lycéen" : "Je suis sportif"}
                  </span>
                  <span className="mt-1 block max-w-xs text-[15px] leading-snug text-muted">{g.forWho}</span>
                </span>
                <ArrowRight className="mt-1.5 shrink-0 text-locker transition-transform group-hover:translate-x-1" size={22} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* L'ESSENTIEL */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              title="Ce que les brochures ne racontent pas."
              lead="Les moments plus délicats, les organismes les dévoilent rarement. Les parents et les jeunes les découvrent une fois sur place. Ce guide en parle sans filtre, et avec des solutions."
            />
          </div>
          <div className="lg:col-span-7">
            <Tldr
              items={[
                "J-1 ou F-1, ce n’est pas qu’un visa : c’est un budget, un type de famille, un degré de liberté. À comprendre avant de choisir un organisme.",
                "En J-1, le jeune ne choisit ni son État ni son école. En F-1, souvent oui, mais le budget est bien plus élevé.",
                "Une famille d’accueil se construit : communication, attentes dites, patience. Et le mal du pays existe, même chez les motivés.",
                "Le retour est le grand oublié. Il se prépare dès le départ.",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* PROBLÈME -> RÉPONSE */}
      <Section tone="mist">
        <WorryTable
          title="Les questions que se posent les familles, et où le livre y répond"
          worries={parents.worries.slice(0, 6)}
        />
        <p className="mt-6 text-[15px] text-muted">
          Les numéros de chapitre et de page renvoient au sommaire réel du livre.{" "}
          <Link to="/livre/" className="link">Voir le sommaire détaillé</Link>
        </p>
      </Section>

      {/* AVANT / PENDANT / APRÈS */}
      <Section>
        <SectionHead title="Avant, pendant, après : toute l’année est couverte." />
        <ol className="mt-12 divide-y divide-rule border-y border-rule">
          {phases.map((p) => (
            <li key={p.label} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <h3 className="font-display text-4xl font-extrabold text-ink sm:text-5xl" style={{ fontStretch: "78%" }}>
                  {p.label}
                </h3>
                <p className="mt-1 text-sm text-muted">{p.chapters}</p>
              </div>
              <p className="text-lg leading-relaxed text-ink/90 md:col-span-6">{p.text}</p>
              <div className="md:col-span-3 md:text-right">
                <Link to={p.to} className="link">{p.toLabel}</Link>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* SOMMAIRE + EXTRAIT */}
      <Section tone="card">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead title="10 chapitres, 145 pages, un seul objectif : être prêt." />
            <div className="mt-8">
              <Toc />
            </div>
            <Link to="/livre/" className="link mt-6 inline-block">Voir le détail de chaque chapitre</Link>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-rule bg-paper p-6 sm:p-8">
              <h3 className="text-display-m">Feuilletez avant d’acheter</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink/85">
                Préface, sommaire et premières pages en lecture libre, sans compte ni e-mail.
              </p>
              <div className="mt-6 flex gap-3" aria-hidden="true">
                {["/flip/page-01.jpg", "/flip/page-02.jpg"].map((src) => (
                  <img key={src} src={src} alt="" loading="lazy" width={131} height={200} className="h-auto w-1/2 rounded-[4px] border border-rule shadow-lift" />
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
      <Section tone="mist">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <img
              src="/author.jpg"
              alt={`${book.author}, autrice du guide`}
              width={900}
              height={854}
              loading="lazy"
              className="aspect-[4/5] w-full max-w-sm rounded-[8px] object-cover object-[40%_30%] shadow-lift"
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-display-l">Écrit par une maman qui a vécu l’expérience sous plusieurs formes.</h2>
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
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:col-span-7">
            <blockquote className="font-display text-display-m font-bold leading-snug text-ink" style={{ fontStretch: "92%" }}>
              « Ce guide manquait sincèrement. J’aurais tellement aimé en avoir un avant le départ de ma fille. Un support
              concret, basé sur du vécu réel… c’est précieux. »
            </blockquote>
            <figcaption className="mt-5 text-muted">Parent, commentaire dans un groupe d’échange · Février 2026</figcaption>
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
              className="mx-auto max-h-[420px] w-auto rounded-[8px] border border-rule object-cover object-top shadow-lift"
            />
            <p className="mt-2 text-center text-sm text-muted">Capture d’écran d’un commentaire réel</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="card">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title="Questions fréquentes" lead="Les réponses courtes. Le livre détaille le reste." />
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
