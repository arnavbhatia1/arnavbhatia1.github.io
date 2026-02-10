"use client";

import { useState } from "react";
import { SITE_CONFIG, SOCIAL_LINKS } from "../lib/site-config";
import { EmailIcon, PhoneIcon, LinkedInIcon, GitHubIcon } from "../components/ui/Icons";

type FormData = {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  message: string;
};

const PURPOSES = [
  { value: "", label: "Select a purpose..." },
  { value: "hiring", label: "Hiring / Recruitment" },
  { value: "collaboration", label: "Collaboration / Partnership" },
  { value: "speaking", label: "Speaking Opportunity" },
  { value: "consulting", label: "Consulting / Advisory" },
  { value: "open-source", label: "Open Source Contribution" },
  { value: "general", label: "General Inquiry" },
] as const;

const INITIAL_FORM_STATE: FormData = {
  name: "",
  email: "",
  phone: "",
  purpose: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const mailtoLink = `mailto:${SITE_CONFIG.email}?subject=Contact Form: ${formData.purpose}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPurpose: ${formData.purpose}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus("success");
      setFormData(INITIAL_FORM_STATE);
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
          <h1 className="mb-4 text-4xl font-bold">Let&apos;s Connect</h1>
          <p className="mb-8 text-lg leading-relaxed text-foreground/80">
            Whether you&apos;re looking to hire, collaborate on a project, or just want to chat about
            engineering and AI systems—I&apos;d love to hear from you.
          </p>

          {/* Contact Methods */}
          <div className="space-y-6">
            <ContactCard
              icon={<EmailIcon />}
              label="Email"
              href={SOCIAL_LINKS.email}
              value={SITE_CONFIG.email}
            />
            <ContactCard
              icon={<PhoneIcon />}
              label="Phone"
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              value={SITE_CONFIG.phone}
            />
            <ContactCard
              icon={<LinkedInIcon />}
              label="LinkedIn"
              href={SOCIAL_LINKS.linkedin}
              value="linkedin.com/in/arnav-bhatia"
              external
            />
            <ContactCard
              icon={<GitHubIcon />}
              label="GitHub"
              href={SOCIAL_LINKS.github}
              value="github.com/arnavbhatia1"
              external
            />
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
              <FormField
                label="Name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />

              <FormField
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />

              <FormField
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                optional
              />

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
                  {PURPOSES.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

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

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-foreground/90 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper Components
function ContactCard({
  icon,
  label,
  href,
  value,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  value: string;
  external?: boolean;
}) {
  return (
    <div className="rounded-xl border border-foreground/10 bg-background p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground/60">{label}</p>
          <a
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="font-semibold hover:underline"
          >
            {value}
          </a>
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  optional = false,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label} {required && "*"}
        {optional && <span className="text-foreground/50">(optional)</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm transition focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
        placeholder={placeholder}
      />
    </div>
  );
}
