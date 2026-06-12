"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_CONFIG, SOCIAL_LINKS } from "../lib/site-config";
import { toggleTheme } from "../lib/theme";

type Command = {
  id: string;
  label: string;
  group: "Navigate" | "Actions";
  hint?: string;
  keywords?: string;
  run: () => void;
};

const GROUPS = ["Navigate", "Actions"] as const;

export const openCommandPalette = () => window.dispatchEvent(new Event("cmdk:open"));

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = () => setOpen(false);

  const go = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  const external = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const commands: Command[] = [
    { id: "home", label: "Home", group: "Navigate", keywords: "start landing", run: () => go("/") },
    { id: "experience", label: "Experience", group: "Navigate", keywords: "work history journey", run: () => go("/experience") },
    { id: "projects", label: "Projects", group: "Navigate", keywords: "work personal builds", run: () => go("/projects") },
    { id: "certs", label: "Certifications", group: "Navigate", keywords: "azure aws", run: () => go("/certifications") },
    { id: "resume", label: "Resume", group: "Navigate", keywords: "cv", run: () => go("/resume") },
    { id: "contact", label: "Contact", group: "Navigate", keywords: "email message hire", run: () => go("/contact") },
    { id: "dl", label: "Download resume (PDF)", group: "Actions", hint: "PDF", keywords: "cv pdf download", run: () => external(SITE_CONFIG.resumePath) },
    { id: "email", label: "Email Arnav", group: "Actions", hint: SITE_CONFIG.email, keywords: "contact hire mail", run: () => { window.location.href = SOCIAL_LINKS.email; setOpen(false); } },
    { id: "linkedin", label: "Open LinkedIn", group: "Actions", keywords: "social profile", run: () => external(SOCIAL_LINKS.linkedin) },
    { id: "github", label: "Open GitHub", group: "Actions", keywords: "code repos source", run: () => external(SOCIAL_LINKS.github) },
    { id: "theme", label: "Toggle dark / light theme", group: "Actions", hint: "Theme", keywords: "dark light mode appearance", run: () => { toggleTheme(); setOpen(false); } },
  ];

  const q = query.trim().toLowerCase();
  const filtered = q
    ? commands.filter((c) => `${c.label} ${c.keywords ?? ""}`.toLowerCase().includes(q))
    : commands;

  // Open via ⌘K / Ctrl+K, or the header button's custom event.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("cmdk:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("cmdk:open", onOpen);
    };
  }, []);

  // Focus management: store/restore focus, reset state, focus the input.
  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement;
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      lastFocused.current?.focus?.();
    }
  }, [open]);

  if (!open) return null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.run();
    } else if (e.key === "Tab") {
      // simple focus trap: keep focus on the input
      e.preventDefault();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-foreground/30 px-4 pt-[18vh]"
      onClick={close}
      role="presentation"
    >
      <div
        className="w-full max-w-lg overflow-hidden border border-hairline bg-background"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
      >
        <div className="flex items-center gap-3 border-b border-hairline px-4">
          <svg className="h-4 w-4 flex-shrink-0 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Jump to a page or action..."
            className="w-full bg-transparent py-4 font-mono text-sm outline-none placeholder:text-muted"
            aria-label="Search commands"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-list"
          />
          <kbd className="hidden border border-hairline px-1.5 py-0.5 font-mono text-[10px] text-muted sm:inline">esc</kbd>
        </div>

        <ul id="cmdk-list" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-muted">No matches.</li>
          )}
          {GROUPS.map((group) => {
            const groupItems = filtered.filter((c) => c.group === group);
            if (groupItems.length === 0) return null;
            return (
              <li key={group}>
                <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{group}</p>
                <ul>
                  {groupItems.map((c) => {
                    // commands are declared in group order, so filtered order
                    // matches render order and the flat index is stable.
                    const idx = filtered.indexOf(c);
                    const isActive = idx === active;
                    return (
                      <li key={c.id} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(idx)}
                          onClick={() => c.run()}
                          className={`flex w-full items-center justify-between gap-3 border-l-2 px-3 py-2.5 text-left text-sm transition ${
                            isActive ? "border-accent bg-foreground/5 text-foreground" : "border-transparent text-foreground/80 hover:bg-foreground/5"
                          }`}
                        >
                          <span>{c.label}</span>
                          {c.hint && <span className="font-mono text-xs text-muted">{c.hint}</span>}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
