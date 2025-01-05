import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  children,
  className = ''
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md transition-colors font-semibold";
  
  const variants = {
    primary: "bg-navy text-white hover:bg-teal",
    secondary: "border-2 border-maroon text-maroon hover:bg-beige"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-small",
    md: "px-6 py-3 text-body",
    lg: "px-8 py-4 text-lg"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;