export type Review = {
  source: "Proche" | "Amazon";
  name: string;
  role: "Parent" | "Étudiant" | "Famille";
  stars: 4 | 5;
  text: string;
};

export const reviews: Review[] = [
  // Proches (preuve sociale humaine)
  { source: "Proche", name: "Claire", role: "Parent", stars: 5, text: "J’aurais aimé lire ça avant le départ. On se sent guidés, pas jugés." },
  { source: "Proche", name: "Nicolas", role: "Parent", stars: 5, text: "Clair, concret, zéro blabla. On sait quoi faire et quand." },
  { source: "Proche", name: "Emma", role: "Étudiant", stars: 5, text: "Ça m’a aidé à comprendre l’école, la host family, et surtout les codes." },
  { source: "Proche", name: "Sophie", role: "Famille", stars: 4, text: "Très rassurant. Et honnête : ça parle aussi des difficultés." },

  // Amazon (sélection manuelle, pas de scraping)
  { source: "Amazon", name: "Camille", role: "Parent", stars: 5, text: "On a évité des erreurs bêtes. Le chapitre sur l’intégration est précieux." },
  { source: "Amazon", name: "Thomas", role: "Parent", stars: 5, text: "J-1 vs F-1 enfin expliqué simplement. Je recommande." },
  { source: "Amazon", name: "Léa", role: "Parent", stars: 5, text: "On sent le vécu. C’est exactement ce qu’il manquait." },
  { source: "Amazon", name: "Nina", role: "Étudiant", stars: 5, text: "Ça m’a donné des repères quand ça allait moins bien." },
  { source: "Amazon", name: "Mehdi", role: "Parent", stars: 5, text: "Le retour en France est rarement abordé. Ici oui. Gros plus." },
  { source: "Amazon", name: "Sarah", role: "Parent", stars: 4, text: "Très complet et rassurant. À lire dès le début des démarches." },
];