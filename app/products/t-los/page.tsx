"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-primary text-white">
      <section className="flex min-h-screen w-full items-center justify-center px-8 py-30">
        <div className="w-full max-w-2xl text-center">
          <FadeIn>
           

            <h1 className="font-h text-6xl font-light leading-[0.9] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              T-LOS
            </h1>
            <h1>
                Founders Edition
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
              Designed specifically for the 10mm.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-14 space-y-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  Specs
                </p>

                <a
                  href="mailto:info@brelitearms.com"
                  className="text-lg text-white/80 transition hover:text-white md:text-xl"
                >
                  Specs here
                </a>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  More Info
                </p>

                <p
                  className="text-lg text-white/80 transition hover:text-white md:text-xl"
                >
                  More info
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}