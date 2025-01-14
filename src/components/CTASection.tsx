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
    <section className="relative h-[300px] flex items-center overflow-hidden">
      <video 
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/PraxisHeroBG..mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#806adbcc] to-[#80000000]"></div>
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          <div className="flex flex-col justify-center text-center md:text-left space-y-6">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">{title}</h2>
            <p className="text-xl mb-8 leading-relaxed animate-fade-in-up delay-100">{description}</p>
          <div className="flex gap-6 justify-center md:justify-start">
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#806adb] text-white rounded-full hover:bg-[#6a5acd] transition-colors w-48 text-lg"
            >
              Join Us
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#b87333] text-white rounded-full hover:bg-[#a05a28] transition-colors w-48 text-lg"
            >
              Learn More
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#800000] text-white rounded-full hover:bg-[#660000] transition-colors w-48 text-lg"
            >
              Donate
            </Link>
          </div>
          </div>
          <div className="hidden md:flex items-center justify-center h-full">
            <img 
              src="/assets/images/Page_imges/HomePage_imges/Possible_graphic.webp"
              alt="Abstract graphic"
              className="max-h-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
