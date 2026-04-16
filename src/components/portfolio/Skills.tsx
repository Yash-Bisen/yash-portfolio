import { skills } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 lg:px-12 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="SECTION.02 / STACK"
          title="Skill Schematic"
          subtitle="Calibrated proficiency across the mobile delivery pipeline."
        />

        <div className="vellum-panel rounded-sm p-6 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {skills.map((s) => (
              <div key={s.title} className="group">
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-ink-subtle uppercase tabular-nums">
                      {String(skills.indexOf(s) + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-base">{s.title}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-ink-subtle">
                      {s.group}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-ink-subtle tabular-nums">
                    {s.level}%
                  </span>
                </div>
                <div className="h-1 bg-ink-subtle/15 overflow-hidden rounded-full">
                  <div
                    className="h-full bg-ink group-hover:bg-laser transition-all duration-700 origin-left"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
