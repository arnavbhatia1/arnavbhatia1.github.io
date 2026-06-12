import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS } from "../lib/site-config";
import { EYEBROW } from "../lib/styles";

export default function Footer() {
  // Server component: the year is baked in at build time.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-6">
          <p className="font-serif text-xl tracking-tight">Arnav Bhatia</p>
          <nav className={`flex flex-wrap gap-x-6 gap-y-2 ${EYEBROW}`}>
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

        <div className={`mt-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-hairline pt-6 text-muted ${EYEBROW}`}>
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
