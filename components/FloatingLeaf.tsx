"use client";

import { motion, Transition } from "framer-motion";
import React from "react";

interface FloatingLeafProps {
  size?: number;
  color?: string;
  delay?: number;
  className?: string;
}

const floatEase = [0.4, 0, 0.2, 1] as const;

const FloatingLeaf: React.FC<FloatingLeafProps> = ({
  size = 40,
  color = "#B5C9B7",
  delay = 0,
  className,
}) => {
  const floatTransition: Transition = {
    duration: 5,
    repeat: Infinity,
    ease: floatEase,
    delay,
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      animate={{ y: [0, -10, 0] }}
      transition={floatTransition}
    >
      <path
        d="M52.5 11.5c-8.6 2.1-20.6 8.8-29.7 17.9C18.8 38.9 12 50.9 14.1 59.5 22.7 57.4 34.7 50.6 44 41.3c9.3-9.3 16.1-21.3 18.2-29.9zM11 53c.8-6.9 6.5-19.2 16.6-29.3C35.4 12.9 47.6 7.2 54.5 6.4 48.4 0.4 36.7 1.1 23.7 10.6 10.7 20.1 3.5 34.7 1.1 45.8L11 53z"
        fill={color}
      />
    </motion.svg>
  );
};

export default FloatingLeaf;
