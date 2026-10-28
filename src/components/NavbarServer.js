/**
 * NavbarServer – Server Component wrapper.
 * Reads profile data and passes only the needed props to the
 * "use client" Navbar, keeping data-fetching on the server.
 */
import profile from "@/data/profile.json";
import Navbar from "./Navbar";

export default function NavbarServer() {
  const showExperience =
    Array.isArray(profile.experience) && profile.experience.length > 0;

  return <Navbar name={profile.name} showExperience={showExperience} />;
}
