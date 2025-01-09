import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';

import PartnerSection from '../components/partners/PartnerSection';

const PartnersPage = () => {
  const oversightPartners = [
    {
      name: "Prison and Jail Innovation Lab",
      url: "https://pjil.lbj.utexas.edu/",
      logo: "https://pjil.lbj.utexas.edu/sites/default/files/pjil-logo.png",
      description: "Leading research and innovation in correctional oversight"
    },
    {
      name: "National Resource Center for Correctional Oversight",
      url: "https://prisonoversight.org/",
      logo: "https://prisonoversight.org/wp-content/uploads/2023/01/nrcco-logo-dark-horizontal.svg",
      description: "Supporting effective oversight of correctional facilities"
    },
    {
      name: "The Prison Policy Initiative",
      url: "https://www.prisonpolicy.org/",
      logo: "/src/assets/images/partner_logos/Prison_Policy_Initiative.svg",
      description: "Research and advocacy for criminal justice reform"
    },
    {
      name: "The Vera Institute",
      url: "https://www.vera.org/",
      logo: "/src/assets/images/partner_logos/Vera.svg",
      description: "Evidence-driven solutions for justice reform"
    },
    {
      name: "The Marshall Project",
      url: "https://www.themarshallproject.org/",
      logo: "/src/assets/images/partner_logos/Marshall_Project.svg",
      description: "Nonprofit journalism about criminal justice"
    },
    {
      name: "ACLU National Prison Project",
      url: "https://www.aclu.org/documents/aclu-national-prison-",
      logo: "/src/assets/images/partner_logos/ACLU_National_Prison_Project.svg",
      description: "Protecting constitutional rights of prisoners"
    }
  ];

  const reformPartners = [
    {
      name: "FAMM",
      url: "https://www.famm.org",
      logo: "/src/assets/images/partner_logos/FAMM.svg",
      description: "Fighting for smart sentencing and prison reform"
    },
    {
      name: "ACLU",
      url: "https://www.aclu.org",
      logo: "https://www.aclu.org/sites/default/files/aclu_logo.png",
      description: "Defending civil rights and liberties"
    },
    {
      name: "Justice Action Network",
      url: "https://www.justiceactionnetwork.org/",
      logo: "https://images.squarespace-cdn.com/content/v1/5d128ac9071d0b00017ea5e3/0db9013a-db97-4c82-a271-22d7387ccbc2/JAN+LOGO+S+GRADIENT.png",
      description: "Bipartisan criminal justice reform advocacy"
    },
    {
      name: "Dream.org",
      url: "https://Dream.org",
      logo: "https://dream.org/wp-content/uploads/2022/07/DreamOrg_Logo_Icon_3ColorVariations_C-6.svg",
      description: "Building inclusive democracy and economy"
    },
    {
      name: "FWD.us",
      url: "https://www.Fwd.Us",
      logo: "src/assets/images/partner_logos/fwd_us.svg",
      description: "Immigration and criminal justice reform"
    },
    {
      name: "Right on Crime",
      url: "https://rightoncrime.com/",
      logo: "src/assets/images/partner_logos/Right_On_Crime.svg",
      description: "Conservative criminal justice reform"
    },
    {
      name: "The Brennan Center for Justice",
      url: "https://www.brennancenter.org/",
      logo: "https://www.brennancenter.org/themes/custom/paladin/patternlab/public/images/brennan-center-for-justice.svg",
      description: "Independent, nonpartisan law and policy organization"
    },
    {
      name: "The Sentencing Project",
      url: "https://www.sentencingproject.org/",
      logo: "src/assets/images/partner_logos/Sentencing_Project.svg",
      description: "Research and advocacy for reform"
    },
    {
      name: "The Innocence Project",
      url: "https://innocenceproject.org/",
      logo: "src/assets/images/partner_logos/Innocence_Project.svg",
      description: "Exonerating the wrongly convicted"
    },
    {
      name: "Alliance for Safety and Justice",
      url: "https://allianceforsafetyandjustice.org/",
      logo: "src/assets/images/partner_logos/Alliance.svg",
      description: "Advancing policies that create safety"
    }
  ];

  const drugPolicyPartners = [
    {
      name: "Drug Policy Alliance",
      url: "https://drugpolicy.org/",
      logo: "src/assets/images/partner_logos/Drug_Policy_Alliance.svg",
      description: "Leading drug policy reform organization"
    },
    {
      name: "National Harm Reduction Coalition",
      url: "https://harmreduction.org/",
      logo: "src/assets/images/partner_logos/National_Harm_Reduction_Coalition.svg",
      description: "Promoting health and dignity in drug policy"
    },
    {
      name: "National Institute on Drug Abuse",
      url: "https://www.nih.gov/about-nih/what-we-do/nih-almanac/national-institute-drug-abuse-nida",
      logo: "src/assets/images/partner_logos/NIH.svg",
      description: "Science of drug use and addiction"
    },
    {
      name: "SAMHSA National Helpline",
      url: "https://www.samhsa.gov/find-help/national-helpline",
      logo: "src/assets/images/partner_logos/SAMHSA.svg",
      description: "Treatment referral and information"
    },
    {
      name: "HHS Harm Reduction Strategy",
      url: "https://www.hhs.gov/overdose-prevention/",
      logo: "src/assets/images/partner_logos/Overdose_Prevention.svg",
      description: "Federal overdose prevention initiative"
    }
  ];

  const doulaPartners = [
    {
      name: "DONA International",
      url: "https://www.dona.org/",
      logo: "src/assets/images/partner_logos/DONA.svg",
      description: "Leading doula certification organization"
    },
    {
      name: "CAPPA",
      url: "https://cappa.net/",
      logo: "src/assets/images/partner_logos/CAPPA.svg",
      description: "Childbirth and postpartum professional association"
    },
    {
      name: "International Childbirth Education Association",
      url: "https://icea.org/",
      logo: "src/assets/images/partner_logos/ICEA.SVG",
      description: "Education and certification for birth professionals"
    },
    {
      name: "National Black Doulas Association",
      url: "https://www.blackdoulas.org/",
      logo: "src/assets/images/partner_logos/NBDA.svg",
      description: "Supporting Black maternal health"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Partners & Friends
            </h1>
            <p className="text-xl text-purple-100">
              Working together with leading organizations to create meaningful change in criminal justice reform, harm reduction, and community support.
            </p>
          </div>
        </div>
      </section>

      <PartnerSection
        title="Independent Prison and Jail Oversight"
        description="Collaborating with leading organizations in correctional oversight and reform to ensure transparency, accountability, and human dignity in our prison systems."
        partners={oversightPartners}
      />

      <PartnerSection
        title="Criminal Legal System Reform"
        description="Working alongside established organizations dedicated to transforming our criminal legal system through policy reform, advocacy, and research."
        partners={reformPartners}
      />

      <PartnerSection
        title="Drug Policy and Risk Mitigation"
        description="Partnering with organizations at the forefront of evidence-based drug policy reform and harm reduction strategies."
        partners={drugPolicyPartners}
      />

      <PartnerSection
        title="Doula Certification and Support"
        description="Collaborating with professional organizations to provide comprehensive doula training and support services."
        partners={doulaPartners}
      />
      
      <CTASection {...ctaSections.partners} />
    </div>
  );
};

export default PartnersPage;
