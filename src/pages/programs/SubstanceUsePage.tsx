import 'react';
import { Heart, BookOpen, Stethoscope, HandHeart } from 'lucide-react';
import CTASection from '../../components/CTASection';
import { ctaSections } from '../../data/cta-sections';
import ContentLayout from '../../components/ui/ContentLayout';

const SubstanceUsePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-navy">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1527137342181-19aab11a8ee8")',
            backgroundSize: 'wide',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Drug Use Risk Mitigation
            </h1>
            <p className="text-xl text-purple-100">
              Transforming approaches to substance use through evidence-based strategies that reduce harm and improve public health outcomes.
            </p>
          </div>
        </div>
      </section>

      <ContentLayout
        quote={{
          text: "The opposite of addiction is not sobriety. The opposite of addiction is connection.",
          author: "Johann Hari"
        }}
      >
        <section className="py-20">
          <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Program Components</h2>
            <p className="max-w-2xl mx-auto mb-12 leading-relaxed text-center text-gray-600">
              Our comprehensive approach to drug use risk mitigation focuses on education, training, and policy change to empower communities and stakeholders with evidence-based strategies.
            </p>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Education & Training</h3>
                  <p className="leading-relaxed text-gray-600">
                    We provide comprehensive education about risk mitigation, recognition, and response. Our training programs equip individuals and organizations with life-saving knowledge and skills. By fostering awareness of safe practices and overdose prevention techniques, we empower communities to respond effectively to crises and reduce harm.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Support Services</h3>
                  <p className="leading-relaxed text-gray-600">
                    Our comprehensive approach advocates for the distribution of safety supplies, educational materials, and other critical resources by frontline organizations. We focus on training individuals and groups who provide direct support to ensure their efforts are informed by best practices in harm reduction. This strategy strengthens community-level interventions and encourages healthier outcomes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Stethoscope className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Healthcare Navigation</h3>
                  <p className="leading-relaxed text-gray-600">
                    We advocate for policies and practices that improve healthcare accessibility and reduce barriers to treatment. Our work involves training stakeholders to better assist individuals navigating healthcare systems, ensuring they connect with appropriate care and support. By addressing structural challenges like stigma and limited access, we promote equitable recovery-oriented healthcare solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <HandHeart className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Community Support</h3>
                  <p className="leading-relaxed text-gray-600">
                    Our program builds supportive networks within communities, connecting individuals with resources, peer support, and opportunities for recovery and growth. By fostering relationships and collaboration, we strengthen the community fabric and create pathways for sustainable well-being and empowerment.
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
              <div className="mb-2 text-4xl font-bold text-navy">40%</div>
              <div className="text-gray-700">Fewer Opioid Deaths</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-navy">2x</div>
              <div className="text-gray-700">Resource Access in Rural Areas</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-navy">25%</div>
              <div className="text-gray-700">Fewer Drug Arrests</div>
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
                Drug use risk mitigation is central to our advocacy. By focusing on education, training, and policy change, we empower communities and stakeholders to address substance use with evidence-based strategies that reduce harm and improve public health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection {...ctaSections.substanceUse} />
    </div>
  );
};

export default SubstanceUsePage;
