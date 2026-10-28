import profile from "@/data/profile.json";
import HeroPhoto from "@/components/HeroPhoto";
import { MapPin, ExternalLink, Download } from "lucide-react";

/* Brand SVG paths (24×24 viewBox) for social media buttons */
const ICONS = {
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
};

const SOCIAL_CONFIG = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
];

/**
 * Hero - Server Component.
 * Displays designation (large), name, tagline, location, buttons, social links,
 * and HeroPhoto (Client Component with avatar fallback).
 */
export default function Hero() {
  const {
    name,
    designation,
    tagline,
    location,
    photo,
    resume,
    socials = {},
  } = profile;

  const activeSocials = SOCIAL_CONFIG.filter(
    ({ key }) => socials && socials[key] && socials[key].trim() !== ""
  );

  return (
    <section
      id="home"
      aria-labelledby="hero-designation"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Photo column: above text on mobile (order-1), right column on desktop (order-2) */}
          <div className="order-1 flex justify-center md:order-2 md:col-span-5 md:justify-end">
            <HeroPhoto src={photo} name={name} />
          </div>

          {/* Text column: below photo on mobile (order-2), left column on desktop (order-1) */}
          <div className="order-2 flex flex-col items-center text-center md:order-1 md:col-span-7 md:items-start md:text-left">
            {/* Name / Greeting */}
            {name && (
              <p className="mb-2 text-base font-semibold tracking-wide text-accent sm:text-lg">
                Hi, I&apos;m {name}
              </p>
            )}

            {/* Designation (Large) */}
            {designation && (
              <h1
                id="hero-designation"
                className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: "var(--color-text)" }}
              >
                {designation}
              </h1>
            )}

            {/* Tagline */}
            {tagline && (
              <p
                className="mb-5 max-w-xl text-base leading-relaxed sm:text-lg"
                style={{ color: "var(--color-text-muted)" }}
              >
                {tagline}
              </p>
            )}

            {/* Location */}
            {location && (
              <div
                className="mb-8 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-medium sm:text-sm"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg-card)",
                  color: "var(--color-text-muted)",
                }}
              >
                <MapPin
                  className="h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{location}</span>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-inverse)",
                }}
              >
                View Projects
              </a>

              {/* View Resume (opens in new tab) */}
              {resume && (
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-accent)] hover:text-accent focus-visible:outline-2"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg-card)",
                    color: "var(--color-text)",
                  }}
                >
                  <span>View Resume</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}

              {/* Download Resume */}
              {resume && (
                <a
                  href={resume}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-accent)] hover:text-accent focus-visible:outline-2"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg-card)",
                    color: "var(--color-text)",
                  }}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download Resume</span>
                </a>
              )}
            </div>

            {/* Social icon buttons */}
            {activeSocials.length > 0 && (
              <div className="mt-8">
                <p className="sr-only">Social links</p>
                <ul
                  className="flex flex-wrap items-center justify-center gap-3 md:justify-start"
                  role="list"
                >
                  {activeSocials.map(({ key, label }) => (
                    <li key={key}>
                      <a
                        href={socials[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name || "Md Sabbir"} on ${label}`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors hover:border-[var(--color-accent)] hover:text-accent focus-visible:outline-2"
                        style={{
                          borderColor: "var(--color-border)",
                          backgroundColor: "var(--color-bg-card)",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {ICONS[key]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
