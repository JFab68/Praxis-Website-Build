import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
  headerProps?: {
    logoUrl: string;
    navItems: Array<{ label: string; href: string }>;
  };
}

export default function Layout({ children, fullWidth = false, headerProps }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        className="full-width-section"
        logoUrl={headerProps?.logoUrl || '/images/Praxis_Logo_Blue_Banner.svg'}
        navItems={headerProps?.navItems || [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Programs', href: '/programs' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' }
        ]}
      />
      
      <main className={`flex-1 ${fullWidth ? '' : 'py-8'}`}>
        {fullWidth ? (
          children
        ) : (
          <div className="content-box">
            {children}
          </div>
        )}
      </main>

      <Footer className="full-width-section" />
    </div>
  );
}
