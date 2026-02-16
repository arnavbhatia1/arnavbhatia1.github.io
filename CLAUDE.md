# Project: arnavbhatia1.github.io

Personal portfolio site for Arnav Bhatia, deployed to GitHub Pages.

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export via `output: 'export'`)
- **UI**: React 19, TypeScript 5.9
- **Styling**: Tailwind CSS 4 (utility-first, `@theme inline` for custom tokens)
- **Fonts**: Instrument Serif (display/headings), DM Sans (body), Geist Mono (code)
- **Deployment**: GitHub Pages (static export, trailing slashes enabled, unoptimized images)

## Project Structure

```
app/
  layout.tsx              # Root layout: fonts, sticky nav, footer, theme toggle
  page.tsx                # Homepage: hero, metrics, tech stack, highlights, open source, CTA
  globals.css             # Color system, animations, grain texture, nav-link underline
  components/
    Greetings.tsx         # Multi-language greeting carousel
    TypeWriter.tsx        # Typing animation for role titles
    MetricsSection.tsx    # Animated impact counters
    OpenSource.tsx        # GitHub repos showcase
    Footer.tsx            # Site footer with social links
    ThemeToggle.tsx       # Dark/light mode toggle
    PageTransition.tsx    # Route fade transitions
    ScrollProgress.tsx    # Scroll progress bar
    AnimatedCounter.tsx   # Intersection-observer counting animation
    ui/Icons.tsx          # Centralized SVG icons
    ui/shared-components.tsx  # Reusable Card, TabButton, Chip, ButtonLink, SectionHeader
  lib/
    site-config.ts        # Centralized constants (name, email, social links, nav)
    types.ts              # Shared TypeScript types
  experience/page.tsx     # Work timeline + education + "My Journey" narrative
  projects/page.tsx       # Work & personal projects (tabbed)
  contact/page.tsx        # Contact form + info cards
  resume/page.tsx         # PDF viewer with download
  certifications/page.tsx # Completed/in-progress/upcoming certs
  not-found.tsx           # 404 page
public/
  resume.pdf
  og-image.svg
```

## Design System

- **Color tokens** defined as CSS variables in `globals.css` (`:root` / `.dark`):
  - `--background`, `--foreground`, `--accent`, `--accent-foreground`, `--muted`
  - Exposed via `@theme inline` as Tailwind colors: `bg-accent`, `text-muted`, etc.
- **Light mode**: warm off-white (#faf9f7), stone foreground, amber accent (#b45309)
- **Dark mode**: warm dark (#0c0a09), stone-200 foreground, amber accent (#f59e0b)
- **Borders**: use `border-foreground/8` (not /10 or /20)
- **Secondary text**: use `text-muted` (not text-foreground/70 or text-foreground/60)
- **Headings**: use `font-serif` class for all page/section headings
- **Tab buttons**: use `bg-foreground text-background` for active state (NOT hardcoded black/white)
- **Primary buttons**: use `bg-accent text-accent-foreground`
- **Focus rings**: use `focus:border-accent focus:ring-accent/20`

## Commands

- `npm run dev` - Dev server
- `npm run build` - Production build (static export to /out)
- `npm run lint` - ESLint

## Conventions

- No em dashes in copy. Use commas, periods, or rewording instead.
- Keep emoji usage in content where it already exists (role cards), but don't add new ones.
- All pages use `"use client"` where state/effects are needed; server components by default.
- Font loading via `next/font/google` with CSS variable injection.
