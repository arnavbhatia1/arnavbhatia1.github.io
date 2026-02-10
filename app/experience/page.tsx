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
      "Owned full lifecycle delivery for 6+ enterprise clients—discovery, scoping, architecture, and production deployment—as the primary technical point of contact.",
      "Architected containerized platforms on Azure (Docker, Kubernetes, Bicep), cutting operational costs by 40% and enabling reproducible deployments across environments.",
      "Built ETL pipelines for 1M+ data points, powering core products and eliminating manual data preparation workflows.",
      "Led technical demos for stakeholders, translating requirements into SOWs and architecture proposals to accelerate closure.",
    ],
  },
  {
    company: "Blue Yonder",
    role: "Software Engineer",
    location: "Atlanta, GA",
    period: "March 2024 - September 2025",
    achievements: [
      "Owned BFF gateway aggregating 2,700+ microservice endpoints for 100+ daily enterprise users, building backend services in .NET and React UIs.",
      "Architected CI/CD pipelines for ML model publishing across 8 environments, cutting deployment time by 60% while enforcing versioning, rollback, and traceability.",
      "Automated backend scheduling (Python, C#) and testing infrastructure (NUnit), boosting velocity by 30%.",
      "Developed OpenAPI-driven API documentation layer, directly cited by sales as a factor in increasing platform close rates.",
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
          Software Engineer with 2+ years building production systems for enterprise clients, from discovery to deployment. Combines hands-on backend and cloud-native development (Azure, Python, C#) with customer-facing delivery.
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
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm">
                  <div className="mb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{edu.school}</h3>
                      <p className="text-lg text-foreground/90">{edu.degree}</p>
                      {edu.specialization && <p className="text-foreground/70">{edu.specialization}</p>}
                      {edu.minor && <p className="text-foreground/70">{edu.minor}</p>}
                    </div>
                    <div className="text-sm text-foreground/60 sm:text-right">
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
            <h2 className="mb-4 text-2xl font-bold">My Journey & What Drives Me</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I've always been drawn to problems that sit at the intersection of technical complexity and business impact.
                At Boston University, I combined computer science with business administration to understand how systems work
                and to grasp how they create value together. That foundation has shaped my thought process in every role,
                and it's why I'm naturally drawn to client-facing technical roles.
              </p>
              <p>
                From coordinating cross-functional teams at <strong>Lighter Than Air</strong> to building enterprise platforms at{" "}
                <strong>Manhattan Associates</strong> and <strong>Blue Yonder</strong>, I've consistently operated at the boundary
                between engineering and business. Now at <strong>MoZeus</strong>, I work as a product engineer with significant
                client exposure—joining discovery calls, scoping requirements, and shipping solutions that directly impact revenue
                and reduce operational expense.
              </p>
              <p>
                I'm working towards being a <strong>Solutions Engineer</strong>, <strong>Forward Deployed Engineer</strong>,
                or <strong>Sales Engineer</strong>. I believe I can leverage my full-stack technical depth alongside my ability to
                communicate with stakeholders, run client engagements, and close deals through technical expertise. I like to be the
                bridge between product, engineering, and customers. I want to be the person who can demo a complex system,
                scope the technical requirements, architect the solution, and build it. That's where I make the biggest impact.
              </p>
              <p>
                Beyond the day-to-day, I'm driven by the idea of contributing to the next major advancement, whether that's
                in AI, infrastructure, finance, or something not discovered yet. Rather than chasing a specific stack, I am
                drawn to meaningful problems that require both technical rigor and the ability to see the bigger picture.
              </p>
            </div>
          </section>

          {/* Engineering Approach */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">How I Work With Clients</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Understand Before Building</h3>
                <p className="text-sm text-foreground/80">
                  I dig into the architecture and client feedback before writing code. The best technical solution is useless if it
                  doesn't solve what the client actually needs.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Communicate Constantly</h3>
                <p className="text-sm text-foreground/80">
                  Clients don't want surprises. I keep stakeholders in the loop, set realistic expectations, and
                  flag blockers early—trust is built through transparency.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Demo Early, Iterate Fast</h3>
                <p className="text-sm text-foreground/80">
                  I ship working prototypes quickly and refine based on feedback. Real user input beats assumptions
                  every time—get it in front of clients and learn.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/10 bg-background p-5">
                <h3 className="mb-2 text-lg font-semibold">Own It End-to-End</h3>
                <p className="text-sm text-foreground/80">
                  From scoping to deployment to support, I take full ownership. Clients have one point of contact
                  who can answer technical and business questions alike.
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
                their adoption processes. That work inspired my <strong>Shelter Match</strong> project—using
                semantic matching to connect shelter dogs with families based on temperament and lifestyle. It's
                one of the few side projects I've actually finished, because it solved a real problem I watched
                play out every weekend.
              </p>
              <p>
                I spent years as a competitive athlete—squash, mainly—and that background still shapes how I think.
                Athletes train with a chip on their shoulder, always assuming they're the underdog with something to
                prove. That mentality stuck with me. I don't coast. I don't assume I've figured it out. Every project
                and role has an underlying drive to prove my aptitude.
              </p>
              <p>
                Outside of work, I'm fascinated by <strong>quantitative and computational finance engineering</strong>, the
                intersection of math, systems design, and market dynamics. I'm drawn to <strong>space exploration</strong>
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
