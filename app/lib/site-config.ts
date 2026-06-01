// Centralized constants for the portfolio site

export const SITE_CONFIG = {
  name: "Arnav Bhatia",
  title: "Software Engineer",
  email: "arnav.cal@gmail.com",
  phone: "(510) 386-7045",
  phoneRaw: "5103867045",
  resumePath: "/Arnav_Bhatia_Resume.pdf",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/arnav-bhatia/",
  github: "https://github.com/arnavbhatia1",
  email: `mailto:${SITE_CONFIG.email}`,
} as const;

// Contact form delivery via Web3Forms (https://web3forms.com).
// Get a free access key: enter arnav.cal@gmail.com at web3forms.com, the key is
// emailed instantly. Submissions go straight to that inbox. Leave empty to disable.
export const CONTACT = {
  web3formsAccessKey: "7653094f-7765-46bf-81e2-28f762ea35e4",
} as const;

// Privacy-friendly, cookie-free analytics (https://www.goatcounter.com).
// Sign up free, pick a code (e.g. "arnavbhatia"), then paste it below.
// Your dashboard lives at https://<code>.goatcounter.com. Leave empty to disable.
export const ANALYTICS = {
  goatcounterCode: "navlinks",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;
