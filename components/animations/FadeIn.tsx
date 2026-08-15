"use client";

import { motion } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 1.5,
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        opacity: {
          duration,
          delay,
          ease: "easeIn",
        },
        y: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
}