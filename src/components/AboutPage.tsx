import { Shield, Globe, Users } from 'lucide-react';
import CTASection from './CTASection';
import { ctaSections } from '../data/cta-sections';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-purple-900">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Our Story
            </h1>
<div className="text-xl text-gray-700">
  <p><strong>From Grassroots Advocacy to Impacting Arizona</strong></p>
  
  <p>Praxis Initiative was born out of necessity—the necessity for transparency, accountability, and a fundamental rethinking of how we approach justice. We are not just an organization; we are a movement fueled by lived experience, dedicated research, and an unwavering commitment to criminal legal system reform. What began as a grassroots effort to expose the failures within Arizona’s prison system has grown into a force for change, influencing policy, legislation, and public discourse within the state.</p>
  
  <p><strong>Founded in Response to Decades of Lived Experience</strong></p>
  
  <p>The origins of Praxis Initiative can be traced back to 2010 when our founder, John Fabricius, was incarcerated at the Eyman Complex in Florence, Arizona. While working for the prison administrator, John gained a unique perspective on how the Arizona Department of Corrections controlled information and concealed systemic failures from public scrutiny. This awareness deepened when Arizona Republic reporter Robert Ortega toured the unit. John witnessed firsthand the calculated efforts by prison officials to manage what the reporter saw, ensuring that only a sanitized version of reality was presented. It was then that he realized the prison system lacked true accountability and independent oversight.</p>
  
  <p>At the same time, Arizona’s prison healthcare system was spiraling into crisis. In 2010, the state legislature passed a law privatizing correctional healthcare but set reimbursement rates so low that no vendors were willing to take the contract. As a result, medical staff left their positions in droves, knowing their jobs were being eliminated, while the privatized provider had yet to take over. This left a critical gap in medical care, creating a humanitarian crisis inside Arizona’s prisons. As a paralegal assisting incarcerated individuals, John saw case after case of people suffering and even dying from a total lack of medical treatment.</p>
  
  <p>With these two issues converging—the systematic manipulation of oversight and the collapse of medical care—John began to understand how deeply hidden the failures of Arizona’s prisons were from the public. The experience planted the seed for independent oversight, a concept he carried with him long after his release in 2018.</p>
  
  <p>After his release, John began volunteering with a local nonprofit working on criminal legal system reform. Then, in 2019, reports began emerging about the Lewis Lock scandal, a case where leaked security footage exposed how malfunctioning cell doors rendered entire prison units uncontrollable, endangering both correctional officers and incarcerated individuals. This was the final confirmation of everything he had witnessed inside.</p>
  
  <p>The public outrage sparked by the scandal led to the resignation of Arizona Department of Corrections Director Charles Ryan, but for John and others who had lived through these failures, it was only the beginning. In response, they launched Arizonans for Transparency and Accountability in Corrections (ATAC), recognizing that lasting change required not just exposing failures but building a sustainable framework for justice, fairness, and oversight.</p>
  
  <p><strong>Expanding Our Impact</strong></p>
  
  <p>We have also witnessed firsthand the devastation caused by the overdose crisis and the rapid spread of synthetic opioids. Some of our founding members have lost immediate family, close friends, and have survived addiction themselves—this is not an abstract issue; it is an immediate, ongoing tragedy in our lives and the lives of millions across this country. Watching the same tired governmental response—escalating penalties and enacting harsher drug laws to address what is fundamentally a public health crisis—compelled us to expand our mission beyond oversight.</p>
  
  <p>Recognizing that punitive approaches only deepen harm, we launched our Drug Use Risk Mitigation initiative, focused on practical, evidence-based solutions that prioritize health, safety, and education over criminalization. This expansion also led to the creation of a specialized program training doulas in substance use disorder, recovery, relapse prevention, and the unique needs of expectant mothers navigating substance use disorders. Mothers and infants in marginalized communities and carceral environments are too often denied basic human compassion and care. Our work aims to change that by ensuring that these individuals receive the support they need and the compassion every human deserves.</p>
  
  <p>Our focus remains entirely on Arizona—ensuring that systemic failures within the state’s correctional and public health systems are addressed with sustainable, locally-driven solutions. By advocating for change at the legislative and policy levels, we strive to make Arizona a leader in criminal legal system reform, proving that transparency and accountability can create safer communities.</p>
  
  <p><strong>Leading the Fight for Oversight</strong></p>
  
  <p>We have established ourselves as a trusted and indispensable voice in the movement for independent oversight of Arizona’s correctional institutions. Our approach is unique—combining the lived experience of those who have directly endured the system’s failures with the policy expertise needed to enact meaningful change. This dual perspective allows us to craft bold, informed proposals that challenge the status quo while remaining grounded in practical implementation.</p>
  
  <p>Through relentless advocacy, we have helped shape the legislative landscape surrounding prison oversight, leading efforts to establish an independent ombudsman and legislative committee to monitor ADCRR. We have worked across ideological divides to ensure that accountability in the criminal legal system is recognized not as a partisan issue, but as a fundamental necessity for justice and public safety.</p>
</div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white shadow-elevated">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Founded in Response to Crisis</h3>
                  <p className="leading-relaxed text-gray-600">
                    In 2020, amidst growing concerns about conditions in Arizona's correctional facilities, we established Arizonans for Transparency and Accountability in Corrections (ATAC). As directly impacted individuals, we recognized the urgent need for systematic oversight and reform of the Arizona Department of Corrections, Rehabilitation and Reentry (ADCRR).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Expanding Our Impact</h3>
                  <p className="leading-relaxed text-gray-600">
                    Our core team's experience extends beyond Arizona's borders. Three of our founding members brought their expertise from a prominent national nonprofit organization, where they developed and implemented criminal justice reform strategies across multiple states. This national perspective enriches our local advocacy while enabling us to contribute to federal-level initiatives.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Leading the Fight for Oversight</h3>
                  <p className="leading-relaxed text-gray-600">
                    We've been at the forefront of the movement for independent oversight of ADCRR, leveraging our unique combination of lived experience and professional expertise. Our advocacy has led to groundbreaking policy proposals and increased public awareness of the need for transparency in our correctional system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white shadow-elevated">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-purple-600">15+</div>
              <div className="text-gray-700">States Impacted</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-purple-600">50+</div>
              <div className="text-gray-700">Policy Proposals</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-purple-600">1000s</div>
              <div className="text-gray-700">Lives Touched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white shadow-elevated">
        <div className="container px-4">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Mission Today</h2>
            <p className="text-xl leading-relaxed text-gray-600">
              Building on our foundation in correctional oversight, we've expanded our mission to address the full spectrum of criminal legal system reform. Through our innovative programs and evidence-based advocacy, we're working to create lasting change that honors human dignity and promotes public safety.
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
