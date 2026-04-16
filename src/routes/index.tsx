import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Award } from "@/components/portfolio/Award";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yash Bisen — React Native & Android Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Yash Bisen — React Native & Android engineer building production mobile apps shipped to App Store & Play Store. Code Commander of the Year 2025.",
      },
      { property: "og:title", content: "Yash Bisen — Mobile Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "React Native & Android engineer. Live apps on App Store & Play Store. Code Commander of the Year 2025.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground selection:bg-laser selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Award />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
