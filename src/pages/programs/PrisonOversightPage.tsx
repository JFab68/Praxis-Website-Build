import 'react';
import { Scale, FileText, Users, Gavel } from 'lucide-react';
import CTASection from '../../components/CTASection';
import { ctaSections } from '../../data/cta-sections';
import ContentLayout from '../../components/ui/ContentLayout';

const PrisonOversightPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-navy">
        <div 
          className="absolute inset-0 z-0 bg-center bg-cover opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9")'
          }}
        />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Prison Oversight Program
            </h1>
            <p className="text-xl text-purple-100">
              Advocating for independent accountability measures within Arizona's correctional system through education, policy reform, and community engagement.
            </p>
          </div>
        </div>
      </section>

      <ContentLayout
        quote={{
          text: "The degree of civilization in a society can be judged by entering its prisons.",
          author: "Fyodor Dostoevsky"
        }}
      >
        <section className="py-20">
          <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Our Oversight Program</h2>
            <p className="max-w-2xl mx-auto mb-12 leading-relaxed text-center text-gray-600">
              Our oversight program is designed to advocate for independent accountability measures within Arizona's correctional system. By educating the public, informing policymakers, and advocating for structural reforms, we aim to ensure that independent monitors can one day operate transparently within the system.
            </p>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Scale className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Systematic Monitoring</h3>
                  <p className="leading-relaxed text-gray-600">
                    While we do not directly monitor correctional facilities, our program promotes the establishment of robust, independent oversight. We educate stakeholders on the importance of transparency and accountability by highlighting gaps in current systems. Using data-driven insights and best practices from other jurisdictions, we advocate for legislative frameworks that would allow independent monitors to conduct comprehensive assessments of correctional facilities in Arizona.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <FileText className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Data Collection & Analysis</h3>
                  <p className="leading-relaxed text-gray-600">
                    Data is at the heart of our advocacy. We collect and analyze information from public records, reports, and firsthand accounts to identify patterns and systemic issues. Key indicators such as healthcare access, facility maintenance, program availability, and staff conduct are scrutinized to build a clear picture of the challenges within the system.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Policy Advocacy</h3>
                  <p className="leading-relaxed text-gray-600">
                    Based on our research and findings, we develop actionable policy recommendations to address the systemic issues identified. Our team works closely with legislators, corrections officials, and community advocates to advance meaningful reforms. Advocacy efforts include drafting legislation, providing testimony at hearings, and collaborating with other organizations to amplify calls for change.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Gavel className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Healthcare Access Improvement</h3>
                  <p className="leading-relaxed text-gray-600">
                    The lack of adequate medical and mental health care in Arizona's prisons is a critical issue. While the Jensen v. Thornell class action lawsuit addresses many of these deficiencies, our role is to support complementary advocacy efforts. We educate stakeholders on the importance of independent oversight in ensuring compliance with court-mandated reforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </ContentLayout>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-navy">15</div>
              <div className="text-gray-700">Complexes Monitored</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-navy">9,000+</div>
              <div className="text-gray-700">Staff Members</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-navy">34,000+</div>
              <div className="text-gray-700">Incarcerated People Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Summary</h2>
              <p className="leading-relaxed text-gray-700">
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
