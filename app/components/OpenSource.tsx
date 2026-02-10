import { SOCIAL_LINKS } from "../lib/site-config";
import type { Repository } from "../lib/types";
import { GitHubIcon, StarIcon, ExternalLinkIcon } from "./ui/Icons";

const repositories: Repository[] = [
  {
    name: "CompanionMatcher",
    description:
      "Web platform matching shelter dogs to grieving owners using semantic similarity. Built with React.js, Azure, and OpenAI Embeddings.",
    language: "JavaScript",
    stars: 1,
    url: "https://github.com/arnavbhatia1/CompanionMatcher",
    topics: ["ai", "semantic-search", "react", "azure", "openai"],
  },
  {
    name: "TetrisBot",
    description:
      "AI agent that plays Tetris using reinforcement learning. Implemented with Python and TensorFlow.",
    language: "Jupyter Notebook",
    stars: 1,
    url: "https://github.com/arnavbhatia1/TetrisBot",
    topics: ["ai", "reinforcement-learning", "tensorflow", "game-ai"],
  },
  {
    name: "RecipeFinder",
    description:
      "Web app for discovering recipes based on available ingredients via Spoonacular API. Features favorites, community reviews, and dark mode.",
    language: "JavaScript",
    stars: 1,
    url: "https://github.com/arnavbhatia1/RecipeFinder",
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

function ForkIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
  );
}

export default function OpenSource() {
  return (
    <section className="py-16 bg-foreground/[0.02]">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">Open Source Contributions</h2>
          <p className="text-foreground/70">Projects and contributions I&apos;m working on</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm transition hover:shadow-md hover:border-foreground/20"
            >
              {/* Header */}
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <RepoIcon className="h-5 w-5 text-foreground/60" />
                  <h3 className="font-semibold group-hover:underline">{repo.name}</h3>
                </div>
                <ExternalLinkIcon className="h-4 w-4 flex-shrink-0 text-foreground/40 transition group-hover:translate-x-0.5" />
              </div>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-foreground/70">{repo.description}</p>

              {/* Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-block rounded-full bg-foreground/5 px-2 py-0.5 text-xs text-foreground/70"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center gap-4 text-xs text-foreground/60">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`h-3 w-3 rounded-full ${LANGUAGE_COLORS[repo.language] || "bg-gray-400"}`}
                  />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-1">
                  <StarIcon />
                  <span>{repo.stars}</span>
                </div>
                {repo.forks !== undefined && (
                  <div className="flex items-center gap-1">
                    <ForkIcon />
                    <span>{repo.forks}</span>
                  </div>
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
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-foreground/5"
          >
            <GitHubIcon className="h-4 w-4" />
            View all projects on GitHub
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-foreground/10 bg-background p-5 text-center">
            <p className="text-3xl font-bold">{repositories.length}</p>
            <p className="mt-1 text-sm text-foreground/60">Public Repositories</p>
          </div>
          <div className="rounded-xl border border-foreground/10 bg-background p-5 text-center">
            <p className="text-3xl font-bold">
              {repositories.reduce((sum, repo) => sum + repo.stars, 0)}
            </p>
            <p className="mt-1 text-sm text-foreground/60">Total Stars</p>
          </div>
          <div className="rounded-xl border border-foreground/10 bg-background p-5 text-center">
            <p className="text-3xl font-bold">Open</p>
            <p className="mt-1 text-sm text-foreground/60">For Collaboration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
