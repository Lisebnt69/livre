export const site = {
  baseUrl: "https://www.reussir-son-annee-de-high-school-aux-etats-unis.com",
  name: "Réussir son année de High School aux États-Unis",
  shortName: "High School USA",
  author: "Stéphanie Oyarsabal",
  ogImage: "/cover-800.jpg",
  locale: "fr_FR",
};

/** Date de dernière mise à jour éditoriale des guides (affichée sur les pages et dans le schema.org). */
export const UPDATED_ISO = "2026-11-02";
export const UPDATED_LABEL = "2 novembre 2026";

export const abs = (path: string) =>
  `${site.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
