import React from "react";

import { motion } from "framer-motion";

export default function NavLinkHoverAnimation({
  cursorPosition,
  className,
}: {
  cursorPosition: { left: number; width: number; opacity: number };
  className?: string;
}) {
  return <motion.li animate={cursorPosition} className={className} />;
}
