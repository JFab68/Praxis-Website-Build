import 'react';
import { Heart, HandHeart, Users, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportMissionPage = () => {
  const supportOptions = [
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Support our programs financially to help us continue and expand our impact.",
      link: "/donation",
      buttonText: "Donate Now"
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers making a difference in our community.",
      link: "/get-involved",
      buttonText: "Get Involved"
    },
    {
      icon: Users,
      title: "Join Our Action Center",
      description: "Participate in advocacy campaigns and community initiatives.",
      link: "/action",
      buttonText: "Take Action"
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Share our mission with your network and help us grow our community.",
      link: "/share",
      buttonText: "Share Our Story"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-purple-100">
              Join us in creating meaningful change through prison oversight, legal system reform, and comprehensive support programs.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <option.icon className="h-12 w-12 text-purple-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <Link
                    to={option.link}
                    className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-md hover:bg-teal transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
                  >
                    {option.buttonText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
                <p className="text-gray-600">Facilities Monitored</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
                <p className="text-gray-600">Individuals Supported</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <p className="text-gray-600">Policy Changes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Become a Monthly Supporter</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our community of monthly donors and help us create sustainable, long-term change.
            </p>
            <Link
              to="/donate?type=monthly"
              className="inline-flex items-center px-8 py-4 bg-maroon text-white rounded-md hover:bg-teal transition-colors text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              Join Monthly Giving Program
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-12 bg-[#8080ff] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Corporate Partnerships</h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with us to create meaningful social impact and demonstrate your commitment to justice reform.
            </p>
            <Link
              to="/corporate-partnerships"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-[#8080ff] transition-colors text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              Learn About Partnerships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportMissionPage;
