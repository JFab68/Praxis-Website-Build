import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'white' | 'beige';
  className?: string;
}

const Card = ({ children, variant = 'white', className = '' }: CardProps) => {
  const baseStyles = "rounded-lg shadow-md p-6 md:p-8";
  const variants = {
    white: "bg-white",
    beige: "bg-beige"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;