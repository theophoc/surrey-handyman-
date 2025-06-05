import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ServiceProps {
  service: {
    icon: ReactNode;
    title: string;
    description: string;
    details: string[];
  };
  index: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, index, className = '' }) => {
  return (
    <motion.div
      className={`group bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-sm p-6 hover:border-electric-blue/70 transition-all overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        boxShadow: "0 0 20px rgba(0, 242, 255, 0.15)",
        y: -5,
      }}
    >
      <div className="flex flex-col h-full">
        <motion.div 
          className="mb-4 text-electric-blue"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, 5, 0, -5, 0],
            transition: { duration: 0.5 }
          }}
        >
          {service.icon}
        </motion.div>
        
        <h3 className="font-mono text-lg font-bold mb-3 tracking-wider">
          {service.title}
        </h3>
        
        <p className="font-sans text-sm opacity-80 mb-4">
          {service.description}
        </p>

        <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeOut"
                },
                opacity: {
                  duration: 0.2,
                  delay: 0.1
                }
              }
            }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <motion.ul 
              className="space-y-2 border-t border-neutral-800 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              {service.details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center text-sm opacity-80 group/item"
                >
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    className="flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 text-electric-blue mr-2" />
                    {detail}
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceCard;