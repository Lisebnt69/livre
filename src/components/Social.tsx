import { book } from "../data/book";
import { trackEvent } from "../lib/analytics";

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.2 9.4v5.2l4.5-2.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <path d="M15.6 21v-6.8h2.2l.4-2.7h-2.6V9.8c0-.8.3-1.3 1.4-1.3h1.3V6.1c-.3 0-1.1-.1-2-.1-2 0-3.3 1.2-3.3 3.4v2.1H10.8v2.7H13V21" />
    </svg>
  );
}

const NETWORKS = [
  { id: "instagram", label: "Instagram", href: book.instagram, Icon: InstagramIcon },
  { id: "youtube", label: "YouTube", href: book.youtube, Icon: YoutubeIcon },
  { id: "tiktok", label: "TikTok", href: book.tiktok, Icon: TiktokIcon },
  { id: "facebook", label: "Facebook", href: book.facebook, Icon: FacebookIcon },
] as const;

/** Boutons réseaux sociaux : `dark` pour fonds sombres, sinon fonds clairs. */
export function SocialLinks({
  placement,
  dark = false,
  iconOnly = false,
  className = "",
}: {
  placement: string;
  dark?: boolean;
  iconOnly?: boolean;
  className?: string;
}) {
  const style = dark ? "border border-card/25 text-card hover:bg-card/10" : "btn-ghost";
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {NETWORKS.map(({ id, label, href, Icon }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_social", { network: id, placement })}
            className={`btn ${style} ${iconOnly ? "!h-11 !w-11 !px-0 !py-0" : ""}`}
            aria-label={`${label} (s’ouvre dans un nouvel onglet)`}
            title={label}
          >
            <Icon className={iconOnly ? "h-5 w-5" : "h-[18px] w-[18px]"} />
            {iconOnly ? <span className="sr-only">{label}</span> : label}
          </a>
        </li>
      ))}
    </ul>
  );
}
