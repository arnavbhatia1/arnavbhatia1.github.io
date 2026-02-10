import Link from "next/link";
import Greetings from "./components/Greetings";
import TypeWriter from "./components/TypeWriter";
import OpenSource from "./components/OpenSource";
import MetricsSection from "./components/MetricsSection";

export const metadata = {
  title: "Arnav Bhatia | Software Engineer",
  description:
    "Software Engineer with 2+ years building production systems for enterprise clients. Incoming M.S. CS (AI/ML) at Georgia Tech.",
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
          {/* Greeting Animation */}
          <div className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl leading-tight">
            <Greetings intervalMs={1800} className="min-w-[3ch]" />
          </div>

          {/* Name */}
          <h1 className="mb-2 text-2xl font-medium text-foreground/80 md:text-3xl">
            I'm Arnav Bhatia
          </h1>

          {/* Typing Animation for Role */}
          <div className="mb-8 h-10 text-xl font-semibold text-foreground/90 md:text-2xl">
            <TypeWriter />
          </div>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/70">
            2+ years building production systems for enterprise clients, from discovery to deployment.
            Currently at MoZeus, incoming M.S. CS (AI/ML) at Georgia Tech.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Btn href="/experience">Experience</Btn>
            <Btn href="/projects">Projects</Btn>
            <Btn href="/contact" primary>Contact</Btn>
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

      {/* Impact Metrics - Animated */}
      <MetricsSection />

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold">Technical Stack</h2>
            <p className="text-foreground/70">Production-tested technologies</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-foreground/10 bg-background p-6 transition hover:border-blue-500/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition group-hover:scale-110">
                <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Cloud & Infrastructure</h3>
              <p className="text-sm text-foreground/70">
                Azure, AWS, Docker, Kubernetes, Terraform, Jenkins, CI/CD Pipelines
              </p>
            </div>

            <div className="group rounded-2xl border border-foreground/10 bg-background p-6 transition hover:border-green-500/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 transition group-hover:scale-110">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Backend & APIs</h3>
              <p className="text-sm text-foreground/70">
                Python, C#/.NET, Java, REST, OpenAPI, Microservices, BFF Gateway
              </p>
            </div>

            <div className="group rounded-2xl border border-foreground/10 bg-background p-6 transition hover:border-purple-500/30 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 transition group-hover:scale-110">
                <svg className="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Data & ML</h3>
              <p className="text-sm text-foreground/70">
                TensorFlow, GenAI/LLMs, OpenAI API, ETL Pipelines, Model Serving
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-16 px-6 bg-gradient-to-b from-foreground/5 to-background">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold">Career Highlights</h2>
            <p className="text-foreground/70">Key achievements across enterprise engagements</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background p-6 transition hover:shadow-lg">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-blue-500/10 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  MoZeus
                </div>
                <h3 className="mb-2 text-lg font-semibold">Full Lifecycle Client Delivery</h3>
                <p className="text-sm text-foreground/70">
                  Primary technical POC for 6+ enterprise clients—owned discovery, architecture, deployment, and iteration as a one-person technical team.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background p-6 transition hover:shadow-lg">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-green-500/10 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Blue Yonder
                </div>
                <h3 className="mb-2 text-lg font-semibold">Enterprise Gateway Architecture</h3>
                <p className="text-sm text-foreground/70">
                  Built and owned BFF gateway serving 100+ daily enterprise users, unifying 2,700+ microservice endpoints with auto-generated OpenAPI docs.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background p-6 transition hover:shadow-lg">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-purple-500/10 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  Blue Yonder
                </div>
                <h3 className="mb-2 text-lg font-semibold">ML Deployment Pipeline</h3>
                <p className="text-sm text-foreground/70">
                  Architected CI/CD for ML model publishing across 8 environments—60% faster deployments with versioning, rollback, and full traceability.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background p-6 transition hover:shadow-lg">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-orange-500/10 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-600 dark:text-orange-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Manhattan Associates
                </div>
                <h3 className="mb-2 text-lg font-semibold">ML Demand Forecasting</h3>
                <p className="text-sm text-foreground/70">
                  Prototyped TensorFlow models improving inventory prediction by 25%, supporting integration across 200+ fulfillment nodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-blue-500/5 via-background to-purple-500/5 p-8 md:p-12">
            <div className="mb-6 text-center">
              <h2 className="mb-3 text-3xl font-bold">What I'm Looking For</h2>
              <p className="text-foreground/70">Roles where I can combine technical depth with client impact</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="rounded-xl bg-background/80 p-4 text-center shadow-sm">
                <div className="mb-2 text-2xl">🛠️</div>
                <p className="font-semibold">Solutions Engineer</p>
              </div>
              <div className="rounded-xl bg-background/80 p-4 text-center shadow-sm">
                <div className="mb-2 text-2xl">🚀</div>
                <p className="font-semibold">Forward Deployed Engineer</p>
              </div>
              <div className="rounded-xl bg-background/80 p-4 text-center shadow-sm">
                <div className="mb-2 text-2xl">🤝</div>
                <p className="font-semibold">Sales Engineer</p>
              </div>
              <div className="rounded-xl bg-background/80 p-4 text-center shadow-sm">
                <div className="mb-2 text-2xl">⚙️</div>
                <p className="font-semibold">Backend Engineer</p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-foreground/60">
              I thrive at the intersection of engineering and business—building technical solutions while working directly with clients and stakeholders.
            </p>
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
            <Btn href="/contact" primary>Get in Touch</Btn>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-6 py-3 font-semibold transition hover:bg-foreground/5"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
