import type { Guide } from "./guides";

// Pages écrites pour les lycéens (tutoiement), sur les questions qu'ils tapent eux-mêmes.
// Garde-fous : aucun nom d'organisme, aucune règle de visa figée, aucun prix. À faire relire par l'autrice.
export const guidesJeunes: Guide[] = [
  /* ------------------------------------------------- LETTRE À LA FAMILLE D'ACCUEIL */
  {
    slug: "lettre-famille",
    path: "/lettre-famille-d-accueil-exemple/",
    short: "Lettre à la famille d’accueil",
    footer: "Lettre à sa famille d’accueil",
    forWho: "Tu dois écrire ta lettre de présentation (« Dear host family »).",
    title: "Lettre à sa famille d’accueil : exemple et conseils (Dear Host Family)",
    description:
      "Comment écrire ta lettre « Dear Host Family » pour ton échange aux USA : structure, exemple en anglais, erreurs à éviter, et ce qu’une famille d’accueil a vraiment envie de lire.",
    h1: "Ta lettre à la famille d’accueil : **un exemple et la méthode**",
    lead:
      "Dans ton dossier, il y a souvent une lettre « Dear Host Family ». C’est **la première chose que ta future famille lira de toi**. Pas besoin d’un anglais parfait : il faut une lettre **sincère et concrète**.",
    tu: true,
    notice: {
      tone: "info",
      title: "Vérifie le format demandé",
      text: "Longueur, langue, photos, date limite : **chaque organisme a ses consignes**. Lis-les avant d’écrire, et respecte-les à la lettre.",
    },
    tldr: [
      "Une famille d’accueil bénévole **choisit un jeune, pas un dossier** : ta lettre doit montrer **qui tu es au quotidien**.",
      "Sois **concret** : « je joue au foot le mercredi » vaut mieux que « j’aime le sport ».",
      "Parle de ta **famille**, de tes **habitudes**, de ce que tu as **envie de partager** avec eux, et de ce qui t’inquiète un peu.",
      "**Écris-la toi-même**, puis fais-la relire. Une lettre trop parfaite, recopiée ou traduite par une machine, ça se voit.",
    ],
    worriesTitle: "Ce que tu te demandes, et **où le livre en parle**",
    worries: [
      { worry: "À quoi sert vraiment ce dossier ?", answer: "Ce que contient le dossier de placement et comment il est lu.", chapter: 1, label: "Le dossier de placement", page: 23 },
      { worry: "Qui sont ces familles ?", answer: "Les différents types de familles d’accueil, en ville comme à la campagne.", chapter: 5, label: "Les différents types de familles", page: 68 },
      { worry: "Est-ce que j’aurai forcément une famille ?", answer: "Ce qui se passe quand le placement tarde.", chapter: 1, label: "Est-ce que tous les jeunes auront une famille d’accueil ?", page: 30 },
      { worry: "Comment bien démarrer avec eux ?", answer: "Communication et attentes, dès les premiers jours.", chapter: 5, label: "Communication et attentes", page: 77 },
    ],
    sections: [
      {
        id: "ce-quils-cherchent",
        h2: "Ce qu’une famille d’accueil **a envie de lire**",
        body: [
          "Une famille d’accueil bénévole ouvre sa maison pendant des mois. Elle ne cherche pas un élève brillant : elle se demande **comment ce sera de vivre avec toi**. Est-ce que tu vas participer aux repas, aux sorties, aux tâches de la maison ? Est-ce que tu as envie de découvrir leur vie, ou seulement l’Amérique des films ?",
          "Ta lettre répond à ces questions sans les poser. C’est pour ça que les détails du quotidien comptent plus que les grandes phrases.",
        ],
      },
      {
        id: "structure",
        h2: "La **structure** en cinq parties",
        body: ["Tu peux suivre cet ordre, il marche dans la plupart des cas :"],
        list: [
          "**Qui tu es** : prénom, âge, ville, classe, en deux ou trois phrases.",
          "**Ta famille** : parents, frères et sœurs, animaux, comment ça se passe à la maison (repas, week-ends, tâches).",
          "**Ce que tu fais de ton temps** : sports, musique, amis, lectures, avec des exemples précis.",
          "**Pourquoi tu pars** : une vraie raison à toi, pas « pour améliorer mon anglais » tout seul.",
          "**Ce que tu veux partager avec eux** : une recette, un jeu, une tradition, et ce que tu as hâte de découvrir chez eux.",
        ],
      },
      {
        id: "exemple",
        h2: "Un **exemple** à adapter (pas à recopier)",
        body: [
          "Dear Host Family, my name is Léa, I am 15 and I live near Lyon, in France, with my parents, my little brother Tom and our cat. At home, we always have dinner together and on Sundays I often cook a cake with my dad.",
          "I play volleyball twice a week and I would love to join a team at school. I also like drawing and long walks with my friends. I want to spend a year in the US because I want to live like an American teenager, not like a tourist, and to become more independent.",
          "I would be happy to share French recipes and to learn your family traditions, especially Thanksgiving. I am a bit shy at first, but I like helping and I adapt quickly. Thank you for reading my letter. Léa",
          "Ce modèle est **un point de départ** : remplace chaque détail par les tiens. Si ta lettre ressemble à celle d’un autre candidat, elle ne sert à rien.",
        ],
      },
      {
        id: "erreurs",
        h2: "Les **erreurs** qui desservent ta lettre",
        body: ["Ce sont les plus fréquentes :"],
        list: [
          "**Une liste d’adjectifs** (« I am kind, funny, open-minded ») sans aucun exemple.",
          "**Parler seulement de l’Amérique** (New York, Hollywood, le shopping) et pas de la vie en famille.",
          "**Exiger** : une grande ville, une piscine, un État précis. En visa J-1, on ne choisit ni l’État ni l’école.",
          "**Cacher** une allergie, un régime alimentaire ou une peur des animaux : mieux vaut le dire simplement.",
          "**Un texte traduit par une machine** : écris dans ton anglais, puis fais corriger les fautes.",
        ],
      },
      {
        id: "relecture",
        h2: "Avant d’envoyer : **la relecture**",
        body: [
          "Fais lire ta lettre à quelqu’un qui te connaît bien (il te dira si elle te ressemble) et à quelqu’un qui parle bien anglais (pour les fautes). Lis-la à voix haute : si une phrase sonne faux, réécris-la. Ajoute une ou deux photos de ta vie si le dossier le permet : ta famille, ton sport, ta ville.",
        ],
      },
    ],
    faq: [
      {
        q: "Ma lettre doit-elle être en anglais ?",
        a: "Le plus souvent oui, puisque la famille d’accueil est américaine. Vérifie les consignes de ton organisme : langue, longueur et format peuvent varier.",
      },
      {
        q: "Quelle longueur pour une lettre « Dear Host Family » ?",
        a: "Suis la consigne de ton dossier. À défaut, une page suffit en général : assez pour montrer ta personnalité, pas assez pour lasser.",
      },
      {
        q: "Est-ce que je peux utiliser un traducteur ou une IA ?",
        a: "Pour vérifier un mot ou une faute, oui. Pour écrire la lettre à ta place, non : la famille veut entendre ta voix, et ton niveau réel se verra dès les premiers échanges.",
      },
      {
        q: "Faut-il parler de mes défauts ?",
        a: "Un peu, simplement : être timide au début, avoir du mal à se lever le matin. Ça te rend crédible et ça aide la famille à te comprendre.",
      },
    ],
    related: ["regles-famille", "famille-d-accueil", "entretien-anglais", "lyceens"],
    ctaTitle: "Tout ce qui se joue **avec ta famille d’accueil**",
    ctaText: "Types de familles, codes, communication, quand le lien prend du temps : le chapitre 5 du guide. Envoie cette page à tes parents.",
  },

  /* ------------------------------------------------- ENTRETIEN ET NIVEAU D'ANGLAIS */
  {
    slug: "entretien-anglais",
    path: "/entretien-organisme-niveau-anglais/",
    short: "Entretien et anglais",
    footer: "Entretien et niveau d’anglais",
    forWho: "Tu passes l’entretien et le test d’anglais de ton organisme.",
    title: "Entretien d’échange scolaire USA et niveau d’anglais : se préparer",
    description:
      "Quel niveau d’anglais pour partir en High School aux USA ? Test d’anglais, entretien de motivation, questions fréquentes et comment te préparer sans stresser.",
    h1: "Entretien et test d’anglais : **comment te préparer**",
    lead:
      "Avant de partir, il y a presque toujours **un test d’anglais** et **un entretien**. Personne n’attend que tu sois bilingue. On veut savoir si tu peux **te débrouiller** et si tu es **prêt à vivre loin de chez toi**.",
    tu: true,
    notice: {
      tone: "info",
      title: "Les exigences varient",
      text: "Le test, le niveau minimum et le déroulé de l’entretien **dépendent de l’organisme et du type de séjour**. Demande-leur précisément ce qui t’attend.",
    },
    tldr: [
      "Le test d’anglais vérifie que tu peux **suivre des cours et vivre au quotidien** en anglais, pas que tu parles parfaitement.",
      "L’entretien cherche surtout ta **motivation**, ton **autonomie** et ta capacité à **t’adapter** quand ça devient difficile.",
      "Prépare des **réponses avec des exemples vécus**, pas des phrases apprises par cœur.",
      "Le meilleur entraînement : **parler anglais tous les jours** dans les mois qui précèdent, même dix minutes.",
    ],
    worriesTitle: "Ce que tu te demandes, et **où le livre en parle**",
    worries: [
      { worry: "Il y a vraiment un test d’anglais ?", answer: "Le test d’anglais obligatoire et ce qu’il mesure.", chapter: 1, label: "Test d’anglais obligatoire", page: 25 },
      { worry: "Comment progresser avant de partir ?", answer: "Se préparer à parler anglais, concrètement.", chapter: 4, label: "Se préparer à parler anglais", page: 60 },
      { worry: "Qui décide de mon départ ?", answer: "Le rôle de l’organisme et du sponsor.", chapter: 1, label: "Le rôle de l’organisme et du sponsor", page: 19 },
      { worry: "Les cours seront-ils trop durs ?", answer: "Le niveau scolaire comparé à l’Europe.", chapter: 6, label: "Niveau scolaire comparé à l’Europe", page: 94 },
    ],
    sections: [
      {
        id: "niveau",
        h2: "Quel **niveau d’anglais** faut-il vraiment ?",
        body: [
          "Il faut pouvoir **comprendre un cours**, **te présenter**, **demander de l’aide** et **suivre une conversation simple**. L’accent, les fautes et les hésitations ne sont pas éliminatoires. Ce qui inquiète, c’est un élève qui ne comprend pas les consignes ou qui ne peut pas expliquer un problème.",
          "Bonne nouvelle : la plupart des jeunes progressent énormément pendant les premiers mois. Le niveau de départ compte moins que **l’envie de parler**.",
        ],
      },
      {
        id: "test",
        h2: "Le **test d’anglais** : à quoi t’attendre",
        body: [
          "Selon l’organisme, c’est un test écrit (compréhension, grammaire, vocabulaire), un test oral, ou les deux. Fais un ou deux tests d’entraînement en ligne pour connaître le format et gérer ton temps. Le jour J, lis bien les consignes : beaucoup d’erreurs viennent d’une question mal lue, pas d’un manque d’anglais.",
        ],
      },
      {
        id: "questions",
        h2: "Les **questions** qu’on te posera probablement",
        body: ["Prépare une réponse avec un exemple pour chacune :"],
        list: [
          "**Pourquoi veux-tu partir ?** Une raison à toi, pas seulement « pour l’anglais ».",
          "**Comment réagis-tu quand quelque chose ne va pas ?** Raconte un moment difficile et ce que tu as fait.",
          "**Et si tu es placé dans une petite ville, loin de tout ?** On vérifie que tu ne pars pas pour une Amérique de carte postale.",
          "**Que fais-tu pour aider à la maison ?** Tâches, cuisine, petits frères et sœurs : sois honnête.",
          "**Comment gères-tu le manque de ta famille ?** Il n’y a pas de mauvaise réponse, sauf « ça ne m’arrivera pas ».",
          "**Que vas-tu faire au lycée là-bas ?** Sports, clubs, cours : montre que tu vas t’impliquer.",
        ],
      },
      {
        id: "entrainement",
        h2: "**S’entraîner** sans y passer ses soirées",
        body: ["Quelques habitudes qui font la différence en quelques mois :"],
        list: [
          "**Séries et vidéos en anglais**, avec sous-titres en anglais, pas en français.",
          "**Penser en anglais** : décris ta journée à voix haute, même seul.",
          "**Simuler l’entretien** avec un parent, un prof ou un ami, puis recommencer.",
          "**Écouter des lycéens américains** parler de leur quotidien : tu apprendras le vocabulaire du lycée en même temps.",
        ],
      },
      {
        id: "parents",
        h2: "Pendant l’entretien, **c’est toi qui parles**",
        body: [
          "Si tes parents assistent à une partie de l’entretien, c’est à toi de répondre. Un jeune qui laisse ses parents parler à sa place envoie le signal inverse de l’autonomie recherchée. Préviens-les avant : ils peuvent compléter à la fin, pas répondre à ta place.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel niveau d’anglais faut-il pour partir en High School aux USA ?",
        a: "Il faut pouvoir suivre un cours et se débrouiller au quotidien. Le niveau minimum exact dépend de l’organisme et du type de séjour : demande-leur quel test est utilisé et quel résultat est attendu.",
      },
      {
        q: "Peut-on rater l’entretien de l’organisme ?",
        a: "L’entretien sert à vérifier la motivation et la capacité d’adaptation. Un jeune qui ne veut pas vraiment partir, ou qui part pour faire plaisir à ses parents, peut ne pas être retenu. La meilleure préparation est d’être sincère.",
      },
      {
        q: "L’entretien se passe-t-il en anglais ?",
        a: "Souvent en partie, au moins pour vérifier ton oral. Prépare-toi à te présenter et à expliquer ta motivation en anglais.",
      },
      {
        q: "Combien de temps faut-il pour progresser ?",
        a: "Quelques mois de pratique régulière changent déjà beaucoup. Mieux vaut dix minutes par jour qu’une grosse séance par semaine.",
      },
    ],
    related: ["lettre-famille", "niveau", "calendrier", "lyceens"],
    ctaTitle: "Le guide pour **arriver prêt**",
    ctaText: "Test d’anglais, rôle de l’organisme, préparation au départ : tout est dans le guide. Envoie cette page à tes parents.",
  },

  /* ------------------------------------------------- SE FAIRE DES AMIS, JOURNÉE TYPE */
  {
    slug: "amis",
    path: "/se-faire-des-amis-high-school-usa/",
    short: "Se faire des amis",
    footer: "Se faire des amis, journée type",
    forWho: "Tu te demandes à quoi ressemble une journée et comment te faire des amis.",
    title: "Se faire des amis en High School aux USA, et journée type au lycée",
    description:
      "Comment se faire des amis dans un lycée américain quand on est étudiant d’échange, et à quoi ressemble une journée type en High School : horaires, cours, cafétéria, activités.",
    h1: "Se faire des amis en High School, et **à quoi ressemble une journée**",
    lead:
      "La première semaine, tout le monde se connaît sauf toi. C’est normal, et ça ne dure pas **si tu sais où chercher**. Voici comment se passe une journée, et **où les amitiés se créent vraiment**.",
    tu: true,
    tldr: [
      "La journée commence **tôt** et l’après-midi est souvent consacrée aux **activités** : c’est là que se créent les amitiés.",
      "**Rejoins une équipe ou un club dès la rentrée** : c’est le raccourci le plus efficace, et de loin.",
      "Les Américains sont souvent **accueillants mais pas forcément proches** au début : il faut multiplier les occasions.",
      "Ne reste pas **qu’avec les autres étudiants étrangers** : c’est rassurant, mais ça freine ton anglais et ton intégration.",
    ],
    worriesTitle: "Ce que tu te demandes, et **où le livre en parle**",
    worries: [
      { worry: "Comment je me fais des amis ?", answer: "S’intégrer et se faire des amis, étape par étape.", chapter: 7, label: "S’intégrer et se faire des amis", page: 106 },
      { worry: "Quelles activités choisir ?", answer: "Les activités extrascolaires et pourquoi elles comptent.", chapter: 7, label: "Les activités extrascolaires", page: 108 },
      { worry: "À quoi ressemble une journée ?", answer: "Un emploi du temps type, heure par heure.", chapter: 6, label: "Emploi du temps type", page: 100 },
      { worry: "Et la cantine, le dress code ?", answer: "Cafétéria et repas, dress code, codes sociaux.", chapter: 7, label: "Cafétéria et repas", page: 108 },
      { worry: "Et s’il y a des histoires entre élèves ?", answer: "Les dramas, et comment ne pas s’y perdre.", chapter: 7, label: "Les dramas", page: 112 },
    ],
    sections: [
      {
        id: "journee",
        h2: "Une **journée type** en High School",
        body: [
          "Les horaires varient selon les écoles, mais le schéma se ressemble souvent : le bus ou la voiture tôt le matin, des cours qui commencent avant ceux d’un lycée français, et une fin de journée de cours en début d’après-midi.",
        ],
        list: [
          "**Le matin** : arrivée, casier, parfois un temps de classe commun (homeroom) pour les annonces.",
          "**Les cours** : tu changes de salle à chaque heure, avec ton propre emploi du temps, comme à la fac.",
          "**Le déjeuner** : à la cafétéria, souvent court. Où tu t’assois compte plus que ce que tu manges.",
          "**L’après-midi** : fin des cours, puis entraînements, clubs, répétitions. C’est le cœur de la vie sociale.",
          "**Le soir** : devoirs, dîner en famille, et parfois un match ou un événement de l’école.",
        ],
      },
      {
        id: "activites",
        h2: "Les **activités** : le raccourci vers les amis",
        body: [
          "Une équipe, un club de théâtre, l’orchestre, le journal de l’école, le bénévolat : tu y vois les mêmes personnes plusieurs fois par semaine, avec un but commun. C’est exactement ce qui crée des amitiés. Pour les équipes sportives, il y a souvent des sélections (tryouts) en début de saison : renseigne-toi dès ton arrivée pour ne pas les manquer.",
          "Tu n’es pas sportif ? Aucun problème : il y a presque toujours des clubs, des activités artistiques ou des postes utiles (manager d’équipe, photographe, aide technique).",
        ],
      },
      {
        id: "premier-pas",
        h2: "Faire **le premier pas** : ce qui marche",
        body: ["Personne ne viendra te chercher, mais beaucoup seront curieux de toi :"],
        list: [
          "**Présente-toi** à tes voisins de cours et retiens leurs prénoms.",
          "**Demande de l’aide** : un devoir, le chemin d’une salle, une règle du jeu. Ça ouvre la conversation.",
          "**Dis oui** aux invitations : un match, une soirée film, un repas. Même si tu es fatigué.",
          "**Assieds-toi à une table** à la cafétéria, plutôt que d’attendre qu’on t’appelle.",
          "**Parle de la France** quand on te le demande, sans en faire ton seul sujet.",
        ],
      },
      {
        id: "temps",
        h2: "Si ça prend **du temps**",
        body: [
          "Les premières semaines peuvent être solitaires, même pour les plus sociables. Beaucoup de jeunes disent que tout a changé après une activité, un événement de l’école ou les vacances d’hiver. Si tu te sens isolé longtemps, parles-en à ta famille d’accueil et à ton correspondant local : c’est leur rôle de t’aider.",
        ],
      },
    ],
    faq: [
      {
        q: "Est-ce facile de se faire des amis dans un lycée américain ?",
        a: "Le premier contact est souvent facile, les amitiés proches prennent plus de temps. Les activités extrascolaires accélèrent beaucoup les choses.",
      },
      {
        q: "À quelle heure commencent les cours dans une High School ?",
        a: "Souvent tôt le matin, et les cours finissent en début d’après-midi. Les horaires exacts dépendent de chaque école.",
      },
      {
        q: "Faut-il faire du sport pour s’intégrer ?",
        a: "Non. Le sport aide, mais les clubs, la musique, le théâtre ou le bénévolat créent aussi des liens solides.",
      },
      {
        q: "Je suis timide, est-ce que je vais y arriver ?",
        a: "Oui, beaucoup de jeunes timides vivent une très belle année. Choisis une activité qui te plaît : tu parleras plus facilement avec des gens qui aiment la même chose que toi.",
      },
    ],
    related: ["vocabulaire", "lyceens", "mal-du-pays", "regles-famille"],
    ctaTitle: "La vie lycéenne américaine **de l’intérieur**",
    ctaText: "Amis, activités, cafétéria, dress code, grands moments de l’année : le chapitre 7 du guide. Envoie cette page à tes parents.",
  },

  /* ------------------------------------------------- VOCABULAIRE DU LYCÉE */
  {
    slug: "vocabulaire",
    path: "/homecoming-prom-vocabulaire-high-school/",
    short: "Homecoming, prom…",
    footer: "Homecoming, prom, tryouts : le lexique",
    forWho: "Tu veux comprendre les mots et les grands moments du lycée américain.",
    title: "Homecoming, prom, tryouts : le vocabulaire du lycée américain",
    description:
      "Homecoming, prom, tryouts, varsity, pep rally, senior… Le lexique de la High School américaine expliqué simplement, avec les grands moments de l’année scolaire.",
    h1: "Homecoming, prom, tryouts : **le lexique du lycée américain**",
    lead:
      "Tu les as entendus dans les séries. Sur place, ces mots rythment **toute l’année scolaire**. Voici ce qu’ils veulent dire, et **ce que ça change pour toi**.",
    tu: true,
    notice: {
      tone: "info",
      title: "Chaque école a ses traditions",
      text: "Dates, règles et façon de fêter **changent d’une école à l’autre**. Ce lexique donne les repères les plus courants.",
    },
    tldr: [
      "L’année tourne autour de **grands événements** : Homecoming à l’automne, Prom au printemps, la remise des diplômes à la fin.",
      "Les élèves sont classés par **année** : freshman, sophomore, junior, senior. Tu seras souvent rattaché à l’une d’elles.",
      "Pour entrer dans une équipe, il faut souvent passer des **tryouts** : renseigne-toi dès ton arrivée.",
      "Ces moments sont **les meilleures occasions** de te faire des amis : vas-y, même si tu n’en connais pas les codes.",
    ],
    worriesTitle: "Ce que tu te demandes, et **où le livre en parle**",
    worries: [
      { worry: "C’est quoi, les grands moments de l’année ?", answer: "Les grands moments de la vie lycéenne américaine.", chapter: 7, label: "Les grands moments de la vie lycéenne américaine", page: 114 },
      { worry: "Pourquoi tout le monde est fan de son école ?", answer: "L’esprit d’équipe et la fierté scolaire.", chapter: 7, label: "L’esprit d’équipe et la fierté scolaire", page: 110 },
      { worry: "Comment marche le système de classes ?", answer: "Le système scolaire américain, expliqué.", chapter: 6, label: "Le système scolaire américain", page: 92 },
      { worry: "Comment je m’habille ?", answer: "Le dress code et ce qu’il implique.", chapter: 7, label: "Le dress code", page: 109 },
    ],
    sections: [
      {
        id: "annees",
        h2: "Les **années** : freshman, sophomore, junior, senior",
        body: ["Le lycée américain dure en général quatre ans, et chaque année a son nom :"],
        list: [
          "**Freshman** : la première année, souvent vers 14 ou 15 ans.",
          "**Sophomore** : la deuxième année.",
          "**Junior** : la troisième, l’année des tests et des projets d’université.",
          "**Senior** : la dernière, celle de la remise des diplômes. Les étudiants d’échange sont souvent placés en junior ou en senior, selon leur âge et l’école.",
        ],
      },
      {
        id: "evenements",
        h2: "Les **grands moments** de l’année",
        body: ["Les plus courants, dans l’ordre de l’année :"],
        list: [
          "**Homecoming** : à l’automne, une semaine de fête autour d’un match de football américain, souvent avec une Spirit Week (journées à thème), un défilé et un bal.",
          "**Pep rally** : un rassemblement dans le gymnase pour encourager les équipes avant un match, avec cheerleaders et fanfare.",
          "**Spirit Week** : une semaine où chaque jour a son thème de déguisement (pyjama, couleurs de l’école, années 80…).",
          "**Prom** : le grand bal de fin d’année, au printemps, surtout pour les juniors et les seniors. Tenue de soirée, photos, parfois une invitation spectaculaire (promposal).",
          "**Senior Night** : la soirée où l’on honore les sportifs de dernière année lors de leur dernier match à domicile.",
          "**Graduation** : la cérémonie de remise des diplômes, avec toge et toque. Renseigne-toi tôt pour savoir si tu pourras y participer : ça dépend de l’école.",
        ],
      },
      {
        id: "sport",
        h2: "Le **sport** : tryouts, varsity, JV",
        body: ["Le sport scolaire a son propre vocabulaire :"],
        list: [
          "**Tryouts** : les sélections pour entrer dans une équipe, en début de saison.",
          "**Varsity** : l’équipe principale de l’école, la plus forte.",
          "**JV (Junior Varsity)** : l’équipe de niveau inférieur, souvent plus accessible.",
          "**Season** : chaque sport a sa saison (automne, hiver, printemps). Tu peux souvent en faire un par saison.",
        ],
      },
      {
        id: "quotidien",
        h2: "Les mots **du quotidien**",
        body: ["Ceux que tu entendras dès la première semaine :"],
        list: [
          "**Homeroom** : un temps de classe commun, souvent le matin, pour les annonces.",
          "**Locker** : ton casier.",
          "**Hall pass** : l’autorisation écrite pour circuler dans les couloirs pendant les cours.",
          "**Counselor** : le conseiller qui t’aide à choisir tes cours et t’écoute en cas de problème.",
          "**Electives** : les cours au choix (photo, cuisine, théâtre, informatique…).",
          "**GPA** : la moyenne des notes, sur une échelle propre au système américain.",
          "**Yearbook** : l’album de l’année, avec les photos de tous les élèves. Fais-le signer à tes amis en juin.",
        ],
      },
      {
        id: "y-aller",
        h2: "**Vas-y**, même sans connaître les codes",
        body: [
          "Beaucoup d’étudiants d’échange hésitent à aller au bal ou au match parce qu’ils ne savent pas « comment ça se passe ». C’est justement là que tu rencontreras le plus de monde. Demande à ta famille d’accueil ou à un ami de t’expliquer, et dis oui.",
        ],
      },
    ],
    faq: [
      {
        q: "C’est quoi le Homecoming aux États-Unis ?",
        a: "Une semaine de fête à l’automne, organisée autour d’un match de football américain, souvent avec des journées à thème, un défilé et un bal. Les traditions varient selon les écoles.",
      },
      {
        q: "Un étudiant d’échange peut-il aller au prom ?",
        a: "Souvent oui, surtout en junior ou en senior, mais les règles dépendent de l’école. Renseigne-toi auprès de ta famille d’accueil et du lycée.",
      },
      {
        q: "Que veut dire varsity ?",
        a: "C’est l’équipe principale d’un sport dans l’école. L’équipe de niveau inférieur s’appelle JV, pour Junior Varsity.",
      },
      {
        q: "Est-ce que je pourrai participer à la remise des diplômes ?",
        a: "Ça dépend de l’école et de ta situation. Pose la question tôt dans l’année à ton counselor.",
      },
    ],
    related: ["amis", "lyceens", "sport-etudes", "niveau"],
    ctaTitle: "Toute l’année scolaire **racontée de l’intérieur**",
    ctaText: "Grands moments, esprit d’équipe, dress code, dramas : le chapitre 7 du guide. Envoie cette page à tes parents.",
  },

  /* ------------------------------------------------- RÈGLES DE LA FAMILLE D'ACCUEIL */
  {
    slug: "regles-famille",
    path: "/regles-famille-d-accueil-telephone-sorties/",
    short: "Règles de la famille d’accueil",
    footer: "Règles : téléphone, sorties, couvre-feu",
    forWho: "Tu te demandes ce que ta famille d’accueil pourra t’autoriser ou non.",
    title: "Règles en famille d’accueil aux USA : téléphone, couvre-feu, sorties",
    description:
      "Couvre-feu, téléphone, sorties, tâches ménagères, conduite : les règles les plus courantes en famille d’accueil aux USA, et comment en parler sans conflit.",
    h1: "Téléphone, couvre-feu, sorties : **les règles en famille d’accueil**",
    lead:
      "Chaque famille a ses règles, et elles sont **souvent plus strictes** que ce que tu imagines. Les connaître **dès le premier jour** évite la plupart des conflits.",
    tu: true,
    notice: {
      tone: "warning",
      title: "Deux niveaux de règles",
      text: "Il y a **les règles de ton programme** (souvent non négociables, par exemple sur la conduite d’une voiture ou les voyages) et **les règles de ta famille d’accueil**. Demande à ton organisme la liste des premières, par écrit.",
    },
    tldr: [
      "Pose les questions **dès la première semaine** : horaires, téléphone, sorties, tâches. Mieux vaut demander que deviner.",
      "Les familles américaines sont souvent **attentives aux horaires** et veulent **savoir où tu es**. Ce n’est pas de la méfiance, c’est de la responsabilité.",
      "Les **tâches ménagères** font partie de la vie de famille : tu n’es pas un invité, tu es un membre de la maison.",
      "En cas de désaccord, **parles-en calmement** avec ta famille, puis avec ton correspondant local si ça bloque.",
    ],
    worriesTitle: "Ce que tu te demandes, et **où le livre en parle**",
    worries: [
      { worry: "Comment s’organise la vie à la maison ?", answer: "L’organisation quotidienne en famille d’accueil.", chapter: 5, label: "Organisation quotidienne", page: 76 },
      { worry: "Comment dire que quelque chose ne va pas ?", answer: "Comment parler, réagir et s’excuser à l’américaine.", chapter: 5, label: "Comment parler, réagir et s’excuser", page: 78 },
      { worry: "Qu’attendent-ils de moi ?", answer: "Communication et attentes, des deux côtés.", chapter: 5, label: "Communication et attentes", page: 77 },
      { worry: "Et si ça ne marche vraiment pas ?", answer: "Quand le lien prend du temps, et changer de famille.", chapter: 5, label: "Changer de famille", page: 81 },
      { worry: "Qui contacter en cas de problème ?", answer: "Les correspondants régionaux et locaux.", chapter: 1, label: "Correspondants régionaux et locaux", page: 20 },
    ],
    sections: [
      {
        id: "questions",
        h2: "Les **questions à poser** la première semaine",
        body: ["Choisis un moment calme, par exemple après le dîner, et demande :"],
        list: [
          "**À quelle heure** dois-je rentrer en semaine et le week-end ?",
          "**Téléphone et écrans** : y a-t-il des heures ou des lieux sans téléphone (repas, chambre, nuit) ?",
          "**Sorties** : qui dois-je prévenir, combien de temps avant, et faut-il connaître les parents de mes amis ?",
          "**Tâches** : qu’est-ce que je fais à la maison (vaisselle, linge, chambre, poubelles) ?",
          "**Repas** : à quelle heure, et est-ce que je peux me servir dans le frigo ?",
          "**Salle de bain, invités, argent** : les petites règles qui évitent les grands malentendus.",
        ],
      },
      {
        id: "telephone",
        h2: "Le **téléphone** : le sujet n°1",
        body: [
          "Beaucoup de familles limitent le téléphone le soir ou pendant les repas. Elles s’inquiètent aussi quand un jeune passe ses soirées à parler avec la France : ça peut freiner l’intégration et entretenir le mal du pays. Mets-toi d’accord sur des moments pour appeler ta famille et tes amis, plutôt que de rester connecté en continu.",
        ],
      },
      {
        id: "sorties",
        h2: "**Sorties et couvre-feu**",
        body: [
          "Aux États-Unis, beaucoup d’ados dépendent des adultes pour se déplacer : sans voiture, une sortie s’organise à l’avance. Ta famille voudra souvent savoir **où**, **avec qui**, **comment tu rentres** et **à quelle heure**. Le couvre-feu peut être plus tôt que ce dont tu as l’habitude en France. Respecte-le dès le début : la confiance se gagne vite et se perd encore plus vite.",
        ],
      },
      {
        id: "programme",
        h2: "Les règles **du programme**",
        body: [
          "Certaines règles ne viennent pas de ta famille mais de ton programme, et elles s’appliquent à tous les étudiants d’échange : conduite d’un véhicule, voyages, consommation d’alcool ou de drogues, comportement à l’école. Elles sont souvent strictes, et les enfreindre peut mettre fin à ton séjour. Lis-les attentivement avant de partir et garde-les à portée de main.",
        ],
      },
      {
        id: "conflit",
        h2: "En cas de **désaccord**",
        body: [
          "Une règle te paraît injuste ? Demande d’abord **pourquoi** elle existe : il y a souvent une raison (sécurité, habitude de la famille, expérience passée). Propose ensuite un compromis, calmement, sans comparer avec « en France on fait comme ça ». Si le dialogue est bloqué, ton correspondant local est là pour vous aider à trouver une solution.",
        ],
      },
    ],
    faq: [
      {
        q: "Une famille d’accueil peut-elle limiter mon téléphone ?",
        a: "Oui, elle peut fixer des règles de vie à la maison, comme pour ses propres enfants. Mets-toi d’accord avec elle sur des horaires pour appeler ta famille en France.",
      },
      {
        q: "Est-ce que j’aurai un couvre-feu ?",
        a: "Le plus souvent oui. L’heure dépend de ta famille, de ton âge et du jour de la semaine. Demande-la dès ton arrivée.",
      },
      {
        q: "Peut-on conduire pendant un échange scolaire aux USA ?",
        a: "Beaucoup de programmes l’interdisent ou l’encadrent strictement. Vérifie la règle exacte auprès de ton organisme avant de partir : elle ne dépend pas de ta famille d’accueil.",
      },
      {
        q: "Que faire si je ne m’entends pas avec ma famille d’accueil ?",
        a: "Parles-en d’abord avec elle, calmement. Si rien ne change, contacte ton correspondant local : il peut vous aider, et un changement de famille est possible dans certains cas.",
      },
    ],
    related: ["famille-d-accueil", "lettre-famille", "mal-du-pays", "amis"],
    ctaTitle: "Vivre en famille d’accueil **sans malentendus**",
    ctaText: "Organisation, communication, s’excuser à l’américaine, changer de famille : le chapitre 5 du guide. Envoie cette page à tes parents.",
  },
];
