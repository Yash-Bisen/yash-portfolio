import { projects } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Apple, ExternalLink, Play } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 lg:px-12 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="SECTION.04 / SHIPPED"
          title="Projects"
          subtitle="Live on App Store and Play Store — built for real users at scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="vellum-panel rounded-sm p-6 lg:p-8 flex flex-col group hover:-translate-y-1 hover:border-laser/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-laser">
                  PRJ.{String(i + 1).padStart(2, "0")} // {p.accent}
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="size-1.5 bg-laser rounded-full animate-pulse-dot" />
                  <span className="font-mono text-[9px] uppercase text-ink-subtle">
                    LIVE
                  </span>
                </div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-ink-subtle text-sm leading-relaxed mb-6 text-pretty flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-secondary text-ink-subtle rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-ink-subtle/10">
                {p.playStore && (
                  <a
                    href={p.playStore}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-ink text-primary-foreground px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest hover:bg-laser transition-colors rounded"
                  >
                    <Play size={12} fill="currentColor" />
                    Play Store
                  </a>
                )}
                {p.appStore && (
                  <a
                    href={p.appStore}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-ink text-primary-foreground px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest hover:bg-laser transition-colors rounded"
                  >
                    <Apple size={12} />
                    App Store
                  </a>
                )}
                {p.website && (
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-ink-subtle/30 text-ink px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest hover:border-ink hover:bg-secondary transition-colors rounded"
                  >
                    <ExternalLink size={12} />
                    Website
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
