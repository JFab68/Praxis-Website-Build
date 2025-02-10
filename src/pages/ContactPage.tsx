import 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';
import ContentLayout from '../components/ui/ContentLayout';

const ContactPage = () => {
  return (
    <div className="pt-16" style={{
      backgroundImage: 'url("/src/assets/images/Background Gradient.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-navy">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Have questions? We're here to help. Reach out through any of our channels.
            </p>
          </div>
        </div>
      </section>

      <ContentLayout>
        <div className="space-y-20">
          {/* Intro Paragraph */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
              <h3 className="mb-6 text-3xl font-bold text-navy">Contact Us</h3>
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
            <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="p-8 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
                <Mail className="w-12 h-12 mb-6 text-navy" />
                <h3 className="mb-4 text-xl font-bold text-gray-900">Email</h3>
                <a 
                  href="mailto:Info@PraxisInitiative.Org" 
                  className="text-lg text-navy hover:text-teal"
                >
                  Info@PraxisInitiative.Org
                </a>
              </div>

              <div className="p-8 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
              <Phone className="w-12 h-12 mb-6 text-navy" />
              <h3 className="mb-4 text-xl font-bold text-gray-900">Phone</h3>
              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-sm text-gray-600"></p>
                  <a
                    href="tel:+14808081800"
                    className="block text-lg text-navy hover:text-teal"
                  >
                    (480) 808-1800
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Toll Free</p>
                  <a
                    href="tel:+18888104080"
                    className="block text-lg text-navy hover:text-teal"
                  >
                    (888) 810-4080
                  </a>
                </div>
              </div>
            </div>

              <div className="p-8 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
                <Globe className="w-12 h-12 mb-6 text-navy" />
                <h3 className="mb-4 text-xl font-bold text-gray-900">Website</h3>
                <a 
                  href="https://praxisinitiative.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg text-navy hover:text-teal"
                >
                  praxisinitiative.org
                </a>
              </div>

              <div className="p-8 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
                <MapPin className="w-12 h-12 mb-6 text-navy" />
                <h3 className="mb-4 text-xl font-bold text-gray-900">Mailing Address</h3>
                <address className="text-lg not-italic text-gray-600">
                  4022 E. Greenway Rd.<br />
                  Ste. 11 PMB 1046<br />
                  Phoenix, AZ 85032
                </address>
              </div>
            </div>
            </div>
          </section>
        </div>
      </ContentLayout>

      <CTASection {...ctaSections.contact} />
    </div>
  );
};

export default ContactPage;
