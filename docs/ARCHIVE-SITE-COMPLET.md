> **Mise à jour du 4 novembre 2026 : le site complet est de nouveau en ligne par défaut** (`SITE_MODE` absent = `full`),
> sans photo de l'autrice et avec son nom beaucoup moins mis en avant. Ce document décrit l'état du 2 novembre.

# Site complet : sauvegarde et mode d'emploi pour le remettre en ligne

État au **2 novembre 2026**. Le site complet est terminé, mergé dans `main` (PR #1 et #2, dernier commit `3530082`)
et **masqué volontairement** : seule une page unique (couverture + lien Amazon) est publiée.
Rien n'a été supprimé : tout le code, les textes et les images sont dans ce dépôt.

**Retrouver exactement cette version** (au cas où) : `git checkout 3530082`, ou `git show 3530082 --stat` pour la
liste des fichiers. Ce commit reste dans l'historique de `main` quoi qu'il arrive.

## Ce qui est en ligne maintenant

Une page unique, `landing/index.html` : l'image du livre, un lien Amazon (broché et Kindle), la mention d'affiliation
Amazon et les mentions légales minimales. Pas de cookies, pas de Google Analytics, pas de bandeau de consentement.
Seule la mesure d'audience Cloudflare (sans cookie) est conservée. Les anciennes adresses du site renvoient une 404
(`404.html`, avec `noindex`) qui montre la même couverture et le même lien.

## Remettre le site complet en ligne

Le mode de build est piloté par la variable `SITE_MODE` (voir `scripts/build.mjs`) :

| `SITE_MODE` | Résultat |
|---|---|
| absent ou `minimal` | page unique (mode actuel) |
| `full` | site complet : 24 pages pré-rendues, sitemap, `robots.txt`, `llms.txt`, `llms-full.txt` |

**Option A, sans toucher au code** : dans Cloudflare Pages, projet `livre`, *Settings → Environment variables*
(Production), ajouter `SITE_MODE` = `full`, puis relancer un déploiement (*Deployments → Retry*).

**Option B, par le code** : dans `scripts/build.mjs`, remplacer `"minimal"` par `"full"` dans
`const mode = ... ?? "minimal"`, puis PR et merge.

**En local** : `npm run build:full` pour construire le site complet, `npm run build:minimal` pour la page unique,
`npm run dev` pour développer (toujours le site complet).

Après la remise en ligne, vérifier : l'accueil, `/budget-high-school-usa/`, `/llms.txt`, `/sitemap.xml`, les liens
Amazon et réseaux, et que les clics remontent dans GA4 (`click_amazon`, `click_social`).

## Ce que contient le site complet (24 pages)

- **Principales** : accueil, livre (sommaire des 10 chapitres), extrait gratuit (flipbook), autrice, avis,
  mentions légales, confidentialité.
- **17 guides** (`src/data/guides.ts`) : parents, lycéens, sport-études, J-1 ou F-1, famille d'accueil, mal du pays,
  retour en France, budget (avec simulateur sans montant prérempli), bourses et aides, sans organisme, choisir son
  organisme, calendrier, assurance santé, quel livre lire, niveau et notes, valise, cadeau pour la famille d'accueil.
- **Technique** : pré-rendu statique (`scripts/prerender.mjs`), schema.org (`Book`, `Person`, `FAQPage`,
  `BreadcrumbList`), `sitemap.xml`, `robots.txt`, `llms.txt` et `llms-full.txt` générés au build, Consent Mode v2 +
  bandeau cookies, suivi GA4 par emplacement de clic.
- **DA** : inspirée d'Alan (fond crème, blocs arrondis, Figtree), palette bleu et rouge de la couverture, éléments
  américains en SVG (drapeau, écusson, fanions, bande rayée), mots importants en bordeaux (`**mot**` dans les textes).

## Décisions à garder en tête

- **Aucun prix, aucune note ni avis Amazon** affichés, aucun `AggregateRating` : interdit par le programme Partenaires
  Amazon et par Google. La mention d'affiliation officielle est obligatoire (« En tant que Partenaire Amazon, je
  réalise un bénéfice sur les achats remplissant les conditions requises. »).
- **Aucun nom d'organisme** cité ni accusé (risque de diffamation) : les pages parlent de critères.
- **Aucune règle de visa figée** : toujours renvoyer vers l'organisme et les sources officielles.
- Mapping Amazon conservé : broché `B0GN4WDVWC`, Kindle `B0GNHL49Q8` (le tag affilié `guideusa-21` est dans
  `src/data/book.ts`).

## À faire avant de remettre le site complet en ligne

1. **Faire relire les textes des guides par Stéphanie.** Ils ont été écrits à partir du sommaire et de la FAQ,
   sans prix ni date limite. Priorité : « sans organisme », « choisir son organisme », « calendrier »,
   « niveau et notes », « bourses ».
2. **Vérifier les 4 liens réseaux** (Instagram `highschoolauxusa`, YouTube `@HighSchoolauxUSA`, TikTok
   `@high_school_aux_usa`, Facebook) : ils n'ont pas été ouverts, seulement ajoutés.
3. **Chiffres de l'ancien site** : « +650 retours de familles » (accueil) contre « +100 » (ancien fichier de données).
   Retirés, à reconfirmer avant de les remettre.
4. **Prix** : si Stéphanie valide des fourchettes, les ajouter à la page budget avec la mise en garde « pas une
   vérité générale ».
5. **Déploiement** : le 2 novembre, la PR #2 mergée n'était pas visible en production après plus de 20 minutes.
   Vérifier dans Cloudflare Pages (*Deployments*, déploiement Production du commit concerné).
6. **Google Search Console** : ajouter le site, soumettre `sitemap.xml`, regarder les recherches de marque (titre du
   livre, nom de l'autrice) et la vraie demande.

## Pour aller plus loin

- `docs/benchmark-livres.md` : benchmark France, Europe et États-Unis, et règles Amazon.
- `docs/recherche-mots-cles.md` : recherche de mots-clés, pages créées, pages écartées, pistes de liens entrants.
