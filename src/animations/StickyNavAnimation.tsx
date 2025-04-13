"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const StickyNavAnimation = ({ children }: { children: React.ReactNode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track visibility
  const [yPosition, setYPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const halfViewport = window.innerHeight / 2;

      const shouldHide = scrollY > 0 && scrollY < halfViewport;
      const shouldStick = scrollY >= window.innerHeight;

      setIsVisible(!shouldHide);
      setYPosition(shouldHide ? -500 : 0);
      setIsSticky(shouldStick);
    };

    const onScroll = () => {
      // Use RAF for smoother performance
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []); // Add these to dependencies to avoid stale state

  return (
    <motion.div
      className={`absolute flex w-full flex-wrap items-center justify-between gap-2 px-5 py-4 text-xs font-medium uppercase md:px-10 ${
        isSticky ? "fixed top-0 left-0 z-50 text-dark shadow-md" : "text-bright"
      }`}
      initial={{ opacity: 1, y: 0 }} // Initially at y: 0
      animate={{
        opacity: isVisible ? 1 : 0,
        y: yPosition, // Slight upward movement when sticky
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut", // Smooth easing
        type: "spring", // Gives a more natural bounce effect
        stiffness: 200, // Slight bounce feel
        damping: 30, // Makes the motion less stiff
      }}
    >
      {children}
    </motion.div>
  );
};

export default StickyNavAnimation;
