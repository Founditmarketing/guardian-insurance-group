import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const UmbrellaInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Umbrella Insurance"
        description="Extra liability coverage that goes beyond your standard policies."
        canonical="/products/umbrella-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Umbrella Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Extra liability coverage that goes beyond your standard policies.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">What is Umbrella Insurance?</h3>
            <p className="mb-4">No, we are not talking about insurance in case the umbrella you're holding gets blown away in an Ozarks windstorm. Umbrella insurance, also called a personal umbrella, is excess liability coverage that you can add to "cover" (see why it's called an umbrella?) your other insurance policies, as well as a few other uses. Umbrella policies are typically inexpensive compared to other liability insurance, usually around $20 a month* and coverage begins at $1,000,000 of liability. That's a lot of coverage!</p>
            <p className="mb-4">Nobody likes to admit it, but we live in a world where lawsuits are commonplace, and if you're not careful, you could be responsible for a whole lot more than either your current insurance, or your savings, can cover. An umbrella policy is there to protect YOU from these instances which means that even in the most severe circumstances, you can rest easy knowing that you have the best protection possible.</p>
            <p className="mb-4 font-semibold text-brand-navy">Call our Camdenton, MO office today to see what adding an umbrella policy to your current coverage can offer you.</p>
            <p className="text-sm text-slate-500 mt-6">*The $20 a month figure is an estimate based on previous case studies. This is by no means a quote. For information in regards to your specific needs and circumstances please contact a Guardian Insurance Group agent today to learn more.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default UmbrellaInsurance;
