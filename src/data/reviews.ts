export type ReviewKind = "screenshot" | "text";

export type ReviewItem = {
  id: string;
  kind: ReviewKind;
  source: "Amazon" | "Réseaux" | "Proche";
  rating?: 4 | 5;
  name?: string; // optionnel si tu veux anonymiser
  role?: "Parent" | "Étudiant" | "Famille";
  text?: string; // pour les avis texte
  image?: string; // pour screenshots (path public)
  dateLabel?: string; // ex: "Fév. 2026"
  highlight?: boolean; // pour l’avis hero
};

export const reviews: ReviewItem[] = [
  

  // Avis texte (SEO + lisible)
  {
    id: "text-1",
    kind: "text",
    source: "Réseaux",
    rating: 5,
    role: "Parent",
    name: "Parent (témoignage)",
    text:
      "Ce guide manquait sincèrement. J’aurais tellement aimé en avoir un avant le départ de ma fille. Un support concret, basé sur du vécu réel, des conseils authentiques et l’expérience de parents déjà passés par là… c’est précieux.",
    dateLabel: "Fév. 2026",
  },
  {
  id: "text-parent-short-1",
  kind: "text",
  source: "Réseaux",
  rating: 5,
  role: "Parent",
  name: "Parent (groupe d’échange)",
  text: "Bravo pour cette initiative 👏 Je suis sûre que votre guide aidera de nombreuses familles. Un tel ouvrage manquait !",
  dateLabel: "Fév. 2026",
},
{
  id: "text-parent-short-2",
  kind: "text",
  source: "Réseaux",
  rating: 5,
  role: "Parent",
  name: "Parent (groupe d’échange)",
  text: "Bravo pour ce livre : à part ce groupe, on se sent un peu seul quand on démarre cette aventure. Ce guide va aider les prochaines familles.",
  dateLabel: "Fév. 2026",
},
{
  id: "amazon-1",
  kind: "text",
  source: "Amazon",
  rating: 5,
  role: "Étudiant",
  name: "Anonyme",
  dateLabel: "Fév. 2026",
},

// Story Insta
{
  id: "insta-story-1",
  kind: "screenshot",
  source: "Réseaux",
  image: "/reviews/story-1.png",
  dateLabel: "Story Instagram",
},


];
