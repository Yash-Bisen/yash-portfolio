import { award } from "@/data/portfolio";
import { Award as AwardIcon, Sparkles } from "lucide-react";

export function Award() {
  return (
    <section id="award" className="relative px-6 lg:px-12 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative vellum-panel rounded-sm p-8 lg:p-16 overflow-hidden">
          {/* Decorative background */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 size-64 rounded-full bg-laser/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 size-64 rounded-full bg-laser/10 blur-3xl"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="relative size-40 lg:size-48 flex items-center justify-center animate-float">
                <div className="absolute inset-0 rounded-full bg-laser/10 border border-laser/30" />
                <div className="absolute inset-3 rounded-full bg-laser/15 border border-laser/40" />
                <div className="absolute inset-6 rounded-full bg-ink flex items-center justify-center shadow-2xl">
                  <AwardIcon className="text-laser" size={48} strokeWidth={1.5} />
                </div>
                <Sparkles
                  className="absolute -top-2 -right-2 text-laser"
                  size={20}
                />
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-laser">
                  AWARD.LOG // {award.date}
                </span>
                <span className="font-mono text-[10px] text-laser border border-laser/30 px-2 py-0.5 bg-laser/5 rounded-sm">
                  VERIFIED
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tighter mb-3 text-balance">
                {award.title}
                <span className="text-laser">.</span>
              </h2>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle mb-5">
                Issued by — {award.org}
              </p>
              <p className="text-ink-subtle text-base lg:text-lg leading-relaxed max-w-3xl text-pretty">
                {award.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
