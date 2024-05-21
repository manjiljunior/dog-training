"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface GlobalContextProps {
  menu: boolean;
  setMenu: (val: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menu]);

  return (
    <GlobalContext.Provider
      value={{
        menu,
        setMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
