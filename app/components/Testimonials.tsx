type Testimonial = {
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
  linkedin?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Your Colleague",
    role: "Senior Software Engineer",
    company: "Blue Yonder",
    text: "Add LinkedIn recommendations here. Connect with colleagues and ask them to provide recommendations on LinkedIn, then add them here.",
    linkedin: "https://www.linkedin.com/in/arnav-bhatia/",
  },
  {
    name: "Your Manager",
    role: "Engineering Manager",
    company: "Blue Yonder",
    text: "Testimonials from managers, colleagues, and clients add credibility to your portfolio. Reach out to people you've worked with for endorsements.",
    linkedin: "https://www.linkedin.com/in/arnav-bhatia/",
  },
  {
    name: "Team Member",
    role: "Product Manager",
    company: "Manhattan Associates",
    text: "Great testimonials focus on specific skills, projects, and the impact you made. They should highlight your technical abilities and soft skills.",
    linkedin: "https://www.linkedin.com/in/arnav-bhatia/",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">What People Say</h2>
          <p className="text-foreground/70">
            Testimonials and recommendations from colleagues and collaborators
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Quote Icon */}
              <svg
                className="mb-4 h-8 w-8 text-foreground/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Testimonial Text */}
              <p className="mb-4 text-sm leading-relaxed text-foreground/80">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-lg font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
                {testimonial.linkedin && (
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/40 transition hover:text-foreground"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-foreground/70">
            Want to add your testimonial? I&apos;d love to hear from you!
          </p>
          <a
            href="https://www.linkedin.com/in/arnav-bhatia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-foreground/5"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Recommend me on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
