import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import DonateSection from '../components/DonateSection';
import BlogSection from '../components/BlogSection';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Programs />
      <DonateSection />
      <BlogSection />
      <TeamSection />
      <FAQSection />
    </>
  );
};

export default HomePage;