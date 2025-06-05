import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseFollowBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[800px] h-[800px]"
        style={{
          background: `
            radial-gradient(circle at center,
              rgba(0, 242, 255, 0.08) 0%,
              rgba(139, 92, 246, 0.08) 25%,
              rgba(0, 242, 255, 0.05) 50%,
              transparent 70%
            )
          `,
          filter: 'blur(120px)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 0.5,
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px]"
        style={{
          background: `
            radial-gradient(circle at center,
              rgba(0, 242, 255, 0.1) 0%,
              rgba(0, 242, 255, 0.05) 30%,
              transparent 70%
            )
          `,
          filter: 'blur(40px)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.4, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default MouseFollowBackground;