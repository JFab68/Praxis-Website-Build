import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  Facebook,
  Linkedin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import praxisLogo from '../assets/images/Praxis_Logo_Blue_Banner.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleSubmenu = (menu: string) => {
    setExpandedSubmenu(expandedSubmenu === menu ? null : menu);
  };


  const navigationLeft = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
  ];

  const navigationRight = [
    { name: 'Partners', href: '/partners' },
    { name: 'Action Center', href: '/action' },
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
    { name: 'Action Center', href: '/action' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Involved', href: '/get-involved' }
  ];

  return (
    <header className="fixed z-50 w-full mb-12" role="banner">
      <div className={`w-full py-3 px-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/40 backdrop-blur-md shadow-md' 
          : 'bg-white'
      }`}>
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-navy"
      >
        Skip to main content
      </a>
        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="flex items-center justify-between md:hidden">
          <Link to="/">
            <img src={praxisLogo} alt="Praxis Initiative Logo" className="w-auto h-8" />
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
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg`}>
          <nav className="py-4" aria-label="Mobile navigation">
            {mobileMenuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-[#000080] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                      aria-expanded={expandedSubmenu === item.name}
                      aria-controls={`${item.name}-submenu`}
                      aria-label={`${item.name} menu`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transform transition-transform ${
                        expandedSubmenu === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <div 
                      id={`${item.name}-submenu`}
                      className={`${expandedSubmenu === item.name ? 'block' : 'hidden'} pl-4 bg-gray-50`}
                      role="region"
                      aria-labelledby={`${item.name}-button`}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={`block px-4 py-3 ${isActive(subItem.href) ? 'text-teal font-semibold' : 'text-[#000080]'} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2`}
                          aria-current={isActive(subItem.href) ? "page" : undefined}
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
        <div className="items-center justify-center hidden md:flex">
        {/* Social Media and Donate */}
        <div className={`flex space-x-4 text-[#000080] ${
            isScrolled ? 'drop-shadow-sm' : ''
          }`}>
          <a 
            href="https://www.facebook.com/profile.php?id=61570241575216" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
          >
            <Facebook className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a 
            href="https://x.com/praxisinaz" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our X (formerly Twitter) page"
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
          >
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a 
            href="https://www.linkedin.com/company/praxis-initiative-az" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn page"
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
          >
            <Linkedin className="w-6 h-6 hover:text-blue-400" />
          </a>
          <a 
            href="https://instagram.com/praxis_in_az" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 hover:text-blue-400" />
          </a>
        </div>

        {/* Left Navigation Links */}
        <nav className={`flex items-center space-x-8 flex-grow justify-end ${
            isScrolled ? 'drop-shadow-sm' : ''
          }`}>
          {navigationLeft.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base hover:text-teal font-medium ${
                isActive(item.href) ? 'text-teal font-semibold' : 'text-[#000080]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="flex justify-center mx-10">
          <Link to="/">
          <img
            src={praxisLogo}
            alt="Praxis Initiative Logo"
            className="w-auto h-10"
          />
          </Link>
        </div>

        {/* Right Navigation Links */}
        <nav 
          className={`flex items-center space-x-8 flex-grow ${
            isScrolled ? 'drop-shadow-sm' : ''
          }`}
          aria-label="Main navigation"
        >
          {navigationRight.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base hover:text-teal font-medium ${
                isActive(item.href) ? 'text-teal font-semibold' : 'text-[#000080]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          to="/donate"
          className={`px-4 py-1 bg-maroon text-white rounded-full hover:bg-maroon/90 transition-colors text-base font-medium ${
            isScrolled ? 'shadow-sm' : ''
          }`}
        >
          Donate
        </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
