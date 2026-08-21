"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

const specs = [
  ["Caliber", "10mm"],
  ["Action", "Semi-Automatic"],
  ["Safety", "Single"],
  ["Barrel Length", '5.0"'],
  ["Overall Length", '8.7"'],
  ["Weight", "32.8 oz"],
  ["Capacity", "15 + 1"],
  ["Frame", "Aluminum"],
];

export function ProductDetails() {
  return (
    <section id="product-details" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <Image
        src="/images/pistolrd.jpg"
        alt="B&R Elite Arms"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/65" />

      {/* Content */}
      <section className="relative z-10 flex min-h-screen w-full items-center px-8 py-24 md:px-12 lg:px-20">
        <div className=" mx-auto grid w-full max-w-7xl grid-cols-1 items-center lg:grid-cols-2">

          {/* Left — Product Description */}
          <div className="flex items-center">
            <div className="w-full max-w-2xl">
              <FadeIn>
                <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50">
                  T-LOS | FOUNDER EDITION
                </p>

                <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.04em] md:text-7xl lg:text-8xl">
                  Built for
                  <br />
                  the 10mm.
                </h1>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="mt-10 max-w-xl lg:max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                  Designed with a singular focus on performance, reliability,
                  and refined craftsmanship, the T-LOS Founder Edition brings uncompromising
                  engineering to every component. From its precision-machined
                  frame to its carefully tuned action, every element has been
                  considered to create a firearm that performs when it matters
                  most while maintaining the fit and finish expected of a
                  premium product.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="mt-10 space-y-4 text-sm text-white/75">
                  <li className="flex gap-4">
                    <span className="text-white/40">01</span>
                    <span>Precision-machined components</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-white/40">02</span>
                    <span>Performance-tuned action</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-white/40">03</span>
                    <span>Ergonomic competition-inspired design</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-white/40">04</span>
                    <span>Built for durability and long-term reliability</span>
                  </li>
                </ul>
              </FadeIn>
            </div>
          </div>

          {/* Right — Specifications */}
          <div className="flex items-center lg:justify-end">
            <FadeIn delay={0.15}>
              <div className="w-full max-w-2xl lg:ml-auto ">
                <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/50">
                  Specifications
                </p>

                <div className="w-full border-t border-white/20">
                {specs.map(([label, value]) => (
                    <div
                    key={label}
                    className="grid grid-cols-[180px_180px] border-b border-white/15 py-5"
                    >
                    <span className="text-left text-xs uppercase tracking-[0.2em] text-white/45">
                        {label}
                    </span>

                    <span className="text-left text-sm text-white/85 md:text-base">
                        {value}
                    </span>
                    </div>
                ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </section>
  );
}