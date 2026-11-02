# Benchmark : sites de livres qui poussent vers Amazon (France, Europe, États-Unis)

Réalisé le 2 novembre 2026. Les sources sont des pages publiques lues au moment de l'étude ; elles ont pu changer.
Limites : l'outil de recherche voit surtout les résultats américains, plusieurs pages d'aide Amazon étaient
inaccessibles, aucun taux de conversion n'est publié par les sites. Ce qui n'a pas été vérifié est signalé comme tel.

## Constat général

- **Aucun site indépendant « année d'échange / High School » centré sur le clic Amazon** n'a été trouvé en France,
  en Europe ni aux États-Unis : les titres de cette niche se vendent en direct (organismes, éditeurs) ou en anglais.
  Aucun guide pratique français équivalent n'est ressorti (les fiches Amazon n'étaient pas lisibles).
- Les sites analysés appartiennent à des **niches voisines** (parentalité, adolescents, développement personnel).
- Le site existant du client, avant refonte, renvoyait un HTML vide (`<div id="root">`) sans JSON-LD : un défaut
  que le pré-rendu corrige.

## Ce qui revient partout (pratiques classées par impact présumé, c'est un jugement, pas une mesure)

1. Un **CTA Amazon explicite** en haut, au milieu et en bas de page, avec un bouton par format (broché, Kindle).
2. **Barre d'achat collante sur mobile** (recommandation, non observée sur les pages lues).
3. **Preuve sociale indépendante** près du bouton : presse, enseignants, parents nommés (jamais les avis Amazon).
4. **Extrait ou chapitre gratuit** qui se termine sur un lien Amazon ; éviter l'extrait contre e-mail, qui détourne
   du clic.
5. **Bio d'autrice crédible** près du CTA. En Allemagne, la presse dénonce des guides Amazon signés d'auteurs
   inventés : une identité réelle est un signal de confiance.
6. **Pages par persona ou par problème** (parents, lycéen, visa, famille d'accueil) avec CTA contextuel, et FAQ
   visible avec schema.org.
7. **Titre, H1 et URL à mots-clés**, jamais génériques.
8. **Lead magnet + e-mail** (checklist, mini-guide) pour réactiver le trafic : le levier le plus cité, non fait ici.
9. **Fiche Amazon soignée** : titre et sous-titre, 7 mots-clés, 3 catégories, contenu A+. La conversion finale s'y joue.
10. **Mesure** : Amazon Attribution (gratuit via KDP) ou lien partenaire, **pas les deux sur le même lien**.

## Exemples observés

**États-Unis** : jamesclear.com/atomic-habits, jessicalahey.com/the-gift-of-failure, theselfdrivenchild.com,
nirandfar.com/indistractable, calnewport.com/writing, thecreativepenn.com/books. Amazon toujours en premier, 2 à 3 CTA
par page, éloges éditoriaux, lead magnet.

**Europe** : kevchilton.com/kevs-bookshop (Royaume-Uni, entrée par problème), nicolamorgan.com, sarahockwell-smith.com,
mit-kindern-lernen.ch (navigation par persona, CTA par pays), weltweiser.de (extrait PDF, presse, vente directe),
schueleraustausch.net (guide long + FAQ + extrait du livre « Abenteuer High-School »).

**France** : cyberinstitut.fr (4 CTA Amazon + « Feuilleter »), tests-et-bons-plans.fr, potiondevie.fr (chapitres gratuits
mais canaux dispersés). Voisins du sujet : etudiantdechange.com/guide-usa (hub de 9 sous-guides par persona, sans
preuve sociale ni livre), piefrance.com, ef.fr, studway.fr.

## Règles Amazon Partenaires (France) : autorisé / interdit

D'après l'accord et les politiques Partenaires Amazon FR (mise à jour du 15/10/2025) et l'aide KDP ; à relire avant
toute opération importante (certaines pages d'aide étaient inaccessibles à l'étude).

**Autorisé**
- La mention visible « En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les
  conditions requises. », une politique de confidentialité et de cookies publiée.
- Des e-mails avec lien seulement s'ils sont sollicités ; de la publicité payante vers son propre site.
- Offrir une copie gratuite sans exiger d'avis.

**Interdit**
- Un lien tagué à l'intérieur du livre (imprimé ou Kindle) ; masquer l'URL, utiliser un raccourcisseur tiers ou une
  redirection intermédiaire ; ajouter un identifiant par visiteur dans le lien.
- Afficher des avis ou des notes Amazon, ou des prix non fournis par Amazon ou son API.
- S'acheter via ses propres liens (proches compris) ; offrir une contrepartie pour un clic ; enchérir sur « amazon »
  ou « kindle ».
- Demander des avis contre une contrepartie, ou ne solliciter que les lecteurs satisfaits (non vérifié, à éviter).
- Copier l'étoilage Amazon ou le marquer en `AggregateRating` : Google interdit d'agréger les avis d'autres sites.

## Autres points

- Kindle : 70 % de redevances entre 2,69 et 12,99 € ; broché jusqu'à 60 %. Formats liés automatiquement si les
  métadonnées sont identiques (de 48 h à une semaine). KDP Select (exclusivité 90 jours) est jugé peu adapté au
  non-fiction (source secondaire).
- Le rang Amazon s'explique, selon Amazon, par l'activité récente et historique, sans citer le trafic externe : l'idée
  qu'un trafic externe « booste le rang » vient de blogs, non confirmée.
- Remises sur le broché limitées à 5 % (loi Lang), source secondaire.
- Erreurs fréquentes observées : mention d'affiliation absente, `rel="sponsored"` absent, ASIN dupliqué ou erroné,
  JSON-LD pointant vers une page 404, canaux de vente qui concurrencent Amazon, « best-seller » sans source.
