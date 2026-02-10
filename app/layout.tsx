import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Bhatia | Full-Stack Engineer",
  description: "Full-stack product engineer specializing in client-facing solutions, backend systems, and cloud-native platforms. Incoming MS CS at Georgia Tech.",
  keywords: ["Software Engineer", "Full-Stack", "Product Engineer", "Solutions Engineer", "ML", "AI", "Cloud", "DevOps", "Azure", "AWS", "Georgia Tech"],
  authors: [{ name: "Arnav Bhatia" }],
  metadataBase: new URL("https://arnavbhatia1.github.io"),
  openGraph: {
    title: "Arnav Bhatia | Full-Stack Engineer",
    description: "Full-stack product engineer specializing in client-facing solutions, backend systems, and cloud-native platforms.",
    url: "https://arnavbhatia1.github.io",
    siteName: "Arnav Bhatia",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Arnav Bhatia - Full-Stack Engineer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Bhatia | Full-Stack Engineer",
    description: "Full-stack product engineer specializing in client-facing solutions, backend systems, and cloud-native platforms.",
    images: ["/og-image.svg"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased`}>
        <ScrollProgress />
        <header className="sticky top-1 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
            <Link href="/" className="text-lg font-bold">Arnav Bhatia</Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/experience" className="hidden sm:inline hover:underline">Experience</Link>
              <Link href="/projects" className="hidden sm:inline hover:underline">Projects</Link>
              <Link href="/resume" className="hidden sm:inline hover:underline">Resume</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <PageTransition>
          <div className="min-h-screen">
            {children}
          </div>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
