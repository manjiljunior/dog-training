import React from "react";
import SectionTitle from "../SectionTitle";
import Member from "./Member";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface TeamMember {
  name: string;
  tagline: string;
  socials: [
    {
      name: string;
      link: string;
    }
  ];
  image: any;
}

interface Props {
  data: [TeamMember];
}

const SectionTeam = ({ data }: Props) => {
  return (
    <div className="mobile414:gap-0 mobile414:gap-y-[2.5rem] relative flex flex-col gap-[3.5rem] py-section bg-[#ffe9ed] mb-section">
      <Image
        className="absolute top-0 left-0 z-[2] h-full w-full"
        height={1000}
        width={1000}
        src={"/images/team-bg.png"}
        alt="Team Background"
      />

      <SectionTitle title="Meet our dog trainers" subtitle="our team" />

      <div className="sm:w-[90%] w-[80%] sm:gap-0 sm:gap-y-[2.5rem] mx-auto grid grid-cols-12 gap-[2.25rem] ">
        {data.map((item, i) => (
          <div key={i} className="sm:col-span-12 col-span-4">
            <Member data={item} />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <Button className="mobile414:text-[.8rem]" variant="default">
          view all
        </Button>
      </div>
    </div>
  );
};

export default SectionTeam;
