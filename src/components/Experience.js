import profile from "@/data/profile.json";

/**
 * Experience - Server Component.
 * Displays floating glassmorphic cards from profile.experience (role, org if present, period, summary).
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

        {/* Clean vertical stack with Neon Edge Accent cards */}
        <div className="max-w-3xl space-y-6">
          {experienceList.map((item, idx) => {
            const hasOrg = Boolean(
              item.org && typeof item.org === "string" && item.org.trim() !== ""
            );

            return (
              <div
                key={idx}
                className="relative bg-white/[0.03] backdrop-blur-md rounded-xl p-6 md:p-8 overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:-translate-y-1 border border-white/5 border-l-4 border-l-cyan-500/40 group-hover:border-l-cyan-400"
              >
                {/* Subtle cybernetic glow accent */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl transition-all duration-300 group-hover:bg-cyan-500/10"
                  aria-hidden="true"
                />

                <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {item.role}
                    </h3>
                    {hasOrg && (
                      <p className="mt-1 text-sm sm:text-base font-medium text-cyan-400">
                        {item.org}
                      </p>
                    )}
                  </div>

                  {item.period && (
                    <span className="self-start shrink-0 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3 py-1 font-mono text-xs tracking-wider text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                      {item.period}
                    </span>
                  )}
                </div>

                {item.summary && (
                  <p className="relative mt-3.5 text-sm leading-relaxed text-slate-400">
                    {item.summary}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
