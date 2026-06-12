"use client";

import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS } from "../lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/15">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6">
          <p className="font-serif text-xl tracking-tight">Arnav Bhatia</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-foreground/15 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          <p>© {currentYear} {SITE_CONFIG.name}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a href={SOCIAL_LINKS.email} className="normal-case transition-colors hover:text-foreground">
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
