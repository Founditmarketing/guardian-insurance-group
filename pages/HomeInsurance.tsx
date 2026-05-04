import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const HomeInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Home Insurance"
        description="Protect your biggest investment with comprehensive coverage."
        canonical="/products/home-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/home insurance.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Home Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Protect your biggest investment with comprehensive coverage.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">What Memories Do You Have of Your Home?</h3>
            <p className="mb-4">Your home is typically your greatest investment. It's where you tuck in your kids goodnight, have family over for a barbeque, and retreat to after a long day at work. Nothing can replace your home and all of the memories that are there, especially when that home is located near the one and only Lake of the Ozarks.</p>
            <p className="mb-4">But, as we all know too well, anything can happen, and that's why having the right homeowners insurance policy is vital for protecting your home from life's unexpected events. Here are Guardian Insurance Group, located in Camdenton, MO, we will work to ensure that your home has the most complete coverage for the best rate in the market.</p>
            <p className="mb-4 font-semibold text-brand-navy">Call us today so you can have your current coverage reviewed by trusted experts, or let us do the shopping for you and we'll find the best coverage for your home.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomeInsurance;
