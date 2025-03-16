import React from "react";

import { motion } from "framer-motion";

export default function TextColorAnimation({
  Wrapper = "span",
  name,
  className,
}: {
  Wrapper?: keyof React.JSX.IntrinsicElements;
  name: string;
  className: string;
}) {
  return (
    <Wrapper>
      <span className="sr-only">{name}</span>
      <motion.span transition={{ ease: "ease" }} className={className}>
        {name}
      </motion.span>
    </Wrapper>
  );
}
