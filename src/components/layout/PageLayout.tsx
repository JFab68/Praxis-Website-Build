import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      {children}
    </main>
  </div>
);
