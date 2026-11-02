import type { FaqItem } from "../lib/schema";

export type Worry = { worry: string; answer: string; chapter: number; label: string; page: number };
export type GuideSection = { id: string; h2: string; body: string[]; list?: string[] };

export type Guide = {
  slug: string;
  path: string;
  /** Intitulé court (cartes, maillage) */
  short: string;
  /** Libellé du lien en pied de page (sinon `short`) */
  footer?: string;
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
  /** Encadré d'avertissement affiché sous le titre */
  notice?: { title: string; text: string; tone?: "info" | "warning" };
  /** true : page écrite en tutoiement (lycéens) */
  tu?: boolean;
};

export const guides: Guide[] = [
  /* ------------------------------------------------------------------ PARENTS */
  {
    slug: "parents",
    path: "/parents/",
    short: "Parents",
    footer: "Pour les parents",
    forWho: "Votre enfant part, ou y pense : visa, organisme, famille d’accueil, budget, distance.",
    title: "Envoyer son enfant en High School aux USA : guide parents",
    description:
      "Visa J-1 ou F-1, organisme, famille d’accueil, assurance, budget, distance : tout ce que les parents doivent savoir avant l’année de High School aux USA.",
    h1: "Votre enfant part en High School aux États-Unis : ce que les **parents doivent savoir**",
    lead:
      "Visa, organisme, famille d’accueil, budget, assurance, distance… La liste des questions est longue et personne ne vous donne le tableau complet. Ce guide a été écrit par **une maman qui est passée par là, deux fois**.",
    tldr: [
      "Avant de choisir un organisme, il faut **choisir un type de séjour** : visa J-1 (famille d’accueil bénévole, lycée public) ou visa F-1 (école privée ou publique payante, internat ou famille rémunérée). Le budget et la liberté de choix n’ont rien à voir.",
      "En J-1, votre enfant **ne choisit ni l’État ni l’école**. Mieux vaut le savoir avant de signer.",
      "Le plus dur pour les parents n’est souvent pas le dossier : c’est **la distance**. Le **mal du pays** peut toucher même les jeunes les plus motivés, et il se prépare.",
      "**Le retour** est le grand oublié : un jeune qui rentre n’est plus tout à fait le même, et la famille non plus.",
    ],
    worriesTitle: "Ce qui inquiète le plus les parents, et **où trouver la réponse**",
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
        h2: "Par où commencer : **J-1 ou F-1** ?",
        body: [
          "C’est la première vraie décision, et elle conditionne toutes les autres. Le visa J-1 est un programme d’échange : le jeune est accueilli par une famille bénévole et suit les cours dans un lycée public, sans frais de scolarité. En contrepartie, il **ne choisit ni l’État ni l’établissement**, et le séjour est limité à **dix mois**.",
          "Le visa F-1 correspond à une scolarité plus classique : école privée ou publique payante, choix de l’établissement, programme sportif ou artistique possible, hébergement en internat ou en famille rémunérée. Le **budget est nettement plus élevé**.",
        ],
      },
      {
        id: "organisme",
        h2: "Choisir un organisme **sans se faire piéger**",
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
        h2: "La famille d’accueil : **ce qui se passe vraiment**",
        body: [
          "Les familles J-1 sont bénévoles et de profils très variés : couples avec enfants, parents seuls, retraités, anciens hôtes. Le séjour réussit ou non sur la relation humaine : communication ouverte, attentes dites à voix haute, adaptation de part et d’autre. Le guide y consacre un chapitre entier, jusqu’à la question que beaucoup de parents n’osent pas poser : que faire si ça ne marche pas ?",
        ],
      },
      {
        id: "distance",
        h2: "Rester **présent à distance**",
        body: [
          "Entre le mal du pays et le décalage horaire, trouver le bon rythme de contact est un vrai sujet. Trop d’appels peuvent freiner l’intégration, pas assez peuvent isoler. Le chapitre « Entre deux mondes » aide les parents à apprivoiser l’absence, et à décider s’ils doivent venir sur place.",
        ],
      },
      {
        id: "retour",
        h2: "Préparer **le retour** dès le départ",
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
    related: ["j1-ou-f1", "budget", "choisir-organisme", "calendrier", "famille-d-accueil", "retour-en-france"],
    ctaTitle: "Le guide que **j’aurais voulu avoir** avant leur départ",
    ctaText: "Un livre de 145 pages pour comprendre, anticiper et accompagner votre enfant, avant, pendant et après son année aux États-Unis.",
    quote: {
      text: "**Ce guide manquait sincèrement.** J’aurais tellement aimé en avoir un avant le départ de ma fille. Un support concret, basé sur du **vécu réel**… c’est précieux.",
      who: "Parent, commentaire dans un groupe d’échange",
    },
  },

  /* ----------------------------------------------------------------- LYCÉENS */
  {
    slug: "lyceens",
    path: "/lyceens/",
    short: "Lycéens",
    footer: "Pour les lycéens",
    forWho: "Tu pars bientôt : école, amis, famille d’accueil, anglais, mal du pays.",
    title: "Partir en High School aux USA : le guide du lycéen",
    description:
      "Amis, famille d’accueil, anglais, cours, mal du pays, retour : le guide du lycéen qui part en High School aux États-Unis, pour savoir à quoi t’attendre vraiment.",
    h1: "Tu pars en High School aux États-Unis ? Voilà **ce qui t’attend vraiment**",
    lead:
      "Casiers, équipes sportives, bal de fin d’année : tu as vu les films. La réalité est plus riche, et parfois plus dure. Ce guide te dit **ce que personne n’a pensé à te raconter**.",
    tu: true,
    tldr: [
      "Une High School américaine, **ce n’est pas que le film** : il y a des cours, des crédits, des notes et un emploi du temps qui ne ressemble pas à celui de ton lycée.",
      "Pour te faire des amis, il faut **faire le premier pas** : clubs, sports, activités extrascolaires, c’est là que tout se joue.",
      "Le **mal du pays** arrive à beaucoup de monde. **En parler** à ta famille d’accueil et à tes parents aide plus que le cacher.",
      "**Ton retour compte autant que ton départ** : l’année peut se valoriser dans la suite de tes études.",
    ],
    worriesTitle: "Les questions que tu te poses, et **où trouver la réponse**",
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
        h2: "La vie lycéenne américaine, **côté coulisses**",
        body: [
          "Dans beaucoup de High Schools, la vie tourne autour de l’école : équipes sportives, clubs, événements, esprit d’équipe et fierté scolaire. Cafétéria, dress code, grands moments de l’année et aussi les « dramas » : le guide passe en revue tout ce qui fait le quotidien d’un lycéen américain.",
        ],
      },
      {
        id: "amis",
        h2: "Se faire des amis : **le premier pas**",
        body: [
          "Dans un nouveau lycée, personne ne viendra te chercher. Les activités extrascolaires sont le meilleur raccourci : une équipe, un club, une activité commune. C’est aussi là que tu progresseras le plus vite en anglais.",
        ],
      },
      {
        id: "famille",
        h2: "Ta famille d’accueil : **apprendre les codes**",
        body: [
          "Chaque famille a ses règles, ses habitudes, sa façon de communiquer. Poser des questions dès les premiers jours, dire ce que tu attends et écouter ce qu’on attend de toi évite beaucoup de malentendus. Si malgré tout le lien met du temps à se créer, c’est fréquent : le guide t’explique comment l’aborder.",
        ],
      },
      {
        id: "mal-du-pays",
        h2: "**Quand ça ne va pas**",
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
    related: ["niveau", "valise", "famille-d-accueil", "mal-du-pays", "retour-en-france"],
    ctaTitle: "Un guide pour partir **sans être pris au dépourvu**",
    ctaText: "Demande-le à tes parents : ils le trouvent sur Amazon, en broché ou en Kindle. Tu peux aussi leur envoyer cette page.",
  },

  /* -------------------------------------------------------------- SPORT-ÉTUDES */
  {
    slug: "sport-etudes",
    path: "/sport-etudes/",
    short: "Sportifs",
    footer: "Sport-études et bourses",
    forWho: "Un jeune sportif vise une High School avec programme sport-études ou une bourse sportive.",
    title: "High School sport-études aux USA : visa F-1, internat, bourse",
    description:
      "Sport-études aux États-Unis : visa F-1, dossier sportif, internat, budget et bourse sportive en High School américaine. Ce qu’il faut savoir avant de candidater.",
    h1: "Sport-études aux États-Unis : **visa F-1**, internat et **bourse sportive**",
    lead:
      "Certaines High Schools américaines proposent des programmes sportifs ambitieux. Le parcours est plus exigeant que l’échange classique : dossier, budget, internat. Voici de quoi vous faire **une idée juste** avant de candidater.",
    tldr: [
      "Une scolarité sport-études passe généralement par le **visa F-1** : école privée ou publique payante, internat ou famille d’accueil rémunérée.",
      "Les écoles recherchent des élèves capables de conjuguer **performance sportive et résultats scolaires** : dossier sportif (vidéos, statistiques, recommandations d’entraîneurs) et bon niveau académique.",
      "Quelques établissements privés proposent des **aides financières sportives**, totales ou partielles. Elles exigent de maintenir ses notes et son comportement.",
      "Le **budget d’un F-1** est nettement supérieur à celui d’un J-1 : il faut le regarder en face avant de déposer un dossier.",
    ],
    worriesTitle: "Les questions des familles de sportifs, et **où trouver la réponse**",
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
        h2: "Pourquoi choisir **l’internat américain**",
        body: [
          "Les programmes F-1 permettent d’intégrer des académies sportives ou des boarding schools aux infrastructures de haut niveau et au suivi personnalisé. L’hébergement se fait en internat ou en famille d’accueil rémunérée.",
        ],
      },
      {
        id: "dossier",
        h2: "Le dossier sportif : **ce que regardent les écoles**",
        body: [
          "S’engager dans une High School sport-études demande de l’anticipation. Un bon dossier sportif, avec vidéos, statistiques et recommandations d’entraîneurs, compte autant qu’un bon niveau académique. Il faut aussi prouver qu’on peut tenir la cadence : entraînements quotidiens, compétitions, déplacements.",
        ],
      },
      {
        id: "bourse",
        h2: "Bourse sportive : **ce qu’il faut savoir**",
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
    related: ["j1-ou-f1", "bourses", "sans-organisme", "budget"],
    ctaTitle: "Avant de candidater, lisez **le chapitre F-1**",
    ctaText: "Profil, admission, budget, bourse sportive, internat : le chapitre 2 du guide détaille chaque étape du visa F-1.",
  },

  /* ------------------------------------------------------------------ J-1 / F-1 */
  {
    slug: "j1-ou-f1",
    path: "/j1-ou-f1/",
    short: "J-1 ou F-1",
    footer: "Visa J-1 ou F-1",
    forWho: "Vous comparez les deux visas et voulez comprendre ce qui change vraiment.",
    title: "Visa J-1 ou F-1 : les différences pour une High School aux USA",
    description:
      "Visa J-1 ou F-1 ? Famille d’accueil ou internat, lycée public ou privé, durée, choix de l’école, budget : le comparatif pour choisir sa High School aux USA.",
    h1: "Visa **J-1 ou F-1** : quelles différences pour une année de High School aux USA ?",
    lead:
      "Le visa J-1 est l’aventure américaine la plus immersive, le F-1 la scolarité la plus choisie. **Deux logiques, deux budgets, deux niveaux de liberté.** Voici le comparatif.",
    tldr: [
      "**J-1** : programme d’échange supervisé, famille d’accueil bénévole, lycée public sans frais de scolarité, mais **ni l’État ni l’école ne se choisissent**. Durée maximale : **dix mois**.",
      "**F-1** : scolarité classique aux États-Unis, école privée ou publique payante, choix de l’établissement souvent possible, internat ou famille rémunérée, plusieurs années possibles.",
      "Le **budget d’un F-1 est bien plus élevé** que celui d’un J-1.",
      "Les règles de visa évoluent : vérifiez toujours auprès de votre organisme et des sources officielles avant de décider.",
    ],
    worriesTitle: "Pour trancher, **trois questions** à vous poser",
    worries: [
      { worry: "Mon enfant est-il prêt à lâcher prise ?", answer: "En J-1, il ne choisit ni l’État ni l’école. Il part pour l’immersion, pas pour un programme précis.", chapter: 1, label: "Différences entre visa J-1 et F-1", page: 17 },
      { worry: "Quel budget peut-on mobiliser ?", answer: "Le J-1 coûte nettement moins cher que le F-1. Le coût total dépend de l’organisme et du programme.", chapter: 1, label: "Le coût financier : séjours en famille", page: 29 },
      { worry: "Un projet sportif ou artistique est-il en jeu ?", answer: "Si oui, le F-1 donne accès à des programmes spécialisés, et parfois à des aides.", chapter: 2, label: "Comprendre le visa F-1 et ses particularités", page: 38 },
    ],
    sections: [
      {
        id: "j1",
        h2: "Le visa J-1 : **l’immersion** dans une famille américaine",
        body: [
          "Supervisé par le Département d’État, ce programme d’échange place le jeune dans une famille bénévole et lui permet d’aller au lycée public sans frais de scolarité. Il est plongé à 100 % dans la vie locale, avec une condition : accepter de lâcher prise. Il ne choisit ni l’État ni l’école, et le séjour est limité à dix mois, sans prolongation.",
        ],
      },
      {
        id: "f1",
        h2: "Le visa F-1 : **une scolarité choisie**",
        body: [
          "Le F-1 correspond à une scolarité classique aux États-Unis, dans le privé ou le public payant. L’élève peut souvent choisir son établissement, opter pour un programme sportif ou artistique et étaler ses études sur plusieurs années. En contrepartie, le budget est bien plus élevé, et l’hébergement se fait en internat ou en famille d’accueil rémunérée.",
        ],
      },
      {
        id: "choisir",
        h2: "**Comment choisir** ?",
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
    related: ["parents", "sport-etudes", "sans-organisme", "choisir-organisme"],
    ctaTitle: "Le comparatif complet, avec **les règles et les pièges**",
    ctaText: "Chapitres 1 à 3 du guide : types de séjours, règles et restrictions, rôle de l’organisme, démarches administratives, refus de visa.",
  },

  /* ------------------------------------------------------------ FAMILLE D'ACCUEIL */
  {
    slug: "famille-d-accueil",
    path: "/famille-d-accueil/",
    short: "Famille d’accueil",
    footer: "Famille d’accueil",
    forWho: "Vous voulez comprendre comment les familles sont choisies et comment la vie s’y organise.",
    title: "Famille d’accueil aux USA : choix, vie quotidienne, changement",
    description:
      "Comment sont choisies les familles d’accueil en visa J-1 ? Types de familles, communication, premières semaines, changer de famille : réussir son séjour.",
    h1: "Famille d’accueil aux États-Unis : **comment elle est choisie** et comment ça se passe",
    lead:
      "C’est la grande inconnue, pour le jeune comme pour ses parents. Voici comment les familles sont sélectionnées, **ce qui fait réussir une cohabitation**, et ce qui se passe quand ça ne prend pas.",
    tldr: [
      "Un **coordinateur local** mandaté par l’organisme américain rencontre chaque famille, visite la maison et s’assure que l’environnement est chaleureux et sécurisé.",
      "Les familles J-1 sont **bénévoles**. Leurs profils sont variés : couples avec enfants, parents seuls, retraités, anciens hôtes.",
      "Le **placement est personnalisé** : le dossier du jeune, sa lettre, ses photos et ses résultats sont étudiés pour trouver une famille aux valeurs proches.",
      "La clé d’un séjour réussi est **la relation humaine** : communication ouverte et adaptation réciproque.",
    ],
    worriesTitle: "Ce que le guide explique sur **la vie en famille d’accueil**",
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
        h2: "Comment sont **choisies les familles** d’accueil ?",
        body: [
          "Un coordinateur local, mandaté par l’organisme américain, rencontre chaque famille. Il visite leur maison, discute de leurs motivations et s’assure que leur environnement est chaleureux et sécurisé pour le jeune. Ces familles participent bénévolement au programme J-1, avec une vraie envie de partage culturel.",
        ],
      },
      {
        id: "placement",
        h2: "Un **placement personnalisé**",
        body: [
          "Le dossier du jeune, sa lettre, ses photos, ses résultats sont étudiés attentivement pour trouver une famille dont les valeurs et le mode de vie lui correspondent. Plus le dossier est sincère et complet, plus le placement a de chances d’être adapté.",
        ],
      },
      {
        id: "reussir",
        h2: "Réussir **les premières semaines**",
        body: ["Quelques réflexes simples font gagner du temps à tout le monde :"],
        list: [
          "Poser des questions sur les règles de la maison dès les premiers jours.",
          "Dire clairement ce que l’on attend et demander ce que la famille attend.",
          "Participer à la vie de famille, même quand on est fatigué.",
          "**Parler vite** d’un malaise, plutôt que de le laisser grandir.",
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
    related: ["cadeau", "mal-du-pays", "lyceens", "j1-ou-f1"],
    ctaTitle: "Tout un chapitre sur **la vie en famille d’accueil**",
    ctaText: "Types de familles, communication, malentendus, changer de famille, créer un lien durable : le chapitre 5 en détail.",
  },

  /* -------------------------------------------------------------------- MAL DU PAYS */
  {
    slug: "mal-du-pays",
    path: "/mal-du-pays/",
    short: "Mal du pays",
    footer: "Mal du pays",
    forWho: "Le mal du pays arrive, ou vous le redoutez : pour le jeune comme pour ses parents.",
    title: "Mal du pays pendant un échange aux USA : conseils aux parents",
    description:
      "Mal du pays (homesickness) pendant une année de High School aux États-Unis : comment le comprendre, à quelle fréquence se parler, comment les parents peuvent aider.",
    h1: "**Mal du pays** pendant un échange aux USA : comprendre et accompagner",
    lead:
      "Même les jeunes les plus motivés peuvent traverser un passage à vide, et leurs parents aussi. Mieux vaut **y avoir pensé avant le départ**.",
    tldr: [
      "Le **mal du pays** (homesickness) est fréquent et **ne signe pas un échec** de l’échange.",
      "Le **bon rythme de contact** est personnel : trop peu isole, trop envahit et freine l’intégration dans la famille d’accueil.",
      "Parler vite d’un malaise, à la famille d’accueil comme à l’organisme, évite qu’il s’installe.",
      "Pour les parents, **apprivoiser l’absence** fait partie du voyage.",
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
        h2: "Comprendre **le mal du pays**",
        body: [
          "Changer de pays, de langue, de rythme, de repères alimentaires et affectifs, tout cela en même temps, fatigue. Le mal du pays n’est pas une faiblesse : c’est une réaction normale à un grand changement. Il peut arriver tôt ou tard dans l’année, et en parler aide à le traverser.",
        ],
      },
      {
        id: "contact",
        h2: "Trouver **le bon rythme** de contact",
        body: [
          "Les messages et les visios facilitent le lien, mais un contact permanent peut empêcher le jeune de s’investir là où il est. Convenir d’un rythme avant le départ, et rester souple, aide tout le monde.",
        ],
      },
      {
        id: "parents",
        h2: "Le **rôle des parents**",
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
    ctaTitle: "Un chapitre pour **traverser le passage à vide**",
    ctaText: "Mal du pays, fréquence des contacts, conseils aux parents, visite sur place : le chapitre 8 du guide.",
  },

  /* ------------------------------------------------------------------ RETOUR */
  {
    slug: "retour-en-france",
    path: "/retour-en-france/",
    short: "Le retour",
    footer: "Le retour en France",
    forWho: "L’année se termine : choc du retour, retrouver sa place, reprendre le lycée en France.",
    title: "Reprendre le lycée après une année aux USA : choc du retour",
    description:
      "Reprendre le lycée en France après une année de High School aux USA : choc du retour, retrouver sa place à la maison, préparer sa rentrée, valoriser l’année.",
    h1: "Reprendre le lycée en France après une année aux USA : **le retour** et le **choc du retour**",
    lead:
      "Tout le monde prépare le départ. **Presque personne ne prépare le retour.** C’est pourtant là que beaucoup de familles se sentent le plus démunies.",
    tldr: [
      "Le **choc du retour** est courant : on rentre changé, la maison aussi, d’où ce sentiment d’entre-deux mondes.",
      "**Retrouver sa place** à la maison prend du temps, et les parents ont un rôle clé.",
      "Le retour dans le système scolaire français **se prépare avant le départ**.",
      "Une année aux États-Unis **se valorise** dans la suite des études comme dans un parcours professionnel.",
    ],
    worriesTitle: "Ce que **le dernier chapitre** du guide aborde",
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
        h2: "Pourquoi le retour est parfois **plus dur que le départ**",
        body: [
          "Au départ, tout est nouveau et tout le monde s’y attend. Au retour, on s’attend à retrouver son monde tel qu’on l’a laissé, mais le jeune a changé, et ses proches aussi. Ce décalage peut surprendre. Ce n’est pas un échec, c’est le dernier chapitre de l’aventure.",
        ],
      },
      {
        id: "famille",
        h2: "**Retrouver sa place** à la maison",
        body: [
          "Après une année d’autonomie, un jeune a pris de nouvelles habitudes et de nouvelles façons de voir. Les parents qui l’accueillent avec curiosité plutôt qu’avec des attentes précises facilitent sa réadaptation.",
        ],
      },
      {
        id: "reprendre-le-lycee",
        h2: "**Reprendre sa classe** : à anticiper avant de partir",
        body: [
          "La question de la classe de retour se règle **avant le départ**, pas au retour : renseignez-vous auprès du lycée français sur ce qu’il attend et sur la manière dont l’année sera prise en compte. Les règles de reconnaissance varient et évoluent : demandez la réponse **par écrit** à l’établissement.",
        ],
        list: [
          "**Prévenez le lycée** de votre projet avant le départ.",
          "**Conservez les documents scolaires** de l’année américaine : relevés de notes, descriptif des cours suivis, crédits.",
          "**Gardez le contact** avec un professeur ou le conseiller d’orientation pendant l’année.",
          "**Préparez la rentrée** : reprendre les cours en français demande un temps d’adaptation.",
        ],
      },
      {
        id: "valoriser",
        h2: "**Valoriser** l’année",
        body: [
          "Autonomie, aisance en anglais, adaptation : une année en High School américaine est un atout, à condition de savoir la raconter. Pour les études comme pour un futur CV, mieux vaut en garder des traces dès maintenant.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment reprendre le lycée en France après une année aux États-Unis ?",
        a: "Le plus important est de l’anticiper avant le départ : prévenir le lycée français, demander par écrit comment l’année sera prise en compte, et conserver les relevés de notes et le descriptif des cours suivis. Les règles de reconnaissance varient et évoluent, la réponse de l’établissement fait foi.",
      },
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
    ctaTitle: "Le retour, **ce chapitre qu’on oublie d’écrire**",
    ctaText: "Choc du retour, retour scolaire, valoriser l’année, rôle des parents : le chapitre 9 du guide.",
  },
  /* ----------------------------------------------------------------- BUDGET */
  {
    slug: "budget",
    path: "/budget-high-school-usa/",
    short: "Budget",
    footer: "Budget d’une année",
    forWho: "Vous voulez savoir quels frais prévoir, sans chiffres au hasard.",
    title: "Budget High School USA : quels frais prévoir, simulateur",
    description:
      "Quels postes de dépense prévoir pour une année de High School aux USA (J-1 ou F-1) ? La liste des frais et un simulateur à remplir avec vos propres devis.",
    notice: {
      title: "Ce n’est pas une vérité générale",
      text: "Cette page **ne donne aucun prix**, volontairement. Les montants d’une année de High School varient énormément d’une famille à l’autre : organisme, programme (J-1 ou F-1), école, durée, assurance, mode de vie sur place. Ce que vous lisez ici est une grille pour construire **votre** budget avec **vos** devis, pas un tarif de référence. Seuls les devis écrits de votre organisme ou de l’école font foi.",
    },
    h1: "Combien coûte une année de High School aux États-Unis ? **Ce qu’il faut budgéter**",
    lead:
      "Il n’existe pas de prix unique, et méfiez-vous des pages qui en annoncent un. Voici **les postes de dépense à prévoir**, ce qui change entre J-1 et F-1, et un simulateur à remplir avec vos propres devis.",
    tldr: [
      "**Ce n’est pas une vérité générale** : cette page ne donne aucun prix. Le coût varie selon l’organisme, le programme, l’école, l’assurance et la durée.",
      "Le **J-1** et le **F-1** n’ont pas la même logique : en J-1, le lycée public est sans frais de scolarité et la famille d’accueil est bénévole ; en F-1, l’école est privée ou publique payante, l’hébergement se fait en internat ou en famille rémunérée, et le **budget est bien plus élevé**.",
      "Le programme n’est pas tout : **assurance, voyage, santé, argent de poche, valise** et cadeaux pèsent aussi sur le total.",
      "Avant de signer, **demandez les frais par écrit** et la liste de ce qui est inclus ou non.",
    ],
    worriesTitle: "Où le livre détaille **chaque ligne du budget**",
    worries: [
      { worry: "Combien coûte un séjour en famille ?", answer: "Le coût financier d’un séjour en famille, J-1 comparé à F-1.", chapter: 1, label: "Le coût financier (J-1 vs F-1)", page: 29 },
      { worry: "Que contient le contrat d’inscription ?", answer: "Le contrat, les frais et ce qu’il faut vérifier avant de signer.", chapter: 1, label: "Contrat d’inscription et frais", page: 28 },
      { worry: "Que couvre l’assurance, et pas ?", answer: "Assurances et garanties : ce qui est inclus, ce qui ne l’est pas.", chapter: 1, label: "Assurances et garanties", page: 26 },
      { worry: "Et pour un séjour F-1 ?", answer: "Les aspects financiers d’un séjour F-1, sans langue de bois.", chapter: 2, label: "Les aspects financiers", page: 41 },
      { worry: "Existe-t-il des aides ?", answer: "Obtenir une bourse sportive en High School américaine.", chapter: 2, label: "Obtenir une bourse sportive", page: 41 },
      { worry: "Combien d’argent de poche prévoir ?", answer: "Argent de poche et budget global, carte bancaire.", chapter: 4, label: "Argent de poche et budget global", page: 64 },
    ],
    sections: [
      {
        id: "pas-un-prix-unique",
        h2: "Pourquoi il n’existe **pas de prix unique**",
        body: [
          "Deux familles qui partent la même année peuvent payer des sommes très différentes. Le type de visa, l’organisme, l’école, la durée, le niveau d’assurance et même le mode de vie du jeune font bouger le total. Un chiffre lu sur un site ne vous dit rien de **votre** situation : c’est pourquoi cette page vous donne une méthode, pas un prix.",
        ],
      },
      {
        id: "postes",
        h2: "Les **postes de dépense** à prévoir",
        body: ["Pour ne rien oublier, passez en revue ces lignes, que le livre détaille dans ses chapitres 1, 2 et 4 :"],
        list: [
          "**Le programme** : frais d’inscription et d’organisme (J-1), ou scolarité et hébergement (F-1).",
          "**L’assurance** : la couverture de base du programme, et un éventuel complément pour les soins dentaires, les sports à risque ou le rapatriement.",
          "**Le visa et les formalités** administratives de votre dossier.",
          "**Le voyage** aller-retour et les bagages.",
          "**La santé** avant le départ : vaccins, dossier de santé, médicaments.",
          "**L’argent de poche**, la carte bancaire et le téléphone américain.",
          "**L’équipement**, la valise et les cadeaux pour la famille d’accueil.",
          "**Les activités** (sport, clubs, sorties) : à demander à l’école ou à l’organisme.",
        ],
      },
      {
        id: "j1-f1",
        h2: "Où va le budget en **J-1** et en **F-1**",
        body: [
          "En J-1, le lycée est public, sans frais de scolarité, et la famille d’accueil est bénévole : la plus grande part du budget est constituée des frais du programme, de l’assurance, du voyage et des dépenses personnelles. En F-1, la scolarité en école privée ou publique payante et l’hébergement en internat ou en famille rémunérée s’ajoutent : le budget est nettement plus élevé, et il s’étale souvent sur plusieurs années.",
        ],
      },
      {
        id: "questions",
        h2: "Les questions à poser **avant de signer**",
        body: ["Un devis n’a de valeur que s’il est complet. Posez ces questions à l’organisme ou à l’école, et gardez les réponses par écrit :"],
        list: [
          "Quels frais sont déjà dans le contrat, et lesquels viendront en plus ?",
          "Qu’est-ce que l’assurance prend en charge, et qu’est-ce qui reste à ma charge ?",
          "Que se passe-t-il, financièrement, si le séjour s’arrête plus tôt ou si le placement ne fonctionne pas ?",
          "Quelles dépenses personnelles dois-je prévoir sur place, mois par mois ?",
        ],
      },
    ],
    faq: [
      {
        q: "Combien coûte une année de High School aux États-Unis ?",
        a: "Il n’existe pas de prix unique, et ce site n’en annonce volontairement aucun : le coût dépend du type de visa, de l’organisme, de l’école, de la durée et de l’assurance. Un séjour en J-1 (lycée public sans frais de scolarité, famille d’accueil bénévole) coûte nettement moins qu’un séjour en F-1 (école privée ou publique payante, internat ou famille rémunérée). Le plus fiable est de demander des devis écrits et de les comparer poste par poste.",
      },
      {
        q: "Quels frais prévoir en plus du programme ?",
        a: "L’assurance complémentaire éventuelle, le voyage aller-retour, la santé avant le départ (vaccins, dossier de santé, médicaments), l’argent de poche, la carte bancaire et le téléphone, l’équipement et la valise, les cadeaux pour la famille d’accueil et certaines activités.",
      },
      {
        q: "L’assurance santé est-elle comprise dans le programme ?",
        a: "La plupart des programmes incluent une couverture de base (hospitalisation, urgences, responsabilité civile), mais certains postes comme les soins dentaires, les sports à risque ou certaines franchises peuvent rester à votre charge. Demandez le détail écrit du contrat.",
      },
      {
        q: "Existe-t-il des bourses pour une High School américaine ?",
        a: "Quelques établissements privés proposent des aides financières sportives, totales ou partielles. Elles exigent un niveau sportif remarquable, un bon dossier scolaire et le maintien des notes et de la conduite.",
      },
    ],
    related: ["bourses", "assurance", "j1-ou-f1", "choisir-organisme"],
    ctaTitle: "Chaque ligne du budget, **expliquée** avant de signer",
    ctaText: "Coût du séjour, contrat et frais, assurances, aspects financiers du F-1, bourse sportive, argent de poche : les chapitres 1, 2 et 4 du guide.",
  },

  /* ------------------------------------------------------------------ BOURSES */
  {
    slug: "bourses",
    path: "/bourses-high-school-usa/",
    short: "Bourses et aides",
    footer: "Bourses et aides",
    forWho: "Vous cherchez comment financer tout ou partie de l’année.",
    title: "Bourses et aides pour une High School aux USA : où chercher",
    description:
      "Existe-t-il des bourses pour une année de High School aux États-Unis ? Aides sportives des écoles, organismes, collectivités : où demander, et ce qu’elles exigent.",
    notice: {
      tone: "info",
      title: "Aucun montant, aucune promesse",
      text: "Les aides **changent d’une année à l’autre** et dépendent de critères propres à chaque établissement ou organisme. Cette page vous dit **où chercher et quoi demander**, pas ce que vous obtiendrez. Vérifiez toujours les conditions à jour auprès de chaque source.",
    },
    h1: "Bourses et aides pour une année de High School aux États-Unis : **où chercher**",
    lead:
      "Une année aux États-Unis représente un budget, et certaines familles se demandent si elles peuvent être aidées. Oui, des aides existent, mais **elles ne sont pas automatiques**. Voici les pistes à explorer, dans l’ordre.",
    tldr: [
      "Les aides existent mais **ne sont pas automatiques** : elles dépendent d’un dossier, de critères et de dates limites.",
      "**Aides sportives** : quelques établissements privés proposent des aides totales ou partielles à des athlètes. Elles concernent donc surtout les séjours **F-1**.",
      "Une aide n’est pas un cadeau : elle exige **un niveau remarquable, de bons résultats scolaires, une bonne conduite**, puis le maintien des notes.",
      "Pour les autres pistes (organisme, collectivités, associations, employeur), **posez la question par écrit** : les dispositifs changent.",
    ],
    worriesTitle: "Où le livre parle **d’argent et d’aides**",
    worries: [
      { worry: "Peut-on obtenir une bourse sportive ?", answer: "Ce que couvrent les aides, quels sports sont recherchés, ce qu’elles exigent en retour.", chapter: 2, label: "Obtenir une bourse sportive en High School américaine", page: 41 },
      { worry: "Que coûte vraiment un séjour F-1 ?", answer: "Les aspects financiers d’un séjour F-1, sans langue de bois.", chapter: 2, label: "Les aspects financiers", page: 41 },
      { worry: "Que contient le prix d’un séjour en famille ?", answer: "Le coût financier d’un séjour en famille, J-1 comparé à F-1.", chapter: 1, label: "Le coût financier (J-1 vs F-1)", page: 29 },
      { worry: "Que vérifier avant de payer ?", answer: "Le contrat d’inscription et les frais qui y figurent.", chapter: 1, label: "Contrat d’inscription et frais", page: 28 },
      { worry: "Comment établir mon budget global ?", answer: "Argent de poche et budget global, du premier devis au dernier euro.", chapter: 4, label: "Argent de poche et budget global", page: 64 },
    ],
    sections: [
      {
        id: "aides-sportives",
        h2: "Les **aides sportives** des écoles privées",
        body: [
          "Quelques établissements privés aux États-Unis proposent des aides financières sportives, totales ou partielles, afin d’attirer des athlètes du monde entier. Elles peuvent couvrir les frais d’inscription, d’hébergement ou une partie du cursus. Basket, soccer, tennis, natation et athlétisme comptent parmi les disciplines les plus recherchées.",
          "Ces aides s’adressent à des élèves capables de **conjuguer performance sportive et résultats scolaires** : dossier sportif (vidéos, statistiques, recommandations d’entraîneurs), bon historique scolaire, conduite irréprochable. Elles supposent ensuite de **maintenir ses notes** et de s’impliquer sérieusement toute l’année.",
        ],
      },
      {
        id: "organisme",
        h2: "Les aides **liées à l’organisme**",
        body: ["Certains organismes proposent des réductions ou des aides sur critères (résultats, ressources, projet). Il n’y a pas de règle générale : la seule façon de savoir est de demander, par écrit, avant de vous engager."],
        list: [
          "Existe-t-il une aide ou une réduction, et à quelles conditions ?",
          "Quelle est la date limite pour déposer le dossier d’aide ?",
          "L’aide est-elle déduite du prix, ou remboursée plus tard ?",
          "Que se passe-t-il si le séjour s’arrête plus tôt ?",
        ],
      },
      {
        id: "autres-pistes",
        h2: "Les **autres pistes** à explorer",
        body: ["Selon votre situation, d’autres interlocuteurs peuvent contribuer ou conseiller :"],
        list: [
          "**Les collectivités** : mairie, département, région. Renseignez-vous auprès de leurs services jeunesse ou éducation.",
          "**Les associations et fondations** locales ou clubs-services de votre ville.",
          "**L’employeur** d’un parent, par exemple via un comité social et économique.",
          "**L’école ou le lycée** actuel du jeune, qui connaît parfois des dispositifs de mobilité.",
          "**Le paiement échelonné** : demandez à l’organisme s’il est possible d’étaler le règlement.",
        ],
      },
      {
        id: "calendrier",
        h2: "Quand demander ? **Le plus tôt possible**",
        body: [
          "Les dates limites des dossiers d’aide tombent souvent bien avant le départ, parfois avant même l’inscription définitive au programme. Dès que vous avez choisi le type de séjour (J-1 ou F-1), posez la question des aides, avant de signer.",
        ],
      },
    ],
    faq: [
      {
        q: "Existe-t-il des bourses pour une année de High School aux États-Unis ?",
        a: "Des aides existent, mais elles ne sont pas automatiques et leurs conditions changent. Quelques établissements privés américains proposent des aides sportives totales ou partielles ; certains organismes, collectivités ou associations peuvent aussi aider. Le plus fiable est de poser la question par écrit à chaque interlocuteur.",
      },
      {
        q: "Peut-on obtenir une bourse sportive en High School américaine ?",
        a: "Oui, dans certains établissements privés, ce qui concerne donc surtout les séjours en visa F-1. Il faut un niveau sportif remarquable, un bon historique scolaire et une bonne conduite, puis maintenir ses notes et son implication une fois sur place.",
      },
      {
        q: "Un jeune en visa J-1 peut-il avoir une bourse sportive ?",
        a: "En J-1, le jeune ne choisit ni l’État ni l’école : les aides sportives d’établissements privés concernent donc plutôt le F-1. Pour un J-1, renseignez-vous sur les aides proposées par l’organisme ou par les collectivités.",
      },
      {
        q: "Que couvre une aide financière sportive ?",
        a: "Selon les établissements, elle peut couvrir les frais d’inscription, l’hébergement ou une partie des sommes liées au cursus, en totalité ou partiellement.",
      },
    ],
    related: ["budget", "sport-etudes", "j1-ou-f1"],
    ctaTitle: "Avant de demander une aide, **lisez le chapitre F-1**",
    ctaText: "Profil, admission, aspects financiers, bourse sportive : les chapitres 1 et 2 du guide, avec les numéros de page.",
  },

  /* ------------------------------------------------------------ SANS ORGANISME */
  {
    slug: "sans-organisme",
    path: "/high-school-usa-sans-organisme/",
    short: "Sans organisme",
    footer: "Partir sans organisme",
    forWho: "Vous vous demandez si l’on peut organiser l’année soi-même.",
    title: "High School aux USA sans organisme : est-ce possible ?",
    description:
      "Peut-on partir en High School aux États-Unis sans organisme ? Ce qui est possible en J-1 et en F-1, ce qu’il faut gérer soi-même, et les questions à se poser avant.",
    notice: {
      tone: "info",
      title: "Les règles évoluent",
      text: "Les conditions de visa et d’admission **changent régulièrement**. Ce que vous lisez ici est un cadre général : vérifiez toujours auprès des **sources officielles** et de l’établissement avant de décider.",
    },
    h1: "High School aux USA **sans organisme** : est-ce possible ?",
    lead:
      "Pas d’organisme, pas de frais d’agence, mais aussi personne pour gérer le dossier à votre place. Cela dépend surtout du **visa**. Voici ce qui est possible, ce qu’il faut gérer soi-même, et les questions à vous poser.",
    tldr: [
      "En règle générale, le **visa J-1 passe par un organisme** agréé qui joue le rôle de sponsor : on ne l’organise pas soi-même.",
      "En **F-1**, l’élève candidate **directement auprès d’une école** habilitée : c’est la voie « sans organisme ».",
      "Sans organisme, **la famille gère elle-même** le dossier d’admission, le visa, l’assurance et le suivi sur place.",
      "Le **budget d’un F-1** est bien plus élevé que celui d’un J-1 : l’économie sur l’organisme ne change pas l’ordre de grandeur.",
    ],
    worriesTitle: "Où le livre traite de **l’organisation en direct**",
    worries: [
      { worry: "Que fait exactement un organisme ?", answer: "Le rôle de l’organisme et du sponsor, ce que vous perdez à vous en passer.", chapter: 1, label: "Le rôle de l’organisme et du sponsor", page: 19 },
      { worry: "Comment s’organise-t-on en F-1 sans organisme ?", answer: "La gestion administrative quand on s’occupe soi-même du dossier.", chapter: 2, label: "La gestion administrative sans organisme", page: 44 },
      { worry: "Comment se passe l’admission en école ?", answer: "La procédure d’admission pas à pas, du dossier à l’inscription.", chapter: 2, label: "La procédure d’admission pas à pas", page: 40 },
      { worry: "Qui s’occupe du jeune sur place ?", answer: "Assurances, encadrement et sécurité, puis la vie sur le campus américain.", chapter: 2, label: "Assurances, encadrement et sécurité", page: 45 },
      { worry: "Quelles démarches de visa ?", answer: "Les visas F-1 : programme académique privé et/ou internat.", chapter: 3, label: "Les visas F-1", page: 55 },
    ],
    sections: [
      {
        id: "role",
        h2: "Ce que fait **un organisme**",
        body: [
          "Un organisme gère le cadre du séjour : il propose un programme, accompagne le dossier, sélectionne des familles d’accueil, désigne un correspondant local qui suit le jeune sur place et reste l’interlocuteur en cas de difficulté. Dans le cas du visa J-1, il est aussi le sponsor du séjour.",
        ],
      },
      {
        id: "deux-voies",
        h2: "**Deux voies**, deux réponses",
        body: [
          "**Avec un visa J-1**, le séjour s’effectue dans le cadre d’un programme d’échange supervisé : l’organisme agréé est incontournable. Le jeune ne choisit ni l’État ni l’école et le séjour dure dix mois maximum.",
          "**Avec un visa F-1**, la scolarité se fait dans une école privée ou publique payante, que l’élève peut souvent choisir. La famille peut alors candidater directement auprès de l’établissement. L’hébergement se fait en internat ou en famille d’accueil rémunérée.",
        ],
      },
      {
        id: "soi-meme",
        h2: "Ce qu’il faut **gérer soi-même**",
        body: ["Sans organisme, ces tâches reviennent à la famille :"],
        list: [
          "**Le dossier d’admission** : bulletins, lettres, tests, échanges avec l’école.",
          "**Le visa** et les formalités administratives qui l’accompagnent.",
          "**L’assurance santé** : que couvre-t-elle, et que reste-t-il à votre charge ?",
          "**L’hébergement** : internat ou famille d’accueil rémunérée, avec les règles de chacun.",
          "**Le suivi sur place** : qui est joignable pour le jeune, de jour comme de nuit ?",
          "**Les imprévus** : problème de santé, difficulté relationnelle, retour anticipé.",
        ],
      },
      {
        id: "questions",
        h2: "Les questions à vous poser **avant de décider**",
        body: ["Partir sans organisme peut convenir à une famille organisée et disponible. Quelques questions aident à trancher :"],
        list: [
          "Avons-nous le temps et l’énergie de gérer un dossier administratif à l’international ?",
          "Qui, sur place, sera l’adulte de référence du jeune, et comment le joindre en urgence ?",
          "Le budget d’un séjour F-1 est-il réaliste pour nous, tout compris ?",
          "Notre jeune est-il assez autonome pour un internat ou une famille rémunérée ?",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on partir en High School aux USA en J-1 sans organisme ?",
        a: "En règle générale, non : le programme J-1 est un programme d’échange encadré, qui passe par un organisme agréé jouant le rôle de sponsor. Vérifiez les conditions à jour auprès d’un organisme et des sources officielles.",
      },
      {
        q: "Peut-on partir en visa F-1 sans organisme ?",
        a: "C’est possible : en F-1, l’élève candidate directement auprès d’une école habilitée, et la famille gère elle-même le dossier, l’assurance et le suivi. Le budget est nettement plus élevé qu’en J-1.",
      },
      {
        q: "Peut-on choisir son lycée sans organisme ?",
        a: "En F-1, le choix de l’établissement est souvent possible. En J-1, ni l’État ni l’école ne se choisissent, que l’on passe ou non par un organisme.",
      },
      {
        q: "Qui s’occupe de mon enfant sur place sans organisme ?",
        a: "Avec un organisme, un correspondant local assure le suivi. En direct, c’est l’école, l’internat ou la famille d’accueil qui est l’interlocuteur : demandez avant de partir qui est joignable en cas d’urgence, et comment.",
      },
    ],
    related: ["choisir-organisme", "j1-ou-f1", "budget"],
    ctaTitle: "Un chapitre sur **la gestion sans organisme**",
    ctaText: "Rôle de l’organisme, admission pas à pas, gestion administrative en direct, encadrement et sécurité : les chapitres 1 à 3 du guide.",
  },

  /* ------------------------------------------------------------ CHOISIR ORGANISME */
  {
    slug: "choisir-organisme",
    path: "/choisir-organisme-echange-scolaire-usa/",
    short: "Choisir son organisme",
    footer: "Choisir son organisme",
    forWho: "Vous comparez des organismes et voulez savoir quoi vérifier avant de payer.",
    title: "Choisir un organisme d’échange scolaire USA : 12 vérifications",
    description:
      "Comment choisir un organisme pour une année de High School aux États-Unis ? 12 vérifications avant de payer, et les signaux d’alerte à repérer dans un contrat.",
    notice: {
      tone: "info",
      title: "Des critères, pas de noms",
      text: "Cette page **ne classe et ne recommande aucun organisme** : elle vous donne une grille pour comparer **vous-même**. Les règles de visa et les pratiques des organismes évoluent, vérifiez toujours les informations à jour.",
    },
    h1: "Choisir un organisme d’échange scolaire aux USA : **12 vérifications avant de payer**",
    lead:
      "Le prix ne dit presque rien d’un organisme. Ce qui compte, c’est **ce qu’il fait quand ça se complique**. Voici les questions à poser, par écrit, avant de signer.",
    tldr: [
      "Pour le visa J-1, un organisme sérieux est **agréé comme sponsor** : demandez-le, et **vérifiez-le sur les sources officielles**.",
      "**Comparez les prestations, pas seulement le prix** : ce qui est inclus, l’assurance, le suivi sur place.",
      "**Lisez le contrat** avant de payer : frais, annulation, retour anticipé, changement de famille.",
      "Méfiez-vous des promesses de **placement garanti dans l’État de votre choix** : en J-1, ni l’État ni l’école ne se choisissent.",
    ],
    worriesTitle: "Où le livre vous aide **à comparer**",
    worries: [
      { worry: "Que fait un organisme, et un sponsor ?", answer: "Le rôle de l’organisme et du sponsor, expliqué simplement.", chapter: 1, label: "Le rôle de l’organisme et du sponsor", page: 19 },
      { worry: "Qui suit mon enfant sur place ?", answer: "Les correspondants régionaux et locaux, et ce qu’on peut en attendre.", chapter: 1, label: "Correspondants régionaux et locaux", page: 20 },
      { worry: "Comment choisir, concrètement ?", answer: "Les critères de choix d’un organisme.", chapter: 1, label: "Le choix de l’organisme", page: 21 },
      { worry: "Comment fonctionne le placement ?", answer: "Le dossier de placement, étape par étape.", chapter: 1, label: "Le dossier de placement", page: 23 },
      { worry: "Que dit le contrat ?", answer: "Contrat d’inscription et frais : ce qu’il faut lire à la loupe.", chapter: 1, label: "Contrat d’inscription et frais", page: 28 },
      { worry: "Quels signaux d’alerte repérer ?", answer: "Les red flags, avant de payer quoi que ce soit.", chapter: 1, label: "Les red flags", page: 32 },
    ],
    sections: [
      {
        id: "douze-verifications",
        h2: "Les **12 vérifications** avant de payer",
        body: ["Posez ces questions par écrit et gardez les réponses. Un organisme sérieux y répond sans difficulté."],
        list: [
          "**Agrément** : est-il agréé pour le programme J-1 lycée ? Sur quelle source officielle puis-je le vérifier ?",
          "**Reconnaissance** : appartient-il à une association professionnelle ou figure-t-il sur une liste de référence que je peux consulter ?",
          "**Prix** : que comprend exactement le tarif, ligne par ligne ?",
          "**Frais en plus** : quels frais viendront s’ajouter en cours d’année ?",
          "**Assurance** : qu’est-ce qui est couvert, et qu’est-ce qui ne l’est pas ?",
          "**Suivi local** : qui est le correspondant de mon enfant, comment le joindre, à quelle fréquence le voit-il ?",
          "**Placement** : comment la famille est-elle choisie, et que se passe-t-il si le placement ne fonctionne pas ?",
          "**Contrat** : que dit-il de l’annulation, du retour anticipé et du remboursement ?",
          "**Calendrier** : quelles sont les dates limites et les échéances de paiement ?",
          "**Démarches** : qui fait quoi pour le visa et les documents ?",
          "**Urgences** : qui contacter en cas de problème grave, y compris la nuit et le week-end ?",
          "**Retours d’expérience** : puis-je parler à des familles récentes qui sont passées par cet organisme ?",
        ],
      },
      {
        id: "signaux",
        h2: "Les **signaux d’alerte**",
        body: ["Sans accuser personne, certains signaux doivent vous faire ralentir :"],
        list: [
          "On vous promet un **placement garanti** dans l’État ou la ville de votre choix, alors qu’en J-1 ni l’État ni l’école ne se choisissent.",
          "On vous met la **pression pour signer ou payer vite**.",
          "Les **frais ne sont pas détaillés** par écrit.",
          "Aucun **correspondant local** n’est identifié.",
          "Le **contrat n’est pas fourni** avant le paiement.",
        ],
      },
      {
        id: "comparer",
        h2: "Comparer **deux devis** sur la même base",
        body: [
          "Deux tarifs ne sont comparables que si les prestations le sont. Mettez les devis côte à côte, ligne par ligne, et notez ce qui manque dans chacun. Pour calculer le budget complet, utilisez le simulateur de la page budget, en y ajoutant tous les frais hors programme.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment savoir si un organisme d’échange scolaire est sérieux ?",
        a: "Vérifiez qu’il est agréé pour le programme J-1 sur une source officielle, demandez un devis détaillé et le contrat par écrit avant de payer, identifiez son correspondant local, et parlez à des familles récentes. Un organisme sérieux répond clairement à toutes ces questions.",
      },
      {
        q: "Que doit contenir le contrat d’un organisme ?",
        a: "Les prestations incluses, le prix et son échéancier, l’assurance, les conditions d’annulation, de retour anticipé et de remboursement, et ce qui se passe si le placement ne fonctionne pas.",
      },
      {
        q: "Peut-on choisir son État avec un organisme ?",
        a: "En visa J-1, non : ni l’État ni l’école ne se choisissent. Méfiez-vous des promesses contraires. En F-1, le choix de l’établissement est souvent possible.",
      },
      {
        q: "Faut-il choisir l’organisme le moins cher ?",
        a: "Le prix seul ne dit pas grand-chose : comparez ce qui est inclus (assurance, suivi, démarches) et ce qui se passe en cas de difficulté, avant de comparer les montants.",
      },
    ],
    related: ["sans-organisme", "j1-ou-f1", "budget"],
    ctaTitle: "Tous **les critères et les red flags**, expliqués",
    ctaText: "Rôle de l’organisme, correspondants locaux, dossier de placement, contrat et frais, red flags : le chapitre 1 du guide.",
  },

  /* ------------------------------------------------------------------ CALENDRIER */
  {
    slug: "calendrier",
    path: "/calendrier-echange-scolaire-usa/",
    short: "Calendrier",
    footer: "Calendrier des démarches",
    forWho: "Vous voulez savoir dans quel ordre s’y prendre, et quand commencer.",
    title: "Échange scolaire USA : par quoi commencer et dans quel ordre",
    description:
      "Quand commencer à préparer une année de High School aux États-Unis ? Les étapes dans l’ordre, du choix du visa au départ, et ce qu’il ne faut pas oublier.",
    notice: {
      tone: "info",
      title: "Pas de dates, volontairement",
      text: "Les dates limites **varient selon l’organisme, l’école et le programme**. Cette page donne l’**ordre des étapes**, pas un calendrier officiel : demandez le calendrier écrit à votre interlocuteur dès le premier échange.",
    },
    h1: "Échange scolaire aux USA : **par quoi commencer** et dans quel ordre",
    lead:
      "S’y prendre à la dernière minute, c’est ajouter du stress inutile. Voici **les étapes dans l’ordre**, de la première décision au départ, pour ne rien oublier.",
    tldr: [
      "**Commencez plusieurs mois à l’avance** : plus vous anticipez, plus vous gardez le contrôle sur les démarches.",
      "La **première décision** est le type de séjour (J-1 ou F-1) : tout le reste (organisme, budget, calendrier) en découle.",
      "Le **dossier de placement** et le **test d’anglais** demandent du temps : ne les laissez pas pour la fin.",
      "**Demandez les dates limites par écrit** : elles dépendent de l’organisme et de l’école.",
    ],
    worriesTitle: "Chaque étape, **avec sa page dans le livre**",
    worries: [
      { worry: "1. Choisir le type de séjour", answer: "J-1 ou F-1 : les différences, les règles, le coût.", chapter: 1, label: "Types de séjours", page: 15 },
      { worry: "2. Monter le dossier de placement", answer: "Lettre, photos, résultats : ce qu’on attend du dossier.", chapter: 1, label: "Le dossier de placement", page: 23 },
      { worry: "3. Passer le test d’anglais", answer: "Le test obligatoire et comment s’y préparer.", chapter: 1, label: "Test d’anglais obligatoire", page: 25 },
      { worry: "4. Faire les démarches administratives", answer: "Visas J-1 et F-1 : formulaires et processus.", chapter: 3, label: "Les démarches administratives", page: 50 },
      { worry: "5. Préparer la santé", answer: "Vaccins, dossier de santé, médicaments.", chapter: 4, label: "Les vaccins et dossiers de santé", page: 61 },
      { worry: "6. Préparer le départ", answer: "Valises, carte bancaire, téléphone, cadeaux, voyage.", chapter: 4, label: "Préparer le départ", page: 59 },
    ],
    sections: [
      {
        id: "etapes",
        h2: "Les **étapes dans l’ordre**",
        body: ["Voici l’ordre logique dans lequel avancer. Les durées varient, mais l’ordre, lui, change peu :"],
        list: [
          "**Choisir le type de séjour** : visa J-1 ou F-1, famille d’accueil ou internat, avec le budget que cela implique.",
          "**Choisir l’organisme ou l’école** : comparer les prestations, lire le contrat, demander les dates limites.",
          "**Constituer le dossier de placement** : lettre de présentation, photos, résultats scolaires, et test d’anglais si exigé.",
          "**Signer le contrat** et suivre l’échéancier de paiement.",
          "**Faire les démarches de visa** : prévoir du temps, les délais varient.",
          "**Préparer la santé et l’assurance** : vaccins, dossier de santé, médicaments, couverture complémentaire éventuelle.",
          "**Préparer le départ** : budget d’argent de poche, carte bancaire, téléphone, valise, cadeaux pour la famille d’accueil, voyage.",
          "**Prévenir le lycée français** et préparer le retour : bulletins, descriptif des cours suivis.",
        ],
      },
      {
        id: "trop-tard",
        h2: "**Est-ce trop tard** si on a déjà commencé ?",
        body: [
          "Non. Même si le départ approche, il reste beaucoup à sécuriser : préparation mentale, communication, attentes réalistes, règles de l’école et de la famille d’accueil, et surtout le retour. Dans ce cas, **commencez par demander à votre interlocuteur la liste des dates limites restantes**, puis avancez dans l’ordre des étapes.",
        ],
      },
      {
        id: "erreurs",
        h2: "Les **oublis** les plus fréquents",
        body: ["Trois sujets passent souvent après tout le reste :"],
        list: [
          "**Le retour** : prévenir le lycée français et conserver les documents scolaires dès le départ.",
          "**L’assurance** : lire ce qu’elle couvre, avant d’en avoir besoin.",
          "**La communication** : convenir en famille du rythme des appels et des messages.",
        ],
      },
    ],
    faq: [
      {
        q: "Quand faut-il commencer à préparer une année de High School aux USA ?",
        a: "Plusieurs mois à l’avance, voire davantage si vous visez un F-1 avec dossier d’admission. Plus vous anticipez, plus vous gardez le contrôle ; s’y prendre à la dernière minute ajoute du stress et réduit les options. Demandez les dates limites de votre organisme ou de l’école dès le départ.",
      },
      {
        q: "Par quoi commencer pour un échange scolaire aux USA ?",
        a: "Par le choix du type de séjour : visa J-1 (famille d’accueil bénévole, lycée public, dix mois maximum) ou visa F-1 (école privée ou publique payante, internat ou famille rémunérée). Le budget, l’organisme et le calendrier en découlent.",
      },
      {
        q: "Est-il trop tard si nous avons déjà commencé les démarches ?",
        a: "Non, il reste beaucoup à sécuriser : préparation mentale, communication, règles de l’école et de la famille d’accueil, retour. Demandez la liste des dates limites restantes et avancez dans l’ordre des étapes.",
      },
    ],
    related: ["parents", "j1-ou-f1", "choisir-organisme"],
    ctaTitle: "Toutes les étapes, **avec les pages du livre**",
    ctaText: "Types de séjours, dossier de placement, test d’anglais, démarches, santé, valise, voyage : les chapitres 1 à 4 du guide.",
  },

  /* ------------------------------------------------------------------ ASSURANCE */
  {
    slug: "assurance",
    path: "/assurance-sante-echange-scolaire-usa/",
    short: "Assurance santé",
    footer: "Assurance santé",
    forWho: "Vous voulez savoir ce que couvre l’assurance et quoi vérifier.",
    title: "Assurance santé échange scolaire USA : que couvre-t-elle ?",
    description:
      "Assurance santé pendant une année de High School aux États-Unis : ce que couvre la couverture de base, ce qui peut rester à votre charge, et les questions à poser.",
    notice: {
      tone: "info",
      title: "Cette page ne remplace pas votre contrat",
      text: "Les garanties **varient d’un contrat à l’autre**. Ce qui compte, c’est le **détail écrit** de votre contrat d’assurance : lisez-le, et posez vos questions avant le départ.",
    },
    h1: "Assurance santé pendant l’échange scolaire aux USA : **ce qu’elle couvre vraiment**",
    lead:
      "Aux États-Unis, une simple visite aux urgences peut coûter plusieurs centaines de dollars. Mieux vaut savoir **ce que l’assurance prend en charge**, et ce qui reste à votre charge, avant d’en avoir besoin.",
    tldr: [
      "Les **frais médicaux aux États-Unis sont élevés** : une simple visite aux urgences peut coûter plusieurs centaines de dollars.",
      "La plupart des programmes incluent une **couverture de base** : hospitalisation, urgences, responsabilité civile.",
      "Certains postes peuvent **rester à votre charge** : soins dentaires, sports à risque, certaines franchises.",
      "Une **assurance complémentaire ou une option rapatriement** est souvent recommandée pour les séjours longs ou si le jeune pratique un sport régulièrement.",
    ],
    worriesTitle: "Où le livre traite de **la santé et des garanties**",
    worries: [
      { worry: "Que couvre l’assurance, que ne couvre-t-elle pas ?", answer: "Assurances et garanties : le détail de ce qui est inclus, et de ce qui ne l’est pas.", chapter: 1, label: "Assurances et garanties", page: 26 },
      { worry: "Et en F-1 ou sans organisme ?", answer: "Assurances, encadrement et sécurité pour un séjour F-1.", chapter: 2, label: "Assurances, encadrement et sécurité", page: 45 },
      { worry: "Quelles formalités de santé avant de partir ?", answer: "Les vaccins et dossiers de santé à préparer.", chapter: 4, label: "Les vaccins et dossiers de santé", page: 61 },
      { worry: "Et pour les médicaments ?", answer: "Médicaments et santé : ce qu’il faut anticiper.", chapter: 4, label: "Médicaments et santé", page: 62 },
      { worry: "Et en cas d’urgence ?", answer: "Retour anticipé et situations d’urgence.", chapter: 3, label: "Retour anticipé et situations d’urgence", page: 57 },
    ],
    sections: [
      {
        id: "base",
        h2: "Ce que couvre **la couverture de base**",
        body: [
          "La plupart des programmes incluent une couverture de base. Elle prend généralement en charge l’hospitalisation, les urgences et la responsabilité civile. C’est un socle : il ne dit pas tout, et chaque contrat a ses propres limites.",
        ],
      },
      {
        id: "a-charge",
        h2: "Ce qui peut **rester à votre charge**",
        body: ["Tous les postes ne sont pas forcément couverts. Vérifiez en particulier :"],
        list: [
          "**Les soins dentaires**.",
          "**Les sports à risque** : un jeune sportif doit lire cette ligne avec attention.",
          "**Certaines franchises** : la part qui reste à payer même quand l’assurance intervient.",
          "**Les médicaments** et les consultations courantes, selon le contrat.",
        ],
      },
      {
        id: "completer",
        h2: "Faut-il **compléter** l’assurance ?",
        body: [
          "Pour les séjours longs ou si le jeune pratique un sport régulièrement, une assurance complémentaire ou une option rapatriement est souvent recommandée. La décision dépend de ce que couvre déjà votre contrat : la meilleure méthode est de comparer ligne à ligne avant de décider.",
        ],
      },
      {
        id: "questions",
        h2: "Les questions à poser **avant de partir**",
        body: ["Demandez les réponses par écrit à votre organisme ou à l’école :"],
        list: [
          "Qu’est-ce qui est couvert, et qu’est-ce qui ne l’est pas ?",
          "Dois-je avancer les frais, ou l’assurance règle-t-elle directement ?",
          "Que faire concrètement en cas de soin urgent, de jour comme de nuit ?",
          "Le rapatriement est-il inclus ?",
          "Quels documents de santé et quelles vaccinations dois-je préparer ?",
        ],
      },
    ],
    faq: [
      {
        q: "L’assurance santé pour étudier aux États-Unis est-elle importante ?",
        a: "Oui. Sur place, les frais médicaux sont très élevés et une simple visite aux urgences peut vite coûter plusieurs centaines de dollars. Il faut donc savoir précisément ce que l’assurance prend en charge.",
      },
      {
        q: "L’assurance est-elle incluse dans le programme ?",
        a: "La plupart des programmes incluent une couverture de base, qui prend généralement en charge l’hospitalisation, les urgences et la responsabilité civile. Les détails varient d’un contrat à l’autre : demandez-les par écrit.",
      },
      {
        q: "Les soins dentaires et les sports à risque sont-ils couverts ?",
        a: "Pas forcément : les soins dentaires, les sports à risque ou certaines franchises peuvent rester à votre charge. Vérifiez ces lignes dans le contrat.",
      },
      {
        q: "Faut-il une assurance complémentaire ?",
        a: "Pour les séjours longs ou si le jeune pratique un sport régulièrement, une assurance complémentaire ou une option rapatriement est souvent recommandée. Comparez avec ce que couvre déjà votre contrat avant de décider.",
      },
    ],
    related: ["budget", "parents", "choisir-organisme"],
    ctaTitle: "Un chapitre pour **comprendre les garanties**",
    ctaText: "Assurances et garanties, encadrement et sécurité, vaccins et dossier de santé : les chapitres 1, 2 et 4 du guide.",
  },

  /* ----------------------------------------------------------------- QUEL LIVRE */
  {
    slug: "quel-livre",
    path: "/quel-livre-echange-scolaire-usa/",
    short: "Quel livre lire",
    footer: "Quel livre avant de partir ?",
    forWho: "Vous cherchez un livre ou un guide avant de partir.",
    title: "Quel livre lire avant une année de High School aux USA ?",
    description:
      "Livre, brochure ou site : que lire avant une année de High School aux États-Unis ? Ce qu’un bon guide doit couvrir, et le choix entre broché et Kindle.",
    h1: "Quel livre lire avant une année de High School aux États-Unis ? **Ce qu’un bon guide doit couvrir**",
    lead:
      "Brochure d’organisme, site web, livre : les sources sont nombreuses, et **elles n’ont pas toutes le même objectif**. Voici comment choisir, et ce qu’un guide doit couvrir pour vraiment vous servir.",
    tldr: [
      "Une **brochure d’organisme** présente un programme ; un **guide** vous aide à comparer, à anticiper et à comprendre l’année entière.",
      "Un bon guide couvre **l’avant, le pendant et l’après** : choix du séjour, démarches, vie sur place, retour.",
      "Il doit parler **des moments difficiles** autant que des réussites, avec des solutions.",
      "**Broché ou Kindle** : le broché se prête à l’annotation, le Kindle se lit partout, sur téléphone ou tablette.",
    ],
    worriesTitle: "Ce qu’un bon guide doit couvrir, **et où le livre le fait**",
    worries: [
      { worry: "Choisir entre J-1 et F-1", answer: "Les types de séjours, leurs règles, leurs coûts.", chapter: 1, label: "Choisir le type de séjour", page: 13 },
      { worry: "Les démarches et le visa", answer: "Formulaires, processus, refus de visa, cas particuliers.", chapter: 3, label: "Les démarches administratives", page: 50 },
      { worry: "Préparer le départ", answer: "Santé, budget, valise, téléphone, voyage.", chapter: 4, label: "Préparer le départ", page: 59 },
      { worry: "La famille d’accueil", answer: "Types de familles, communication, changer de famille.", chapter: 5, label: "La vie en famille d’accueil", page: 67 },
      { worry: "Le lycée et la vie lycéenne", answer: "Système scolaire, notes, crédits, amis, activités.", chapter: 6, label: "La High School et son environnement", page: 90 },
      { worry: "Le mal du pays et le retour", answer: "Garder le lien, choc du retour, retour scolaire.", chapter: 8, label: "Entre deux mondes", page: 120 },
    ],
    sections: [
      {
        id: "livre-brochure-site",
        h2: "Livre, brochure ou site : **ce que chacun apporte**",
        body: [
          "Une brochure d’organisme décrit son programme : c’est utile pour comparer des offres, mais elle ne remplace pas une vision d’ensemble. Un site web peut répondre à une question précise. Un livre permet de suivre toute l’année, du choix du séjour au retour, dans l’ordre.",
        ],
      },
      {
        id: "bon-guide",
        h2: "Ce qu’un **bon guide** doit couvrir",
        body: ["Avant d’acheter, vérifiez que le sommaire couvre au moins :"],
        list: [
          "**Le choix du séjour** : J-1, F-1, famille d’accueil, internat, avec les coûts.",
          "**L’organisme** : son rôle, comment le choisir, quels signaux d’alerte repérer.",
          "**Les démarches** : visa, assurance, santé, budget, valise.",
          "**La vie sur place** : famille d’accueil, école, amis, activités.",
          "**Le mal du pays** et le lien avec la famille.",
          "**Le retour**, trop souvent oublié.",
        ],
      },
      {
        id: "le-livre",
        h2: "Le livre de **Stéphanie Oyarsabal**",
        body: [
          "« Réussir son année de High School aux États-Unis » compte 145 pages et 10 chapitres. Il est écrit par une maman dont les deux fils sont partis, l’un en visa J-1 en famille d’accueil, l’autre en visa F-1 en internat sport-études. Ce n’est pas un livre d’organisme : son objectif est de préparer les familles, pas de vendre un séjour. Vous pouvez en lire les premières pages gratuitement avant d’acheter.",
        ],
      },
      {
        id: "formats",
        h2: "**Broché ou Kindle** ?",
        body: [
          "Le broché est idéal pour annoter et surligner. La version Kindle se lit sur téléphone, tablette ou liseuse, partout et au rythme souhaité. Les deux se trouvent sur Amazon.fr, qui gère le prix, le paiement et la livraison.",
        ],
      },
    ],
    faq: [
      {
        q: "Existe-t-il un guide en français pour préparer une année de High School aux États-Unis ?",
        a: "Oui : « Réussir son année de High School aux États-Unis » de Stéphanie Oyarsabal, en broché et en Kindle sur Amazon.fr, s’adresse aux lycéens et à leurs parents et couvre l’avant, le pendant et l’après. D’autres sources existent (brochures d’organismes, sites, forums) : comparez ce que chacune couvre.",
      },
      {
        q: "Un livre est-il utile si l’on part avec un organisme ?",
        a: "Oui. L’organisme gère le cadre, mais pas tous les détails du quotidien. Un guide aide à comprendre les règles, anticiper les situations classiques et savoir quoi faire si ça se complique.",
      },
      {
        q: "Ce livre est-il pour les parents ou pour les lycéens ?",
        a: "Pour les deux. Les parents y trouvent un plan clair et rassurant, les lycéens des repères concrets sur la vie sur place.",
      },
      {
        q: "Peut-on lire un extrait avant d’acheter ?",
        a: "Oui. La couverture, le sommaire et les premières pages sont en lecture libre sur la page « Extrait gratuit », sans compte ni e-mail.",
      },
    ],
    related: ["parents", "lyceens", "j1-ou-f1"],
    ctaTitle: "Le guide que **j’aurais voulu avoir** avant leur départ",
    ctaText: "145 pages, 10 chapitres, avant, pendant et après l’année aux États-Unis. Disponible en broché et en Kindle sur Amazon.fr.",
  },

  /* ------------------------------------------------------------------ NIVEAU */
  {
    slug: "niveau",
    path: "/lycee-americain-vs-francais-niveau/",
    short: "Niveau et notes",
    footer: "Lycée américain, niveau et notes",
    forWho: "Vous vous demandez si le niveau sera plus facile ou plus dur, et comment on y est noté.",
    title: "Lycée américain ou français : niveau, notes, crédits, GPA",
    description:
      "Le lycée américain est-il plus facile ou plus difficile ? Quatre ans de High School, notes de A à F, crédits, GPA, choix des cours et équivalence au retour.",
    notice: {
      tone: "info",
      title: "Pas de réponse unique",
      text: "Le fonctionnement **varie selon l’État et l’établissement** : nombre de crédits, cours proposés, système de notation. Il n’existe pas de conversion officielle automatique avec les classes françaises : **demandez-la au lycée** concerné.",
    },
    h1: "Lycée américain ou français : **le niveau**, les notes et les crédits",
    lead:
      "« Est-ce plus facile là-bas ? » est la question que tous les parents posent. La vraie réponse est : **ça dépend de l’école et des cours choisis**. Voici comment fonctionne une High School américaine, pour savoir à quoi s’attendre.",
    tldr: [
      "Le lycée américain dure **quatre ans** (de la 9th à la 12th grade), contre trois pour le lycée français.",
      "Les élèves sont notés par **lettres, de A à F**, accumulent des **crédits** et voient leur moyenne exprimée en **GPA**.",
      "Les cours se **choisissent en partie** : matières obligatoires et options, donc un emploi du temps personnalisé.",
      "Le niveau **dépend de l’établissement et des cours choisis** : ni « plus facile », ni « plus difficile » d’office.",
    ],
    worriesTitle: "Où le livre explique **le système scolaire américain**",
    worries: [
      { worry: "Comment est organisé le système scolaire ?", answer: "Le système scolaire américain, expliqué simplement.", chapter: 6, label: "Le système scolaire américain", page: 92 },
      { worry: "Le niveau est-il comparable à l’Europe ?", answer: "Le niveau scolaire comparé à l’Europe, sans idée reçue.", chapter: 6, label: "Niveau scolaire comparé à l’Europe", page: 94 },
      { worry: "Comment fonctionnent notes et crédits ?", answer: "Les notes et les crédits, du premier cours au diplôme.", chapter: 6, label: "Les notes et les crédits", page: 95 },
      { worry: "Comment se passent examens et devoirs ?", answer: "Les examens et devoirs, au quotidien.", chapter: 6, label: "Les examens et devoirs", page: 96 },
      { worry: "Peut-on choisir ses cours ?", answer: "Le choix des cours et un emploi du temps type.", chapter: 6, label: "Le choix des cours", page: 97 },
      { worry: "Peut-on cumuler avec un diplôme ?", answer: "Cumuler un échange scolaire et un Dual Diploma.", chapter: 6, label: "Cumuler échange et Dual Diploma", page: 102 },
    ],
    sections: [
      {
        id: "quatre-ans",
        h2: "**Quatre ans**, quatre classes",
        body: [
          "Une High School américaine couvre quatre niveaux, chacun avec un nom d’usage. Les âges ci-dessous sont indicatifs :",
        ],
        list: [
          "**9th grade (freshman)** : en général 14-15 ans.",
          "**10th grade (sophomore)** : en général 15-16 ans.",
          "**11th grade (junior)** : en général 16-17 ans.",
          "**12th grade (senior)** : en général 17-18 ans, dernière année avant le diploma.",
        ],
      },
      {
        id: "notes-credits",
        h2: "Notes, **crédits et GPA** : comment ça marche",
        body: [
          "Les travaux et les cours sont notés par **lettres, de A à F**. Chaque cours validé rapporte des **crédits**, qu’il faut accumuler pour obtenir le diploma. La moyenne générale est exprimée en **GPA** (grade point average). Les règles précises, notamment le nombre de crédits exigés, **varient selon l’État et l’établissement**.",
        ],
      },
      {
        id: "choix-cours",
        h2: "**Choisir ses cours**, un emploi du temps sur mesure",
        body: [
          "Contrairement à un lycée français, l’élève compose en partie son emploi du temps : des matières obligatoires, et des options à choisir. Certaines écoles proposent des cours plus exigeants. C’est l’une des raisons pour lesquelles le niveau varie d’un élève, et d’une école, à l’autre.",
        ],
      },
      {
        id: "niveau",
        h2: "Plus facile ou plus difficile ? **Ça dépend**",
        body: [
          "Un élève qui choisit des cours exigeants dans une école ambitieuse peut travailler beaucoup. Un autre, dans un cadre plus détendu, peut vivre une année plus légère. Le plus important n’est pas de comparer les niveaux, mais de **savoir ce qu’on attend de soi** : le livre détaille le système, les examens, les devoirs et le rythme d’une semaine type.",
        ],
      },
      {
        id: "retour",
        h2: "Et **au retour** : l’équivalence",
        body: [
          "Il n’existe pas de correspondance automatique entre une année américaine et une classe française. Renseignez-vous **avant le départ** auprès du lycée français, gardez vos relevés de notes et le descriptif des cours suivis, et lisez la page sur le retour en France.",
        ],
      },
    ],
    faq: [
      {
        q: "Le lycée américain est-il plus facile que le lycée français ?",
        a: "Cela dépend de l’établissement et des cours choisis : il n’y a pas de réponse générale. Les élèves composent en partie leur emploi du temps, donc le niveau d’exigence varie d’un élève à l’autre.",
      },
      {
        q: "Combien d’années dure une High School américaine ?",
        a: "Quatre ans, de la 9th grade (freshman) à la 12th grade (senior), contre trois ans pour le lycée français.",
      },
      {
        q: "Qu’est-ce que le GPA ?",
        a: "Le GPA (grade point average) est la moyenne générale d’un élève, calculée à partir de ses notes en lettres, de A à F. Les modalités exactes varient selon l’établissement.",
      },
      {
        q: "L’année aux États-Unis est-elle reconnue en France ?",
        a: "Il n’existe pas de règle automatique : renseignez-vous avant le départ auprès du lycée français, demandez la réponse par écrit et conservez relevés de notes et descriptif des cours.",
      },
    ],
    related: ["lyceens", "retour-en-france", "j1-ou-f1"],
    ctaTitle: "Un chapitre sur **la High School et son environnement**",
    ctaText: "Système scolaire, notes et crédits, examens, choix des cours, emploi du temps type, Dual Diploma : le chapitre 6 du guide.",
  },

  /* ------------------------------------------------------------------ VALISE */
  {
    slug: "valise",
    path: "/valise-echange-scolaire-usa/",
    short: "Valise",
    footer: "Que mettre dans sa valise",
    forWho: "Vous préparez le départ : valise, santé, banque, téléphone.",
    title: "Valise pour un an de High School aux USA : la liste",
    description:
      "Que mettre dans la valise pour une année de High School aux États-Unis ? Documents, santé, vêtements, électronique, ce qu’il vaut mieux acheter sur place.",
    notice: {
      tone: "info",
      title: "Une liste à adapter",
      text: "La valise dépend de **la région, de la saison, de l’école et de la compagnie aérienne**. Vérifiez la franchise de bagages de votre billet et le règlement de l’école (dress code) avant de faire les achats.",
    },
    h1: "Que mettre **dans la valise** pour un an de High School aux États-Unis ?",
    lead:
      "Un an dans un autre pays tient rarement dans une valise, il faut donc **choisir**. Voici l’essentiel à emporter, ce qui voyage en cabine, et ce qu’il vaut mieux acheter sur place.",
    tldr: [
      "**Documents et médicaments dans le bagage cabine** : ne jamais les laisser en soute.",
      "Les **vêtements dépendent de l’école et de la région** : lisez le dress code avant d’acheter, et prévoyez du climat.",
      "**Prises et tension électrique** : vérifiez la compatibilité de vos appareils et prévoyez un adaptateur.",
      "Beaucoup d’articles **s’achètent sur place** : ne chargez pas la valise du superflu.",
    ],
    worriesTitle: "Où le livre vous aide **à préparer le départ**",
    worries: [
      { worry: "Que prendre, que laisser ?", answer: "Articles pratiques à emporter, sans surcharger.", chapter: 4, label: "Articles pratiques à emporter", page: 63 },
      { worry: "Comment gérer le poids et les valises ?", answer: "Gérer les valises, du départ à l’arrivée.", chapter: 4, label: "Gérer les valises", page: 64 },
      { worry: "Que faire pour les médicaments ?", answer: "Médicaments et santé : ce qu’il faut anticiper.", chapter: 4, label: "Médicaments et santé", page: 62 },
      { worry: "Quelle carte bancaire emporter ?", answer: "Carte bancaire : comment payer sur place.", chapter: 4, label: "Carte bancaire", page: 62 },
      { worry: "Faut-il un numéro américain ?", answer: "Numéro de téléphone américain : pourquoi et comment.", chapter: 4, label: "Numéro de téléphone américain", page: 63 },
      { worry: "Que offrir à la famille d’accueil ?", answer: "Cadeaux pour la famille d’accueil.", chapter: 4, label: "Cadeaux pour la famille d’accueil", page: 64 },
    ],
    sections: [
      {
        id: "cabine",
        h2: "Dans le **bagage cabine** : l’essentiel",
        body: ["Tout ce qui est indispensable ou difficile à remplacer voyage avec le jeune :"],
        list: [
          "**Documents** : passeport, visa, papiers du programme, lettres d’accueil, assurance.",
          "**Santé** : dossier de santé, vaccins à jour, **médicaments** avec ordonnance.",
          "**Argent** : carte bancaire, un peu de liquide.",
          "**Électronique** : téléphone, chargeur, batterie externe.",
          "**Contacts** : coordonnées de la famille d’accueil, de l’organisme et du correspondant local, sur papier.",
        ],
      },
      {
        id: "vetements",
        h2: "**Vêtements** : selon le dress code et la région",
        body: [
          "Les États-Unis sont vastes : le climat varie énormément selon l’État. Chaque école a aussi son **dress code**, qui précise ce qu’on peut porter ou non. Attendez de connaître votre école et votre région avant d’acheter trop de vêtements.",
        ],
      },
      {
        id: "electronique",
        h2: "**Électronique** : prises et tension",
        body: [
          "Les prises et la tension électrique ne sont pas les mêmes qu’en France. Vérifiez que vos appareils acceptent la tension locale, et emportez un adaptateur de prise. Pour les chargeurs et la plupart des appareils récents, c’est souvent simple, mais lisez l’étiquette avant de partir.",
        ],
      },
      {
        id: "sur-place",
        h2: "Ce qu’il vaut mieux **acheter sur place**",
        body: [
          "Produits d’hygiène, fournitures scolaires, une partie des vêtements : beaucoup d’articles se trouvent sur place. Votre famille d’accueil pourra vous conseiller. Cela libère de la place, et du poids, dans la valise.",
        ],
      },
      {
        id: "poids",
        h2: "**Poids et nombre de valises**",
        body: [
          "Chaque compagnie fixe sa propre franchise de bagages, avec des règles différentes pour les vols vers les États-Unis. Vérifiez-la sur votre billet, et prévoyez de la marge pour les cadeaux et les achats du retour.",
        ],
      },
    ],
    faq: [
      {
        q: "Que mettre dans la valise pour une année de High School aux États-Unis ?",
        a: "Documents, médicaments et électronique en bagage cabine ; vêtements adaptés au climat et au dress code de l’école ; adaptateur de prise ; cadeaux légers pour la famille d’accueil. Beaucoup d’articles (hygiène, fournitures, une partie des vêtements) peuvent s’acheter sur place.",
      },
      {
        q: "Doit-on emporter des médicaments ?",
        a: "Si le jeune suit un traitement, anticipez avant le départ : emportez ses médicaments avec l’ordonnance en bagage cabine et renseignez-vous sur les règles applicables. Le dossier de santé et les vaccinations se préparent en amont.",
      },
      {
        q: "Combien de valises peut-on emporter ?",
        a: "Cela dépend de la compagnie aérienne et du billet : vérifiez la franchise de bagages avant de préparer la valise.",
      },
      {
        q: "Faut-il emporter un uniforme ou des vêtements particuliers ?",
        a: "Cela dépend de l’école : lisez son dress code avant d’acheter des vêtements, et demandez conseil à la famille d’accueil ou à l’organisme.",
      },
    ],
    related: ["calendrier", "budget", "assurance", "cadeau"],
    ctaTitle: "Le chapitre **Préparer le départ**, page par page",
    ctaText: "Anglais, vaccins, médicaments, carte bancaire, téléphone, valises, cadeaux, voyage : le chapitre 4 du guide.",
  },

  /* ------------------------------------------------------------------ CADEAU */
  {
    slug: "cadeau",
    path: "/cadeau-famille-d-accueil-usa/",
    short: "Cadeau famille d’accueil",
    footer: "Cadeau pour la famille d’accueil",
    forWho: "Vous cherchez quoi offrir à la famille d’accueil, sans alourdir la valise.",
    title: "Cadeau pour sa famille d’accueil aux USA : idées légères",
    description:
      "Quel cadeau offrir à sa famille d’accueil américaine ? Des idées légères pour la valise, les précautions à prendre pour les produits alimentaires, et quand l’offrir.",
    notice: {
      tone: "info",
      title: "Un geste, pas une obligation",
      text: "Offrir un cadeau est **un geste d’attention, pas une règle**. Les familles d’accueil sont bénévoles en J-1 et apprécient surtout l’intention. Pour les **produits alimentaires**, renseignez-vous sur les règles de douane avant le départ.",
    },
    h1: "Quel **cadeau** offrir à sa famille d’accueil aux États-Unis ?",
    lead:
      "À l’arrivée, on veut dire merci sans savoir comment. Pas besoin de cadeau coûteux : voici **des idées légères**, faciles à glisser dans une valise, et les précautions à prendre.",
    tldr: [
      "Le cadeau est **un geste d’attention** : l’intention compte plus que le prix.",
      "Privilégiez des objets **légers et peu fragiles**, qui racontent **votre région ou votre pays**.",
      "Pour les **produits alimentaires**, vérifiez les règles de douane avant de les mettre dans la valise.",
      "Pensez à **tous les membres de la famille**, notamment les enfants s’il y en a.",
    ],
    worriesTitle: "Où le livre parle **des cadeaux et de la famille**",
    worries: [
      { worry: "Que offrir à la famille d’accueil ?", answer: "Cadeaux pour la famille d’accueil : idées et précautions.", chapter: 4, label: "Cadeaux pour la famille d’accueil", page: 64 },
      { worry: "Comment gérer le poids de la valise ?", answer: "Gérer les valises sans la surcharger.", chapter: 4, label: "Gérer les valises", page: 64 },
      { worry: "Comment bien démarrer avec la famille ?", answer: "Communication et attentes, dès les premiers jours.", chapter: 5, label: "Communication et attentes", page: 77 },
      { worry: "Comment créer un lien durable ?", answer: "Créer un lien durable avec sa famille d’accueil.", chapter: 5, label: "Créer un lien durable", page: 85 },
    ],
    sections: [
      {
        id: "faut-il",
        h2: "**Faut-il** offrir un cadeau ?",
        body: [
          "Rien ne l’impose, mais c’est une jolie façon de remercier une famille qui ouvre sa maison. Les familles J-1 participent bénévolement au programme, avec une vraie envie de partage culturel : un petit présent venu de chez vous prolonge cet échange.",
        ],
      },
      {
        id: "idees",
        h2: "Des **idées légères** pour la valise",
        body: ["Quelques pistes, à adapter à la famille et à la place dont vous disposez :"],
        list: [
          "**Un objet qui raconte votre région** : artisanat, carte illustrée, petit souvenir de votre ville.",
          "**Un livre illustré ou un album photo** sur votre pays ou votre région.",
          "**Un petit cadeau pour chaque enfant** de la famille, s’il y en a.",
          "**Une spécialité non périssable**, sous réserve des règles de douane.",
          "**Un mot écrit à la main** : léger, personnel, et souvent le plus apprécié.",
        ],
      },
      {
        id: "precautions",
        h2: "Les **précautions** à prendre",
        body: [
          "Certains produits alimentaires sont soumis à des restrictions à l’entrée aux États-Unis : renseignez-vous avant de les emballer. Évitez aussi le très fragile et le très lourd, et gardez de la marge de poids dans la valise.",
        ],
      },
      {
        id: "quand",
        h2: "**Quand** l’offrir ?",
        body: [
          "Beaucoup de jeunes l’offrent dans les premiers jours, quand la famille vient les accueillir ou une fois installés. Il n’y a pas de règle : l’important est de le faire naturellement.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel cadeau offrir à sa famille d’accueil aux États-Unis ?",
        a: "Un objet léger qui raconte votre région ou votre pays, un petit cadeau pour chaque enfant de la famille, un livre ou un album photo, et un mot écrit à la main. Pour tout produit alimentaire, vérifiez d’abord les règles de douane.",
      },
      {
        q: "Un cadeau est-il obligatoire ?",
        a: "Non, c’est un geste d’attention. Les familles J-1 sont bénévoles et apprécient surtout l’intention.",
      },
      {
        q: "Peut-on emporter des produits alimentaires ?",
        a: "Certains produits alimentaires sont soumis à des restrictions : renseignez-vous sur les règles de douane avant de les mettre dans la valise.",
      },
      {
        q: "Combien dépenser pour un cadeau de famille d’accueil ?",
        a: "Il n’y a pas de montant attendu : un objet simple et personnel vaut mieux qu’un cadeau coûteux. Intégrez-le à votre budget global, sans en faire un poste important.",
      },
    ],
    related: ["famille-d-accueil", "valise", "lyceens"],
    ctaTitle: "Un chapitre pour **bien démarrer avec la famille**",
    ctaText: "Cadeaux, communication, malentendus, créer un lien durable : les chapitres 4 et 5 du guide.",
  },

];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug)!;
