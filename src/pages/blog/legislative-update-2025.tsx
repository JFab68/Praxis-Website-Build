import React from 'react';

const LegislativeUpdateArticle = () => {
  return (
    <div className="pt-24">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-navy mb-4">
            Legislative Update - January 2025
          </h1>
          <div className="text-gray-600 mb-4">December 11, 2024</div>
          <div className="text-gray-600">By Jessica Johnson</div>
        </header>

        <div className="prose max-w-none">
          <p className="lead mb-8">
            Comprehensive coverage of upcoming reforms including independent oversight, home confinement, and SNAP benefits.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Independent Oversight Progress</h2>
          <p>
            The push for independent oversight of Arizona's Department of Corrections continues to gain momentum, with new legislative support and detailed implementation plans ready for the upcoming session.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Home Confinement Program</h2>
          <p>
            Proposed expansion of home confinement options aims to reduce prison populations while maintaining public safety through evidence-based supervision methods.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">SNAP Benefits Reform</h2>
          <p>
            Critical changes to SNAP benefit eligibility for formerly incarcerated individuals are advancing, with bipartisan support for removing barriers to successful reentry.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Political Landscape</h2>
          <p>
            With several new lawmakers joining the legislature, we're seeing increased openness to evidence-based reforms and a growing recognition of the need for systemic changes.
          </p>
        </div>
      </article>
    </div>
  );
};

export default LegislativeUpdateArticle;