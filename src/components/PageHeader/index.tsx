import React from "react";
import Header from "../Header";
import Link from "next/link";

interface Props {
  pageName: string;
}

const PageHeader = ({ pageName }: Props) => {
  return (
    <div className="PageHeader relative w-full h-[45rem] sm:h-[30rem] mb-section flex items-center justify-center">
      <Header />

      <div className="w-[90%] mx-auto translate-y-[-2.5rem] flex flex-col gap-3 items-center">
        <h2 className="w-full text-center relative PageHeader__title text-[3.25rem] tracking-wide capitalize font-bold">
          {pageName}
        </h2>
        <div className="w-full relative PageHeader__breadcrumb justify-center font-readex_pro text-[1.05rem] capitalize font-medium flex items-center gap-3">
          <Link className="cursor-pointer hover:underline" href={"/"}>
            home
          </Link>
          <div className="h-[18px] w-[1.25px] bg-black rotate-[30deg]"></div>
          <span>{pageName}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
