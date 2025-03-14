"use client";
import React from "react";
import SliderCard from "@/components/SliderCard";
import { useSelector } from "@/store/store";

const Slides = () => {
  const { data } = useSelector((state) => state.banner);
  return (
    <div className="flex w-full gap-6">
      {data.map((data) => {
        return <SliderCard key={data.title} data={data} />;
      })}
    </div>
  );
};

export default Slides;
