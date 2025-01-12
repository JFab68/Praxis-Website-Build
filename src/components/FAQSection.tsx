import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Praxis Initiative unique?",
      answer: "We are Arizona's only organization founded and operated by directly impacted individuals, bringing authentic, lived experience to our advocacy work. Our team includes formerly incarcerated individuals and those with direct experience in the criminal legal system."
    },
    {
      question: "How does independent prison oversight work?",
      answer: "Independent prison oversight involves systematic monitoring of correctional facilities by external observers to ensure accountability, transparency, and compliance with human rights standards. We work to implement comprehensive monitoring systems and advocate for policy changes based on our findings."
    },
    {
      question: "How can I get involved with Praxis Initiative?",
      answer: "There are multiple ways to support our mission: volunteer for our programs, donate to support our work, attend our events, sign up for our newsletter, or advocate for criminal legal system reform in your community. Visit our Action Center to learn more."
    },
    {
      question: "What is the Substance Use Spectrum Trained Doula Program?",
      answer: "This innovative program provides specialized support for individuals dealing with substance use challenges. Our trained doulas offer personalized care, advocacy, and guidance throughout the recovery journey, focusing on harm reduction and holistic wellness."
    },
    {
      question: "How are donations used?",
      answer: "Donations directly support our programs, including prison oversight initiatives, legal system reform advocacy, substance use support services, and educational programs. As a grassroots organization, we rely on community support to maintain and expand our impact."
    }
  ];

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Learn more about our mission, programs, and impact
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-navy flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-navy flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border border-gray-100 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
