import React from "react";
import PageHeader from "@/components/PageHeader";
import SectionAbout from "@/components/SectionAbout";
import SectionReviews from "@/components/SectionReviews";
import SectionStats from "@/components/SectionStats";
import SectionTeam from "@/components/SectionTeam";
import {
  getAboutpage,
  getAboutpageSeo,
  getGlobalDataSeo,
  getReviews,
  getTrainers,
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
  const aboutpageData = await getAboutpageSeo();

  return {
    title: aboutpageData?.seo?.title || globalData?.seo?.title,
    description:
      aboutpageData?.seo?.description || globalData?.seo?.description,
  };
}

export default async function AboutUs() {
  const aboutpageData = await getAboutpage();
  const { trainers } = await getTrainers({
    page: 1,
    pageSize: 6,
  });
  const { reviews } = await getReviews({
    page: 1,
    pageSize: 10,
  });

  return (
    <div className="AboutPage">
      <PageHeader pageName="About us" />
      {aboutpageData?.about && <SectionAbout data={aboutpageData.about} />}
      {trainers?.length && <SectionTeam data={trainers} />}
      {aboutpageData?.review && (
        <SectionReviews
          title={aboutpageData.review.title}
          image={aboutpageData.review?.image?.original}
          data={reviews}
        />
      )}
      {aboutpageData?.stats && <SectionStats data={aboutpageData.stats} />}
    </div>
  );
}
