import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const BoatInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Boat Insurance"
        description="Protect your watercraft and enjoy peace of mind on the water."
        canonical="/products/boat-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/boat insurance.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Boat Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Protect your watercraft and enjoy peace of mind on the water.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">How Do You Use Your Boat?</h3>
            <p className="mb-4">Having or using a boat means many different things to many different people. Some look at a boat as a means to escape the responsibilities of life and go out for a cruise at the beautiful Lake of the Ozarks.</p>
            <p className="mb-4">Others look at their boat as a recreational vehicle to take their buddies or children out for a fishing adventure. However you use your boat, we know that the freedom it provides means a lot to our clients. That's why Guardian Insurance Group in Camdenton, MO is committed to protecting it.</p>
            <p className="mb-4 font-semibold text-brand-navy">Call today to see how some of the top carriers in the country, including Progressive, Travelers, and Safeco, can Guard What You Own.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BoatInsurance;
