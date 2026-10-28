import profile from "@/data/profile.json";
import { Mail, Phone, Download, ArrowUpRight } from "lucide-react";

/* Brand SVG paths (24×24 viewBox, currentColor) */
const ICONS = {
  whatsapp: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.73 7.34C8.56 7.34 8.28 7.4 8.05 7.65C7.82 7.9 7.17 8.51 7.17 9.74C7.17 10.97 8.07 12.16 8.2 12.33C8.33 12.5 9.95 15.01 12.44 16.08C14.51 16.97 14.93 16.8 15.38 16.75C15.83 16.71 16.84 16.15 17.05 15.56C17.26 14.97 17.26 14.46 17.2 14.36C17.14 14.26 16.97 14.2 16.72 14.07C16.47 13.95 15.25 13.35 15.02 13.27C14.79 13.19 14.63 13.15 14.46 13.4C14.29 13.65 13.82 14.2 13.67 14.37C13.52 14.54 13.38 14.56 13.13 14.44C12.88 14.32 12.08 14.05 11.13 13.21C10.39 12.55 9.89 11.74 9.74 11.49C9.59 11.24 9.72 11.11 9.85 10.98C9.96 10.87 10.1 10.69 10.23 10.54C10.36 10.39 10.4 10.29 10.49 10.12C10.57 9.95 10.53 9.81 10.47 9.68C10.41 9.56 9.94 8.35 9.73 7.87C9.53 7.4 9.33 7.46 9.17 7.45L8.73 7.34Z" />
    </svg>
  ),
  github: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  facebook: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
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
 * Contact - Server Component.
 * No form, no external service.
 * Displays interactive cards for email, phone, whatsapp, resume, and social links.
 * Each card is an accessible tap target (min 44px) with visible label and text value.
 */
export default function Contact() {
  const {
    email,
    phone,
    whatsapp,
    resume,
    socials = {},
  } = profile;

  // Direct contact channels & resume
  const directItems = [];

  if (email && typeof email === "string" && email.trim() !== "") {
    directItems.push({
      key: "email",
      label: "Email",
      value: email.trim(),
      href: `mailto:${email.trim()}`,
      icon: <Mail className="h-5 w-5 text-accent" aria-hidden="true" />,
      external: false,
    });
  }

  if (phone && typeof phone === "string" && phone.trim() !== "") {
    directItems.push({
      key: "phone",
      label: "Phone",
      value: phone.trim(),
      href: `tel:${phone.replace(/\s+/g, "")}`,
      icon: <Phone className="h-5 w-5 text-accent" aria-hidden="true" />,
      external: false,
    });
  }

  if (whatsapp && typeof whatsapp === "string" && whatsapp.trim() !== "") {
    const cleanNumber = whatsapp.replace(/[^0-9]/g, "");
    if (cleanNumber) {
      directItems.push({
        key: "whatsapp",
        label: "WhatsApp",
        value: whatsapp.startsWith("+") ? whatsapp.trim() : `+${whatsapp.trim()}`,
        href: `https://wa.me/${cleanNumber}`,
        icon: (
          <span className="text-accent" aria-hidden="true">
            {ICONS.whatsapp}
          </span>
        ),
        external: true,
      });
    }
  }

  if (resume && typeof resume === "string" && resume.trim() !== "") {
    directItems.push({
      key: "resume",
      label: "Download Resume",
      value: "resume.pdf",
      href: resume.trim(),
      icon: <Download className="h-5 w-5 text-accent" aria-hidden="true" />,
      download: true,
      external: true,
    });
  }

  // Social links
  const socialItems = SOCIAL_CONFIG.filter(
    ({ key }) =>
      socials &&
      typeof socials[key] === "string" &&
      socials[key].trim() !== ""
  ).map(({ key, label }) => {
    const rawUrl = socials[key].trim();
    const displayValue = rawUrl.replace(/^https?:\/\/(www\.)?/, "");

    return {
      key,
      label,
      value: displayValue,
      href: rawUrl,
      icon: (
        <span className="text-accent" aria-hidden="true">
          {ICONS[key]}
        </span>
      ),
      external: true,
    };
  });

  const hasAnyContact = directItems.length > 0 || socialItems.length > 0;
  if (!hasAnyContact) {
    return null;
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-[var(--color-border)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header & friendly invitation */}
        <div className="mb-10 max-w-2xl">
          <p className="label-mono mb-2 text-accent">Contact</p>
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text)" }}
          >
            Get In Touch
          </h2>
          <p
            className="mt-3 text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            I am actively looking for junior web developer roles and
            internship opportunities. Whether you have an open position, a
            project idea, or just want to connect, feel free to reach out
            anytime!
          </p>
        </div>

        {/* Direct contact channels & resume */}
        {directItems.length > 0 && (
          <div className="mb-8">
            <h3 className="label-mono mb-4 text-xs font-semibold text-accent">
              Direct Contact &amp; Resume
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {directItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  download={item.download ? true : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  className="card group flex min-h-[72px] items-center justify-between gap-3.5 p-4 transition-all duration-150 hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] sm:gap-4 sm:p-5"
                >
                  <div className="flex min-w-0 items-center gap-3.5 sm:gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] transition-colors group-hover:border-[var(--color-accent-dim)] group-hover:bg-[var(--color-bg-subtle)]"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="label-mono text-[11px] font-semibold text-[var(--color-text-muted)] group-hover:text-accent">
                        {item.label}
                      </p>
                      <p
                        className="truncate text-sm font-medium transition-colors"
                        style={{ color: "var(--color-text)" }}
                        title={item.value}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-[var(--color-text-muted)] transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  >
                    {item.download ? (
                      <Download className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Social profiles */}
        {socialItems.length > 0 && (
          <div>
            <h3 className="label-mono mb-4 text-xs font-semibold text-accent">
              Social Profiles
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {socialItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label}: ${item.value}`}
                  className="card group flex min-h-[72px] items-center justify-between gap-3.5 p-4 transition-all duration-150 hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] sm:gap-4 sm:p-5"
                >
                  <div className="flex min-w-0 items-center gap-3.5 sm:gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] transition-colors group-hover:border-[var(--color-accent-dim)] group-hover:bg-[var(--color-bg-subtle)]"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="label-mono text-[11px] font-semibold text-[var(--color-text-muted)] group-hover:text-accent">
                        {item.label}
                      </p>
                      <p
                        className="truncate text-sm font-medium transition-colors"
                        style={{ color: "var(--color-text)" }}
                        title={item.value}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-[var(--color-text-muted)] transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
