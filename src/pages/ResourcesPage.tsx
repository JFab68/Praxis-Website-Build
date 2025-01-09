import React from 'react';
import { FileText, BookOpen, Download, Link as LinkIcon, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';

const ResourcesPage = () => {
  const resources = {
    advocacy: [
      {
        title: "Prison Oversight Toolkit",
        description: "Comprehensive guide for implementing effective prison oversight mechanisms.",
        type: "PDF",
        size: "2.4 MB"
      },
      {
        title: "Legislative Advocacy Guide",
        description: "Step-by-step guide for engaging with legislators and policy makers.",
        type: "PDF",
        size: "1.8 MB"
      },
      {
        title: "Community Organizing Manual",
        description: "Tools and strategies for grassroots organizing and community engagement.",
        type: "PDF",
        size: "3.1 MB"
      }
    ],
    education: [
      {
        title: "Understanding Harm Reduction",
        description: "Educational materials about evidence-based harm reduction strategies.",
        type: "PDF",
        size: "1.5 MB"
      },
      {
        title: "Substance Use Support Guide",
        description: "Resource guide for individuals and families affected by substance use.",
        type: "PDF",
        size: "2.2 MB"
      },
      {
        title: "SUDT Doula Program Overview",
        description: "Information about our specialized doula services and support programs.",
        type: "PDF",
        size: "1.9 MB"
      }
    ],
    research: [
      {
        title: "Arizona Prison Conditions Report 2023",
        description: "Annual report on conditions in Arizona correctional facilities.",
        type: "PDF",
        size: "4.2 MB"
      },
      {
        title: "Legal System Reform Impact Study",
        description: "Research on the effectiveness of criminal legal system reforms.",
        type: "PDF",
        size: "3.5 MB"
      },
      {
        title: "Harm Reduction Outcomes Analysis",
        description: "Data and analysis of harm reduction program outcomes.",
        type: "PDF",
        size: "2.8 MB"
      }
    ]
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-200">
              Access our comprehensive collection of advocacy materials, educational resources, and research publications.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Advocacy Materials */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <FileText className="h-8 w-8 text-navy mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Advocacy Materials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.advocacy.map((resource, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.type} • {resource.size}</span>
                    <button className="text-navy hover:text-teal">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Resources */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="h-8 w-8 text-navy mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Educational Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.education.map((resource, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.type} • {resource.size}</span>
                    <button className="text-navy hover:text-teal">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Publications */}
          <div>
            <div className="flex items-center mb-8">
              <LinkIcon className="h-8 w-8 text-navy mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Research Publications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.research.map((resource, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.type} • {resource.size}</span>
                    <button className="text-navy hover:text-teal">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to receive updates when new resources are available and stay informed about our latest initiatives.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-navy text-white rounded-md hover:bg-teal transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Training & Workshops Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-navy mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Training & Workshops</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prison Oversight Training</h3>
                <p className="text-gray-600 mb-4">Comprehensive training on monitoring methodologies and best practices for correctional oversight.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">4 Sessions • Certificate Provided</span>
                  <button className="text-navy hover:text-teal">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advocacy Workshop Series</h3>
                <p className="text-gray-600 mb-4">Learn effective advocacy strategies and techniques for creating systemic change.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">6 Sessions • Online Available</span>
                  <button className="text-navy hover:text-teal">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Organizing</h3>
                <p className="text-gray-600 mb-4">Develop skills for building and mobilizing community support for reform initiatives.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Monthly • In-Person</span>
                  <button className="text-navy hover:text-teal">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Policy Analysis Workshop</h3>
                <p className="text-gray-600 mb-4">Learn to analyze and evaluate criminal justice policies and their impacts.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">3 Sessions • Materials Included</span>
                  <button className="text-navy hover:text-teal">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection {...ctaSections.resources} />
    </div>
  );
};

export default ResourcesPage;
