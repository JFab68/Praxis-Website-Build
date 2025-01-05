import React from 'react';
import { Scale, FileText, Users, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Scale className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Reform</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We develop and advocate for evidence-based policies that promote fairness, reduce recidivism, and prioritize rehabilitation over punishment. Our team works directly with legislators and stakeholders to craft effective reform measures.
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
                    Our legislative advocacy program focuses on building support for reform measures, providing testimony, and educating policymakers about the real impacts of current policies on communities.
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
                    We believe in the power of community voices. Our program actively engages with affected communities, gathering insights and experiences that inform our reform agenda and ensure it reflects real needs.
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
                    Our research team analyzes current practices, studies successful reforms from other jurisdictions, and develops recommendations for improving Arizona's criminal legal system.
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
              <div className="text-4xl font-bold text-navy mb-2">25+</div>
              <div className="text-gray-700">Reform Bills Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">1000+</div>
              <div className="text-gray-700">Community Members Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">15</div>
              <div className="text-gray-700">Policy Changes Achieved</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Reform Movement</h2>
            <p className="text-xl mb-8">
              Your support strengthens our ability to advocate for meaningful change in Arizona's criminal legal system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support"
                className="inline-flex items-center justify-center px-6 py-3 bg-maroon text-white rounded-md hover:bg-teal transition-colors"
              >
                Support Our Mission
              </Link>
              <Link
                to="/action"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-md hover:bg-purple-800 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalSystemReformPage;