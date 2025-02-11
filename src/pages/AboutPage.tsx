import 'react';
import { Shield, Globe, Users, Scale } from 'lucide-react';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';
import ContentLayout from '../components/ui/ContentLayout';

const AboutPage = () => {
  return (
    <div className="pt-16" style={{
      backgroundImage: 'url("/src/assets/images/Background Gradient.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-purple-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Our Story
            </h1>
            <p className="text-xl text-purple-100">
              From grassroots advocacy to national impact, we're transforming criminal justice through lived experience and evidence-based reform.
            </p>
          </div>
        </div>
      </section>

      <ContentLayout
        quote={{
          text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
          author: "Martin Luther King Jr."
        }}
      >
        <div className="space-y-20">
          {/* Our Story Section */}
          <section>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Story</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">From Grassroots Advocacy to National Impact</h3>
                    <p className="leading-relaxed text-gray-600">
                      From grassroots advocacy to national impact, we are transforming the criminal legal system through lived experience and evidence-based reform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <Globe className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Founded in Response to Decades of Lived Experience</h3>
                    <p className="leading-relaxed text-gray-600">
                      In 2020, we came together to address the systemic failures within Arizona's correctional system, informed by decades of lived experience and a commitment to justice. The catalyst for our efforts was the emerging Lewis Lock incident, where videos brought to light the catastrophic failures within Arizona's correctional facilities. These videos, courageously disclosed by whistleblower Sergeant Gabrielle Contreras, revealed a system in crisis, including inoperable security doors and an unsafe environment for both staff and those incarcerated.
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-600">
                      The resulting public outrage led to the rapid resignation of then-Director Charles Ryan. Tragically, a year later, Sergeant Contreras was found dead under circumstances that shook the community. This sequence of events underscored the urgent need for transparency, accountability, and systemic reform, driving the creation of Arizonans for Transparency and Accountability in Corrections (ATAC).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <Scale className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Expanding Our Impact</h3>
                    <p className="leading-relaxed text-gray-600">
                      While our roots are in Arizona, our reach extends far beyond. Three of our founding members brought expertise gained from working with a leading national nonprofit focused on criminal justice reform. This blend of local advocacy and national experience enables us to tackle systemic issues holistically, bridging state and federal initiatives to advance reform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Leading the Fight for Oversight</h3>
                    <p className="leading-relaxed text-gray-600">
                      We've become a trusted voice in the movement for independent oversight of ADCRR. Our unique perspective, combining lived experience with professional advocacy, has led to innovative policy proposals and raised public awareness about the need for transparency. We're not just addressing today's challenges; we're building a framework for lasting accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learn More Section */}
          <section>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Learn More and Get Involved</h2>
              <p className="text-xl leading-relaxed text-gray-600">
                Our work is a testament to the power of advocacy and collaboration. Whether you're an advocate, policymaker, or simply passionate about justice, we invite you to join us in reshaping the criminal legal system. Explore more about our programs, impact, and opportunities to make a difference today.
              </p>
            </div>
          </section>
        </div>
      </ContentLayout>

      <CTASection {...ctaSections.about} />
    </div>
  );
};

export default AboutPage;
