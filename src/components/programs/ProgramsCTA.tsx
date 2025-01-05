import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake } from 'lucide-react';

const ProgramsCTA = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <HeartHandshake className="h-16 w-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Support Our Programs
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your support enables us to continue providing these vital programs and expand our impact in the community. Join us in creating lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Support Our Mission
            </Link>
            <Link
              to="/action"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-md hover:bg-purple-50 transition-colors border border-purple-200"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCTA;