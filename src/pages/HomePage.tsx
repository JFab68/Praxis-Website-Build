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
  <div className="max-w-[1440px] mx-auto bg-white">
    <Programs />
    <BlogSection />
    <TeamSection />
    <FAQSection />
  </div>
</>
  );
};

export default HomePage;
