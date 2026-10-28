<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
PROJECT: Md Sabbir's portfolio for a course assignment. Next.js App Router (JavaScript), Tailwind CSS, src/ directory.
GOAL: A clean, fully responsive, accessible, fast portfolio that must deploy successfully on Vercel.
RULES:
1. Do not install packages beyond lucide-react, clsx, tailwind-merge. No animation library, no external APIs.
2. Check the installed Next.js and Tailwind versions in package.json and follow THEIR current documentation. Do not use deprecated patterns.
3. All content comes from src/data/*.json. Never hardcode names, links, project text or contact details in components.
4. If a data field is empty, hide that UI element instead of showing a broken link or empty heading.
5. Server Components by default; add "use client" only where state or events are needed.
6. Never build Tailwind class names dynamically; use full literal class strings.
7. Dark theme with one accent colour (cyan) via CSS variables. Text contrast must meet WCAG AA.
8. Semantic HTML, alt text on every image, visible focus rings, keyboard-friendly navigation. Respect prefers-reduced-motion.
9. Must work at 375px, 768px, 1024px and 1366px widths with no horizontal scroll.
10. Make ONLY the requested change. No refactors, no extra files. At the end list the changed files, run npm run build and report the real result.
