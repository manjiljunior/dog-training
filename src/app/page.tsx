import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import SectionBlogs from "@/components/SectionBlogs";
import SectionPlans from "@/components/SectionPlans";
import SectionServices from "@/components/SectionServices";
import SectionTeam from "@/components/SectionTeam";
import {
  getGlobalDataSeo,
  getHomepage,
  getHomepageSeo,
  getServices,
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
  const homepageData = await getHomepageSeo();

  return {
    title: homepageData?.seo?.title || globalData?.seo?.title,
    description: homepageData?.seo?.description || globalData?.seo?.description,
  };
}

export default async function Home() {
  const homepageData = await getHomepage();
  const { trainers } = await getTrainers({
    page: 1,
    pageSize: 3,
  });
  const { services } = await getServices({
    page: 1,
    pageSize: 10,
  });

  return (
    <main>
      {homepageData?.hero && <Hero data={homepageData.hero} />}
      {homepageData?.about && <SectionAbout data={homepageData.about} />}
      {trainers?.length && <SectionTeam data={trainers} />}
      {services?.length && <SectionServices data={services} />}
      <SectionPlans />
      <SectionBlogs />
    </main>
  );
}
