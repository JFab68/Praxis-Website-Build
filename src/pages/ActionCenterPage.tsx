import { useEffect } from 'react';
import { HandHeart, Users, Megaphone, Mail } from 'lucide-react';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';
import ContentLayout from '../components/ui/ContentLayout';

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
            backgroundImage: 'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Take Action Now
            </h1>
            <p className="text-xl text-gray-200">
              Join us in creating meaningful change through advocacy, volunteering, and community engagement. Your involvement makes a difference.
            </p>
          </div>
        </div>
      </section>

      <ContentLayout>
        <div className="space-y-20">
          {/* Get Involved Section */}
          <section className="py-24">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-gray-900">
                  Get Involved: Make a Difference Today
                </h2>
                <div className="w-24 h-1 mx-auto bg-navy"></div>
              </div>
              
              <div className="space-y-8 leading-relaxed text-gray-700">
                <p className="text-lg">
                  The challenges facing individuals impacted by substance use and the criminal legal system are immense, but they are not insurmountable. Every year, countless families navigate these systems with little support, often facing stigma, inadequate resources, and systemic barriers to change.
                </p>
                
                <p className="text-lg">
                  Together, we can address these issues head-on by building networks of advocacy, providing resources, and amplifying the voices of those most impacted.
                </p>

                <div className="p-6 border-l-4 rounded-lg bg-gray-50 border-navy">
                  <p className="text-lg">
                    The time to act is now. By volunteering, advocating, or lending your skills, you can help us transform lives and create lasting change. Whether it's supporting programs like the SUDT Doula Program, coordinating events, or sharing your story to inspire legislative reform, your efforts will directly contribute to a more just and compassionate society.
                  </p>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-xl font-semibold text-gray-900">
                    Join Us: Be part of the movement for change. Volunteer your time, amplify our advocacy, or connect with your community to spread awareness. Together, we can make a difference.
                  </p>
                  <p className="mt-4 text-lg text-gray-600">
                    Start today—contact us to explore how you can help!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ways to Get Involved Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Ways to Get Involved</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="p-8 bg-white rounded-lg shadow-lg">
                  <HandHeart className="w-12 h-12 mb-6 text-navy" />
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Volunteer</h3>
                  <p className="mb-6 text-gray-600">
                    Join our dedicated team of volunteers supporting various programs and initiatives. We offer training and flexible opportunities.
                  </p>
                  <ul className="mb-6 space-y-3">
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

                <div className="p-8 bg-white rounded-lg shadow-lg">
                  <Megaphone className="w-12 h-12 mb-6 text-navy" />
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Advocacy</h3>
                  <p className="mb-6 text-gray-600">
                    Amplify our message and help drive policy change through grassroots advocacy efforts.
                  </p>
                  <ul className="mb-6 space-y-3">
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
          </section>

          {/* Get Involved Form */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">Join Our Movement</h2>
                <div id='can-form-area-join-us-392' style={{ width: '100%' }}></div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Need More Information?</h2>
              <p className="mb-8 text-xl text-gray-600">
                Our team is here to answer your questions and help you find the best way to get involved.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 mb-4 text-navy" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">info@praxisinitiative.org</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-8 h-8 mb-4 text-navy" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Mailing Address</h3>
                  <p className="text-gray-600">4022 E. Greenway Rd. Ste. 11 PMB 1046<br />Phoenix, AZ 85032</p>
                </div>
                <div className="flex flex-col items-center">
                  <Megaphone className="w-8 h-8 mb-4 text-navy" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-navy">Twitter</a>
                    <a href="#" className="text-gray-600 hover:text-navy">Facebook</a>
                    <a href="#" className="text-gray-600 hover:text-navy">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ContentLayout>

      <CTASection {...ctaSections.actionCenter} />
    </div>
  );
};

export default ActionCenterPage;
