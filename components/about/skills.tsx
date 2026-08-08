import type { ReactNode } from "react";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "C#",
  ".NET",
  "Python",
  "Java",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Git",
  "Docker",
  "SCRUM",
  "Kanban",
];

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-foreground font-serif text-2xl font-medium tracking-tight">
        Habilidades
      </h2>

      <div className="rounded-4xl border border-foreground/5 bg-foreground/2 p-2 sm:p-4 dark:bg-foreground/5">
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/8 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/85 sm:text-[15px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}