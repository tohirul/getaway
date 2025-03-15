"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollHeaderAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!hasScrolled && window.scrollY > window.innerHeight / 2) {
          setHasScrolled(true);
          // Smooth scroll to the next section using Framer Motion
          window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: "smooth",
          });
        }
        if (hasScrolled && window.scrollY < window.innerHeight / 2) {
          setHasScrolled(false);
          // Scroll back up to the top section
          window.scrollTo({
            top: window.scrollY - window.innerHeight,
            behavior: "smooth",
          });
        }
      }, 10); // Debounce scroll events
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} // Fade in for the children
    >
      {children}
    </motion.div>
  );
}
