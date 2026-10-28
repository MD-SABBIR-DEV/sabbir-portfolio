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
  metadataBase: new URL("https://sabbir-portfolio.vercel.app"),
  title: {
    default: `${profile.name} — ${profile.designation}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: `${profile.name} — ${profile.designation}`,
    description: profile.tagline,
    url: "/",
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: profile.photo || "/images/sabbir.jpg",
        width: 800,
        height: 800,
        alt: `${profile.name} — ${profile.designation}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.designation}`,
    description: profile.tagline,
    images: [profile.photo || "/images/sabbir.jpg"],
  },
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

