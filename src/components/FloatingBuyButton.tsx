import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { book } from '../data/book';

const FloatingBuyButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 md:hidden z-50"
    >
      <CTAButton href={book.amazonUrl} label="Acheter" className="shadow-xl" />
    </motion.div>
  );
};

export default FloatingBuyButton;