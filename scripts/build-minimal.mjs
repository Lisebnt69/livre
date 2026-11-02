// Build « page unique » : couverture + lien Amazon. Aucune dépendance, aucun JavaScript côté visiteur.
// Le site complet reste dans src/ et se reconstruit avec SITE_MODE=full (voir docs/ARCHIVE-SITE-COMPLET.md).
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const BASE = "https://www.reussir-son-annee-de-high-school-aux-etats-unis.com";

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const page = readFileSync(join(root, "landing", "index.html"), "utf8");
writeFileSync(join(dist, "index.html"), page);

// 404 : même page, mais non indexable, pour que les anciennes adresses disparaissent des moteurs de recherche
const notFound = page
  .replace(/<title>[^<]*<\/title>/, "<title>Page introuvable | Réussir son année de High School aux États-Unis</title>")
  .replace('<link rel="canonical"', '<meta name="robots" content="noindex,follow" />\n    <link rel="canonical"');
writeFileSync(join(dist, "404.html"), notFound);

// Seuls fichiers publics nécessaires : le reste de public/ (extrait, avis, photos) reste dans le dépôt, hors ligne.
for (const f of ["cover-480.jpg", "cover-800.jpg", "favicon.ico"]) {
  const src = join(root, "public", f);
  if (!existsSync(src)) throw new Error(`Fichier manquant : public/${f}`);
  copyFileSync(src, join(dist, f));
}

writeFileSync(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`);
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${BASE}/</loc>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`
);

console.log("Page unique générée dans dist/ : index.html, 404.html, couverture, robots.txt, sitemap.xml");
