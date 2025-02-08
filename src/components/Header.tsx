import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import praxisLogo from '../assets/images/Praxis_Logo_Blue_Banner.svg';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { MenuContext } from '../contexts/MenuContext';

interface MenuItem {
  name: string;
  href?: string;
  submenu?: MenuItem[];
}

interface MenuItemStrict {
  name: string;
  href: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MenuContext)!;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLeft: MenuItemStrict[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
  ];

  const navigationRight: MenuItemStrict[] = [
    { name: 'Partners', href: '/partners' },
    { name: 'Action Center', href: '/action' },
    { name: 'Contact', href: '/contact' },
  ];

  const mobileMenuItems: MenuItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Programs',
      submenu: [
        { name: 'Prison Oversight', href: '/programs/prison-oversight' },
        { name: 'Legal System Reform', href: '/programs/legal-system' },
        { name: 'Substance Use', href: '/programs/substance-use' },
        { name: 'Doula Program', href: '/programs/doula-program' },
      ],
    },
    { name: 'Action Center', href: '/action' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Involved', href: '/get-involved' },
  ];

  return (
    <header className="fixed z-50 w-full">
      <div
        className={`w-full px-4 py-3 transition-all duration-300 ${
          isScrolled ? 'bg-white/40 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="flex items-center justify-between md:hidden">
          <Link to="/">
            <img src={praxisLogo} alt="Praxis Initiative Logo" className="w-auto h-8" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-navy"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          mobileMenuItems={mobileMenuItems}
        />
        <DesktopMenu
          navigationLeft={navigationLeft}
          navigationRight={navigationRight}
          isScrolled={isScrolled}
          praxisLogo={praxisLogo}
        />
      </div>
    </header>
  );
};

export default Header;
