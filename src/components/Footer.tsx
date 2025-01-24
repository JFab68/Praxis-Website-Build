import 'react';
import { Mail, Facebook, Linkedin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
    { name: 'Get Involved', href: '/get-involved' },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Column 1 - About & Address */}
          <div className="space-y-4 text-center mt-8">
            <h3 className="text-white font-semibold mb-4 h-[48px] flex items-center justify-center">About Us</h3>
            <div className="flex justify-center items-center">
              <Link to="/" className="block">
                <img 
                  src={praxisLogo}
                  className="h-12 w-auto brightness-0 invert"
                  alt="Praxis Initiative Logo"
                />
              </Link>
            </div>
            <p className="text-sm">
              Transforming lives through prison oversight, legal system change, and comprehensive support programs. We believe in evidence-based solutions and community-driven change.
            </p>
          </div>

          {/* Column 2 - Newsletter */}
          <div className="text-center mt-8">
            <h3 className="text-white font-semibold mb-4 h-[48px] flex items-center justify-center">Stay Updated</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[70%] px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal"
              />
              <button
                type="submit"
                className="w-[215px] px-4 py-2 bg-navy text-white rounded-full shadow-[0_4px_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_rgba(0,0,0,0.2)] transition-all duration-200 transform hover:-translate-y-0.5 h-12 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 3 - Navigation */}
          <div className="mt-8">
            <h3 className="text-white font-semibold mb-6 text-center h-[48px] flex items-center justify-center">Navigation</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 justify-items-center">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link to={item.href} className="hover:text-teal text-sm">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 - Social & Donate */}
          <div className="space-y-8 text-center mt-8">
            <div className="flex flex-col items-center space-y-6">
              <h3 className="text-white font-semibold h-[48px] flex items-center justify-center">Connect With Us</h3>
              <div className="flex space-x-5">
                <a href="https://www.facebook.com/profile.php?id=61570241575216" className="text-gray-300 hover:text-teal" aria-label="Facebook"><Facebook className="h-7 w-7" /></a>
                <a href="https://x.com/praxisinaz" className="text-gray-300 hover:text-teal" aria-label="Twitter"><FontAwesomeIcon icon={faXTwitter} className="h-7 w-7" /></a>
                <a href="https://www.linkedin.com/company/praxis-initiative-az" className="text-gray-300 hover:text-teal" aria-label="LinkedIn"><Linkedin className="h-7 w-7" /></a>
                <a href="https://instagram.com/praxis_in_az" className="text-gray-300 hover:text-teal" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} className="h-7 w-7" /></a>
              </div>
              <Link
                to="/donate"
                className="w-[215px] px-4 py-2 bg-maroon text-white text-center rounded-full shadow-[0_4px_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_rgba(0,0,0,0.2)] transition-all duration-200 font-semibold transform hover:-translate-y-0.5 h-12"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Column 5 - Contact Us */}
          <div className="text-center mt-8">
            <h3 className="text-white font-semibold mb-4 h-[48px] flex items-center justify-center">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">Mailing Address</p>
                <p className="text-sm">
                  Praxis Initiative<br/>
                  4022 E. Greenway Rd.<br/>
                  Ste. 11 PMB 1046<br/>
                  Phoenix, AZ 85032
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm">Info@PraxisInitiative.Org</p>
              </div>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm">
                  (480) 808-1800 | (888) 810-4080
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">© {currentYear} Praxis Initiative. All rights reserved.</p>
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
