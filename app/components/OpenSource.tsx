import { SOCIAL_LINKS } from "../lib/site-config";
import { EYEBROW, RULED, ENTRY_GRID } from "../lib/styles";
import type { Repository } from "../lib/types";

// Ordered to lead with agentic / AI-native work (most relevant for target roles).
const repositories: Repository[] = [
  {
    name: "FinancialMCP",
    description:
      "MCP server giving LLM agents structured access to financial intelligence: 42 tools spanning SEC EDGAR filings, CFTC positioning, Treasury yield curves, macro indicators, sentiment, and market-regime detection. No API keys required for core tools. Published on PyPI.",
    language: "Python",
    url: "https://github.com/arnavbhatia1/FinancialMCP",
    pypi: "https://pypi.org/project/financial-mcp-server/",
    install: "pip install financial-mcp-server",
    highlight: "v0.1.12 · 3,500+ downloads · 42 tools",
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

const proofStats = [
  { value: "PyPI", label: "Published: financial-mcp-server v0.1.12" },
  { value: "3,500+", label: "PyPI downloads" },
  { value: "400+", label: "Automated tests across projects" },
];

export default function OpenSource() {
  return (
    <section className="border-t border-hairline px-6">
      <div className="mx-auto max-w-5xl py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <p className={`text-muted ${EYEBROW}`}>Featured projects</p>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`border-b border-hairline-strong pb-0.5 transition-colors hover:border-accent hover:text-accent ${EYEBROW}`}
          >
            All projects on GitHub ↗
          </a>
        </div>

        <div className={RULED}>
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${ENTRY_GRID}`}
            >
              <div className={`text-muted md:col-span-3 md:pt-1.5 ${EYEBROW}`}>
                <p>{repo.language}</p>
                {repo.highlight && <p className="mt-1.5 normal-case">{repo.highlight}</p>}
              </div>

              <div className="md:col-span-9">
                <h3 className="font-serif text-xl transition-colors group-hover:text-accent">
                  {repo.name}
                  {repo.pypi && (
                    <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                      PyPI
                    </span>
                  )}
                  <span className="ml-2 text-muted transition-colors group-hover:text-accent">↗</span>
                </h3>
                <p className="mt-2 max-w-[68ch] leading-relaxed text-muted">{repo.description}</p>
                {repo.install && (
                  <p className="mt-3 font-mono text-xs text-foreground/80">
                    <span className="text-muted">$ </span>
                    {repo.install}
                  </p>
                )}
                {repo.topics && repo.topics.length > 0 && (
                  <p className="mt-3 font-mono text-[11px] tracking-[0.04em] text-muted">
                    {repo.topics.join(" · ")}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Proof stats (real signals, not star counts) */}
        <div className="mt-14 grid gap-y-10 border-t border-hairline pt-10 sm:grid-cols-3">
          {proofStats.map((stat) => (
            <div key={stat.label} className="border-l border-hairline pl-6">
              <p className="font-mono text-2xl tracking-tight text-accent md:text-3xl">{stat.value}</p>
              <p className="mt-2 max-w-[24ch] text-sm leading-relaxed text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
