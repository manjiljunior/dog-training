"use client";
import Image from "next/image";
import React, { use, useRef } from "react";
import Slider from "react-slick";
import { IoStarSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

const SETTINGS = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ReviewCard = () => {
  const slider = useRef<Slider>(null);

  const isMobile480 = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className="ReviewCard mobile414:p-[1.5rem] p-[2.75rem] bg-white w-full rounded-2xl">
      <Slider ref={slider} {...SETTINGS}>
        {Array.from({ length: 4 }).map((item, i) => (
          <div key={i} className="mb-[2.5rem]">
            <p className="mobile414:text-[1rem] mobile414:leading-[1.7] font-readex_pro text-[1.125rem] leading-[1.6] mb-[2.5rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              commodi mollitia soluta qui tenetur deserunt rerum consequatur
              harum beatae asperiores modi nihil ut, saepe aliquam dolore
              provident voluptatibus? Quis inventore consectetur quisquam,
              impedit ab amet veniam sint veritatis ipsum corrupti. Est esse
              consequuntur nesciunt quidem libero, eveniet doloribus a deserunt!
            </p>

            <div className="mobile414:gap-[.75rem] flex items-center gap-[1.5rem] w-full">
              <Image
                className="mobile414:w-[2.5rem] mobile414:h-[2.5rem] rounded-full w-[4.5rem] h-[4.5rem]"
                height={80}
                width={80}
                src="/images/testimonial-1.webp"
                alt="Name"
              />

              <div className="flex flex-col gap-2  w-full leading-[1]">
                <div className="flex items-center justify-between w-full">
                  <h2 className="mobile414:text-[1.25rem] text-[1.65rem] font-bold font-readex_pro capitalize">
                    Dr. Gyawali
                  </h2>

                  <div className="flex items-center">
                    <IoStarSharp size={isMobile480 ? 20 : 25} color="#ffc312" />
                    <IoStarSharp size={isMobile480 ? 20 : 25} color="#ffc312" />
                    <IoStarSharp size={isMobile480 ? 20 : 25} color="#ffc312" />
                    <IoStarSharp size={isMobile480 ? 20 : 25} color="#ffc312" />
                    <IoStarSharp size={isMobile480 ? 20 : 25} color="#ffc312" />
                  </div>
                </div>

                <span className="mobile414:text-[.8rem] font-readex_pro capitalize text-[1.15rem] tracking-wide">
                  pets doctor
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="mobile414:gap-[1.75rem] flex items-center gap-[2.25rem] float-right">
        <div
          onClick={() => {
            if (slider.current && slider.current.slickPrev) {
              slider.current.slickPrev();
            }
          }}
          className="mobile414:h-[2rem] mobile414:w-[2rem] h-[2.75rem] group rounded-full cursor-pointer w-[2.75rem] flex items-center justify-center bg-text-dark transition-all hover:bg-primary"
        >
          <Image
            height={isMobile480 ? 18 : 22}
            width={isMobile480 ? 18 : 22}
            src="/icons/arrow-left.svg"
            alt="Arrow Left"
            className="invert"
          />
        </div>

        <div className="mobile414:h-[2.25rem] h-[2.75rem] w-[2.5px] bg-black rotate-[15deg]"></div>

        <div
          onClick={() => {
            if (slider.current && slider.current.slickNext) {
              slider.current.slickNext();
            }
          }}
          className="mobile414:h-[2rem] mobile414:w-[2rem] h-[2.75rem] group rounded-full cursor-pointer w-[2.75rem] flex items-center justify-center bg-text-dark transition-all hover:bg-primary"
        >
          <Image
            height={isMobile480 ? 18 : 22}
            width={isMobile480 ? 18 : 22}
            src="/icons/arrow-left.svg"
            alt="Arrow Left"
            className="invert rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
