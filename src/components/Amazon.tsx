import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, PackageCheck, Tablet } from "lucide-react";
import { book } from "../data/book";
import { trackEvent } from "../lib/analytics";

type Format = "paperback" | "kindle";
type Variant = "buy" | "ink" | "ghost" | "light";

// Classes écrites en toutes lettres : Tailwind purge les noms construits dynamiquement.
const VARIANT: Record<Variant, string> = {
  buy: "btn-buy",
  ink: "btn-ink",
  ghost: "btn-ghost",
  light: "btn-light",
};

const href = (f: Format) => (f === "kindle" ? book.kindleUrl : book.paperbackUrl);

/** Lien partenaire Amazon avec suivi GA4 (placement = où le clic a eu lieu). */
export function AmazonButton({
  format = "paperback",
  variant = "buy",
  placement,
  full = false,
  className = "",
  children,
}: {
  format?: Format;
  variant?: Variant;
  placement: string;
  full?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const label = children ?? (format === "kindle" ? "Version Kindle" : "Voir le livre sur Amazon");
  return (
    <a
      href={href(format)}
      target="_blank"
      rel="sponsored noopener"
      onClick={() => trackEvent("click_amazon", { placement, format, page_path: window.location.pathname })}
      className={`${VARIANT[variant]} ${full ? "w-full" : ""} ${className}`}
    >
      {label}
      <ArrowUpRight size={17} strokeWidth={2.25} aria-hidden="true" />
    </a>
  );
}

export function AffiliateNote({ className = "" }: { className?: string }) {
  // Mention exigée par le Programme Partenaires Amazon (formulation officielle)
  return (
    <p className={`text-[13px] leading-snug text-muted ${className}`}>
      En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
    </p>
  );
}

/** Boîte d'achat façon fiche produit : un seul geste attendu, aller sur Amazon. */
export function BuyBox({ placement, dark = false }: { placement: string; dark?: boolean }) {
  const box = dark
    ? "bg-card text-ink border-transparent"
    : "bg-card border-rule shadow-lift";
  return (
    <div className={`rounded-4xl border p-6 sm:p-7 ${box}`}>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-xl font-bold leading-tight">
          Le guide, {book.pages} pages
        </p>
        <p className="text-sm text-muted">Broché · Kindle</p>
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        <AmazonButton format="paperback" placement={`${placement}-broche`} full>
          Acheter le broché
        </AmazonButton>
        <AmazonButton format="kindle" variant="ghost" placement={`${placement}-kindle`} full>
          Version Kindle
        </AmazonButton>
      </div>

      <ul className="mt-5 space-y-2.5 text-[14.5px] leading-snug text-ink/85">
        <li className="flex gap-2.5">
          <PackageCheck size={18} className="mt-px shrink-0 text-locker" aria-hidden="true" />
          Prix, paiement et livraison affichés et gérés par Amazon.fr
        </li>
        <li className="flex gap-2.5">
          <Tablet size={18} className="mt-px shrink-0 text-locker" aria-hidden="true" />
          Kindle : à lire sur téléphone, tablette ou liseuse avec l’appli gratuite
        </li>
        <li className="flex gap-2.5">
          <BookOpen size={18} className="mt-px shrink-0 text-locker" aria-hidden="true" />
          <span>
            Pas encore sûr ?{" "}
            <Link to="/extrait/" className="link">
              Feuilletez les premières pages
            </Link>
          </span>
        </li>
      </ul>
      <AffiliateNote className="mt-4 border-t border-rule pt-3" />
    </div>
  );
}
