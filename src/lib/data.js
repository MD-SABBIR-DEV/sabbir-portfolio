/**
 * data.js – server-side data accessors
 *
 * All content is read from src/data/*.json.
 * This module runs only on the server (no "use client").
 */

import rawProfile  from "@/data/profile.json";
import rawSkills   from "@/data/skills.json";
import rawProjects from "@/data/projects.json";

/** @type {typeof rawProfile} */
export const profile = rawProfile;

/** @type {typeof rawSkills} */
export const skills = rawSkills;

/**
 * Projects sorted ascending by the `order` field.
 * @type {typeof rawProjects}
 */
export const projects = [...rawProjects].sort((a, b) => a.order - b.order);

/**
 * Look up a single project by its slug.
 * Returns `undefined` when no match is found.
 *
 * @param {string} slug
 * @returns {(typeof rawProjects)[number] | undefined}
 */
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
