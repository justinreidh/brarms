"use client";

import { motion } from "motion/react";

interface BlackOverlayProps {
  duration?: number;
  delay?: number;
}

export function BlackOverlay({
  duration = 1.5,
  delay = 0,
}: BlackOverlayProps) {
  return (
    <motion.div
      className="absolute inset-0 z-10 bg-black"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}