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

const WORK: Project[] = [
  { title: "MoZeus Forge: Internal Deployment Platform", blurb: "Designed and built from scratch a .NET 9 Blazor Server application that automates Azure infrastructure provisioning using Bicep templates. Strategy Pattern with IDeploymentRequestBuilder for extensible resource types. Dynamic Template Catalog that auto-parses Bicep parameters and generates deployment forms. Includes an MCP Server exposing 10 tools to AI agents, a REST API with 8 endpoints, role-based access control with three permission tiers, and Azure SQL with Entity Framework Core (soft delete, optimistic concurrency). Cut new-account onboarding from 2 weeks to 1 day.", impact: "Turned bespoke client engagements into productized, repeatable deployments, contributing to the platform's measurable revenue impact.", tech: [".NET 9","Blazor Server","Bicep","Azure","Clean Architecture","Strategy Pattern","EF Core","MCP Server"] },
  { title: "Dynamic Package Loading Architecture", blurb: "Runtime plugin architecture where a single shared container image loads client-specific business logic by downloading NuGet packages from Azure DevOps Artifacts at request time. ConsumerFactoryLoader reads activation config from Azure Table Storage, downloads client NuGet packages via Managed Identity, instantiates the factory via reflection, and processes the request. Packages cached in memory after first download. No container rebuilds when adding new clients.", impact: "Adding a new client became a configuration and package publish, not a deployment. Fundamental shift in delivery velocity.", tech: ["C#/.NET 9","NuGet","Azure Table Storage","Managed Identity","Reflection","Container Apps"] },
  { title: "Cloud Cost Optimization", blurb: "Audited every running Container App and redesigned the entire container infrastructure around scale-to-zero. Minimum replicas to zero, consumption workload profiles, event-driven scaling rules. Standardized these patterns inside Forge so every future client deployment gets cost-efficient defaults from day one.", impact: "$20K/month to $10K/month. 50% reduction. $120K annual savings.", tech: ["Azure Container Apps","Scale-to-Zero","Consumption Profiles","IaC"] },
  { title: "ML Model Publishing Pipeline", blurb: "Standardized ML publishing pipeline across 8 production environments. GitHub Actions, JFrog Artifactory, automated rollback triggers tied to health checks, full deployment traceability. Designed a compensation pattern for partial deployment failures across environment chains, not in the original spec but clearly necessary. Adopted as company-wide reference standard within two quarters.", impact: "60% faster deployments. Compliance audit passed on first review.", tech: ["GitHub Actions","JFrog","Azure","Python","CI/CD"] },
  { title: "Back-for-Frontend Gateway", blurb: "Unified ~2,700+ endpoints into composable routes with auto OpenAPI docs.", impact: "Faster onboarding; unlocked bundlable SKUs.", tech: ["Node.js","TypeScript","OpenAPI","Gateway"] },
  { title: "CI/CD Security & Coverage", blurb: "SAST/DAST/licensing and coverage gates with reporting dashboards.", impact: "Higher coverage; blocked regressions pre-merge.", tech: ["Security Scans","Coverage","Reporting"] },
];

const PERSONAL: Project[] = [
  { title: "PolyBot: Quantitative Prediction Market Trader", blurb: "Fully automated trading bot for 5-minute BTC Up/Down contracts on Polymarket. Computes mathematical probability using Brownian motion (z-score from distance/volatility/time maps to probability via logistic function), compares to market implied probability, and trades when mispricing exceeds threshold. Kelly Criterion position sizing at conservative 0.15 fraction for binary outcomes. Active position management uses the same model for entry and exit. Nightly AI learning pipeline: BiasDetector analyzes resolved trades, sends to Claude API, gets structured JSON weight adjustments, backtests, and auto-adopts if Sharpe improves 3%+. Full Discord bot interface for monitoring.", impact: "Live and profitable: 39% ROI over 3 months across 10,000+ trades. Paper and live modes share one interface; SQLite state store, versioned config, 191 automated tests.", tech: ["Python","Brownian Motion","Kelly Criterion","Claude API","Discord.py","SQLite","Polymarket CLOB","Pytest"], code: "https://github.com/arnavbhatia1/PolyBot" },
  { title: "FinancialMCP: Published MCP Server", blurb: "Open-source MCP server published to PyPI with 24 financial intelligence tools. Fundamentals, momentum, SEC EDGAR filings and insider trades, FRED macro indicators, Treasury yield curve, CFTC commitment of traders data, Google Trends, market regime detection, VIX analysis, and anomaly scanning. No API keys required for core functionality. Installable via pip, runnable via uvx. Compatible with Claude Desktop, Claude Code, and any MCP-compatible AI agent.", impact: "Published open-source package with real users, real API surface area to maintain, and real consequences for breaking changes. 50 automated tests.", tech: ["Python","MCP","yfinance","SEC EDGAR","FRED","CFTC","Treasury.gov","Google Trends","PyPI"], code: "https://github.com/arnavbhatia1/FinancialMCP", demo: "https://pypi.org/project/financial-mcp-server/" },
  { title: "MarketPulse: Financial Sentiment Platform", blurb: "Ingests from Google News, Yahoo Finance, CNBC, and MarketWatch RSS feeds. 16 keyword, emoji, and structural labeling functions apply confidence-weighted votes in a weak supervision pipeline. TF-IDF and logistic regression classifier auto-trains at 200+ labeled samples. Top 50 tickers by mention volume with 7-day sentiment trends. Includes an autonomous paper-trading scalp bot with Kelly Criterion sizing from actual trade statistics, expected value computation, risk of ruin monitoring (auto-halves at 5%), and four smart exit triggers.", impact: "Data-centric ML thinking: programmatic labeling functions instead of manual annotation. 160 automated tests.", tech: ["Python","scikit-learn","Streamlit","Weak Supervision","Kelly Criterion","Claude API","RSS","pandas"], code: "https://github.com/arnavbhatia1/MarketPulse" },
  { title: "CompanionMatcher", blurb: "Full-stack platform connecting shelters with prospective adopters using semantic matching over OpenAI embeddings. Dynamic shelter portals with real-time animal availability, filtering, and personalized recommendations.", impact: "AI-powered adoption matching.", tech: ["React","Azure","OpenAI Embeddings","Python"], code: "https://github.com/arnavbhatia1/CompanionMatcher" },
  { title: "TetrisBot: Reinforcement Learning Agent", blurb: "Trained a deep Q-learning agent to play Tetris, achieving 250 average lines cleared per game after 10 training episodes. Automated training pipelines with hyperparameter tuning and real-time GUI for evaluation.", impact: "Autonomous gameplay with optimized decision-making.", tech: ["Python","TensorFlow","Pygame","Deep Q-Learning"], code: "https://github.com/arnavbhatia1/TetrisBot" },
];

export default function ProjectsPage() {
  const [tab, setTab] = useState<TabKey>("work");
  const data = tab === "work" ? WORK : PERSONAL;

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 md:py-16">
      <header>
        <h1 className="font-serif text-4xl tracking-[-0.015em] md:text-5xl">Projects</h1>
        <p className="mt-3 text-muted">Impact-focused work and personal builds.</p>
      </header>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={[
              "font-mono text-xs uppercase tracking-[0.12em] transition-colors",
              tab === t.key
                ? "border-b-2 border-accent pb-2 text-foreground"
                : "border-b-2 border-transparent pb-2 text-muted hover:text-foreground",
            ].join(" ")}
            aria-pressed={tab === t.key}
            aria-controls={`panel-${t.key}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <section
        id={`panel-${tab}`}
        className="mt-8 divide-y divide-foreground/15 border-t border-foreground/15"
      >
        {data.map((p) => (
          <article key={p.title} className="py-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-serif text-xl">{p.title}</h3>
              {(p.demo || p.code) && (
                <div className="flex flex-wrap items-baseline gap-x-6">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-foreground/30 pb-1 font-mono text-xs uppercase tracking-[0.12em] transition-colors hover:border-accent hover:text-accent"
                    >
                      Demo ↗
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-foreground/30 pb-1 font-mono text-xs uppercase tracking-[0.12em] transition-colors hover:border-accent hover:text-accent"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              )}
            </div>
            <p className="mt-2 max-w-[68ch] leading-relaxed text-muted">{p.blurb}</p>
            {p.impact && (
              <p className="mt-3 max-w-[68ch]">
                <span className="mr-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                  Impact
                </span>
                <span className="text-sm leading-relaxed text-muted">{p.impact}</span>
              </p>
            )}
            {!!p.tech?.length && (
              <p className="mt-3 font-mono text-[11px] tracking-[0.04em] text-muted">
                {p.tech.join(" · ")}
              </p>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
