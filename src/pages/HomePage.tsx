import 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import BlogSection from '../components/BlogSection';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Programs />
      <BlogSection />
      <TeamSection />
      <FAQSection />
    </>
  );
};

export default HomePage;
