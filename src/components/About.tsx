import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, PenTool as Tool, Award } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-electric-blue" />,
    title: "TRUSTED",
    description: "Licensed and insured professionals for your peace of mind."
  },
  {
    icon: <Clock className="w-6 h-6 text-electric-blue" />,
    title: "RELIABLE",
    description: "On-time service with 24/7 emergency response."
  },
  {
    icon: <Tool className="w-6 h-6 text-electric-blue" />,
    title: "SKILLED",
    description: "Expert technicians with years of hands-on experience."
  },
  {
    icon: <Award className="w-6 h-6 text-electric-blue" />,
    title: "GUARANTEED",
    description: "All work backed by our satisfaction guarantee."
  }
];

const About: React.FC = () => {
  return (
    <section id="about\" className="py-20 relative overflow-hidden">
      <div className="fog-effect opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            ABOUT <span className="text-electric-blue">US</span>
          </h2>
          <p className="font-sans text-lg md:text-xl leading-relaxed opacity-90">
            Surrey Handyman brings <span className="text-electric-blue glow-text font-semibold">reliable</span>, <span className="text-electric-blue glow-text font-semibold">fast</span>, and <span className="text-electric-blue glow-text font-semibold">professional</span> handyman and plumbing services to your doorstep — powered by precision and care. For over 15 years, we've been the trusted solution for homeowners across Surrey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-6 rounded-sm transition-all hover:border-electric-blue/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                boxShadow: "0 0 20px rgba(0, 242, 255, 0.15)",
                y: -5,
              }}
            >
              <div className="mb-4 p-3 inline-block rounded-sm bg-neutral-800">
                {feature.icon}
              </div>
              <h3 className="font-mono text-xl font-bold mb-2 tracking-wider">
                {feature.title}
              </h3>
              <p className="font-sans opacity-80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;