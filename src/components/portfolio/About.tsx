import { about } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative px-6 lg:px-12 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="SECTION.01 / ABOUT"
          title="What I Build"
          subtitle="A snapshot of the modules I deploy across mobile teams — from native Android cores to cross-platform release engines."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {about.map((m, i) => (
            <article
              key={m.title}
              className="vellum-panel rounded-sm p-6 lg:p-8 group hover:border-laser/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
                  {m.code}
                </span>
                <div className="size-2 bg-laser/40 rounded-full group-hover:bg-laser group-hover:shadow-[0_0_10px_var(--laser)] transition-all" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">
                {m.title}
              </h3>
              <p className="text-ink-subtle text-sm leading-relaxed text-pretty">
                {m.desc}
              </p>
              <div className="mt-6 pt-4 border-t border-ink-subtle/10 flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
                  STATUS
                </span>
                <span className="font-mono text-[10px] text-laser">OPERATIONAL</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
