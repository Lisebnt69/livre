# Site Vitrine - Stéphanie Oyarsabal : Guide High School USA

Site vitrine moderne 2026 pour l'autrice Stéphanie Oyarsabal, entièrement front-end avec Vite, React, TypeScript, TailwindCSS, React Router et Framer Motion.

## Fonctionnalités

- **Pages multi-routes** : Accueil, Où trouver le livre, Information sur le livre, Lire les premières pages, Auteur, Avis.
- **Flipbook obligatoire** : Utilise react-pageflip pour un effet page-turn sur les premières pages du PDF.
- **Fallback PDF** : react-pdf si les images du flipbook ne sont pas disponibles.
- **Design premium** : Style Apple/Stripe/Notion avec animations Framer Motion.
- **Responsive** : Mobile-first avec burger menu animé.
- **SEO de base** : Meta tags et OpenGraph.

## Installation

1. **Cloner ou créer le projet** :
   ```bash
   npm create vite@latest site-vitrine-stephanie -- --template react-ts
   cd site-vitrine-stephanie