# Guide High School USA : site du livre de Stéphanie Oyarsabal

Site vitrine d'un seul livre, dont la seule mission est de **pousser le clic vers la fiche Amazon** et de **ranker en SEO**.
Vite + React + TypeScript + Tailwind. Pas de backend.

## Mode actuel : page unique

Depuis le 2 novembre 2026, seul **une page (couverture + lien Amazon)** est publiée ; le site complet est masqué
mais intact dans ce dépôt. `npm run build` construit la page unique par défaut (`SITE_MODE=minimal`, source :
`landing/index.html`). Pour remettre le site complet en ligne : `SITE_MODE=full` dans Cloudflare Pages, ou
`npm run build:full` en local. **Mode d'emploi détaillé et liste de ce qui reste à faire : `docs/ARCHIVE-SITE-COMPLET.md`.**

## Commandes

```bash
npm install
npm run dev        # développement (rendu client)
npm run build      # page unique par défaut (SITE_MODE=minimal)
npm run build:full # site complet : build + pré-rendu statique de toutes les pages dans dist/
npm run build:minimal
npm run preview    # servir dist/ en local
npm run typecheck
```

## Comment ça marche

- **Pré-rendu statique** (`scripts/prerender.mjs`) : chaque route devient un vrai fichier HTML (`dist/parents/index.html`…) avec
  son contenu, son `<title>`, sa description, sa canonical, ses balises Open Graph et son JSON-LD. Google lit tout sans exécuter
  de JavaScript. React « hydrate » ensuite la page. `sitemap.xml` et `404.html` sont générés au build.
- **Direction artistique** : inspirée d’Alan (fond crème, blocs pastel arrondis, une seule police Figtree, pilules). Jetons dans `tailwind.config.js`. Écrire `**mot**` dans un texte met le mot en bordeaux (`src/lib/rich.tsx`).
- **Routes et SEO** : `src/routes.tsx` (une entrée par page : titre, description, schema.org).
- **Pages guides par persona** : `src/data/guides.ts` (parents, lycéens, sport-études, J-1/F-1, famille d'accueil, mal du pays,
  retour). Ajouter une page = ajouter un objet dans ce tableau : route, sitemap, maillage interne, FAQ et schema se créent seuls.
- **Le livre** : `src/data/book.ts` (liens Amazon, sommaire réel avec numéros de page).
- **Liens Amazon** : composant `AmazonButton` (`src/components/Amazon.tsx`) : `rel="sponsored"`, suivi GA4 `click_amazon`
  avec le `placement` du clic. Mention d'affiliation officielle sous chaque boîte d'achat et en pied de page.
- **RGPD** : Consent Mode v2 (tout refusé par défaut, `index.html`) + bandeau `vanilla-cookieconsent`. Polices auto-hébergées
  (aucune requête vers Google Fonts).

## Règles Amazon Partenaires à respecter

Ne jamais afficher de prix, de note ni d'avis Amazon sur le site. Ne pas ajouter de `AggregateRating`. Ne pas masquer ou
raccourcir les liens affiliés. Ne rien offrir en échange d'un clic ou d'un avis.
