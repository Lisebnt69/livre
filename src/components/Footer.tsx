import { Link } from "react-router-dom";
import { book } from "../data/book";
import CTAButton from "./CTAButton";
import { openCookiePreferences } from "../lib/cookieConsent";

const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid gap-10 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <p className="text-xl font-black tracking-tight">
            {book.author}
          </p>
          <p className="mt-2 text-white/75 text-sm leading-relaxed">
            Guide concret pour préparer une année de High School aux États-Unis,
            côté parents et côté jeunes.
          </p>

          <div className="mt-6 max-w-xs">
            <CTAButton
              href={book.amazonUrl}
              label="Acheter sur Amazon"
              className="bg-primaryRed border-primaryRed hover:bg-white hover:text-primaryRed"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-4">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:underline" to="/">Accueil</Link></li>
            <li><Link className="hover:underline" to="/livre">Le livre</Link></li>
            <li><Link className="hover:underline" to="/avis">Avis</Link></li>
            <li><a className="hover:underline" href={book.amazonUrl} target="_blank" rel="noreferrer">Amazon</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="md:col-span-4">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Légal
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:underline" to="/politique-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
              </li>
            <li>
              <button
                type="button"
                onClick={openCookiePreferences}
                className="hover:underline text-left"
              >
                Gérer mes cookies
              </button>
            </li>
            <li className="text-white/70">
              
              
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} {book.author}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
