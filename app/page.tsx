import Link from "next/link";
import Image from "next/image";
import Greetings from "./components/Greetings";
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
    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
      primary
        ? "bg-accent text-accent-foreground hover:opacity-90 shadow-sm"
        : "border border-foreground/15 bg-background hover:bg-foreground/5 text-foreground/80 hover:text-foreground"
    }`}
  >
    {children}
  </Link>
);

export default function Home() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative grid min-h-[90vh] place-items-center overflow-hidden px-6">
        {/* Warm gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50/80 via-background to-stone-100/50 dark:from-amber-950/20 dark:via-background dark:to-stone-900/20" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,#80808010_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Radial fade */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />

        <div className="max-w-3xl text-center">
          {/* Headshot */}
          <div className="mb-7 flex justify-center">
            <Image
              src="/headshot.jpg"
              alt="Arnav Bhatia"
              width={128}
              height={128}
              priority
              className="h-28 w-28 rounded-full object-cover shadow-lg ring-2 ring-accent/40 md:h-32 md:w-32"
            />
          </div>

          {/* Greeting Animation (demoted to eyebrow) */}
          <div className="mb-3 text-lg font-medium text-accent md:text-xl">
            <Greetings intervalMs={2200} />
          </div>

          {/* Name */}
          <h1 className="mb-5 font-serif text-5xl leading-[1.05] md:text-7xl">
            I&apos;m Arnav Bhatia
          </h1>

          {/* Positioning line */}
          <p className="mx-auto mb-4 max-w-2xl text-xl font-medium text-foreground/85 md:text-2xl">
            Engineer who builds the system and runs the customer meeting.
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Two years shipping enterprise infrastructure and ML pipelines from discovery through
            production, equally at home in whiteboard architecture, live demos, and customer
            escalation calls. Part-time Georgia Tech OMSCS (AI/ML).
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Btn href="/experience">Experience</Btn>
            <Btn href="/projects">Projects</Btn>
            <Btn href="/contact" primary>Get in Touch</Btn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-5 w-5 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ── Impact Metrics ── */}
      <MetricsSection />

      {/* ── Technical Stack ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-3xl md:text-4xl">Technical Stack</h2>
            <p className="text-muted">Production-tested technologies</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-foreground/8 bg-background p-6 transition hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 transition group-hover:scale-110">
                <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Cloud & Infrastructure</h3>
              <p className="text-sm text-muted">
                Azure (2+ yrs production: Container Apps, Bicep, RBAC), AWS, Docker, Kubernetes, CI/CD
              </p>
            </div>

            <div className="group rounded-2xl border border-foreground/8 bg-background p-6 transition hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 transition group-hover:scale-110">
                <svg className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Backend & APIs</h3>
              <p className="text-sm text-muted">
                Python, TypeScript, C#/.NET, SQL, REST, OpenAPI, Node.js, Microservices
              </p>
            </div>

            <div className="group rounded-2xl border border-foreground/8 bg-background p-6 transition hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 transition group-hover:scale-110">
                <svg className="h-6 w-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Data, ML & AI</h3>
              <p className="text-sm text-muted">
                Anthropic API, MCP Servers, Agentic Pipelines, LLM Tooling & Evals, Scikit-learn, Pandas, TensorFlow, Weak Supervision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Career Highlights ── */}
      <section className="py-20 px-6 bg-gradient-to-b from-foreground/[0.03] to-background">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-3xl md:text-4xl">Career Highlights</h2>
            <p className="text-muted">Key achievements across enterprise engagements</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-foreground/8 bg-background p-6 transition hover:shadow-lg hover:shadow-accent/5">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-amber-500/8 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  MoZeus
                </div>
                <h3 className="mb-2 text-lg font-semibold">MoZeus Forge: Internal Deployment Platform</h3>
                <p className="text-sm text-muted">
                  Designed and built a .NET 9 Blazor application that automates Azure infrastructure provisioning via Bicep templates. Cut new-account onboarding from 4 weeks to 1 day, turning bespoke client engagements into repeatable, productized deployments.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-foreground/8 bg-background p-6 transition hover:shadow-lg hover:shadow-accent/5">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-amber-500/8 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  MoZeus
                </div>
                <h3 className="mb-2 text-lg font-semibold">Dynamic Package Loading Architecture</h3>
                <p className="text-sm text-muted">
                  Built a runtime plugin system where a single shared container image loads client-specific logic via NuGet packages at request time. Adding a new client became configuration, not deployment.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-foreground/8 bg-background p-6 transition hover:shadow-lg hover:shadow-accent/5">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-emerald-500/8 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Blue Yonder
                </div>
                <h3 className="mb-2 text-lg font-semibold">Enterprise Gateway Architecture</h3>
                <p className="text-sm text-muted">
                  Built and owned BFF gateway serving 100+ daily enterprise users, unifying 2,700+ microservice endpoints with auto-generated OpenAPI docs.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-foreground/8 bg-background p-6 transition hover:shadow-lg hover:shadow-accent/5">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-violet-500/8 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  Blue Yonder
                </div>
                <h3 className="mb-2 text-lg font-semibold">ML Deployment Pipeline</h3>
                <p className="text-sm text-muted">
                  Architected CI/CD for ML model publishing across 8 environments, achieving 60% faster deployments with versioning, rollback, and full traceability.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-foreground/8 bg-background p-6 transition hover:shadow-lg hover:shadow-accent/5">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-amber-500/8 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  MoZeus
                </div>
                <h3 className="mb-2 text-lg font-semibold">Cloud Cost Optimization</h3>
                <p className="text-sm text-muted">
                  Cut Azure infrastructure spend 50% from $20K to $10K/month by redesigning container infrastructure around scale-to-zero. Standardized as defaults in every future deployment.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-foreground/8 bg-background p-6 transition hover:shadow-lg hover:shadow-accent/5">
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-rose-500/8 transition group-hover:scale-150" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-700 dark:text-rose-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  Manhattan Associates
                </div>
                <h3 className="mb-2 text-lg font-semibold">ML Demand Forecasting</h3>
                <p className="text-sm text-muted">
                  Prototyped TensorFlow models improving inventory prediction by 25%, supporting integration across 200+ fulfillment nodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What I'm Looking For ── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-foreground/8 bg-gradient-to-br from-amber-500/[0.04] via-background to-stone-500/[0.04] p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-3 font-serif text-3xl md:text-4xl">What I&apos;m Looking For</h2>
              <p className="text-muted">Roles where I can combine technical depth with client impact</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
              {[
                { icon: "\u{1F6E0}\uFE0F", label: "Solutions Engineer" },
                { icon: "\u{1F680}", label: "Forward Deployed Engineer" },
                { icon: "\u{1F91D}", label: "Sales Engineer" },
                { icon: "\u2699\uFE0F", label: "Backend Engineer" },
                { icon: "\u{1F4BB}", label: "Software Engineer" },
              ].map((role) => (
                <div key={role.label} className="rounded-xl border border-foreground/8 bg-background/80 p-4 text-center shadow-sm transition hover:border-accent/20 hover:shadow-md">
                  <div className="mb-2 text-2xl">{role.icon}</div>
                  <p className="text-sm font-semibold">{role.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted">
              I&apos;ve always been the engineer closest to the customer, writing the code and sitting in the room where the problem arose. That feedback loop is what I build my career around.
            </p>
          </div>
        </div>
      </section>

      {/* ── Open Source ── */}
      <OpenSource />

      {/* ── CTA Section ── */}
      <section className="py-24 px-6 bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.06]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-5xl">Ready to Build Something Great?</h2>
          <p className="mb-10 text-lg text-muted">
            I&apos;m always open to discussing new opportunities, collaborations, and interesting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Btn href="/contact" primary>Get in Touch</Btn>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-6 py-3 text-sm font-semibold transition hover:bg-foreground/5"
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
