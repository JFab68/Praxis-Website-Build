import React from 'react';
import { Shield, Globe, Users, Scale } from 'lucide-react';
import '../styles/about.css';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';
import ProgramCard from '../components/programs/ProgramCard';
import { Accordion } from '../components/ui/Accordion';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-navy">
        <div className="absolute inset-0 z-0 about-hero-bg">
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pt-20 pb-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-2xl italic text-center font-handwriting text-text-primary">
              "People closest to the problem are closest to the solution, but furthest from power and resources."
              <div className="mt-2 font-sans text-lg not-italic">
                - Glenn E. Martin
              </div>
            </div>
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Our Story</h2>
            <p className="mb-8 text-xl text-center text-gray-600">
              Discover the journey that shaped our organization and our commitment to justice reform
            </p>
            
            <div className="mb-20 space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">From Grassroots Advocacy to Impacting Arizona</h3>
                  <p className="leading-relaxed text-gray-600">
                    Praxis Initiative was born out of necessity—the necessity for transparency, accountability, and a fundamental rethinking of how we approach justice. We are not just an organization; we are a movement fueled by lived experience, dedicated research, and an unwavering commitment to criminal legal system reform. What began as a grassroots effort to expose the failures within Arizona's prison system has grown into a force for change, influencing policy, legislation, and public discourse within the state.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Globe className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Founded in Response to Decades of Lived Experience</h3>
                  <p className="leading-relaxed text-gray-600">
                    The origins of Praxis Initiative can be traced back to 2010 when our founder, John Fabricius, was incarcerated at the Eyman Complex in Florence, Arizona. While working for the prison administrator, John gained a unique perspective on how the Arizona Department of Corrections controlled information and concealed systemic failures from public scrutiny. This awareness deepened when Arizona Republic reporter Robert Ortega toured the unit. John witnessed firsthand the calculated efforts by prison officials to manage what the reporter saw, ensuring that only a sanitized version of reality was presented.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    At the same time, Arizona's prison healthcare system was spiraling into crisis. In 2010, the state legislature passed a law privatizing correctional healthcare but set reimbursement rates so low that no vendors were willing to take the contract. This left a critical gap in medical care, creating a humanitarian crisis inside Arizona's prisons. As a paralegal assisting incarcerated individuals, John saw case after case of people suffering and even dying from a total lack of medical treatment.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    After his release in 2018, John began volunteering with a local nonprofit working on criminal legal system reform. Then, in 2019, reports began emerging about the Lewis Lock scandal, a case where leaked security footage exposed how malfunctioning cell doors rendered entire prison units uncontrollable. This led to the launch of Arizonans for Transparency and Accountability in Corrections (ATAC), recognizing that lasting change required not just exposing failures but building a sustainable framework for justice.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Scale className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Expanding Our Impact</h3>
                  <p className="leading-relaxed text-gray-600">
                    We have witnessed firsthand the devastation caused by the overdose crisis and the rapid spread of synthetic opioids. Some of our founding members have lost immediate family, close friends, and have survived addiction themselves—this is not an abstract issue; it is an immediate, ongoing tragedy in our lives and the lives of millions across this country.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    Recognizing that punitive approaches only deepen harm, we launched our Drug Use Risk Mitigation initiative and created a specialized program training doulas in substance use disorder, recovery, relapse prevention, and the unique needs of expectant mothers navigating substance use disorders. Our focus remains entirely on Arizona—ensuring that systemic failures within the state's correctional and public health systems are addressed with sustainable, locally-driven solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Leading the Fight for Oversight</h3>
                  <p className="leading-relaxed text-gray-600">
                    We have established ourselves as a trusted and indispensable voice in the movement for independent oversight of Arizona's correctional institutions. Our approach is unique—combining the lived experience of those who have directly endured the system's failures with the policy expertise needed to enact meaningful change.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    Through relentless advocacy, we have helped shape the legislative landscape surrounding prison oversight, leading efforts to establish an independent ombudsman and legislative committee to monitor ADCRR. We have worked across ideological divides to ensure that accountability in the criminal legal system is recognized not as a partisan issue, but as a fundamental necessity for justice and public safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 pb-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Explore Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Discover how we're making an impact through our key initiatives
            </p>
          </div>
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            <ProgramCard
              title="Independent Prison Oversight"
              description="Ensuring transparency and accountability in correctional facilities"
              icon={Shield}
              link="/programs/prison-oversight"
              features={[
                'Independent monitoring',
                'Whistleblower protection',
                'Data-driven reforms'
              ]}
            />
            <ProgramCard
              title="Criminal Legal System Reform"
              description="Advocating for fair and equitable justice policies"
              icon={Scale}
              link="/programs/legal-reform"
              features={[
                'Sentencing reform',
                'Bail system improvements',
                'Racial justice initiatives'
              ]}
            />
            <ProgramCard
              title="Drug Use Risk Mitigation"
              description="Providing resources and advocacy for addiction recovery"
              icon={Users}
              link="/programs/substance-use"
              features={[
                'Harm reduction programs',
                'Treatment access advocacy',
                'Community education'
              ]}
            />
            <ProgramCard
              title="SUDT Doula Program"
              description="Supporting individuals with substance use disorders through doula services"
              icon={Users}
              link="/programs/doula-program"
              features={[
                'Prenatal support',
                'Postpartum care',
                'Recovery resources'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Learn More and Get Involved</h2>
            <p className="text-xl leading-relaxed text-gray-600">
              Our work is a testament to the power of advocacy and collaboration. Whether you're an advocate, policymaker, or simply passionate about justice, we invite you to join us in reshaping the criminal legal system. Explore more about our programs, impact, and opportunities to make a difference today.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection {...ctaSections.about} />
    </div>
  );
};

export default AboutPage;