import Image from "next/image";
import React from "react";
import ReviewCard from "./ReviewCard";

export interface Testimonial {
  name: string;
  review: string;
  rating: number;
  tagline: string;
  avatar: any;
}

interface Props {
  title: string;
  image: any;
  data: [Testimonial];
}

const SectionReviews = ({ title, image, data }: Props) => {
  return (
    <div className="sm:gap-y-[5rem] sm:w-[90%] sm:gap-0 SectionReviews w-[80%] mx-auto mb-section grid grid-cols-12 gap-[2.5rem]">
      <div className="sm:col-span-12 col-span-6">
        <div className="mobile414:h-[20rem] min-h-[25rem] h-full relative flex justify-center">
          <Image
            className="mobile414:w-full sm:rounded-t-[2.5rem] sm:rounded-b-[2.5rem] w-[80%] h-full bg-center object-cover z-[2] rounded-t-[100rem] rounded-b-[100rem]"
            height={600}
            width={300}
            src={image}
            alt={title}
          />

          <div className="sm:rounded-t-[2.5rem] sm:rounded-b-[2.5rem] SectionReviews__shape absolute w-[80%] h-full bg-[#ffc312] z-[1] rounded-t-[100rem] rounded-b-[100rem]"></div>
        </div>
      </div>

      <div className="sm:col-span-12 col-span-6 flex flex-col items-center gap-[2.5rem]">
        <h2 className="mobile414:leading-[1.25] mobile414:text-[2.5rem] text-[3.5rem] relative capitalize text-text-dark text-center leading-[1.35] font-bold">
          {title}
          <Image
            height={40}
            width={40}
            src="/icons/paw-primary.svg"
            alt="Icon"
            className="mobile414:w-[4rem] absolute z-[-1] left-[50%] top-[-.75rem] opacity-85 w-[6rem] h-auto translate-x-[-50%]"
          />
        </h2>

        <ReviewCard data={data} />
      </div>
    </div>
  );
};

export default SectionReviews;
