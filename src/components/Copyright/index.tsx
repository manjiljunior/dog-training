import React from "react";

interface Props {
  text?: string;
}

const Copyright = ({ text }: Props) => {
  return (
    <div className="mobile414:text-[.8rem] bg-footer py-5 text-center font-readex_pro text-[1rem] capitalize text-white/90">
      {text}
    </div>
  );
};

export default Copyright;
