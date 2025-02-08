import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

interface MenuContextProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const contextValue: MenuContextProps = {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
