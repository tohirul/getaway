import React from "react";
import { motion } from "framer-motion";
import { Data } from "@/app/page";

interface Props {
  data: Data;
}

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const OtherInfo = ({ data }: Props) => {
  return (
    <motion.div initial="hidden" animate={"visible"} className="flex flex-col">
      <AnimatedText
        className="spacing overflow-hidden text-[#D5D5D6]"
        data={data?.location}
      />
      <AnimatedText
        className="my-1 text-4xl font-semibold md:my-3 md:text-8xl md:leading-[100px]"
        data={data?.title}
      />
      <AnimatedText
        className="text-xs md:text-base text-[#D5D5D6]"
        data={data?.description}
      />
    </motion.div>
  );
};

export default OtherInfo;

const AnimatedText = ({
  className,
  data,
}: {
  className: string;
  data: string;
}) => {
  return (
    <React.Fragment>
      <span className="overflow-hidden inline-block">
        <motion.p className={`${className}`} variants={item} key={data}>
          {data}
        </motion.p>
      </span>
    </React.Fragment>
  );
};
