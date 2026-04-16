import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-12 transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-md px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "vellum-panel"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <span className="size-2 bg-laser rounded-full animate-pulse-dot" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-subtle group-hover:text-ink transition-colors">
              {profile.name.split(" ")[0]}_BISEN // PORTFOLIO
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] tracking-[0.15em] uppercase text-ink-subtle hover:text-ink px-3 py-2 rounded transition-colors relative group"
              >
                {l.label}
                <span className="absolute left-3 right-3 bottom-1 h-px bg-laser scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 bg-ink text-primary-foreground px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase hover:bg-laser transition-colors rounded"
          >
            Hire Me <span aria-hidden>→</span>
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-ink p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden mt-2 vellum-panel rounded-md p-4 flex flex-col gap-1 animate-fade-up">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-[0.15em] uppercase text-ink-subtle hover:text-ink px-3 py-3 rounded hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center gap-2 bg-ink text-primary-foreground px-4 py-3 font-mono text-[10px] tracking-[0.2em] uppercase rounded"
            >
              Hire Me →
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
