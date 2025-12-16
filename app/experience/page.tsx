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
    company: "Blue Yonder",
    role: "Software Engineer",
    location: "Atlanta, GA",
    period: "June 2024 – Present",
    achievements: [
      "Architected and delivered back-for-frontend gateways that ingest 2,700+ microservice endpoints and auto-generates OpenAPI-driven dynamic UIs, improving enterprise client workflows and usability.",
      "Built a multi-environment ML model publishing pipeline across 8 environments, reducing deployment time by 60% while enforcing versioning, rollback, and traceability across teams.",
      "Redesigned frontend flows by identifying UX friction points and building meta-link driven pages, enabling faster access to APIs and smoother adoption for customers.",
      "Implemented backend scheduling services to automate ML retraining and regression tests to reduce release defects and increase deployment velocity.",
    ],
  },
  {
    company: "Manhattan Associates",
    role: "R&D Software Engineer Intern",
    location: "Atlanta, GA",
    period: "May 2023 – August 2023",
    achievements: [
      "Built REST microservices and dashboards automating allocation across 200+ fulfillment nodes, improving reliability and supply chain execution.",
      "Refactored cache-mapping logic, reducing mismatch errors by 90% and boosting order throughput across PSR lines.",
      "Created Python Jenkins plugins for dynamic ML dataset filtering, cutting test cycle times by 20%.",
    ],
  },
  {
    company: "Lighter Than Air",
    role: "Technical Project Engineer Manager Intern",
    location: "Sunnyvale, CA",
    period: "June 2022 – September 2022",
    achievements: [
      "Unified 1,200+ avionics artifacts from GitHub, JIRA, and Confluence into a traceability matrix to accelerate FAA reviews.",
      "Coordinated cross-functional syncs across embedded hardware, flight software, and test teams, unblocking critical path items and keeping certification milestones on track.",
      "Authored self-documenting API references and SEO-optimized pages for 24 avionics modules, doubling internal discovery rates and cutting onboarding time for new engineers.",
    ],
  },
];

const education = {
  school: "Boston University",
  degree: "B.A. – Computer Science",
  minor: "Minor – Business Administration and Management",
  location: "Boston, MA",
  period: "August 2020 – May 2024",
  societies: [
    "Varsity Squash Captain",
    "IM Basketball",
    "BizTech Club",
    "Stock Trading Club",
    "Cybersecurity Club",
  ],
};

const TimelineItem = ({ exp }: { exp: Experience }) => (
  <div className="relative pl-8 pb-12 last:pb-0">
    {/* Timeline line */}
    <div className="absolute left-[11px] top-[8px] bottom-0 w-[2px] bg-gradient-to-b from-foreground/20 to-transparent last:hidden" />

    {/* Timeline dot */}
    <div className="absolute left-0 top-[4px] h-6 w-6 rounded-full border-2 border-foreground bg-background flex items-center justify-center">
      <div className="h-2 w-2 rounded-full bg-foreground" />
    </div>

    <div className="rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="text-xl font-bold">{exp.company}</h3>
          <p className="text-lg text-foreground/90">{exp.role}</p>
        </div>
        <div className="text-sm text-foreground/60 sm:text-right">
          <p>{exp.period}</p>
          <p>{exp.location}</p>
        </div>
      </div>

      <ul className="space-y-3">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
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
        <h1 className="mb-3 text-4xl font-bold">Professional Experience</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">
          A journey through impactful engineering roles building scalable systems, ML pipelines, and cloud-native platforms.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveTab("experience")}
          className={[
            "rounded-full border px-5 py-2.5 text-sm font-medium transition",
            activeTab === "experience"
              ? "border-black/80 bg-black text-white"
              : "border-foreground/10 bg-background hover:bg-gray-50",
          ].join(" ")}
        >
          Work History
        </button>
        <button
          onClick={() => setActiveTab("journey")}
          className={[
            "rounded-full border px-5 py-2.5 text-sm font-medium transition",
            activeTab === "journey"
              ? "border-black/80 bg-black text-white"
              : "border-foreground/10 bg-background hover:bg-gray-50",
          ].join(" ")}
        >
          My Journey
        </button>
      </div>

      {activeTab === "experience" ? (
        <div>
          {/* Work Experience Timeline */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">Work Experience</h2>
            <div>
              {experiences.map((exp, index) => (
                <TimelineItem key={index} exp={exp} />
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Education</h2>
            <div className="rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm">
              <div className="mb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold">{education.school}</h3>
                  <p className="text-lg text-foreground/90">{education.degree}</p>
                  <p className="text-foreground/70">{education.minor}</p>
                </div>
                <div className="text-sm text-foreground/60 sm:text-right">
                  <p>{education.period}</p>
                  <p>{education.location}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="mb-2 text-sm font-semibold text-foreground/90">Societies & Activities:</p>
                <div className="flex flex-wrap gap-2">
                  {education.societies.map((society, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium"
                    >
                      {society}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Professional Journey */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">My Professional Journey</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                My journey in software engineering began at Boston University, where I combined computer science
                with business administration to understand not just how to build systems, but why they matter.
                As Varsity Squash Captain, I learned that winning isn't about individual skill—it's about
                coordinating a team toward a shared goal, a lesson that has shaped my approach to engineering.
              </p>
              <p>
                During my internship at <strong>Lighter Than Air</strong>, I discovered the power of documentation
                and traceability in mission-critical systems. Working on avionics certification taught me that
                great engineering isn't just about writing code—it's about creating systems that others can
                understand, maintain, and trust. This experience sparked my passion for developer experience
                and platform engineering.
              </p>
              <p>
                At <strong>Manhattan Associates</strong>, I dove into supply chain automation and learned to
                measure success in business metrics: 90% reduction in cache errors, 20% faster test cycles.
                I realized that the best technical solutions are invisible to users—they just work, faster
                and more reliably than before.
              </p>
              <p>
                Today at <strong>Blue Yonder</strong>, I'm building the infrastructure that powers AI-driven
                supply chain decisions. From API gateways serving 2,700+ endpoints to ML pipelines deploying
                across 8 environments, I focus on systems that scale. But beyond the technical achievements,
                I'm most proud of how these platforms enable other engineers and drive adoption across
                enterprise clients.
              </p>
            </div>
          </section>

          {/* What Drives Me */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">What Drives Me Professionally</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm driven by the intersection of <strong>engineering excellence and business impact</strong>.
                The most satisfying moments in my career aren't just shipping features—they're seeing adoption
                metrics climb, hearing customers say "this just works," and watching teams move faster because
                of systems I built.
              </p>
              <p>
                I believe in <strong>building platforms, not just products</strong>. Whether it's an API gateway
                that auto-generates documentation or a CI/CD pipeline with built-in rollback capabilities,
                I'm focused on creating foundations that empower entire teams to innovate faster.
              </p>
              <p>
                I'm passionate about <strong>bridging technical and business teams</strong>. My business minor
                wasn't an accident—I wanted to speak both languages. The best solutions come from understanding
                not just what to build, but why it matters and how it drives ROI.
              </p>
            </div>
          </section>

          {/* Engineering Approach */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">My Approach to Engineering</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Measure Everything</h3>
                <p className="text-sm text-foreground/80">
                  From deployment time reductions to error rate improvements, I believe in quantifying impact.
                  If we can't measure it, we can't improve it.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Design for Failure</h3>
                <p className="text-sm text-foreground/80">
                  Versioning, rollback mechanisms, and traceability aren't optional—they're the foundation
                  of reliable systems that teams can trust.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Developer Experience First</h3>
                <p className="text-sm text-foreground/80">
                  Great platforms are invisible. Auto-generated docs, clear error messages, and intuitive
                  APIs make other engineers' lives easier.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Iterate and Ship</h3>
                <p className="text-sm text-foreground/80">
                  Perfect is the enemy of shipped. I believe in MVPs, feedback loops, and continuous
                  improvement over waiting for perfection.
                </p>
              </div>
            </div>
          </section>

          {/* Personal Interests */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Beyond the Code</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Outside of work, I'm deeply involved with the <strong>Atlanta Humane Society</strong>, where
                I've contributed 90+ hours optimizing TNR (Trap-Neuter-Return) tracking sheets and helping
                facilitate 100+ successful adoptions. This volunteer work directly inspired my{" "}
                <strong>CompanionMatcher</strong> project, applying semantic matching algorithms to connect
                shelter dogs with families based on temperament and lifestyle fit.
              </p>
              <p>
                I maintain an active lifestyle through <strong>competitive squash</strong>, league basketball,
                and coaching calisthenics. The discipline and strategy from athletics translate directly to
                engineering—both require mental toughness, pattern recognition, and continuous improvement.
              </p>
              <p>
                I'm fascinated by <strong>space exploration</strong> and the engineering challenges of
                building systems for extreme environments. I spend time exploring{" "}
                <strong>AI agentic systems</strong>, prompt engineering, and the intersection of ML with
                practical business applications. I also follow <strong>quantitative finance</strong> and
                algorithmic trading, where I see parallels between optimizing trading strategies and
                optimizing cloud infrastructure.
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
