import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="card w-full max-w-md text-center">
        <p className="label-mono mb-2 text-accent">Error 404</p>
        <h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          style={{ color: "var(--color-text)" }}
        >
          Page Not Found
        </h1>
        <p
          className="mt-3 text-base leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Sorry, the page you are looking for does not exist, has been removed,
          or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text-inverse)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] sm:w-auto"
          >
            <Home size={16} aria-hidden="true" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/#projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-accent)] hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] sm:w-auto"
            style={{ color: "var(--color-text)" }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
