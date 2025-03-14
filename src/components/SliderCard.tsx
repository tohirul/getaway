"use client";
import { Data } from "@/app/page";
import { motion } from "framer-motion";
import React from "react";

const SliderCard = ({ data }: { data: Data }) => {
  return (
    <motion.div
      className="relative h52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-250px"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <motion.img
        layoutId={data.img}
        alt="Transition Image"
        src={data?.img}
        className="absolute h-full w-full rounded-2xl object-cover brightness-75"
      />
      <div className="absolute  z-10 flex h-full items-end p-4">
        <div>
          <div className="mb-2 h-0.5 w-3 rounded-full bg-white"></div>
          <p className="text-xs text-[#D5D5D6]">{data?.location}</p>
          <h1 className="text-xl leading-6 text-white">{data?.title}</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
