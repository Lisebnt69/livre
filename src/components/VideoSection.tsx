import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { home } from '../data/home';

const VideoSection = () => {
  const { video } = home;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 bg-secondary"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">{video.title}</h2>
        <p className="text-lg text-gray-700 mb-8">{video.subtitle}</p>
        {video.youtubeUrl ? (
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              src={video.youtubeUrl}
              title="Vidéo autrice"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        ) : (
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg mb-8">
            <p className="text-gray-500">Vidéo à venir...</p>
          </div>
        )}
        <CTAButton href="/avis" label={video.cta} />
      </div>
    </motion.section>
  );
};

export default VideoSection;