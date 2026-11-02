import { abs, site } from "../data/site";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Balises <head> écrites dans le HTML pré-rendu (lu par Google sans exécuter de JS). */
export function headTags(m: PageMeta): string {
  const url = abs(m.path);
  const img = abs(m.image ?? site.ogImage);
  const t = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="${m.noindex ? "noindex,follow" : "index,follow,max-image-preview:large"}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${site.locale}" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  ];
  if (m.jsonLd?.length) {
    const graph = { "@context": "https://schema.org", "@graph": m.jsonLd };
    t.push(
      `<script type="application/ld+json" id="ld-json">${JSON.stringify(graph).replace(/</g, "\\u003c")}</script>`
    );
  }
  return t.join("\n    ");
}

/** Met à jour <head> lors d'une navigation côté client. */
export function applyMeta(m: PageMeta) {
  document.title = m.title;
  const set = (sel: string, attr: string, val: string, create: () => HTMLElement) => {
    let el = document.head.querySelector<HTMLElement>(sel);
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    el.setAttribute(attr, val);
  };
  const meta = (key: "name" | "property", name: string, val: string) =>
    set(`meta[${key}="${name}"]`, "content", val, () => {
      const e = document.createElement("meta");
      e.setAttribute(key, name);
      return e;
    });
  const img = abs(m.image ?? site.ogImage);
  meta("name", "description", m.description);
  meta("name", "robots", m.noindex ? "noindex,follow" : "index,follow,max-image-preview:large");
  meta("property", "og:title", m.title);
  meta("property", "og:description", m.description);
  meta("property", "og:url", abs(m.path));
  meta("property", "og:image", img);
  meta("name", "twitter:title", m.title);
  meta("name", "twitter:description", m.description);
  meta("name", "twitter:image", img);
  set('link[rel="canonical"]', "href", abs(m.path), () => {
    const e = document.createElement("link");
    e.setAttribute("rel", "canonical");
    return e;
  });
  const old = document.getElementById("ld-json");
  old?.remove();
  if (m.jsonLd?.length) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "ld-json";
    s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": m.jsonLd });
    document.head.appendChild(s);
  }
}
