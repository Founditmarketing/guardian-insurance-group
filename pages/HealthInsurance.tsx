import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const HealthInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Health Insurance"
        description="Secure the best health coverage for you and your family."
        canonical="/products/health-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/health insurance.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Health Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Secure the best health coverage for you and your family.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Do You Think Individual Health Insurance is Impossible?</h3>
            <p className="mb-4">We insure many things. Our homes, our cars, sometimes even our lives, but none of that compares to the importance of our health insurance.</p>
            <p className="mb-4">Here at Guardian Insurance Group we now offer plans on the Healthcare Exchange for individuals who do not have access to group-based insurances through a workplace or union, as well as other services such as short term or ancillary plans. (Including dental and vision coverage!)</p>
            <p className="mb-4 font-semibold text-brand-navy">Call us today and see just how Guardian Insurance Group and protect you and your family from unexpected medical expenses over the year.</p>
            <div className="my-8 border-t border-slate-200"></div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">What Does a Healthy Lifestyle Mean to You?</h3>
            <p className="mb-4">Health insurance, especially Medicare, doesn't have to be difficult. At Guardian Insurance Group in Camdenton, MO, we navigate the waters of Medicare Supplement and Medicare Advantage plans alongside our clients to provide them with the easiest experience possible. As you would expect, we only use the top carriers in the country, such as United Health Care, Anthem, and Humana, so when you trust your Medicare to Guardian Insurance Group, you know you're getting the best coverage available.</p>
            <p className="mb-4">Why not see what Guardian Insurance Group can do for you? If we can't provide the absolute best service in the Lake of the Ozarks area, we will be the first one to let you know so that you can be completely confident in your medical coverage.</p>
            <p className="mb-4 font-semibold text-brand-navy">Isn't a few minutes of your time worth it to know for sure that you're protected?</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HealthInsurance;
