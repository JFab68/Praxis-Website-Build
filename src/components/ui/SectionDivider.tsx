import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="flex justify-center w-full my-12">
      <div 
        className="w-[200px] h-[2px]"
        style={{
          background: 'linear-gradient(to right, transparent, #d1d5db 30%, #d1d5db 70%, transparent)',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(255,255,255,0.8)',
          opacity: 0.7,
          backdropFilter: 'blur(0.5px)'
        }}
      />
    </div>
  );
};

export default SectionDivider;
