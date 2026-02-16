"use client";

import AnimatedCounter from "./AnimatedCounter";

const metrics = [
  { value: 40, suffix: "%", label: "Infrastructure cost reduction via containerization" },
  { value: 60, suffix: "%", label: "Faster ML deployments with CI/CD pipelines" },
  { value: 2700, suffix: "+", label: "Microservice endpoints unified in BFF gateway" },
  { value: 6, suffix: "+", label: "Enterprise clients delivered end-to-end" },
];

export default function MetricsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-foreground/[0.03]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-serif text-3xl md:text-4xl">Impact By Numbers</h2>
          <p className="text-muted">Measurable results from production systems</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-foreground/8 bg-background p-6 text-center transition hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-2 text-4xl font-bold text-accent">
                <AnimatedCounter end={metric.value} suffix={metric.suffix} duration={2000} />
              </div>
              <p className="text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
