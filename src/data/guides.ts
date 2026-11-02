import type { FaqItem } from "../lib/schema";

export type Worry = { worry: string; answer: string; chapter: number; label: string; page: number };
export type GuideSection = { id: string; h2: string; body: string[]; list?: string[] };

export type Guide = {
  slug: string;
  path: string;
  /** Intitulé court (cartes, maillage) */
  short: string;
  /** Pour qui / quel besoin, une ligne */
  forWho: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  tldr: string[];
  worriesTitle: string;
  worries: Worry[];
  sections: GuideSection[];
  faq: FaqItem[];
  related: string[];
  ctaTitle: string;
  ctaText: string;
  quote?: { text: string; who: string };
  /** true : page écrite en tutoiement (lycéens) */
  tu?: boolean;
};

export const guides: Guide[] = [
  /* ------------------------------------------------------------------ PARENTS */
  {
    slug: "parents",
    path: "/parents/",
    short: "Parents",
    forWho: "Votre enfant part, ou y pense : visa, organisme, famille d’accueil, budget, distance.",
    title: "Envoyer son enfant en High School aux USA : guide parents",
    description:
      "Visa J-1 ou F-1, organisme, famille d’accueil, assurance, budget, distance : tout ce que les parents doivent savoir avant l’année de High School de leur enfant aux USA.",
    h1: "Votre enfant part en High School aux États-Unis : ce que les parents doivent savoir",
    lead:
      "Visa, organisme, famille d’accueil, budget, assurance, distance… La liste des questions est longue et personne ne vous donne le tableau complet. Ce guide a été écrit par une maman qui est passée par là, deux fois.",
    tldr: [
      "Avant de choisir un organisme, il faut choisir un type de séjour : visa J-1 (famille d’accueil bénévole, lycée public) ou visa F-1 (école privée ou publique payante, internat ou famille rémunérée). Le budget et la liberté de choix n’ont rien à voir.",
      "En J-1, votre enfant ne choisit ni l’État ni l’école. Mieux vaut le savoir avant de signer.",
      "Le plus dur pour les parents n’est souvent pas le dossier : c’est la distance. Le mal du pays peut toucher même les jeunes les plus motivés, et il se prépare.",
      "Le retour est le grand oublié : un jeune qui rentre n’est plus tout à fait le même, et la famille non plus.",
    ],
    worriesTitle: "Ce qui inquiète le plus les parents, et où trouver la réponse",
    worries: [
      { worry: "Je ne sais pas par où commencer.", answer: "Par le type de séjour : J-1 ou F-1. Tout le reste (coût, hébergement, liberté de choix) en découle.", chapter: 1, label: "Différences entre visa J-1 et F-1", page: 17 },
      { worry: "Comment savoir si un organisme est sérieux ?", answer: "Son rôle, celui du sponsor, le contrat d’inscription et les red flags à repérer avant de payer.", chapter: 1, label: "Le choix de l’organisme, les red flags", page: 21 },
      { worry: "Combien ça va coûter, vraiment ?", answer: "Le coût d’un séjour en famille (J-1 vs F-1), l’argent de poche et le budget global.", chapter: 1, label: "Le coût financier", page: 29 },
      { worry: "Et si mon enfant n’est pas bien accueilli ?", answer: "Les types de familles, la communication au quotidien, et que faire si le lien ne prend pas.", chapter: 5, label: "La vie en famille d’accueil", page: 67 },
      { worry: "Et en cas de problème : santé, visa, urgence ?", answer: "Assurances et garanties, refus de visa, retour anticipé et situations d’urgence.", chapter: 3, label: "Retour anticipé et situations d’urgence", page: 57 },
      { worry: "Comment rester présent sans étouffer ?", answer: "Fréquence des contacts, conseils pour apprivoiser l’absence, la question de la visite des parents.", chapter: 8, label: "Conseils aux parents", page: 122 },
      { worry: "Et quand il reviendra ?", answer: "Le choc du retour, la place à retrouver à la maison, le retour dans le système scolaire français.", chapter: 9, label: "Le rôle des parents lors du retour", page: 133 },
    ],
    sections: [
      {
        id: "par-ou-commencer",
        h2: "Par où commencer : J-1 ou F-1 ?",
        body: [
          "C’est la première vraie décision, et elle conditionne toutes les autres. Le visa J-1 est un programme d’échange : le jeune est accueilli par une famille bénévole et suit les cours dans un lycée public, sans frais de scolarité. En contrepartie, il ne choisit ni l’État ni l’établissement, et le séjour est limité à dix mois.",
          "Le visa F-1 correspond à une scolarité plus classique : école privée ou publique payante, choix de l’établissement, programme sportif ou artistique possible, hébergement en internat ou en famille rémunérée. Le budget est nettement plus élevé.",
        ],
      },
      {
        id: "organisme",
        h2: "Choisir un organisme sans se faire piéger",
        body: [
          "L’organisme est votre interlocuteur avant, pendant et après le séjour. Avant de signer, quelques questions simples évitent de mauvaises surprises :",
        ],
        list: [
          "Qu’est-ce qui est inclus dans l’assurance, et qu’est-ce qui ne l’est pas ?",
          "Qui est le correspondant local de mon enfant, et comment le joindre en cas de souci ?",
          "Que se passe-t-il si le placement dans la famille ne fonctionne pas ?",
          "Quels frais sont déjà dans le contrat, lesquels viendront en plus ?",
        ],
      },
      {
        id: "famille",
        h2: "La famille d’accueil : ce qui se passe vraiment",
        body: [
          "Les familles J-1 sont bénévoles et de profils très variés : couples avec enfants, parents seuls, retraités, anciens hôtes. Le séjour réussit ou non sur la relation humaine : communication ouverte, attentes dites à voix haute, adaptation de part et d’autre. Le guide y consacre un chapitre entier, jusqu’à la question que beaucoup de parents n’osent pas poser : que faire si ça ne marche pas ?",
        ],
      },
      {
        id: "distance",
        h2: "Rester présent à distance",
        body: [
          "Entre le mal du pays et le décalage horaire, trouver le bon rythme de contact est un vrai sujet. Trop d’appels peuvent freiner l’intégration, pas assez peuvent isoler. Le chapitre « Entre deux mondes » aide les parents à apprivoiser l’absence, et à décider s’ils doivent venir sur place.",
        ],
      },
      {
        id: "retour",
        h2: "Préparer le retour dès le départ",
        body: [
          "Le retour est souvent plus compliqué que prévu : retrouver sa place à la maison, reprendre le rythme du lycée français, expliquer une année qu’on a du mal à raconter. Mieux vaut y penser avant de partir.",
        ],
      },
    ],
    faq: [
      {
        q: "Quand faut-il commencer à préparer une année de High School aux USA ?",
        a: "Le plus tôt possible : plusieurs mois à l’avance. Plus vous anticipez, plus vous gardez la main sur les démarches (choix du séjour, de l’organisme, dossier, assurance). S’y prendre au dernier moment ajoute du stress et réduit les options.",
      },
      {
        q: "L’assurance santé est-elle vraiment importante ?",
        a: "Oui. Aux États-Unis, les frais médicaux sont élevés : une simple visite aux urgences peut coûter plusieurs centaines de dollars. La plupart des programmes incluent une couverture de base (hospitalisation, urgences, responsabilité civile), mais certains postes comme les soins dentaires, les sports à risque ou certaines franchises peuvent rester à votre charge. Une assurance complémentaire ou une option rapatriement est souvent recommandée pour les séjours longs.",
      },
      {
        q: "Le guide est-il utile si mon enfant part avec un organisme ?",
        a: "Oui. L’organisme gère le cadre, mais pas tous les détails du quotidien. Le guide vous aide à comprendre les règles, anticiper les situations classiques et savoir quoi faire si ça se complique.",
      },
      {
        q: "Est-ce un livre pour les parents ou pour les lycéens ?",
        a: "Pour les deux. Les parents y trouvent un plan clair et rassurant, les lycéens des repères concrets sur la vie sur place. Si le jeune ne le lit pas, les parents peuvent l’utiliser pour le guider et le soutenir.",
      },
    ],
    related: ["j1-ou-f1", "famille-d-accueil", "mal-du-pays", "retour-en-france"],
    ctaTitle: "Le guide que j’aurais voulu avoir avant leur départ",
    ctaText: "Un livre de 145 pages pour comprendre, anticiper et accompagner votre enfant, avant, pendant et après son année aux États-Unis.",
    quote: {
      text: "Ce guide manquait sincèrement. J’aurais tellement aimé en avoir un avant le départ de ma fille. Un support concret, basé sur du vécu réel… c’est précieux.",
      who: "Parent, commentaire dans un groupe d’échange",
    },
  },

  /* ----------------------------------------------------------------- LYCÉENS */
  {
    slug: "lyceens",
    path: "/lyceens/",
    short: "Lycéens",
    forWho: "Tu pars bientôt : école, amis, famille d’accueil, anglais, mal du pays.",
    title: "Partir en High School aux USA : le guide du lycéen",
    description:
      "Amis, famille d’accueil, anglais, cours, mal du pays, retour : le guide du lycéen qui part en High School aux États-Unis, pour savoir à quoi t’attendre vraiment.",
    h1: "Tu pars en High School aux États-Unis ? Voilà ce qui t’attend vraiment",
    lead:
      "Casiers, équipes sportives, bal de fin d’année : tu as vu les films. La réalité est plus riche, et parfois plus dure. Ce guide te dit ce que personne n’a pensé à te raconter.",
    tu: true,
    tldr: [
      "Une High School américaine, ce n’est pas que le film : il y a des cours, des crédits, des notes et un emploi du temps qui ne ressemble pas à celui de ton lycée.",
      "Pour te faire des amis, il faut faire le premier pas : clubs, sports, activités extrascolaires, c’est là que tout se joue.",
      "Le mal du pays arrive à beaucoup de monde. En parler à ta famille d’accueil et à tes parents aide plus que le cacher.",
      "Ton retour compte autant que ton départ : l’année peut se valoriser dans la suite de tes études.",
    ],
    worriesTitle: "Les questions que tu te poses, et où trouver la réponse",
    worries: [
      { worry: "Je vais me faire des amis ?", answer: "Oui, mais pas sans effort : activités, équipes, clubs, et comment aborder les autres.", chapter: 7, label: "S’intégrer et se faire des amis", page: 106 },
      { worry: "Et si je ne m’entends pas avec ma famille d’accueil ?", answer: "Comment parler, réagir et t’excuser « à l’américaine », et quoi faire si le lien ne prend pas.", chapter: 5, label: "Comment parler, réagir et s’excuser", page: 78 },
      { worry: "Mon niveau d’anglais suffira-t-il ?", answer: "Le test d’anglais obligatoire et comment te préparer avant de partir.", chapter: 4, label: "Se préparer à parler anglais", page: 60 },
      { worry: "Les cours seront-ils trop durs ?", answer: "Le système scolaire, les notes et crédits, le niveau comparé à l’Europe, le choix des cours.", chapter: 6, label: "Le système scolaire américain", page: 92 },
      { worry: "Qu’est-ce que je mets dans ma valise ?", answer: "Articles pratiques, cadeaux pour la famille d’accueil, gestion des valises.", chapter: 4, label: "Articles pratiques à emporter", page: 63 },
      { worry: "Et si ma famille me manque trop ?", answer: "Le mal du pays, à quelle fréquence appeler, comment tenir.", chapter: 8, label: "Le mal du pays / homesickness", page: 121 },
      { worry: "Et quand je rentrerai ?", answer: "Le choc du retour et comment valoriser l’année pour la suite.", chapter: 9, label: "Le choc du retour", page: 127 },
    ],
    sections: [
      {
        id: "high-school",
        h2: "La vie lycéenne américaine, côté coulisses",
        body: [
          "Dans beaucoup de High Schools, la vie tourne autour de l’école : équipes sportives, clubs, événements, esprit d’équipe et fierté scolaire. Cafétéria, dress code, grands moments de l’année et aussi les « dramas » : le guide passe en revue tout ce qui fait le quotidien d’un lycéen américain.",
        ],
      },
      {
        id: "amis",
        h2: "Se faire des amis : le premier pas",
        body: [
          "Dans un nouveau lycée, personne ne viendra te chercher. Les activités extrascolaires sont le meilleur raccourci : une équipe, un club, une activité commune. C’est aussi là que tu progresseras le plus vite en anglais.",
        ],
      },
      {
        id: "famille",
        h2: "Ta famille d’accueil : apprendre les codes",
        body: [
          "Chaque famille a ses règles, ses habitudes, sa façon de communiquer. Poser des questions dès les premiers jours, dire ce que tu attends et écouter ce qu’on attend de toi évite beaucoup de malentendus. Si malgré tout le lien met du temps à se créer, c’est fréquent : le guide t’explique comment l’aborder.",
        ],
      },
      {
        id: "mal-du-pays",
        h2: "Quand ça ne va pas",
        body: [
          "Il y aura sûrement un jour (ou une semaine) où tu voudras tout arrêter. C’est normal. L’important est de le dire : à ta famille d’accueil, à ton correspondant local, à tes parents. Le chapitre « Entre deux mondes » est écrit pour ces moments.",
        ],
      },
    ],
    faq: [
      {
        q: "Est-ce que je serai à niveau dans une High School américaine ?",
        a: "Cela dépend de l’établissement et des cours que tu choisis. Le guide compare le niveau scolaire américain et européen, et t’explique le système de notes, de crédits et de choix de cours pour que tu saches à quoi t’attendre.",
      },
      {
        q: "Est-ce que je peux choisir mon État ou mon lycée ?",
        a: "En visa J-1 (famille d’accueil bénévole), non : ni l’État ni l’école ne sont choisis. En visa F-1 (école privée ou publique payante), le choix de l’établissement est souvent possible, mais le budget est bien plus élevé.",
      },
      {
        q: "Combien de temps dure une année d’échange en J-1 ?",
        a: "Le séjour en visa J-1 est limité à dix mois, sans possibilité de prolongation.",
      },
      {
        q: "Ce livre est-il fait pour moi ou pour mes parents ?",
        a: "Pour vous deux. Tu y trouves des repères concrets sur la vie sur place, tes parents un plan clair pour t’accompagner à distance. Beaucoup de familles le lisent ensemble.",
      },
    ],
    related: ["parents", "famille-d-accueil", "mal-du-pays", "retour-en-france"],
    ctaTitle: "Un guide pour partir sans être pris au dépourvu",
    ctaText: "Demande-le à tes parents : ils le trouvent sur Amazon, en broché ou en Kindle. Tu peux aussi leur envoyer cette page.",
  },

  /* -------------------------------------------------------------- SPORT-ÉTUDES */
  {
    slug: "sport-etudes",
    path: "/sport-etudes/",
    short: "Sportifs",
    forWho: "Un jeune sportif vise une High School avec programme sport-études ou une bourse sportive.",
    title: "High School sport-études aux USA : visa F-1, internat, bourse",
    description:
      "Sport-études aux États-Unis : visa F-1, dossier sportif, internat, budget et bourse sportive en High School américaine. Ce qu’il faut savoir avant de candidater.",
    h1: "Sport-études aux États-Unis : visa F-1, internat et bourse sportive",
    lead:
      "Certaines High Schools américaines proposent des programmes sportifs ambitieux. Le parcours est plus exigeant que l’échange classique : dossier, budget, internat. Voici de quoi vous faire une idée juste avant de candidater.",
    tldr: [
      "Une scolarité sport-études passe généralement par le visa F-1 : école privée ou publique payante, internat ou famille d’accueil rémunérée.",
      "Les écoles recherchent des élèves capables de conjuguer performance sportive et résultats scolaires : dossier sportif (vidéos, statistiques, recommandations d’entraîneurs) et bon niveau académique.",
      "Quelques établissements privés proposent des aides financières sportives, totales ou partielles. Elles exigent de maintenir ses notes et son comportement.",
      "Le budget d’un F-1 est nettement supérieur à celui d’un J-1 : il faut le regarder en face avant de déposer un dossier.",
    ],
    worriesTitle: "Les questions des familles de sportifs, et où trouver la réponse",
    worries: [
      { worry: "Mon enfant a-t-il le profil ?", answer: "Le profil type du jeune en F-1, et ce que les écoles attendent côté sport comme côté notes.", chapter: 2, label: "Le profil type du jeune en visa F-1", page: 39 },
      { worry: "Comment se passe l’admission ?", answer: "La procédure d’admission pas à pas, du dossier à l’inscription.", chapter: 2, label: "La procédure d’admission pas à pas", page: 40 },
      { worry: "Combien ça coûte vraiment ?", answer: "Les aspects financiers d’un séjour F-1, sans langue de bois.", chapter: 2, label: "Les aspects financiers", page: 41 },
      { worry: "Peut-on obtenir une bourse sportive ?", answer: "Ce que couvrent les aides, quels sports sont recherchés, et ce qu’elles exigent en retour.", chapter: 2, label: "Obtenir une bourse sportive en High School américaine", page: 41 },
      { worry: "Peut-on y aller sans organisme ?", answer: "La gestion administrative quand on s’occupe soi-même du dossier.", chapter: 2, label: "La gestion administrative sans organisme", page: 44 },
      { worry: "Internat : quel encadrement, quelle sécurité ?", answer: "Assurances, encadrement et sécurité, puis la vie sur le campus américain.", chapter: 2, label: "Assurances, encadrement et sécurité", page: 45 },
    ],
    sections: [
      {
        id: "internat",
        h2: "Pourquoi choisir l’internat américain",
        body: [
          "Les programmes F-1 permettent d’intégrer des académies sportives ou des boarding schools aux infrastructures de haut niveau et au suivi personnalisé. L’hébergement se fait en internat ou en famille d’accueil rémunérée.",
        ],
      },
      {
        id: "dossier",
        h2: "Le dossier sportif : ce que regardent les écoles",
        body: [
          "S’engager dans une High School sport-études demande de l’anticipation. Un bon dossier sportif, avec vidéos, statistiques et recommandations d’entraîneurs, compte autant qu’un bon niveau académique. Il faut aussi prouver qu’on peut tenir la cadence : entraînements quotidiens, compétitions, déplacements.",
        ],
      },
      {
        id: "bourse",
        h2: "Bourse sportive : ce qu’il faut savoir",
        body: [
          "Quelques établissements privés proposent des aides sportives totales ou partielles pour attirer des athlètes du monde entier. Elles peuvent couvrir les frais d’inscription, d’hébergement ou une partie du cursus. Basket, soccer, tennis, natation et athlétisme comptent parmi les disciplines les plus recherchées.",
          "Ces aides ne sont pas un cadeau : le niveau sportif doit être remarquable, le dossier scolaire solide, la conduite irréprochable, et les notes doivent être maintenues tout au long de l’année.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment préparer une scolarité sport-études aux États-Unis ?",
        a: "En anticipant : constituer un dossier sportif (vidéos, statistiques, recommandations d’entraîneurs), maintenir un bon niveau scolaire et prévoir la rigueur nécessaire pour combiner entraînements quotidiens, compétitions et déplacements. Les programmes F-1 donnent accès à des académies sportives ou boarding schools.",
      },
      {
        q: "Comment obtenir une bourse sportive en High School américaine ?",
        a: "Quelques établissements privés proposent des aides sportives totales ou partielles. Il faut un niveau sportif remarquable, un bon historique scolaire et une bonne conduite, puis maintenir ses notes et son implication une fois sur place.",
      },
      {
        q: "Quelle est la différence entre J-1 et F-1 pour un sportif ?",
        a: "En J-1, le jeune ne choisit pas son école, donc pas de programme sportif choisi. En F-1, il peut souvent choisir son établissement et opter pour un programme sportif ou artistique, avec un budget bien plus élevé.",
      },
    ],
    related: ["j1-ou-f1", "parents", "famille-d-accueil"],
    ctaTitle: "Avant de candidater, lisez le chapitre F-1",
    ctaText: "Profil, admission, budget, bourse sportive, internat : le chapitre 2 du guide détaille chaque étape du visa F-1.",
  },

  /* ------------------------------------------------------------------ J-1 / F-1 */
  {
    slug: "j1-ou-f1",
    path: "/j1-ou-f1/",
    short: "J-1 ou F-1",
    forWho: "Vous comparez les deux visas et voulez comprendre ce qui change vraiment.",
    title: "Visa J-1 ou F-1 : les différences pour une High School aux USA",
    description:
      "Visa J-1 ou F-1 ? Famille d’accueil ou internat, lycée public ou privé, durée, choix de l’école, budget : le comparatif pour choisir sa High School aux USA.",
    h1: "Visa J-1 ou F-1 : quelles différences pour une année de High School aux USA ?",
    lead:
      "Le visa J-1 est l’aventure américaine la plus immersive, le F-1 la scolarité la plus choisie. Deux logiques, deux budgets, deux niveaux de liberté. Voici le comparatif.",
    tldr: [
      "J-1 : programme d’échange supervisé, famille d’accueil bénévole, lycée public sans frais de scolarité, mais ni l’État ni l’école ne se choisissent. Durée maximale : dix mois.",
      "F-1 : scolarité classique aux États-Unis, école privée ou publique payante, choix de l’établissement souvent possible, internat ou famille rémunérée, plusieurs années possibles.",
      "Le budget d’un F-1 est bien plus élevé que celui d’un J-1.",
      "Les règles de visa évoluent : vérifiez toujours auprès de votre organisme et des sources officielles avant de décider.",
    ],
    worriesTitle: "Pour trancher, trois questions à vous poser",
    worries: [
      { worry: "Mon enfant est-il prêt à lâcher prise ?", answer: "En J-1, il ne choisit ni l’État ni l’école. Il part pour l’immersion, pas pour un programme précis.", chapter: 1, label: "Différences entre visa J-1 et F-1", page: 17 },
      { worry: "Quel budget peut-on mobiliser ?", answer: "Le J-1 coûte nettement moins cher que le F-1. Le coût total dépend de l’organisme et du programme.", chapter: 1, label: "Le coût financier : séjours en famille", page: 29 },
      { worry: "Un projet sportif ou artistique est-il en jeu ?", answer: "Si oui, le F-1 donne accès à des programmes spécialisés, et parfois à des aides.", chapter: 2, label: "Comprendre le visa F-1 et ses particularités", page: 38 },
    ],
    sections: [
      {
        id: "j1",
        h2: "Le visa J-1 : l’immersion dans une famille américaine",
        body: [
          "Supervisé par le Département d’État, ce programme d’échange place le jeune dans une famille bénévole et lui permet d’aller au lycée public sans frais de scolarité. Il est plongé à 100 % dans la vie locale, avec une condition : accepter de lâcher prise. Il ne choisit ni l’État ni l’école, et le séjour est limité à dix mois, sans prolongation.",
        ],
      },
      {
        id: "f1",
        h2: "Le visa F-1 : une scolarité choisie",
        body: [
          "Le F-1 correspond à une scolarité classique aux États-Unis, dans le privé ou le public payant. L’élève peut souvent choisir son établissement, opter pour un programme sportif ou artistique et étaler ses études sur plusieurs années. En contrepartie, le budget est bien plus élevé, et l’hébergement se fait en internat ou en famille d’accueil rémunérée.",
        ],
      },
      {
        id: "choisir",
        h2: "Comment choisir ?",
        body: ["Il n’y a pas de bon choix universel, seulement un choix adapté au jeune et à sa famille."],
        list: [
          "Le J-1 convient à un jeune curieux, adaptable, qui veut vivre l’Amérique de l’intérieur et accepte de ne pas tout contrôler.",
          "Le F-1 convient à un projet précis (sport, art, cursus sur plusieurs années) et à une famille prête à y consacrer un budget important.",
          "Dans les deux cas, lisez le contrat, posez vos questions à l’organisme et gardez en tête la question du retour.",
        ],
      },
    ],
    faq: [
      {
        q: "Quelles sont les différences entre un visa J-1 et un visa F-1 ?",
        a: "Le J-1 est un programme d’échange supervisé par le Département d’État : famille d’accueil bénévole, lycée public sans frais de scolarité, mais ni l’État ni l’école ne se choisissent, durée limitée à dix mois. Le F-1 correspond à une scolarité classique : école privée ou publique payante, choix de l’établissement souvent possible, programme sportif ou artistique, plusieurs années possibles, internat ou famille rémunérée, budget bien plus élevé.",
      },
      {
        q: "Peut-on choisir son État ou son lycée avec un visa J-1 ?",
        a: "Non. En J-1, ni l’État ni l’école ne sont choisis, c’est le principe de l’échange. Le placement se fait selon le dossier du jeune et les familles disponibles.",
      },
      {
        q: "Combien de temps peut durer un séjour en visa J-1 ?",
        a: "Dix mois maximum, sans possibilité de prolongation.",
      },
      {
        q: "Peut-on étudier plusieurs années aux USA avec un visa F-1 ?",
        a: "Oui : le F-1 permet souvent d’étaler la scolarité sur plusieurs années, contrairement au J-1.",
      },
    ],
    related: ["parents", "sport-etudes", "famille-d-accueil"],
    ctaTitle: "Le comparatif complet, avec les règles et les pièges",
    ctaText: "Chapitres 1 à 3 du guide : types de séjours, règles et restrictions, rôle de l’organisme, démarches administratives, refus de visa.",
  },

  /* ------------------------------------------------------------ FAMILLE D'ACCUEIL */
  {
    slug: "famille-d-accueil",
    path: "/famille-d-accueil/",
    short: "Famille d’accueil",
    forWho: "Vous voulez comprendre comment les familles sont choisies et comment la vie s’y organise.",
    title: "Famille d’accueil aux USA : choix, vie quotidienne, changement",
    description:
      "Comment sont choisies les familles d’accueil en visa J-1 ? Types de familles, communication, premières semaines, changer de famille : réussir son séjour.",
    h1: "Famille d’accueil aux États-Unis : comment elle est choisie et comment ça se passe",
    lead:
      "C’est la grande inconnue, pour le jeune comme pour ses parents. Voici comment les familles sont sélectionnées, ce qui fait réussir une cohabitation, et ce qui se passe quand ça ne prend pas.",
    tldr: [
      "Un coordinateur local mandaté par l’organisme américain rencontre chaque famille, visite la maison et s’assure que l’environnement est chaleureux et sécurisé.",
      "Les familles J-1 sont bénévoles. Leurs profils sont variés : couples avec enfants, parents seuls, retraités, anciens hôtes.",
      "Le placement est personnalisé : le dossier du jeune, sa lettre, ses photos et ses résultats sont étudiés pour trouver une famille aux valeurs proches.",
      "La clé d’un séjour réussi est la relation humaine : communication ouverte et adaptation réciproque.",
    ],
    worriesTitle: "Ce que le guide explique sur la vie en famille d’accueil",
    worries: [
      { worry: "Quels types de familles existe-t-il ?", answer: "Les différents profils de familles, la vie en ville ou à la campagne, ce qui change au quotidien.", chapter: 5, label: "Les différents types de familles", page: 68 },
      { worry: "Comment éviter les malentendus ?", answer: "Communication, attentes, organisation quotidienne, façon de parler et de s’excuser à l’américaine.", chapter: 5, label: "Communication et attentes", page: 77 },
      { worry: "Et si le lien met du temps à se créer ?", answer: "Pourquoi cela arrive, comment réagir, et comment construire un lien durable.", chapter: 5, label: "Quand le lien prend du temps", page: 81 },
      { worry: "Peut-on changer de famille ?", answer: "Dans quels cas, et comment aborder la situation sans l’envenimer.", chapter: 5, label: "Changer de famille", page: 81 },
      { worry: "Tous les jeunes auront-ils une famille ?", answer: "Ce qu’il faut savoir avant de s’inscrire, et ce que prévoit le dossier de placement.", chapter: 1, label: "Est-ce que tous les jeunes auront une famille d’accueil ?", page: 30 },
    ],
    sections: [
      {
        id: "selection",
        h2: "Comment sont choisies les familles d’accueil ?",
        body: [
          "Un coordinateur local, mandaté par l’organisme américain, rencontre chaque famille. Il visite leur maison, discute de leurs motivations et s’assure que leur environnement est chaleureux et sécurisé pour le jeune. Ces familles participent bénévolement au programme J-1, avec une vraie envie de partage culturel.",
        ],
      },
      {
        id: "placement",
        h2: "Un placement personnalisé",
        body: [
          "Le dossier du jeune, sa lettre, ses photos, ses résultats sont étudiés attentivement pour trouver une famille dont les valeurs et le mode de vie lui correspondent. Plus le dossier est sincère et complet, plus le placement a de chances d’être adapté.",
        ],
      },
      {
        id: "reussir",
        h2: "Réussir les premières semaines",
        body: ["Quelques réflexes simples font gagner du temps à tout le monde :"],
        list: [
          "Poser des questions sur les règles de la maison dès les premiers jours.",
          "Dire clairement ce que l’on attend et demander ce que la famille attend.",
          "Participer à la vie de famille, même quand on est fatigué.",
          "Parler vite d’un malaise, plutôt que de le laisser grandir.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment sont choisies les familles d’accueil ?",
        a: "Un coordinateur local, mandaté par l’organisme américain, rencontre chaque famille, visite la maison, discute de ses motivations et s’assure que l’environnement est chaleureux et sécurisé. Ces familles sont bénévoles dans le programme J-1.",
      },
      {
        q: "Quel est le profil des familles d’accueil ?",
        a: "Il est varié : couples avec enfants, parents seuls, retraités, personnes ayant déjà vécu l’expérience d’accueillir un jeune.",
      },
      {
        q: "Les familles d’accueil sont-elles payées ?",
        a: "En visa J-1, elles sont bénévoles. En visa F-1, l’hébergement se fait en internat ou dans une famille d’accueil rémunérée.",
      },
    ],
    related: ["j1-ou-f1", "mal-du-pays", "lyceens"],
    ctaTitle: "Tout un chapitre sur la vie en famille d’accueil",
    ctaText: "Types de familles, communication, malentendus, changer de famille, créer un lien durable : le chapitre 5 en détail.",
  },

  /* -------------------------------------------------------------------- MAL DU PAYS */
  {
    slug: "mal-du-pays",
    path: "/mal-du-pays/",
    short: "Mal du pays",
    forWho: "Le mal du pays arrive, ou vous le redoutez : pour le jeune comme pour ses parents.",
    title: "Mal du pays pendant un échange aux USA : conseils aux parents",
    description:
      "Mal du pays (homesickness) pendant une année de High School aux États-Unis : comment le comprendre, à quelle fréquence se parler, comment les parents peuvent aider.",
    h1: "Mal du pays pendant un échange aux USA : comprendre et accompagner",
    lead:
      "Même les jeunes les plus motivés peuvent traverser un passage à vide, et leurs parents aussi. Mieux vaut y avoir pensé avant le départ.",
    tldr: [
      "Le mal du pays (homesickness) est fréquent et ne signe pas un échec de l’échange.",
      "Le bon rythme de contact est personnel : trop peu isole, trop envahit et freine l’intégration dans la famille d’accueil.",
      "Parler vite d’un malaise, à la famille d’accueil comme à l’organisme, évite qu’il s’installe.",
      "Pour les parents, apprivoiser l’absence fait partie du voyage.",
    ],
    worriesTitle: "Ce qui revient le plus souvent",
    worries: [
      { worry: "Mon enfant pleure au téléphone, que faire ?", answer: "Comprendre le mal du pays, écouter sans paniquer, et savoir quand en parler à l’organisme.", chapter: 8, label: "Le mal du pays / homesickness", page: 121 },
      { worry: "À quelle fréquence doit-on se parler ?", answer: "Trouver le bon rythme sans couper le lien ni envahir.", chapter: 8, label: "La fréquence des contacts", page: 121 },
      { worry: "Comment gérer mon propre manque ?", answer: "Des conseils aux parents pour apprivoiser l’absence.", chapter: 8, label: "Conseils aux parents pour apprivoiser l’absence", page: 122 },
      { worry: "Dois-je aller le voir sur place ?", answer: "La venue des parents : une bonne idée ? Les avantages, les risques, le bon moment.", chapter: 8, label: "La venue des parents", page: 123 },
    ],
    sections: [
      {
        id: "comprendre",
        h2: "Comprendre le mal du pays",
        body: [
          "Changer de pays, de langue, de rythme, de repères alimentaires et affectifs, tout cela en même temps, fatigue. Le mal du pays n’est pas une faiblesse : c’est une réaction normale à un grand changement. Il peut arriver tôt ou tard dans l’année, et en parler aide à le traverser.",
        ],
      },
      {
        id: "contact",
        h2: "Trouver le bon rythme de contact",
        body: [
          "Les messages et les visios facilitent le lien, mais un contact permanent peut empêcher le jeune de s’investir là où il est. Convenir d’un rythme avant le départ, et rester souple, aide tout le monde.",
        ],
      },
      {
        id: "parents",
        h2: "Le rôle des parents",
        body: [
          "Écouter sans dramatiser, encourager sans minimiser, et savoir quand alerter l’organisme ou le correspondant local : c’est un équilibre délicat. Le chapitre « Entre deux mondes » est écrit pour les parents qui apprennent à laisser partir.",
        ],
      },
    ],
    faq: [
      {
        q: "Le mal du pays est-il normal pendant un échange scolaire ?",
        a: "Oui, c’est une réaction fréquente face à un grand changement. Il ne signifie pas que l’échange est raté. En parler tôt, à la famille d’accueil, aux parents ou à l’organisme, aide à le traverser.",
      },
      {
        q: "À quelle fréquence faut-il appeler son enfant en échange ?",
        a: "Il n’y a pas de règle unique. Mieux vaut convenir d’un rythme avant le départ et le garder souple : trop peu de contact isole, trop de contact peut freiner l’intégration.",
      },
    ],
    related: ["parents", "famille-d-accueil", "retour-en-france"],
    ctaTitle: "Un chapitre pour traverser le passage à vide",
    ctaText: "Mal du pays, fréquence des contacts, conseils aux parents, visite sur place : le chapitre 8 du guide.",
  },

  /* ------------------------------------------------------------------ RETOUR */
  {
    slug: "retour-en-france",
    path: "/retour-en-france/",
    short: "Le retour",
    forWho: "L’année se termine : choc du retour, retrouver sa place, reprendre le lycée en France.",
    title: "Retour d’une année aux USA : choc du retour et réadaptation",
    description:
      "Choc du retour après une année de High School aux États-Unis : retrouver sa place à la maison, reprendre le lycée en France, valoriser l’expérience.",
    h1: "Le retour en France après une année aux USA : choc du retour et réadaptation",
    lead:
      "Tout le monde prépare le départ. Presque personne ne prépare le retour. C’est pourtant là que beaucoup de familles se sentent le plus démunies.",
    tldr: [
      "Le choc du retour est courant : on rentre changé, la maison aussi, d’où ce sentiment d’entre-deux mondes.",
      "Retrouver sa place à la maison prend du temps, et les parents ont un rôle clé.",
      "Le retour dans le système scolaire français se prépare avant le départ.",
      "Une année aux États-Unis se valorise dans la suite des études comme dans un parcours professionnel.",
    ],
    worriesTitle: "Ce que le dernier chapitre du guide aborde",
    worries: [
      { worry: "Pourquoi se sent-on perdu en rentrant ?", answer: "Le choc du retour et le sentiment d’un entre-deux mondes, expliqués simplement.", chapter: 9, label: "Le choc du retour", page: 127 },
      { worry: "Comment retrouver sa place à la maison ?", answer: "Réadaptation, nouvelles habitudes, relations avec la famille et les amis.", chapter: 9, label: "Retrouver sa place à la maison", page: 128 },
      { worry: "Comment reprendre le lycée en France ?", answer: "Le retour dans le système scolaire, étape par étape.", chapter: 9, label: "Le retour dans le système scolaire", page: 131 },
      { worry: "Comment valoriser cette année ?", answer: "Académiquement et professionnellement, et comment rester impliqué, prolonger l’expérience.", chapter: 9, label: "Valoriser l’expérience", page: 129 },
      { worry: "Comment les parents peuvent-ils aider ?", answer: "Le rôle des parents lors du retour.", chapter: 9, label: "Le rôle des parents lors du retour", page: 133 },
    ],
    sections: [
      {
        id: "choc",
        h2: "Pourquoi le retour est parfois plus dur que le départ",
        body: [
          "Au départ, tout est nouveau et tout le monde s’y attend. Au retour, on s’attend à retrouver son monde tel qu’on l’a laissé, mais le jeune a changé, et ses proches aussi. Ce décalage peut surprendre. Ce n’est pas un échec, c’est le dernier chapitre de l’aventure.",
        ],
      },
      {
        id: "famille",
        h2: "Retrouver sa place à la maison",
        body: [
          "Après une année d’autonomie, un jeune a pris de nouvelles habitudes et de nouvelles façons de voir. Les parents qui l’accueillent avec curiosité plutôt qu’avec des attentes précises facilitent sa réadaptation.",
        ],
      },
      {
        id: "valoriser",
        h2: "Valoriser l’année",
        body: [
          "Autonomie, aisance en anglais, adaptation : une année en High School américaine est un atout, à condition de savoir la raconter. Pour les études comme pour un futur CV, mieux vaut en garder des traces dès maintenant.",
        ],
      },
    ],
    faq: [
      {
        q: "Qu’est-ce que le choc du retour après un échange ?",
        a: "C’est le décalage ressenti en rentrant : le jeune a changé et retrouve un environnement qui, lui aussi, a évolué. Beaucoup décrivent un sentiment d’entre-deux mondes. Il est courant et s’estompe avec le temps.",
      },
      {
        q: "Comment aider son enfant à se réadapter après une année aux USA ?",
        a: "Lui laisser du temps, l’écouter raconter son année sans le comparer à avant, et l’aider à reprendre le rythme scolaire. Le dernier chapitre du guide est consacré au rôle des parents lors du retour.",
      },
    ],
    related: ["parents", "mal-du-pays", "lyceens"],
    ctaTitle: "Le retour, ce chapitre qu’on oublie d’écrire",
    ctaText: "Choc du retour, retour scolaire, valoriser l’année, rôle des parents : le chapitre 9 du guide.",
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug)!;
