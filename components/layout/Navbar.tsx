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
          ? "bg-black/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative flex h-20 w-full items-center px-8 md:px-30">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-medium tracking-tight text-white"
        >
          B&R Elite Arms
        </a>

        {/* Centered Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          <a
            href="/products"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            Products
          </a>

          <a
            href="/about"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-sm text-white/80 transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>

    </motion.nav>
  );
}