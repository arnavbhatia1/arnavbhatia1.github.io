import { SOCIAL_LINKS } from "../lib/site-config";
import type { Repository } from "../lib/types";
import { GitHubIcon, ExternalLinkIcon } from "./ui/Icons";

// Ordered to lead with agentic / AI-native work (most relevant for target roles).
const repositories: Repository[] = [
  {
    name: "FinancialMCP",
    description:
      "MCP server giving LLM agents structured access to financial intelligence: 24 tools spanning SEC EDGAR filings, CFTC positioning, Treasury yield curves, macro indicators, sentiment, and market-regime detection. No API keys required for core tools. Published on PyPI.",
    language: "Python",
    url: "https://github.com/arnavbhatia1/FinancialMCP",
    pypi: "https://pypi.org/project/financial-mcp-server/",
    install: "pip install financial-mcp-server",
    highlight: "v0.1.6 · 3,500+ downloads · 24 tools",
    topics: ["mcp", "agentic", "anthropic-api", "sec-edgar", "python", "pypi"],
  },
  {
    name: "PolyBot",
    description:
      "Live, profitable trading bot for Polymarket 5-minute BTC markets. Brownian-motion probability modeling, Kelly Criterion sizing, and a daily agentic pipeline that backtests parameter changes and hot-swaps weights autonomously when the Sharpe ratio improves.",
    language: "Python",
    url: "https://github.com/arnavbhatia1/PolyBot",
    highlight: "39% ROI over 3 months · 10k+ trades · live",
    topics: ["agentic", "anthropic-api", "trading-bot", "polymarket", "python", "sqlite"],
  },
  {
    name: "MarketPulse",
    description:
      "Sentiment intelligence for financial markets. Ingests Google News, Yahoo Finance, CNBC, and MarketWatch RSS feeds, applies weak supervision with 16 labeling functions, and trains a classifier paired with a Kelly-sized paper-trading bot for end-to-end signal-to-execution validation.",
    language: "Python",
    url: "https://github.com/arnavbhatia1/MarketPulse",
    highlight: "160 automated tests · weak supervision",
    topics: ["ml", "nlp", "weak-supervision", "streamlit", "finance"],
  },
  {
    name: "CompanionMatcher",
    description:
      "Web platform matching shelter dogs with prospective adopters using semantic similarity over OpenAI embeddings. Built with React, Azure, and OpenAI Embeddings.",
    language: "JavaScript",
    url: "https://github.com/arnavbhatia1/CompanionMatcher",
    highlight: "Semantic matching · OpenAI embeddings",
    topics: ["ai", "semantic-search", "react", "azure", "openai"],
  },
  {
    name: "TetrisBot",
    description:
      "AI agent that plays Tetris with deep Q-learning, clearing 250 average lines per game. Automated parameter tuning and a real-time GUI for agent evaluation.",
    language: "Jupyter Notebook",
    url: "https://github.com/arnavbhatia1/TetrisBot",
    highlight: "Deep Q-learning · 250 lines/game",
    topics: ["ai", "reinforcement-learning", "tensorflow", "game-ai"],
  },
  {
    name: "RecipeFinder",
    description:
      "Web app for discovering recipes from available ingredients via the Spoonacular API. Favorites, community reviews, and dark mode.",
    language: "JavaScript",
    url: "https://github.com/arnavbhatia1/RecipeFinder",
    highlight: "React · Spoonacular API",
    topics: ["react", "spoonacular-api", "axios", "css3"],
  },
];

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
  "Jupyter Notebook": "bg-orange-500",
  Java: "bg-red-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-700",
};

function RepoIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
    </svg>
  );
}

export default function OpenSource() {
  return (
    <section className="py-20 bg-foreground/[0.02]">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-serif text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted">Agentic AI tooling, trading systems, and ML, live, tested, and shipped.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-foreground/8 bg-background p-6 shadow-sm transition hover:shadow-md hover:border-accent/20"
            >
              {/* Header */}
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <RepoIcon className="h-5 w-5 text-muted" />
                  <h3 className="font-semibold group-hover:text-accent transition-colors">{repo.name}</h3>
                  {repo.pypi && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                      PyPI
                    </span>
                  )}
                </div>
                <ExternalLinkIcon className="h-4 w-4 flex-shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-muted">{repo.description}</p>

              {/* Install command */}
              {repo.install && (
                <div className="mb-4 rounded-lg border border-foreground/8 bg-foreground/[0.04] px-3 py-2 font-mono text-xs text-foreground/80">
                  <span className="text-muted">$ </span>
                  {repo.install}
                </div>
              )}

              {/* Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-block rounded-full bg-foreground/5 px-2 py-0.5 text-xs text-muted"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer: language + proof stat (no vanity star counts) */}
              <div className="flex items-center gap-4 text-xs text-muted">
                <div className="flex items-center gap-1.5">
                  <span className={`h-3 w-3 rounded-full ${LANGUAGE_COLORS[repo.language] || "bg-gray-400"}`} />
                  <span>{repo.language}</span>
                </div>
                {repo.highlight && (
                  <span className="font-medium text-foreground/70">{repo.highlight}</span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="mt-10 text-center">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-foreground/5 hover:border-accent/20"
          >
            <GitHubIcon className="h-4 w-4" />
            View all projects on GitHub
          </a>
        </div>

        {/* Proof stats (real signals, not star counts) */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-foreground/8 bg-background p-5 text-center">
            <p className="text-3xl font-bold text-accent">PyPI</p>
            <p className="mt-1 text-sm text-muted">Published: financial-mcp-server v0.1.6</p>
          </div>
          <div className="rounded-xl border border-foreground/8 bg-background p-5 text-center">
            <p className="text-3xl font-bold text-accent">3,500+</p>
            <p className="mt-1 text-sm text-muted">PyPI downloads</p>
          </div>
          <div className="rounded-xl border border-foreground/8 bg-background p-5 text-center">
            <p className="text-3xl font-bold text-accent">400+</p>
            <p className="mt-1 text-sm text-muted">Automated tests across projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
