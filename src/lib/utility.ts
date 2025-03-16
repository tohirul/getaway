// lib/getData.ts (Server Utility)
import { sliderData } from "@/data";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export async function getInitialBannerData() {
  return {
    data: sliderData.slice(1),
    transitionData: sliderData[0] ?? {
      img: "",
      title: "",
      description: "",
      location: "",
    },
    currentSlideData: {
      data: sliderData[0] ?? {
        img: "",
        title: "",
        description: "",
        location: "",
      },
      index: 0,
    },
  };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
