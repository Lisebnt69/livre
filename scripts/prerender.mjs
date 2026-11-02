// Pré-rendu statique : une page HTML complète par route (contenu + <head> SEO + JSON-LD),
// puis sitemap.xml et robots.txt. Exécuté après `vite build` et `vite build --ssr`.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const serverDir = join(root, "dist-server");

const { render, headTags, routes, notFound, abs, site, book, chapters, guides } = await import(
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

// ---------------------------------------------------------------------------
// robots.txt, llms.txt et llms-full.txt : générés depuis les mêmes données que le site,
// donc toujours à jour (nouvelles pages, titres, sommaire).
// ---------------------------------------------------------------------------
const plain = (t) => t.replace(/\*\*(.+?)\*\*/g, "$1");
const indexable = routes.filter((r) => !r.meta.noindex);

const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "Amazonbot",
];
writeFileSync(
  join(dist, "robots.txt"),
  [
    `# Généré au build le ${today}. Site vitrine : tout est public et destiné à être trouvé et cité.`,
    "User-agent: *",
    "Allow: /",
    "",
    "# Moteurs de réponse et assistants IA : explicitement autorisés",
    ...AI_BOTS.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
    `Sitemap: ${abs("/sitemap.xml")}`,
    `# Résumé pour les modèles de langage : ${abs("/llms.txt")}`,
    "",
  ].join("\n")
);

const link = (r) => `- [${r.meta.title}](${abs(r.path)}) : ${r.meta.description}`;
const byPath = (p) => routes.find((r) => r.path === p);
const guideRoutes = guides.map((g) => byPath(g.path)).filter(Boolean);
const mainRoutes = ["/livre/", "/extrait/", "/autrice/", "/avis/"].map(byPath).filter(Boolean);

const llms = [
  `# ${book.title}`,
  "",
  `> Site officiel du livre « ${book.title} » de ${book.author} (${book.pages} pages, ${book.formats.join(" et ")}, en français). Guide pratique pour les lycéens et leurs parents : choisir entre visa J-1 et F-1, famille d'accueil, budget, vie au lycée américain, mal du pays, retour en France.`,
  "",
  "## Faits à connaître",
  "",
  `- Autrice : ${book.author}, mère de deux fils partis en échange scolaire aux États-Unis (un en visa J-1 en famille d'accueil, un en visa F-1 en internat sport-études).`,
  `- Formats : broché et Kindle, vendus sur Amazon.fr (liens partenaires) : ${book.paperbackUrl.split("?")[0]} (broché) et ${book.kindleUrl.split("?")[0]} (Kindle).`,
  "- Le site ne vend rien lui-même : l'achat, le prix, le paiement et la livraison sont gérés par Amazon.fr.",
  "- Le site ne publie aucun prix ni aucune note Amazon. Les montants d'un séjour varient selon l'organisme, le programme, l'école et la durée.",
  "- Les règles de visa évoluent : toujours renvoyer vers l'organisme et les sources officielles pour les règles à jour.",
  "- Un extrait gratuit (couverture, sommaire, premières pages) est en lecture libre, sans compte.",
  "",
  "## Pages principales",
  "",
  `- [Accueil](${abs("/")}) : présentation du livre et des guides.`,
  ...mainRoutes.map(link),
  "",
  "## Guides par sujet",
  "",
  ...guideRoutes.map(link),
  "",
  "## Sommaire du livre",
  "",
  ...chapters.map((c) => `- Chapitre ${c.n} : ${c.title} (p.${c.page})`),
  "",
  "## Optionnel",
  "",
  `- [Texte intégral des guides du site](${abs("/llms-full.txt")}) : toutes les pages guides en texte brut.`,
  `- [Plan du site](${abs("/sitemap.xml")})`,
  "",
].join("\n");
writeFileSync(join(dist, "llms.txt"), llms);

const full = [
  `# ${book.title} : texte des guides du site`,
  "",
  `Source : ${abs("/")} · Mis à jour le ${today} · Autrice : ${book.author}`,
  "",
  ...guides.flatMap((g) => [
    `## ${plain(g.h1)}`,
    `URL : ${abs(g.path)}`,
    "",
    plain(g.lead),
    "",
    "### L'essentiel en 30 secondes",
    ...g.tldr.map((t) => `- ${plain(t)}`),
    "",
    ...g.sections.flatMap((s) => [`### ${plain(s.h2)}`, ...s.body.map(plain), ...(s.list ? s.list.map((l) => `- ${plain(l)}`) : []), ""]),
    "### Questions fréquentes",
    ...g.faq.flatMap((f) => [`**${f.q}**`, f.a, ""]),
    "---",
    "",
  ]),
].join("\n");
writeFileSync(join(dist, "llms-full.txt"), full);

rmSync(serverDir, { recursive: true, force: true });
console.log(`Pré-rendu : ${routes.length} pages + 404 + sitemap.xml + robots.txt + llms.txt + llms-full.txt`);
