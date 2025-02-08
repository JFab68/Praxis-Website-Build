import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import NavLink from './ui/NavLink';

interface MenuItem {
  name: string;
  href?: string;
  submenu?: MenuItem[];
}

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  mobileMenuItems: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, mobileMenuItems }) => {
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);

  const toggleSubmenu = useCallback((menu: string) => {
    setExpandedSubmenu(expandedSubmenu === menu ? null : menu);
  }, [expandedSubmenu]);

  return (
    <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50`}>
      <nav className="py-4">
        {mobileMenuItems.map((item) => (
          <div key={item.name}>
            {item.submenu ? (
              <div>
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className="flex items-center justify-between w-full px-4 py-2 text-navy"
                  {...(expandedSubmenu === item.name ? { 'aria-expanded': 'true' } : {})}
                >
                  {item.name}
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${
                    expandedSubmenu === item.name ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`${expandedSubmenu === item.name ? 'block' : 'hidden'} pl-4 bg-gray-50`}>
                  {item.submenu.map((subItem) => (
                    <NavLink
                      key={subItem.href}
                      to={subItem.href!}
                      className="block px-4 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                to={item.href!}
                className="block px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
