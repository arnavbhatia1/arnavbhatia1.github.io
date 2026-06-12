"use client";

import { useState } from "react";

// Client island for tabbed pages. Panels arrive pre-rendered from server
// components, so only the tab bar ships as page JS.
export default function Tabs({
  tabs,
  panels,
  className = "",
}: {
  tabs: { key: string; label: string }[];
  panels: Record<string, React.ReactNode>;
  className?: string;
}) {
  const [active, setActive] = useState(tabs[0].key);

  return (
    <>
      <div className={`flex flex-wrap items-baseline gap-x-8 gap-y-3 ${className}`}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            aria-pressed={active === tab.key}
            aria-controls={`panel-${tab.key}`}
            className={`border-b-2 pb-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
              active === tab.key
                ? "border-accent text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div id={`panel-${active}`}>{panels[active]}</div>
    </>
  );
}
