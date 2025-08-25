import Greetings from "./components/greetings";

export const metadata = {
  title: "Arnav Bhatia",
  description:
    "Full-stack engineer delivering backend systems, platform pipelines, and AI solutions on cloud-native platforms.",
};

const Btn = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 font-semibold shadow-sm transition hover:bg-gray-50"
  >
    {children}
  </a>
);

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <section className="max-w-3xl text-center">
        <div className="mb-2 text-4xl font-bold md:text-5xl leading-none">
          <Greetings intervalMs={3000} className="min-w-[3ch]" />
        </div>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl leading-none">
          Welcome to My Page!
        </h1>

        <p className="mx-auto mb-5 max-w-2xl text-lg leading-relaxed text-gray-700">
          Full-stack engineer focused on backend systems, APIs, and cloud-native platforms. I turn prototypes into
          reliable products with CI/CD and data flows that improve developer experience and ROI. I connect engineering
          to business outcomes, partnering with product and sales to ship proofs of concept, drive adoption, and build
          lasting trust.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Btn href="/certifications">Certifications</Btn>
          <Btn href="/projects">Projects</Btn>
          <Btn href="/resume.pdf">Resume</Btn>
        </div>
      </section>
    </main>
  );
}