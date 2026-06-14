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

  // APG tabs keyboard pattern: Arrow keys move between tabs, Home/End jump to ends.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = tabs.findIndex((t) => t.key === active);
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(tabs[next].key);
  };

  return (
    <>
      <div
        role="tablist"
        onKeyDown={onKeyDown}
        className={`flex flex-wrap items-baseline gap-x-8 gap-y-3 ${className}`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            id={`tab-${tab.key}`}
            onClick={() => setActive(tab.key)}
            aria-selected={active === tab.key}
            aria-controls={active === tab.key ? `panel-${tab.key}` : undefined}
            tabIndex={active === tab.key ? 0 : -1}
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
      <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
        {panels[active]}
      </div>
    </>
  );
}
