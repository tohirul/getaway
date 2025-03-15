"use client";
// lib/bannerService.ts
import { useStore } from "@/store/store"; // Import your Redux store if needed

export const useBannerData = () => {
  const store = useStore(); // Assuming you have a function to access the store
  const state = store.getValue((state) => state.banner);
  return {
    transitionData: state.transitionData,
    currentSlideData: state.currentSlideData,
  };
};
