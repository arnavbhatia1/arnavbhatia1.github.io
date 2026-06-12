import type { Metadata } from "next";
import { Newsreader, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import SiteAnalytics from "./components/SiteAnalytics";
import CommandPalette from "./components/CommandPalette";
import CommandMenuButton from "./components/CommandMenuButton";
import { NAV_LINKS } from "./lib/site-config";
import { EYEBROW } from "./lib/styles";
import "./globals.css";

const newsreader = Newsreader({ subsets: ["latin"], style: ["normal"], variable: "--font-newsreader", axes: ["opsz"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Bhatia | Software Engineer",
  description: "Software Engineer with 2+ years building production systems for enterprise clients, from discovery to deployment. Incoming M.S. CS (AI/ML) at Georgia Tech.",
  keywords: ["Software Engineer", "Full-Stack", "Product Engineer", "Solutions Engineer", "ML", "AI", "Cloud", "DevOps", "Azure", "AWS", "Georgia Tech", "Python", "C#"],
  authors: [{ name: "Arnav Bhatia" }],
  metadataBase: new URL("https://arnavbhatia1.github.io"),
  openGraph: {
    title: "Arnav Bhatia | Software Engineer",
    description: "Software Engineer with 2+ years building production systems for enterprise clients. Hands-on backend and cloud-native development with customer-facing delivery.",
    url: "https://arnavbhatia1.github.io",
    siteName: "Arnav Bhatia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arnav Bhatia - SWE / FDE / SE",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Bhatia | Software Engineer",
    description: "Software Engineer with 2+ years building production systems for enterprise clients. Incoming M.S. CS (AI/ML) at Georgia Tech.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${newsreader.variable} ${geistMono.variable} font-serif bg-background text-foreground antialiased`}>
        <SiteAnalytics />
        <CommandPalette />
        <header className="sticky top-0 z-40 border-b border-hairline bg-background">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4">
            <Link href="/" className="font-serif text-xl tracking-tight text-foreground hover:text-accent transition-colors">
              Arnav Bhatia
            </Link>
            <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6 ${EYEBROW}`}>
              {NAV_LINKS.filter((link) => link.href !== "/").map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <CommandMenuButton />
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
