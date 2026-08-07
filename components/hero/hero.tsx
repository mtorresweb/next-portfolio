import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-foreground text-[20px] leading-tight font-medium tracking-tight">
              Hola
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              soy Michael
            </p>

            <h1 className="text-foreground text-[2.75rem] leading-[1.05] font-medium tracking-tight md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block whitespace-nowrap">
                Ingeniero de Sistemas &
              </span>
              <span className="block whitespace-nowrap">
                Desarrollador de Software
              </span>
            </h1>

            <p className="text-foreground/65 max-w-[42ch] text-[22px] leading-[1.4] tracking-tight">
              Ingeniero y desarrollador de software especializado en crear
              aplicaciones web y móviles con enfoque en la experiencia del
              usuario.
            </p>

            <HeroCtas />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
