// src/components/Seo.tsx
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  image?: string;
};

export default function Seo({
  title,
  description,
  canonical,
  image,
}: SeoProps) {
  const defaultImage =
    image ??
    "https://www.reussir-son-annee-de-high-school-aux-etats-unis.com/cover.jpg";

  const robots = "index,follow";

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={defaultImage} />
      {canonical ? <meta property="og:url" content={canonical} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  );
}
