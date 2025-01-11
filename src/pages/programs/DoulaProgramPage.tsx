import React from 'react';
import { Heart, Users, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../../components/CTASection';
import { ctaSections } from '../../data/cta-sections';

const DoulaProgramPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531983412531-1f49a365ffed")',
            backgroundSize: 'wide',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SUDT Doula Program
            </h1>
            <p className="text-xl text-purple-100">
              Supporting substance-use-impacted mothers through specialized doula care, advocacy, and comprehensive support services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              The Substance Use Disorder Training (SUDT) Doula Program provides comprehensive support for mothers impacted by substance use. Our program integrates specialized doula care with recovery support, advocacy services, and ongoing care to empower mothers and strengthen families.
            </p>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our program trains doulas to provide individualized support throughout pregnancy, birth, and postpartum periods. With a specialized understanding of substance use challenges, our trained doulas ensure that mothers receive care tailored to their unique needs and circumstances. By integrating trauma-informed practices, we help create a supportive and safe environment for both mother and child.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Advocacy Services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We advocate for mothers in healthcare settings, ensuring they receive respectful, non-judgmental care and access to appropriate treatment options. Through collaboration with healthcare providers and policymakers, we work to eliminate stigmatizing practices and create pathways for equitable maternal care.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Recovery Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The SUDT Doula Program integrates recovery support with doula services, equipping trained doulas to help mothers maintain their recovery goals while preparing for and adjusting to parenthood. By offering guidance and emotional support, doulas help mothers navigate the complexities of recovery and parenting, fostering resilience and stability.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Calendar className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Care</h3>
                  <p className="text-gray-600 leading-relaxed">
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">78,000+</div>
              <div className="text-gray-700">Live Births Last Year in AZ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">50%</div>
              <div className="text-gray-700">Reduction in Caesarian delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">30%</div>
              <div className="text-gray-700">Drop in Postpartum Depression</div>
            </div>
          </div>
        </div>
      </section>

      {/* Takeaway Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                The SUDT Doula Program empowers mothers and strengthens families by integrating personalized care, advocacy, and recovery support. Through education, training, and collaboration, we prepare doulas to address the unique needs of mothers impacted by substance use, ensuring they receive compassionate and effective care tailored to their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

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
