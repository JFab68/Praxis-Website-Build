import 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';
import ContentLayout from '../components/ui/ContentLayout';

const ProgramsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-purple-900">
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
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Our Programs
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive solutions for systemic change through independent oversight, legal reform, harm reduction, and personal support.
            </p>
          </div>
        </div>
      </section>

      <ContentLayout>
        {/* Programs Cards */}
        <section className="py-20">
          <div className="space-y-16">
            {/* Prison Oversight Card */}
            <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg md:flex-row">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Independent Prison Oversight</h2>
                <p className="mb-6 text-lg text-gray-600">
                  Ensuring accountability and transparency in correctional facilities through comprehensive monitoring and evidence-based advocacy. Our oversight program works to improve conditions, protect rights, and promote effective rehabilitation.
                </p>
                <Link 
                  to="/programs/prison-oversight"
                  className="inline-flex items-center px-6 py-3 bg-[#b87333] text-white rounded-md hover:bg-[#a05a28] transition-colors text-base font-semibold"
                >
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="h-64 md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
                  alt="Prison Oversight"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>

            {/* Legal System Reform Card */}
            <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg md:flex-row-reverse">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Criminal Legal System Reform</h2>
                <p className="mb-6 text-lg text-gray-600">
                  Working to transform the justice system through evidence-based policy reform, legislative advocacy, and community engagement. We focus on creating meaningful changes that promote fairness and public safety.
                </p>
                <Link 
                  to="/programs/legal-system"
                  className="inline-flex items-center px-6 py-3 bg-[#b87333] text-white rounded-md hover:bg-[#a05a28] transition-colors text-base font-semibold"
                >
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="h-64 md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9"
                  alt="Legal System Reform"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>

            {/* Substance Use Card */}
            <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg md:flex-row">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Drug Use Risk Mitigation</h2>
                <p className="mb-6 text-lg text-gray-600">
                  Implementing comprehensive strategies to support individuals and communities through evidence-based approaches. Our program provides education, support services, and community resources to create positive change.
                </p>
                <Link 
                  to="/programs/drug-use-risk-mitigation"
                  className="inline-flex items-center px-6 py-3 bg-[#b87333] text-white rounded-md hover:bg-[#a05a28] transition-colors text-base font-semibold"
                >
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="h-64 md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8"
                  alt="Substance Use Risk Mitigation"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>

            {/* SUDT Doula Program Card */}
            <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg md:flex-row-reverse">
              <div className="md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">SUDT Doula Program</h2>
                <p className="mb-6 text-lg text-gray-600">
                  Supporting substance-use-impacted mothers through specialized doula care, advocacy, and comprehensive support services. Our program provides personalized care throughout pregnancy and beyond.
                </p>
                <Link 
                  to="/programs/doula-program"
                  className="inline-flex items-center px-6 py-3 bg-[#b87333] text-white rounded-md hover:bg-[#a05a28] transition-colors text-base font-semibold"
                >
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="h-64 md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed"
                  alt="SUDT Doula Program"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </ContentLayout>

      <CTASection {...ctaSections.programs} />
    </div>
  );
};

export default ProgramsPage;
