import Link from "next/link";
import { EYEBROW, MONO_LINK, MONO_LINK_ACCENT } from "./lib/styles";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col justify-center px-5 py-16">
      <p className={`text-accent ${EYEBROW}`}>404 · Page not found</p>

      <h1 className="mt-6 font-serif text-4xl tracking-[-0.015em] md:text-6xl">
        This page doesn&apos;t exist.
      </h1>

      <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
        The URL may be mistyped, or the page has moved.
      </p>

      <div className="mt-10 flex gap-x-8 font-mono text-xs uppercase tracking-[0.12em]">
        <Link href="/" className={MONO_LINK_ACCENT}>
          Back to home
        </Link>
        <Link href="/contact" className={MONO_LINK}>
          Contact
        </Link>
      </div>
    </main>
  );
}
