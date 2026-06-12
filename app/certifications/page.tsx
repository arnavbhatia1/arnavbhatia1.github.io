"use client";

import { useState } from "react";

type TabKey = "completed" | "inprogress" | "upcoming";

const tabs: { key: TabKey; label: string }[] = [
  { key: "completed",  label: "Completed" },
  { key: "inprogress", label: "In Progress" },
  { key: "upcoming",   label: "Upcoming" },
];

const Entry = ({
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
  <div className="grid gap-3 py-7 md:grid-cols-12 md:gap-6">
    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-3 md:pt-1.5">
      <p>{issuer}</p>
      {date && <p className="mt-1.5">{date}</p>}
    </div>
    <div className="md:col-span-9">
      <h3 className="font-serif text-xl">{title}</h3>
      {note && <p className="mt-2 leading-relaxed text-muted">{note}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block border-b border-foreground/30 pb-1 font-mono text-xs uppercase tracking-[0.12em] transition-colors hover:border-accent hover:text-accent"
        >
          View credential ↗
        </a>
      )}
    </div>
  </div>
);

export default function CertificationsPage() {
  const [active, setActive] = useState<TabKey>("completed");

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 md:py-16">
      <h1 className="font-serif text-4xl tracking-[-0.015em] md:text-5xl">Certifications</h1>
      <p className="mt-4 text-muted">A quick snapshot of what&apos;s done, in progress, and on deck.</p>

      {/* Tabs */}
      <div className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-3">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={[
              "font-mono text-xs uppercase tracking-[0.12em] transition-colors",
              active === t.key
                ? "border-b-2 border-accent pb-2 text-foreground"
                : "border-b-2 border-transparent pb-2 text-muted hover:text-foreground",
            ].join(" ")}
            aria-pressed={active === t.key}
            aria-controls={`panel-${t.key}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panels */}
      <section
        id={`panel-${active}`}
        className="mt-8 divide-y divide-foreground/15 border-t border-foreground/15"
      >
        {active === "completed" && (
          <>
            <Entry
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
            <Entry
              title="Azure AI Engineer Associate (AI-102)"
              issuer="Microsoft"
              note="Design and implement an Azure AI solution using Azure AI services, Azure AI Search, and Azure Open AI."
            />
          </>
        )}

        {active === "upcoming" && (
          <>
            <Entry
              title="AWS Certified Developer - Associate"
              issuer="Amazon Web Services"
              note="Serverless deployments, SDKs, CI/CD on AWS, observability."
            />
            <Entry
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
