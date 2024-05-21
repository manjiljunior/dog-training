"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { GlobalContext } from "@/context/global";

const MENUS = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "About us",
    to: "/about-us",
  },
  {
    name: "Contact us",
    to: "/contact-us",
  },
];

const MobileMenu = () => {
  const { menu, setMenu } = useContext(GlobalContext);

  return (
    <div
      className={`z-[1000] fixed top-[6rem] left-0 w-[100vw] h-[calc(100vh-6rem)] overflow-y-auto border-t transition-all duration-700 origin-center scale-0 opacity-0 border-black/10 bg-white ${
        menu && "opacity-100 scale-100"
      }`}
    >
      <ul className="flex flex-col items-center pt-[3rem] text-[1.05rem]">
        {MENUS.map((item, i) => (
          <li
            onClick={() => {
              setMenu(false);
            }}
            key={i}
            className={`last:mb-0 mb-[2rem] font-readex_pro uppercase relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[4px] before:bg-black before:transition-all before:duration-300 hover:before:w-full cursor-pointer`}
          >
            <Link href={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
