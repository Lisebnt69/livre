// Génère les illustrations low poly du site (SVG statiques dans public/illustrations/).
// Palette de la couverture : marine, bleus clairs, bordeaux, crème. Rendu déterministe (graine fixe).
// Lancer : node scripts/lowpoly.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { scene, vgrad } from "./lowpoly-lib.mjs";
import { guideScenes } from "./lowpoly-guides.mjs";

const OUT = new URL("../public/illustrations/", import.meta.url);
mkdirSync(OUT, { recursive: true });

/* 1. Le lycée américain (accueil) : bâtiment en brique, fronton, drapeau, sapins. */
function lycee() {
  const s = scene(640, 800, 7);
  s.grid(0, 0, 640, 540, 5, 6, vgrad([[0, "#9DB4F2"], [540, "#E8EEFF"]]), 0.35, 0.025);
  s.sun(500, 150, 56, "#FBD0D4");
  s.cloud(130, 130, 34);
  s.cloud(390, 235, 26, "#F4F6FF");
  // Collines au loin
  s.facet([[0, 470], [140, 400], [300, 455], [300, 540], [0, 540]], "#8FA3DD", { k: 0.1 });
  s.facet([[260, 460], [470, 390], [640, 440], [640, 540], [260, 540]], "#7C92D4", { k: 0.1 });
  s.grid(0, 530, 640, 270, 6, 3, vgrad([[530, "#EFE5CF"], [800, "#E0D1B2"]]), 0.35, 0.03);
  s.pine(40, 590, 200);
  s.pine(612, 585, 170, "#33407E");
  // Bâtiment
  s.facet([[540, 340], [596, 362], [596, 576], [540, 576]], "#7E1A21", { k: 0.08 });
  s.grid(92, 340, 448, 236, 7, 4, () => "#A1232B", 0.12, 0.04);
  s.rect(84, 328, 464, 14, "#F7F2E8");
  s.add([[540, 328], [604, 352], [604, 364], [548, 342]], "#D9D2C2");
  // Fenêtres
  for (const y of [372, 448]) for (const x of [114, 168, 222, 386, 440, 494]) s.window(x, y, 30, 46);
  // Portique et fronton
  s.facet([[236, 330], [404, 330], [320, 262]], "#FFFFFF", { k: 0.12, split: 2 });
  s.add([[262, 322], [378, 322], [320, 276]], "#E9E3D6");
  s.rect(236, 330, 168, 12, "#F1EBDF");
  for (const x of [248, 284, 344, 380]) {
    s.add([[x, 342], [x + 7, 342], [x + 7, 560], [x, 560]], "#FFFFFF");
    s.add([[x + 7, 342], [x + 13, 342], [x + 13, 560], [x + 7, 560]], "#DDD6C8");
  }
  s.rect(302, 488, 36, 72, "#273472");
  s.add([[302, 488], [338, 488], [302, 530]], "#3A4A8C");
  // Marches et allée
  s.rect(226, 560, 188, 8, "#F7F2E8");
  s.rect(214, 568, 212, 8, "#EDE6D8");
  s.facet([[290, 576], [350, 576], [430, 800], [210, 800]], "#F7EFDD", { k: 0.06, noise: 0.03 });
  // Mât et drapeau
  s.add([[58, 236], [62, 236], [62, 600], [58, 600]], "#C9C9D2");
  s.flag(62, 240, 84, 50);
  return s.svg("Illustration low poly : un lycée américain en brique, avec son drapeau");
}

/* 2. Le départ (page autrice) : une maison au crépuscule, l'avion qui s'éloigne. */
function depart() {
  const s = scene(640, 800, 21);
  s.grid(0, 0, 640, 560, 5, 7, vgrad([[0, "#273472"], [260, "#7C92D4"], [460, "#E3C6D4"], [560, "#FBD0D4"]]), 0.35, 0.025);
  s.sun(170, 520, 70, "#FFE9E4");
  s.cloud(470, 330, 30, "#F3D9E2");
  s.cloud(140, 250, 24, "#C7D3F5");
  // Trajectoire en pointillés et avion
  for (let i = 0; i < 9; i++) {
    const t = i / 9, x = 230 + t * 270, y = 470 - Math.sin(t * 1.4) * 300;
    s.add([[x, y], [x + 12, y - 9], [x + 14, y - 6], [x + 2, y + 3]], "#FFFFFF");
  }
  const P = (x, y) => [530 + x, 150 + y];
  s.add([P(-40, 18), P(30, -16), P(46, -20), P(40, -10), P(-34, 26)], "#FFFFFF");
  s.add([P(-4, 6), P(14, -2), P(-22, -26), P(-30, -24)], "#DCE3F7");
  s.add([P(2, 4), P(18, -4), P(10, 26), P(0, 26)], "#C3CEEE");
  s.add([P(-34, 22), P(-26, 18), P(-46, 4), P(-50, 6)], "#A1232B");
  // Collines
  s.facet([[0, 560], [180, 500], [380, 548], [380, 620], [0, 620]], "#3A4A8C", { k: 0.1 });
  s.facet([[280, 540], [480, 488], [640, 520], [640, 620], [280, 620]], "#33407E", { k: 0.1 });
  s.grid(0, 600, 640, 200, 6, 3, vgrad([[600, "#E9DCC4"], [800, "#D9C6A5"]]), 0.35, 0.03);
  s.pine(560, 680, 190);
  s.pine(612, 700, 150, "#1F2A5E");
  s.pine(52, 690, 160);
  // Maison
  const wx = 180, wy = 520, ww = 280, wh = 176;
  s.grid(wx, wy, ww, wh, 4, 3, () => "#F6EEDD", 0.15, 0.012);
  s.facet([[wx + ww, wy], [wx + ww + 54, wy - 26], [wx + ww + 54, wy + wh - 18], [wx + ww, wy + wh]], "#D9CDB4", { k: 0.06 });
  s.add([[wx - 22, wy + 4], [wx + 140, wy - 112], [wx + 302, wy + 4]], "#A1232B");
  s.add([[wx + 140, wy - 112], [wx + 302, wy + 4], [wx + 356, wy - 22], [wx + 194, wy - 138]], "#7E1A21");
  s.add([[wx + 140, wy - 112], [wx - 22, wy + 4], [wx + 60, wy - 30]], "#B8343C");
  s.rect(wx + 212, wy - 118, 26, 60, "#7E1A21");
  s.rect(wx + 208, wy - 124, 34, 8, "#5E141A");
  // Fenêtres allumées : quelqu'un attend des nouvelles
  for (const [x, y] of [[wx + 34, wy + 44], [wx + 194, wy + 44]]) {
    s.window(x, y, 50, 56, "#FFD9A0", "#FFFFFF");
    s.add([[x, y + 28], [x + 50, y + 28], [x + 50, y + 30], [x, y + 30]], "#FFFFFF");
  }
  s.rect(wx + 116, wy + 82, 46, 94, "#273472");
  s.add([[wx + 116, wy + 82], [wx + 162, wy + 82], [wx + 116, wy + 140]], "#3A4A8C");
  s.facet([[wx + 112, wy + wh], [wx + 166, wy + wh], [wx + 210, 800], [wx + 60, 800]], "#F3E8D2", { k: 0.05, noise: 0.03 });
  return s.svg("Illustration low poly : une maison au crépuscule et un avion qui s'éloigne");
}

/* 3. Deux chemins (page autrice) : famille d'accueil (J-1) et internat sport-études (F-1). */
function chemins() {
  const s = scene(1200, 520, 42);
  s.grid(0, 0, 1200, 360, 8, 4, vgrad([[0, "#A9BEF4"], [360, "#EAF0FF"]]), 0.35, 0.025);
  s.sun(600, 90, 44, "#FBD0D4");
  s.cloud(300, 80, 26);
  s.cloud(930, 110, 30, "#F4F6FF");
  s.facet([[0, 330], [220, 260], [460, 320], [460, 380], [0, 380]], "#8FA3DD", { k: 0.1 });
  s.facet([[700, 320], [960, 250], [1200, 300], [1200, 380], [700, 380]], "#7C92D4", { k: 0.1 });
  s.grid(0, 350, 1200, 170, 9, 2, vgrad([[350, "#EFE5CF"], [520, "#E0D1B2"]]), 0.35, 0.03);
  // Chemin qui se sépare
  s.facet([[560, 520], [640, 520], [612, 450], [588, 450]], "#F8F1E1", { k: 0.04, noise: 0.02 });
  s.facet([[588, 450], [612, 450], [400, 396], [360, 398]], "#F8F1E1", { k: 0.04, noise: 0.02 });
  s.facet([[588, 450], [612, 450], [840, 398], [800, 396]], "#F8F1E1", { k: 0.04, noise: 0.02 });

  // Gauche : maison de famille d'accueil, bardage blanc, porche, toit marine
  const hx = 200, hy = 250;
  s.grid(hx, hy, 220, 140, 4, 3, () => "#F9FAFD", 0.12, 0.012);
  for (let i = 1; i < 7; i++) s.rect(hx, hy + i * 20, 220, 1.5, "#E3E6F0");
  s.add([[hx + 220, hy], [hx + 262, hy - 18], [hx + 262, hy + 124], [hx + 220, hy + 140]], "#D7DCEA");
  s.add([[hx - 18, hy + 4], [hx + 110, hy - 84], [hx + 238, hy + 4]], "#273472");
  s.add([[hx + 110, hy - 84], [hx + 238, hy + 4], [hx + 280, hy - 14], [hx + 152, hy - 102]], "#1B2350");
  s.add([[hx + 110, hy - 84], [hx - 18, hy + 4], [hx + 46, hy - 26]], "#3A4A8C");
  s.window(hx + 26, hy + 14, 40, 36);
  s.window(hx + 154, hy + 14, 40, 36);
  s.window(hx + 26, hy + 84, 40, 36);
  s.window(hx + 154, hy + 84, 40, 36);
  s.rect(hx + 92, hy + 76, 36, 64, "#A1232B");
  s.add([[hx + 92, hy + 76], [hx + 128, hy + 76], [hx + 92, hy + 114]], "#B8343C");
  s.add([[hx - 10, hy + 68], [hx + 230, hy + 68], [hx + 220, hy + 58], [hx, hy + 58]], "#3A4A8C");
  for (const x of [hx + 4, hx + 210]) s.rect(x, hy + 68, 6, 72, "#E6E9F2");
  // Boîte aux lettres
  s.rect(hx - 40, hy + 100, 4, 44, "#8C8C99");
  s.add([[hx - 52, hy + 90], [hx - 24, hy + 90], [hx - 24, hy + 104], [hx - 52, hy + 104]], "#273472");
  s.add([[hx - 26, hy + 80], [hx - 22, hy + 80], [hx - 22, hy + 92], [hx - 26, hy + 92]], "#A1232B");
  s.pine(110, 400, 150);
  s.pine(470, 395, 120, "#33407E");

  // Droite : internat en brique avec tour, terrain de sport et poteaux
  const bx = 760, by = 236;
  s.grid(bx, by, 250, 150, 5, 3, () => "#A1232B", 0.12, 0.04);
  s.add([[bx + 250, by], [bx + 286, by + 16], [bx + 286, by + 150], [bx + 250, by + 150]], "#7E1A21");
  s.rect(bx - 6, by - 10, 262, 12, "#F7F2E8");
  for (const y of [by + 22, by + 82]) for (const x of [bx + 18, bx + 66, bx + 162, bx + 210]) s.window(x, y, 24, 36);
  // Tour de l'horloge
  s.grid(bx + 98, by - 90, 56, 90, 2, 3, () => "#A1232B", 0.12, 0.04);
  s.add([[bx + 92, by - 90], [bx + 160, by - 90], [bx + 126, by - 140]], "#273472");
  s.add([[bx + 126, by - 140], [bx + 160, by - 90], [bx + 126, by - 90]], "#1B2350");
  s.sun(bx + 126, by - 58, 15, "#FFFFFF");
  s.add([[bx + 125, by - 70], [bx + 128, by - 70], [bx + 128, by - 57], [bx + 125, by - 57]], "#273472");
  s.rect(bx + 108, by + 82, 36, 68, "#273472");
  // Terrain
  s.facet([[880, 420], [1180, 420], [1200, 500], [860, 500]], "#BFD0FF", { k: 0.06, noise: 0.03, split: 2 });
  for (const t of [0.25, 0.5, 0.75]) s.add([[880 + 300 * t - 1, 420], [880 + 300 * t + 1, 420], [860 + 340 * t + 1.5, 500], [860 + 340 * t - 1.5, 500]], "#FFFFFF");
  // Poteaux (football américain)
  const g = (x) => {
    s.rect(x, 360, 4, 62, "#F5F5F5");
    s.rect(x - 26, 360, 56, 4, "#F5F5F5");
    s.rect(x - 26, 318, 4, 44, "#F5F5F5");
    s.rect(x + 26, 318, 4, 44, "#F5F5F5");
  };
  g(1120);
  s.pine(720, 392, 130);
  return s.svg("Illustration low poly : à gauche une maison de famille d'accueil, à droite un internat avec son terrain de sport");
}

for (const [name, fn] of [["lycee-usa", lycee], ["depart", depart], ["deux-chemins", chemins], ...guideScenes]) {
  writeFileSync(new URL(`${name}.svg`, OUT), fn());
  console.log(`public/illustrations/${name}.svg`);
}
