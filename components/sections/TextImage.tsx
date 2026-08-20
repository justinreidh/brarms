import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";
import { DarkOverlay } from "../animations/DarkOverlay";

export function TextImage() {
  return (
    <section className="flex md:min-h-screen w-full flex-col bg-chart-5 text-white md:flex-row">
      {/* Text */}
      <div className="flex w-full items-center justify-center px-8 pt-20 md:py-20 md:w-1/2 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <FadeIn>
            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              About Us
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
              We believe exceptional products are built through a commitment to
              quality, thoughtful design, and an uncompromising attention to
              detail. Every piece we create reflects our pursuit of craftsmanship
              and our belief that the things we use should be made to last.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Image */}
      <div className="flex w-full items-center justify-start py-8 md:py-16 px-8 md:pl-0 md:w-1/2 lg:pr-16">
        <div className="relative aspect-[5/3] w-full max-w-2xl overflow-hidden">
          <DarkOverlay />
          <Image
            src="/images/pistolrd.jpg"
            alt="About us"
            fill
            preload
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}