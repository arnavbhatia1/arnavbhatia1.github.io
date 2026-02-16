import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-instrument" });
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
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Arnav Bhatia - Software Engineer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Bhatia | Software Engineer",
    description: "Software Engineer with 2+ years building production systems for enterprise clients. Incoming M.S. CS (AI/ML) at Georgia Tech.",
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
      <body className={`${dmSans.variable} ${instrumentSerif.variable} ${geistMono.variable} grain font-sans bg-background text-foreground antialiased`}>
        <ScrollProgress />
        <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/85 backdrop-blur-lg">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <Link href="/" className="font-serif text-xl tracking-tight text-foreground hover:text-accent transition-colors">
              Arnav Bhatia
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/experience" className="nav-link hidden sm:inline text-muted hover:text-foreground transition-colors">Experience</Link>
              <Link href="/projects" className="nav-link hidden sm:inline text-muted hover:text-foreground transition-colors">Projects</Link>
              <Link href="/resume" className="nav-link hidden sm:inline text-muted hover:text-foreground transition-colors">Resume</Link>
              <Link href="/contact" className="nav-link text-muted hover:text-foreground transition-colors">Contact</Link>
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
