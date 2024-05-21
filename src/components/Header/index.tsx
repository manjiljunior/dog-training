"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import NavSiteDrawer from "../NavSiteDrawer";
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

const Header = () => {
  const { setMenu, menu } = useContext(GlobalContext);

  return (
    <div className="mobile414:px-5 z-20 absolute top-0 left-0 w-full h-header px-10 flex items-center justify-between">
      <Link
        href={"/"}
        className="cursor-pointer flex flex-col items-center gap-1"
      >
        <Image
          className="mobile414:w-[2.5rem] mobile414:h-auto"
          height={50}
          width={50}
          src="/icons/logo.svg"
          alt="Dog Training"
        />
        <span className="mobile414:text-[.9rem] font-readex_pro capitalize font-medium text-[1rem] leading-[1]">
          DogG
        </span>
      </Link>

      <ul className="sm:hidden flex items-center gap-8">
        {MENUS.map((item, i) => (
          <li
            className="uppercase font-semibold text-sm tracking-[2.25px] relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[4px] before:bg-black before:transition-all before:duration-300 hover:before:w-full cursor-pointer"
            key={i}
          >
            <Link href={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="flex items-center gap-[1.5rem]">
        <div
          onClick={() => setMenu(!menu)}
          className="mobile414:w-[2rem] cursor-pointer hidden sm:flex flex-col items-center w-[2.25rem]"
        >
          <div
            className={`dark:bg-white w-full h-[2px] my-[3px] bg-black transition-all duration-300 ${
              menu && "rotate-[45deg]"
            }`}
          ></div>
          <div
            className={`dark:bg-white w-full h-[2px] my-[3px] bg-black transition-all duration-300 ${
              menu && "rotate-[-45deg] mt-[-5px]"
            }`}
          ></div>
        </div>

        <NavSiteDrawer />
      </div>
    </div>
  );
};

export default Header;
