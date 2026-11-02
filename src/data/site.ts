export const site = {
  baseUrl: "https://www.reussir-son-annee-de-high-school-aux-etats-unis.com",
  name: "Réussir son année de High School aux États-Unis",
  shortName: "High School USA",
  author: "Stéphanie Oyarsabal",
  ogImage: "/cover-800.jpg",
  locale: "fr_FR",
};

export const abs = (path: string) =>
  `${site.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
