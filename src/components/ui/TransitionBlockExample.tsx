import React from 'react';
import TransitionBlock from './TransitionBlock';

export function TransitionBlockExample() {
  return (
    <div className="space-y-12">
      {/* Minimal variant example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Minimal Variant</h2>
        <TransitionBlock 
          theme="light" 
          variant="minimal" 
        />
      </section>

      {/* Wave variant example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Wave Variant</h2>
        <TransitionBlock 
          theme="light" 
          variant="wave" 
        />
      </section>

      {/* Slope variant example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Slope Variant</h2>
        <TransitionBlock 
          theme="dark" 
          variant="slope" 
        />
      </section>

      {/* Quote variant example */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quote Variant</h2>
        <TransitionBlock 
          theme="light" 
          variant="quote" 
          quote="Justice and recovery are not just words – they are the foundation of a better tomorrow."
          author="Praxis Team"
        />
      </section>
    </div>
  );
}
