import React from 'react';
import Team from '../components/Team';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About: React.FC = () => {
   return (
      <div className="pt-20">
         <SEO
            title="About Us"
            description="Meet the local team at Guardian Insurance Group. We've been serving the Lake of the Ozarks area with integrity and a handshake you can trust."
            canonical="/about"
         />
         <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[50vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
               <img src="/GIGoffice.png" alt="Camdenton Office" className="w-full h-full object-top object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
               <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  >
                  Independent Agency
               </motion.span>
               <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-8">
                  More Than Insurance. We Are Your Guardians.
               </TextReveal>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl text-slate-300 font-light"
               >
                  Serving the Lake of the Ozarks area with integrity, transparency, and a handshake you can trust.
               </motion.p>
            </div>
         </Section>


         <Team />
      </div>
   );
};

export default About;