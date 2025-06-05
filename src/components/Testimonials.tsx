import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michael L.",
    location: "Guildford",
    rating: 5,
    text: "Fast response to my emergency plumbing issue. The technician was professional and fixed the problem quickly. Highly recommend!"
  },
  {
    name: "Sarah T.",
    location: "Woking",
    rating: 5,
    text: "Used Surrey Handyman for multiple projects in my new home. They're reliable, skilled, and their attention to detail is impressive."
  },
  {
    name: "David P.",
    location: "Epsom",
    rating: 4,
    text: "Great service at a fair price. They mounted my TV and repaired some drywall damage. Will definitely use again."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="fog-effect opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            CLIENT <span className="text-electric-blue">FEEDBACK</span>
          </h2>
          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto opacity-80">
            What our customers say about our services
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-6 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                boxShadow: "0 0 20px rgba(0, 242, 255, 0.15)",
                y: -5,
                borderColor: "rgba(0, 242, 255, 0.3)",
              }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-electric-blue fill-electric-blue" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="w-5 h-5 text-neutral-600" />
                ))}
              </div>
              
              <p className="font-sans mb-4 opacity-90 italic">
                "{testimonial.text}"
              </p>
              
              <div className="font-mono text-sm">
                <span className="font-bold">{testimonial.name}</span>
                <span className="text-neutral-400 ml-2">{testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;