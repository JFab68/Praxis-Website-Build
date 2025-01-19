import 'react';
import { Scale, FileText, Users, Gavel } from 'lucide-react';
import CTASection from '../../components/CTASection';
import { ctaSections } from '../../data/cta-sections';

const PrisonOversightPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9")'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prison Oversight Program
            </h1>
            <p className="text-xl text-purple-100">
              Advocating for independent accountability measures within Arizona's correctional system through education, policy reform, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Oversight Program</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Our oversight program is designed to advocate for independent accountability measures within Arizona's correctional system. By educating the public, informing policymakers, and advocating for structural reforms, we aim to ensure that independent monitors can one day operate transparently within the system.
            </p>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Scale className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Systematic Monitoring</h3>
                  <p className="text-gray-600 leading-relaxed">
                    While we do not directly monitor correctional facilities, our program promotes the establishment of robust, independent oversight. We educate stakeholders on the importance of transparency and accountability by highlighting gaps in current systems. Using data-driven insights and best practices from other jurisdictions, we advocate for legislative frameworks that would allow independent monitors to conduct comprehensive assessments of correctional facilities in Arizona.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <FileText className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Collection & Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Data is at the heart of our advocacy. We collect and analyze information from public records, reports, and firsthand accounts to identify patterns and systemic issues. Key indicators such as healthcare access, facility maintenance, program availability, and staff conduct are scrutinized to build a clear picture of the challenges within the system.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Advocacy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Based on our research and findings, we develop actionable policy recommendations to address the systemic issues identified. Our team works closely with legislators, corrections officials, and community advocates to advance meaningful reforms. Advocacy efforts include drafting legislation, providing testimony at hearings, and collaborating with other organizations to amplify calls for change.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Gavel className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Access Improvement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The lack of adequate medical and mental health care in Arizona's prisons is a critical issue. While the Jensen v. Thornell class action lawsuit addresses many of these deficiencies, our role is to support complementary advocacy efforts. We educate stakeholders on the importance of independent oversight in ensuring compliance with court-mandated reforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">15</div>
              <div className="text-gray-700">Complexes Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">9,000+</div>
              <div className="text-gray-700">Staff Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">34,000+</div>
              <div className="text-gray-700">Incarcerated People Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Independent oversight is essential for building transparency and accountability within Arizona's correctional system. By advocating for systemic reforms and engaging with affected communities, we are laying the groundwork for lasting change. Our comprehensive approach combines data-driven insights, policy advocacy, and community engagement to create a more just and humane correctional system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection {...ctaSections.partners} />
    </div>
  );
};

export default PrisonOversightPage;
