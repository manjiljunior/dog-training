import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { getServices } from "@/lib/datalayer";
import React from "react";

const Services = async () => {
  const { services } = await getServices({
    page: 1,
    pageSize: 10,
  });

  return (
    <div className="ServicesPage">
      <PageHeader pageName="Services" />

      {!services?.length ? (
        <div>
          <h2>no services found</h2>
        </div>
      ) : (
        <div className="sm:w-[90%] sm:gap-y-[2.5rem] sm:gap-0 w-[80%] mx-auto mb-section grid grid-cols-12 gap-[4rem]">
          {services.map((item, i) => (
            <div key={i} className="sm:col-span-12 col-span-6">
              <ServiceCard data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
