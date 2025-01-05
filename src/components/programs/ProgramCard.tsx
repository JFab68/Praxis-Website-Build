import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  features: string[];
}

const ProgramCard = ({ title, description, icon: Icon, link, features }: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="p-6">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to={link}
          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;