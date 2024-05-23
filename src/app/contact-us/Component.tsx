"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "@/context/global";

interface Props {
  data: {
    title: string;
    text: string;
  };
}

const Component = ({ data }: Props) => {
  const { globalData } = useContext(GlobalContext);

  return (
    <div className="sm:col-span-12 col-span-5">
      <h1 className="mobile414:text-[2.5rem] capitalize tracking-[.5px] text-text-dark text-[3.5rem] font-[700] leading-[1.35] mb-[2.5rem]">
        {data.title}
      </h1>

      <p className="mobile414:text-[.9rem] mobile414:leading-[1.75] font-readex_pro text-[1.1rem] leading-[1.75] mb-[2rem]">
        {data.text}
      </p>

      <div className="flex flex-col gap-[2.5rem]">
        <div className="">
          <div className="flex items-center gap-3 mb-[.5rem]">
            <Image
              className="mobile414:w-[1.25rem] mobile414:h-auto"
              height={25}
              width={25}
              src="/icons/location.svg"
              alt="Location Icon"
            />
            <h3 className="mobile414:text-[1rem] uppercase font-readex_pro font-semibold text-[1.25rem]">
              address
            </h3>
          </div>

          <p className="mobile414:text-[.9rem] ml-[1.5rem] text-[1.1rem] font-readex_pro">
            {globalData?.global?.address}
          </p>
        </div>

        <div className="">
          <div className="flex items-center gap-3 mb-[.5rem]">
            <Image
              className="mobile414:w-[1.25rem] mobile414:h-auto"
              height={25}
              width={25}
              src="/icons/phone.svg"
              alt="Location Icon"
            />
            <h3 className="mobile414:text-[1rem] uppercase font-readex_pro font-semibold text-[1.25rem]">
              contact
            </h3>
          </div>

          <ul className="mobile414:text-[.9rem] ml-[1.5rem] text-[1.1rem] font-readex_pro transition-all hover:text-primary cursor-pointer flex flex-col gap-1">
            {globalData?.global?.phones?.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
          </ul>
        </div>

        <div className="">
          <div className="flex items-center gap-3 mb-[.5rem]">
            <Image
              className="mobile414:w-[1.25rem] mobile414:h-auto"
              height={25}
              width={25}
              src="/icons/email.svg"
              alt="Location Icon"
            />
            <h3 className="mobile414:text-[1rem] uppercase font-readex_pro font-semibold text-[1.25rem]">
              email
            </h3>
          </div>

          <ul className="mobile414:text-[.9rem] ml-[1.5rem] text-[1.1rem] font-readex_pro transition-all hover:text-primary cursor-pointer flex flex-col gap-1">
            <li>{globalData?.global?.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Component;
