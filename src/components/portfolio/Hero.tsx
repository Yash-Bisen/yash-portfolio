import heroPortrait from "@/assets/hero-portrait.jpg";
import { profile } from "@/data/portfolio";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-dvh flex items-center pt-32 pb-20 px-6 lg:px-12"
    >
      <div className="absolute -top-6 left-6 font-mono text-[10px] text-ink-subtle hidden md:block">
        [0,0]
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-ink-subtle hidden md:block">
        [MAX,MAX]
      </div>

      <div className="mx-auto max-w-7xl w-full grid grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left */}
        <div className="col-span-12 lg:col-span-7 flex flex-col animate-fade-up">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-ink" />
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle flex flex-wrap gap-x-6 gap-y-1">
              <span>SYS.REQ: ANDROID/REACT_NATIVE</span>
              <span className="hidden sm:inline text-laser">
                STATUS: AVAILABLE_FOR_HIRE
              </span>
            </div>
          </div>

          <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] leading-[0.85] font-extrabold tracking-tighter uppercase mb-8 text-balance">
            Yash
            <br />
            Bisen<span className="text-laser">.</span>
          </h1>

          <div className="relative max-w-[55ch] mb-12">
            <div className="absolute -inset-4 vellum-panel rounded-sm hidden sm:block -z-10" />
            <p className="text-base lg:text-xl text-ink-subtle font-medium leading-relaxed text-pretty">
              {profile.tagline}{" "}
              <span className="text-ink font-semibold">
                Specializing in React Native & Kotlin
              </span>{" "}
              with zero margin for latency.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/cv.pdf"
              download
              className="bg-ink text-primary-foreground px-7 py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-laser transition-colors flex items-center gap-3 group rounded"
            >
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              Download_CV.pdf
            </a>
            <a
              href="#contact"
              className="vellum-panel text-ink px-7 py-4 font-mono text-[11px] uppercase tracking-widest hover:border-ink transition-colors flex items-center gap-3 rounded"
            >
              <Mail size={14} />
              Initialize Comms
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "10+", l: "Apps Shipped" },
              { v: "2+", l: "Years Exp." },
              { v: "1M+", l: "Users Served" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-sans text-3xl lg:text-4xl font-extrabold tracking-tight">
                  {s.v}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="col-span-12 lg:col-span-5 relative mt-8 lg:mt-0">
          {/* Image */}
          <div className="absolute top-12 -right-4 lg:-right-12 w-full aspect-[4/5] bg-secondary z-0 shadow-2xl overflow-hidden rounded-sm border-2 border-white/50">
            <img
              src={heroPortrait}
              alt="Portrait of Yash Bisen"
              width={800}
              height={1024}
              className="w-full h-full object-cover mix-blend-luminosity opacity-50 hover:opacity-70 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-laser/5 mix-blend-overlay" />
            {/* Scan line */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-laser/60 shadow-[0_0_12px_var(--laser)] animate-scan" />
          </div>

          {/* Award badge */}
          <div className="relative z-10 flex flex-col gap-6">
            <div className="vellum-panel p-6 ml-auto w-full max-w-[340px] rounded-sm lg:translate-x-8 animate-fade-up">
              <div className="w-full h-[2px] bg-laser mb-4" />
              <div className="flex justify-between items-start mb-2">
                <p className="font-mono text-[10px] uppercase tracking-wider text-ink-subtle tabular-nums">
                  ACCREDITATION // 2025
                </p>
                <span className="font-mono text-[10px] text-laser border border-laser/30 px-1.5 py-0.5 bg-laser/5 rounded-sm">
                  VERIFIED
                </span>
              </div>
              <h3 className="text-xl font-bold leading-tight mb-4 text-balance">
                Code Commander
                <br />
                of the Year
              </h3>
              <div className="grid grid-cols-2 gap-2 border-t border-ink-subtle/10 pt-4">
                <div>
                  <p className="font-mono text-[9px] text-ink-subtle uppercase">
                    Awarded
                  </p>
                  <p className="font-mono text-xs font-semibold tabular-nums">
                    JUN 2025
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-ink-subtle uppercase">
                    Issued by
                  </p>
                  <p className="font-mono text-xs font-semibold">IDEALIT</p>
                </div>
              </div>
            </div>

            <div className="vellum-panel p-6 max-w-[340px] mt-4 lg:mt-8 rounded-sm animate-fade-up">
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink-subtle mb-4 border-b border-ink-subtle/20 pb-2">
                Active_Stack_Modules
              </p>
              <ul className="flex flex-col gap-3 font-mono text-[11px]">
                <li className="flex justify-between items-center">
                  <span className="text-ink font-semibold">[REACT_NATIVE]</span>
                  <span className="text-ink-subtle tabular-nums">v0.74+</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-ink font-semibold">[KOTLIN_COROUTINES]</span>
                  <span className="text-ink-subtle">STABLE</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-ink font-semibold">[FIREBASE_RTDB]</span>
                  <span className="text-ink-subtle">ACTIVE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
