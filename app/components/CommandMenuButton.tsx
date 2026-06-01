"use client";

import { openCommandPalette } from "./CommandPalette";

export default function CommandMenuButton() {
  return (
    <button
      onClick={openCommandPalette}
      aria-label="Open command menu"
      title="Command menu"
      className="hidden items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/[0.03] px-2.5 py-1.5 text-xs text-muted transition hover:border-accent/30 hover:text-foreground sm:flex"
    >
      <span className="font-mono text-[11px]">⌘K</span>
    </button>
  );
}
