import React, { useMemo } from 'react';
import type { SectionProps, Pattern } from './Section.types';

const getPatternStyle = (pattern: Pattern | undefined): string => {
  if (!pattern) return 'none';
  switch (pattern) {
    case 'dots':
      return 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px) 0 0/20px 20px';
    case 'waves':
      return `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    case 'lines':
      return 'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)';
    case 'circles':
      return 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%)';
    default:
      return 'none';
  }
};

const Section: React.FC<SectionProps> = ({
  children,
  pattern = 'none',
  className = '',
  title,
  subtitle,
  backgroundImage
}) => {
  const backgroundStyles = useMemo(() => ({
    backgroundImage: `${pattern !== 'none' ? getPatternStyle(pattern) + ',' : ''} url(${backgroundImage})`,
    backgroundSize: pattern === 'lines' ? '40px 40px, 100% 100%' : 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'overlay',
  }), [pattern, backgroundImage]);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={backgroundStyles} />
      
      <div className="relative z-10 container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title.trim()}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-white/80">
                {subtitle.trim()}
              </p>
            )}
          </div>
        )}

        <div className={`bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-[1440px] mx-auto ${className}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export { Section };