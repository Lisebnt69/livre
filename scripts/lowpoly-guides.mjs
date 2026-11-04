// Une scène low poly par guide (bandeau 1200 x 500 sous le hero de chaque page guide).
// Le nom de fichier est le slug du guide : public/illustrations/guide-<slug>.svg
import { scene, vgrad, shade, mix } from "./lowpoly-lib.mjs";

const W = 1200;
const H = 500;
const NAVY = "#273472", INK = "#1B2350", RED = "#A1232B", RED_D = "#7E1A21", CREAM = "#F6EEDD", GOLD = "#E2B85A", GLOW = "#FFD9A0";

/* ---------- décors ---------- */
function outdoor(s, { sky = ["#A9BEF4", "#EAF0FF"], ground = ["#EFE5CF", "#E0D1B2"], horizon = 370, hills = ["#8FA3DD", "#7C92D4"] } = {}) {
  s.grid(0, 0, W, horizon, 8, 4, vgrad([[0, sky[0]], [horizon, sky[1]]]), 0.35, 0.025);
  if (hills) {
    s.facet([[0, horizon - 40], [240, horizon - 110], [520, horizon - 50], [520, horizon + 10], [0, horizon + 10]], hills[0], { k: 0.1 });
    s.facet([[640, horizon - 50], [940, horizon - 120], [1200, horizon - 70], [1200, horizon + 10], [640, horizon + 10]], hills[1], { k: 0.1 });
  }
  s.grid(0, horizon, W, H - horizon, 9, 2, vgrad([[horizon, ground[0]], [H, ground[1]]]), 0.35, 0.03);
}

function studio(s, { wall = ["#D9E3FF", "#EEF2FF"], desk = "#E9DCC4", deskY = 330 } = {}) {
  s.grid(0, 0, W, deskY, 8, 3, vgrad([[0, wall[0]], [deskY, wall[1]]]), 0.35, 0.02);
  s.grid(0, deskY, W, H - deskY, 9, 2, vgrad([[deskY, shade(desk, 0.06)], [H, shade(desk, -0.06)]]), 0.35, 0.025);
  s.rect(0, deskY - 3, W, 5, shade(desk, 0.18));
}

function house(s, x, base, w, h, { wall = CREAM, roof = RED, lit = false, door = NAVY, porch = false } = {}) {
  const y = base - h;
  const d = w * 0.22;
  s.add([[x + w, y], [x + w + d, y - d * 0.45], [x + w + d, base - d * 0.45], [x + w, base]], shade(wall, -0.16));
  s.grid(x, y, w, h, 4, 3, () => wall, 0.15, 0.012);
  const peak = [x + w / 2, y - h * 0.62];
  s.add([[x - w * 0.07, y + 3], peak, [x + w * 1.07, y + 3]], roof);
  s.add([peak, [x + w * 1.07, y + 3], [x + w * 1.07 + d, y + 3 - d * 0.45], [peak[0] + d, peak[1] - d * 0.45]], shade(roof, -0.22));
  s.add([peak, [x - w * 0.07, y + 3], [x + w * 0.22, y - h * 0.18]], shade(roof, 0.12));
  const ww = w * 0.17, wh = h * 0.3;
  const glass = lit ? GLOW : "#3A4A8C";
  s.window(x + w * 0.12, y + h * 0.16, ww, wh, glass);
  s.window(x + w * 0.71, y + h * 0.16, ww, wh, lit === "one" ? "#3A4A8C" : glass);
  s.rect(x + w * 0.42, base - h * 0.5, w * 0.16, h * 0.5, door);
  s.add([[x + w * 0.42, base - h * 0.5], [x + w * 0.58, base - h * 0.5], [x + w * 0.42, base - h * 0.2]], shade(door, 0.12));
  if (porch) {
    s.add([[x - 10, base - h * 0.56], [x + w + 10, base - h * 0.56], [x + w, base - h * 0.62], [x, base - h * 0.62]], NAVY);
    for (const px of [x + 4, x + w - 10]) s.rect(px, base - h * 0.56, 6, h * 0.56, "#E6E9F2");
  }
}

function plane(s, cx, cy, sc = 1, flip = false) {
  const f = flip ? -1 : 1;
  const P = (x, y) => [cx + x * sc * f, cy + y * sc];
  s.add([P(-40, 18), P(30, -16), P(46, -20), P(40, -10), P(-34, 26)], "#FFFFFF");
  s.add([P(-4, 6), P(14, -2), P(-22, -26), P(-30, -24)], "#DCE3F7");
  s.add([P(2, 4), P(18, -4), P(10, 26), P(0, 26)], "#C3CEEE");
  s.add([P(-34, 22), P(-26, 18), P(-46, 4), P(-50, 6)], RED);
}

function dashes(s, pts, color = "#FFFFFF", every = 2) {
  for (let i = 0; i < pts.length - 1; i += every) {
    const [a, b] = [pts[i], pts[i + 1]];
    const nx = -(b[1] - a[1]), ny = b[0] - a[0];
    const l = Math.hypot(nx, ny) || 1;
    const o = [(nx / l) * 2, (ny / l) * 2];
    s.add([[a[0] + o[0], a[1] + o[1]], [b[0] + o[0], b[1] + o[1]], [b[0] - o[0], b[1] - o[1]], [a[0] - o[0], a[1] - o[1]]], color);
  }
}
const arc = (x0, y0, x1, y1, lift, n = 28) =>
  Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n;
    return [x0 + (x1 - x0) * t, y0 + (y1 - y0) * t - Math.sin(t * Math.PI) * lift];
  });

function backpack(s, x, base, sc = 1, color = NAVY) {
  const P = (px, py) => [x + px * sc, base + py * sc];
  s.facet([P(0, 0), P(0, -110), P(14, -132), P(76, -132), P(90, -110), P(90, 0)], color, { k: 0.12 });
  s.facet([P(12, -10), P(12, -56), P(78, -56), P(78, -10)], shade(color, 0.12), { k: 0.08 });
  s.rect(...P(12, -58), 66 * sc, 4 * sc, RED);
  s.add([P(30, -132), P(36, -152), P(54, -152), P(60, -132), P(54, -132), P(50, -146), P(40, -146), P(36, -132)], shade(color, -0.2));
}

function book(s, x, base, w, h, depth, color, { label, stripe = "#FFFFFF" } = {}) {
  s.box(x, base - h, w, h, depth, color, { top: "#F7F2E8" });
  s.rect(x, base - h + h * 0.3, w, h * 0.08, stripe);
  if (label) s.text(x + w / 2, base - h * 0.35, label, Math.min(h * 0.3, 22), stripe);
}

function mug(s, x, base, color = "#FFFFFF", accent = RED) {
  s.add([[x + 78, base - 82], [x + 104, base - 74], [x + 104, base - 34], [x + 78, base - 26], [x + 78, base - 38], [x + 92, base - 42], [x + 92, base - 66], [x + 78, base - 70]], shade(color, -0.12));
  s.cyl(x + 40, base - 92, 40, 92, color, { cap: "#5B3A35" });
  s.rect(x + 8, base - 56, 64, 10, accent);
}

/* ---------- scènes ---------- */
const scenes = {
  // Parents : jour et nuit de part et d'autre de l'océan, le lien malgré le décalage horaire.
  parents(s) {
    s.grid(0, 0, W, 380, 8, 4, (x, y) => mix(mix("#1F2A5E", "#A9BEF4", Math.min(1, Math.max(0, (x - 300) / 600))), "#EAF0FF", (y / 380) * 0.35), 0.35, 0.02);
    for (const [x, y] of [[80, 60], [190, 120], [300, 50], [130, 200], [380, 150], [250, 260]]) s.star(x, y, 7, "#FFF4D6");
    s.disc(110, 120, 34, "#FFF4D6");
    s.sun(1080, 110, 46, "#FBD0D4");
    s.cloud(900, 200, 24);
    s.grid(0, 360, W, 140, 9, 2, vgrad([[360, "#6F86CF"], [500, "#4A5FAE"]]), 0.4, 0.05);
    s.facet([[0, 330], [330, 330], [380, 400], [360, 500], [0, 500]], "#E9DCC4", { k: 0.06, split: 2 });
    s.facet([[860, 400], [880, 330], [1200, 330], [1200, 500], [840, 500]], "#EFE5CF", { k: 0.06, split: 2 });
    house(s, 90, 360, 180, 110, { lit: true });
    s.pine(40, 360, 110, INK);
    house(s, 950, 360, 170, 104, { wall: "#F9FAFD", roof: NAVY, door: RED, porch: true });
    s.pine(1150, 362, 120);
    const a = arc(300, 230, 900, 230, 150);
    dashes(s, a, "#FFFFFF", 2);
    plane(s, 600, 86, 1.1);
  },

  // Lycéens : couloir de casiers bordeaux, comme sur la couverture.
  lyceens(s) {
    s.grid(0, 0, W, 380, 8, 3, vgrad([[0, "#D9E3FF"], [380, "#EEF2FF"]]), 0.3, 0.02);
    s.grid(0, 380, W, 120, 9, 2, vgrad([[380, "#E7E9F2"], [500, "#D3D7E6"]]), 0.3, 0.03);
    s.rect(0, 372, W, 10, "#C3CAE0");
    for (let i = 0; i < 14; i++) {
      const x0 = i * 90, c = ["#A1232B", "#FFFFFF", NAVY][i % 3];
      s.add([[x0, 18], [x0 + 90, 18], [x0 + 45, 62]], shade(c, i % 2 ? -0.05 : 0.04));
    }
    s.rect(0, 14, W, 5, "#9AA3C4");
    for (let i = 0; i < 9; i++) {
      const x = 150 + i * 100;
      const c = shade(RED, (i % 3) * 0.03 - 0.03);
      if (i === 6) {
        s.rect(x, 110, 96, 262, "#3D1015");
        s.add([[x + 96, 110], [x + 140, 96], [x + 140, 386], [x + 96, 372]], shade(RED, 0.08));
        s.rect(x + 6, 230, 84, 6, "#5E141A");
        book(s, x + 14, 230, 22, 70, 6, NAVY);
        book(s, x + 40, 230, 18, 60, 6, "#FFFFFF");
        continue;
      }
      s.grid(x, 110, 96, 262, 1, 3, () => c, 0.1, 0.03);
      s.rect(x + 96, 110, 4, 262, RED_D);
      for (let v = 0; v < 4; v++) s.rect(x + 22, 130 + v * 10, 52, 4, RED_D);
      s.rect(x + 78, 240, 6, 30, "#D9D2C2");
    }
    backpack(s, 330, 470, 1, NAVY);
    s.disc(1010, 440, 40, "#C2452F");
    s.add([[970, 440], [1050, 440], [1050, 443], [970, 443]], "#5E141A");
    s.add([[1009, 400], [1012, 400], [1012, 480], [1009, 480]], "#5E141A");
  },

  // Sport-études : stade, gradins, projecteurs, poteaux.
  "sport-etudes"(s) {
    s.grid(0, 0, W, 300, 8, 3, vgrad([[0, "#7C92D4"], [300, "#E6ECFF"]]), 0.35, 0.025);
    for (let r = 0; r < 5; r++) s.rect(0, 200 + r * 22, W, 22, shade(r % 2 ? NAVY : "#3A4A8C", r * 0.04));
    for (let i = 0; i < 30; i++) s.disc(20 + i * 40 + (i % 2) * 10, 196 + (i % 5) * 22, 6, ["#FFFFFF", RED, "#BFD0FF"][i % 3], { k: 0.05 });
    for (const x of [120, 1080]) {
      s.rect(x - 4, 40, 8, 160, "#C9C9D2");
      s.box(x - 40, 20, 80, 34, 10, "#E6E9F2");
      s.add([[x - 40, 54], [x + 40, 54], [x + 90, 196], [x - 90, 196]], "#EEF2FF");
    }
    s.facet([[60, 310], [1140, 310], [1200, 500], [0, 500]], "#BFD0FF", { k: 0.05, noise: 0.03, split: 3 });
    for (let t = 0; t <= 1.001; t += 0.125) {
      const x0 = 60 + 1080 * t, x1 = 1200 * t;
      s.add([[x0 - 1, 310], [x0 + 1, 310], [x1 + 2, 500], [x1 - 2, 500]], "#FFFFFF");
    }
    const post = (x, sc) => {
      s.rect(x - 3 * sc, 300 - 90 * sc, 6 * sc, 90 * sc, "#F5F5F5");
      s.rect(x - 40 * sc, 300 - 90 * sc, 80 * sc, 5 * sc, "#F5F5F5");
      s.rect(x - 40 * sc, 300 - 170 * sc, 5 * sc, 82 * sc, "#F5F5F5");
      s.rect(x + 35 * sc, 300 - 170 * sc, 5 * sc, 82 * sc, "#F5F5F5");
    };
    post(170, 1);
    post(1030, 1);
    // Ballon de football américain
    const bx = 600, by = 420;
    s.facet(Array.from({ length: 12 }, (_, i) => [bx + Math.cos((i / 12) * 6.283) * 70, by + Math.sin((i / 12) * 6.283) * 38]), "#8A3B26", { k: 0.18 });
    s.rect(bx - 26, by - 18, 52, 4, "#FFFFFF");
    for (let i = 0; i < 5; i++) s.rect(bx - 20 + i * 10, by - 24, 3, 16, "#FFFFFF");
  },

  // J-1 ou F-1 : la bifurcation et son panneau.
  "j1-ou-f1"(s) {
    outdoor(s);
    s.facet([[560, 500], [640, 500], [612, 420], [588, 420]], "#F8F1E1", { k: 0.04, noise: 0.02 });
    s.facet([[588, 420], [612, 420], [330, 372], [290, 374]], "#F8F1E1", { k: 0.04, noise: 0.02 });
    s.facet([[588, 420], [612, 420], [910, 374], [870, 372]], "#F8F1E1", { k: 0.04, noise: 0.02 });
    house(s, 150, 372, 150, 90, { wall: "#F9FAFD", roof: NAVY, door: RED, porch: true });
    s.box(900, 282, 180, 90, 22, RED, { split: 4 });
    for (const x of [918, 958, 1018, 1048]) s.window(x, 300, 16, 24);
    s.pine(80, 376, 120);
    s.pine(1130, 378, 110, "#33407E");
    s.rect(594, 170, 12, 260, "#8C6A4F");
    s.add([[606, 190], [760, 190], [800, 222], [760, 254], [606, 254]], RED);
    s.add([[594, 270], [440, 270], [400, 302], [440, 334], [594, 334]], NAVY);
    s.text(700, 236, "F-1", 40, "#FFFFFF");
    s.text(500, 316, "J-1", 40, "#FFFFFF");
  },

  // Famille d'accueil : la maison, le porche, la table de jardin, la clôture blanche.
  "famille-d-accueil"(s) {
    outdoor(s);
    s.sun(1060, 90, 44, "#FBD0D4");
    s.cloud(280, 90, 28);
    house(s, 240, 400, 300, 180, { wall: "#F9FAFD", roof: NAVY, door: RED, porch: true });
    s.add([[262, 236], [266, 236], [266, 300], [262, 300]], "#C9C9D2");
    s.flag(266, 238, 46, 28);
    s.pine(150, 404, 170);
    s.facet([[366, 400], [414, 400], [450, 500], [330, 500]], "#F8F1E1", { k: 0.04, noise: 0.02 });
    // Barbecue et table de pique-nique
    s.box(760, 380, 190, 14, 50, "#B7835B");
    for (const x of [776, 920]) s.rect(x, 394, 10, 50, "#8C6A4F");
    s.box(740, 430, 230, 10, 30, "#B7835B");
    s.cyl(1060, 330, 36, 40, INK, { cap: "#3A4A8C" });
    for (const x of [1036, 1080]) s.rect(x, 360, 5, 80, "#3A3A48");
    // Clôture
    for (let x = 0; x < W; x += 26) {
      if (x > 330 && x < 450) continue;
      s.add([[x, 500], [x, 448], [x + 8, 438], [x + 16, 448], [x + 16, 500]], shade("#FFFFFF", (x / 26) % 2 ? -0.04 : 0));
    }
    s.rect(0, 462, 330, 6, "#E6E9F2");
    s.rect(450, 462, 750, 6, "#E6E9F2");
  },

  // Mal du pays : nuit d'hiver, une seule fenêtre allumée.
  "mal-du-pays"(s) {
    outdoor(s, { sky: ["#141B45", "#3A4A8C"], ground: ["#E8EDFA", "#C9D3EE"], hills: ["#2B3770", "#222C5E"] });
    for (const [x, y] of [[90, 70], [220, 140], [380, 60], [520, 120], [700, 50], [820, 160], [980, 80], [1120, 140], [300, 240], [640, 220]]) s.star(x, y, 6, "#FFF4D6");
    s.disc(1020, 110, 40, "#FFF4D6");
    s.disc(1036, 98, 34, "#2B3770", { k: 0.02 });
    house(s, 470, 410, 260, 160, { wall: "#D9DEEE", roof: "#4A5FAE", door: INK, lit: "one" });
    s.add([[452, 252], [600, 150], [748, 252], [730, 252], [600, 166], [470, 252]], "#FFFFFF");
    for (const [x, b, h] of [[230, 420, 190], [340, 410, 140], [880, 420, 200], [990, 412, 150]]) {
      s.pine(x, b, h, "#1F2A5E");
      s.add([[x, b - h * 0.08 - 2 * h * 0.24 - h * 0.46], [x - h * 0.08, b - h * 0.08 - 2 * h * 0.24 - h * 0.3], [x + h * 0.08, b - h * 0.08 - 2 * h * 0.24 - h * 0.3]], "#FFFFFF");
    }
  },

  // Retour en France : Paris, la tour Eiffel, l'avion qui atterrit.
  "retour-en-france"(s) {
    outdoor(s, { sky: ["#8FA3DD", "#FBD0D4"], hills: null, horizon: 400 });
    s.sun(240, 300, 60, "#FFE9E4");
    // Tour Eiffel stylisée
    const tx = 760, tb = 400;
    s.add([[tx - 110, tb], [tx - 70, tb], [tx - 20, tb - 180], [tx - 34, tb - 180]], NAVY);
    s.add([[tx + 110, tb], [tx + 70, tb], [tx + 20, tb - 180], [tx + 34, tb - 180]], INK);
    s.add([[tx - 70, tb], [tx - 50, tb - 60], [tx, tb - 80], [tx + 50, tb - 60], [tx + 70, tb], [tx + 46, tb], [tx, tb - 50], [tx - 46, tb]], shade(NAVY, -0.05));
    s.rect(tx - 64, tb - 96, 128, 12, INK);
    s.rect(tx - 40, tb - 190, 80, 10, INK);
    s.add([[tx - 22, tb - 180], [tx + 22, tb - 180], [tx + 6, tb - 320], [tx - 6, tb - 320]], NAVY);
    s.add([[tx, tb - 180], [tx + 22, tb - 180], [tx + 6, tb - 320], [tx, tb - 320]], INK);
    s.rect(tx - 2, tb - 350, 4, 32, INK);
    // Immeubles parisiens
    for (const [x, w, h] of [[20, 150, 120], [180, 130, 140], [330, 160, 110], [900, 140, 130], [1050, 150, 115]]) {
      s.box(x, 400 - h, w, h, 14, "#F2E6CF", { top: "#6F7FB8", side: "#D9CBB0" });
      s.add([[x, 400 - h], [x + w, 400 - h], [x + w - 12, 400 - h - 24], [x + 12, 400 - h - 24]], "#6F7FB8");
      for (let r = 0; r < 3; r++) for (let c = 0; c < Math.floor(w / 36); c++) s.window(x + 12 + c * 36, 400 - h + 14 + r * 34, 16, 20, "#5A6BA8", "#FFFFFF");
    }
    dashes(s, arc(1180, 60, 520, 240, -40), "#FFFFFF", 2);
    plane(s, 520, 230, 1, true);
    // Valise au premier plan
    s.box(560, 400, 90, 70, 26, RED);
    s.rect(592, 386, 26, 6, INK);
  },

  // Budget : pièces, bocal d'épargne, calculatrice.
  budget(s) {
    studio(s);
    for (const [x, n] of [[180, 6], [270, 9], [360, 4]]) for (let i = 0; i < n; i++) s.cyl(x, 400 - i * 14, 40, 14, GOLD, { n: 10 });
    s.cyl(560, 230, 90, 190, "#DCE6FF", { cap: "#B7C6EE" });
    for (const [x, y] of [[520, 380], [570, 392], [610, 370], [540, 340], [590, 350]]) s.disc(x, y, 22, GOLD);
    s.rect(500, 215, 120, 10, INK);
    s.box(760, 260, 170, 180, 16, NAVY);
    s.rect(780, 278, 130, 40, "#BFD0FF");
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) s.box(784 + c * 32, 334 + r * 24, 22, 14, 4, c === 3 ? RED : "#E6E9F2");
    s.add([[960, 450], [1130, 430], [1150, 470], [980, 490]], "#C9D8C2");
    s.add([[970, 444], [1140, 424], [1150, 440], [980, 460]], "#D7E4D0");
  },

  // Bourses : trophée, toque de diplômé, diplôme roulé, livres.
  bourses(s) {
    studio(s);
    book(s, 150, 450, 260, 46, 30, NAVY);
    book(s, 170, 404, 230, 40, 30, RED);
    book(s, 160, 364, 250, 38, 30, "#FFFFFF", { stripe: NAVY });
    // Toque
    s.cyl(285, 270, 60, 40, INK, { cap: INK });
    s.add([[175, 262], [285, 222], [395, 262], [285, 302]], NAVY);
    s.add([[285, 222], [395, 262], [285, 302]], INK);
    s.rect(330, 266, 4, 60, GOLD);
    s.add([[324, 324], [340, 324], [336, 350], [328, 350]], GOLD);
    // Trophée
    s.box(590, 420, 160, 30, 20, INK);
    s.box(620, 390, 100, 30, 16, NAVY);
    s.rect(660, 320, 20, 70, GOLD);
    s.facet([[590, 170], [750, 170], [730, 260], [690, 320], [650, 320], [610, 260]], GOLD, { k: 0.2, split: 2 });
    s.add([[590, 186], [550, 196], [560, 250], [612, 266], [606, 250], [574, 240], [570, 208], [594, 204]], shade(GOLD, -0.12));
    s.add([[750, 186], [790, 196], [780, 250], [728, 266], [734, 250], [766, 240], [770, 208], [746, 204]], shade(GOLD, -0.2));
    s.star(670, 230, 24, "#FFF4D6");
    // Diplôme
    s.add([[860, 420], [1080, 380], [1092, 410], [872, 450]], "#FBF6EA");
    s.add([[1080, 380], [1092, 410], [1102, 404], [1090, 374]], "#E6DCC4");
    s.add([[956, 398], [972, 395], [978, 432], [962, 435]], RED);
  },

  // Sans organisme : carte dépliée, itinéraire, boussole, passeport.
  "sans-organisme"(s) {
    studio(s);
    const panels = [[[160, 470], [360, 440], [380, 330], [190, 350]], [[360, 440], [560, 470], [560, 350], [380, 330]], [[560, 470], [760, 440], [770, 330], [560, 350]]];
    panels.forEach((p, i) => s.facet(p, i % 2 ? "#E6EDFF" : "#F4F7FF", { k: 0.08, noise: 0.02 }));
    s.facet([[240, 420], [300, 380], [350, 400], [330, 440]], "#C9D8C2", { k: 0.05 });
    s.facet([[600, 380], [690, 360], [720, 410], [640, 430]], "#C9D8C2", { k: 0.05 });
    dashes(s, arc(250, 410, 690, 390, 50, 30), RED, 2);
    s.add([[690, 330], [710, 330], [700, 380]], RED);
    s.disc(700, 330, 12, RED);
    s.disc(700, 330, 4, "#FFFFFF");
    s.disc(930, 400, 72, INK);
    s.disc(930, 400, 60, "#F4F7FF");
    s.add([[930, 350], [942, 400], [918, 400]], RED);
    s.add([[930, 450], [942, 400], [918, 400]], "#9AA3C4");
    s.box(1040, 380, 90, 70, 8, NAVY);
    s.disc(1085, 410, 14, GOLD);
  },

  // Choisir un organisme : la liste de vérifications et la loupe.
  "choisir-organisme"(s) {
    studio(s);
    s.box(330, 60, 360, 400, 14, "#8C6A4F");
    s.rect(355, 90, 310, 350, "#FFFFFF");
    s.box(450, 46, 120, 30, 10, "#C9C9D2");
    for (let i = 0; i < 6; i++) {
      const y = 120 + i * 52;
      s.rect(380, y, 28, 28, "#E6E9F2");
      s.rect(426, y + 10, 200 - (i % 3) * 30, 8, "#C3CAE0");
      if (i !== 4) {
        s.add([[382, y + 14], [390, y + 10], [396, y + 18], [412, y - 4], [420, y + 2], [396, y + 28]], RED);
      }
    }
    // Loupe
    s.add([[860, 330], [880, 312], [990, 430], [970, 448]], INK);
    s.disc(820, 270, 90, NAVY);
    s.disc(820, 270, 74, "#DCE6FF");
    s.add([[770, 230], [800, 214], [790, 260]], "#FFFFFF");
    s.add([[1000, 470], [1120, 380], [1130, 392], [1010, 480]], RED);
  },

  // Calendrier : le grand calendrier mural, des étapes cochées, un billet d'avion.
  calendrier(s) {
    studio(s, { deskY: 380 });
    s.box(330, 50, 540, 330, 10, "#FFFFFF");
    s.rect(330, 50, 540, 70, RED);
    for (const x of [400, 600, 800]) s.rect(x - 6, 38, 12, 30, "#C9C9D2");
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 7; c++) {
        const x = 350 + c * 74, y = 136 + r * 58;
        s.rect(x, y, 66, 50, (r + c) % 2 ? "#F4F7FF" : "#EEF2FF");
        if ((r === 0 && c === 2) || (r === 1 && c === 5) || (r === 2 && c === 3)) s.add([[x + 14, y + 26], [x + 24, y + 20], [x + 30, y + 30], [x + 52, y + 8], [x + 58, y + 14], [x + 30, y + 42]], RED);
      }
    // Billet d'avion
    s.add([[920, 440], [1120, 420], [1128, 480], [928, 500]], "#FFFFFF");
    s.add([[1060, 426], [1120, 420], [1128, 480], [1068, 486]], NAVY);
    s.disc(140, 300, 70, NAVY);
    s.disc(140, 300, 58, "#FFFFFF");
    s.add([[138, 300], [142, 300], [142, 258], [138, 258]], INK);
    s.add([[140, 298], [140, 302], [172, 316], [174, 312]], RED);
  },

  // Assurance santé : bouclier, trousse de secours, flacon.
  assurance(s) {
    studio(s);
    s.facet([[480, 70], [600, 40], [720, 70], [710, 230], [600, 330], [490, 230]], NAVY, { k: 0.2, split: 2 });
    s.facet([[505, 92], [600, 66], [695, 92], [686, 222], [600, 302], [514, 222]], "#FFFFFF", { k: 0.06 });
    s.rect(580, 110, 40, 140, RED);
    s.rect(530, 160, 140, 40, RED);
    s.box(180, 330, 220, 130, 40, RED);
    s.rect(264, 360, 52, 70, "#FFFFFF");
    s.rect(240, 384, 100, 22, "#FFFFFF");
    s.rect(262, 316, 60, 12, RED_D);
    s.cyl(860, 330, 46, 120, "#FFFFFF", { cap: NAVY });
    s.rect(814, 380, 92, 40, "#BFD0FF");
    s.add([[960, 470], [1110, 430], [1120, 450], [970, 490]], "#F3D9C8");
    s.rect(1026, 444, 30, 26, "#E6C9B5");
  },

  // Quel livre lire : pile de livres, livre ouvert, lampe, tasse.
  "quel-livre"(s) {
    studio(s);
    book(s, 140, 460, 300, 44, 34, NAVY);
    book(s, 160, 416, 260, 38, 30, "#FFFFFF", { stripe: RED });
    book(s, 150, 378, 280, 46, 34, RED);
    book(s, 175, 332, 240, 36, 30, "#BFD0FF", { stripe: NAVY });
    s.add([[560, 440], [700, 410], [700, 300], [570, 320]], "#FFFFFF");
    s.add([[700, 410], [840, 440], [830, 320], [700, 300]], "#EEF2FF");
    for (let i = 0; i < 5; i++) {
      s.add([[590, 340 + i * 18], [680, 324 + i * 18], [680, 328 + i * 18], [590, 344 + i * 18]], "#C3CAE0");
      s.add([[720, 324 + i * 18], [810, 340 + i * 18], [810, 344 + i * 18], [720, 328 + i * 18]], "#C3CAE0");
    }
    s.rect(1000, 120, 8, 330, INK);
    s.box(950, 440, 110, 20, 20, INK);
    s.add([[1004, 120], [920, 90], [880, 200], [960, 214]], NAVY);
    s.add([[880, 200], [960, 214], [940, 330], [840, 310]], "#FFF4D6");
    mug(s, 1050, 460, "#FFFFFF");
  },

  // Niveau et notes : tableau noir, bulletin, pomme.
  niveau(s) {
    studio(s, { deskY: 360 });
    s.rect(240, 40, 720, 290, "#B7835B");
    s.grid(256, 56, 688, 258, 6, 2, () => "#2B3A3A", 0.2, 0.04);
    s.text(420, 210, "A+", 120, "#F4F4F0");
    s.text(700, 160, "GPA", 46, "#D9D9D2", { weight: 700 });
    s.add([[620, 220], [880, 220], [880, 226], [620, 226]], "#D9D9D2");
    s.add([[620, 262], [800, 262], [800, 268], [620, 268]], "#D9D9D2");
    s.rect(300, 330, 600, 10, "#9C6F4C");
    s.rect(420, 322, 30, 8, "#FFFFFF");
    // Bulletin, crayon, pomme
    s.add([[380, 470], [620, 440], [640, 380], [400, 400]], "#FFFFFF");
    s.text(520, 432, "A", 30, RED, { rotate: -7 });
    s.add([[660, 470], [840, 430], [846, 440], [668, 482]], GOLD);
    s.add([[840, 430], [866, 430], [846, 440]], "#F3D9C8");
    s.disc(980, 420, 50, "#C0242E");
    s.add([[980, 372], [986, 372], [988, 354], [982, 354]], "#5B3A35");
    s.add([[986, 364], [1016, 344], [1006, 370]], "#5E8C5A");
  },

  // Valise : la grosse valise, le sac à dos, le passeport, les écouteurs.
  valise(s) {
    studio(s, { wall: ["#FBD0D4", "#FCE6E8"], desk: "#E9DCC4" });
    s.box(330, 150, 300, 300, 70, RED, { split: 3 });
    for (const x of [400, 560]) s.rect(x, 150, 10, 300, RED_D);
    s.rect(440, 116, 80, 14, INK);
    s.rect(440, 116, 10, 36, INK);
    s.rect(510, 116, 10, 36, INK);
    s.flag(360, 200, 70, 42);
    s.disc(560, 380, 30, NAVY);
    s.star(560, 380, 16, "#FFFFFF");
    s.rect(380, 330, 90, 40, "#FFFFFF");
    s.text(425, 358, "USA", 24, NAVY);
    for (const x of [350, 610]) s.cyl(x, 452, 12, 16, INK);
    backpack(s, 760, 460, 1.4, NAVY);
    s.box(980, 420, 90, 50, 8, NAVY);
    s.disc(1025, 445, 12, GOLD);
    s.box(170, 440, 110, 14, 30, "#FFFFFF");
    s.rect(180, 430, 90, 10, RED);
  },

  // Cadeau pour la famille d'accueil : paquets, tasse, carte postale.
  cadeau(s) {
    studio(s);
    s.box(300, 220, 260, 230, 80, RED);
    s.rect(410, 220, 40, 230, "#FFFFFF");
    s.add([[560, 220], [616, 184], [616, 210], [560, 246]], "#E6E9F2");
    s.add([[410, 220], [450, 220], [506, 184], [466, 184]], "#FFFFFF");
    s.add([[430, 204], [370, 150], [350, 190], [420, 214]], "#FFFFFF");
    s.add([[440, 204], [510, 150], [526, 190], [450, 214]], "#E6E9F2");
    s.disc(436, 206, 14, "#FFFFFF");
    s.box(640, 330, 150, 120, 50, NAVY);
    s.rect(700, 330, 24, 120, GOLD);
    s.add([[790, 330], [824, 308], [824, 324], [790, 346]], shade(GOLD, -0.2));
    mug(s, 860, 460);
    s.add([[100, 460], [250, 430], [262, 490], [112, 500]], "#FFFFFF");
    s.add([[118, 458], [178, 446], [186, 486], [126, 496]], "#BFD0FF");
    s.add([[150, 486], [156, 452], [162, 486]], NAVY);
  },
  // Lettre à la famille d'accueil : la lettre, l'enveloppe timbrée, les photos.
  "lettre-famille"(s) {
    studio(s);
    s.add([[330, 470], [700, 440], [680, 120], [320, 140]], "#FFFFFF");
    s.text(510, 200, "Dear Host Family,", 30, NAVY, { rotate: -4, weight: 600 });
    for (let i = 0; i < 6; i++) s.add([[352, 250 + i * 34], [660, 228 + i * 34], [660, 231 + i * 34], [352, 253 + i * 34]], "#C3CAE0");
    s.add([[740, 470], [1010, 440], [1000, 300], [730, 320]], "#F4EBDD");
    s.add([[730, 320], [1000, 300], [870, 400]], "#E6DCC4");
    s.add([[930, 330], [990, 324], [994, 372], [934, 378]], "#FFFFFF");
    s.flag(938, 336, 48, 30);
    s.add([[120, 300], [270, 284], [286, 434], [136, 450]], "#FFFFFF");
    s.add([[134, 312], [258, 298], [270, 400], [146, 414]], "#BFD0FF");
    s.add([[146, 414], [270, 400], [264, 360], [200, 330], [150, 380]], "#8FA3DD");
    s.disc(232, 330, 14, "#FBD0D4");
    s.add([[1040, 470], [1150, 360], [1160, 368], [1050, 478]], RED);
    s.add([[1040, 470], [1036, 482], [1050, 478]], INK);
  },

  // Entretien et anglais : l'ordinateur en visio, les bulles de dialogue.
  "entretien-anglais"(s) {
    studio(s);
    s.add([[330, 440], [870, 440], [930, 480], [270, 480]], "#C9CEDC");
    s.box(370, 120, 460, 300, 12, INK);
    s.grid(390, 140, 420, 260, 4, 2, vgrad([[140, "#BFD0FF"], [400, "#8FA3DD"]]), 0.3, 0.03);
    s.facet([[560, 400], [560, 320], [600, 290], [640, 320], [640, 400]], NAVY, { k: 0.1 });
    s.disc(600, 262, 32, "#F3D9C8");
    s.facet([[120, 90], [330, 90], [330, 170], [190, 170], [160, 200], [166, 170], [120, 170]], "#FFFFFF", { k: 0.05 });
    s.text(225, 145, "Hi!", 40, NAVY);
    s.facet([[870, 70], [1110, 70], [1110, 150], [1050, 150], [1060, 182], [1020, 150], [870, 150]], RED, { k: 0.08 });
    s.text(990, 124, "Why the USA?", 30, "#FFFFFF");
    book(s, 980, 460, 140, 30, 24, "#FFFFFF", { stripe: NAVY });
    s.text(1050, 452, "ABC", 18, NAVY);
  },

  // Se faire des amis : la table devant le lycée, les sacs posés, le panier de basket.
  amis(s) {
    outdoor(s);
    s.sun(1060, 90, 40, "#FBD0D4");
    s.box(80, 230, 330, 140, 20, RED, { split: 4 });
    for (const x of [110, 170, 290, 350]) s.window(x, 260, 26, 34);
    s.rect(230, 300, 40, 70, NAVY);
    s.rect(1010, 180, 10, 260, "#9AA3C4");
    s.box(950, 150, 120, 80, 8, "#FFFFFF");
    s.rect(990, 196, 40, 30, RED);
    s.add([[985, 232], [1035, 232], [1028, 270], [992, 270]], "#E6E9F2");
    s.box(470, 390, 340, 16, 60, "#B7835B");
    for (const x of [490, 780]) s.rect(x, 406, 12, 60, "#8C6A4F");
    s.box(450, 450, 380, 10, 34, "#B7835B");
    backpack(s, 520, 390, 0.6, NAVY);
    backpack(s, 610, 390, 0.6, RED);
    backpack(s, 700, 390, 0.6, "#5B6FB8");
    s.disc(890, 460, 30, "#C2452F");
    s.add([[860, 460], [920, 460], [920, 462], [860, 462]], "#5E141A");
  },

  // Vocabulaire : le gymnase décoré pour Homecoming, boule à facettes, ballons, couronne.
  vocabulaire(s) {
    s.grid(0, 0, W, 380, 8, 3, vgrad([[0, "#1F2A5E"], [380, "#3A4A8C"]]), 0.3, 0.03);
    s.grid(0, 380, W, 120, 9, 2, vgrad([[380, "#C99A6B"], [500, "#A87A50"]]), 0.3, 0.03);
    for (let i = 0; i < 14; i++) s.add([[i * 90, 10], [i * 90 + 90, 10], [i * 90 + 45, 56]], ["#A1232B", "#FFFFFF", "#8FA3DD"][i % 3]);
    s.box(330, 90, 540, 80, 0, RED);
    s.text(600, 146, "HOMECOMING", 52, "#FFFFFF");
    s.rect(598, 170, 4, 30, "#C9C9D2");
    const bx = 600, by = 250, r = 52, c = 13;
    s.disc(bx, by, r, "#9AA3C4");
    for (let gy = by - r; gy < by + r; gy += c)
      for (let gx = bx - r; gx < bx + r; gx += c) {
        const cx = gx + c / 2, cy = gy + c / 2;
        if (Math.hypot(cx - bx, cy - by) > r - 8) continue;
        const k = ((gx - bx) / c + (gy - by) / c) % 2 ? 0.25 : -0.05;
        s.rect(gx + 1, gy + 1, c - 2, c - 2, shade("#B7BFD8", k - (cx - bx + cy - by) / (r * 6)));
      }
    for (const [x, y, c] of [[160, 250, RED], [230, 300, "#FFFFFF"], [110, 330, "#8FA3DD"], [1010, 260, "#FFFFFF"], [1080, 310, RED], [960, 330, "#8FA3DD"]]) {
      s.disc(x, y, 34, c);
      s.rect(x - 1, y + 34, 2, 380 - y - 34 + 40, "#C9C9D2");
    }
    s.add([[520, 470], [540, 420], [570, 450], [600, 410], [630, 450], [660, 420], [680, 470]], GOLD);
    for (const x of [540, 600, 660]) s.disc(x, x === 600 ? 410 : 420, 7, RED);
  },

  // Règles de la famille : le frigo couvert de post-it, l'horloge, le téléphone qui charge.
  "regles-famille"(s) {
    studio(s, { wall: ["#D9E3FF", "#EEF2FF"], desk: "#E3E6EE", deskY: 380 });
    s.box(150, 60, 240, 400, 30, "#F4F6FA", { split: 2 });
    s.rect(150, 200, 240, 6, "#D3D7E6");
    for (const y of [120, 250]) s.rect(360, y, 8, 60, "#C3CAE0");
    s.add([[190, 90], [270, 90], [270, 160], [190, 160]], "#FFF1A8");
    s.text(230, 135, "10 PM", 20, INK);
    s.add([[200, 230], [280, 226], [284, 300], [204, 304]], "#FBD0D4");
    s.text(242, 272, "Chores", 18, INK);
    s.add([[290, 300], [350, 296], [352, 350], [292, 354]], "#BFD0FF");
    s.disc(320, 324, 12, NAVY);
    s.disc(640, 140, 70, INK);
    s.disc(640, 140, 58, "#FFFFFF");
    s.add([[638, 140], [642, 140], [642, 96], [638, 96]], INK);
    s.add([[640, 138], [640, 142], [676, 156], [678, 152]], RED);
    s.box(560, 370, 300, 12, 40, "#C9CEDC");
    s.box(640, 330, 110, 40, 20, "#B7835B");
    s.add([[668, 334], [712, 334], [714, 270], [670, 270]], INK);
    s.add([[674, 278], [708, 278], [708, 328], [674, 328]], "#5B6FB8");
    mug(s, 960, 380, "#FFFFFF", NAVY);
  },
};

const ALT = {
  parents: "deux maisons de part et d'autre de l'océan, l'une la nuit, l'autre le jour, reliées par un avion",
  lyceens: "un couloir de lycée américain avec ses casiers bordeaux et un sac à dos",
  "sport-etudes": "un stade de football américain avec gradins, projecteurs et poteaux",
  "j1-ou-f1": "un chemin qui se sépare, avec un panneau J-1 vers une maison et F-1 vers un internat",
  "famille-d-accueil": "une maison américaine avec porche, drapeau, table de pique-nique et clôture blanche",
  "mal-du-pays": "une maison sous la neige, la nuit, avec une seule fenêtre allumée",
  "retour-en-france": "Paris et la tour Eiffel, un avion qui atterrit et une valise",
  budget: "des piles de pièces, un bocal d'épargne et une calculatrice",
  bourses: "un trophée, une toque de diplômé, une pile de livres et un diplôme roulé",
  "sans-organisme": "une carte dépliée avec un itinéraire, une boussole et un passeport",
  "choisir-organisme": "une liste de vérifications sur un porte-documents et une loupe",
  calendrier: "un grand calendrier mural avec des étapes cochées et un billet d'avion",
  assurance: "un bouclier avec une croix, une trousse de secours et un flacon",
  "quel-livre": "une pile de livres, un livre ouvert, une lampe et une tasse",
  niveau: "un tableau noir avec un A+, un bulletin, un crayon et une pomme",
  valise: "une grosse valise avec un drapeau américain, un sac à dos et un passeport",
  cadeau: "des paquets cadeaux, une tasse et une carte postale",
  "lettre-famille": "une lettre « Dear Host Family », une enveloppe timbrée et une photo",
  "entretien-anglais": "un ordinateur en visioconférence et des bulles de dialogue en anglais",
  amis: "une table devant le lycée avec trois sacs à dos et un panier de basket",
  vocabulaire: "un gymnase décoré pour Homecoming, avec boule à facettes, ballons et couronne",
  "regles-famille": "un frigo couvert de post-it, une horloge et un téléphone posé dans une corbeille",
};

export const guideScenes = Object.entries(scenes).map(([slug, draw], i) => [
  `guide-${slug}`,
  () => {
    const s = scene(W, H, 100 + i * 7);
    draw(s);
    return s.svg(`Illustration low poly : ${ALT[slug]}`);
  },
]);
export const guideAlts = ALT;
