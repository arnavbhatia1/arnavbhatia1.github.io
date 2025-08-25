import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Bhatia",
  description: "Full-stack • Infrastructure • AI/ML Engineering",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased`}>
        <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
            <Link href="/" className="font-semibold">Arnav Bhatia</Link>
            <div className="flex items-center gap-4 text-sm">
              <a href="https://www.linkedin.com/in/arnav-bhatia/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://github.com/arnavbahatia1" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              <a href="mailto:arnav.cal@gmail.com" className="hover:underline">Email</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
