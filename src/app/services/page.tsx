import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import React from "react";

const Services = () => {
  return (
    <div className="ServicesPage">
      <PageHeader pageName="Services" />

      <div className="sm:w-[90%] sm:gap-y-[2.5rem] sm:gap-0 w-[80%] mx-auto mb-section grid grid-cols-12 gap-[4rem]">
        {Array.from({ length: 6 }).map((item, i) => (
          <div key={i} className="sm:col-span-12 col-span-6">
            <ServiceCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
