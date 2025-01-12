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
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
            Our Team
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Led by directly impacted individuals committed to transformative change
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* First row - Co-founders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {team.slice(0, 3).map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-96">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-h3 font-serif font-semibold text-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-maroon font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-text-secondary text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
          </div>
          {/* Second row - Centered */}
          <div className="flex justify-center gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {team.slice(3, 5).map((member, index) => (
                <div key={index + 3} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-96">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-h3 font-serif font-semibold text-navy mb-2">
                      {member.name}
                    </h3>
                    <p className="text-maroon font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-text-secondary text-sm">
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
