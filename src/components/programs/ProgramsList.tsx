import 'react';
import { Shield, Scale, Heart, Users } from 'lucide-react';
import ProgramCard from './ProgramCard';

const ProgramsList = () => {
  const programs = [
    {
      title: 'Independent Prison Oversight',
      description: 'Ensuring accountability and transparency in correctional facilities through comprehensive monitoring and advocacy.',
      icon: Shield,
      link: '/programs/prison-oversight',
      features: [
        'Systematic facility monitoring',
        'Policy compliance assessment',
        'Advocacy for improved conditions',
        'Transparency reporting'
      ]
    },
    {
      title: 'Criminal Legal System Reform',
      description: 'Working to transform the justice system through evidence-based policy reform and community engagement.',
      icon: Scale,
      link: '/programs/legal-system',
      features: [
        'Policy advocacy',
        'Legislative initiatives',
        'Community engagement',
        'System improvement research'
      ]
    },
    {
      title: 'Overdose Awareness & Harm Reduction',
      description: 'Implementing comprehensive strategies to prevent overdoses and promote harm reduction approaches.',
      icon: Heart,
      link: '/programs/substance-use',
      features: [
        'Education and awareness',
        'Support services',
        'Resource distribution',
        'Community outreach'
      ]
    },
    {
      title: 'SUDT Doula Program',
      description: 'Supporting substance-use-impacted mothers through specialized doula care and advocacy.',
      icon: Users,
      link: '/programs/doula-program',
      features: [
        'Personalized support',
        'Recovery advocacy',
        'Pregnancy and postpartum care',
        'Resource connection'
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsList;