"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { GlobalContext } from "@/context/global";

const FEATURES = [
  {
    name: "24/7 support",
  },
  {
    name: "Personalized care",
  },
  {
    name: "Pet taxi facility",
  },
  {
    name: "Quick delivery",
  },
  {
    name: "Money back garantuee",
  },
  {
    name: "Lowest price",
  },
];

interface Props {
  data: any;
}

const SectionAbout = ({ data }: Props) => {
  const { globalData } = useContext(GlobalContext);

  return (
    <div className="mobile414:gap-y-[2.5rem] sm:w-[80%] sm:gap-0 pb-section w-[70%] mx-auto grid grid-cols-12 gap-[4rem] items-center">
      <div className="sm:col-span-12 col-span-6">
        <Image
          className="mx-auto w-full h-auto"
          height={600}
          width={600}
          src={data?.image?.original}
          alt="About Image"
        />
      </div>

      <div className="mobile414:gap-[1.5rem] col-span-6 flex-col sm:col-span-12 flex gap-[2rem]">
        <h2 className="mobile414:text-[2rem] sm:text-[2.75rem] relative capitalize text-[3.5rem] leading-[1.3] text-black/90 font-semibold">
          <Image
            className="mobile414:w-[2rem] mobile414:h-auto mobile414:left-[-1.75rem] absolute top-[-1rem] left-[-2.5rem]"
            height={42}
            width={42}
            src={"/icons/title-decoration.svg"}
            alt="title decoration"
          />
          {data?.title}
        </h2>

        <p className="mobile414:text-[.95rem] text-[1.2rem] font-medium text-text-dark">
          {data?.text}
        </p>

        <div className="mobile414:gap-y-[1.5rem] flex flex-wrap items-center gap-y-[2.25rem]">
          {data?.features.map((item, i) => (
            <div
              key={i}
              className="mobile414:gap-2 w-[50%] flex items-center gap-3"
            >
              <Image
                className="mobile414:w-[1.5rem] mobile414:h-auto"
                height={30}
                width={30}
                src="/icons/paw.svg"
                alt="Dow Paw"
              />{" "}
              <span className="mobile414:text-[.95rem] sm:text-[1.2rem] font-readex_pro text-[1.35rem] drop-shadow-sm font-bold capitalize leading-[1.35]">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mobile414:text-[.9rem] sm:flex-col sm:items-start sm:gap-y-[1.5rem] flex items-center flex-nowrap pt-[1rem] gap-4">
          <div className="mobile414:w-full w-[50%] flex gap-3 justify-start items-center">
            <div className="h-[2.75rem] w-[2.75rem] shrink-0 rounded-full flex items-center justify-center bg-black/90">
              <TfiEmail size={22} color="white" />
            </div>

            <div className="font-readex_pro flex flex-col gap-1">
              <span className="font-[400] leading-[1] text-[1rem] capitalize text-text-dark">
                Email us anytime
              </span>
              <span className="font-bold">{globalData?.global?.email}</span>
            </div>
          </div>

          <div className="mobile414:w-full w-[50%] flex gap-3 justify-start items-center">
            <div className="h-[2.75rem] w-[2.75rem] shrink-0 rounded-full flex items-center justify-center bg-primary">
              <FaPhoneAlt size={22} color="white" />
            </div>

            <div className="font-readex_pro flex flex-col gap-1">
              <span className="font-[400] leading-[1] text-[1rem] capitalize text-text-dark">
                Call as anytime
              </span>
              <span className="font-bold">
                {globalData?.global?.phones?.[0]?.name}
              </span>
            </div>
          </div>
        </div>

        <div className="inline-block mt-[1rem]">
          <Button className="mobile414:text-[.8rem]" variant={"default"}>
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
