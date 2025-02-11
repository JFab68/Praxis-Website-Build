import 'react';
import { Heart, Users, Sparkles, Calendar } from 'lucide-react';
import CTASection from '../../components/CTASection';
import { ctaSections } from '../../data/cta-sections';
import ContentLayout from '../../components/ui/ContentLayout';

const DoulaProgramPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-navy">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531983412531-1f49a365ffed")',
            backgroundSize: 'wide',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              SUDT Doula Program
            </h1>
            <p className="text-xl text-purple-100">
              Supporting substance-use-impacted mothers through specialized doula care, advocacy, and comprehensive support services.
            </p>
          </div>
        </div>
      </section>

      <ContentLayout
        quote={{
          text: "There is no greater power than a mother's love turned into action.",
          author: "Dorothy Height"
        }}
      >
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Our Services</h2>
              <p className="max-w-2xl mx-auto mb-12 leading-relaxed text-center text-gray-600">
                The Substance Use Disorder Training (SUDT) Doula Program provides comprehensive support for mothers impacted by substance use. Our program integrates specialized doula care with recovery support, advocacy services, and ongoing care to empower mothers and strengthen families.
              </p>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Heart className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Personalized Support</h3>
                    <p className="leading-relaxed text-gray-600">
                      Our program trains doulas to provide individualized support throughout pregnancy, birth, and postpartum periods. With a specialized understanding of substance use challenges, our trained doulas ensure that mothers receive care tailored to their unique needs and circumstances. By integrating trauma-informed practices, we help create a supportive and safe environment for both mother and child.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Users className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Advocacy Services</h3>
                    <p className="leading-relaxed text-gray-600">
                      We advocate for mothers in healthcare settings, ensuring they receive respectful, non-judgmental care and access to appropriate treatment options. Through collaboration with healthcare providers and policymakers, we work to eliminate stigmatizing practices and create pathways for equitable maternal care.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Recovery Support</h3>
                    <p className="leading-relaxed text-gray-600">
                      The SUDT Doula Program integrates recovery support with doula services, equipping trained doulas to help mothers maintain their recovery goals while preparing for and adjusting to parenthood. By offering guidance and emotional support, doulas help mothers navigate the complexities of recovery and parenting, fostering resilience and stability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Calendar className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Ongoing Care</h3>
                    <p className="leading-relaxed text-gray-600">
                      Our program emphasizes the importance of extended postpartum support. By training doulas to help mothers navigate early parenthood while maintaining their recovery and accessing needed resources, we ensure that mothers are supported during one of life's most challenging transitions. This includes connecting families to long-term support networks and resources that promote ongoing wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-navy">78,000+</div>
                <div className="text-gray-700">Live Births Last Year in AZ</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-navy">50%</div>
                <div className="text-gray-700">Reduction in Caesarian delivery</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-navy">30%</div>
                <div className="text-gray-700">Drop in Postpartum Depression</div>
              </div>
            </div>
          </div>
        </section>

        {/* Takeaway Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Program Summary</h2>
                <p className="leading-relaxed text-gray-700">
                  The SUDT Doula Program empowers mothers and strengthens families by integrating personalized care, advocacy, and recovery support. Through education, training, and collaboration, we prepare doulas to address the unique needs of mothers impacted by substance use, ensuring they receive compassionate and effective care tailored to their journey.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ContentLayout>

      <CTASection
        title={ctaSections.doulaProgram.title}
        description={ctaSections.doulaProgram.description}
        primaryButton={ctaSections.doulaProgram.primaryButton}
        secondaryButton={ctaSections.doulaProgram.secondaryButton}
        tertiaryButton={ctaSections.doulaProgram.tertiaryButton}
      />
    </div>
  );
};

export default DoulaProgramPage;
