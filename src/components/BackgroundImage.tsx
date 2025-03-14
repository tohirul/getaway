"use client";
import React from "react";
import { CurrentSlideData, Data } from "@/app/page";
import { motion } from "framer-motion";

interface Props {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
}

const BackgroundImage = ({ transitionData, currentSlideData }: Props) => {
  // console.log(props);
  return (
    <React.Fragment>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.title + transitionData.img}
          alt={`A picture of ${transitionData.title}`}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
          src={transitionData.img}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </React.Fragment>
  );
};

export default BackgroundImage;
