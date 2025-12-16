type Repository = {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks?: number;
  url: string;
  topics?: string[];
};

const repositories: Repository[] = [
  {
    name: "CompanionMatcher",
    description: "Web platform matching shelter dogs to grieving owners using semantic similarity. Built with React.js, Azure, and OpenAI Embeddings.",
    language: "JavaScript",
    stars: 1,
    url: "https://github.com/arnavbhatia1/CompanionMatcher",
    topics: ["ai", "semantic-search", "react", "azure", "openai"],
  },
  {
    name: "arnavbhatia1.github.io",
    description: "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features project showcases, work experience, and blog.",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/arnavbhatia1/arnavbhatia1.github.io",
    topics: ["portfolio", "nextjs", "typescript", "tailwind"],
  },
  {
    name: "TetrisBot",
    description: "AI agent that plays Tetris using reinforcement learning. Implemented with Python and TensorFlow.",
    language: "Jupyter Notebook",
    stars: 1,
    url: "https://github.com/arnavbhatia1/TetrisBot",
    topics: ["ai", "reinforcement-learning", "tensorflow", "game-ai"],
  },
];

const languageColors: { [key: string]: string } = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
  "Jupyter Notebook": "bg-orange-500",
  Java: "bg-red-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-700",
};

export default function OpenSource() {
  return (
    <section className="py-16 bg-foreground/[0.02]">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">Open Source Contributions</h2>
          <p className="text-foreground/70">
            Projects and contributions I&apos;m working on
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repo, index) => (
            <a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm transition hover:shadow-md hover:border-foreground/20"
            >
              {/* Header */}
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-foreground/60"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                  </svg>
                  <h3 className="font-semibold group-hover:underline">{repo.name}</h3>
                </div>
                <svg
                  className="h-4 w-4 flex-shrink-0 text-foreground/40 transition group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                {repo.description}
              </p>

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
                {/* Language */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`h-3 w-3 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`}
                  />
                  <span>{repo.language}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                  </svg>
                  <span>{repo.stars}</span>
                </div>

                {/* Forks */}
                {repo.forks !== undefined && (
                  <div className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    </svg>
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
            href="https://github.com/arnavbhatia1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-foreground/5"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View all projects on GitHub
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-foreground/10 bg-background p-5 text-center">
            <p className="text-3xl font-bold">3</p>
            <p className="mt-1 text-sm text-foreground/60">Public Repositories</p>
          </div>
          <div className="rounded-xl border border-foreground/10 bg-background p-5 text-center">
            <p className="text-3xl font-bold">3</p>
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
