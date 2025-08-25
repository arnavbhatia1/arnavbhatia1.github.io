"use client";
import { useState } from "react";

type TabKey = "work" | "personal";
const TABS: { key: TabKey; label: string }[] = [
  { key: "work", label: "Work Projects" },
  { key: "personal", label: "Personal Projects" },
];

type Project = {
  title: string;
  blurb: string;
  impact?: string;
  tech?: string[];
  demo?: string;
  code?: string;
};

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full bg-black/5 px-2.5 py-1 text-xs">{children}</span>
);

const Card = ({ p }: { p: Project }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:shadow-md">
    <h3 className="text-lg font-semibold">{p.title}</h3>
    <p className="mt-1 text-sm leading-relaxed text-black/70">{p.blurb}</p>
    {p.impact && (
      <p className="mt-2 text-sm font-medium text-black/80">
        Impact: <span className="font-normal">{p.impact}</span>
      </p>
    )}
    {!!p.tech?.length && (
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    )}
    {(p.demo || p.code) && (
      <div className="mt-3 flex flex-wrap gap-3">
        {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm font-semibold underline">Demo ↗</a>}
        {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="text-sm font-semibold underline">Code ↗</a>}
      </div>
    )}
  </div>
);

const WORK: Project[] = [
  { title: "ML Model Publishing Pipeline", blurb: "GitHub Actions → JFrog → Azure across 8 environments with gates & rollbacks.", impact: "≈60% faster releases; standardized deployments.", tech: ["GitHub Actions","JFrog","Azure","Python","CI/CD"] },
  { title: "Back-for-Frontend Gateway", blurb: "Unified ~2,700+ endpoints into composable routes with auto OpenAPI docs.", impact: "Faster onboarding; unlocked bundlable SKUs.", tech: ["Node.js","TypeScript","OpenAPI","Gateway"] },
  { title: "CI/CD Security & Coverage", blurb: "SAST/DAST/licensing and coverage gates with reporting dashboards.", impact: "Higher coverage; blocked regressions pre-merge.", tech: ["Security Scans","Coverage","Reporting"] },
  { title: "ML Retraining Orchestrator", blurb: "Scheduling APIs + eval reports, lineage, and alerts.", impact: "Shorter iteration loops; better model quality.", tech: ["Python","REST APIs","Schedulers","Monitoring"] },
];

const PERSONAL: Project[] = [
  { title: "Companion Matcher - MVP", blurb: "Matching app for dog shelters & grieving owners; fit by temperament & lifestyle.", impact: "Better matches, smoother adoptions.", tech: ["Next.js","TypeScript","Tailwind","Vector Search (planned)"] },
  { title: "DevOps Assistant (Semantic Kernel) - Upcoming ", blurb: "Agent drafts CI/CD, IaC, and policy-as-code using Azure OpenAI + SK.", impact: "Faster platform work; standardized patterns.", tech: ["Azure OpenAI","Semantic Kernel","TypeScript/.NET","GitHub Actions"] },
];

export default function ProjectsPage() {
  const [tab, setTab] = useState<TabKey>("work");
  const data = tab === "work" ? WORK : PERSONAL;

  return (
    <main className="mx-auto min-h-[80vh] w-full max-w-5xl px-5 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="mt-1 text-black/70">Impact-focused work and personal builds.</p>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={[
              "rounded-full border px-4 py-2 text-sm transition",
              tab === t.key ? "border-black/80 bg-black text-white" : "border-black/15 bg-white hover:bg-gray-50",
            ].join(" ")}
            aria-pressed={tab === t.key}
            aria-controls={`panel-${t.key}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <section id={`panel-${tab}`} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => <Card key={p.title} p={p} />)}
      </section>
    </main>
  );
}