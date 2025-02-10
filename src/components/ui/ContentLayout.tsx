import React from 'react';
import SectionDivider from './SectionDivider';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="relative w-full min-h-screen">
      <div 
        className="max-w-[1200px] w-full mx-auto my-12 rounded-lg shadow-lg" 
        style={{ 
          backgroundColor: '#f0f0f0',
          color: '#ffffff',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
        }}>
        <div className="relative z-10 p-8">
          {childrenArray.map((child, index) => (
            <React.Fragment key={index}>
              {child}
              {index < childrenArray.length - 1 && <SectionDivider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
