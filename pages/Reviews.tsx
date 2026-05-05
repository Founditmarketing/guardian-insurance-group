import React, { useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Reviews: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 bg-brand-offWhite min-h-screen flex flex-col">
      <SEO 
        title="Client Reviews - Guardian Insurance Group" 
        description="Read what our clients in the Lake of the Ozarks are saying about Guardian Insurance Group's service and dedication."
      />
      
      <Section className="flex-grow pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-4">
              Client Reviews
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              We take pride in protecting what matters most. Here's what our community has to say about working with us.
            </p>
            <a 
                href="https://www.google.com/search?q=guardian+insurance+group+Camdenton%2C+MO&rlz=1C5CHFA_enUS1003US1005&oq=gua&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOTINCAMQABiDARixAxiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIMTU2MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x87c4df30074a53ef:0x21dbe3d4499ebbc0,3,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-goldHover text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-gold/50 hover:-translate-y-1"
            >
                <Star size={18} fill="currentColor" />
                Leave a Google Review
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl relative flex flex-col border border-slate-100 hover:shadow-2xl transition-shadow"
              >
                <div className="absolute -top-4 left-8 bg-brand-gold rounded-full p-2 shadow-lg z-20">
                    <Quote className="text-white" size={20} />
                </div>
                <div className="flex text-brand-gold mb-6 gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                    ))}
                </div>
                <p className="text-base text-brand-navy font-medium italic mb-8 flex-grow leading-relaxed">
                    "{testimonial.text}"
                </p>
                <div>
                    <h4 className="font-bold text-brand-navy text-lg">{testimonial.author}</h4>
                    <span className="text-slate-500 text-sm flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block"></span>
                      {testimonial.location}
                    </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Reviews;
