"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useMediaQuery } from "react-responsive";

interface Props {
  data: {
    title: string;
    cta_btn: {
      name: string;
      url: string;
    };
    stats: [
      {
        name: string;
        text: string;
        icon: any;
      }
    ];
  };
}

const SectionStats = ({ data }: Props) => {
  const isMobile480 = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className="mobile414:px-[1rem] SectionStats text-black relative w-[80%] mx-auto mb-section rounded-[2rem] overflow-hidden px-[2.5rem] py-[4rem]">
      <Image
        height={400}
        width={600}
        src={"/images/stats-overlay.png"}
        alt="Overlay"
        className="absolute top-0 left-0 z-[2] object-cover bg-center h-full w-full"
      />

      <div className="sm:gap-y-[3.5rem] relative z-10 grid grid-cols-12 items-center">
        <div className="sm:col-span-12 col-span-8 flex flex-wrap gap-y-[3.5rem]">
          {data?.stats?.map((item, i) => (
            <div
              key={i}
              className="mobile414:gap-2 w-[50%] flex items-center gap-5"
            >
              <Image
                className="mobile414:w-[2.5rem] mobile414:h-auto"
                height={isMobile480 ? 40 : 60}
                width={isMobile480 ? 40 : 60}
                src={item?.icon?.original}
                alt={item.name}
              />

              <div className="flex flex-col gap-2 leading-[1]">
                <h3 className="mobile414:text-[1.5rem] sm:text-[2rem] uppercase font-bold text-[2.5rem]">
                  {item.name}
                </h3>
                <p className="mobile414:text-[.8rem] sm:text-[1.25rem] capitalize font-semibold text-[1.75rem]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:col-span-12 sm:items-center sm:flex sm:flex-col col-span-4 SectionStats__right relative">
          <h2 className="mobile414:text-[1.75rem] sm:text-center font-bold text-[2.35rem] leading-[1.35] mb-[1.5rem]">
            {data.title}
          </h2>

          <Button
            href={data.cta_btn.url || ""}
            className="mobile414:text-[.7rem]"
            variant={"default"}
          >
            {data.cta_btn.name}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionStats;
