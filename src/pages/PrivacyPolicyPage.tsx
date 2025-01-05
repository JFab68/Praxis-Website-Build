import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-200">Last Updated: December 2, 2024</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-600 mb-8">
              The Praxis Initiative ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information You Provide to Us</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Demographic information (when voluntarily provided)</li>
              <li>Messages and communications you send to us</li>
              <li>Donation information (processed securely through third-party payment processors)</li>
              <li>Volunteer applications and related information</li>
              <li>Survey responses and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Automatically Collected</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-600">
              <li>IP address and device information</li>
              <li>Browser type and settings</li>
              <li>Date and time of visits</li>
              <li>Pages viewed and features used</li>
              <li>Referring websites</li>
              <li>Cookie data and similar technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600">
              <li>Provide and improve our services</li>
              <li>Process donations and volunteer applications</li>
              <li>Communicate with you about our programs and initiatives</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Analyze website usage and enhance user experience</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Share Your Information</h2>
            <p className="text-gray-600 mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600">
              <li>Service providers who assist in our operations</li>
              <li>Partner organizations (with your explicit consent)</li>
              <li>Legal authorities when required by law</li>
              <li>Professional advisors (attorneys, accountants)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-4">For questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-600">The Praxis Initiative</p>
              <p className="text-gray-600">4022 E. Greenway Rd.</p>
              <p className="text-gray-600">Ste. 11 PMB 1046</p>
              <p className="text-gray-600">Phoenix, AZ 85032</p>
              <p className="text-gray-600">Email: privacy@praxisinitiative.org</p>
              <p className="text-gray-600">Phone: (602) 777-7503</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
            <p className="text-gray-600 mb-4">For more information about your privacy rights and data protection:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Federal Trade Commission: <a href="https://www.ftc.gov" className="text-navy hover:text-teal">www.ftc.gov</a></li>
              <li>Privacy Rights Clearinghouse: <a href="https://www.privacyrights.org" className="text-navy hover:text-teal">www.privacyrights.org</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;