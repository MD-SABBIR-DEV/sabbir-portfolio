import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * ProjectCard - Server Component.
 * Displays project screenshot with fixed aspect ratio, title, tagline,
 * up to 4 stack badges, and a clearly visible "View Details" button linking to /projects/[slug].
 */
export default function ProjectCard({ project }) {
  if (!project) return null;

  const stackBadges = Array.isArray(project.stack)
    ? project.stack.slice(0, 4)
    : [];

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

        {/* Action: View Details button */}
        <div className="mt-6 pt-2">
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
