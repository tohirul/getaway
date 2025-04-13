"use server";
import FadeAnimation from "@/animations/FadeAnimation";
import React from "react";
import BackgroundImage from "../BackgroundImage";
import Navigation from "../Navigation/Navigation";
import SlideInfo from "../SlideInfo";
import Slides from "../Slides";
import Controls from "../Controls";
import ScrollHeaderAnimation from "@/animations/ScrollHeaderAnimation";

const Header = () => {
  return (
    <ScrollHeaderAnimation>
      <header className="relative w-screen h-screen">
        <FadeAnimation className="absolute z-10 w-full h-full">
          <BackgroundImage />
        </FadeAnimation>
        <div className="absolute z-20 h-full w-full">
          <Navigation />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <FadeAnimation>
                <SlideInfo />
              </FadeAnimation>
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides />
              <Controls />
            </div>
          </div>
        </div>
      </header>
    </ScrollHeaderAnimation>
  );
};

export default Header;
