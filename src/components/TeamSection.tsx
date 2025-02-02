import React from 'react';
import johnImage from '../assets/images/John.webp';
import alexImage from '../assets/images/J_Alex.webp';
import jessicaImage from '../assets/images/Jessica.webp';
import sherriImage from '../assets/images/Sherri.webp';
import mindiImage from '../assets/images/Mindi.webp';

const TeamSection = () => {
  const team = [
    {
      name: "John Fabricius",
      role: "Executive Director & Co-founder",
      bio: "Formerly incarcerated for 15 years in the Arizona Department of Corrections, John's experience across 14 different units and 9 complexes, including private facilities in Indiana and Oklahoma, drives his passion for reform.",
      image: johnImage
    },    
    {
      name: "Jessica Johnson",
      role: "Legislative Director & Co-founder",
      bio: "With eight years of incarceration experience at the Perryville complex, Jessica channels her understanding into effective legislative strategies and reform.",
      image: jessicaImage
    },
    {
      name: "J Alexandria Hunt-Garcia",
      role: "Policy Director & Co-founder",
      bio: "Drawing from five years of personal experience at the Perryville complex in Goodyear, AZ, Alexandria brings vital insights to policy reform and advocacy initiatives.",
      image: alexImage
    },
    {
      name: "Sherri Scates",
      role: "Operations Coordinator",
      bio: "Motivated by her sons' experiences with incarceration, including one currently serving a 30-year sentence and another lost to suicide, Sherri brings a parent's perspective to reform advocacy.",
      image: sherriImage
    },
    {
      name: "Mindi Kraicinski",
      role: "Special Advisor",
      bio: "With 26 years of experience as a Correctional Officer III in the Arizona Department of Corrections, Rehabilitation, and Reentry, Mindi brings invaluable institutional knowledge to our reform efforts.",
      image: mindiImage
    }
  ];

  return (
    <section className="bg-white py-section">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <div className="mb-8 text-2xl italic text-center font-handwriting text-text-primary">
            "People closest to the problem are closest to the solution, but furthest from power and resources."
            <div className="mt-2 font-sans text-lg not-italic">
              - Glenn E. Martin
            </div>
          </div>
        </div>
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif font-bold text-h2 text-text-primary">
            Our Team
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed text-body text-text-secondary">
            Led by directly impacted individuals committed to transformative change
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* First row - Co-founders */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
            {team.slice(0, 3).map((member, index) => (
              <div key={index} className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl">
                <div className="h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-serif font-semibold text-h3 text-navy">
                    {member.name}
                  </h3>
                  <p className="mb-4 font-medium text-maroon">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Second row - Centered */}
          <div className="flex justify-center gap-6">
            <div className="grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
              {team.slice(3, 5).map((member, index) => (
                <div key={index + 3} className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl">
                  <div className="h-72">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-serif font-semibold text-h3 text-navy">
                      {member.name}
                    </h3>
                    <p className="mb-4 font-medium text-maroon">
                      {member.role}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
