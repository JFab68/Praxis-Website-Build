import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';

const ProgramsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive solutions for systemic change through independent oversight, legal reform, harm reduction, and personal support.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-16">
            {/* Prison Oversight Card */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Independent Prison Oversight</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ensuring accountability and transparency in correctional facilities through comprehensive monitoring and evidence-based advocacy. Our oversight program works to improve conditions, protect rights, and promote effective rehabilitation.
                </p>
                <Link 
                  to="/programs/prison-oversight"
                  className="inline-flex items-center px-6 py-3 bg-[#b87333] text-white rounded-md hover:bg-[#a05a28] transition-colors text-base font-semibold"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="md:w-1/2 h-64">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
                  alt="Prison Oversight"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Legal System Reform Card */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white rounded-lg shadow-lg p-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Criminal Legal System Reform</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Working to transform the justice system through evidence-based policy reform, legislative advocacy, and community engagement. We focus on creating meaningful changes that promote fairness and public safety.
                </p>
                <Link 
                  to="/programs/legal-system"
                  className="inline-flex items-center px-6 py-3 bg-[#b87333] text-white rounded-md hover:bg-[#a05a28] transition-colors text-base font-semibold"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="md:w-1/2 h-64">
                <img
                  src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9"
                  alt="Legal System Reform"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Substance Use Card */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Substance Use Risk Mitigation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Implementing comprehensive strategies to support individuals and communities through evidence-based approaches. Our program provides education, support services, and community resources to create positive change.
                </p>
                <Link 
                  to="/programs/substance-use"
                  className="inline-flex items-center px-6 py-3 bg-[#b87333] text-white rounded-md hover:bg-[#a05a28] transition-colors text-base font-semibold"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="md:w-1/2 h-64">
                <img
                  src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8"
                  alt="Substance Use Risk Mitigation"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* SUDT Doula Program Card */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white rounded-lg shadow-lg p-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">SUDT Doula Program</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Supporting substance-use-impacted mothers through specialized doula care, advocacy, and comprehensive support services. Our program provides personalized care throughout pregnancy and beyond.
                </p>
                <Link 
                  to="/programs/doula-program"
                  className="inline-flex items-center px-6 py-3 bg-[#b87333] text-white rounded-md hover:bg-[#a05a28] transition-colors text-base font-semibold"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="md:w-1/2 h-64">
                <img
                  src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed"
                  alt="SUDT Doula Program"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection {...ctaSections.programs} />
    </div>
  );
};

export default ProgramsPage;
