import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const CommercialAutoInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Commercial Auto Insurance"
        description="Coverage for your work trucks, delivery vans, and fleet vehicles."
        canonical="/products/commercial-auto-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/commercial auto insurance.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Commercial Auto Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Coverage for your work trucks, delivery vans, and fleet vehicles.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Business is Moving and Booming, but is it Covered?</h3>
            <p className="mb-4">A business that has any physical product often lives by its ability to transport products and equipment to the right locations, especially on the roads around the Lake of the Ozarks. That's why a fleet of specialized vehicles is often your most important investment.</p>
            <p className="mb-4">However, it's also the most hazardous. Those big vehicles not only cost a lot of money to buy and maintain, but the liability that can arise from an accident involving them is much higher than a typical car. This means that commercial auto coverage is essential for anyone who wishes to protect their vehicle fleet in the best way possible.</p>
            <p className="mb-4 font-semibold text-brand-navy">Call Guardian Insurance Group in Camdenton and talk to us about the best way to attain the most complete coverage possible for your vehicles today.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CommercialAutoInsurance;
