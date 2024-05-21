"use client";
import React, { useEffect } from "react";
import { motion, useScroll, useAnimationControls } from "framer-motion";
import Image from "next/image";

const ScrollToTopContainerVariants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

const ScrollToTop = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.1) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });
 
  

  return (
    <motion.div
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={goToTop}
      className="fixed right-5 bottom-5 z-[999] cursor-pointer"
    >
      <Image
        height={50}
        width={50}
        src="/icons/to-top.svg"
        alt="Scroll To Top"
      />
    </motion.div>
  );
};

export default ScrollToTop;
