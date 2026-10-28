import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import projectsData from "@/data/projects.json";

export default function Home() {
  const projects = Array.isArray(projectsData)
    ? [...projectsData].sort((a, b) => (a.order || 0) - (b.order || 0))
    : [];

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />

      {projects.length > 0 && (
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="border-t border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mb-10">
              <p className="label-mono mb-2 text-accent">Projects</p>
              <h2
                id="projects-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--color-text)" }}
              >
                Featured Projects
              </h2>
            </div>

            {/* Responsive grid: 1 column mobile, 2 tablet, 3 desktop */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Contact />
    </>
  );
}

