import 'react';
import { Scale, FileText, Users, Gavel } from 'lucide-react';
import CTASection from '../../components/CTASection';
import { ctaSections } from '../../data/cta-sections';
import ContentLayout from '../../components/ui/ContentLayout';

const LegalSystemReformPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-navy">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9")',
            backgroundSize: 'wide',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Criminal Legal System Reform
            </h1>
            <p className="text-xl text-purple-100">
              Transforming Arizona's criminal legal system through evidence-based policy reform and community-driven solutions.
            </p>
          </div>
        </div>
      </section>

      <ContentLayout
        quote={{
          text: "It is not enough to be compassionate. You must act.",
          author: "The Dalai Lama"
        }}
      >
        <section className="py-20">
          <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Our Reform Initiatives</h2>
            <p className="max-w-2xl mx-auto mb-12 leading-relaxed text-center text-gray-600">
              Transforming Arizona's criminal legal system requires a comprehensive approach that addresses systemic inequities while promoting rehabilitation and justice. Our initiatives focus on evidence-based strategies that create meaningful, lasting change.
            </p>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Scale className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Policy Reform</h3>
                  <p className="leading-relaxed text-gray-600">
                    We develop and advocate for evidence-based policies that promote fairness, reduce recidivism, and prioritize rehabilitation over punishment. Our team works directly with legislators and stakeholders to craft effective reform measures that address systemic inequities and create opportunities for positive change.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <FileText className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Legislative Advocacy</h3>
                  <p className="leading-relaxed text-gray-600">
                    Our legislative advocacy program focuses on building support for reform measures by engaging policymakers, providing expert testimony, and sharing data-driven insights. By illustrating the real-world impacts of current policies, we work to secure broad-based support for initiatives that promote accountability and justice. Through sustained outreach and education efforts, we aim to create legislative solutions that reflect the needs of the communities they affect.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Community Engagement</h3>
                  <p className="leading-relaxed text-gray-600">
                    We believe in the power of community voices to drive change. By gathering insights and experiences from affected individuals and families, we ensure our reform agenda addresses real-world needs. Our engagement efforts foster collaboration with community organizations, advocacy groups, and directly impacted individuals to amplify their perspectives in policy discussions. Building trust and collaboration with communities ensures our reforms are grounded in the lived realities of those most impacted by the criminal legal system.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Gavel className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">System Improvement Research</h3>
                  <p className="leading-relaxed text-gray-600">
                    Our research team conducts in-depth analyses of current practices within the criminal legal system, studying successful reforms from other jurisdictions to inform our recommendations. By identifying systemic gaps and offering actionable solutions, we contribute to the development of a more equitable and effective criminal legal system. Research is the backbone of innovation, providing the evidence needed to challenge entrenched systems and advocate for transformational change.
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
              <div className="mb-2 text-4xl font-bold text-navy">75%</div>
              <div className="text-gray-700">Increase in Advocacy Reach</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-navy">50+</div>
              <div className="text-gray-700">New Community Partnerships</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-navy">3x</div>
              <div className="text-gray-700">Program Expansion by 2026</div>
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
                Our reform initiatives and oversight advocacy work together to create a pathway to accountability, transparency, and fairness in Arizona's correctional and criminal legal systems. By combining evidence-based strategies, community engagement, and persistent advocacy, we aim to bring about systemic changes that prioritize rehabilitation and dignity over punishment. These efforts are a testament to the power of collaboration and the enduring pursuit of justice for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={ctaSections.legalSystemReform.title}
        description={ctaSections.legalSystemReform.description}
        primaryButton={ctaSections.legalSystemReform.primaryButton}
        secondaryButton={ctaSections.legalSystemReform.secondaryButton}
        tertiaryButton={ctaSections.legalSystemReform.tertiaryButton}
      />
    </div>
  );
};

export default LegalSystemReformPage;
