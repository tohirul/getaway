"use client";

import BackgroundImage from "@/components/BackgroundImage";
import Controls from "@/components/Controls";
import Header from "@/components/Header";
import SlideInfo from "@/components/SlideInfo";
import Slides from "@/components/Slides";
import { sliderData } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, useState } from "react";

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const dataInitialState = useMemo(() => sliderData.slice(1), []);
  const transitionDataInitialState = useMemo(
    () =>
      sliderData[0] ?? { img: "", title: "", description: "", location: "" },
    []
  );

  const [data, setData] = useState<Data[]>(dataInitialState);
  const [transitionData, setTransitionData] = useState<Data>(
    transitionDataInitialState
  );
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
    data: transitionDataInitialState,
    index: 0,
  });

  return (
    <React.Fragment>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideData.index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute z-10 w-full h-full"
        >
          <BackgroundImage
            transitionData={transitionData}
            currentSlideData={currentSlideData}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute z-20 h-full w-full">
        <Header />
        <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
          <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideData.index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SlideInfo
                  transitionData={transitionData}
                  currentSlideData={currentSlideData}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
            <Slides data={data} />
            <Controls
              currentSlideData={currentSlideData}
              data={data}
              transitionData={transitionData}
              handleData={setData}
              handleTransitionData={setTransitionData}
              handleCurrentSlideData={setCurrentSlideData}
              sliderData={sliderData}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
