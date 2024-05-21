import { Span } from "next/dist/trace";
import Image from "next/image";
import React from "react";

interface Props {
  subtitle?: string;
  title: string;
}

const SectionTitle = ({ subtitle, title }: Props) => {
  return (
    <div className="text-text-dark flex flex-col items-center">
      {subtitle && (
        <span className="mobile414:text-[.8rem] sm:text-[1rem] text-[1.1rem] tracking-[3px] mb-1 font-medium uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="mobile414:text-[1.75] sm:text-[2rem] inline-block text-[2.5rem] font-semibold drop-shadow-sm capitalize relative">
        <Image
          className="mobile414:w-[1.75rem] mobile414:h-auto mobile414:left-[-1.75rem] mobile414:top-[-.75rem] absolute top-[-1rem] left-[-2.5rem]"
          height={42}
          width={42}
          src={"/icons/title-decoration.svg"}
          alt="title decoration"
        />
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
