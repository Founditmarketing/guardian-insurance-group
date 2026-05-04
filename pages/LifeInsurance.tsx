import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const LifeInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Life Insurance"
        description="Secure your family’s financial future."
        canonical="/products/life-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/GIGlifeinsurance.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Life Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Secure your family’s financial future.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Retiring at the Lake of the Ozarks is Like Living in a Dream. But What Happens Next?</h3>
            <p className="mb-4">Here at Guardian Insurance Group in Camdenton, MO, we believe that life insurance is a gift. Nobody purchases life insurance for themselves. We buy life insurance because we have people we care about, and we want to do everything we can to make sure that they are comfortable when the time comes that we aren't here.</p>
            <p className="mb-4">That kind of love for your family isn't something to be taken lightly, and that's why we strive to find the absolute best way for you to provide for those you love, whether that's through term life, whole life, universal life, or another opportunity.</p>
            <p className="mb-4 font-semibold text-brand-navy">Call today and find out why our clients have trusted us with their family's legacy.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LifeInsurance;
