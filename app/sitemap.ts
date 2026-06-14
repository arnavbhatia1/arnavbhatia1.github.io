import type { MetadataRoute } from "next";
import { NAV_LINKS } from "./lib/site-config";

const BASE_URL = "https://arnavbhatia1.github.io";

// Statically emitted to /sitemap.xml at build time. output: 'export' requires
// force-static. Trailing slashes match next.config.ts so URLs resolve directly.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_LINKS.map((link) => ({
    url: `${BASE_URL}${link.href === "/" ? "/" : `${link.href}/`}`,
  }));
}
