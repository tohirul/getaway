import { motion } from "framer-motion";
import React from "react";

const Progress = ({
  currentIndex,
  length,
}: {
  currentIndex: number;
  length: number;
}) => {
  return (
    <React.Fragment>
      <div className="flex h-[1px] flex-1 items-center rounded-full bg-white bg-opacity-50">
        <div
          style={{
            width: (((currentIndex + 1) / length) * 100).toString() + "%",
          }}
          className="h-[1px] rounded-full bg-yellow-400 bg-opacity-50"
        ></div>
      </div>
      <span
        key={currentIndex}
        style={{
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={currentIndex}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="flex items-center text-4xl font-medium text-bright"
        >
          0{currentIndex + 1}
        </motion.div>
      </span>
    </React.Fragment>
  );
};

export default Progress;
