// lib/getData.ts (Server Utility)
import { sliderData } from "@/data";

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
