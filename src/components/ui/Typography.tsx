import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className = '' }: TextProps) => (
  <h1 className={`text-h1 font-serif font-bold ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = '' }: TextProps) => (
  <h2 className={`text-h2 font-serif font-bold ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = '' }: TextProps) => (
  <h3 className={`text-h3 font-serif font-bold ${className}`}>
    {children}
  </h3>
);

export const Body = ({ children, className = '' }: TextProps) => (
  <p className={`text-body text-text-secondary ${className}`}>
    {children}
  </p>
);

export const Small = ({ children, className = '' }: TextProps) => (
  <p className={`text-small text-text-light ${className}`}>
    {children}
  </p>
);