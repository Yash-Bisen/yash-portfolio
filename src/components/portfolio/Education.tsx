import { education } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative px-6 lg:px-12 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader code="SECTION.05 / TRAINING" title="Education" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {education.map((e, i) => (
            <article
              key={e.school + e.degree}
              className="vellum-panel rounded-sm p-6 lg:p-7 hover:border-laser/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="size-10 rounded-sm bg-ink text-primary-foreground flex items-center justify-center">
                  <GraduationCap size={18} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
                  EDU.{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-widest text-laser mb-2">
                {e.degree}
              </p>
              <h3 className="text-lg font-bold tracking-tight mb-3 leading-snug">
                {e.school}
              </h3>
              <p className="text-ink-subtle text-sm mb-5 flex-1">{e.location}</p>

              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-ink-subtle/10">
                <div>
                  <p className="font-mono text-[9px] uppercase text-ink-subtle">
                    Period
                  </p>
                  <p className="font-mono text-xs font-semibold tabular-nums">
                    {e.date}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase text-ink-subtle">
                    Grade
                  </p>
                  <p className="font-mono text-xs font-semibold text-laser tabular-nums">
                    {e.grade}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
