import { useEffect } from 'react';
import { HandHeart, Users, Megaphone, Mail } from 'lucide-react';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';

const ActionCenterPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://actionnetwork.org/widgets/v5/form/join-us-392?format=js&source=widget';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://actionnetwork.org/css/style-embed-v3.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Take Action Now
            </h1>
            <p className="text-xl text-gray-200">
              Join us in creating meaningful change through advocacy, volunteering, and community engagement. Your involvement makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-24 bg-white bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get Involved: Make a Difference Today
              </h2>
              <div className="w-24 h-1 bg-navy mx-auto"></div>
            </div>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-lg">
                The challenges facing individuals impacted by substance use and the criminal legal system are immense, but they are not insurmountable. Every year, countless families navigate these systems with little support, often facing stigma, inadequate resources, and systemic barriers to change.
              </p>
              
              <p className="text-lg">
                Together, we can address these issues head-on by building networks of advocacy, providing resources, and amplifying the voices of those most impacted.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-navy">
                <p className="text-lg">
                  The time to act is now. By volunteering, advocating, or lending your skills, you can help us transform lives and create lasting change. Whether it's supporting programs like the SUDT Doula Program, coordinating events, or sharing your story to inspire legislative reform, your efforts will directly contribute to a more just and compassionate society.
                </p>
              </div>

              <div className="text-center mt-10">
                <p className="text-xl font-semibold text-gray-900">
                  Join Us: Be part of the movement for change. Volunteer your time, amplify our advocacy, or connect with your community to spread awareness. Together, we can make a difference.
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  Start today—contact us to explore how you can help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ways to Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <HandHeart className="h-12 w-12 text-navy mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Join our dedicated team of volunteers supporting various programs and initiatives. We offer training and flexible opportunities.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Program support roles
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Event coordination
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Administrative assistance
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <Megaphone className="h-12 w-12 text-navy mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advocacy</h3>
                <p className="text-gray-600 mb-6">
                  Amplify our message and help drive policy change through grassroots advocacy efforts.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Contact legislators
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Share your story
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Social media activism
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Join Our Movement</h2>
              <div id='can-form-area-join-us-392' style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need More Information?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to answer your questions and help you find the best way to get involved.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-navy mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">info@praxisinitiative.org</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-navy mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mailing Address</h3>
                <p className="text-gray-600">4022 E. Greenway Rd. Ste. 11 PMB 1046<br />Phoenix, AZ 85032</p>
              </div>
              <div className="flex flex-col items-center">
                <Megaphone className="h-8 w-8 text-navy mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-navy">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-navy">Facebook</a>
                  <a href="#" className="text-gray-600 hover:text-navy">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection {...ctaSections.actionCenter} />
    </div>
  );
};

export default ActionCenterPage;
