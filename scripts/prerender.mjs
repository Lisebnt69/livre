// Pré-rendu statique : une page HTML complète par route (contenu + <head> SEO + JSON-LD),
// puis sitemap.xml et robots.txt. Exécuté après `vite build` et `vite build --ssr`.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const serverDir = join(root, "dist-server");

const { render, headTags, routes, notFound, abs } = await import(
  pathToFileURL(join(serverDir, "entry-server.js")).href
);

const template = readFileSync(join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-html-->") || !template.includes("<!--app-head-->")) {
  throw new Error("Placeholders <!--app-head--> / <!--app-html--> introuvables dans dist/index.html");
}

function page(route) {
  const html = render(route.path);
  return template
    .replace("<!--app-head-->", headTags(route.meta))
    .replace("<!--app-html-->", html);
}

for (const route of routes) {
  const out = route.path === "/" ? join(dist, "index.html") : join(dist, route.path, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page(route));
}

// 404 : servi avec le bon statut par Cloudflare Pages
writeFileSync(join(dist, "404.html"), page({ ...notFound, path: "/404" }));

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => !r.meta.noindex)
  .map(
    (r) => `  <url>
    <loc>${abs(r.path)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

rmSync(serverDir, { recursive: true, force: true });
console.log(`Pré-rendu : ${routes.length} pages + 404 + sitemap.xml`);
