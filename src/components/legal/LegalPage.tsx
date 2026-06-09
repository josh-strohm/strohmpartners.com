import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/layout/CTABand";

type LegalSection = {
  title: string;
  body: React.ReactNode;
};

type LegalPageProps = {
  title: string;
  intro: React.ReactNode;
  sections: LegalSection[];
  contactTitle?: string;
};

/**
 * Shared layout for long-form legal/policy pages. Renders a hero header, an
 * intro, and a sequence of numbered sections. Each section uses the same
 * prose styling as the rest of the site.
 */
export function buildLegalMetadata(title: string, description: string): Metadata {
  return { title, description };
}

export function LegalPage({
  title,
  intro,
  sections,
  contactTitle = "Contact us",
}: LegalPageProps) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" aria-hidden />
        <div
          className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
          aria-hidden
        />
        <Container className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-700/60 backdrop-blur px-4 py-1.5 border border-ink-400/20 text-xs font-mono uppercase tracking-[0.18em] text-ink-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Legal
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.0] text-ink-50 max-w-4xl balance">
            {title}
          </h1>
          <div className="mt-6 max-w-2xl text-lg text-ink-200 leading-relaxed pretty">
            {intro}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="md">
          <div className="flex flex-col gap-12">
            {sections.map((section, i) => (
              <article
                key={section.title}
                className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12"
              >
                <header className="lg:col-span-4">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl text-ink-50 leading-tight">
                    {section.title}
                  </h2>
                </header>
                <div className="lg:col-span-8 flex flex-col gap-4 text-[15px] sm:text-base text-ink-100 leading-relaxed pretty">
                  {section.body}
                </div>
              </article>
            ))}

            <article className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12 pt-8 border-t border-ink-700/40">
              <header className="lg:col-span-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-300">
                  Contact
                </span>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl text-ink-50 leading-tight">
                  {contactTitle}
                </h2>
              </header>
              <div className="lg:col-span-8 flex flex-col gap-2 text-[15px] sm:text-base text-ink-100 leading-relaxed pretty">
                <p className="font-medium text-ink-50">Strohm Partners LLC</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hi@strohmpartners.com"
                    className="text-accent-300 hover:text-accent-200 transition-colors"
                  >
                    hi@strohmpartners.com
                  </a>
                </p>
                <p>Phone: +1 (814) 931-3981</p>
                <p>Address: 911 23rd Ave., Altoona, PA 16601</p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Let's work together"
        title={<>Ready to find where AI can help your business?</>}
        description="A 30-minute discovery call. No pitch, no pressure, just a conversation about your business and where AI might fit."
        primaryCta={{ label: "Book a discovery call", href: "/book" }}
        secondaryCta={{ label: "Or send a message", href: "/contact" }}
      />
    </>
  );
}
