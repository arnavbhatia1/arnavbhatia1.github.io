// Centralized constants for the portfolio site

export const SITE_CONFIG = {
  name: "Arnav Bhatia",
  title: "Software Engineer",
  email: "arnav.cal@gmail.com",
  phone: "(510) 386-7045",
  phoneRaw: "5103867045",
  resumePath: "/resume.pdf",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/arnav-bhatia/",
  github: "https://github.com/arnavbhatia1",
  email: `mailto:${SITE_CONFIG.email}`,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;
