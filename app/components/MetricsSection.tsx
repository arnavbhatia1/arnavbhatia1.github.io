import AnimatedCounter from "./AnimatedCounter";
import { EYEBROW } from "../lib/styles";

const metrics = [
  { value: 20, suffix: "%", label: "Month-over-month revenue growth since platform launch" },
  { value: 120, prefix: "$", suffix: "K", label: "Annual cloud savings from infrastructure redesign" },
  { value: 6, suffix: "+", label: "Enterprise clients delivered end-to-end" },
  { value: 60, suffix: "%", label: "Faster deployments with CI/CD pipelines" },
];

export default function MetricsSection() {
  return (
    <section className="border-t border-hairline px-6">
      <div className="mx-auto max-w-5xl py-16 md:py-20">
        <p className={`mb-12 text-muted ${EYEBROW}`}>Impact, measured</p>

        <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-l border-hairline pl-6 lg:pr-6">
              <p className="font-mono text-5xl tracking-tight text-accent md:text-6xl">
                <AnimatedCounter end={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </p>
              <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
