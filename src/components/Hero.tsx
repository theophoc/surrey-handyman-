import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlowingRing from './GlowingRing';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateDistance = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const dx = mousePosition.x - centerX;
    const dy = mousePosition.y - centerY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const calculateIntensity = () => {
    const distance = calculateDistance();
    const maxDistance = Math.sqrt(
      (window.innerWidth / 2) ** 2 + (window.innerHeight / 2) ** 2
    );
    return 1 - distance / maxDistance;
  };

  const intensity = calculateIntensity();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div 
        className="fog-effect" 
        style={{
          opacity: 0.3 + intensity * 0.3,
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="mb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <GlowingRing />
            </div>
          </motion.div>
          
          <motion.h1 
            className="font-mono text-4xl md:text-6xl font-bold mt-16 mb-4 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span data-text="SURREY HANDYMAN" className="glitch relative inline-block">
              SURREY <span className="text-electric-blue">HANDYMAN</span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="font-sans text-xl md:text-2xl max-w-2xl opacity-80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Precision repairs & installations.
            <br />
            <span className="text-electric-blue glow-text">Available 24/7 across Surrey.</span>
          </motion.p>
          
          <motion.a 
            href="#contact" 
            className="font-mono text-base md:text-lg border-2 border-electric-blue text-electric-blue px-8 py-3 rounded-sm relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ 
              boxShadow: '0 0 20px rgba(0, 242, 255, 0.7)',
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <span className="relative z-10">BOOK NOW</span>
            <span className="absolute inset-0 bg-electric-blue/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;