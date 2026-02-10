"use client";

import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS } from "../lib/site-config";
import { LinkedInIcon, GitHubIcon, EmailIcon, ChevronUpIcon } from "./ui/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/60">
              About
            </h3>
            <p className="text-sm leading-relaxed text-foreground/70">
              Full-stack engineer building scalable backend systems, ML pipelines, and cloud-native platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/60">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/60">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground hover:underline"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/60">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  className="text-foreground/70 hover:text-foreground hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="text-foreground/70 hover:text-foreground hover:underline"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-foreground/90"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 sm:flex-row">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition hover:text-foreground"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="text-foreground/60 transition hover:text-foreground"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mx-auto mt-8 flex items-center gap-2 text-sm text-foreground/60 transition hover:text-foreground"
          aria-label="Back to top"
        >
          <ChevronUpIcon />
          Back to top
        </button>
      </div>
    </footer>
  );
}
