import Image from "next/image";
import React from "react";

interface Props {
  color: string;
  benefits: string[];
  focused?: boolean;
  icon: string;
  price: number;
}

const MembershipCard = ({ color, benefits, focused, icon, price }: Props) => {
  return (
    <div className="MembershipCard relative shadow-xl bg-white rounded-bl-3xl rounded-br-3xl pb-[5rem]">
      <div
        style={{
          backgroundColor: color,
        }}
        className="MembershipCard__media relative"
      ></div>

      <div className="absolute z-10 top-0 left-0 w-full h-[20rem] pt-[5rem] flex flex-col gap-[1.5rem] items-center">
        <Image
          className="w-auto h-[5rem]"
          height={85}
          width={85}
          src={icon}
          alt="Membership Icon"
        />

        <h2 className="mobile414:text-[3.5rem] text-[4.5rem] font-semibold leading-[1]">
          ${price}
        </h2>
      </div>

      <div className="mobile414:text-[.9rem] translate-y-[-50%] bg-primary inline-block text-white py-[.6rem] text-[1.25rem] rounded-full font-readex_pro font-medium uppercase px-[1.5rem]">
        6 months
      </div>

      <ul className="w-[75%] mx-auto mt-[2.5rem] flex flex-col gap-5">
        {benefits.map((item, i) => (
          <li
            key={i}
            className="mobile414:text-[1rem] flex items-center gap-3 text-[1.45rem] drop-shadow-sm text-text-dark capitalize font-readex_pro font-[400]"
          >
            <Image className="mobile414:w-[1.5rem] mobile414:h-auto" height={30} width={30} src="/icons/paw.svg" alt="Icon" />{" "}
            {item}
          </li>
        ))}
      </ul>

      <button
        className={`mobile414:text-[.8rem] font-readex_pro uppercase tracking-[4px] text-[1rem] mt-[2.5rem] rounded-full border border-black py-[1.25rem] w-[80%] mx-auto hover:bg-primary hover:text-white hover:border-none transition-all duration-200 ${
          focused && "bg-primary text-white border-none"
        }`}
      >
        choose plan
      </button>
    </div>
  );
};

export default MembershipCard;
