import React from 'react';
import PartnerCard from './PartnerCard';

interface Partner {
  name: string;
  url: string;
  description?: string;
}

interface PartnerSectionProps {
  title: string;
  description: string;
  partners: Partner[];
}

const PartnerSection = ({ title, description, partners }: PartnerSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;