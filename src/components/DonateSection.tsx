import { HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonateSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <HeartHandshake className="h-16 w-16 text-navy mx-auto mb-6" />
          <h2 className="text-h2 font-serif font-bold text-text-primary mb-6">
            Support Arizona's Only Directly-Impacted Led Initiative
          </h2>
          <p className="text-body text-text-secondary mb-8">
            Your donation directly supports our mission to transform Arizona's criminal legal system through lived experience and evidence-based advocacy. As a community-driven organization, we rely on supporters like you to continue our vital work.
          </p>
          <Link
            to="/action"
            className="inline-flex items-center justify-center px-6 py-3 bg-copper text-white rounded-md hover:bg-copper-dark transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
