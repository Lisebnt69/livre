import { motion } from 'framer-motion';
import { partners } from '../data/partners';

const PartnerGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h4 className="font-semibold text-primary mb-2">{partner.name}</h4>
          <p className="text-sm text-gray-700 mb-2">{partner.desc}</p>
          <span className="text-xs bg-accent text-white px-2 py-1 rounded">{partner.tag}</span>
          {partner.url && (
            <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-2">
              En savoir plus
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default PartnerGrid;