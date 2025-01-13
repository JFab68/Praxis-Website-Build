import 'react';
import { Scale, FileText, Users, Gavel } from 'lucide-react';
import CTASection from '../../components/CTASection';
import { ctaSections } from '../../data/cta-sections';

const LegalSystemReformPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1589994965851-a8f479c573a9")',
            backgroundSize: 'wide',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Criminal Legal System Reform
            </h1>
            <p className="text-xl text-purple-100">
              Transforming Arizona's criminal legal system through evidence-based policy reform and community-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Reform Initiatives</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transforming Arizona's criminal legal system requires a comprehensive approach that addresses systemic inequities while promoting rehabilitation and justice. Our initiatives focus on evidence-based strategies that create meaningful, lasting change.
            </p>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Scale className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Reform</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop and advocate for evidence-based policies that promote fairness, reduce recidivism, and prioritize rehabilitation over punishment. Our team works directly with legislators and stakeholders to craft effective reform measures that address systemic inequities and create opportunities for positive change.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <FileText className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legislative Advocacy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our legislative advocacy program focuses on building support for reform measures by engaging policymakers, providing expert testimony, and sharing data-driven insights. By illustrating the real-world impacts of current policies, we work to secure broad-based support for initiatives that promote accountability and justice. Through sustained outreach and education efforts, we aim to create legislative solutions that reflect the needs of the communities they affect.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Engagement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in the power of community voices to drive change. By gathering insights and experiences from affected individuals and families, we ensure our reform agenda addresses real-world needs. Our engagement efforts foster collaboration with community organizations, advocacy groups, and directly impacted individuals to amplify their perspectives in policy discussions. Building trust and collaboration with communities ensures our reforms are grounded in the lived realities of those most impacted by the criminal legal system.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Gavel className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">System Improvement Research</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our research team conducts in-depth analyses of current practices within the criminal legal system, studying successful reforms from other jurisdictions to inform our recommendations. By identifying systemic gaps and offering actionable solutions, we contribute to the development of a more equitable and effective criminal legal system. Research is the backbone of innovation, providing the evidence needed to challenge entrenched systems and advocate for transformational change.
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
              <div className="text-4xl font-bold text-navy mb-2">75%</div>
              <div className="text-gray-700">Increase in Advocacy Reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">50+</div>
              <div className="text-gray-700">New Community Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">3x</div>
              <div className="text-gray-700">Program Expansion by 2026</div>
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
