import Link from "next/link";
import Image from "next/image";
import OpenSource from "./components/OpenSource";
import MetricsSection from "./components/MetricsSection";

export const metadata = {
  title: "Arnav Bhatia | Software Engineer",
  description:
    "Software Engineer with 2+ years building production systems for enterprise clients. Incoming M.S. CS (AI/ML) at Georgia Tech.",
};

const stack = [
  {
    category: "Cloud & Infrastructure",
    items: "Azure (2+ yrs production: Container Apps, Bicep, RBAC), AWS, Docker, Kubernetes, CI/CD",
  },
  {
    category: "Backend & APIs",
    items: "Python, TypeScript, C#/.NET, SQL, REST, OpenAPI, Node.js, Microservices",
  },
  {
    category: "Data, ML & AI",
    items:
      "Anthropic API, MCP Servers, Agentic Pipelines, LLM Tooling & Evals, Scikit-learn, Pandas, TensorFlow, Weak Supervision",
  },
];

const highlights = [
  {
    org: "MoZeus",
    title: "MoZeus Forge: Internal Deployment Platform",
    body: "Designed and built a .NET 9 Blazor application that automates Azure infrastructure provisioning via Bicep templates. Cut new-account onboarding from 2 weeks to 1 day, turning bespoke client engagements into repeatable, productized deployments.",
  },
  {
    org: "MoZeus",
    title: "Dynamic Package Loading Architecture",
    body: "Built a runtime plugin system where a single shared container image loads client-specific logic via NuGet packages at request time. Adding a new client became configuration, not deployment.",
  },
  {
    org: "Blue Yonder",
    title: "Enterprise Gateway Architecture",
    body: "Built and owned BFF gateway serving 100+ daily enterprise users, unifying 2,700+ microservice endpoints with auto-generated OpenAPI docs.",
  },
  {
    org: "Blue Yonder",
    title: "ML Deployment Pipeline",
    body: "Architected CI/CD for ML model publishing across 8 environments, achieving 60% faster deployments with versioning, rollback, and full traceability.",
  },
  {
    org: "MoZeus",
    title: "Cloud Cost Optimization",
    body: "Cut Azure infrastructure spend 50% from $20K to $10K/month by redesigning container infrastructure around scale-to-zero. Standardized as defaults in every future deployment.",
  },
  {
    org: "Manhattan Associates",
    title: "ML Demand Forecasting",
    body: "Prototyped TensorFlow models improving inventory prediction by 25%, supporting integration across 200+ fulfillment nodes.",
  },
];

const roles = [
  "Forward Deployed Engineer",
  "Solutions Engineer / Architect",
  "Software Engineer (Infra / Platform)",
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              Arnav Bhatia · Atlanta, GA · Software Engineer @ MoZeus · Georgia Tech M.S. Computer Science (AI/ML)
            </p>

            <h1 className="font-serif text-[clamp(2.75rem,6.5vw,4.5rem)] leading-[1.04] tracking-[-0.015em]">
              Builds the system.
              <br />
              Runs the customer meeting.
            </h1>

            <p className="mt-8 max-w-[36rem] font-serif text-lg italic leading-relaxed text-foreground/90 md:text-xl">
              Two years shipping enterprise infrastructure and ML pipelines from discovery to
              production, plus agentic AI tooling, a published MCP server, and a live, profitable
              trading bot. Equally at home in whiteboard architecture, live demos, and customer
              escalation calls.
            </p>

            <div className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-[0.12em]">
              <Link
                href="/experience"
                className="border-b border-foreground/30 pb-1 text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="border-b border-foreground/30 pb-1 text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="border-b border-accent pb-1 text-accent transition-opacity hover:opacity-75"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="order-first flex md:order-none md:col-span-4 md:items-start md:justify-end">
            <Image
              src="/headshot.jpg"
              alt="Arnav Bhatia"
              width={208}
              height={208}
              priority
              className="h-44 w-44 border border-foreground/15 object-cover lg:h-52 lg:w-52"
            />
          </div>
        </div>
      </section>

      {/* ── Where I've shipped ── */}
      <section className="border-t border-foreground/15 px-6">
        <div className="mx-auto grid max-w-5xl gap-6 py-10 md:grid-cols-12 md:items-baseline">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-3">
            Where I&apos;ve shipped
          </p>
          <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3 md:col-span-9">
            {[
              { name: "MoZeus" },
              { name: "Blue Yonder" },
              { name: "Manhattan Associates" },
              { name: "Lighter Than Air", sub: "NASA × Brin" },
            ].map((company) => (
              <span key={company.name} className="font-serif text-xl text-foreground/80">
                {company.name}
                {company.sub && (
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                    {company.sub}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Metrics ── */}
      <MetricsSection />

      {/* ── Technical Stack ── */}
      <section className="border-t border-foreground/15 px-6">
        <div className="mx-auto max-w-5xl py-16 md:py-20">
          <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Technical stack
          </p>
          <div className="divide-y divide-foreground/15 border-y border-foreground/15">
            {stack.map((row) => (
              <div key={row.category} className="grid gap-2 py-6 md:grid-cols-12 md:gap-6">
                <h3 className="font-serif text-xl md:col-span-4">{row.category}</h3>
                <p className="font-mono text-sm leading-relaxed text-muted md:col-span-8">
                  {row.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career Highlights ── */}
      <section className="border-t border-foreground/15 px-6">
        <div className="mx-auto max-w-5xl py-16 md:py-20">
          <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Career highlights
          </p>
          <div className="divide-y divide-foreground/15 border-t border-foreground/15">
            {highlights.map((item) => (
              <article key={item.title} className="grid gap-3 py-8 md:grid-cols-12 md:gap-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-3 md:pt-1.5">
                  {item.org}
                </p>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-[68ch] leading-relaxed text-muted">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I'm Looking For ── */}
      <section className="border-t border-foreground/15 px-6">
        <div className="mx-auto grid max-w-5xl gap-8 py-16 md:grid-cols-12 md:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-3">
            Looking for
          </p>
          <div className="md:col-span-9">
            <ul className="space-y-4">
              {roles.map((role, i) => (
                <li key={role} className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-2xl md:text-3xl">{role}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-[60ch] leading-relaxed text-muted">
              I&apos;ve always been the engineer closest to the customer, writing the code and sitting
              in the room where the problem arose. That feedback loop is what I build my career
              around.
            </p>
          </div>
        </div>
      </section>

      {/* ── Open Source ── */}
      <OpenSource />

      {/* ── CTA ── */}
      <section className="border-t border-foreground/15 px-6">
        <div className="mx-auto max-w-5xl py-20 md:py-28">
          <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
            Hiring for forward-deployed, solutions, or platform roles?
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
            The resume is current, the code is public, and I reply within a day.
          </p>
          <div className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-[0.12em]">
            <Link
              href="/contact"
              className="border-b border-accent pb-1 text-accent transition-opacity hover:opacity-75"
            >
              Get in touch
            </Link>
            <Link
              href="/resume"
              className="border-b border-foreground/30 pb-1 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
