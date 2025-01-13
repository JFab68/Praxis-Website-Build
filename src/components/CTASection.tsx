import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
  tertiaryButton?: {
    text: string;
    link: string;
  };
}

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  tertiaryButton,
}: CTASectionProps) => {
  return (
    <section className="h-[400px] flex items-center bg-[#000080] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={primaryButton.link}
              className="inline-flex items-center justify-center px-8 py-4 bg-maroon text-white rounded-md hover:bg-teal transition-colors min-w-[220px] text-lg"
            >
              {primaryButton.text}
            </Link>
            {secondaryButton && (
              <Link
                to={secondaryButton.link}
                className="inline-flex items-center justify-center px-12 py-4 bg-[#b87333] text-white rounded-md hover:bg-[#a05a28] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 text-lg w-64"
              >
                {secondaryButton.text}
              </Link>
            )}
            {tertiaryButton && (
              <Link
                to={tertiaryButton.link}
                className="inline-flex items-center justify-center px-12 py-4 bg-[#806adb] text-white rounded-md hover:bg-[#6a5acd] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 text-lg w-64"
              >
                {tertiaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
