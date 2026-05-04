import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import WhyUs from '../components/WhyUs';
import ParallaxCTA from '../components/ParallaxCTA';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Guardian Insurance Group - Protecting Missouri families and businesses. Get a free quote for auto, home, and commercial insurance today."
        canonical="/"
      />
      <Hero />
      <TrustStrip />
      <WhyUs />
      <Services />
      <ParallaxCTA />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;