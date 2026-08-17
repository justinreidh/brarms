import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { DarkOverlay } from "@/components/animations/DarkOverlay";

export function Details() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/pistolcm.jpg"
        alt=""
        fill
        preload
        className="object-cover"
      />

      {/* Optional dark overlay */}
      <DarkOverlay duration={2.5} />

      {/* Heading */}
      <div className="absolute bottom-12 right-12 z-10 max-w-3xl text-right md:bottom-20 md:right-40">
        <FadeIn delay={0.0} duration={2}>
          <h1 className="text-5xl font-light leading-[0.9] tracking-[-0.04em] text-white md:text-7xl lg:text-[4rem]">
            Introducing
          </h1>
        </FadeIn>
        <FadeIn delay={0.1} duration={2}>
          <h1 className="text-5xl font-light leading-[0.9] tracking-[-0.04em] text-white md:text-7xl lg:text-[7rem]">
            T-LOS
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}