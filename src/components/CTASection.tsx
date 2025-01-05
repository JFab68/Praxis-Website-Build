import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) => {
  return (
    <section className="h-[400px] flex items-center bg-[#8080ff] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={primaryButtonLink}
              className="inline-flex items-center justify-center px-6 py-3 bg-maroon text-white rounded-md hover:bg-teal transition-colors"
            >
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                to={secondaryButtonLink}
                className="inline-flex items-center justify-center px-6 py-3 bg-copper text-white rounded-md hover:bg-copper-dark transition-colors"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;