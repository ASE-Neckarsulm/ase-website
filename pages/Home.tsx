import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import About from '../components/About';
import TrustBar from '../components/TrustBar';
import Certifications from '../components/Certifications';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <SEO />
      <Hero />
      <TrustBar />
      <Services />
      <Industries />
      <About />
      <Certifications />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;