import { useState } from 'react';
import { HandHeart, Users, Megaphone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import AutoSuggestInput from '../components/forms/AutoSuggestInput';
import ProgressBar from '../components/forms/ProgressBar';
import FormMessage from '../components/forms/FormMessage';

const GetInvolvedPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formMessage, setFormMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    interests: '',
    experience: ''
  });

  const formSteps = ['Personal Info', 'Contact Details', 'Interests'];
  const states = ['Arizona', 'California', 'Nevada', 'New Mexico', 'Texas', 'Utah'];
  const cities = ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Tempe'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage({ text: 'Application submitted successfully!', type: 'success' });
  };

  const opportunities = [
    {
      icon: HandHeart,
      title: "Direct Support",
      description: "Work directly with individuals and families through our various support programs.",
      roles: [
        "Doula Program Support",
        "Resource Navigator",
        "Peer Support Specialist",
        "Family Liaison"
      ]
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Help us build stronger connections and raise awareness in our communities.",
      roles: [
        "Event Coordinator",
        "Community Ambassador",
        "Workshop Facilitator",
        "Outreach Specialist"
      ]
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      description: "Join our advocacy efforts for systemic change and policy reform.",
      roles: [
        "Policy Research Assistant",
        "Legislative Advocate",
        "Public Speaker",
        "Campaign Coordinator"
      ]
    },
    {
      icon: Calendar,
      title: "Administrative Support",
      description: "Support our operations and help us maintain efficient programs.",
      roles: [
        "Data Entry Specialist",
        "Grant Writer",
        "Social Media Manager",
        "Office Support"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-purple-100">
              Join our community of dedicated volunteers and advocates making a real difference in Arizona's criminal justice system.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <opportunity.icon className="h-12 w-12 text-navy mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-6">{opportunity.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">Available Roles:</h4>
                  <ul className="space-y-2">
                    {opportunity.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="flex items-center text-gray-600">
                        <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Volunteer Application</h2>
              <ProgressBar currentStep={currentStep} totalSteps={3} steps={formSteps} />
              {formMessage && (
                <FormMessage
                  message={formMessage.text}
                  type={formMessage.type}
                  onDismiss={() => setFormMessage(null)}
                />
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <AutoSuggestInput
                        label="First Name"
                        id="firstName"
                        suggestions={[]}
                        value={formData.firstName}
                        onChange={(value) => handleInputChange('firstName', value)}
                        required
                      />
                    </div>
                    <div>
                      <AutoSuggestInput
                        label="Last Name"
                        id="lastName"
                        suggestions={[]}
                        value={formData.lastName}
                        onChange={(value) => handleInputChange('lastName', value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <AutoSuggestInput
                        label="Email Address"
                        id="email"
                        suggestions={[]}
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                        required
                      />
                    </div>

                    <div>
                      <AutoSuggestInput
                        label="Phone Number"
                        id="phone"
                        suggestions={[]}
                        value={formData.phone}
                        onChange={(value) => handleInputChange('phone', value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AutoSuggestInput
                        label="City"
                        id="city"
                        suggestions={cities}
                        value={formData.city}
                        onChange={(value) => handleInputChange('city', value)}
                        required
                      />
                      <AutoSuggestInput
                        label="State"
                        id="state"
                        suggestions={states}
                        value={formData.state}
                        onChange={(value) => handleInputChange('state', value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                        Areas of Interest
                      </label>
                      <select
                        id="interests"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                      >
                        <option value="">Select an area</option>
                        <option value="direct-support">Direct Support</option>
                        <option value="community-outreach">Community Outreach</option>
                        <option value="advocacy">Advocacy</option>
                        <option value="administrative">Administrative Support</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Relevant Experience
                      </label>
                      <textarea
                        id="experience"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                      ></textarea>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="px-6 py-3 border-2 border-navy text-navy rounded-md hover:bg-beige transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev + 1)}
                      className="px-6 py-3 bg-navy text-white rounded-md hover:bg-teal transition-colors ml-auto shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-3 bg-navy text-white rounded-md hover:bg-teal transition-colors ml-auto shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
                    >
                      Submit Application
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#8080ff] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Can't volunteer right now?</h2>
            <p className="text-xl mb-8">
              Can't volunteer right now? There are many other ways to support our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/support"
                className="inline-flex items-center justify-center w-48 px-6 py-3 bg-maroon text-white rounded-md hover:bg-teal transition-colors"
              >
                Make a Donation
              </Link>
              <Link
                to="/action"
                className="inline-flex items-center justify-center w-48 px-6 py-3 bg-navy text-white rounded-md hover:bg-teal transition-colors"
              >
                Sign Up for Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;