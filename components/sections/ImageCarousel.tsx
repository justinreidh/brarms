"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "/images/pistolrd.jpg",
  "/images/pistolcm.jpg",
  "/images/pistolrd.jpg",
  "/images/pistolrd.jpg",
  "/images/pistolrd.jpg",
];

export function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => Math.min(prev + 1, images.length - 3));
  };

  const previous = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full">
      {/* Viewport */}
      <div className="min-w-0 overflow-hidden">
        {/* Animated track */}
        <motion.div
          className="flex gap-4"
          animate={{
            x: `calc(-${current} * (33.333% + 5.333px))`,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative aspect-[5/4]  w-[calc((100%-2rem)/3)] shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 30vw, 16vw"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Previous */}
      <button
        onClick={previous}
        disabled={current === 0}
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-lg font-light text-white backdrop-blur-sm transition hover:bg-black/65 disabled:opacity-0"
        aria-label="Previous images"
      >
        &lt;
      </button>

      {/* Next */}
      <button
        onClick={next}
        disabled={current === images.length - 3}
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-lg font-light text-white backdrop-blur-sm transition hover:bg-black/65 disabled:opacity-0"
        aria-label="Next images"
      >
        &gt;
      </button>
    </div>
  );
}