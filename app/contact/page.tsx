"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  message: string;
};

const purposes = [
  { value: "", label: "Select a purpose..." },
  { value: "hiring", label: "Hiring / Recruitment" },
  { value: "collaboration", label: "Collaboration / Partnership" },
  { value: "speaking", label: "Speaking Opportunity" },
  { value: "consulting", label: "Consulting / Advisory" },
  { value: "open-source", label: "Open Source Contribution" },
  { value: "general", label: "General Inquiry" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission (in production, you'd send this to an API endpoint)
    // For now, this will create a mailto link with all the form data
    const mailtoLink = `mailto:arnav.cal@gmail.com?subject=Contact Form: ${formData.purpose}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPurpose: ${formData.purpose}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", purpose: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-10">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column - Contact Info */}
        <div>
          <h1 className="mb-4 text-4xl font-bold">Let's Connect</h1>
          <p className="mb-8 text-lg leading-relaxed text-foreground/80">
            Whether you&apos;re looking to hire, collaborate on a project, or just want to chat about
            engineering and AI systems—I&apos;d love to hear from you.
          </p>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="rounded-xl border border-foreground/10 bg-background p-5">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60">Email</p>
                  <a
                    href="mailto:arnav.cal@gmail.com"
                    className="font-semibold hover:underline"
                  >
                    arnav.cal@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-foreground/10 bg-background p-5">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60">Phone</p>
                  <a href="tel:5103867045" className="font-semibold hover:underline">
                    (510) 386-7045
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-foreground/10 bg-background p-5">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/arnav-bhatia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                  >
                    linkedin.com/in/arnav-bhatia
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-foreground/10 bg-background p-5">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60">GitHub</p>
                  <a
                    href="https://github.com/arnavbhatia1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                  >
                    github.com/arnavbhatia1
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Response Note */}
          <div className="mt-8 rounded-xl bg-foreground/5 p-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              <strong>Quick to respond!</strong> I typically reply within 24 hours. For urgent matters,
              feel free to reach out via phone or LinkedIn message.
            </p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div className="rounded-2xl border border-foreground/10 bg-background p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm transition focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm transition focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone <span className="text-foreground/50">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm transition focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Purpose */}
              <div>
                <label htmlFor="purpose" className="mb-2 block text-sm font-medium">
                  Purpose *
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  required
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm transition focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                >
                  {purposes.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm transition focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="Tell me about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-foreground/90 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
