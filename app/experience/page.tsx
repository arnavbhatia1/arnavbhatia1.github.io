"use client";

import { useState } from "react";

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
  logo?: string;
};

const experiences: Experience[] = [
  {
    company: "MoZeus",
    role: "Software Engineer",
    location: "Atlanta, GA",
    period: "September 2025 - Present",
    achievements: [
      "Drove 20% MoM revenue growth by building MoZeus Forge from zero, an internal Azure deployment platform (Bicep) that turned bespoke client engagements into productized, repeatable deployments.",
      "Ran 6+ enterprise accounts end-to-end (discovery, solutioning, live demos, and production delivery) as sole technical owner; patterns surfaced across accounts shaped core features (RunComfy AI processing; generic API adapter for client specs).",
      "Cut Azure infrastructure spend 50% ($20K to $10K/month) by re-architecting compute and storage across client environments.",
      "Cut new-account onboarding from 2 weeks to 1 day with ETL pipelines processing 1M+ records per client, eliminating the largest blocker in the customer-go-live path.",
    ],
  },
  {
    company: "Blue Yonder",
    role: "Software Engineer",
    location: "Atlanta, GA",
    period: "March 2024 - September 2025",
    achievements: [
      "Unified 2,700+ microservice endpoints into a single API surface (.NET + React) used by 100+ daily enterprise users; became the technical escalation point for client integration teams when migrations broke in production.",
      "Cut ML model deployment cycles 60% across 8 environments by shipping a publishing pipeline with automated rollback, strict versioning, and full audit trail, built to enterprise compliance requirements from day one.",
      "Automated backend scheduling workflows (Python, C#) and built out NUnit test infrastructure from scratch; caught bugs at commit time instead of QA, freeing the team to ship more client-facing features each quarter.",
    ],
  },
  {
    company: "Manhattan Associates",
    role: "Research Engineer Intern",
    location: "Atlanta, GA",
    period: "May 2023 - August 2023",
    achievements: [
      "Shipped RESTful microservices to production handling inventory updates and order events flow across 200+ fulfillment nodes.",
      "Improved inventory prediction accuracy 25% over baseline on curated supply chain datasets, evaluated against both precision/recall and business-impact metrics.",
      "Built Python monitoring dashboard reducing test cycles 20% and surfacing real-time insights to non-technical stakeholders.",
    ],
  },
  {
    company: "Lighter Than Air",
    role: "Technical Project Engineer Intern",
    location: "Sunnyvale, CA",
    period: "June 2022 - September 2022",
    achievements: [
      "Coordinated avionics certifications and stakeholder schedules for Pathfinder 1, a hydrogen airship at NASA Ames Research Center.",
    ],
  },
];

const education = [
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

const TimelineItem = ({ exp }: { exp: Experience }) => (
  <article className="grid gap-3 py-8 md:grid-cols-12 md:gap-6">
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-3 md:pt-1.5">
      <p>{exp.period}</p>
      <p className="mt-1.5">{exp.location}</p>
    </div>

    <div className="md:col-span-9">
      <h3 className="font-serif text-2xl">{exp.company}</h3>
      <p className="font-serif text-lg text-muted">{exp.role}</p>

      <ul className="mt-4 space-y-2.5 list-disc pl-5 marker:text-foreground/40">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="leading-relaxed text-muted">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<"experience" | "journey">("experience");

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-5 font-serif text-4xl tracking-[-0.015em] md:text-5xl">
          Professional Experience
        </h1>
        <p className="max-w-[68ch] text-lg leading-relaxed text-muted">
          Software and platform engineer with 2+ years owning both client-facing delivery and the internal infrastructure that makes it scalable. At Blue Yonder I owned backend systems at scale. At MoZeus I built the deployment platform behind 20% month-over-month revenue growth.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-12 flex flex-wrap items-baseline gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.12em]">
        <button
          onClick={() => setActiveTab("experience")}
          className={
            activeTab === "experience"
              ? "border-b-2 border-accent pb-2 text-foreground"
              : "border-b-2 border-transparent pb-2 text-muted transition-colors hover:text-foreground"
          }
        >
          Work History
        </button>
        <button
          onClick={() => setActiveTab("journey")}
          className={
            activeTab === "journey"
              ? "border-b-2 border-accent pb-2 text-foreground"
              : "border-b-2 border-transparent pb-2 text-muted transition-colors hover:text-foreground"
          }
        >
          My Journey
        </button>
      </div>

      {activeTab === "experience" ? (
        <div>
          {/* Work Experience */}
          <section className="mb-16">
            <h2 className="mb-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              Work Experience
            </h2>
            <div className="divide-y divide-foreground/15 border-t border-foreground/15">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} exp={exp} />
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="mb-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              Education
            </h2>
            <div className="divide-y divide-foreground/15 border-t border-foreground/15">
              {education.map((edu, index) => (
                <article key={index} className="grid gap-3 py-8 md:grid-cols-12 md:gap-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-3 md:pt-1.5">
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
      ) : (
        <div className="space-y-16">
          {/* Professional Journey & What Drives Me */}
          <section>
            <h2 className="mb-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              My Journey & What Drives Me
            </h2>
            <div className="space-y-4">
              <p className="max-w-[68ch] leading-relaxed text-muted">
                The common thread across everything I've done is that I've always been the engineer closest to the customer.
                At Boston University, I combined computer science with business administration because I wanted to understand
                how systems create value, not just how they work. That instinct has shaped every role since.
              </p>
              <p className="max-w-[68ch] leading-relaxed text-muted">
                At <strong>Blue Yonder</strong> I owned backend infrastructure at scale. At <strong>MoZeus</strong> I've expanded
                into building the internal platform that now powers how the company sells and deploys its products. That work
                operates on two layers: <strong>Layer 1</strong> is running technical discovery with enterprise clients, designing
                and deploying containerized Azure infrastructure, and building the data pipelines and webhook integrations that
                power client workflows. <strong>Layer 2</strong> is identifying that MoZeus had a scaling problem, where every
                client engagement was custom, manual, and slow, and systematically building the internal infrastructure to fix it.
                That second layer, the platform work, has had a direct, measurable impact on company revenue.
              </p>
              <p className="max-w-[68ch] leading-relaxed text-muted">
                Outside of work I build production-grade systems that stay live and require real engineering discipline to maintain.
                A quantitative trading bot for prediction markets using Brownian motion probability models and Kelly Criterion
                position sizing. A financial sentiment pipeline with a published MCP server on PyPI. Both share a design philosophy:
                <strong> probability over prediction, math over intuition, systems over scripts</strong>. That's the same philosophy
                I bring to infrastructure work at MoZeus: design for the math to be right, build systems that adapt, and let the
                data decide.
              </p>
              <p className="max-w-[68ch] leading-relaxed text-muted">
                I've realized my best work comes from being the person writing the code and sitting in the room where the problem
                arose. That feedback loop is what I want to build my career around. I'm starting my Master's in Computer Science
                at Georgia Tech focused on AI and ML next fall.
              </p>
            </div>
          </section>

          {/* Engineering Approach */}
          <section>
            <h2 className="mb-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              How I Work With Clients
            </h2>
            <div className="divide-y divide-foreground/15 border-y border-foreground/15">
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
            <h2 className="mb-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              Beyond the Code
            </h2>
            <div className="space-y-4">
              <p className="max-w-[68ch] leading-relaxed text-muted">
                I've volunteered 50+ hours with the <strong>Atlanta Humane Society</strong>, helping streamline
                their adoption processes. That work inspired my <strong>CompanionMatcher</strong> project, using
                semantic matching to connect shelter dogs with families based on temperament and lifestyle. It's
                one of the few side projects I've actually finished, because it solved a real problem I watched
                play out every weekend.
              </p>
              <p className="max-w-[68ch] leading-relaxed text-muted">
                I spent years as a competitive athlete, squash mainly, and that background still shapes how I think.
                Athletes train with a chip on their shoulder, always assuming they're the underdog with something to
                prove. That mentality stuck with me. I don't coast. I don't assume I've figured it out. Every project
                and role has an underlying drive to prove my aptitude.
              </p>
              <p className="max-w-[68ch] leading-relaxed text-muted">
                Outside of work, I'm fascinated by <strong>quantitative and computational finance engineering</strong>, the
                intersection of math, systems design, and market dynamics. Both PolyBot and MarketPulse reflect that: PolyBot
                doesn't predict where BTC goes, it computes whether the market's implied probability is miscalibrated.
                MarketPulse's trading bot doesn't guess which stocks will go up, it sizes positions based on demonstrated
                edge from actual trade statistics. Both use Kelly Criterion, both have learning pipelines that adapt based on
                outcomes, both have automated test suites in the hundreds, and both are live, running systems.
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
