"use client";

import React from "react";

import { motion } from "framer-motion";

export default function FadeInAnimation({
  Wrapper = "div",
  children,
  className = "",
  initial,
  animate,
  transition,
}: {
  Wrapper?: keyof React.JSX.IntrinsicElements;
  children?: React.JSX.Element;
  text?: string;
  initial: object & { opacity: number };
  animate: object & { opacity: number };
  className?: string;
  transition?: object & { delay: number; duration: number; ease: string };
}) {
  return (
    <motion.div
      initial={{ opacity: initial?.opacity && initial.opacity }}
      animate={{ opacity: animate?.opacity }}
      transition={{
        delay: transition?.delay,
        duration: transition?.duration,
        ease: transition?.ease,
      }}
    >
      <Wrapper className={className}>{children}</Wrapper>
    </motion.div>
  );
}
