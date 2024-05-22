import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import SectionBlogs from "@/components/SectionBlogs";
import SectionPlans from "@/components/SectionPlans";
import SectionServices from "@/components/SectionServices";
import SectionTeam from "@/components/SectionTeam";
import { getHomepage, getServices, getTrainers } from "@/lib/datalayer";

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
