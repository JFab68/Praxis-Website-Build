import React from 'react';
import { Link } from 'react-router-dom';

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
      logo: "https://famm.org/wp-content/uploads/FAMM-Logo.png",
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
      logo: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80",
      description: "Bipartisan criminal justice reform advocacy"
    },
    {
      name: "Dream.org",
      url: "https://Dream.org",
      logo: "https://dream.org/wp-content/uploads/2022/08/dream-logo.svg",
      description: "Building inclusive democracy and economy"
    },
    {
      name: "FWD.us",
      url: "https://www.Fwd.Us",
      logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80",
      description: "Immigration and criminal justice reform"
    },
    {
      name: "Right on Crime",
      url: "https://rightoncrime.com/",
      logo: "https://rightoncrime.com/wp-content/uploads/2019/08/ROC-Logo-Blue.png",
      description: "Conservative criminal justice reform"
    },
    {
      name: "The Brennan Center for Justice",
      url: "https://www.brennancenter.org/",
      logo: "https://www.brennancenter.org/themes/custom/brennan/assets/images/brennan-center-for-justice-logo.svg",
      description: "Independent, nonpartisan law and policy organization"
    },
    {
      name: "The Sentencing Project",
      url: "https://www.sentencingproject.org/",
      logo: "https://www.sentencingproject.org/wp-content/uploads/2016/01/tsp-logo.png",
      description: "Research and advocacy for reform"
    },
    {
      name: "The Innocence Project",
      url: "https://innocenceproject.org/",
      logo: "https://www.innocenceproject.org/wp-content/uploads/2021/05/IP_Logo_RGB.png",
      description: "Exonerating the wrongly convicted"
    },
    {
      name: "Alliance for Safety and Justice",
      url: "https://allianceforsafetyandjustice.org/",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
      description: "Advancing policies that create safety"
    }
  ];

  const drugPolicyPartners = [
    {
      name: "Drug Policy Alliance",
      url: "https://drugpolicy.org/",
      logo: "https://drugpolicy.org/sites/default/files/dpa-logo.png",
      description: "Leading drug policy reform organization"
    },
    {
      name: "National Harm Reduction Coalition",
      url: "https://harmreduction.org/",
      logo: "https://harmreduction.org/wp-content/themes/harmreduction/images/logo.svg",
      description: "Promoting health and dignity in drug policy"
    },
    {
      name: "National Institute on Drug Abuse",
      url: "https://www.nih.gov/about-nih/what-we-do/nih-almanac/national-institute-drug-abuse-nida",
      logo: "https://www.drugabuse.gov/sites/default/files/NIDA_Logo.png",
      description: "Science of drug use and addiction"
    },
    {
      name: "SAMHSA National Helpline",
      url: "https://www.samhsa.gov/find-help/national-helpline",
      logo: "https://www.samhsa.gov/sites/default/files/samhsa-logo.png",
      description: "Treatment referral and information"
    },
    {
      name: "HHS Harm Reduction Strategy",
      url: "https://www.hhs.gov/overdose-prevention/",
      logo: "https://www.hhs.gov/sites/default/files/hhs-logo.png",
      description: "Federal overdose prevention initiative"
    }
  ];

  const doulaPartners = [
    {
      name: "DONA International",
      url: "https://www.dona.org/",
      logo: "https://www.dona.org/wp-content/uploads/2016/08/DONA-International-Logo.png",
      description: "Leading doula certification organization"
    },
    {
      name: "CAPPA",
      url: "https://cappa.net/",
      logo: "https://cappa.net/wp-content/uploads/2019/03/cappa-logo.png",
      description: "Childbirth and postpartum professional association"
    },
    {
      name: "International Childbirth Education Association",
      url: "https://icea.org/",
      logo: "https://icea.org/wp-content/uploads/2016/01/ICEA-Logo.png",
      description: "Education and certification for birth professionals"
    },
    {
      name: "National Black Doulas Association",
      url: "https://www.blackdoulas.org/",
      logo: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80",
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
      
      {/* CTA Section */}
      <section className="h-[350px] flex items-center bg-[#8080ff] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl mb-8">
              Join our network of organizations working together for systemic change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/support"
                className="inline-flex items-center justify-center px-8 py-3 bg-maroon text-white rounded-md hover:bg-teal transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Support Our Mission
              </Link>
              <Link
                to="/action"
                className="inline-flex items-center justify-center px-8 py-3 bg-navy text-white rounded-md hover:bg-teal transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;