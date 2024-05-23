import React from "react";
import PageHeader from "@/components/PageHeader";
import SectionAbout from "@/components/SectionAbout";
import SectionReviews from "@/components/SectionReviews";
import SectionStats from "@/components/SectionStats";
import SectionTeam from "@/components/SectionTeam";
import { getAboutpage, getReviews, getTrainers } from "@/lib/datalayer";

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
