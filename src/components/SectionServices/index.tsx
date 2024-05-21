import React from "react";
import SectionTitle from "../SectionTitle";
import Services from "./Services";

export const projects = [
  {
    title: "health care",
    icon: "/icons/services/health-care.svg",
  },
  {
    title: "grooming",
    icon: "/icons/services/grooming.svg",
  },
  {
    title: "pet training",
    icon: "/icons/services/pet-training.svg",
  },
  {
    title: "healthy foods",
    icon: "/icons/services/healthy-food.svg",
  },
  {
    title: "pet care",
    icon: "/icons/services/pet-care.svg",
  },
  {
    title: "pet walking",
    icon: "/icons/services/pet-walking.svg",
  },
];

const SectionServices = () => {
  return (
    <div className="pb-section">
      <SectionTitle title="our services" />

      <div className="sm:w-[90%] w-[80%] mx-auto">
        <Services items={projects} />
      </div>
    </div>
  );
};

export default SectionServices;
