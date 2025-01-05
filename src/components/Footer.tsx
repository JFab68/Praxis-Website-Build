import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import praxisLogo from '../assets/images/Praxis_Logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Partners', href: '/partners' },
    { name: 'Action Center', href: '/action' },
    { name: 'Resources', href: '/resources' },
    { name: 'Events', href: '/events' },
    { name: 'Get Involved', href: '/get-involved' },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 - About & Address */}
          <div className="space-y-8">
            <Link to="/" className="block">
              <img 
                src={praxisLogo}
                className="h-12 w-auto brightness-0 invert"
                alt="Praxis Initiative Logo"
              />
            </Link>
            <p className="text-sm">
              Transforming lives through prison oversight, legal system change, and comprehensive support programs. We believe in evidence-based solutions and community-driven change.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:Info@PraxisInitiative.Org" className="text-sm hover:text-teal">Info@PraxisInitiative.Org</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+16027777503" className="text-sm hover:text-teal">(602) 777-7503</a>
              </div>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="ml-8">
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-teal text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div className="ml-8">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-navy text-white rounded-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 4 - Social & Donate */}
          <div className="space-y-8 ml-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-teal"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-gray-300 hover:text-teal"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-gray-300 hover:text-teal"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-gray-300 hover:text-teal"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
            <Link
              to="/donate"
              className="block w-full px-6 py-3 bg-maroon text-white text-center rounded-md shadow-md hover:shadow-lg transition-all duration-200 font-semibold transform hover:-translate-y-0.5"
            >
              Donate
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">© {currentYear}-{currentYear + 1} Praxis Initiative. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <Link to="/privacy" className="text-sm hover:text-teal">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-teal">Terms of Service</Link>
              <Link to="/sitemap" className="text-sm hover:text-teal">Sitemap</Link>
              <Link to="/accessibility" className="text-sm hover:text-teal">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;