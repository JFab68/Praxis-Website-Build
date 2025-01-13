import 'react';
import { Link } from 'react-router-dom';
import ImpactCounter from './ImpactCounter';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/src/assets/images/hero-background.jpg")',
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
      <div className="relative z-20 pt-32 md:pt-48 flex flex-col flex-grow">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-8 mb-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Creating Change Through Advocacy, Oversight, and Support
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mb-8">
            Independent prison oversight, comprehensive support, and holistic wellness are key to building safer, healthier communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start justify-start">
            <Link
              to="/about"
              style={{ backgroundColor: '#000080' }}
              className="px-6 py-2 text-white rounded text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Learn More
            </Link>
            <Link
              to="/donate"
              style={{ backgroundColor: '#800000' }}
              className="px-6 py-2 text-white rounded text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Donate Now
            </Link>
          </div>
        </div>
        </div>

        {/* Stats Section - FIXED AND FINAL VERSION */}
        <div className="w-full mt-auto relative z-30 bg-navy py-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
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
