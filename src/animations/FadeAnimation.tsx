"use client";
import { useSelector } from "@/store/store";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const FadeAnimation = ({ children, className = "" }: Props) => {
  const { currentSlideData } = useSelector((state) => state.banner);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlideData.index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeAnimation;
