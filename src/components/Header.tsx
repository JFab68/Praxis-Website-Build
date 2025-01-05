import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Search, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import praxisLogo from '../assets/images/Praxis_Logo_Transparent.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleSubmenu = (menu: string) => {
    setExpandedSubmenu(expandedSubmenu === menu ? null : menu);
  };

  // Function to get the current date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const navigationLeft = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Partners', href: '/partners' },
  ];

  const navigationRight = [
    { name: 'Action Center', href: '/action' },
    { name: 'Resources', href: '/resources' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const mobileMenuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Programs',
      submenu: [
        { name: 'Prison Oversight', href: '/programs/prison-oversight' },
        { name: 'Legal System Reform', href: '/programs/legal-system' },
        { name: 'Substance Use', href: '/programs/substance-use' },
        { name: 'Doula Program', href: '/programs/doula-program' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources'
    },
    { name: 'Events', href: '/events' },
    { name: 'Action Center', href: '/action' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Involved', href: '/get-involved' }
  ];

  return (
    <header className="fixed w-full z-50">
      <div className="w-full bg-white py-3 px-4">
        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden flex justify-between items-center">
          <Link to="/">
            <img src={praxisLogo} alt="Praxis Initiative Logo" className="h-8 w-auto brightness-0" />
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#000080] p-2"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-lg`}>
          <nav className="py-4">
            {mobileMenuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex items-center justify-between px-4 py-2 text-[#000080]"
                      aria-expanded={expandedSubmenu === item.name}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transform transition-transform ${
                        expandedSubmenu === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <div className={`${expandedSubmenu === item.name ? 'block' : 'hidden'} pl-4 bg-gray-50`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={`block px-4 py-2 ${isActive(subItem.href) ? 'text-teal font-semibold' : 'text-[#000080]'}`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-4 py-2 ${isActive(item.href) ? 'text-teal font-semibold' : 'text-[#000080]'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between">
        {/* Social Media and Donate */}
        <div className="flex space-x-4 text-[#000080]">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-5 w-5 hover:text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5 hover:text-pink-500" />
          </a>
        </div>

        {/* Left Navigation Links */}
        <div className="flex items-center space-x-6">
          {navigationLeft.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm hover:text-teal font-medium ${
                isActive(item.href) ? 'text-teal font-semibold' : 'text-[#000080]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex justify-center">
          <Link to="/">
          <img
            src={praxisLogo}
            alt="Praxis Initiative Logo"
            className="h-10 w-auto brightness-0"
          />
          </Link>
        </div>

        {/* Right Navigation Links */}
        <div className="flex items-center space-x-6">
          {navigationRight.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm hover:text-teal font-medium ${
                isActive(item.href) ? 'text-teal font-semibold' : 'text-[#000080]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          to="/donate"
          className="px-4 py-1 bg-maroon text-white rounded-full hover:bg-maroon/90 transition-colors text-sm font-medium"
        >
          Donate
        </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;