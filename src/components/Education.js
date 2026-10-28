import profile from "@/data/profile.json";

/**
 * Extracts a representative year for sorting education newest-first.
 * "Present" ranks as highest (current).
 */
function getEducationYear(period) {
  if (!period || typeof period !== "string") return 0;
  if (/present/i.test(period)) return 9999;
  const years = period.match(/\d{4}/g);
  if (!years) return 0;
  return Math.max(...years.map(Number));
}

/**
 * Education - Server Component.
 * Displays a vertical timeline from profile.education (degree, institution, period, note if present),
 * ordered newest first.
 */
export default function Education() {
  const rawList = Array.isArray(profile.education) ? profile.education : [];

  const educationList = [...rawList].sort(
    (a, b) => getEducationYear(b.period) - getEducationYear(a.period)
  );

  if (educationList.length === 0) {
    return null;
  }

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-t border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <p className="label-mono mb-2 text-accent">Education</p>
          <h2
            id="education-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text)" }}
          >
            Education
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl">
          <ol
            className="relative ml-2.5 space-y-8 border-l border-[var(--color-border)] sm:ml-4"
            role="list"
          >
            {educationList.map((item, idx) => {
              const hasNote = Boolean(
                item.note && typeof item.note === "string" && item.note.trim() !== ""
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
                        {item.degree}
                      </h3>
                      {item.period && (
                        <span className="label-mono rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-0.5 text-xs">
                          {item.period}
                        </span>
                      )}
                    </div>

                    {item.institution && (
                      <p className="text-sm font-medium text-accent">
                        {item.institution}
                      </p>
                    )}

                    {hasNote && (
                      <p
                        className="mt-2 text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {item.note}
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
