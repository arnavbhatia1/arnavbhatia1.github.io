"use client";

import Link from "next/link";
import { useState } from "react";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-10">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl">Resume</h1>
          <p className="mt-1 text-muted">View or download my resume</p>
        </div>
        <div className="flex gap-3">
          <a
            href="/Arnav_Bhatia_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
          <a
            href="/Arnav_Bhatia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-foreground/5"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in New Tab
          </a>
        </div>
      </div>

      {/* PDF Viewer - desktop (mobile browsers can't reliably render PDFs inline) */}
      <div className="relative hidden rounded-2xl border border-foreground/8 bg-foreground/5 overflow-hidden md:block">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
              <p className="text-sm text-muted">Loading resume...</p>
            </div>
          </div>
        )}
        <iframe
          src="/Arnav_Bhatia_Resume.pdf#view=FitH"
          className="w-full h-[80vh] min-h-[600px]"
          onLoad={() => setIsLoading(false)}
          title="Resume PDF Viewer"
        />
      </div>

      {/* Mobile fallback - inline PDF embeds are unreliable on phones, so offer clear actions */}
      <div className="rounded-2xl border border-foreground/8 bg-foreground/5 p-8 text-center md:hidden">
        <svg className="mx-auto mb-4 h-10 w-10 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="mb-5 text-sm text-muted">
          Inline preview isn&apos;t supported on most phones. Open or download the resume to view it.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="/Arnav_Bhatia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Open Resume
          </a>
          <a
            href="/Arnav_Bhatia_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background px-5 py-3 text-sm font-semibold transition hover:bg-foreground/5"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Fallback */}
      <div className="mt-6 rounded-xl bg-foreground/5 p-4 text-center">
        <p className="text-sm text-muted">
          Can't see the PDF?{" "}
          <a href="/Arnav_Bhatia_Resume.pdf" download className="font-semibold underline">
            Download it directly
          </a>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold underline">
            contact me
          </Link>{" "}
          for a copy.
        </p>
      </div>
    </main>
  );
}
