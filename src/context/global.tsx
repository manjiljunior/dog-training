"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import api from "@/lib/api";
import qs from "qs";
import { thumbnailReducer } from "@/lib/datalayer";

interface GlobalContextProps {
  menu: boolean;
  setMenu: (val: boolean) => void;
  globalData: any;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    (async () => {
      await fetchGlobalDataHandler();
    })();
  }, []);

  const fetchGlobalDataHandler = async () => {
    const query = qs.stringify(
      {
        populate: ["global", "global.phones", "global.logo", "global.socials"],
      },
      {
        encodeValuesOnly: true,
      }
    );

    const res = await api.get(`/global?${query}`);
    if (res.data) {
      const formattedObj = {
        id: res.data.data.id,
        global: {
          ...res.data.data.attributes.global,
          logo: thumbnailReducer(res.data.data.attributes.global.logo.data),
        },
      };
      setGlobalData(formattedObj);
    } else {
      setGlobalData(null);
    }
  };

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
        globalData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
