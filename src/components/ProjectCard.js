import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

/**
 * Clean GitHub icon matching lucide-react styling (lucide-react v1.x removed brand icons).
 */
function Github({ size = 14, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

/**
 * ProjectCard - Server Component.
 * Displays project screenshot with fixed aspect ratio, title, tagline,
 * up to 4 stack badges, optional live demo and github links,
 * and a clearly visible "View Details" button linking to /projects/[slug].
 */
export default function ProjectCard({ project }) {
  if (!project) return null;

  const stackBadges = Array.isArray(project.stack)
    ? project.stack.slice(0, 4)
    : [];

  const hasLive = Boolean(
    project.links?.live &&
      typeof project.links.live === "string" &&
      project.links.live.trim() !== ""
  );

  const hasClient = Boolean(
    project.links?.client &&
      typeof project.links.client === "string" &&
      project.links.client.trim() !== ""
  );

  return (
    <article className="card flex flex-col justify-between overflow-hidden p-0 transition-colors duration-200 hover:border-[var(--color-accent-dim)]">
      {/* Fixed aspect-ratio image */}
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-bg-subtle)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            No preview available
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--color-text)" }}
          >
            {project.title}
          </h3>

          {project.tagline && (
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {project.tagline}
            </p>
          )}

          {stackBadges.length > 0 && (
            <div
              className="mt-4 flex flex-wrap gap-1.5"
              aria-label={`Key technologies for ${project.title}`}
            >
              {stackBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action: Quick Links (Live Demo & GitHub) + View Details button */}
        <div className="mt-6 flex flex-col gap-3 pt-2">
          {(hasLive || hasClient) && (
            <div className="flex flex-wrap items-center gap-2.5">
              {hasLive && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-cyan-400 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-900 hover:border-cyan-500 shadow-sm"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  <span>Live Demo</span>
                </a>
              )}
              {hasClient && (
                <a
                  href={project.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-cyan-400 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-900 hover:border-cyan-500 shadow-sm"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github size={14} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text-inverse)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
            aria-label={`View details for ${project.title}`}
          >
            <span>View Details</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
