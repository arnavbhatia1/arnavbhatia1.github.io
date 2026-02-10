"use client";

import AnimatedCounter from "./AnimatedCounter";

const metrics = [
  { value: 40, suffix: "%", label: "Infrastructure cost reduction via containerization", color: "blue" },
  { value: 60, suffix: "%", label: "Faster ML deployments with CI/CD pipelines", color: "green" },
  { value: 2700, suffix: "+", label: "Microservice endpoints unified in BFF gateway", color: "purple" },
  { value: 6, suffix: "+", label: "Enterprise clients delivered end-to-end", color: "orange" },
];

const colorClasses: Record<string, { text: string; border: string; shadow: string }> = {
  blue: { text: "text-blue-500", border: "hover:border-blue-500/50", shadow: "hover:shadow-blue-500/10" },
  green: { text: "text-green-500", border: "hover:border-green-500/50", shadow: "hover:shadow-green-500/10" },
  purple: { text: "text-purple-500", border: "hover:border-purple-500/50", shadow: "hover:shadow-purple-500/10" },
  orange: { text: "text-orange-500", border: "hover:border-orange-500/50", shadow: "hover:shadow-orange-500/10" },
};

export default function MetricsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-foreground/5">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">Impact By Numbers</h2>
          <p className="text-foreground/70">Measurable results from production systems</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => {
            const colors = colorClasses[metric.color];
            return (
              <div
                key={i}
                className={`group rounded-2xl border border-foreground/10 bg-background p-6 text-center transition hover:shadow-lg ${colors.border} ${colors.shadow}`}
              >
                <div className={`mb-2 text-4xl font-bold ${colors.text}`}>
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} duration={2000} />
                </div>
                <p className="text-sm text-foreground/70">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
