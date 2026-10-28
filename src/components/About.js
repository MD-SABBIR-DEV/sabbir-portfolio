import profile from "@/data/profile.json";

/**
 * About - Server Component.
 * Displays paragraphs from profile.about.paragraphs.
 * Shows hobbies as chips ONLY if the list is not empty.
 */
export default function About() {
  const { about } = profile;
  const paragraphs = Array.isArray(about?.paragraphs) ? about.paragraphs : [];
  const hobbies = Array.isArray(about?.hobbies)
    ? about.hobbies.filter((h) => typeof h === "string" && h.trim() !== "")
    : [];
  const hasHobbies = hobbies.length > 0;

  if (paragraphs.length === 0 && !hasHobbies) {
    return null;
  }

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <p className="label-mono mb-2 text-accent">About</p>
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text)" }}
          >
            About Me
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Paragraphs */}
          <div
            className={
              hasHobbies
                ? "space-y-5 text-base leading-relaxed sm:text-lg lg:col-span-8"
                : "max-w-3xl space-y-5 text-base leading-relaxed sm:text-lg lg:col-span-12"
            }
            style={{ color: "var(--color-text-muted)" }}
          >
            {paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Hobbies - rendered ONLY if list is not empty */}
          {hasHobbies && (
            <div className="lg:col-span-4">
              <div className="card">
                <h3 className="label-mono mb-4 text-xs font-semibold text-accent">
                  Hobbies & Interests
                </h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {hobbies.map((hobby, idx) => (
                    <li
                      key={idx}
                      className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-1 text-xs font-medium transition-colors hover:border-[var(--color-accent-dim)] sm:text-sm"
                      style={{ color: "var(--color-text)" }}
                    >
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
