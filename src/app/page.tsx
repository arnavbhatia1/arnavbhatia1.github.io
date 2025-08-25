export const metadata = {
  title: "Arnav Bhatia",
  description:
    "Full-stack engineer focused on backend systems, APIs, and cloud-native platforms.",
};

const Btn = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: ".5rem",
      padding: ".7rem 1.2rem",
      borderRadius: "9999px",
      border: "1px solid rgba(0,0,0,.15)",
      textDecoration: "none",
      fontWeight: 600,
      background: "white",
      boxShadow: "0 1px 2px rgba(0,0,0,.05)",
    }}
  >
    {children}
  </a>
);

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      <section style={{ maxWidth: 840, textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: ".35rem .7rem",
            borderRadius: 9999,
            background: "rgba(0,0,0,.05)",
            fontSize: 14,
            marginBottom: 12,
          }}
        >
          Full-stack • Backend • Cloud • APIs
        </div>

        <h1 style={{ fontSize: "2.8rem", lineHeight: 1.15, margin: "0 0 .6rem" }}>
          Hey, I’m Arnav.
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            margin: "0 auto 1.2rem",
            maxWidth: 720,
          }}
        >
          Full-stack engineer focused on backend systems, APIs, and cloud-native
          platforms. I turn prototypes into reliable products with CI/CD and
          data flows that improve developer experience and ROI. I connect
          engineering to business outcomes—partnering with product and sales to
          ship proofs of concept, drive adoption, and build lasting trust.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "1.2rem",
          }}
        >
          <Btn href="https://www.linkedin.com/in/arnav-bhatia/">LinkedIn</Btn>
          <Btn href="https://github.com/arnavbhatia1">GitHub</Btn>
          <Btn href="mailto:arnav.cal@gmail.com">Email</Btn>
          <Btn href="/resume.pdf">Resume</Btn>
        </div>
      </section>
    </main>
  );
}
