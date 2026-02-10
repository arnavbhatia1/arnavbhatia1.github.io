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
          <h1 className="text-3xl font-bold">Resume</h1>
          <p className="mt-1 text-foreground/70">View or download my resume</p>
        </div>
        <div className="flex gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-foreground/5"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in New Tab
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="relative rounded-2xl border border-foreground/10 bg-foreground/5 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
              <p className="text-sm text-foreground/60">Loading resume...</p>
            </div>
          </div>
        )}
        <iframe
          src="/resume.pdf#view=FitH"
          className="w-full h-[80vh] min-h-[600px]"
          onLoad={() => setIsLoading(false)}
          title="Resume PDF Viewer"
        />
      </div>

      {/* Fallback */}
      <div className="mt-6 rounded-xl bg-foreground/5 p-4 text-center">
        <p className="text-sm text-foreground/70">
          Can't see the PDF?{" "}
          <a href="/resume.pdf" download className="font-semibold underline">
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
