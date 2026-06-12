"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_CONFIG } from "../lib/site-config";
import { MONO_LINK, MONO_LINK_ACCENT } from "../lib/styles";

const RESUME = SITE_CONFIG.resumePath;

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h1 className="font-serif text-4xl tracking-[-0.015em] md:text-5xl">Resume</h1>
          <p className="mt-4 text-muted">View or download my resume</p>
        </div>
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-[0.12em]">
          <a href={RESUME} download className={MONO_LINK_ACCENT}>
            Download PDF
          </a>
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className={MONO_LINK}>
            Open in new tab
          </a>
        </div>
      </div>

      {/* PDF Viewer - desktop (mobile browsers can't reliably render PDFs inline) */}
      <div className="relative hidden border border-hairline md:block">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
              <p className="text-sm text-muted">Loading resume...</p>
            </div>
          </div>
        )}
        <iframe
          src={`${RESUME}#view=FitH`}
          className="w-full h-[80vh] min-h-[600px]"
          onLoad={() => setIsLoading(false)}
          title="Resume PDF Viewer"
        />
      </div>

      {/* Mobile fallback - inline PDF embeds are unreliable on phones, so offer clear actions */}
      <div className="border border-hairline p-8 md:hidden">
        <p className="text-sm text-muted">
          Inline preview isn&apos;t supported on most phones. Open or download the resume to view it.
        </p>
        <div className="mt-6 flex flex-col items-start gap-5 font-mono text-xs uppercase tracking-[0.12em]">
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className={MONO_LINK_ACCENT}>
            Open Resume
          </a>
          <a href={RESUME} download className={MONO_LINK}>
            Download PDF
          </a>
        </div>
      </div>

      {/* Fallback */}
      <p className="mt-6 text-sm text-muted">
        Can&apos;t see the PDF?{" "}
        <a href={RESUME} download className="underline underline-offset-4 hover:text-accent">
          Download it directly
        </a>{" "}
        or{" "}
        <Link href="/contact" className="underline underline-offset-4 hover:text-accent">
          contact me
        </Link>{" "}
        for a copy.
      </p>
    </main>
  );
}
