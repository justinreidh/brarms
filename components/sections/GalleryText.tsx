import { ImageCarousel } from "./ImageCarousel";
import { FadeIn } from "../animations/FadeIn";

export function GalleryText() {
  return (
    <section className="flex min-h-screen w-full flex-col bg-chart-5 text-white md:flex-row">
      {/* Text */}
      <div className="flex w-full items-center justify-center px-8 py-20 md:w-1/2 lg:px-30">
        <div className="max-w-xl">
          <FadeIn>
          <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.03em] md:text-6xl">
            Our Collection
          </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
            Thoughtfully designed products made with an emphasis on quality,
            craftsmanship, and timeless design.
          </p>
          </FadeIn>
        </div>
      </div>

      {/* Gallery */}
      <div className="flex w-full items-center justify-center px-8 py-16 lg:px-12">
        <div className="w-full ">
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}