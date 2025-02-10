import 'react';
import { Mail, Facebook, Linkedin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from './ui';
import praxisLogo from '../assets/images/Praxis_Logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Partners', href: '/partners' },
    { name: 'Action Center', href: '/action' },
    { name: 'Get Involved', href: '/get-involved' },
  ];

  return (
    <footer className="mt-auto text-gray-300 bg-black">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-4 md:items-start">
          {/* Column 1 - About & Address */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <Link to="/" className="block">
              <img 
                src={praxisLogo}
                className="w-auto h-12 brightness-0 invert"
                alt="Praxis Initiative Logo"
              />
            </Link>
            <p className="text-sm text-center md:text-left">
              Transforming lives through prison oversight, legal system change, and comprehensive support programs. We believe in evidence-based solutions and community-driven change.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:Info@PraxisInitiative.Org" className="text-sm hover:text-teal">Info@PraxisInitiative.Org</a>
              </div>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="flex flex-col items-center">
            <h3 className="mb-6 font-semibold text-white">Navigation</h3>
            <div className="grid w-full grid-cols-2 gap-x-8 gap-y-4 justify-items-center">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link to={item.href} className="text-sm hover:text-teal">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Newsletter */}
          <div className="flex flex-col items-center">
            <h3 className="mb-6 font-semibold text-white">Stay Updated</h3>
            <form className="flex flex-col items-center w-full space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[200px] px-4 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal"
              />
              <Button 
                variant="newsletter" 
                size="md"
                className="w-[200px]"
                onClick={() => {
                  // Handle form submission
                  console.log('Newsletter subscription submitted');
                }}
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Column 4 - Social & Donate */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center w-full">
              <h3 className="mb-6 font-semibold text-white">Connect With Us</h3>
              <div className="flex justify-center space-x-6">
                <a href="https://www.facebook.com/profile.php?id=61570241575216" className="text-gray-300 hover:text-teal" aria-label="Facebook"><Facebook className="h-7 w-7" /></a>
                <a href="https://x.com/praxisinaz" className="text-gray-300 hover:text-teal" aria-label="Twitter"><FontAwesomeIcon icon={faXTwitter} className="h-7 w-7" /></a>
                <a href="https://www.linkedin.com/company/praxis-initiative-az" className="text-gray-300 hover:text-teal" aria-label="LinkedIn"><Linkedin className="h-7 w-7" /></a>
                <a href="https://instagram.com/praxis_in_az" className="text-gray-300 hover:text-teal" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} className="h-7 w-7" /></a>
              </div>
            </div>
            <Button href="/donate" variant="donate" size="md" className="w-[200px]">
              Donate
            </Button>
          </div>
        </div>

        <div className="pt-12 mt-16 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-center md:text-left">© {currentYear} Praxis Initiative. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-end md:gap-6">
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
