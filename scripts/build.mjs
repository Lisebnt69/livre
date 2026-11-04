// Aiguillage du build, piloté par SITE_MODE (ou --full / --minimal).
//   minimal          : une seule page (couverture + lien Amazon), voir scripts/build-minimal.mjs
//   full (défaut)    : site complet pré-rendu (24 pages, sitemap, robots.txt, llms.txt)
// Mode d'emploi pour revenir au site complet : docs/ARCHIVE-SITE-COMPLET.md
import { spawnSync } from "node:child_process";

const flag = process.argv.includes("--full") ? "full" : process.argv.includes("--minimal") ? "minimal" : null;
const mode = flag ?? process.env.SITE_MODE ?? "full";

const run = (cmd) => {
  const r = spawnSync(cmd, { stdio: "inherit", shell: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

console.log(`Build en mode « ${mode} »`);

if (mode === "full") {
  run("npx vite build");
  run("npx vite build --ssr src/entry-server.tsx --outDir dist-server");
  run("node scripts/prerender.mjs");
} else if (mode === "minimal") {
  run("node scripts/build-minimal.mjs");
} else {
  console.error(`SITE_MODE inconnu : « ${mode} » (attendu : minimal ou full)`);
  process.exit(1);
}
