import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant?: 'newsletter' | 'volunteer' | 'donate';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'newsletter', 
  size = 'md', 
  href, 
  onClick, 
  children,
  className = ''
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all font-semibold w-[140px] h-[40px] shadow-[0_4px_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_rgba(0,0,0,0.2)] hover:translate-y-[2px]";
  
  const variants = {
    newsletter: "bg-purple text-white",
    volunteer: "bg-copper text-white", 
    donate: "bg-maroon text-white"
  };
  
  const sizes = {
    sm: "text-small",
    md: "text-body",
    lg: "text-lg"
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
