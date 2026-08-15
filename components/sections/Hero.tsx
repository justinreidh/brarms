import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { DarkOverlay } from "@/components/animations/DarkOverlay";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/pistolblk.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Optional dark overlay */}
      <DarkOverlay duration={2.5} />

      {/* Heading */}
      <div className="absolute bottom-12 right-12 z-10 max-w-3xl text-right md:bottom-20 md:right-40">
        <div className="">
            <FadeIn delay={0.0} duration={2}>
                <h1 className="text-5xl font-light leading-[0.9] tracking-[-0.04em] text-white md:text-7xl lg:text-[4rem]">
                    
                </h1>
            </FadeIn>
            <FadeIn delay={0.0} duration={2}>
                <h1 className="text-5xl font-light leading-[0.9] tracking-[-0.04em] text-white md:text-7xl lg:text-[7rem]">
                    T-LOS
                </h1>
            </FadeIn>
        </div>

        <FadeIn delay={0.2} duration={2}>
            <h1 className="text-5xl italic font-light leading-[0.9] tracking-[-0.04em] text-white md:text-7xl lg:text-[3rem]">
                Founder Edition
            </h1>
        </FadeIn>
      </div>
    </section>
  );
}