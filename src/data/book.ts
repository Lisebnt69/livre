export type Chapter = {
  n: number;
  title: string;
  page: number;
  items: string[];
};

export const book = {
  author: "Stéphanie Oyarsabal",
  title: "Réussir son année de High School aux États-Unis",
  subtitle:
    "Le guide complet pour accompagner les lycéens et leurs parents avant, pendant et après une année scolaire aux États-Unis",
  pages: 145,
  language: "fr",
  // Broché et Kindle : deux fiches Amazon.fr distinctes (liens partenaires)
  paperbackUrl: "https://www.amazon.fr/dp/B0GN4WDVWC?tag=guideusa-21",
  kindleUrl: "https://www.amazon.fr/dp/B0GNHL49Q8?tag=guideusa-21",
  // alias historique
  amazonUrl: "https://www.amazon.fr/dp/B0GN4WDVWC?tag=guideusa-21",
  formats: ["Broché", "Kindle"],
  tagline: "Le guide que j’aurais voulu avoir avant le départ de mes enfants.",
  instagram: "https://www.instagram.com/highschoolauxusa/",
  youtube: "https://www.youtube.com/@HighSchoolauxUSA",
  tiktok: "https://www.tiktok.com/@high_school_aux_usa",
  facebook: "https://www.facebook.com/profile.php?id=61590448146259",
  email: "livrestephanieoyarsabal@gmail.com",
};

// Sommaire réel du livre (pages 3 à 5 de l'extrait)
export const chapters: Chapter[] = [
  {
    n: 1,
    title: "Choisir le type de séjour",
    page: 13,
    items: [
      "Types de séjours",
      "Différences entre visa J-1 et F-1",
      "Règles et restrictions pour les visas J-1 et F-1",
      "Le rôle de l’organisme et du sponsor",
      "Correspondants régionaux et locaux",
      "Le choix de l’organisme",
      "Le dossier de placement",
      "Test d’anglais obligatoire",
      "Assurances et garanties",
      "Contrat d’inscription et frais",
      "Le coût financier : séjours « en famille » (J-1 vs F-1)",
      "Est-ce que tous les jeunes auront une famille d’accueil ?",
      "Les red flags",
    ],
  },
  {
    n: 2,
    title: "Le visa F-1 en détail",
    page: 36,
    items: [
      "Comprendre le visa F-1 et ses particularités",
      "Pourquoi choisir l’internat américain ?",
      "Le profil type du jeune en visa F-1",
      "La procédure d’admission pas à pas",
      "Les aspects financiers",
      "Obtenir une bourse sportive en High School américaine",
      "La gestion administrative sans organisme",
      "Assurances, encadrement et sécurité",
      "La vie sur le campus américain",
    ],
  },
  {
    n: 3,
    title: "Les démarches administratives",
    page: 50,
    items: [
      "Les visas J-1 : formulaires et processus",
      "Les visas F-1 : programme académique privé et/ou internat",
      "En cas de refus de visa",
      "Cas particuliers",
      "Retour anticipé et situations d’urgence",
    ],
  },
  {
    n: 4,
    title: "Préparer le départ",
    page: 59,
    items: [
      "Se préparer à parler anglais",
      "Créer un blog ou un carnet de bord",
      "Les vaccins et dossiers de santé",
      "Médicaments et santé",
      "Carte bancaire",
      "Numéro de téléphone américain",
      "Articles pratiques à emporter",
      "Argent de poche et budget global",
      "Gérer les valises",
      "Cadeaux pour la famille d’accueil",
      "Voyage vers les États-Unis",
    ],
  },
  {
    n: 5,
    title: "La vie en famille d’accueil",
    page: 67,
    items: [
      "Les différents types de familles",
      "Le double placement",
      "Ville ou campagne : deux visages de l’Amérique",
      "La vraie différence culturelle : ce qu’on croit savoir des Américains",
      "Organisation quotidienne",
      "Communication et attentes",
      "Comment parler, réagir et s’excuser à l’américaine",
      "Quand le lien prend du temps",
      "Changer de famille",
      "Créer un lien durable",
      "Devenir famille d’accueil à son tour",
    ],
  },
  {
    n: 6,
    title: "La High School et son environnement",
    page: 90,
    items: [
      "La sécurité dans les écoles américaines",
      "Le système scolaire américain",
      "Niveau scolaire comparé à l’Europe",
      "Les notes et les crédits",
      "Les examens et devoirs",
      "Le choix des cours",
      "Emploi du temps type",
      "Cumuler un échange scolaire et un Dual Diploma",
    ],
  },
  {
    n: 7,
    title: "La vie lycéenne américaine",
    page: 105,
    items: [
      "S’intégrer et se faire des amis",
      "Les activités extrascolaires",
      "Cafétéria et repas",
      "Le dress code",
      "L’esprit d’équipe et la fierté scolaire",
      "Les dramas",
      "Les grands moments de la vie lycéenne américaine",
      "Les relations durables",
    ],
  },
  {
    n: 8,
    title: "Entre deux mondes : garder le lien avec sa famille",
    page: 120,
    items: [
      "Le mal du pays / homesickness",
      "La fréquence des contacts",
      "Conseils aux parents pour apprivoiser l’absence",
      "La venue des parents : une bonne idée ?",
    ],
  },
  {
    n: 9,
    title: "Le retour au pays",
    page: 126,
    items: [
      "Le choc du retour",
      "Pourquoi le sentiment d’un entre-deux mondes",
      "Retrouver sa place à la maison",
      "Valoriser l’expérience académiquement et professionnellement",
      "Le retour dans le système scolaire",
      "Rester impliqué, prolonger l’expérience",
      "Le rôle des parents lors du retour",
      "Une expérience qui marque à vie",
    ],
  },
  { n: 10, title: "Ressources utiles", page: 139, items: [] },
];
