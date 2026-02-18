import { book } from '../data/book';
import CTAButton from './CTAButton';

const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-neutral-100 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Où acheter */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-primaryRed pb-2">
            Où acheter le livre
          </h3>
          <CTAButton
            href={book.amazonUrl}
            label="Acheter sur Amazon"
            eventName="click_amazon"
            className="bg-primaryRed hover:bg-secondaryBlue text-white w-full text-center py-3 rounded-lg shadow-lg transition-colors max-w-xs"
          />
        </div>

        {/* Remerciements */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b-2 border-primaryRed pb-2">
            Remerciements
          </h3>
          <p className="max-w-md text-neutral-300">
            Merci à toutes les familles, lycéens et partenaires qui ont partagé leurs expériences et contribué à faire de ce guide un outil sincère et utile.
          </p>
        </div>
      </div>

      <div className="border-t border-primaryRed mt-12 pt-6 text-center text-neutral-400 text-sm">
        &copy; 2026 {book.author}. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;