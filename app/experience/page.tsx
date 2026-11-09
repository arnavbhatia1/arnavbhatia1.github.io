import Tabs from "../components/Tabs";
import { EYEBROW, RULED, RULED_Y, ENTRY_GRID, ENTRY_META } from "../lib/styles";
import type { Experience, Education } from "../lib/types";

export const metadata = {
  title: "Experience | Arnav Bhatia",
};

const experiences: Experience[] = [
  {
    company: "Moody's Analytics",
    role: "Assistant Director, AI Partnerships Engineer",
    location: "New York City, NY",
    period: "September 2025 - Present",
    achievements: [
      "Forward-deployed and customer success engineer helping enterprise customers deploy financial AI solutions directly in partner ecosystems.",
      "Open and expand new revenue streams by building agents and integrations in partner platforms, with direct ownership of onboarding, authentication, entitlements, automation, and customer delivery.",
      "Drive partner-facing AI adoption across hyperscaler and ecosystem integration layers, translating customer needs into production-ready agent, MCP, and workflow deployments.",
      "Operate at the intersection of product strategy, customer enablement, and software engineering: turning AI opportunities into revenue-generating, production-ready solutions for financial workflows.",
      "Focus on MCPs + agents + hyperscaler ecosystems to deliver secure, scalable AI experiences for enterprise customers.",
    ],
  },
  {
    company: "MoZeus",
    role: "Forward Deployed Software Engineer",
    location: "Atlanta, GA",
    period: "September 2025 - September 2025",
    achievements: [
      "Sole engineer across 7+ enterprise accounts, end to end: all discovery calls, live demos, production deployments, and escalations.",
      "Cut client onboarding from 2 weeks to 1 day with MoZeus Forge, a multi-tenant provisioning platform built from zero: parameterized Bicep modules deploy each client's full Azure stack, API adapters connect client systems in hours, and Python ETL pipelines land 1M+ client records yearly.",
      "Faster onboarding shortened sales cycles and won re-signs across current accounts, supporting ~20% annual revenue growth.",
      "Turned a one-off client request for AI photo backgrounds compositing customers' faces into a product now sold across accounts.",
      "Halved Azure compute cost from $20K to $10K/month by moving client workloads off always-on VMs onto scale-to-zero Container Apps with KEDA queue autoscaling, and reworked dynamic package loading so all product offerings run on demand.",
      "Embedded a 10-tool MCP server in the platform so AI agents can run provisioning and diagnostics against client infrastructure.",
    ],
  },
  {
    company: "Blue Yonder",
    role: "Software Engineer",
    location: "Atlanta, GA",
    period: "March 2024 - September 2025",
    achievements: [
      "Unified 2,700+ REST microservice endpoints behind a single OpenAPI-documented gateway (.NET + React) now serving 100+ enterprise users; became the technical escalation point for client integration teams when migrations broke in production.",
      "Built the CI/CD publishing pipeline for ML deployment across 8 environments (GitHub Actions, automated rollback, strict versioning, full audit trail); cleared compliance on first pass and spread organically into the company-wide standard, cutting deploy time 60%.",
      "Automated backend scheduling workflows (Python, C#) and built out NUnit test infrastructure from scratch; caught bugs at commit time instead of QA, freeing the team to ship more client-facing features each quarter.",
    ],
  },
  {
    company: "Manhattan Associates",
    role: "Research Engineer Intern",
    location: "Atlanta, GA",
    period: "May 2023 - August 2023",
    achievements: [
      "Built demand-forecasting ML prototypes with the warehouse ops team; product owners measured accuracy 25% over baseline.",
      "Delivered Java REST microservices moving live inventory data across 200+ fulfillment nodes to feed the forecasting prototypes.",
      "Built Python monitoring dashboard reducing test cycles 20% and surfacing real-time insights to non-technical stakeholders.",
    ],
  },
  {
    company: "Lighter Than Air Research",
    role: "Technical Project Engineer Intern",
    location: "Sunnyvale, CA",
    period: "June 2022 - September 2022",
    achievements: [
      "Managed avionics certifications and stakeholder schedules for Pathfinder 1, the hydrogen airship at NASA Ames Research Center.",
    ],
  },
];

const education: Education[] = [
  {
    school: "Georgia Institute of Technology",
    degree: "M.S. - Computer Science (OMSCS)",
    specialization: "Specialization: Artificial Intelligence / Machine Learning · Online & Part-Time",
    location: "Atlanta, GA",
    period: "Starting Fall 2026",
  },
  {
    school: "Boston University",
    degree: "B.A. - Computer Science",
    minor: "Minor: Business Administration and Management",
    location: "Boston, MA",
    period: "August 2020 - May 2024",
    societies: [
      "Varsity Squash Team Captain",
    ],
  },
];

const clientPrinciples = [
  {
    title: "Understand Before Building",
    body: "I dig into the architecture and client feedback before writing code. The best technical solution is useless if it doesn't solve what the client actually needs.",
  },
  {
    title: "Communicate Constantly",
    body: "Clients don't want surprises. I keep stakeholders in the loop, set realistic expectations, and flag blockers early. Trust is built through transparency.",
  },
  {
    title: "Demo Early, Iterate Fast",
    body: "I ship working prototypes quickly and refine based on feedback. Real user input beats assumptions every time. Get it in front of clients and learn.",
  },
  {
    title: "Own It End-to-End",
    body: "From scoping to deployment to support, I take full ownership. Clients have one point of contact who can answer technical and business questions alike.",
  },
];

const workHistoryPanel = (
  <div>
    {/* Work Experience */}
    <section className="mb-16">
      <h2 className={`mb-8 text-muted ${EYEBROW}`}>Work Experience</h2>
      <div className={RULED}>
        {experiences.map((exp) => (
          <article key={exp.company} className={ENTRY_GRID}>
            <div className={ENTRY_META}>
              <p>{exp.period}</p>
              <p className="mt-1.5">{exp.location}</p>
            </div>

            <div className="md:col-span-9">
              <h3 className="font-serif text-2xl">{exp.company}</h3>
              <p className="font-serif text-lg text-muted">{exp.role}</p>

              <ul className="mt-4 space-y-2.5 list-disc pl-5 marker:text-foreground/40">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="leading-relaxed text-muted">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Education */}
    <section>
      <h2 className={`mb-8 text-muted ${EYEBROW}`}>Education</h2>
      <div className={RULED}>
        {education.map((edu) => (
          <article key={edu.school} className={ENTRY_GRID}>
            <div className={ENTRY_META}>
              <p>{edu.period}</p>
              <p className="mt-1.5">{edu.location}</p>
            </div>

            <div className="md:col-span-9">
              <h3 className="font-serif text-2xl">{edu.school}</h3>
              <p className="text-lg text-muted">{edu.degree}</p>
              {edu.specialization && (
                <p className="mt-1 max-w-[68ch] leading-relaxed text-muted">{edu.specialization}</p>
              )}
              {edu.minor && (
                <p className="mt-1 max-w-[68ch] leading-relaxed text-muted">{edu.minor}</p>
              )}

              {edu.societies && (
                <p className="mt-4 font-mono text-[11px] tracking-[0.04em] text-muted">
                  <span className="uppercase tracking-[0.12em]">Societies & Activities:</span>{" "}
                  {edu.societies.join(" · ")}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

const journeyPanel = (
  <div className="space-y-16">
    {/* Professional Journey & What Drives Me */}
    <section>
      <h2 className={`mb-8 text-muted ${EYEBROW}`}>My Journey & What Drives Me</h2>
      <div className="space-y-4">
        <p className="max-w-[68ch] leading-relaxed text-muted">
          The common thread across everything I&apos;ve done is that I&apos;ve always been the engineer closest to the customer.
          At Boston University, I combined computer science with business administration because I wanted to understand
          how systems create value, not just how they work. That instinct has shaped every role since.
        </p>
        <p className="max-w-[68ch] leading-relaxed text-muted">
          At <strong>Blue Yonder</strong> I owned backend infrastructure at scale. At <strong>MoZeus</strong> I built
          the internal platform that powered how the company sold and deployed its products. At <strong>Moody&apos;s Analytics</strong>,
          I bring that customer-facing engineering experience to AI partnerships, onboarding, and agent integrations.
          My work at MoZeus operated on two layers: <strong>Layer 1</strong> was running technical discovery with enterprise clients, designing
          and deploying containerized Azure infrastructure, and building the data pipelines and webhook integrations that
          powered client workflows. <strong>Layer 2</strong> was identifying that MoZeus had a scaling problem, where every
          client engagement was custom, manual, and slow, and systematically building the internal infrastructure to fix it.
          That second layer, the platform work, has had a direct, measurable impact on company revenue.
        </p>
        <p className="max-w-[68ch] leading-relaxed text-muted">
          Outside of work I build production-grade systems that stay live and require real engineering discipline to maintain.
          A quantitative trading bot for prediction markets using Brownian motion probability models and Kelly Criterion
          position sizing. A financial sentiment pipeline with a published MCP server on PyPI. Both share a design philosophy:
          <strong> probability over prediction, math over intuition, systems over scripts</strong>. That&apos;s the same philosophy
          I bring to partnership engineering at Moody&apos;s: design for the math to be right, build systems that adapt, and let the
          data decide.
        </p>
        <p className="max-w-[68ch] leading-relaxed text-muted">
          I&apos;ve realized my best work comes from being the person writing the code and sitting in the room where the problem
          arose. That feedback loop is what I want to build my career around. I&apos;m starting my Master&apos;s in Computer Science
          at Georgia Tech focused on AI and ML in Fall 2026.
        </p>
      </div>
    </section>

    {/* Engineering Approach */}
    <section>
      <h2 className={`mb-8 text-muted ${EYEBROW}`}>How I Work With Clients</h2>
      <div className={RULED_Y}>
        {clientPrinciples.map((principle) => (
          <div key={principle.title} className="grid gap-2 py-6 md:grid-cols-12 md:gap-6">
            <h3 className="font-serif text-xl md:col-span-4">{principle.title}</h3>
            <p className="leading-relaxed text-muted md:col-span-8">{principle.body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Personal Interests */}
    <section>
      <h2 className={`mb-8 text-muted ${EYEBROW}`}>Beyond the Code</h2>
      <div className="space-y-4">
        <p className="max-w-[68ch] leading-relaxed text-muted">
          I&apos;ve volunteered 50+ hours with the <strong>Atlanta Humane Society</strong>, helping streamline
          their adoption processes. That work inspired my <strong>CompanionMatcher</strong> project, using
          semantic matching to connect shelter dogs with families based on temperament and lifestyle. It&apos;s
          one of the few side projects I&apos;ve actually finished, because it solved a real problem I watched
          play out every weekend.
        </p>
        <p className="max-w-[68ch] leading-relaxed text-muted">
          I spent years as a competitive athlete, squash mainly, and that background still shapes how I think.
          Athletes train with a chip on their shoulder, always assuming they&apos;re the underdog with something to
          prove. That mentality stuck with me. I don&apos;t coast. I don&apos;t assume I&apos;ve figured it out. Every project
          and role has an underlying drive to prove my aptitude.
        </p>
        <p className="max-w-[68ch] leading-relaxed text-muted">
          Outside of work, I&apos;m fascinated by <strong>quantitative and computational finance engineering</strong>, the
          intersection of math, systems design, and market dynamics. Both PolyBot and MarketPulse reflect that: PolyBot
          doesn&apos;t predict where BTC goes, it computes whether the market&apos;s implied probability is miscalibrated.
          MarketPulse&apos;s trading bot doesn&apos;t guess which stocks will go up, it sizes positions based on demonstrated
          edge from actual trade statistics. Both use Kelly Criterion and both have learning pipelines that adapt based
          on outcomes, with automated test suites in the hundreds. PolyBot trades live; MarketPulse runs on paper,
          consuming my published MCP server to validate the signal-to-execution loop end to end.
        </p>
      </div>
    </section>
  </div>
);

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-5 font-serif text-4xl tracking-[-0.015em] md:text-5xl">
          Professional Experience
        </h1>
        <p className="max-w-[68ch] text-lg leading-relaxed text-muted">
          Forward-deployed engineer with 2+ years owning both client-facing delivery and the internal infrastructure that makes it scalable. Based in New York City, I now work at Moody&apos;s Analytics as an Assistant Director, AI Partnerships Engineer, where I build financial AI solutions directly in partner ecosystems for enterprise customers.
        </p>
      </div>

      <Tabs
        className="mb-12"
        tabs={[
          { key: "experience", label: "Work History" },
          { key: "journey", label: "My Journey" },
        ]}
        panels={{ experience: workHistoryPanel, journey: journeyPanel }}
      />
    </main>
  );
}
