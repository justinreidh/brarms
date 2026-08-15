"use client";

import { motion } from "motion/react";

interface DarkOverlayProps {
  duration?: number;
  delay?: number;
}

export function DarkOverlay({
  duration = 1.5,
  delay = 0,
}: DarkOverlayProps) {
  return (
    <motion.div
      className="absolute inset-0 z-10 bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}