import Link from "next/link";
import Greetings from "./components/greetings";
import OpenSource from "./components/OpenSource";

export const metadata = {
  title: "Arnav Bhatia | Full-Stack Engineer",
  description:
    "Full-stack engineer delivering backend systems, platform pipelines, and AI solutions on cloud-native platforms.",
};

const Btn = ({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) => (
  <Link
    href={href}
    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold shadow-sm transition ${
      primary
        ? "bg-foreground text-background hover:bg-foreground/90"
        : "border border-foreground/20 bg-background hover:bg-foreground/5"
    }`}
  >
    {children}
  </Link>
);

export default function Home() {
  return (
    <main>
      {/* Hero Section with Background */}
      <section className="relative grid min-h-[90vh] place-items-center overflow-hidden px-6">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />

        <div className="max-w-4xl text-center">
          <div className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl leading-tight">
            <Greetings intervalMs={1800} className="min-w-[3ch]" />
          </div>

          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground/70">
            Full-stack engineer focused on backend systems, APIs, and cloud-native platforms. I turn prototypes into
            reliable products with CI/CD and data flows that improve developer experience and ROI.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Btn href="/experience">
              Experience
            </Btn>
            <Btn href="/projects">
              Projects
            </Btn>
            <Btn href="/contact" primary>
              Contact
            </Btn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-foreground/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold">Technical Expertise</h2>
            <p className="text-foreground/70">Technologies and tools I work with daily</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-foreground/10 bg-background p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Cloud & Infrastructure</h3>
              <p className="mb-3 text-sm text-foreground/70">
                Azure, AWS, Docker, Kubernetes, Terraform, CI/CD Automation
              </p>
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-background p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Backend Development</h3>
              <p className="mb-3 text-sm text-foreground/70">
                Python, Java, C#/.NET, Node.js, REST/gRPC APIs, SQL/NoSQL
              </p>
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-background p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                <svg className="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">AI & ML</h3>
              <p className="mb-3 text-sm text-foreground/70">
                TensorFlow, GenAI/LLMs, Model Pipelines, OpenAI, Azure AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <OpenSource />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-foreground/5 to-foreground/10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Build Something Great?</h2>
          <p className="mb-8 text-lg text-foreground/70">
            I'm always open to discussing new opportunities, collaborations, and interesting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Btn href="/contact" primary>
              Get in Touch
            </Btn>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-6 py-3 font-semibold transition hover:bg-foreground/5"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}