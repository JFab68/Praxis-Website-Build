import { HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonateSection = () => {
  return (
    <section className="py-12" style={{ backgroundColor: '#000080' }}>
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="mb-6 font-serif font-bold text-white text-h2">
            Support Arizona's Only Directly-Impacted Led Initiative
          </h2>
          <p className="mb-8 text-gray-200 text-body">
            Your donation directly supports our mission to transform Arizona's criminal legal system through lived experience and evidence-based advocacy. As a community-driven organization, we rely on supporters like you to continue our vital work.
          </p>
          <Link
            to="/action"
            className="inline-flex items-center justify-center px-6 py-3 text-white transition-colors rounded-md bg-copper hover:bg-copper-dark"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
