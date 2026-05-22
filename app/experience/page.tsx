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
      "Drove 20% MoM revenue growth by building MoZeus Forge from zero, an internal Azure deployment platform (Bicep/Terraform) that turned bespoke client engagements into productized, repeatable deployments.",
      "Ran 6+ enterprise accounts end-to-end (discovery, solutioning, live demos, and production delivery) as sole technical owner; patterns surfaced across accounts shaped core features (RunComfy AI processing; generic API adapter for client specs).",
      "Cut Azure infrastructure spend 50% ($20K to $10K/month) by re-architecting compute and storage across client environments.",
      "Cut new-account onboarding from 4 weeks to 1 day with ETL pipelines processing 1M+ records per client, eliminating the largest blocker in the customer-go-live path.",
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
      "Coordinated avionics certification artifacts and NASA stakeholder schedules for a hydrogen-fueled airship deployment program.",
    ],
  },
];

const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "M.S. - Computer Science",
    specialization: "Specialization: Artificial Intelligence / Machine Learning",
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

const TimelineItem = ({ exp }: { exp: Experience }) => (
  <div className="relative pl-8 pb-12 last:pb-0">
    <div className="absolute left-[11px] top-[8px] bottom-0 w-[2px] bg-gradient-to-b from-foreground/20 to-transparent last:hidden" />
    <div className="absolute left-0 top-[4px] h-6 w-6 rounded-full border-2 border-foreground bg-background flex items-center justify-center">
      <div className="h-2 w-2 rounded-full bg-foreground" />
    </div>

    <div className="rounded-2xl border border-foreground/8 bg-background p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="text-xl font-bold">{exp.company}</h3>
          <p className="text-lg text-foreground/90">{exp.role}</p>
        </div>
        <div className="text-sm text-muted sm:text-right">
          <p>{exp.period}</p>
          <p>{exp.location}</p>
        </div>
      </div>

      <ul className="space-y-3">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<"experience" | "journey">("experience");

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-3 font-serif text-4xl">Professional Experience</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          Software and platform engineer with 2+ years owning both client-facing delivery and the internal infrastructure that makes it scalable. At Blue Yonder I owned backend systems at scale. At MoZeus I built the deployment platform behind 20% month-over-month revenue growth.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveTab("experience")}
          className={[
            "rounded-full border px-5 py-2.5 text-sm font-medium transition",
            activeTab === "experience"
              ? "border-foreground/80 bg-foreground text-background"
              : "border-foreground/8 bg-background hover:bg-foreground/5",
          ].join(" ")}
        >
          Work History
        </button>
        <button
          onClick={() => setActiveTab("journey")}
          className={[
            "rounded-full border px-5 py-2.5 text-sm font-medium transition",
            activeTab === "journey"
              ? "border-foreground/80 bg-foreground text-background"
              : "border-foreground/8 bg-background hover:bg-foreground/5",
          ].join(" ")}
        >
          My Journey
        </button>
      </div>

      {activeTab === "experience" ? (
        <div>
          {/* Work Experience Timeline */}
          <section className="mb-16">
            <h2 className="mb-6 font-serif text-2xl">Work Experience</h2>
            <div>
              {experiences.map((exp, index) => (
                <TimelineItem key={index} exp={exp} />
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="mb-6 font-serif text-2xl">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="rounded-2xl border border-foreground/8 bg-background p-6 shadow-sm">
                  <div className="mb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{edu.school}</h3>
                      <p className="text-lg text-foreground/90">{edu.degree}</p>
                      {edu.specialization && <p className="text-muted">{edu.specialization}</p>}
                      {edu.minor && <p className="text-muted">{edu.minor}</p>}
                    </div>
                    <div className="text-sm text-muted sm:text-right">
                      <p>{edu.period}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>

                  {edu.societies && (
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-semibold text-foreground/90">Societies & Activities:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.societies.map((society, i) => (
                          <span
                            key={i}
                            className="inline-block rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium"
                          >
                            {society}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Professional Journey & What Drives Me */}
          <section>
            <h2 className="mb-4 font-serif text-2xl">My Journey & What Drives Me</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                The common thread across everything I've done is that I've always been the engineer closest to the customer.
                At Boston University, I combined computer science with business administration because I wanted to understand
                how systems create value, not just how they work. That instinct has shaped every role since.
              </p>
              <p>
                At <strong>Blue Yonder</strong> I owned backend infrastructure at scale. At <strong>MoZeus</strong> I've expanded
                into building the internal platform that now powers how the company sells and deploys its products. That work
                operates on two layers: <strong>Layer 1</strong> is running technical discovery with enterprise clients, designing
                and deploying containerized Azure infrastructure, and building the data pipelines and webhook integrations that
                power client workflows. <strong>Layer 2</strong> is identifying that MoZeus had a scaling problem, where every
                client engagement was custom, manual, and slow, and systematically building the internal infrastructure to fix it.
                That second layer, the platform work, has had a direct, measurable impact on company revenue.
              </p>
              <p>
                Outside of work I build production-grade systems that stay live and require real engineering discipline to maintain.
                A quantitative trading bot for prediction markets using Brownian motion probability models and Kelly Criterion
                position sizing. A financial sentiment pipeline with a published MCP server on PyPI. Both share a design philosophy:
                <strong> probability over prediction, math over intuition, systems over scripts</strong>. That's the same philosophy
                I bring to infrastructure work at MoZeus: design for the math to be right, build systems that adapt, and let the
                data decide.
              </p>
              <p>
                I've realized my best work comes from being the person writing the code and sitting in the room where the problem
                arose. That feedback loop is what I want to build my career around. I'm starting my Master's in Computer Science
                at Georgia Tech focused on AI and ML next fall.
              </p>
            </div>
          </section>

          {/* Engineering Approach */}
          <section>
            <h2 className="mb-4 font-serif text-2xl">How I Work With Clients</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-foreground/8 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Understand Before Building</h3>
                <p className="text-sm text-muted">
                  I dig into the architecture and client feedback before writing code. The best technical solution is useless if it
                  doesn't solve what the client actually needs.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/8 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Communicate Constantly</h3>
                <p className="text-sm text-muted">
                  Clients don't want surprises. I keep stakeholders in the loop, set realistic expectations, and
                  flag blockers early. Trust is built through transparency.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/8 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Demo Early, Iterate Fast</h3>
                <p className="text-sm text-muted">
                  I ship working prototypes quickly and refine based on feedback. Real user input beats assumptions
                  every time. Get it in front of clients and learn.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/8 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Own It End-to-End</h3>
                <p className="text-sm text-muted">
                  From scoping to deployment to support, I take full ownership. Clients have one point of contact
                  who can answer technical and business questions alike.
                </p>
              </div>
            </div>
          </section>

          {/* Personal Interests */}
          <section>
            <h2 className="mb-4 font-serif text-2xl">Beyond the Code</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I've volunteered 50+ hours with the <strong>Atlanta Humane Society</strong>, helping streamline
                their adoption processes. That work inspired my <strong>Shelter Match</strong> project, using
                semantic matching to connect shelter dogs with families based on temperament and lifestyle. It's
                one of the few side projects I've actually finished, because it solved a real problem I watched
                play out every weekend.
              </p>
              <p>
                I spent years as a competitive athlete, squash mainly, and that background still shapes how I think.
                Athletes train with a chip on their shoulder, always assuming they're the underdog with something to
                prove. That mentality stuck with me. I don't coast. I don't assume I've figured it out. Every project
                and role has an underlying drive to prove my aptitude.
              </p>
              <p>
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
