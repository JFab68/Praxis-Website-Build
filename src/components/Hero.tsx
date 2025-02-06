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
backgroundImage: 'url("src/assets/images/Page_imges/HomePage_imges/Fight_for_a_Better_Tomorrow.webp")',
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
            {/* Main Headlines */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Inside Experience. Outside Change.
              </h1>
              <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl">
                From Prison to Progress.
              </h2>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-200 md:text-lg">
                Five years of fighting for prison oversight showed us where change must begin. Now, as Praxis Initiative, we're expanding our proven advocacy to create broader impact.
              </p>
              <p className="text-base leading-relaxed text-gray-200 md:text-lg">
                Building on our foundation of government accountability, we're advancing criminal legal system reform, drug use risk mitigation, and specialized doula programs for marginalized communities.
              </p>
              <p className="text-base font-semibold leading-relaxed text-gray-200 md:text-lg">
                Because real change demands comprehensive solutions.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
              <a
                href="/about"
                style={{ backgroundColor: '#000080' }}
                className="px-6 py-2 text-base font-semibold text-white transition-opacity rounded hover:opacity-90"
              >
                Learn More
              </a>
              <a
                href="/donate"
                style={{ backgroundColor: '#800000' }}
                className="px-6 py-2 text-base font-semibold text-white transition-opacity rounded hover:opacity-90"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
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
