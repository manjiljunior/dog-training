import React from "react";
import MembershipCard from "./MembershipCard";

const BENEFITS1 = [
  "1x Blood Test ( CBC )",
  "2x Vaccination",
  "Physical Exam",
  "3x Vaccination ( 7 in 1 )",
];

const BENEFITS2 = [
  "Pet Grooming",
  "3x Vaccination ( 7 in 1 )",
  "Paw Massage",
  "Physical Exam",
];

const BENEFITS3 = [
  "Combing/Brushing",
  "Physical Exam",
  "Paw Massage",
  "Body Trimming/Styling",
];

const SectionPlans = () => {
  return (
    <div className="mobile414:px-[1rem] px-[2rem] grid grid-cols-12 gap-[2rem] text-center sm:gap-y-[5rem]">
      <div className="sm:col-span-12 col-span-4">
        <MembershipCard
          color="#D9C9B4"
          benefits={BENEFITS1}
          icon="/icons/membership/membership-1.svg"
          price={150}
        />
      </div>
      <div className="sm:col-span-12 col-span-4">
        <div className="mobile414:mb-5 flex flex-col">
          <span className="mobile414:text-[.8rem] font-readex_pro text-[1.1rem] tracking-[1.5px] uppercase drop-shadow-sm text-black/80">
            choose our best pack
          </span>

          <h3 className="mobile414:text-[2.5rem] text-[3.5rem] font-semibold drop-shadow capitalize">
            our packs
          </h3>
        </div>

        <MembershipCard
          color="#DBFEB4"
          benefits={BENEFITS2}
          focused={true}
          icon="/icons/membership/membership-2.svg"
          price={250}
        />
      </div>
      <div className="sm:col-span-12 col-span-4">
        <MembershipCard
          color="#B4EDFE"
          benefits={BENEFITS3}
          icon="/icons/membership/membership-3.svg"
          price={450}
        />
      </div>
    </div>
  );
};

export default SectionPlans;
