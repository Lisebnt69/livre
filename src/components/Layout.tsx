import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { book } from "../data/book";
import { AffiliateNote, AmazonButton } from "./Amazon";
import { openCookiePreferences } from "../lib/cookieConsent";
import { trackPageView } from "../lib/analytics";

const nav = [
  { to: "/livre/", label: "Le livre" },
  { to: "/parents/", label: "Parents" },
  { to: "/lyceens/", label: "Lycéens" },
  { to: "/sport-etudes/", label: "Sportifs" },
  { to: "/avis/", label: "Avis" },
];

function ScrollAndTrack() {
  const { pathname, hash } = useLocation();
  const [first, setFirst] = useState(true);
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    if (first) return setFirst(false);
    trackPageView(pathname, document.title);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const link = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-[15px] font-semibold transition-colors ${
      isActive ? "text-ink" : "text-ink/70 hover:text-ink"
    } ${isActive ? "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-locker" : ""}`;

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex flex-col leading-none" aria-label="Accueil, Guide High School USA">
          <span className="font-display text-[19px] font-extrabold tracking-tight text-ink" style={{ fontStretch: "80%" }}>
            Guide High School USA
          </span>
          <span className="mt-1 text-[12px] text-muted">par {book.author}</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={link}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <AmazonButton placement="header" className="hidden !py-2 !text-[14px] sm:inline-flex">
            Voir sur Amazon
          </AmazonButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-rule lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Menu mobile" className="border-t border-rule bg-paper lg:hidden">
          <ul className="wrap py-3">
            {[{ to: "/", label: "Accueil" }, ...nav, { to: "/extrait/", label: "Extrait gratuit" }, { to: "/autrice/", label: "L’autrice" }].map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-rule py-3.5 text-lg font-semibold ${
                      isActive ? "text-locker" : "text-ink"
                    }`
                  }
                >
                  {n.label}
                  <ArrowUpRight size={18} className="text-ink/40" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const col = "space-y-2.5 text-[15px] text-card/75";
  const a = "hover:text-card hover:underline underline-offset-4";
  return (
    <footer className="bg-ink pb-24 pt-16 text-card sm:pb-16">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl font-extrabold leading-tight" style={{ fontStretch: "80%" }}>
              {book.title}
            </p>
            <p className="mt-3 max-w-md text-card/75">
              Le guide concret pour les lycéens et leurs parents, avant, pendant et après une année scolaire aux États-Unis.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AmazonButton variant="light" placement="footer">
                Voir le livre sur Amazon
              </AmazonButton>
              <a
                href={book.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-card/25 text-card hover:bg-card/10"
              >
                <img src="/instagram_logo_blanc.png" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                Instagram
              </a>
            </div>
          </div>

          <nav aria-label="Pages du livre" className="lg:col-span-3 lg:col-start-7">
            <p className="mb-4 font-display text-lg font-bold" style={{ fontStretch: "85%" }}>Le livre</p>
            <ul className={col}>
              <li><Link className={a} to="/livre/">Sommaire et détails</Link></li>
              <li><Link className={a} to="/extrait/">Extrait gratuit</Link></li>
              <li><Link className={a} to="/avis/">Avis des lecteurs</Link></li>
              <li><Link className={a} to="/autrice/">L’autrice</Link></li>
            </ul>
          </nav>

          <nav aria-label="Guides par thème" className="lg:col-span-3">
            <p className="mb-4 font-display text-lg font-bold" style={{ fontStretch: "85%" }}>Guides gratuits</p>
            <ul className={col}>
              <li><Link className={a} to="/parents/">Pour les parents</Link></li>
              <li><Link className={a} to="/lyceens/">Pour les lycéens</Link></li>
              <li><Link className={a} to="/sport-etudes/">Sport-études et bourses</Link></li>
              <li><Link className={a} to="/j1-ou-f1/">Visa J-1 ou F-1</Link></li>
              <li><Link className={a} to="/famille-d-accueil/">Famille d’accueil</Link></li>
              <li><Link className={a} to="/mal-du-pays/">Mal du pays</Link></li>
              <li><Link className={a} to="/retour-en-france/">Le retour en France</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-card/15 pt-6 text-sm text-card/60 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <AffiliateNote className="!text-card/60" />
            <p className="mt-1">© {new Date().getFullYear()} {book.author}. Tous droits réservés.</p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link className={a} to="/mentions-legales/">Mentions légales</Link></li>
            <li><Link className={a} to="/politique-confidentialite/">Confidentialité</Link></li>
            <li>
              <button type="button" onClick={openCookiePreferences} className={a}>
                Gérer les cookies
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/** Barre d'achat mobile : visible dès que le visiteur a dépassé le haut de page. */
function StickyBuyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 520);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-card/95 px-4 py-3 backdrop-blur transition-transform duration-200 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-3">
        <img src="/cover-480.jpg" alt="" width={36} height={55} className="h-[55px] w-9 rounded-[3px] shadow-lift" />
        <p className="min-w-0 flex-1 text-[13px] leading-tight text-ink">
          <span className="block font-bold">Le guide High School USA</span>
          <span className="text-muted">Broché ou Kindle</span>
        </p>
        <AmazonButton placement="sticky-mobile" className="!px-4 !py-2.5" >
          Amazon
        </AmazonButton>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-card">
        Aller au contenu
      </a>
      <ScrollAndTrack />
      <Header />
      <main id="contenu">{children}</main>
      <Footer />
      <StickyBuyBar />
    </>
  );
}
