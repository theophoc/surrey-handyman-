import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-950 pt-20 pb-8 relative">
      <div className="fog-effect opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Wrench className="w-6 h-6 text-electric-blue" />
              <span className="font-mono font-bold text-lg tracking-widest text-white">
                SURREY<span className="text-electric-blue">HANDYMAN</span>
              </span>
            </div>
            <p className="font-sans text-sm opacity-70 mb-4">
              Professional handyman and plumbing services for residential and commercial properties in Surrey and surrounding areas.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-mono text-lg font-bold mb-6 tracking-wider text-electric-blue">
              CONTACT US
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-electric-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-mono">01737 457 147</p>
                  <p className="text-sm opacity-70">Mon-Fri: 8am-6pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-electric-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-mono">office@surrey-handyman.co.uk</p>
                  <p className="text-sm opacity-70">24/7 for emergencies</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-electric-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-mono">Surrey, United Kingdom</p>
                  <p className="text-sm opacity-70">Serving all local areas</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-mono text-lg font-bold mb-6 tracking-wider text-electric-blue">
              OUR SERVICES
            </h3>
            <ul className="space-y-2 font-sans">
              <li>Plumbing Repairs</li>
              <li>Electrical Fixtures</li>
              <li>Mounting & Assembly</li>
              <li>Painting & Drywall</li>
              <li>Emergency Services</li>
              <li>Outdoor Work</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-mono text-lg font-bold mb-6 tracking-wider text-electric-blue">
              BOOK NOW
            </h3>
            <p className="font-sans text-sm opacity-80 mb-4">
              Need assistance? Contact us for a free quote or to schedule a service.
            </p>
            <motion.a 
              href="#contact" 
              className="font-mono inline-block border border-electric-blue text-electric-blue px-6 py-2 rounded-sm relative overflow-hidden group"
              whileHover={{ 
                boxShadow: '0 0 15px rgba(0, 242, 255, 0.5)',
                scale: 1.05,
              }}
            >
              <span className="relative z-10">CONTACT US</span>
              <span className="absolute inset-0 bg-electric-blue/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </motion.a>
          </motion.div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-mono text-xs opacity-60 mb-4 md:mb-0">
              © 2009-2025 surrey-handyman.co.uk ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 font-mono text-xs">
              <a href="#home" className="hover:text-electric-blue transition-colors">HOME</a>
              <a href="#services" className="hover:text-electric-blue transition-colors">SERVICES</a>
              <a href="#contact" className="hover:text-electric-blue transition-colors">BOOK NOW</a>
              <a href="#" className="hover:text-electric-blue transition-colors">PRIVACY</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;