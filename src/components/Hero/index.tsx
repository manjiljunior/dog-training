"use client";
import Image from "next/image";
import React from "react";
import Header from "../Header";
import { usePathname } from "next/navigation";
import PageHeader from "../PageHeader";

const Hero = () => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="sm:pb-[7rem] Hero h-auto min-h-screen mb-[5rem] w-[5rem] pb-[12rem]">
      <Header />

      <Image
        className="z-[2] w-full h-[100%] bg-cover absolute top-0 left-0"
        width={1000}
        height={1200}
        src={"/images/hero-mask-overlay.png"}
        alt="backgound"
      />

      <div className="mobile414:pt-[10rem] mobile991:gap-y-[5rem] relative z-10 grid grid-cols-12 gap-5 pt-[12.5rem] items-center w-[90%] mx-auto sm:w-[95%]">
        <div className="mobile991:col-span-12 pl-[2.5rem] col-span-6">
          <h1 className="mobile414:text-[2.75rem] sm:text-[3.5rem] relative capitalize text-[4.25rem] leading-[1.1] text-black/90 font-semibold">
            <Image
              className="mobile414:w-[2rem] mobile414:h-auto mobile414:left-[-2rem] absolute top-[-1rem] left-[-2.5rem]"
              height={42}
              width={42}
              src={"/icons/title-decoration.svg"}
              alt="title decoration"
            />
            professional, stress-free pet care experience
          </h1>

          <p className="mobile414:my-[2.5rem] mobile414:text-[.95rem] mobile414:leading-[1.65] my-[3.5rem] text-[1.2rem] font-[400] leading-[1.5] drop-shadow-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum in
            recusandae adipisci libero. Distinctio natus doloribus tempore,
            culpa eaque modi ea accusantium ex nostrum maxime ad nemo?
          </p>

          <div className="mobile414:gap-[1rem] flex gap-[3rem] items-center">
            <button className="mobile414:text-[.725rem] uppercase text-[.9rem] rounded-full bg-primary text-primary-foreground py-2 px-6 transition-all hover:bg-black hover:text-white font-medium tracking-[1.5px]">
              our services
            </button>

            <div className="mobile414:gap-2 mobile414:text-[.725rem] flex text-text-dark cursor-pointer tracking-[1.5px] gap-3 items-center uppercase text-[1rem] font-semibold">
              <Image
                className="mobile414:w-[1.25rem] mobile414:h-auto"
                height={32}
                width={32}
                src="/icons/telephone.svg"
                alt="Icon"
              />
              schedule a call
            </div>
          </div>
        </div>
        <div className="mobile991:col-span-12 col-span-6 text-center flex items-center justify-center">
          <div className="mobile414:h-[30rem] w-[80%] h-[40rem] flex items-end justify-center rounded-br-[100rem] rounded-bl-[100rem] bg-cardGradient overflow-hidden outline outline-[3px] outline-offset-[.5rem] outline-primary">
            <Image
              className="w-[90%] h-auto"
              width={500}
              height={800}
              src={"/images/hero-1.png"}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
