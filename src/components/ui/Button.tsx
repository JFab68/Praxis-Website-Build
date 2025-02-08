import React from 'react';
import { Link } from 'react-router-dom';
import  ButtonVariant  from './Button.types'; // Import ButtonVariant type

interface ButtonProps {
  variant?: ButtonVariant; // Use ButtonVariant type here
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  variant = 'primary', // Default variant to 'primary'
  size = 'md',
  href,
  onClick,
  children,
  className = '',
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md transition-colors font-semibold';

  const variants: { [key in ButtonVariant]: string } = {
    // Define variants with ButtonVariant type
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    cta: 'btn-cta',
    'learn-more': 'btn-learn-more',
    newsletter: 'bg-purple-500 text-white', // Example, adjust as needed or remove
    volunteer: 'bg-orange-500 text-white', // Example, adjust as needed or remove
    donate: 'btn-cta', // Example, using btn-cta for donate
  };

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
