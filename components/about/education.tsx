import type { ReactNode } from "react";

type Entry = {
  school: string;
  degree: string;
  period: string;
  logo: string;
};

const ENTRIES: Entry[] = [
  {
    school: "Universidad Popular del Cesar",
    degree: "Ingeniería de Sistemas",
    period: "2020 – 2024",
    logo: "/upc.png",
  },
  {
    school: "Open English",
    degree: "Inglés B2 (MCER)",
    period: "2022",
    logo: "/open.png",
  },
  {
    school: "SENA",
    degree: "Técnico en Asistencia Administrativa",
    period: "2018 – 2019",
    logo: "/sena.png",
  },
];

const ROW_HEIGHT = 64;

export function Education(): ReactNode {
  return (
    <section>
      <h2 className="text-foreground font-serif text-2xl font-medium tracking-tight">
        Educación
      </h2>

      <ul className="mt-6 space-y-3">
        {ENTRIES.map((entry) => (
          <li
            key={`${entry.school}-${entry.period}`}
            className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
            style={{ minHeight: ROW_HEIGHT }}
          >
            <SchoolLogo entry={entry} />

            <div className="min-w-0">
              <p className="text-foreground truncate font-medium">
                {entry.school}
              </p>

              <p className="text-foreground/60 mt-0.5 text-sm">
                {entry.degree}
                <span className="mx-1.5">•</span>
                {entry.period}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SchoolLogo({ entry }: { entry: Entry }): ReactNode {
  return (
    <span
      className="border-foreground/15 bg-white inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border"
      style={{ borderRadius: 14 }}
    >
      <img
        src={entry.logo}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
        draggable={false}
      />
    </span>
  );
}