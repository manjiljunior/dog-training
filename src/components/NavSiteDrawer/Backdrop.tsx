import React from "react";

interface Props {
  show: boolean;
  close: () => void;
}

const Backdrop = ({ show, close }: Props) => {
  return (
    <div
      onClick={close}
      className={`z-[999] fixed top-0 left-0 bottom-0 right-0 bg-black/[.5] backdrop-blur-md transition-all duration-500 translate-x-[-100%] ${
        show && "!translate-x-0"
      }`}
    ></div>
  );
};

export default Backdrop;
