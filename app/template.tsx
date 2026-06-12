// Remounts per navigation, replaying the entry animation with zero client JS.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
