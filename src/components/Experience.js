import profile from "@/data/profile.json";

/**
 * Experience - Server Component.
 * Displays a vertical timeline from profile.experience (role, org if present, period, summary).
 * Hides the entire section if the list is empty.
 */
export default function Experience() {
  const rawList = Array.isArray(profile.experience) ? profile.experience : [];
  const experienceList = rawList.filter(
    (item) => item && (item.role || item.summary)
  );

  if (experienceList.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <p className="label-mono mb-2 text-accent">Experience</p>
          <h2
            id="experience-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text)" }}
          >
            Work Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl">
          <ol
            className="relative ml-2.5 space-y-8 border-l border-[var(--color-border)] sm:ml-4"
            role="list"
          >
            {experienceList.map((item, idx) => {
              const hasOrg = Boolean(
                item.org && typeof item.org === "string" && item.org.trim() !== ""
              );

              return (
                <li key={idx} className="relative pl-6 sm:pl-8">
                  {/* Timeline dot centered on vertical line */}
                  <span
                    className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]"
                    aria-hidden="true"
                  />

                  {/* Card content */}
                  <div className="card">
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                      <h3
                        className="text-lg font-semibold tracking-tight"
                        style={{ color: "var(--color-text)" }}
                      >
                        {item.role}
                      </h3>
                      {item.period && (
                        <span className="label-mono rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-0.5 text-xs">
                          {item.period}
                        </span>
                      )}
                    </div>

                    {/* Organization - rendered ONLY if present */}
                    {hasOrg && (
                      <p className="mb-3 text-sm font-medium text-accent">
                        {item.org}
                      </p>
                    )}

                    {item.summary && (
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {item.summary}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
