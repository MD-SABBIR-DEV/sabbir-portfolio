"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";

/**
 * @param {{ name: string, showExperience: boolean }} props
 */
export default function Navbar({ name, showExperience }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const baseLinks = [
    { label: "Home",       href: "#home" },
    { label: "About",      href: "#about" },
    { label: "Skills",     href: "#skills" },
    { label: "Education",  href: "#education" },
    { label: "Experience", href: "#experience", conditional: true },
    { label: "Projects",   href: "#projects" },
    { label: "Contact",    href: "#contact" },
  ];

  const links = baseLinks.filter(
    (l) => !l.conditional || showExperience
  );

  /** Close on Escape */
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  /** Lock body scroll while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo / name */}
        <a
          href="#home"
          className="flex items-center gap-1 text-base font-semibold tracking-tight focus-visible:rounded"
          style={{ color: "var(--color-text)" }}
          onClick={closeMenu}
        >
          <span style={{ color: "var(--color-accent)" }}>&lt;</span>
          <span>{name}</span>
          <span style={{ color: "var(--color-accent)" }}>/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul
          className="hidden items-center gap-1 md:flex"
          role="list"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded px-3 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-muted)")
                }
                onFocus={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-muted)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          ref={buttonRef}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded md:hidden"
          style={{ color: "var(--color-text)" }}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="absolute inset-x-0 top-16 z-40 md:hidden"
          style={{
            backgroundColor: "var(--color-bg-card)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <ul className="flex flex-col px-4 pb-4 pt-2" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded px-3 py-3 text-base font-medium transition-colors duration-150"
                  style={{ color: "var(--color-text-muted)" }}
                  onClick={closeMenu}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-text-muted)")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
