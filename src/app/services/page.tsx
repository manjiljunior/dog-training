import React from "react";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import {
  getGlobalDataSeo,
  getServicepageSeo,
  getServices,
} from "@/lib/datalayer";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const globalData = await getGlobalDataSeo();
  const servicepageData = await getServicepageSeo();

  return {
    title: servicepageData?.seo?.title || globalData?.seo?.title,
    description:
      servicepageData?.seo?.description || globalData?.seo?.description,
  };
}

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
