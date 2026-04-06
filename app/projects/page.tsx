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
  <span className="inline-block rounded-full bg-foreground/5 px-2.5 py-1 text-xs">{children}</span>
);

const Card = ({ p }: { p: Project }) => (
  <div className="rounded-2xl border border-foreground/8 bg-background p-4 shadow-sm transition hover:shadow-md hover:border-accent/20">
    <h3 className="text-lg font-semibold">{p.title}</h3>
    <p className="mt-1 text-sm leading-relaxed text-foreground/80">{p.blurb}</p>
    {p.impact && (
      <p className="mt-2 text-sm font-medium text-foreground/80">
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
  { title: "MoZeus Forge: Internal Deployment Platform", blurb: "Designed and built from scratch a .NET 9 Blazor Server application that automates Azure infrastructure provisioning using Bicep templates. Strategy Pattern with IDeploymentRequestBuilder for extensible resource types. Dynamic Template Catalog that auto-parses Bicep parameters and generates deployment forms. Includes an MCP Server exposing 10 tools to AI agents, a REST API with 8 endpoints, role-based access control with three permission tiers, and Azure SQL with Entity Framework Core (soft delete, optimistic concurrency). Before Forge, standing up a new client environment took 4-5 days of manual work. After Forge, it takes minutes.", impact: "30% month-over-month revenue growth. MoZeus on track for $18M against $10M target. First time in company history.", tech: [".NET 9","Blazor Server","Bicep","Azure","Clean Architecture","Strategy Pattern","EF Core","MCP Server"] },
  { title: "Dynamic Package Loading Architecture", blurb: "Runtime plugin architecture where a single shared container image loads client-specific business logic by downloading NuGet packages from Azure DevOps Artifacts at request time. ConsumerFactoryLoader reads activation config from Azure Table Storage, downloads client NuGet packages via Managed Identity, instantiates the factory via reflection, and processes the request. Packages cached in memory after first download. No container rebuilds when adding new clients.", impact: "Adding a new client became a configuration and package publish, not a deployment. Fundamental shift in delivery velocity.", tech: ["C#/.NET 9","NuGet","Azure Table Storage","Managed Identity","Reflection","Container Apps"] },
  { title: "Cloud Cost Optimization", blurb: "Audited every running Container App and redesigned the entire container infrastructure around scale-to-zero. Minimum replicas to zero, consumption workload profiles, event-driven scaling rules. Standardized these patterns inside Forge so every future client deployment gets cost-efficient defaults from day one.", impact: "$20K/month to $8K/month. 60% reduction. $144K annual savings.", tech: ["Azure Container Apps","Scale-to-Zero","Consumption Profiles","IaC"] },
  { title: "ML Model Publishing Pipeline", blurb: "Standardized ML publishing pipeline across 8 production environments. GitHub Actions, JFrog Artifactory, automated rollback triggers tied to health checks, full deployment traceability. Designed a compensation pattern for partial deployment failures across environment chains, not in the original spec but clearly necessary. Adopted as company-wide reference standard within two quarters.", impact: "60% faster deployments. Compliance audit passed on first review.", tech: ["GitHub Actions","JFrog","Azure","Python","CI/CD"] },
  { title: "Back-for-Frontend Gateway", blurb: "Unified ~2,700+ endpoints into composable routes with auto OpenAPI docs.", impact: "Faster onboarding; unlocked bundlable SKUs.", tech: ["Node.js","TypeScript","OpenAPI","Gateway"] },
  { title: "CI/CD Security & Coverage", blurb: "SAST/DAST/licensing and coverage gates with reporting dashboards.", impact: "Higher coverage; blocked regressions pre-merge.", tech: ["Security Scans","Coverage","Reporting"] },
];

const PERSONAL: Project[] = [
  { title: "PolyBot: Quantitative Prediction Market Trader", blurb: "Fully automated trading bot for 5-minute BTC Up/Down contracts on Polymarket. Computes mathematical probability using Brownian motion (z-score from distance/volatility/time maps to probability via logistic function), compares to market implied probability, and trades when mispricing exceeds threshold. Kelly Criterion position sizing at conservative 0.15 fraction for binary outcomes. Active position management uses the same model for entry and exit. Nightly AI learning pipeline: BiasDetector analyzes resolved trades, sends to Claude API, gets structured JSON weight adjustments, backtests, and auto-adopts if Sharpe improves 3%+. Full Discord bot interface for monitoring.", impact: "Production system with 191 automated tests. Paper and live trading modes sharing the same interface. SQLite state store, versioned config, real-time Discord command interface.", tech: ["Python","Brownian Motion","Kelly Criterion","Claude API","Discord.py","SQLite","Polymarket CLOB","Pytest"], code: "https://github.com/arnavbhatia1/PolyBot" },
  { title: "FinancialMCP: Published MCP Server", blurb: "Open-source MCP server published to PyPI with 24 financial intelligence tools. Fundamentals, momentum, SEC EDGAR filings and insider trades, FRED macro indicators, Treasury yield curve, CFTC commitment of traders data, Google Trends, market regime detection, VIX analysis, and anomaly scanning. No API keys required for core functionality. Installable via pip, runnable via uvx. Compatible with Claude Desktop, Claude Code, and any MCP-compatible AI agent.", impact: "Published open-source package with real users, real API surface area to maintain, and real consequences for breaking changes. 210 automated tests.", tech: ["Python","MCP","yfinance","SEC EDGAR","FRED","CFTC","Treasury.gov","Google Trends","PyPI"], code: "https://github.com/arnavbhatia1/FinancialMCP", demo: "https://pypi.org/project/financial-mcp-server/" },
  { title: "MarketPulse: Financial Sentiment Platform", blurb: "Ingests from Google News, Yahoo Finance, CNBC, and MarketWatch RSS feeds. 16 keyword, emoji, and structural labeling functions apply confidence-weighted votes in a weak supervision pipeline. TF-IDF and logistic regression classifier auto-trains at 200+ labeled samples. Top 50 tickers by mention volume with 7-day sentiment trends. Includes an autonomous paper-trading scalp bot with Kelly Criterion sizing from actual trade statistics, expected value computation, risk of ruin monitoring (auto-halves at 5%), and four smart exit triggers.", impact: "Data-centric ML thinking: programmatic labeling functions instead of manual annotation. 210 automated tests across MarketPulse and the MCP server.", tech: ["Python","scikit-learn","Streamlit","Weak Supervision","Kelly Criterion","Claude API","RSS","pandas"], code: "https://github.com/arnavbhatia1/MarketPulse" },
  { title: "Shelter Match", blurb: "Full-stack platform connecting 3 shelters with prospective adopters using semantic matching powered by GPT-4. Dynamic shelter portals with real-time animal availability, filtering, and personalized recommendations.", impact: "AI-powered adoption matching.", tech: ["Python","OpenAI API","React","PostgreSQL"], code: "https://github.com/arnavbhatia1/CompanionMatcher" },
  { title: "TetrisBot: Reinforcement Learning Agent", blurb: "Trained a deep Q-learning agent to play Tetris, achieving 250 average lines cleared per game after 10 training episodes. Automated training pipelines with hyperparameter tuning and real-time GUI for evaluation.", impact: "Autonomous gameplay with optimized decision-making.", tech: ["Python","TensorFlow","Pygame","Deep Q-Learning"], code: "https://github.com/arnavbhatia1/TetrisBot" },
];

export default function ProjectsPage() {
  const [tab, setTab] = useState<TabKey>("work");
  const data = tab === "work" ? WORK : PERSONAL;

  return (
    <main className="mx-auto min-h-[80vh] w-full max-w-5xl px-5 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl">Projects</h1>
          <p className="mt-1 text-muted">Impact-focused work and personal builds.</p>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={[
              "rounded-full border px-4 py-2 text-sm transition",
              tab === t.key ? "border-foreground/80 bg-foreground text-background" : "border-foreground/8 bg-background hover:bg-foreground/5",
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