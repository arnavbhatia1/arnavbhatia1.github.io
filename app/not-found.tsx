import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center">
      {/* Glitchy 404 */}
      <div className="relative mb-8">
        <h1 className="text-[150px] font-bold leading-none tracking-tighter text-foreground/10 sm:text-[200px]">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold sm:text-5xl">Page Not Found</span>
        </div>
      </div>

      {/* Message */}
      <p className="mb-8 max-w-md text-lg text-foreground/70">
        Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-foreground/90"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-6 py-3 font-semibold transition hover:bg-foreground/5"
        >
          Contact Me
        </Link>
      </div>

      {/* Fun Element */}
      <div className="mt-16 text-sm text-foreground/40">
        <p>Error Code: 404 | Lost in the void</p>
      </div>
    </main>
  );
}
