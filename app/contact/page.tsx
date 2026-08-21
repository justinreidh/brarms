"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-primary text-white">
      <section className="flex min-h-screen w-full items-center justify-center px-8 py-30">
        <div className="w-full max-w-2xl text-center">
          <FadeIn>
           

            <h1 className="font-h text-6xl font-light leading-[0.9] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Contact
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
              Have a question about our products, need assistance, or want to
              learn more about B&R Elite Arms? Our team would be happy to hear
              from you.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-14 space-y-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  Email
                </p>

                <a
                  href="mailto:info@brelitearms.com"
                  className="text-lg text-white/80 transition hover:text-white md:text-xl"
                >
                  brelitearms@gmail.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  Phone
                </p>

                <a
                  href="tel:+10000000000"
                  className="text-lg text-white/80 transition hover:text-white md:text-xl"
                >
                  (000) 000-0000
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}