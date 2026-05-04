import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';

const RentersInsurance: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Renters Insurance"
        description="Protect your personal property and liability as a renter."
        canonical="/products/renters-insurance"
      />
      
      {/* Hero Section */}
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/renters insurance.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-4">
            Renters Insurance
          </TextReveal>
          <p className="text-xl text-slate-300 font-light">
            Protect your personal property and liability as a renter.
          </p>
        </div>
      </Section>

      {/* Body Section for Future Content */}
      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-slate-600 text-lg">
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Is Your Property Protected?</h3>
            <p className="mb-4">Did you know that most landlords don't carry insurance for the belongings of their tenants? If anything happens to your Lake of the Ozarks apartment, townhouse, or rented home, your personal property would not be replaced under your landlord's insurance. This is where renter's insurance comes in.</p>
            <p className="mb-4">Renter's insurance is an inexpensive way to insure your belongings and make sure that you don't need to go without in the case of a fire, storm, or more. Also, most renter's policies settle at the replacement cost of your property, meaning that you won't have to worry about getting a lower payment that won't be enough to cover the cost to buy new personal belongings.</p>
            <p className="mb-4 font-semibold text-brand-navy">Call our Camdenton office and see just how easy it is to protect your personal possessions today!</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default RentersInsurance;
