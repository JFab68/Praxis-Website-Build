import React from 'react';

const ProgramHero = () => {
  return (
    <section className="relative py-20 bg-purple-900 text-white">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-purple-100">
            Comprehensive solutions for systemic change through independent oversight, legal reform, harm reduction, and personal support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;