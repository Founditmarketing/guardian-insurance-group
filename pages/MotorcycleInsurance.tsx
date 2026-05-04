import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const MotorcycleInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Motorcycle Insurance"
        description="Ride safely knowing you have the right protection."
        canonical="/products/motorcycle-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/GIGmotorcycleinsurance.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Motorcycle Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Ride safely knowing you have the right protection.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Taking Your Bike For A Ride At Lake of the Ozarks?</h3>
            <p className="mb-4">Looking to protect your Harley Davidson, Kawasaki, Suzuki, or other motorcycle? Guardian Insurance Group located in Camdenton, MO, can help.</p>
            <p className="mb-4">We specialize in motorcycles and other vehicles such as ATVs or UTVs. Your bike isn't like a car, so why tack it onto a regular automotive policy? Here you can get the specialty coverage that your motorcycle deserves, such as coverage for safety equipment and accessories, whether they were installed by the dealer or in your own garage.</p>
            <p className="mb-4 font-semibold text-brand-navy">Give us a call today for more information!</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MotorcycleInsurance;
