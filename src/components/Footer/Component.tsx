"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "@/context/global";

const MENUS1 = [
  {
    name: "Help",
  },
  {
    name: "Search",
  },
  {
    name: "Terms of service",
  },
  {
    name: "Information",
  },
  {
    name: "Privacy Policy",
  },
];

const MENUS2 = [
  {
    name: "Support",
  },
  {
    name: "Contact us",
  },
  {
    name: "Refunds & Returns",
  },
  {
    name: "Deliveries",
  },
];

const MENUS3 = [
  {
    name: "Pet shop",
  },
  {
    name: "About us",
  },
  {
    name: "Blog",
  },
  {
    name: "Gift cards",
  },
];

const MENUS4 = [
  {
    name: "Information",
  },
  {
    name: "Search Terms",
  },
  {
    name: "Advanced search",
  },
  {
    name: "Help & Faqs",
  },
];

interface Props {
  data: {
    copyright_text: string;
    logo: any;
  };
}

const Component = ({ data }: Props) => {
  const { globalData } = useContext(GlobalContext);

  return (
    <div className="Footer relative bg-transparent text-white">
      <div className="border-b-2 border-secondary">
        <div className="sm:w-[90%] w-[80%] mx-auto grid grid-cols-12 gap-5 pb-[5rem]">
          <div className="sm:col-span-12 sm:flex sm:items-center sm:justify-center col-span-4">
            <div className="Footer__logo relative">
              <Image
                className="mobile414:h-[6rem] h-[8.5rem] w-auto"
                height={200}
                width={200}
                src={data?.logo?.original}
                alt={globalData?.global?.website_name}
              />
            </div>
          </div>

          <div className="sm:col-span-12 col-span-8">
            <div className="flex gap-4 items-center">
              <input
                className="mobile414:placeholder:text-[.9rem] mobile414:text-[.9rem] mobile414:py-[1rem] mobile414:px-[.75rem] w-full bg-transparent px-[1.25rem] placeholder:capitalize placeholder:text-white/50 placeholder:text-[1.1rem] focus:border-b-secondary font-readex_pro py-[1.5rem] border-b font-[400] outline-none border-white"
                type="text"
                placeholder="your e-mail here"
              />

              <button type="submit">
                <Image
                  className="mobile414:w-[3.5rem] mobile414:h-auto"
                  height={85}
                  width={85}
                  src={"/icons/send.svg"}
                  alt="Subscribe"
                />
              </button>
            </div>
            <p className="mobile414:text-[.8rem] pt-3 text-white/90 text-[1rem]">
              Join our list and get 15% off your first purchase!
            </p>
          </div>
        </div>

        <div className="sm:w-[90%] w-[80%] mx-auto grid grid-cols-10 gap-6 pb-[2.5rem]">
          <div className="sm:col-span-5 col-span-2">
            <p className="text-white/90 text-[1.15rem] leading-[1.8] mb-[2.5rem]">
              {globalData?.global?.address}
            </p>

            <p className="text-white/90 text-[1.15rem] leading-[1.8] cursor-pointer transition-all hover:text-secondary">
              {globalData?.global?.phones?.[0]?.name}
            </p>
            <p className="text-white/90 text-[1.15rem] leading-[1.8] cursor-pointer transition-all hover:text-secondary">
              {globalData?.global?.email}
            </p>
          </div>

          <div className="sm:col-span-5 col-span-2 sm:pl-0 pl-[2rem]">
            <ul className="flex flex-col gap-2">
              {MENUS1.map((item, i) => (
                <li
                  className="relative text-[1.1rem] capitalize cursor-pointer font-medium transition-all hover:pl-[1rem] hover:text-secondary before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:w-0 hover:before:w-[.65rem] before:h-[3px] before:bg-secondary before:transition-all before:rounded-full"
                  key={i}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-5 col-span-2">
            <ul className="flex flex-col gap-2">
              {MENUS2.map((item, i) => (
                <li
                  className="relative text-[1.1rem] capitalize cursor-pointer font-medium transition-all hover:pl-[1rem] hover:text-secondary before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:w-0 hover:before:w-[.65rem] before:h-[3px] before:bg-secondary before:transition-all before:rounded-full"
                  key={i}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-5 col-span-2">
            <ul className="flex flex-col gap-2">
              {MENUS3.map((item, i) => (
                <li
                  className="relative text-[1.1rem] capitalize cursor-pointer font-medium transition-all hover:pl-[1rem] hover:text-secondary before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:w-0 hover:before:w-[.65rem] before:h-[3px] before:bg-secondary before:transition-all before:rounded-full"
                  key={i}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-5 col-span-2">
            <ul className="flex flex-col gap-2">
              {MENUS4.map((item, i) => (
                <li
                  className="relative text-[1.1rem] capitalize cursor-pointer font-medium transition-all hover:pl-[1rem] hover:text-secondary before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:w-0 hover:before:w-[.65rem] before:h-[3px] before:bg-secondary before:transition-all before:rounded-full"
                  key={i}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
