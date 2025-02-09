import React from 'react';

interface TransitionBlockProps {
  quote?: string;
  author?: string;
  theme?: 'light' | 'dark';
  variant?: 'wave' | 'slope' | 'quote' | 'minimal';
}

const WaveVariant = () => (
  <svg
    className="absolute bottom-0 left-0 w-full h-16 text-white"
    viewBox="0 0 1440 54"
    preserveAspectRatio="none"
    fill="currentColor"
  >
    <path d="M0 27L48 24.7C96 22.3 192 17.7 288 16C384 14.3 480 15.7 576 19.2C672 22.7 768 28.3 864 30.8C960 33.3 1056 32.7 1152 29.2C1248 25.7 1344 19.3 1392 16.2L1440 13V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V27Z" />
  </svg>
);

const SlopeVariant = () => (
  <svg
    className="absolute bottom-0 left-0 w-full h-16 text-white"
    viewBox="0 0 1440 54"
    preserveAspectRatio="none"
    fill="currentColor"
  >
    <path d="M0 54L1440 0V54H0Z" />
  </svg>
);

const QuoteBlock = ({ quote, author }: { quote?: string; author?: string }) => (
  <div className="w-full text-center">
    {quote && (
      <blockquote className="text-2xl italic font-medium">
        "{quote}"
        {author && (
          <footer className="mt-2 text-sm font-normal">
            — <cite>{author}</cite>
          </footer>
        )}
      </blockquote>
    )}
  </div>
);

export function TransitionBlock({ 
  quote, 
  author, 
  theme = 'light',
  variant = 'minimal'
}: TransitionBlockProps) {
  const baseClasses = `
    relative 
    w-full 
    px-4 
    py-16 
    md:py-24 
    flex
    items-center
    max-w-[1200px]
    mx-auto
    ${theme === 'light' 
      ? 'text-gray-800' 
      : 'text-gray-50'}
  `;

  const renderVariant = () => {
    switch (variant) {
      case 'wave':
        return <WaveVariant />;
      case 'slope':
        return <SlopeVariant />;
      case 'quote':
        return <QuoteBlock quote={quote} author={author} />;
      case 'minimal':
      default:
        return (
          <div className="w-24 h-1 mx-auto bg-blue-600 rounded-full" />
        );
    }
  };

  return (
    <div className="w-full bg-white">
      <div className={baseClasses}>
        {renderVariant()}
      </div>
    </div>
  );
}

export default TransitionBlock;
