import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
  tertiaryButton: {
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
    <section className="h-[300px] flex items-center bg-[#000080] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={primaryButton.link}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#530080] text-white rounded-full hover:bg-[#45006a] transition-colors min-w-[165px] text-base"
            >
              {primaryButton.text}
            </Link>
            <Link
              to={secondaryButton.link}
              className="inline-flex items-center justify-center px-9 py-3 bg-[#806800] text-white rounded-full hover:bg-[#6a5600] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 text-base w-48"
            >
              {secondaryButton.text}
            </Link>
            <Link
              to={tertiaryButton.link}
              className="inline-flex items-center justify-center px-9 py-3 bg-[#800000] text-white rounded-full hover:bg-[#660000] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 text-base w-48"
            >
              {tertiaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
