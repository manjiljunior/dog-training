import PageHeader from "@/components/PageHeader";
import SectionAbout from "@/components/SectionAbout";
import SectionReviews from "@/components/SectionReviews";
import SectionStats from "@/components/SectionStats";
import SectionTeam from "@/components/SectionTeam";
import React from "react";

const AboutUs = () => {
  return (
    <div className="AboutPage">
      <PageHeader pageName="About us" />
      <SectionAbout />
      <SectionTeam />
      <SectionReviews />
      <SectionStats />
    </div>
  );
};

export default AboutUs;
