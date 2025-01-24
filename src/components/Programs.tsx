import 'react';
import { Link } from 'react-router-dom';
import { Shield, Scale, Heart, Users, ArrowRight } from 'lucide-react';
import { Section } from './ui/Section'; 
import type { Pattern } from './ui/Section.types'; 

const Programs = () => {
  const programs = [
    {
      icon: Shield,
      title: 'Independent Prison Oversight',
      description: 'Ensuring accountability and transparency in correctional facilities through comprehensive monitoring and advocacy.',
      link: '/programs/prison-oversight',
      image: '/src/assets/images/Page_imges/HomePage_imges/The-Walls.webp'
    },
    {
      icon: Scale,
      title: 'Criminal Legal System Just-outcomes Enhancement',
      description: 'Working to reform and improve the justice system through policy advocacy and community engagement.',
      link: '/programs/legal-system',
      image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80'
    },
    {
      icon: Heart,
      title: 'Drug Use Risk Mitigation',
      description: 'Providing evidence-based support and advocacy for harm reduction and recovery services.',
      link: '/programs/drug-use-risk-mitigation',
      image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80'
    },
    {
      icon: Users,
      title: 'Substance Use Spectrum Trained Doula Program',
      description: 'Supporting individuals through personalized care and advocacy during their recovery journey.',
      link: '/programs/doula-program',
      image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <Section
      pattern={"dots" as Pattern}
      backgroundImage="/src/assets/images/Red-Gradient-4.webp"
      title="Our Programs"
      subtitle="Comprehensive solutions for systemic change"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <div className="h-48 relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover image-loading"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <program.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-[#000080] mb-3">
                  {program.title}
                </h3>
                <p className="text-[#000000] mb-4">
                  {program.description}
                </p>
                <Link
                  to={program.link}
                  className="text-[#000080] hover:text-[#000080]/80 font-medium inline-flex items-center group transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Programs;
