"use client";
import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { TeamMember } from ".";

const Member = ({ data }: { data: TeamMember }) => {
  const isMobile480 = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className="MemberCard cursor-pointer transition-all duration-200 hover:bg-primary group z-10 relative rounded-bl-2xl rounded-br-2xl bg-white shadow-[rgba(149, 157, 165, 0.2) 0px 8px 24px]">
      <Image
        className="w-full"
        height={400}
        width={400}
        src={data.image?.medium?.url}
        alt={data.name}
      />

      <div className="px-8 py-[2.25rem]">
        <h2 className="mobile414:text-[2rem] group-hover:text-white text-[2.25rem] font-semibold capitalize drop-shadow-sm">
          {data.name}
        </h2>
        <p className="mobile414:text-[.9rem] tracking-[3.5px] group-hover:text-white uppercase text-[1rem] my-1 text-text-dark">
          {data.tagline}
        </p>

        <ul className="flex items-center mt-5 gap-6">
          {data.socials?.map((item, i) => {
            if (item.name.toLowerCase() === "facebook") {
              return (
                <li key={i}>
                  <FaFacebook
                    size={isMobile480 ? 15 : 22}
                    className="MemberCard__icon"
                  />
                </li>
              );
            }
            if (item.name.toLowerCase() === "twitter") {
              return (
                <li key={i}>
                  <FaXTwitter
                    size={isMobile480 ? 15 : 22}
                    className="MemberCard__icon"
                  />
                </li>
              );
            }
            if (item.name.toLowerCase() === "instagram") {
              return (
                <li key={i}>
                  <FaInstagram
                    size={isMobile480 ? 18 : 25}
                    className="MemberCard__icon"
                  />
                </li>
              );
            }

            if (item.name.toLowerCase() === "youtube") {
              return (
                <li key={i}>
                  <FaYoutube
                    size={isMobile480 ? 18 : 25}
                    className="MemberCard__icon"
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Member;
