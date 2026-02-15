import { motion } from 'framer-motion';
import { faq } from '../data/faq';

const Faq = () => {
  return (
    <div className="space-y-4">
      {faq.map((item, index) => (
        <motion.details
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-4 rounded-lg shadow-md"
        >
          <summary className="cursor-pointer font-semibold text-primary hover:text-accent">
            {item.q}
          </summary>
          <p className="mt-2 text-gray-700">{item.a}</p>
        </motion.details>
      ))}
    </div>
  );
};

export default Faq;