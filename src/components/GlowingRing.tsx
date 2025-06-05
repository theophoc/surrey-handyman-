import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Droplets } from 'lucide-react';

const GlowingRing: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute w-[280px] h-[280px] rounded-full border-[2px] border-electric-blue opacity-20"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="w-[220px] h-[220px] rounded-full flex items-center justify-center relative">
        <div className="relative">
          <motion.div
            className="absolute -left-5 -top-4"
            animate={{
              rotate: [-10, 10, -10],
              x: [1, -1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Hammer size={24} className="text-electric-blue" />
          </motion.div>

          <motion.div
            className="font-mono text-sm tracking-wide bg-neutral-900/40 px-5 py-2 backdrop-blur-sm relative"
            animate={{
              scale: [1, 0.98, 1],
              boxShadow: [
                '0 0 20px rgba(0, 242, 255, 0.3)',
                '0 0 30px rgba(0, 242, 255, 0.5)',
                '0 0 20px rgba(0, 242, 255, 0.3)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-transparent"></div>
            <span className="relative z-10 text-electric-blue">Handyman and Plumbing service since 2009</span>
            <motion.div
              className="absolute -bottom-5 right-0"
              animate={{
                y: [0, 15],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeIn",
              }}
            >
              <Droplets className="w-3 h-3 text-electric-blue" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GlowingRing;