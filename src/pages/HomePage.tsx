import 'react';
import Hero from '../components/Hero';
import TransitionBlock from '../components/ui/TransitionBlock';
import Programs from '../components/Programs';
import DonateSection from '../components/DonateSection';
import BlogSection from '../components/BlogSection';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import ContentLayout from '../components/ui/ContentLayout';

const HomePage = () => {
  return (
    <div className="pt-16 bg-center bg-no-repeat bg-cover" style={{ 
      backgroundImage: 'url("/src/assets/images/Background Gradient.jpeg")'
    }}>
      <Hero />
      <ContentLayout>
        <TransitionBlock 
          variant="quote"
          quote="Together, we can build a more just and compassionate society through advocacy, education, and action."
          author="Praxis Mission"
          theme="light"
        />
        <Programs />
        <BlogSection />
        <TeamSection />
        <FAQSection />
      </ContentLayout>
      <DonateSection />
    </div>
  );
};

export default HomePage;
