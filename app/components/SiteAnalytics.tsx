"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ANALYTICS } from "../lib/site-config";

// GoatCounter SPA tracking: count.js auto-records the first pageview, and we
// fire a manual count on each client-side route change so every page is tracked.
type GoatCounter = { count: (opts: { path: string }) => void };

export default function SiteAnalytics() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!ANALYTICS.goatcounterCode) return;
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    const gc = (window as unknown as { goatcounter?: GoatCounter }).goatcounter;
    gc?.count({ path: pathname });
  }, [pathname]);

  if (!ANALYTICS.goatcounterCode) return null;

  return (
    <Script
      data-goatcounter={`https://${ANALYTICS.goatcounterCode}.goatcounter.com/count`}
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
    />
  );
}
