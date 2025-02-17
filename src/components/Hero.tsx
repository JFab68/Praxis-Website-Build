import 'react';
import { Link } from 'react-router-dom';
import ImpactCounter from './ImpactCounter';

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/src/assets/images/Page_imges/HomePage_imges/Firght_for_a_Better_Tomorrow.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col flex-grow pt-32 md:pt-48">
        <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-auto space-y-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Creating Change Through Advocacy, Oversight, and Support
          </h1>
          <p className="max-w-2xl mb-8 text-base leading-relaxed text-gray-200 md:text-lg">
            Independent prison oversight, comprehensive support, and holistic wellness are key to building safer, healthier communities.
          </p>
          <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
            <Link
              to="/about"
              style={{ backgroundColor: '#000080' }}
              className="px-6 py-2 text-base font-semibold text-white transition-opacity rounded hover:opacity-90"
            >
              Learn More
            </Link>
            <Link
              to="/donate"
              style={{ backgroundColor: '#800000' }}
              className="px-6 py-2 text-base font-semibold text-white transition-opacity rounded hover:opacity-90"
            >
              Donate Now
            </Link>
          </div>
        </div>
        </div>

        {/* Stats Section - FIXED AND FINAL VERSION */}
        <div className="relative z-30 w-full py-6 mt-auto bg-navy">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
              <ImpactCounter
                end={1900000}
                label="People Incarcerated in the US"
                suffix="+"
              />
              <ImpactCounter
                end={19000000}
                label="Americans with Felony Records"
                suffix="+"
              />
              <ImpactCounter
                end={107000}
                label="Annual Overdose Deaths"
                suffix="+"
              />
              <ImpactCounter
                end={340000}
                label="Births Impacted Annually"
                suffix="+"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
