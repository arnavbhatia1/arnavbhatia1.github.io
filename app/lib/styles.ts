// Recurring design-system recipes (see CLAUDE.md). Tailwind v4 scans these
// string literals like inline classNames, so they compile identically.

// Mono label: section eyebrows and metadata (callers add color + spacing).
export const EYEBROW = "font-mono text-[11px] uppercase tracking-[0.12em]";

// Underlined mono text links (callers add font sizing when not inherited).
export const MONO_LINK =
  "border-b border-hairline-strong pb-1 transition-colors hover:border-accent hover:text-accent";
export const MONO_LINK_ACCENT =
  "border-b border-accent pb-1 text-accent transition-opacity hover:opacity-75";

// Ruled entry lists and their 12-column rows.
export const RULED = "divide-y divide-hairline border-t border-hairline";
export const RULED_Y = "divide-y divide-hairline border-y border-hairline";
export const ENTRY_GRID = "grid gap-3 py-8 md:grid-cols-12 md:gap-6";
export const ENTRY_META = `${EYEBROW} text-muted md:col-span-3 md:pt-1.5`;
