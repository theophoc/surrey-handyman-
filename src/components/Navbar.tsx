import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-neon-violet/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-4 xl:mx-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hammer className="h-8 w-8" />
            <span className="font-mono font-bold text-lg tracking-widest hidden sm:inline">
              SURREY<span className="text-electric-blue">HANDYMAN</span>
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Testimonials'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-sm tracking-wider hover:text-electric-blue transition-colors relative py-2"
                whileHover={{
                  textShadow: '0 0 8px rgba(0, 242, 255, 0.8)',
                }}
              >
                {item.toUpperCase()}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="font-mono text-sm tech-border px-4 py-2 rounded-sm hover:bg-electric-blue/10 transition-all"
              whileHover={{
                boxShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
                textShadow: '0 0 8px rgba(0, 242, 255, 0.8)',
              }}
            >
              BOOK NOW
            </motion.a>
          </nav>

          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav 
            className="md:hidden pt-4 pb-2 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {['Home', 'About', 'Services', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-mono text-sm tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              className="block font-mono text-sm tech-border px-4 py-2 rounded-sm text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK NOW
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;