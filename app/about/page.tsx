import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Perfil",
  description: "Acerca de mí, mi experiencia y habilidades.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      
<section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
  <FadeIn delay={0.5}>
    <div className="border-foreground/5 bg-foreground/1.5 dark:bg-foreground/3 rounded-4xl border p-8 sm:p-12">
      <h1 className="text-foreground font-serif text-[1.75rem] font-medium tracking-tight sm:text-[2rem]">
        ¡Hola! soy{" "}
        <span className="border-foreground/30 border-b pb-0.5">
          Michael T
        </span>
        .
      </h1>

      <div className="text-foreground/75 mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight sm:text-[18px]">
        <p>
          Un{" "}
          <strong className="text-foreground font-semibold">
            Ingeniero de Sistemas
          </strong>{" "}
          apasionado por crear software que resuelva problemas reales. Me
          interesa especialmente construir aplicaciones web y móviles que
          combinen una buena experiencia de usuario con{" "}
          <strong className="text-foreground font-semibold">
            soluciones sólidas, escalables y mantenibles
          </strong>
          .
        </p>

        <p>
          Mi experiencia se ha centrado en el{" "}
          <strong className="text-foreground font-semibold">
            desarrollo full-stack
          </strong>
          , trabajando principalmente con tecnologías como C#, Javascript,
          Java, Python y BD. Disfruto entender cómo funcionan
          las cosas de principio a fin, desde la interfaz hasta la lógica del
          servidor y la infraestructura.
        </p>

        <p>
          Actualmente sigo creciendo como desarrollador y explorando nuevas
          formas de{" "}
          <strong className="text-foreground font-semibold">
            construir productos digitales útiles y bien estructurados
          </strong>
          . Siempre estoy buscando nuevos retos que me permitan aprender,
          aportar mis conocimientos y convertir ideas en software que realmente
          genere valor.
        </p>
      </div>
    </div>
  </FadeIn>
</section>



      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
