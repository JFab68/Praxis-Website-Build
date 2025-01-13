import 'react';

const AccessibilityPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-h1 font-serif font-bold mb-6">Accessibility Statement</h1>
          <p className="text-xl text-gray-200">
            Our commitment to digital accessibility for all users
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-h2 font-serif text-navy mb-6">Our Commitment</h2>
            <p className="mb-6">
              Praxis Initiative is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2 className="text-h2 font-serif text-navy mb-6">Conformance Status</h2>
            <p className="mb-6">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website strives to conform to WCAG 2.1 level AA standards.
            </p>

            <h2 className="text-h2 font-serif text-navy mb-6">Accessibility Features</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Clear heading structure</li>
              <li>Alt text for images</li>
              <li>Sufficient color contrast</li>
              <li>Keyboard navigation</li>
              <li>ARIA landmarks</li>
              <li>Responsive design</li>
            </ul>

            <h2 className="text-h2 font-serif text-navy mb-6">Feedback</h2>
            <p className="mb-6">
              We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Phone: [Your Phone Number]</li>
              <li>E-mail: <a href="mailto:Info@PraxisInitiative.Org" className="text-teal hover:text-navy">Info@PraxisInitiative.Org</a></li>
              <li>Postal Address: 4022 E. Greenway Rd. Ste. 11 PMB 1046, Phoenix, AZ 85032</li>
            </ul>

            <h2 className="text-h2 font-serif text-navy mb-6">Technical Specifications</h2>
            <p>
              Accessibility of our website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;