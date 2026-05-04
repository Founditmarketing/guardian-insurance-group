import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const BusinessInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Business Insurance"
        description="Comprehensive protection for your business operations."
        canonical="/products/business-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/commercial insurance.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Business Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Comprehensive protection for your business operations.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Do You Own a Business? Is it Protected?</h3>
            <p className="mb-4">Starting a business is a daunting task, and maintaining one isn't a walk in the park, either. As a locally-owned business near the Lake of the Ozarks, Guardian Insurance Group understands the pitfalls of maintaining your business.</p>
            <p className="mb-4">Coverage options can be overwhelming for most business owners. Do you have enough glass coverage? Is the outdoor patio furniture covered? What about liability if something happened to a customer? These are all questions that we can help you answer.</p>
            <p className="mb-4 font-semibold text-brand-navy">Call today to see what options you have available and how Guardian Insurance Group in Camdenton, MO, can best protect the investments you've made in your business.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BusinessInsurance;
