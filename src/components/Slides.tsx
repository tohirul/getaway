import { Data } from "@/app/page";
import React from "react";
import SliderCard from "@/components/SliderCard";

const Slides = ({ data }: { data: Data[] }) => {
  return (
    <div className="flex w-full gap-6">
      {data.map((data) => {
        return <SliderCard key={data.title} data={data} />;
      })}
    </div>
  );
};

export default Slides;
