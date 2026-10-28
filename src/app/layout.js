import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import profile from "@/data/profile.json";
import NavbarServer from "@/components/NavbarServer";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: `${profile.name} — ${profile.designation}`,
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NavbarServer />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

