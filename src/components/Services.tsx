import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { 
  Wrench, 
  Lightbulb,
  Hammer,
  PaintBucket,
  Clock,
  Warehouse,
  Lock,
  TreePine,
  PackageOpen,
  Flame
} from 'lucide-react';

const services = [
  {
    icon: <Wrench className="w-10 h-10" />,
    title: "PLUMBING",
    description: "Professional plumbing solutions including leak repairs, tap fixes, toilet unblocking, and appliance connections.",
    details: [
      "Fix dripping taps",
      "Unblock toilets",
      "Connect appliances",
      "Toilet repairs",
      "Kitchen sink issues"
    ]
  },
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "ELECTRICAL",
    description: "Safe electrical work including light fixtures, socket replacements, smoke alarms, and fault finding.",
    details: [
      "Change bulbs",
      "Fix lights",
      "Replace sockets",
      "Install alarms",
      "Fault finding"
    ]
  },
  {
    icon: <Hammer className="w-10 h-10" />,
    title: "CARPENTRY",
    description: "Expert woodwork including door planing, window sill repairs, and pet flap installations.",
    details: [
      "Plane doors",
      "Window sills",
      "Pet flaps",
      "Wood repairs",
      "Custom solutions"
    ]
  },
  {
    icon: <PackageOpen className="w-10 h-10" />,
    title: "FLATPACK ASSEMBLY",
    description: "Swift assembly of furniture, IKEA items, trampolines, and toys - hassle-free service.",
    details: [
      "Furniture assembly",
      "IKEA builds",
      "Trampolines",
      "Toy assembly",
      "Office furniture"
    ]
  },
  {
    icon: <Warehouse className="w-10 h-10" />,
    title: "HANGING & MOUNTING",
    description: "Secure mounting of TVs, shelves, mirrors, pictures, and curtain rails with precision.",
    details: [
      "TV mounting",
      "Shelves",
      "Mirrors",
      "Pictures",
      "Curtain rails"
    ]
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "LOCKSMITH",
    description: "Complete locksmith services including new locks, window security, and burglary repairs.",
    details: [
      "New locks",
      "Window locks",
      "Security fixes",
      "Safe installation",
      "Emergency access"
    ]
  },
  {
    icon: <PaintBucket className="w-10 h-10" />,
    title: "PAINTING & DECORATING",
    description: "Professional painting services for walls, ceilings, and outdoor areas, plus crack repairs.",
    details: [
      "Interior painting",
      "Exterior work",
      "Crack repairs",
      "Stain removal",
      "Custom finishes"
    ]
  },
  {
    icon: <TreePine className="w-10 h-10" />,
    title: "OUTDOOR WORK",
    description: "Comprehensive outdoor maintenance including fence repairs, garden furniture, and lighting.",
    details: [
      "Fence repairs",
      "Garden furniture",
      "Outdoor lighting",
      "Washing lines",
      "Garden taps"
    ]
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "SPECIAL PROJECTS",
    description: "Tailored solutions for moving, custom work, and unique handyman requirements.",
    details: [
      "Moving assistance",
      "Custom projects",
      "Unique solutions",
      "Project planning",
      "Consultations"
    ]
  },
  {
    icon: <Flame className="w-10 h-10" />,
    title: "HEATING & GAS",
    description: "Professional boiler installation, servicing, and radiator fitting by qualified technicians.",
    details: [
      "Boiler servicing",
      "Installations",
      "Radiator fitting",
      "System checks",
      "Maintenance"
    ]
  },
];

const Services: React.FC = () => {
  return (
    <section id="services\" className="py-20 bg-neutral-950 relative">
      <div className="fog-effect opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            OUR <span className="text-electric-blue">SERVICES</span>
          </h2>
          <p className="font-sans text-lg md:text-xl max-w-3xl mx-auto opacity-80">
            Professional handyman solutions for all your home and business needs. 
            Each service is backed by our quality guarantee and years of expertise.
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Mobile view: horizontal scroll */}
        <div className="md:hidden">
          <div className="service-card-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                service={service}
                index={index}
                className="service-card"
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Need something not listed? We're always ready to help with unique projects and special requirements.
          </p>
          <motion.a 
            href="#contact" 
            className="font-mono inline-block border-2 border-electric-blue text-electric-blue px-8 py-3 rounded-sm relative overflow-hidden group"
            whileHover={{ 
              boxShadow: '0 0 20px rgba(0, 242, 255, 0.7)',
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <span className="relative z-10">GET A FREE QUOTE</span>
            <span className="absolute inset-0 bg-electric-blue/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;