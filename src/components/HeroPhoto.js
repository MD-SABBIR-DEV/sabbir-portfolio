"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * HeroPhoto – client component so we can use onError for the fallback.
 * Shows the portrait; if the image fails to load, shows an initials avatar.
 */
export default function HeroPhoto({ src, name }) {
  const [imgError, setImgError] = useState(!src);

  // Derive initials: "Md Sabbir" → "MS"
  const initials = (name || "Md Sabbir")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("") || "MS";

  if (!src || imgError) {
    return (
      <div
        className="flex items-center justify-center rounded-full text-4xl font-bold select-none"
        style={{
          width: 280,
          height: 280,
          backgroundColor: "var(--color-accent-dim)",
          color: "var(--color-accent)",
          border: "3px solid var(--color-accent-dim)",
        }}
        aria-label={`Initials avatar for ${name}`}
        role="img"
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{
        width: 280,
        height: 280,
        border: "3px solid var(--color-accent-dim)",
        boxShadow: "0 0 0 6px #0b1a2e",
      }}
    >
      <Image
        src={src}
        alt={`Portrait of ${name || "user"}`}
        fill
        sizes="280px"
        className="object-cover object-top"
        priority
        onError={() => setImgError(true)}
      />
    </div>
  );
}
