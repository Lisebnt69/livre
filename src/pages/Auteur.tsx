import { motion } from 'framer-motion';
import VideoSection from '../components/VideoSection';
import { book } from '../data/book';

const Auteur = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <img src="/author.png" alt="Photo de l'autrice" className="mx-auto mb-4 w-48 h-48 object-cover rounded-full shadow-lg" />
          <h1 className="text-4xl font-bold text-primary mb-4">{book.author}</h1>
          <p className="text-lg text-gray-700">
            Mère de deux enfants partis en année de High School aux États-Unis, j'ai vécu de l'intérieur les joies et les défis de cette aventure. Ce livre est né de mon expérience pour aider d'autres familles à se préparer sereinement.
          </p>
        </motion.div>
        <VideoSection />
      </div>
    </div>
  );
};

export default Auteur;