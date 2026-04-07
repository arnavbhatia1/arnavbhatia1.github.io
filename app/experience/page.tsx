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
    role: "Product Engineer",
    location: "Atlanta, GA",
    period: "September 2025 - Present",
    achievements: [
      "Designed and built MoZeus Forge from scratch, a .NET 9 Blazor Server application that automates Azure infrastructure provisioning using Bicep templates. Clean Architecture with Strategy Pattern, dynamic template catalog, MCP Server (10 tools), REST API (8 endpoints), role-based access control, and full audit trail. Onboarding went from 4-5 days of manual work to minutes. Direct contributor to 30% month-over-month revenue growth, putting MoZeus on track for $18M against a $10M target.",
      "Architected a runtime plugin system (Dynamic Package Loading) where a single shared container image loads client-specific NuGet packages at request time via Managed Identity, reflection-based factory instantiation, and in-memory caching. Adding a new client became a configuration and package publish operation, not a deployment.",
      "Reduced monthly Azure spend from $20K to $8K ($144K annual savings) by redesigning container infrastructure around scale-to-zero with consumption workload profiles and event-driven scaling. Standardized these cost-efficient defaults inside Forge for every future deployment.",
      "Catalogued patterns across 6+ enterprise accounts and fed them back into the core product line, working with sales, revenue, and post-sales teams to define a palette of ready-to-sell offerings. Shortened deal cycles, accelerated onboarding, and eliminated greenfield rebuilds on every new account.",
      "Primary technical contact for 6+ enterprise accounts, owning discovery workshops, architecture reviews, live technical demos, and production engineering; funneled cross-account patterns to directly influence product roadmaps and expand sales surface area.",
      "Established ETL pipelines that processed 1M+ data points, accelerating account onboarding by 3 weeks.",
    ],
  },
  {
    company: "Blue Yonder",
    role: "Software Engineer",
    location: "Atlanta, GA",
    period: "March 2024 - September 2025",
    achievements: [
      "Architected backend aggregation layer spanning 2,700+ microservice endpoints serving 100+ daily enterprise users. Built production .NET services and React UIs while acting as primary technical escalation across client integration teams.",
      "Standardized ML publishing pipeline across 8 production environments using GitHub Actions, JFrog Artifactory, and Azure. Designed a compensation pattern for partial deployment failures across environment chains (not in original spec). Passed compliance audit on first review. Adopted as company-wide reference standard within two quarters.",
      "Led migration from existing security scanning to GitHub CodeQL. Ran side-by-side comparison that surfaced 3 critical issues missed by the previous tool with fewer false positives. Completed migration two sprints ahead of deadline.",
      "Automated backend scheduling workflows (Python, C#) and established NUnit testing infrastructure, increasing team delivery velocity by 30%.",
    ],
  },
  {
    company: "Manhattan Associates",
    role: "Research Engineer Intern",
    location: "Atlanta, GA",
    period: "May 2023 - August 2023",
    achievements: [
      "Prototyped demand forecast models (TensorFlow) to improve inventory prediction by 25% and aid WMOS decisions.",
      "Designed RESTful microservices to support integration across 200+ fulfillment nodes in production environments.",
      "Built Python automation dashboard to reduce test cycles by 20% and enable monitoring for non-technical stakeholders.",
    ],
  },
  {
    company: "Lighter Than Air",
    role: "Technical Project Engineer Intern",
    location: "Sunnyvale, CA",
    period: "June 2022 - September 2022",
    achievements: [
      "Consolidated 1,200+ avionics and API artifacts into a unified traceability system, accelerating FAA certification.",
      "Led cross-functional coordination across hardware, software, and test teams to unblock critical-path certification milestones.",
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
          Software and platform engineer with 2+ years owning both client-facing delivery and the internal infrastructure that makes it scalable. At Blue Yonder I owned backend systems at scale. At MoZeus I built the deployment platform behind 30% month-over-month revenue growth.
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
