"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

export function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    // At the very top of the page
    if (current <= 10) {
      setHidden(false);
      setScrolled(false);
      return;
    }

    // We've moved away from the top
    setScrolled(true);

    // Scrolling down
    if (current > previous) {
      setHidden(true);
    }

    // Scrolling up
    if (current < previous) {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: hidden ? "-100%" : "0%",
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="font-thin relative flex h-20 w-full items-center px-8 md:px-30">
        {/* Logo */}
        <a
          href="/"
          className="text-4xl tracking-tight text-white"
        >
          B&R ELITE ARMS
        </a>

        {/* Centered Navigation */}
        <div className="font-bold absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          <a
            href="/products/t-los"
            className="text-white transition-colors hover:text-white/70"
          >
            Products
          </a>

          <a
            href="/about"
            className="text-white transition-colors hover:text-white/70"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-white transition-colors hover:text-white/70"
          >
            Contact
          </a>
        </div>
      </div>

    </motion.nav>
  );
}