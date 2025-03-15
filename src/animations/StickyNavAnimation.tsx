"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const StickyNavAnimation = ({ children }: { children: React.ReactNode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track visibility
  const [yPosition, setYPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight / 2 > window.scrollY && window.scrollY > 0) {
        setIsVisible(false);
        setYPosition(-100);
      } else {
      }
      if (window.scrollY >= window.innerHeight) {
        if (!isSticky) {
          setIsSticky(true);
          setYPosition(0);
        }
        if (isVisible) {
          setIsVisible(true);
        }
      } else if (window.scrollY === 0) {
        if (isSticky) {
          setIsSticky(false);
        }
        if (!isVisible) {
          setIsVisible(true);
        }

        setYPosition(0);
      } else {
        if (isSticky) {
          setIsSticky(false);
        }
        if (!isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky, isVisible]); // Add these to dependencies to avoid stale state

  return (
    <motion.div
      className={`absolute flex w-full flex-wrap items-center justify-between gap-2 px-5 py-8 text-xs font-medium uppercase md:px-10 ${
        isSticky ? "fixed top-0 left-0 z-50" : ""
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
