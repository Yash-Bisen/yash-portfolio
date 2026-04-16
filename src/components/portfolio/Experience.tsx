import { experience } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 lg:px-12 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="SECTION.03 / DEPLOYMENT_LOG"
          title="Experience"
          subtitle="Production deployments — chronologically logged."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-3 lg:left-1/2 top-0 bottom-0 w-px bg-ink-subtle/20"
          />
          <div className="flex flex-col gap-12">
            {experience.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={e.role + e.org}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
                >
                  <div
                    className={`hidden lg:block ${isLeft ? "" : "lg:col-start-2"}`}
                  />
                  <div
                    className={`relative pl-12 lg:pl-0 ${
                      isLeft ? "lg:pr-12 lg:text-right lg:col-start-1" : "lg:pl-12 lg:col-start-2"
                    }`}
                  >
                    <div
                      className={`absolute top-3 size-3 bg-laser rounded-full shadow-[0_0_12px_var(--laser)] left-2 lg:left-auto ${
                        isLeft ? "lg:right-[-6.5px]" : "lg:left-[-6.5px]"
                      }`}
                    />
                    <div className="vellum-panel p-6 lg:p-8 rounded-sm hover:border-laser/40 transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-laser">
                          {e.code}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle tabular-nums">
                          {e.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight">
                        {e.role}
                      </h3>
                      <p className="text-ink-subtle text-sm font-medium mb-4">
                        @ {e.org}
                      </p>
                      <ul
                        className={`flex flex-col gap-2 text-sm text-ink-subtle ${
                          isLeft ? "lg:text-right" : ""
                        }`}
                      >
                        {e.bullets.map((b) => (
                          <li key={b} className="leading-relaxed">
                            — {b}
                          </li>
                        ))}
                      </ul>
                      <div
                        className={`flex flex-wrap gap-1.5 mt-5 ${
                          isLeft ? "lg:justify-end" : ""
                        }`}
                      >
                        {e.stack.map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-secondary text-ink-subtle rounded-sm"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
