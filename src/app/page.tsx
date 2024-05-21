import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import SectionBlogs from "@/components/SectionBlogs";
import SectionPlans from "@/components/SectionPlans";
import SectionServices from "@/components/SectionServices";
import SectionTeam from "@/components/SectionTeam";

export default function Home() {
  return (
    <main>
      <SectionAbout />
      <SectionTeam />
      <SectionServices />
      <SectionPlans />
      <SectionBlogs />
      {/* test */}
    </main>
  );
}
