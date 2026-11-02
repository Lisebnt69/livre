import { book } from "../data/book";
import { abs, site } from "../data/site";

export type Crumb = { name: string; path: string };
export type FaqItem = { q: string; a: string };

export const personSchema = () => ({
  "@type": "Person",
  "@id": abs("/autrice/#stephanie"),
  name: book.author,
  url: abs("/autrice/"),
  image: abs("/author.jpg"),
  sameAs: [book.instagram, book.youtube, book.tiktok, book.facebook],
  jobTitle: "Autrice",
  description:
    "Maman de deux fils partis en échange scolaire aux États-Unis (visa J-1 et visa F-1), autrice du guide Réussir son année de High School aux États-Unis.",
});

export const bookSchema = () => ({
  "@type": "Book",
  "@id": abs("/livre/#book"),
  name: book.title,
  alternativeHeadline: book.subtitle,
  author: { "@id": abs("/autrice/#stephanie") },
  inLanguage: book.language,
  numberOfPages: book.pages,
  image: abs("/cover-800.jpg"),
  url: abs("/livre/"),
  description:
    "Guide pratique pour les lycéens et leurs parents : choisir entre visa J-1 et F-1, préparer le départ, vivre en famille d’accueil, réussir sa High School et préparer le retour.",
  audience: { "@type": "PeopleAudience", audienceType: "Parents et lycéens" },
  workExample: [
    { "@type": "Book", bookFormat: "https://schema.org/Paperback", inLanguage: "fr", url: book.paperbackUrl },
    { "@type": "Book", bookFormat: "https://schema.org/EBook", inLanguage: "fr", url: book.kindleUrl },
  ],
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": abs("/#website"),
  url: abs("/"),
  name: site.name,
  inLanguage: "fr-FR",
  publisher: { "@id": abs("/autrice/#stephanie") },
});

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

export const faqSchema = (items: FaqItem[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const webPageSchema = (opts: { path: string; name: string; description: string; about?: boolean; dateModified?: string }) => ({
  "@type": "WebPage",
  "@id": abs(opts.path) + "#page",
  url: abs(opts.path),
  name: opts.name,
  description: opts.description,
  inLanguage: "fr-FR",
  ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  isPartOf: { "@id": abs("/#website") },
  ...(opts.about ? { about: { "@id": abs("/livre/#book") } } : {}),
});
