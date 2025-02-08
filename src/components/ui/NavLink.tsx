import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Add optional onClick prop
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const baseClasses = 'text-base hover:text-teal';
  const activeClasses = 'text-teal font-semibold';
  const inactiveClasses = 'text-navy font-medium';

  const combinedClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className || ''}`;

  return (
    <Link to={to} className={combinedClasses} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
