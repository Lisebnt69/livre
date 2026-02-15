import { motion } from 'framer-motion';
import ReviewWall from '../components/ReviewWall';
import CTAButton from '../components/CTAButton';
import { book } from '../data/book';

const Avis = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary mb-8 text-center"
        >
          Avis des lecteurs
        </motion.h1>
        <ReviewWall />
        <div className="text-center mt-8">
          <CTAButton href={book.amazonUrl} label="Voir sur Amazon" />
        </div>
      </div>
    </div>
  );
};

export default Avis;