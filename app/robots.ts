import type { MetadataRoute } from "next";

// Statically emitted to /robots.txt at build time (output: 'export' requires force-static).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://arnavbhatia1.github.io/sitemap.xml",
  };
}
