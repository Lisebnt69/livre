export type Review = {
  id: string;
  source: "Amazon" | "Groupe Facebook" | "Message privé";
  role: "Parent" | "Étudiant" | "Proche";
  text: string;
  dateLabel?: string;
  image?: string;
};

/** Retours réels. Pas de note chiffrée : ce sont des commentaires, pas des avis Amazon notés. */
export const reviews: Review[] = [
  {
    id: "fb-1",
    source: "Groupe Facebook",
    role: "Parent",
    text:
      "Ce guide manquait sincèrement. J’aurais tellement aimé en avoir un avant le départ de ma fille. Un support concret, basé sur du vécu réel, des conseils authentiques et l’expérience de parents déjà passés par là… c’est précieux.",
    dateLabel: "Février 2026",
    image: "/reviews/avis-parent.jpg",
  },
  {
    id: "fb-2",
    source: "Groupe Facebook",
    role: "Parent",
    text: "Bravo pour cette initiative. Je suis sûre que votre guide aidera de nombreuses familles. Un tel ouvrage manquait !",
    dateLabel: "Février 2026",
  },
  {
    id: "fb-3",
    source: "Groupe Facebook",
    role: "Parent",
    text:
      "Bravo pour ce livre : à part ce groupe, on se sent un peu seul quand on démarre cette aventure. Ce guide va aider les prochaines familles.",
    dateLabel: "Février 2026",
  },
  {
    id: "fb-4",
    source: "Groupe Facebook",
    role: "Parent",
    text: "Commandé par ma fille qui part cet été, elle est ravie !",
    dateLabel: "Février 2026",
  },
];

export const stories = [
  "/reviews/story-1.web.jpg",
  "/reviews/story-2.web.jpg",
  "/reviews/story-3.web.jpg",
  "/reviews/story-4.web.jpg",
  "/reviews/story-5.web.jpg",
  "/reviews/story-6.web.jpg",
  "/reviews/story-7.web.jpg",
];
