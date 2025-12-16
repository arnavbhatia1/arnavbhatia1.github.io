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
    period: "September 2024 – Present",
    achievements: [
      "Building enterprise software solutions bridging technical and business requirements for diverse client needs.",
      "Collaborating with cross-functional teams to deliver scalable, client-focused applications.",
    ],
  },
  {
    company: "Blue Yonder",
    role: "Software Engineer",
    location: "Atlanta, GA",
    period: "June 2024 – September 2024",
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
          {/* Professional Journey & What Drives Me */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">My Journey & What Drives Me</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I've always been drawn to problems that sit at the intersection of technical complexity and business impact.
                At Boston University, I deliberately combined computer science with business administration—not just to
                understand how systems work, but to grasp why they matter and how they create value. That foundation has
                shaped every role since.
              </p>
              <p>
                From documenting avionics systems at <strong>Lighter Than Air</strong> to building supply chain automation at{" "}
                <strong>Manhattan Associates</strong>, I learned that the best engineering happens when you can translate
                between technical teams and business stakeholders. At <strong>Blue Yonder</strong>, I built ML pipelines
                and API gateways that didn't just work—they made entire teams more productive. Now at <strong>MoZeus</strong>,
                I'm applying that same philosophy: building solutions that bridge technical depth with client needs.
              </p>
              <p>
                What I'm working toward is a role as a <strong>Solutions Engineer</strong>—somewhere I can leverage both my
                technical expertise and my ability to communicate with non-technical stakeholders. I thrive when I'm the
                bridge between product, engineering, and clients. I want to be the person who can demo a complex system to
                a prospect, then turn around and architect the backend that makes it scale. That's where I see myself making
                the biggest impact.
              </p>
              <p>
                Beyond the day-to-day, I'm driven by the idea of contributing to the next major advancement—whether that's
                in AI, infrastructure, finance, or something I haven't discovered yet. I'm not chasing a specific technology;
                I'm chasing meaningful problems that require both technical rigor and the ability to see the bigger picture.
                That's what gets me up in the morning.
              </p>
            </div>
          </section>

          {/* Engineering Approach */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">My Approach to Engineering</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Metrics Over Intuition</h3>
                <p className="text-sm text-foreground/80">
                  I don't trust gut feelings when deployment times, error rates, and adoption curves tell the real story.
                  Data drives decisions—everything else is noise.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Assume Things Break</h3>
                <p className="text-sm text-foreground/80">
                  Rollbacks, versioning, and traceability aren't nice-to-haves. They're the difference between
                  systems that survive production and ones that crater at 2 AM.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Build for the Next Person</h3>
                <p className="text-sm text-foreground/80">
                  Self-documenting APIs, clear error messages, auto-generated docs—if another engineer can't
                  understand it in 10 minutes, I've failed.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Ship, Learn, Iterate</h3>
                <p className="text-sm text-foreground/80">
                  Waiting for perfection means you're not learning from real users. Get it out, gather feedback,
                  and make it better. Repeat.
                </p>
              </div>
            </div>
          </section>

          {/* Personal Interests */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Beyond the Code</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I've volunteered 50+ hours with the <strong>Atlanta Humane Society</strong>, helping streamline
                their adoption processes. That work inspired my <strong>CompanionMatcher</strong> project—using
                semantic matching to connect shelter dogs with families based on temperament and lifestyle. It's
                one of the few side projects I've actually finished, because it solved a real problem I watched
                play out every weekend.
              </p>
              <p>
                I spent years as a competitive athlete—squash, mainly—and that background still shapes how I think.
                Athletes train with a chip on their shoulder, always assuming they're the underdog with something to
                prove. That mentality stuck with me. I don't coast. I don't assume I've figured it out. Every project,
                every role, there's this underlying drive to prove I belong here—and then keep proving it.
              </p>
              <p>
                Outside of work, I'm fascinated by <strong>quantitative and computational finance engineering</strong>—the
                intersection of math, systems design, and market dynamics. I'm also drawn to <strong>space exploration</strong>
                and the engineering challenges of building systems that operate in extreme, unforgiving environments. Both
                fields demand precision, resilience, and the ability to think in probabilities rather than certainties.
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
