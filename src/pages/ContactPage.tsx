import 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';

const ContactPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Have questions? We're here to help. Reach out through any of our channels.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg text-gray-700">
          <h3 className="text-3xl font-bold text-navy mb-6">Contact Us</h3>
          <p className="mb-6">
            At Praxis Initiative, we know that real change begins with connection. Whether you're a community member with questions, an advocate seeking collaboration, or someone ready to share their story, we're here to listen. Your insights, experiences, and support fuel our mission to create a more transparent, accountable, and humane criminal legal system.
          </p>
          <p className="mb-6">
            By reaching out, you're taking the first step in becoming part of a movement dedicated to justice and reform. Have questions about our programs or initiatives? Looking for ways to get involved as a volunteer or advocate? Interested in learning more about how we're driving systemic change? We'd love to hear from you.
          </p>
          <p>
            Let's work together to transform ideas into action and build a brighter, more equitable future. Contact us today—your voice matters, and your involvement can make a lasting difference.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Mail className="h-12 w-12 text-navy mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                <a 
                  href="mailto:Info@PraxisInitiative.Org" 
                  className="text-navy hover:text-teal text-lg"
                >
                  Info@PraxisInitiative.Org
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <Phone className="h-12 w-12 text-navy mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1"></p>
                  <a
                    href="tel:+14808081800"
                    className="text-navy hover:text-teal text-lg block"
                  >
                    (480) 808-1800
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Toll Free</p>
                  <a
                    href="tel:+18888104080"
                    className="text-navy hover:text-teal text-lg block"
                  >
                    (888) 810-4080
                  </a>
                </div>
              </div>
            </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Globe className="h-12 w-12 text-navy mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Website</h3>
                <a 
                  href="https://praxisinitiative.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-navy hover:text-teal text-lg"
                >
                  praxisinitiative.org
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <MapPin className="h-12 w-12 text-navy mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mailing Address</h3>
                <address className="text-gray-600 not-italic text-lg">
                  4022 E. Greenway Rd.<br />
                  Ste. 11 PMB 1046<br />
                  Phoenix, AZ 85032
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection {...ctaSections.contact} />
    </div>
  );
};

export default ContactPage;
