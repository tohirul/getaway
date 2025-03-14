import { motion } from "framer-motion";
import React from "react";

interface Props {
  keyring: string;
  layoutId?: string;
  transition?: object;
  src: string;
  alt: string;
  className?: string;
}

const ImageAnimation = ({
  keyring,
  layoutId = "",
  transition = {},
  src,
  alt,
  className = "",
}: Props) => {
  return (
    <motion.img
      key={keyring}
      layoutId={layoutId}
      alt={alt}
      transition={transition}
      className={className}
      src={src}
    />
  );
};

export default ImageAnimation;
