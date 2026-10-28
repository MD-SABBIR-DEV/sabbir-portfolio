import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import projectsData from "@/data/projects.json";

/**
 * Pre-renders all project detail pages at build time.
 */
export async function generateStaticParams() {
  const projects = Array.isArray(projectsData) ? projectsData : [];
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Dynamic metadata generator for project detail pages.
 * Note: params is a Promise in Next.js 15+ and 16, must be awaited.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Projects | Md Sabbir`,
    description: project.tagline || project.description,
  };
}

/**
 * Project Details Page - Server Component.
 * params is a Promise that is awaited per current Next.js specification.
 */
export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const hasLiveLink = Boolean(
    project.links?.live && typeof project.links.live === "string" && project.links.live.trim() !== ""
  );

  const hasClientLink = Boolean(
    project.links?.client && typeof project.links.client === "string" && project.links.client.trim() !== ""
  );

  const hasStack = Array.isArray(project.stack) && project.stack.length > 0;
  const hasFeatures = Array.isArray(project.features) && project.features.length > 0;
  const hasChallenges = Array.isArray(project.challenges) && project.challenges.length > 0;
  const hasImprovements = Array.isArray(project.improvements) && project.improvements.length > 0;

  return (
    <article className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded text-sm font-medium transition-colors hover:text-accent focus-visible:outline-2"
            style={{ color: "var(--color-text-muted)" }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Header: Title, Tagline, & Action Buttons */}
        <header className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="label-mono mb-2 text-accent">Project Details</p>
            <h1
              className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: "var(--color-text)" }}
            >
              {project.title}
            </h1>
            {project.tagline && (
              <p
                className="mt-3 max-w-2xl text-base sm:text-lg"
                style={{ color: "var(--color-text-muted)" }}
              >
                {project.tagline}
              </p>
            )}
          </div>

          {/* Action buttons (Live Demo & GitHub Client) */}
          {(hasLiveLink || hasClientLink) && (
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {hasLiveLink && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text-inverse)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}

              {hasClientLink && (
                <a
                  href={project.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--color-accent-dim)] hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                  style={{ color: "var(--color-text)" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub (Client)</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Hero image */}
        {project.image && (
          <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] shadow-2xl">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-8">
          {/* Description */}
          {project.description && (
            <section
              aria-labelledby="description-heading"
              className="card"
            >
              <h2
                id="description-heading"
                className="mb-3 text-lg font-semibold tracking-tight"
                style={{ color: "var(--color-text)" }}
              >
                Overview
              </h2>
              <p
                className="text-base leading-relaxed sm:text-lg"
                style={{ color: "var(--color-text-muted)" }}
              >
                {project.description}
              </p>
            </section>
          )}

          {/* Main technology stack */}
          {hasStack && (
            <section
              aria-labelledby="stack-heading"
              className="card"
            >
              <h2
                id="stack-heading"
                className="mb-4 text-xl font-semibold tracking-tight"
                style={{ color: "var(--color-text)" }}
              >
                Main technology stack
              </h2>
              <ul className="flex flex-wrap gap-2.5" role="list">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-1.5 font-mono text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    <span
                      className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Key features */}
          {hasFeatures && (
            <section
              aria-labelledby="features-heading"
              className="card"
            >
              <h2
                id="features-heading"
                className="mb-4 text-xl font-semibold tracking-tight"
                style={{ color: "var(--color-text)" }}
              >
                Key features
              </h2>
              <ul className="space-y-3" role="list">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span
                      className="mt-1 shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      <CheckCircle2 size={18} />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenges faced */}
          {hasChallenges && (
            <section
              aria-labelledby="challenges-heading"
              className="card"
            >
              <h2
                id="challenges-heading"
                className="mb-4 text-xl font-semibold tracking-tight"
                style={{ color: "var(--color-text)" }}
              >
                Challenges faced
              </h2>
              <ul className="space-y-3" role="list">
                {project.challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span
                      className="mt-1 shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      <AlertCircle size={18} />
                    </span>
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Future improvements */}
          {hasImprovements && (
            <section
              aria-labelledby="improvements-heading"
              className="card"
            >
              <h2
                id="improvements-heading"
                className="mb-4 text-xl font-semibold tracking-tight"
                style={{ color: "var(--color-text)" }}
              >
                Future improvements
              </h2>
              <ul className="space-y-3" role="list">
                {project.improvements.map((improvement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span
                      className="mt-1 shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      <Sparkles size={18} />
                    </span>
                    <span className="leading-relaxed">{improvement}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Bottom navigation / actions */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded text-sm font-medium transition-colors hover:text-accent focus-visible:outline-2"
              style={{ color: "var(--color-text-muted)" }}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to all projects</span>
            </Link>

            {(hasLiveLink || hasClientLink) && (
              <div className="flex flex-wrap items-center gap-3">
                {hasLiveLink && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-text-inverse)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}

                {hasClientLink && (
                  <a
                    href={project.links.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--color-accent-dim)] hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                    style={{ color: "var(--color-text)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub (Client)</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
