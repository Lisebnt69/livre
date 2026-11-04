// Moteur low poly : formes facettées, rendu SVG déterministe. Utilisé par scripts/lowpoly.mjs.
function makeRng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
export const toHex = (c) => "#" + c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
export const mix = (a, b, t) => toHex(hex(a).map((v, i) => v + (hex(b)[i] - v) * t));
export const shade = (c, amt) => (amt >= 0 ? mix(c, "#ffffff", amt) : mix(c, "#000000", -amt));

export function scene(w, h, seed) {
  const rnd = makeRng(seed);
  const j = (a) => (rnd() - 0.5) * 2 * a;
  const polys = [];
  const add = (pts, fill) => polys.push({ pts, fill });
  const centroid = (pts) => [pts.reduce((s, p) => s + p[0], 0) / pts.length, pts.reduce((s, p) => s + p[1], 0) / pts.length];

  // Facette éclairée depuis le haut à gauche : plus claire quand elle est en haut à gauche de la forme.
  const lit = (base, tri, center, size, k = 0.12, noise = 0.05) => {
    const [cx, cy] = centroid(tri);
    const d = (-(cx - center[0]) - (cy - center[1])) / size;
    return shade(base, d * k + j(noise));
  };

  const api = {
    rnd,
    j,
    add,
    // Rectangle découpé en triangles (ciel, sol, murs) ; color(x, y) donne la teinte de base.
    grid(x, y, gw, gh, cols, rows, color, jit = 0.3, noise = 0.03) {
      const P = [];
      for (let r = 0; r <= rows; r++) {
        P.push([]);
        for (let c = 0; c <= cols; c++) {
          const edgeX = c === 0 || c === cols;
          const edgeY = r === 0 || r === rows;
          P[r].push([
            x + (c / cols) * gw + (edgeX ? 0 : j((gw / cols) * jit)),
            y + (r / rows) * gh + (edgeY ? 0 : j((gh / rows) * jit)),
          ]);
        }
      }
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
          const a = P[r][c], b = P[r][c + 1], d = P[r + 1][c], e = P[r + 1][c + 1];
          const tris = (r + c) % 2 ? [[a, b, e], [a, e, d]] : [[a, b, d], [b, e, d]];
          for (const t of tris) {
            const [cx, cy] = centroid(t);
            add(t, shade(color(cx, cy), j(noise)));
          }
        }
    },
    // Polygone convexe en éventail depuis un centre décalé.
    facet(pts, base, { k = 0.14, noise = 0.05, split = 1 } = {}) {
      const ring = [];
      pts.forEach((p, i) => {
        const q = pts[(i + 1) % pts.length];
        for (let s = 0; s < split; s++) {
          const t = s / split + (s ? j(0.08) : 0);
          ring.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]);
        }
      });
      const c0 = centroid(pts);
      const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
      const size = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)) || 1;
      const c = [c0[0] + j(size * 0.08), c0[1] + j(size * 0.08)];
      ring.forEach((p, i) => {
        const t = [c, p, ring[(i + 1) % ring.length]];
        add(t, lit(base, t, c0, size, k, noise));
      });
    },
    rect(x, y, rw, rh, fill) {
      add([[x, y], [x + rw, y], [x + rw, y + rh], [x, y + rh]], fill);
    },
    // Sapin low poly : moitié gauche éclairée, moitié droite dans l'ombre.
    pine(x, base, ht, color = "#273472") {
      api.rect(x - ht * 0.03, base - ht * 0.12, ht * 0.06, ht * 0.12, "#5B3A35");
      const tiers = 3;
      for (let i = 0; i < tiers; i++) {
        const bottom = base - ht * 0.08 - i * ht * 0.24;
        const top = bottom - ht * 0.46;
        const half = ht * (0.3 - i * 0.065);
        const mid = [x + j(ht * 0.02), bottom + ht * 0.03];
        const apex = [x, top];
        add([apex, [x - half, bottom], mid], shade(color, 0.16 + j(0.03)));
        add([apex, mid, [x + half, bottom]], shade(color, -0.12 + j(0.03)));
      }
    },
    cloud(cx, cy, s, color = "#FFFFFF") {
      const n = 9;
      const pts = Array.from({ length: n }, (_, i) => {
        const a = (i / n) * Math.PI * 2;
        const r = (i % 2 ? 0.75 : 1) * s;
        return [cx + Math.cos(a) * r * 1.9, cy + Math.sin(a) * r * 0.7 - (Math.sin(a) < 0 ? s * 0.15 : 0)];
      });
      api.facet(pts, color, { k: 0.1, noise: 0.03 });
    },
    sun(cx, cy, r, color) {
      const n = 12;
      api.facet(Array.from({ length: n }, (_, i) => [cx + Math.cos((i / n) * 6.283) * r, cy + Math.sin((i / n) * 6.283) * r]), color, { k: 0.08, noise: 0.03 });
    },
    // Drapeau américain simplifié, légèrement ondulé.
    flag(x, y, fw, fh) {
      const wave = (px) => Math.sin(((px - x) / fw) * Math.PI * 1.5) * fh * 0.08;
      const stripes = 7;
      for (let i = 0; i < stripes; i++) {
        const y0 = y + (i / stripes) * fh, y1 = y + ((i + 1) / stripes) * fh;
        const n = 4;
        for (let s = 0; s < n; s++) {
          const x0 = x + (s / n) * fw, x1 = x + ((s + 1) / n) * fw;
          const base = i % 2 ? "#FFFFFF" : "#A1232B";
          add([[x0, y0 + wave(x0)], [x1, y0 + wave(x1)], [x1, y1 + wave(x1)], [x0, y1 + wave(x0)]], shade(base, s % 2 ? -0.08 : 0.02));
        }
      }
      const cw = fw * 0.42, ch = fh * (4 / 7);
      add([[x, y + wave(x)], [x + cw, y + wave(x + cw)], [x + cw, y + ch + wave(x + cw)], [x, y + ch + wave(x)]], "#273472");
    },
    window(x, y, ww, wh, glass = "#3A4A8C", frame = "#FFFFFF") {
      api.rect(x - 3, y - 3, ww + 6, wh + 6, frame);
      add([[x, y], [x + ww, y], [x, y + wh]], shade(glass, 0.18));
      add([[x + ww, y], [x + ww, y + wh], [x, y + wh]], glass);
    },
    // Texte (étiquettes courtes). Police système : le SVG est servi en <img>, sans les polices du site.
    text(x, y, str, size, fill = "#1B2350", { anchor = "middle", weight = 800, rotate = 0 } = {}) {
      polys.push({ raw: `<text x="${x}" y="${y}" font-family="Helvetica Neue,Arial,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"${rotate ? ` transform="rotate(${rotate} ${x} ${y})"` : ""}>${str}</text>` });
    },
    // Pavé en perspective cavalière : face avant, dessus (clair), côté droit (sombre).
    box(x, y, bw, bh, depth, color, { top, side, split = 0 } = {}) {
      const dx = depth * 0.7, dy = -depth * 0.45;
      add([[x, y], [x + bw, y], [x + bw + dx, y + dy], [x + dx, y + dy]], top ?? shade(color, 0.22));
      add([[x + bw, y], [x + bw + dx, y + dy], [x + bw + dx, y + bh + dy], [x + bw, y + bh]], side ?? shade(color, -0.22));
      if (split) api.grid(x, y, bw, bh, split, Math.max(1, Math.round((split * bh) / bw)), () => color, 0.15, 0.035);
      else api.facet([[x, y], [x + bw, y], [x + bw, y + bh], [x, y + bh]], color, { k: 0.08, noise: 0.03 });
    },
    ellipse(cx, cy, rx, ry, n = 12) {
      return Array.from({ length: n }, (_, i) => [cx + Math.cos((i / n) * 6.2832) * rx, cy + Math.sin((i / n) * 6.2832) * ry]);
    },
    // Cylindre vertical : corps en bandes éclairées depuis la gauche, couvercle elliptique.
    cyl(cx, top, rx, ht, color, { n = 12, cap } = {}) {
      const ry = rx * 0.32;
      for (let i = 0; i < n / 2; i++) {
        const a0 = (i / (n / 2)) * Math.PI, a1 = ((i + 1) / (n / 2)) * Math.PI;
        const x0 = cx - Math.cos(a0) * rx, x1 = cx - Math.cos(a1) * rx;
        const y0 = Math.sin(a0) * ry, y1 = Math.sin(a1) * ry;
        add([[x0, top + y0], [x1, top + y1], [x1, top + ht + y1], [x0, top + ht + y0]], shade(color, 0.18 - (i / (n / 2)) * 0.4 + j(0.02)));
      }
      api.facet(api.ellipse(cx, top, rx, ry, n), cap ?? shade(color, 0.25), { k: 0.06, noise: 0.03 });
    },
    disc(cx, cy, r, color, opts) {
      api.facet(api.ellipse(cx, cy, r, r, 12), color, { k: 0.16, noise: 0.04, ...opts });
    },
    star(cx, cy, r, color) {
      const pts = Array.from({ length: 10 }, (_, i) => {
        const a = -Math.PI / 2 + (i / 10) * 6.2832, rr = i % 2 ? r * 0.42 : r;
        return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr];
      });
      pts.forEach((p, i) => add([[cx, cy], p, pts[(i + 1) % 10]], shade(color, i % 2 ? -0.08 : 0.06)));
    },
    svg(title) {
      const body = polys
        .map(({ pts, fill, raw }) => raw ?? `<path d="M${pts.map((p) => p.map((v) => v.toFixed(1)).join(" ")).join("L")}Z" fill="${fill}" stroke="${fill}" stroke-width=".6" stroke-linejoin="round"/>`)
        .join("");
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`;
    },
  };
  return api;
}

export const vgrad = (stops) => (_x, y) => {
  for (let i = 0; i < stops.length - 1; i++) {
    const [y0, c0] = stops[i], [y1, c1] = stops[i + 1];
    if (y <= y1) return mix(c0, c1, Math.max(0, (y - y0) / (y1 - y0)));
  }
  return stops[stops.length - 1][1];
};

