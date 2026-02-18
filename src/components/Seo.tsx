import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
};

export default function Seo({ title, description, canonical, noindex }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const upsert = (nameOrProp: "name" | "property", key: string, content: string) => {
      const selector = `meta[${nameOrProp}="${key}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(nameOrProp, key);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    upsert("name", "description", description);

    // robots
    let robots = document.head.querySelector(`meta[name="robots"]`) as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.content = noindex ? "noindex,nofollow" : "index,follow";
    const defaultImage = "https://www.reussir-son-annee-de-high-school-aux-etats-unis.com/og-cover.jpg";

        upsert("property", "og:title", title);
        upsert("property", "og:description", description);
        upsert("property", "og:type", "website");
        upsert("property", "og:image", defaultImage);
        if (canonical) upsert("property", "og:url", canonical);

        upsert("name", "twitter:card", "summary_large_image");
        upsert("name", "twitter:title", title);
        upsert("name", "twitter:description", description);
        upsert("name", "twitter:image", defaultImage);


    // canonical
    if (canonical) {
      let link = document.head.querySelector(`link[rel="canonical"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, canonical, noindex]);

  return null;
}
