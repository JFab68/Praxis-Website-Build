import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Users } from 'lucide-react';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-purple-100">
              From grassroots advocacy to national impact, we're transforming criminal justice through lived experience and evidence-based reform.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Founded in Response to Crisis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 2020, amidst growing concerns about conditions in Arizona's correctional facilities, we established Arizonans for Transparency and Accountability in Corrections (ATAC). As directly impacted individuals, we recognized the urgent need for systematic oversight and reform of the Arizona Department of Corrections, Rehabilitation and Reentry (ADCRR).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Globe className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Expanding Our Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our core team's experience extends beyond Arizona's borders. Three of our founding members brought their expertise from a prominent national nonprofit organization, where they developed and implemented criminal justice reform strategies across multiple states. This national perspective enriches our local advocacy while enabling us to contribute to federal-level initiatives.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Leading the Fight for Oversight</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We've been at the forefront of the movement for independent oversight of ADCRR, leveraging our unique combination of lived experience and professional expertise. Our advocacy has led to groundbreaking policy proposals and increased public awareness of the need for transparency in our correctional system.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">1</div>
              <div className="text-gray-700">state</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">4</div>
              <div className="text-gray-700">policy areas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">10,000+</div>
              <div className="text-gray-700">lives touched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">1</div>
              <div className="text-gray-700">directly impacted organization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission Today</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Building on our foundation in correctional oversight, we've expanded our mission to address the full spectrum of criminal legal system reform. Through our innovative programs and evidence-based advocacy, we're working to create lasting change that honors human dignity and promotes public safety.
            </p>
          </div>
        </div>
      </section>
      
      <CTASection {...ctaSections.about} />
    </div>
  );
};

export default AboutPage;
