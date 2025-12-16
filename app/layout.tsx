import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Bhatia | Full-Stack Engineer",
  description: "Software Engineer specializing in backend systems, ML pipelines, and cloud-native platforms. Building scalable infrastructure and AI solutions.",
  keywords: ["Software Engineer", "Full-Stack", "Backend", "ML", "AI", "Cloud", "DevOps", "Azure", "AWS"],
  authors: [{ name: "Arnav Bhatia" }],
  openGraph: {
    title: "Arnav Bhatia | Full-Stack Engineer",
    description: "Software Engineer specializing in backend systems, ML pipelines, and cloud-native platforms.",
    url: "https://arnavbhatia1.github.io",
    siteName: "Arnav Bhatia Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Bhatia | Full-Stack Engineer",
    description: "Software Engineer specializing in backend systems, ML pipelines, and cloud-native platforms.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased`}>
        <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
            <Link href="/" className="text-lg font-bold">Arnav Bhatia</Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/experience" className="hidden sm:inline hover:underline">Experience</Link>
              <Link href="/projects" className="hidden sm:inline hover:underline">Projects</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </nav>
        </header>
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
