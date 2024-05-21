import Image from "next/image";
import React from "react";
import { CiShoppingTag } from "react-icons/ci";

const BlogCard = () => {
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full h-[20rem] rounded-br-[4rem] overflow-hidden">
        <Image
          className="h-full group-hover:scale-125 transition-all duration-300 w-full bg-center object-cover"
          height={400}
          width={400}
          src="/images/blog-1.webp"
          alt="Title"
        />

        <div className="mobile414:text-[.8rem] absolute bottom-0 left-0 font-[400] tracking-wide inline-block text-[1rem] py-[1rem] px-[2.5rem] uppercase rounded-tr-[3rem] bg-primary text-white drop-shadow-sm">
          12, May 2024
        </div>
      </div>

      <div className="flex items-center gap-2 pt-4 mb-[1rem]">
        <CiShoppingTag color="black" size={30} />
        <p className="mobile414:text-[.8rem] uppercase text-text-dark/90 text-[.9rem] font-medium font-readex_pro drop-shadow-sm">
          pet, dog, training, food
        </p>
      </div>

      <h2 className="mobile414:text-[1.75rem] text-[2.25rem] mb-[1rem] pr-[2rem] transition-all hover:text-primary text-text-dark font-semibold leading-[1.4]">
        Tips for keeping your cat cool and healthy
      </h2>

      <p className="mobile414:text-[.9rem] text-[1.15rem] text-text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis
        labore tempora, impedit repellat praesentium optio possimus.
      </p>
    </div>
  );
};

export default BlogCard;
