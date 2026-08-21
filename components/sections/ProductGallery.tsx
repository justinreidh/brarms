"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/pistolrd.jpg",
  "/images/pistolcm.jpg",
  "/images/pistolrd.jpg",
  "/images/pistolcm.jpg",
];

export function ProductGallery() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToNext = () => {
    document.getElementById("product-details")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={images[current]}
            alt={`Product image ${current + 1}`}
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      {/* Previous */}
      <button
        onClick={previous}
        aria-label="Previous image"
        className="absolute left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-xl font-light text-white backdrop-blur-sm transition hover:bg-black/60 md:left-10"
      >
        &lt;
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-xl font-light text-white backdrop-blur-sm transition hover:bg-black/60 md:right-10"
      >
        &gt;
      </button>

      {/* Scroll Down */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll to product details"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition hover:text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Explore
        </span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-2xl font-light"
        >
          ↓
        </motion.span>
      </button>
    </section>
  );
}