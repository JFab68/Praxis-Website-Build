import 'react';
import { Shield, Globe, Users, Scale } from 'lucide-react';
import CTASection from '../components/CTASection';
import { ctaSections } from '../data/cta-sections';
import ProgramCard from '../components/programs/ProgramCard';
import { Accordion } from '../components/ui/Accordion';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-purple-100">
              From grassroots advocacy to national impact, we're transforming criminal justice through lived experience and evidence-based reform.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="font-handwriting text-2xl italic text-text-primary text-center mb-8">
              "People closest to the problem are closest to the solution, but furthest from power and resources."
              <div className="font-sans not-italic text-lg mt-2">
                - Glenn E. Martin
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Discover the journey that shaped our organization and our commitment to justice reform
            </p>
            
            <div className="space-y-12 mb-20">
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">From Grassroots Advocacy to National Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From grassroots advocacy to national impact, we are transforming the criminal legal system through lived experience and evidence-based reform.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Globe className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Founded in Response to Decades of Lived Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 2020, we came together to address the systemic failures within Arizona's correctional system, informed by decades of lived experience and a commitment to justice. The catalyst for our efforts was the emerging Lewis Lock incident, where videos brought to light the catastrophic failures within Arizona's correctional facilities. These videos, courageously disclosed by whistleblower Sergeant Gabrielle Contreras, revealed a system in crisis, including inoperable security doors and an unsafe environment for both staff and those incarcerated.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    The resulting public outrage led to the rapid resignation of then-Director Charles Ryan. Tragically, a year later, Sergeant Contreras was found dead under circumstances that shook the community. This sequence of events underscored the urgent need for transparency, accountability, and systemic reform, driving the creation of Arizonans for Transparency and Accountability in Corrections (ATAC).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Scale className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Expanding Our Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    While our roots are in Arizona, our reach extends far beyond. Three of our founding members brought expertise gained from working with a leading national nonprofit focused on criminal justice reform. This blend of local advocacy and national experience enables us to tackle systemic issues holistically, bridging state and federal initiatives to advance reform.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Leading the Fight for Oversight</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We've become a trusted voice in the movement for independent oversight of ADCRR. Our unique perspective, combining lived experience with professional advocacy, has led to innovative policy proposals and raised public awareness about the need for transparency. We're not just addressing today's challenges; we're building a framework for lasting accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVVP Section */}
      <section className="pt-12 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission, Vision, Values & Principles</h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Learn about the core beliefs that guide our work and drive our impact
            </p>
            
            <div className="space-y-4">
              <Accordion title="Mission">
                <p className="text-gray-600 leading-relaxed">
                  Praxis Initiative ensures government accountability in corrections through independent oversight and transparency. We advance programs that promote fairness in the criminal legal system, reduce harm from substance use, and empower individuals—turning justice theory into transformative action.
                </p>
              </Accordion>

              <Accordion title="Vision">
                <p className="text-gray-600 leading-relaxed">
                  We envision a society where prisons operate as models of integrity and accountability, fostering safety and rehabilitation rather than harm. In this future, all people—regardless of their circumstances—are treated with fairness, dignity, and compassion, and systemic barriers to justice are dismantled for good.
                </p>
              </Accordion>

              <Accordion title="Values">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Shield className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Accountability</h4>
                      <p className="text-gray-600 leading-relaxed">
                        We demand transparency and ethical conduct from government institutions, particularly in corrections, holding them to the highest standards of their mandate.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Scale className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Our work is grounded in honesty, fairness, and a commitment to uphold the rule of law, ensuring that incarcerated individuals are treated humanely and justly.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Users className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h4>
                      <p className="text-gray-600 leading-relaxed">
                        We champion approaches that recognize the humanity of every person, providing support to those facing substance use, incarceration, and systemic disadvantage.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Globe className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Evidence-Driven Action</h4>
                      <p className="text-gray-600 leading-relaxed">
                        We prioritize solutions rooted in data and research, ensuring that our programs, policies, and advocacy create measurable and lasting impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Shield className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Empowerment</h4>
                      <p className="text-gray-600 leading-relaxed">
                        We equip individuals and communities with the tools, knowledge, and resources to advocate for change and build a more just society.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Users className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h4>
                      <p className="text-gray-600 leading-relaxed">
                        We work across ideological, political, and social divides to unite diverse voices in pursuit of shared goals and systemic reform.
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion>

              <Accordion title="Principles">
                <p className="text-gray-600 leading-relaxed">
                  Praxis Initiative believes that prisons, as government institutions, must set the standard for ethical and lawful conduct. Prisons should never be places where harm is tolerated under the guise of rehabilitation, nor where abuse and neglect are normalized. Instead, they must operate as models of justice and safety, providing individuals with opportunities to build skills, address the root causes of criminal behavior, and reintegrate into society as productive members.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We challenge the societal acceptance of harm within incarceration, recognizing it as a barrier to meaningful rehabilitation and public safety. By focusing on independent oversight, compassionate care, and systemic reforms, we strive to ensure that government institutions operate with transparency, fairness, and integrity.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="pt-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Discover how we're making an impact through our key initiatives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Learn More and Get Involved</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our work is a testament to the power of advocacy and collaboration. Whether you're an advocate, policymaker, or simply passionate about justice, we invite you to join us in reshaping the criminal legal system. Explore more about our programs, impact, and opportunities to make a difference today.
            </p>
          </div>
        </div>
      </section>
      
      <CTASection {...ctaSections.about} />
    </div>
  );
};

export default AboutPage;
