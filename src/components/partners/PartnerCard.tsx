import 'react';
import { ExternalLink } from 'lucide-react';

interface PartnerCardProps {
  name: string;
  url: string;
  logo: string;
  description?: string;
}

const PartnerCard = ({ name, url, logo, description }: PartnerCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-50 p-6 flex items-center justify-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{name}</h3>
      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-navy hover:text-teal font-medium"
      >
        Visit Website
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
      </div>
    </div>
  );
};

export default PartnerCard;