import Tabs from "../components/Tabs";
import { MONO_LINK, RULED, ENTRY_META } from "../lib/styles";
import type { Certification } from "../lib/types";

export const metadata = {
  title: "Certifications | Arnav Bhatia",
};

const CERTS: Record<string, Certification[]> = {
  completed: [
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Completed",
      link: "https://learn.microsoft.com/en-us/users/arnavbhatia-1391/credentials/82a574dd33ad4d0f?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      note: "Foundation in cloud concepts, Azure services, security, pricing, and lifecycle.",
    },
  ],
  inprogress: [
    {
      title: "Azure AI Engineer Associate (AI-102)",
      issuer: "Microsoft",
      note: "Design and implement an Azure AI solution using Azure AI services, Azure AI Search, and Azure Open AI.",
    },
  ],
  upcoming: [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      note: "Serverless deployments, SDKs, CI/CD on AWS, observability.",
    },
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "The Linux Foundation",
      note: "Pod design, configs, multi-container patterns, cron jobs, resources, troubleshooting.",
    },
  ],
};

const CertList = ({ certs }: { certs: Certification[] }) => (
  <div className={`mt-8 ${RULED}`}>
    {certs.map((cert) => (
      <div key={cert.title} className="grid gap-3 py-7 md:grid-cols-12 md:gap-6">
        <div className={ENTRY_META}>
          <p>{cert.issuer}</p>
          {cert.date && <p className="mt-1.5">{cert.date}</p>}
        </div>
        <div className="md:col-span-9">
          <h3 className="font-serif text-xl">{cert.title}</h3>
          {cert.note && <p className="mt-2 leading-relaxed text-muted">{cert.note}</p>}
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className={`mt-3 inline-block font-mono text-xs uppercase tracking-[0.12em] ${MONO_LINK}`}
            >
              View credential ↗
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default function CertificationsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 md:py-16">
      <h1 className="font-serif text-4xl tracking-[-0.015em] md:text-5xl">Certifications</h1>
      <p className="mt-4 text-muted">A quick snapshot of what&apos;s done, in progress, and on deck.</p>

      <Tabs
        className="mt-12"
        tabs={[
          { key: "completed", label: "Completed" },
          { key: "inprogress", label: "In Progress" },
          { key: "upcoming", label: "Upcoming" },
        ]}
        panels={{
          completed: <CertList certs={CERTS.completed} />,
          inprogress: <CertList certs={CERTS.inprogress} />,
          upcoming: <CertList certs={CERTS.upcoming} />,
        }}
      />
    </main>
  );
}
