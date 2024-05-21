"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useMediaQuery } from "react-responsive";

const SectionStats = () => {
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
          <div className="mobile414:gap-2 w-[50%] flex items-center gap-5">
            <Image
              className="mobile414:w-[2.5rem] mobile414:h-auto"
              height={isMobile480 ? 40 : 60}
              width={isMobile480 ? 40 : 60}
              src="/icons/stats/happy-customer.svg"
              alt="Happy Customer"
            />

            <div className="flex flex-col gap-2 leading-[1]">
              <h3 className="mobile414:text-[1.5rem] sm:text-[2rem] uppercase font-bold text-[2.5rem]">
                20k
              </h3>
              <p className="mobile414:text-[.8rem] sm:text-[1.25rem] capitalize font-semibold text-[1.75rem]">
                Happy Customer
              </p>
            </div>
          </div>

          <div className="w-[50%] flex items-center gap-5">
            <Image
              className="mobile414:w-[2.5rem] mobile414:h-auto"
              height={isMobile480 ? 40 : 60}
              width={isMobile480 ? 40 : 60}
              src="/icons/stats/professionals.svg"
              alt="Happy Customer"
            />

            <div className="flex flex-col gap-2 leading-[1]">
              <h3 className="mobile414:text-[1.5rem] sm:text-[2rem] uppercase font-bold text-[2.5rem]">
                1k
              </h3>
              <p className="mobile414:text-[.8rem] sm:text-[1.25rem] capitalize font-semibold text-[1.75rem]">
                Professionals
              </p>
            </div>
          </div>

          <div className="w-[50%] flex items-center gap-5">
            <Image
              className="mobile414:w-[2.5rem] mobile414:h-auto"
              height={isMobile480 ? 40 : 60}
              width={isMobile480 ? 40 : 60}
              src="/icons/stats/heart.svg"
              alt="Happy Customer"
            />

            <div className="flex flex-col gap-2 leading-[1]">
              <h3 className="mobile414:text-[1.5rem] sm:text-[2rem] uppercase font-bold text-[2.5rem]">
                550
              </h3>
              <p className="mobile414:text-[.8rem] sm:text-[1.25rem] capitalize font-semibold text-[1.75rem]">
                Adopted pets
              </p>
            </div>
          </div>

          <div className="w-[50%] flex items-center gap-5">
            <Image
              className="mobile414:w-[2.5rem] mobile414:h-auto"
              height={isMobile480 ? 40 : 60}
              width={isMobile480 ? 40 : 60}
              src="/icons/stats/award.svg"
              alt="Happy Customer"
            />

            <div className="flex flex-col gap-2 leading-[1]">
              <h3 className="mobile414:text-[1.5rem] sm:text-[2rem] uppercase font-bold text-[2.5rem]">
                900+
              </h3>
              <p className="mobile414:text-[.8rem] sm:text-[1.25rem] capitalize font-semibold text-[1.75rem]">
                Awards
              </p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-12 sm:items-center sm:flex sm:flex-col col-span-4 SectionStats__right relative">
          <h2 className="mobile414:text-[1.75rem] sm:text-center font-bold text-[2.35rem] leading-[1.35] mb-[1.5rem]">
            Pet companion kept safe and trained well
          </h2>

          <Button className="mobile414:text-[.7rem]" variant={"default"}>
            view all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionStats;
