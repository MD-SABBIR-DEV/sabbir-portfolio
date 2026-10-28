import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx conditional class logic with tailwind-merge
 * to safely merge Tailwind utility classes without conflicts.
 *
 * @param {...import("clsx").ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
