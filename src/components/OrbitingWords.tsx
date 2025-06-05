import React from 'react';
import { motion } from 'framer-motion';

const OrbitingWords: React.FC = () => {
  const words = [
    "PLUMBING",
    "ELECTRICAL",
    "REPAIRS",
    "EMERGENCY",
    "FIXTURES",
    "ASSEMBLY",
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {words.map((word, index) => {
        const angle = (index * (360 / words.length)) % 360;
        const delay = index * 0.2;
        
        return (
          <motion.div
            key={word}
            className="orbit-word font-mono text-xs md:text-sm tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.4, 0.8] }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${angle}deg) translateX(160px) rotate(-${angle}deg)`,
              color: index % 2 === 0 ? '#00f2ff' : '#8b5cf6',
            }}
          >
            {word}
          </motion.div>
        );
      })}
    </div>
  );
};

export default OrbitingWords;