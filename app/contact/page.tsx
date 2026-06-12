"use client";

import { useState } from "react";
import { SITE_CONFIG, SOCIAL_LINKS, CONTACT } from "../lib/site-config";
import { EYEBROW, RULED_Y } from "../lib/styles";

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
  { value: "networking", label: "Networking" },
  { value: "consulting", label: "Consulting" },
  { value: "general", label: "Miscellaneous" },
] as const;

const LABEL_CLASS = `mb-2 block text-muted ${EYEBROW}`;
const FIELD_CLASS =
  "w-full border border-hairline bg-background px-4 py-3 text-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

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
    if (!CONTACT.web3formsAccessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: CONTACT.web3formsAccessKey,
          subject: `Portfolio contact: ${formData.purpose || "General Inquiry"}`,
          from_name: "Portfolio Contact Form",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          purpose: formData.purpose,
          message: formData.message,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success === true) {
        setStatus("success");
        setFormData(INITIAL_FORM_STATE);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
    <main className="mx-auto w-full max-w-5xl px-5 py-12 md:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column - Contact Info */}
        <div>
          <h1 className="mb-4 font-serif text-4xl tracking-[-0.015em] md:text-5xl">
            Let&apos;s Connect
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted">
            Whether you&apos;re looking to hire, collaborate on a project, or just want to chat about
            engineering and AI systems, I&apos;d love to hear from you.
          </p>

          {/* Contact Methods */}
          <div className={RULED_Y}>
            <ContactMethod label="Email" href={SOCIAL_LINKS.email} value={SITE_CONFIG.email} />
            <ContactMethod
              label="Phone"
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              value={SITE_CONFIG.phone}
            />
            <ContactMethod
              label="LinkedIn"
              href={SOCIAL_LINKS.linkedin}
              value="linkedin.com/in/arnav-bhatia"
              external
            />
            <ContactMethod
              label="GitHub"
              href={SOCIAL_LINKS.github}
              value="github.com/arnavbhatia1"
              external
            />
          </div>

          {/* Quick Response Note */}
          <p className="mt-6 text-sm leading-relaxed text-muted">
            I typically reply within 24 hours. For urgent matters, reach out via phone or LinkedIn.
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div className="border border-hairline p-8">
            <h2 className={`mb-6 text-muted ${EYEBROW}`}>Send a Message</h2>

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
                <label htmlFor="purpose" className={LABEL_CLASS}>
                  Purpose *
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  required
                  value={formData.purpose}
                  onChange={handleChange}
                  className={FIELD_CLASS}
                >
                  {PURPOSES.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={LABEL_CLASS}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={FIELD_CLASS}
                  placeholder="Tell me about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-accent-foreground transition hover:opacity-90 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="border-l-2 border-accent pl-4 text-sm text-muted">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="border-l-2 border-red-600 pl-4 text-sm text-muted">
                  Something went wrong sending your message. Please email me directly at{" "}
                  <a href={SOCIAL_LINKS.email} className="underline underline-offset-4">
                    {SITE_CONFIG.email}
                  </a>
                  .
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
function ContactMethod({
  label,
  href,
  value,
  external = false,
}: {
  label: string;
  href: string;
  value: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-4">
      <p className={`text-muted ${EYEBROW}`}>{label}</p>
      <a
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="font-serif transition-colors hover:text-accent"
      >
        {value}
      </a>
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
      <label htmlFor={name} className={LABEL_CLASS}>
        {label} {required && "*"}
        {optional && <span>(optional)</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={FIELD_CLASS}
        placeholder={placeholder}
      />
    </div>
  );
}
