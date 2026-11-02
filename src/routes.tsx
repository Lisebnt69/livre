import type { ReactElement } from "react";
import { guides } from "./data/guides";
import { book } from "./data/book";
import { abs, UPDATED_ISO } from "./data/site";
import type { PageMeta } from "./lib/seo";
import { plain } from "./lib/rich";
import {
  bookSchema,
  breadcrumbSchema,
  faqSchema,
  personSchema,
  webPageSchema,
  websiteSchema,
  type Crumb,
} from "./lib/schema";
import Home, { homeFaq } from "./pages/Home";
import Livre, { livreFaq } from "./pages/Livre";
import Extrait from "./pages/Extrait";
import Autrice from "./pages/Autrice";
import Avis from "./pages/Avis";
import GuidePage from "./pages/GuidePage";
import NotFound from "./pages/NotFound";
import { MentionsLegales, PolitiqueConfidentialite } from "./pages/Legal";

export type RouteDef = {
  path: string;
  meta: PageMeta;
  element: ReactElement;
  /** priorité sitemap */
  priority: number;
};

const home: Crumb = { name: "Accueil", path: "/" };

function sub(path: string, name: string): Crumb[] {
  return [home, { name, path }];
}

const bookAndPerson = [personSchema(), bookSchema()];

const livreCrumbs = sub("/livre/", "Le livre");
const extraitCrumbs = [...sub("/livre/", "Le livre"), { name: "Extrait gratuit", path: "/extrait/" }];
const autriceCrumbs = sub("/autrice/", "L’autrice");
const avisCrumbs = sub("/avis/", "Avis");

export const routes: RouteDef[] = [
  {
    path: "/",
    priority: 1,
    element: <Home />,
    meta: {
      path: "/",
      title: "Réussir son année de High School aux États-Unis | Guide complet",
      description:
        "Guide pratique des lycéens et de leurs parents : visa J-1 ou F-1, famille d’accueil, budget, vie au lycée, retour. Par Stéphanie Oyarsabal, maman de deux fils.",
      jsonLd: [
        websiteSchema(),
        ...bookAndPerson,
        webPageSchema({
          path: "/",
          name: "Réussir son année de High School aux États-Unis",
          description: "Le guide pratique pour les lycéens et leurs parents.",
          about: true,
        }),
        faqSchema(homeFaq),
      ],
    },
  },
  {
    path: "/livre/",
    priority: 0.9,
    element: <Livre crumbs={livreCrumbs} />,
    meta: {
      path: "/livre/",
      title: "Le livre : sommaire et détails du guide High School USA",
      description:
        "Réussir son année de High School aux États-Unis : 145 pages, 10 chapitres. Sommaire complet, pour qui, formats broché et Kindle sur Amazon.fr.",
      jsonLd: [
        ...bookAndPerson,
        webPageSchema({ path: "/livre/", name: book.title, description: book.subtitle, about: true }),
        breadcrumbSchema(livreCrumbs),
        faqSchema(livreFaq),
      ],
    },
  },
  {
    path: "/extrait/",
    priority: 0.7,
    element: <Extrait crumbs={extraitCrumbs} />,
    meta: {
      path: "/extrait/",
      title: "Extrait gratuit : lire les premières pages du guide USA",
      description:
        "Feuilletez gratuitement la couverture, le sommaire et les premières pages de « Réussir son année de High School aux États-Unis », sans compte ni e-mail.",
      jsonLd: [
        webPageSchema({ path: "/extrait/", name: "Extrait gratuit", description: "Premières pages du livre.", about: true }),
        breadcrumbSchema(extraitCrumbs),
      ],
    },
  },
  {
    path: "/autrice/",
    priority: 0.6,
    element: <Autrice crumbs={autriceCrumbs} />,
    meta: {
      path: "/autrice/",
      title: "Stéphanie Oyarsabal, autrice du guide High School USA",
      description:
        "Maman de deux étudiants d’échange (visa J-1 et visa F-1), Stéphanie Oyarsabal a écrit le guide qu’elle aurait voulu avoir avant le départ de ses fils.",
      image: "/author.jpg",
      jsonLd: [personSchema(), webPageSchema({ path: "/autrice/", name: "L’autrice", description: "Qui est Stéphanie Oyarsabal." }), breadcrumbSchema(autriceCrumbs)],
    },
  },
  {
    path: "/avis/",
    priority: 0.6,
    element: <Avis crumbs={avisCrumbs} />,
    meta: {
      path: "/avis/",
      title: "Avis des lecteurs : guide Réussir son année de High School USA",
      description:
        "Ce que disent les premiers parents et lecteurs du guide « Réussir son année de High School aux États-Unis » : retours réels, captures et stories.",
      jsonLd: [webPageSchema({ path: "/avis/", name: "Avis des lecteurs", description: "Retours de lecteurs.", about: true }), breadcrumbSchema(avisCrumbs)],
    },
  },
  ...guides.map<RouteDef>((g) => {
    const crumbs = sub(g.path, g.short);
    return {
      path: g.path,
      priority: 0.8,
      element: <GuidePage guide={g} crumbs={crumbs} />,
      meta: {
        path: g.path,
        title: g.title,
        description: g.description,
        jsonLd: [
          personSchema(),
          bookSchema(),
          webPageSchema({ path: g.path, name: plain(g.h1), description: g.description, about: true, dateModified: UPDATED_ISO }),
          breadcrumbSchema(crumbs),
          faqSchema(g.faq),
        ],
      },
    };
  }),
  {
    path: "/mentions-legales/",
    priority: 0.2,
    element: <MentionsLegales />,
    meta: { path: "/mentions-legales/", title: "Mentions légales | Guide High School USA", description: "Mentions légales du site du guide Réussir son année de High School aux États-Unis.", noindex: true },
  },
  {
    path: "/politique-confidentialite/",
    priority: 0.2,
    element: <PolitiqueConfidentialite />,
    meta: { path: "/politique-confidentialite/", title: "Politique de confidentialité | Guide High School USA", description: "Données collectées, cookies et mesure d’audience : la politique de confidentialité du site.", noindex: true },
  },
];

export const notFound: RouteDef = {
  path: "/404",
  priority: 0,
  element: <NotFound />,
  meta: {
    path: "/404",
    title: "Page introuvable | Guide High School USA",
    description: "Cette page n’existe pas. Retrouvez le guide Réussir son année de High School aux États-Unis.",
    noindex: true,
  },
};

export const normalize = (p: string) => {
  const clean = p.split("?")[0].split("#")[0] || "/";
  return clean.endsWith("/") ? clean : clean + "/";
};

export const findRoute = (pathname: string) => routes.find((r) => r.path === normalize(pathname)) ?? notFound;

export { abs };
