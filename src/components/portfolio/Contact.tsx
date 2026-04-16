import { profile } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yash-bisen-820b2420a",
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Yash-bisen",
    href: profile.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 lg:px-12 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="SECTION.06 / UPLINK"
          title="Let's Build"
          subtitle="Open to mobile engineering roles, freelance contracts and product collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 vellum-panel rounded-sm p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle mb-4">
                READY_TO_DEPLOY
              </p>
              <h3 className="text-3xl lg:text-5xl font-extrabold tracking-tighter mb-6 text-balance">
                Have a product
                <br />
                that needs to ship<span className="text-laser">?</span>
              </h3>
              <p className="text-ink-subtle text-base lg:text-lg max-w-md text-pretty mb-8">
                Send a message — I respond within 24 hours.
              </p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="self-start inline-flex items-center gap-3 bg-ink text-primary-foreground px-7 py-4 font-mono text-[11px] uppercase tracking-widest hover:bg-laser transition-colors rounded"
            >
              <Mail size={14} />
              {profile.email}
            </a>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="vellum-panel rounded-sm p-5 flex items-center gap-4 hover:border-laser/40 hover:-translate-y-0.5 transition-all group"
              >
                <div className="size-10 bg-secondary rounded-sm flex items-center justify-center group-hover:bg-ink group-hover:text-primary-foreground transition-colors">
                  <l.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
                    {l.label}
                  </p>
                  <p className="text-sm font-semibold truncate">{l.value}</p>
                </div>
                <span className="text-ink-subtle group-hover:text-laser transition-colors">
                  →
                </span>
              </a>
            ))}
            <div className="vellum-panel rounded-sm p-5 flex items-center gap-4">
              <div className="size-10 bg-secondary rounded-sm flex items-center justify-center">
                <MapPin size={16} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
                  Location
                </p>
                <p className="text-sm font-semibold">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-ink-subtle/10 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-ink-subtle">
          <span>© {new Date().getFullYear()} Yash Bisen — All systems operational</span>
          <span>Built with React + TanStack</span>
        </footer>
      </div>
    </section>
  );
}
