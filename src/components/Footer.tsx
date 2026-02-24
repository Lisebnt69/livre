// src/components/Footer.tsx
import { book } from "../data/book";
import CTAButton from "./CTAButton";
import { openCookiePreferences } from "../lib/cookieConsent";

const INSTAGRAM_URL = "https://www.instagram.com/high_school_aux_usa/";
const INSTAGRAM_ICON_SRC = "/public/instagram_logo_blanc.png"; 

const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-white">
      {/* top hairline + glow */}
      <div className="h-px w-full bg-white/10" />
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="py-10">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Brand */}
            <div className="min-w-0">
              <p className="text-base md:text-lg font-extrabold tracking-tight">
                {book.author}
              </p>
              <p className="mt-1 text-sm text-white/70 max-w-2xl leading-relaxed">
                Guide concret pour préparer une année de High School aux États-Unis.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <CTAButton
                href={book.amazonUrl}
                label="Acheter sur Amazon"
                className="bg-primaryRed border-primaryRed hover:bg-white hover:text-primaryRed"
              />

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex items-center justify-center h-11 w-11 rounded-2xl
                           border border-white/15 bg-white/5 hover:bg-white/10 transition
                           shadow-[0_10px_30px_-20px_rgba(0,0,0,0.7)] overflow-hidden"
              >
                <img
                  src={INSTAGRAM_ICON_SRC}
                  alt="Instagram"
                  className="h-5 w-5 object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-white/10" />

          {/* Links row */}
          <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/75">
              <a className="hover:text-white transition" href="/">
                Accueil
              </a>
              <span className="text-white/25">•</span>
              <a className="hover:text-white transition" href="/livre/">
                Le livre
              </a>
              <span className="text-white/25">•</span>
              <a className="hover:text-white transition" href="/avis/">
                Avis
              </a>
              <span className="text-white/25">•</span>
              <a
                className="hover:text-white transition"
                href={book.amazonUrl}
                target="_blank"
                rel="noreferrer"
              >
                Amazon 
              </a>
            </nav>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/55">
              <a
                className="hover:text-white transition"
                href="/politique-confidentialite/"
              >
                Confidentialité
              </a>
              <span className="text-white/25">•</span>
              <a className="hover:text-white transition" href="/mentions-legales/">
                Mentions légales
              </a>
              <span className="text-white/25">•</span>
              <button
                type="button"
                onClick={openCookiePreferences}
                className="hover:text-white transition text-left"
              >
                Cookies
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-white/45">
              © {new Date().getFullYear()} {book.author}. Tous droits réservés.
            </p>

          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;