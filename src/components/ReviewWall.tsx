import { motion } from 'framer-motion';
import { reviews } from '../data/reviews';

const ReviewWall = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="break-inside-avoid bg-white p-4 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500">{review.source}</span>
            <span className="ml-2 text-sm text-primary">{review.role}</span>
            <div className="ml-auto flex">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < review.stars ? 'text-yellow-400' : 'text-gray-300'}>★</span>
              ))}
            </div>
          </div>
          <p className="text-sm italic">"{review.text}"</p>
          <p className="text-sm font-semibold mt-2">- {review.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ReviewWall;