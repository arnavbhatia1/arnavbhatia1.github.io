"use client";

import { useState } from "react";

type TabKey = "completed" | "inprogress" | "upcoming";

const tabs: { key: TabKey; label: string }[] = [
  { key: "completed",  label: "Completed" },
  { key: "inprogress", label: "In Progress" },
  { key: "upcoming",   label: "Upcoming" },
];

const Card = ({
  title,
  issuer,
  date,
  link,
  note,
}: {
  title: string;
  issuer: string;
  date?: string;
  link?: string;
  note?: string;
}) => (
  <div className="rounded-2xl border border-foreground/10 bg-background p-4 shadow-sm">
    <div className="flex items-center justify-between gap-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      {date && <span className="text-xs text-black/60">{date}</span>}
    </div>
    <p className="mt-1 text-sm text-foreground/80">{issuer}</p>
    {note && <p className="mt-2 text-sm">{note}</p>}
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-sm font-semibold underline"
      >
        View credential ↗
      </a>
    )}
  </div>
);

export default function CertificationsPage() {
  const [active, setActive] = useState<TabKey>("completed");

  return (
    <main className="mx-auto min-h-[80vh] w-full max-w-5xl px-5 py-10">
      <h1 className="mb-2 text-3xl font-bold">Certifications</h1>
      <p className="mb-6 text-foreground/80">A quick snapshot of what’s done, in progress, and on deck.</p>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={[
              "rounded-full border px-4 py-2 text-sm transition",
              active === t.key
                ? "border-black/80 bg-black text-white"
                : "border-black/15 bg-background hover:bg-gray-50",
            ].join(" ")}
            aria-pressed={active === t.key}
            aria-controls={`panel-${t.key}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panels */}
      <section id={`panel-${active}`} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {active === "completed" && (
          <>
            <Card
              title="Microsoft Azure Fundamentals (AZ-900)"
              issuer="Microsoft"
              date="Completed"
              link="https://learn.microsoft.com/en-us/users/arnavbhatia-1391/credentials/82a574dd33ad4d0f?ref=https%3A%2F%2Fwww.linkedin.com%2F"
              note="Foundation in cloud concepts, Azure services, security, pricing, and lifecycle."
            />
          </>
        )}

        {active === "inprogress" && (
          <>
            <Card
              title="Azure AI Engineer Associate (AI-102)"
              issuer="Microsoft"
              note="Design and implement an Azure AI solution using Azure AI services, Azure AI Search, and Azure Open AI."
            />
          </>
        )}

        {active === "upcoming" && (
          <>
            <Card
              title="AWS Certified Developer — Associate"
              issuer="Amazon Web Services"
              note="Serverless deployments, SDKs, CI/CD on AWS, observability."
            />
            <Card
              title="Certified Kubernetes Application Developer (CKAD)"
              issuer="The Linux Foundation"
              note="Pod design, configs, multi-container patterns, cron jobs, resources, troubleshooting."
            />
          </>
        )}
      </section>
    </main>
  );
}