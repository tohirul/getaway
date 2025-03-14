"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
interface Props {
  children: React.ReactNode;
  index: number;
  className?: string;
}
const FadeAnimation = ({ children, index, className = "" }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeAnimation;
