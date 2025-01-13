import 'react';
import { Heart, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const partners = [
    {
      name: "FAMM",
      category: "Criminal Justice Reform"
    },
    {
      name: "Just Action Network",
      category: "Advocacy"
    },
    {
      name: "Dream.Org",
      category: "Social Justice"
    },
    {
      name: "American Conservative Union",
      category: "Policy Reform"
    },
    {
      name: "Death Penalty Alternatives Arizona",
      category: "Criminal Justice Reform"
    },
    {
      name: "ACLU",
      category: "Civil Rights"
    },
    {
      name: "Just Communities Arizona",
      category: "Community Support"
    },
    {
      name: "Arnold Ventures",
      category: "Research & Policy"
    },
    {
      name: "Sonoran Prevention Works",
      category: "Harm Reduction"
    },
    {
      name: "Vitalyst",
      category: "Healthcare Access"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80")',
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

      {/* Quote Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-purple-600 mx-auto mb-6" />
            <blockquote className="text-2xl font-medium text-gray-900 mb-6">
              "People closest to the problem are closest to the solution but furthest away from power and resources."
            </blockquote>
            <cite className="text-gray-600">- Glenn E. Martin</cite>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-8">
                <Heart className="h-12 w-12 text-purple-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Donation</h2>
                <p className="text-gray-600 mb-8">
                  Your support enables us to continue our vital work in prison oversight, legal system reform, and community support programs.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[25, 50, 100, 250].map((amount) => (
                    <button
                      key={amount}
                      className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors font-semibold"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-semibold mb-4">
                  Custom Amount
                </button>
                <div className="flex justify-center space-x-4">
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    PayPal
                  </button>
                  <button className="px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors">
                    Credit Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners in Change</h2>
              <p className="text-xl text-gray-600">
                We proudly collaborate with organizations and individuals committed to transforming lives and systems. Together, we're stronger in our mission for positive change.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <span className="text-sm text-purple-600">{partner.category}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center text-gray-600">
              <p>And many more individual advocates and groups working tirelessly for change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Other Ways to Support</h2>
            <p className="text-xl mb-8">
              Beyond financial support, there are many ways to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/action"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 rounded-md hover:bg-gray-100 transition-colors"
              >
                Volunteer With Us
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-md hover:bg-purple-800 transition-colors"
              >
                Learn About Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;