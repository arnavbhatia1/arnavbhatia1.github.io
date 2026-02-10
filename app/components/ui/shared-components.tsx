import Link from "next/link";

// Reusable Card component
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm transition hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

// Reusable Tab Button
export function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-sm font-medium transition",
        active
          ? "border-black/80 bg-black text-white"
          : "border-foreground/10 bg-background hover:bg-gray-50",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

// Reusable Chip/Tag component
export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-foreground/5 px-2.5 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

// Reusable Button Link
export function ButtonLink({
  href,
  children,
  primary = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
}) {
  const className = `inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold shadow-sm transition ${
    primary
      ? "bg-foreground text-background hover:bg-foreground/90"
      : "border border-foreground/20 bg-background hover:bg-foreground/5"
  }`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

// Section Header
export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <h2 className="mb-3 text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-foreground/70">{subtitle}</p>}
    </div>
  );
}
