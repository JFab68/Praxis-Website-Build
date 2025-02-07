import React from 'react';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <div className="content-layout-wrapper">
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default ContentLayout;
