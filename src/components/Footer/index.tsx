import { getFooter } from "@/lib/datalayer";
import React from "react";
import Copyright from "../Copyright";
import Component from "./Component";

const Footer = async () => {
  const footerData = await getFooter();

  return (
    <>
      <Component data={footerData} />
      <Copyright text={footerData?.copyright_text || ""} />
    </>
  );
};

export default Footer;
