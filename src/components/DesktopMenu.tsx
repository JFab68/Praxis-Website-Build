import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Facebook, Linkedin } from 'lucide-react';
import NavLink from './ui/NavLink.tsx';

interface MenuItem {
  name: string;
  href?: string;
}

interface DesktopMenuProps {
  navigationLeft: MenuItem[];
  navigationRight: MenuItem[];
  isScrolled: boolean;
  praxisLogo: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navigationLeft, navigationRight, isScrolled, praxisLogo }) => {
  return (
    <div className="items-center justify-center hidden md:flex">
      {/* Social Media and Donate */}
      <div className={`flex space-x-4 text-navy ${isScrolled ? 'drop-shadow-sm' : ''}`}>
        <a href="https://www.facebook.com/profile.php?id=61570241575216" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a href="https://x.com/praxisinaz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a href="https://www.linkedin.com/company/praxis-initiative-az" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a href="https://instagram.com/praxis_in_az" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 hover:text-blue-400" />
        </a>
      </div>

      {/* Left Navigation Links */}
      <div className={`flex items-center space-x-8 flex-grow justify-end ${isScrolled ? 'drop-shadow-sm' : ''}`}>
        {navigationLeft.map((item) => (
          <NavLink key={item.name} to={item.href as string}>
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Center Logo */}
      <div className="flex justify-center mx-10">
        <NavLink to="/">
          <img src={praxisLogo} alt="Praxis Initiative Logo" className="w-auto h-10" />
        </NavLink>
      </div>

      {/* Right Navigation Links */}
      <div className={`flex items-center space-x-8 flex-grow ${isScrolled ? 'drop-shadow-sm' : ''}`}>
        {navigationRight.map((item) => (
          <NavLink key={item.name} to={item.href as string}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenu;
