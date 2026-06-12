import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col justify-center px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
        404 · Page not found
      </p>

      <h1 className="mt-6 font-serif text-4xl tracking-[-0.015em] md:text-6xl">
        This page doesn&apos;t exist.
      </h1>

      <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
        The URL may be mistyped, or the page has moved.
      </p>

      <div className="mt-10 flex gap-x-8 font-mono text-xs uppercase tracking-[0.12em]">
        <Link
          href="/"
          className="border-b border-accent pb-1 text-accent transition-opacity hover:opacity-75"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="border-b border-foreground/30 pb-1 transition-colors hover:border-accent hover:text-accent"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
