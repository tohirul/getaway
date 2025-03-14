"use client";
import React from "react";
import ImageAnimation from "@/animations/ImageAnimation";
import { useSelector } from "@/store/store";

const BackgroundImage = () => {
  const { transitionData, currentSlideData } = useSelector(
    (state) => state.banner
  );

  return (
    <React.Fragment>
      {transitionData && (
        <ImageAnimation
          keyring={transitionData.img}
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
      <ImageAnimation
        alt="Current Image"
        keyring={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </React.Fragment>
  );
};

export default BackgroundImage;
