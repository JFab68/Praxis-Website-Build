import React from 'react';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("/src/assets/images/Page_imges/ProgramsPage_imges/BLU_Gradient.jpeg")' }}>
      <div className="w-[1200px] py-[50px] bg-white mx-auto mt-[50px]">
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
