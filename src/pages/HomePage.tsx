import React, { Suspense, lazy } from 'react';

const Hero = lazy(() => import('../components/Hero'));
const Programs = lazy(() => import('../components/Programs'));
const BlogSection = lazy(() => import('../components/BlogSection'));
const TeamSection = lazy(() => import('../components/TeamSection'));
const FAQSection = lazy(() => import('../components/FAQSection'));

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <div className="mx-auto bg-white max-w-[1440px]">
        <Programs />
        <BlogSection />
        <TeamSection />
        <FAQSection />
      </div>
    </Suspense>
  );
};

export default HomePage;
