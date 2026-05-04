import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const CarInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Car Insurance"
        description="Drive with confidence with our comprehensive auto coverage."
        canonical="/products/car-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/car insurance.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Car Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Drive with confidence with our comprehensive auto coverage.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">What Does Your Car Mean to You?</h3>
            <p className="mb-4">We know that a vehicle is worth far more than the sum of its parts. Your car is the workhorse of your family, taking you to work, the kids to school, or just for a drive around the beautiful Lake of the Ozarks. That's why we at Guardian Insurance Group in Camdenton want to make sure that your automobiles are covered in the most complete way possible. (All while finding you the best rates, of course!)</p>
            <p className="mb-4">Car insurance is much more than simply protecting the car itself from damage, whether that damage comes from an accident or otherwise. The proper car coverage can protect you and your family from costly lawsuits if you are at fault and even your own medical bills should someone without enough coverage be at fault for your accident.</p>
            <p className="mb-4 font-semibold text-brand-navy">Call today and see how well you're currently covered, or let us shop with some of the top carriers in the country, such as Travelers, Progressive, Safeco, and more, to ensure that you are getting the most value out of your coverage. We would be happy to help.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CarInsurance;
