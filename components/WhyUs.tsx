import React from 'react';
import Section from './ui/Section';
import { Layers, ShieldCheck, MapPinned } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './ui/TiltCard';
import TextReveal from './ui/TextReveal';

const features = [
  {
    icon: Layers,
    title: "Expert Guidance",
    description: "We aren't salespeople. We are friendly guides who can walk you through the process, step-by-step, of protecting your health, your life, and your belongings in the most effective way possible."
  },
  {
    icon: ShieldCheck,
    title: "Local Community",
    description: "We are a local business located right here in Camdenton, Missouri. We are proud to take care of our community, offering our services not only locally, but anywhere across the entire state."
  },
  {
    icon: MapPinned,
    title: "Digital & Phone Services",
    description: "In order to adapt to the current climate, we are able to provide most of our services over the phone or digitally as well, meaning that in most cases coming to our office isn't required."
  }
];

const WhyUs: React.FC = () => {
  return (
    <Section className="relative overflow-visible perspective-1000">
       <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-4 block"
        >
          The Independent Advantage
        </motion.span>
        
        <div className="flex justify-center mb-6">
           <TextReveal className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy leading-tight justify-center">
              Why Choose Guardian Insurance Group?
           </TextReveal>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-600 text-lg md:text-xl font-light"
        >
           Here at Guardian Insurance Group, we pride ourselves in our ability to find the best solutions for any insurance need.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 px-4">
        {features.map((feature, index) => (
          <TiltCard key={index} className="group">
             <div className="bg-white rounded-3xl p-8 h-full shadow-xl shadow-brand-navy/5 border border-gray-100 group-hover:border-brand-gold/30 transition-colors duration-500 relative overflow-hidden">
                {/* 3D Floating Content */}
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                   <div className="w-16 h-16 bg-brand-offWhite rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500">
                      <feature.icon size={32} className="text-brand-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                   </div>
                   
                   <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">{feature.title}</h3>
                   <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                      {feature.description}
                   </p>
                </div>
                
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
};

export default WhyUs;