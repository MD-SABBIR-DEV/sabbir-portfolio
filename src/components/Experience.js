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
                  {/* Timeline dot centered on vertical line with glow effect */}
                  <span
                    className="absolute -left-[7px] top-6 h-3.5 w-3.5 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20 shadow-[0_0_8px_var(--color-cyan)]"
                    style={{ "--color-cyan": "#06b6d4" }}
                    aria-hidden="true"
                  />

                  {/* Sleek glassmorphic card with modern hover effect */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-white/[0.04]">
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                      <h3
                        className="text-lg font-semibold tracking-tight"
                        style={{ color: "var(--color-text)" }}
                      >
                        {item.role}
                      </h3>
                      {item.period && (
                        <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium text-cyan-400">
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
