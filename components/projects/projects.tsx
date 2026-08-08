import {
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  image: string;
  imageAlt: string;
  url: string;
};

const PROJECTS: Project[] = [
  {
    id: "unihaven",
    icon: GraduationCap,
    iconLabel: "UniHaven",
    title:
      "Repositorio académico para compartir proyectos de grado, investigaciones y trabajos de aula.",
    description:
      "Desarrollé UniHaven como un espacio centralizado para publicar y consultar proyectos académicos, con integración y respaldo en GitHub.",
    meta: "Desarrollador de Software, 2024",
    image: "/unihaven.png",
    imageAlt: "UniHaven repositorio académico",
    url: "https://unihaven.vercel.app/",
  },
  {
    id: "emprende-upc",
    icon: Lightbulb,
    iconLabel: "Emprende UPC",
    title:
      "Plataforma para explorar, gestionar y fortalecer proyectos de emprendimiento.",
    description:
      "Emprende UPC permite explorar iniciativas de emprendimiento, acceder a material de formación y gestionar proyectos propios desde una misma plataforma.",
    meta: "Desarrollador de Software, 2024",
    image: "/emprende.png",
    imageAlt: "Emprende UPC plataforma de emprendimiento",
    url: "https://emprende-upc.vercel.app/",
  },
  {
    id: "red-profesional",
    icon: Users,
    iconLabel: "Red Profesional",
    title:
      "Plataforma para conectar clientes con profesionales y facilitar la contratación de servicios.",
    description:
      "Desarrollé una plataforma orientada a conectar clientes con profesionales en Aguachica, facilitando la búsqueda de servicios y la comunicación entre usuarios.",
    meta: "Desarrollador de Software, 2025",
    image: "/jobp.png",
    imageAlt: "Red Profesional plataforma de servicios",
    url: "https://jobplatform-rho-hazel.vercel.app/",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section>
      {withHeadline ? (
        <div className="mx-auto mb-10 w-full max-w-[1040px] text-center">
          <h2 className="text-foreground font-serif text-2xl font-medium tracking-tight sm:text-3xl">
            Proyectos recientes
          </h2>

          <p className="text-foreground/65 mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed sm:text-[16px]">
            Algunos de los proyectos de software en los que he trabajado, desde
            plataformas académicas hasta aplicaciones web orientadas a resolver
            problemas reales.
          </p>
        </div>
      ) : null}

      <div className="columns-1 gap-8 md:columns-2 md:gap-10">
        {items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {viewMoreVisible ? (
        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/projects"
            className="border-foreground/8 focus-ring group bg-background text-foreground hover:bg-foreground/5 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Mostrar más
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      ) : null}
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mx-auto mb-8 w-full max-w-[520px] break-inside-avoid md:mb-10"
    >
      <article className="group">
        <div className="mb-3 flex items-center gap-2 px-1">
          <span
            className="bg-foreground/5 text-foreground/70 inline-flex h-8 w-8 items-center justify-center rounded-xl"
            aria-hidden="true"
          >
            <Icon className="h-4 w-4" />
          </span>

          <span className="text-foreground/60 text-sm font-medium tracking-tight">
            {project.iconLabel}
          </span>
        </div>

        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar ${project.iconLabel}`}
          className="focus-ring block"
        >
          <div className="project-card__image ring-foreground/5 bg-foreground/5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1">
            <div className="project-card__image-inner flex h-full w-full items-center justify-center p-3 transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="relative h-full w-full">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-contain"
                  priority={index < 2}
                />
              </div>
            </div>

            <div className="bg-background/90 text-foreground absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-xl opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-2.5 px-1 pt-4 pb-1">
          <h3 className="text-foreground text-[20px] leading-[1.2] font-medium tracking-tight sm:text-[22px]">
            {project.title}
          </h3>

          <p className="text-foreground/65 text-[14px] leading-normal tracking-tight sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="text-foreground/50 px-1 pb-2 text-[12px] tracking-tight">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
