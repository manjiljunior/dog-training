import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Service } from "../SectionServices";
import { truncateString } from "@/utils";

interface Props {
  data: Service;
}

const ServiceCard = ({ data }: Props) => {
  return (
    <div className="ServiceCard cursor-pointer group w-full py-[1.5rem] rounded-2xl">
      <div className="mobile414:w-[90%] sm:w-[75%] relative w-[65%] mx-auto rounded-2xl overflow-hidden">
        <Image
          className="w-full h-[18rem] bg-center object-cover"
          height={400}
          width={400}
          src={data?.image?.medium?.url}
          alt={data.name}
        />

        <Button
          href={`/services/${data.slug}`}
          className="mobile414:text-[.8rem] absolute scale-0 duration-500 group-hover:scale-100 z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[1rem]"
          variant={"default"}
        >
          read more
        </Button>

        <div className="z-10 group-hover:opacity-100 opacity-0 absolute top-0 left-0 bg-black/[.2] transition-all duration-300  w-full h-full"></div>
      </div>

      <div className="flex flex-col gap-4 items-center w-[90%] mx-auto mt-[2rem]">
        <h2 className="mobile414:text-[1.75rem] capitalize text-[2.35rem] text-text-dark font-bold">
          {data.name}
        </h2>

        {data?.description && (
          <p className="mobile414:text-[.9rem] mobile414:leading-[1.6] text-center text-[1.1rem] leading-[1.25] font-readex_pro">
            {truncateString(data.description, 200) + "..."}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
