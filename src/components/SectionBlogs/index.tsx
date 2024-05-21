import React from "react";
import SectionTitle from "../SectionTitle";
import BlogCard from "./BlogCard";
import { Button } from "../ui/button";

const SectionBlogs = () => {
  return (
    <div className="sm:w-[90%] pt-section w-[75%] overflow-hidden mx-auto mb-section">
      <SectionTitle title="Latest news & blogs" />

      <div className="grid grid-cols-12 sm:gap-0 sm:gap-y-[2.5rem] gap-[4rem] mt-[2.5rem]">
        {Array.from({ length: 4 }).map((item, i) => (
          <div key={i} className="mobile991:col-span-12 col-span-6">
            <BlogCard />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center mt-[5rem]">
        <Button className="mobile414:text-[.8rem]" variant="outline">
          view all
        </Button>
      </div>
    </div>
  );
};

export default SectionBlogs;
