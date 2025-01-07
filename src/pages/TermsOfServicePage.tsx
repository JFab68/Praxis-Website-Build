import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-h1 font-serif font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-200">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-h2 font-serif text-navy mb-6">Agreement to Terms</h2>
            <p className="mb-6">
              By accessing and using the website and services of The Praxis Initiative ("we," "our," "us," or "Praxis"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.
            </p>

            <h2 className="text-h2 font-serif text-navy mb-6">Description of Services</h2>
            <p className="mb-6">Praxis provides:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Educational resources about criminal justice reform</li>
              <li>Advocacy tools and resources</li>
              <li>Information about our programs and initiatives</li>
              <li>Platform for community engagement</li>
              <li>Donation processing services</li>
              <li>Volunteer coordination services</li>
            </ul>

            <h2 className="text-h2 font-serif text-navy mb-6">User Responsibilities</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Creation</h3>
            <p className="mb-6">If you create an account, you agree to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Take responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Acceptable Use</h3>
            <p className="mb-6">You agree not to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, abuse, or harm others</li>
              <li>Share false or misleading information</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for commercial purposes without permission</li>
              <li>Interfere with the proper functioning of our website</li>
            </ul>

            <h2 className="text-h2 font-serif text-navy mb-6">Contact Information</h2>
            <p className="mb-6">For questions about these Terms, please contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-600">The Praxis Initiative</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mailing Address</h3>
              <p className="text-gray-600">4022 E. Greenway Rd.</p>
              <p className="text-gray-600">Ste. 11 PMB 1046</p>
              <p className="text-gray-600">Phoenix, AZ 85032</p>
              <p className="text-gray-600">Email: legal@praxisinitiative.org</p>
              <p className="text-gray-600">Phone: (602) 777-7503</p>
            </div>

            <h2 className="text-h2 font-serif text-navy mb-6">Special Provisions for Advocacy Services</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Attorney-Client Relationship</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Our advocacy services do not create an attorney-client relationship</li>
              <li>We do not provide legal representation</li>
              <li>Our resources are for informational purposes only</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Confidentiality</h3>
            <p className="mb-6">
              While we maintain strict confidentiality standards, communications through our website may not be protected by attorney-client privilege.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advocacy Limitations</h3>
            <p className="mb-6">We reserve the right to:</p>
            <ul className="list-disc pl-6">
              <li>Determine which cases or issues to support</li>
              <li>Modify our advocacy approach</li>
              <li>Decline to provide services</li>
              <li>Collaborate with other organizations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
