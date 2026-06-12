"use client";

import { openCommandPalette } from "./CommandPalette";

export default function CommandMenuButton() {
  return (
    <button
      onClick={openCommandPalette}
      aria-label="Open command menu"
      title="Command menu"
      className="flex items-center gap-1.5 border border-foreground/15 px-2.5 py-1.5 text-xs text-muted transition hover:border-accent hover:text-foreground"
    >
      <span className="font-mono text-[11px]">⌘K</span>
    </button>
  );
}
