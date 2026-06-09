import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/layout/CTABand";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Services",
    description:
      "From AI opportunity assessments to custom builds and team training. One partner, start to finish, no handoffs."
};

const faqs = [
  {
    q: "How long does an engagement typically take?",
    a: "An assessment takes 2 to 3 weeks. A full build typically runs 6 to 16 weeks depending on what we're doing. I price by outcomes, not by the hour.",
  },
  {
    q: "What size business do you work with?",
    a: "1 to 250 employees is where I can help the most. Smaller than that and you probably just need a couple good off-the-shelf tools. Larger than that and you should probably hire someone in-house.",
  },
  {
    q: "Do you work with our existing tools and vendors?",
    a: "Absolutely. I don't resell software and I have no vendor kickbacks. If your current stack can handle it, I'll tell you that straight up.",
  },
  {
    q: "What does it cost?",
    a: "Assessments are a fixed fee. Builds are scoped and priced after the assessment. I'll give you honest ranges on the discovery call so there are no surprises.",
  },
  {
    q: "What if AI isn't the right answer for us?",
    a: "I'll tell you. The assessment is paid either way, and if my honest recommendation is 'don't do AI yet, fix this other thing first,' that's a completely valid outcome. I'm here for the long haul, not to squeeze every billable hour.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yep. I do quarterly check-ins and ad-hoc support for clients who want it. But I also build everything so your team can run it without me if that's what you prefer.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" aria-hidden />
        <div
          className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
          aria-hidden
        />
        <Container className="relative pt-24 pb-20 sm:pt-32 sm:pb-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-700/60 backdrop-blur px-4 py-1.5 border border-ink-400/20 text-xs font-mono uppercase tracking-[0.18em] text-ink-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Services
          </span>
          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.0] text-ink-50 max-w-4xl balance">
            Your AI partner,{" "}
            <span className="italic text-accent-300">every step.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-ink-200 max-w-2xl leading-relaxed pretty">
            I start by learning your business, then I stay with you through the
            whole process: strategy, build, training, and beyond. No handoffs to
            junior staff, no consultants who disappear after the kickoff meeting.
          </p>
        </Container>
      </section>

      {/* All services | full phase breakdown */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {homeContent.services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl bg-ink-700/70 p-8 lg:p-10 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] transition-all hover:bg-ink-700 hover:border-ink-400/50"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl lg:text-4xl text-ink-50 leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-ink-200 leading-relaxed pretty">
                  {s.summary}
                </p>
                <ul className="mt-6 flex flex-col gap-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[15px] text-ink-100"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 rounded-full bg-accent-400 shrink-0"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process | reuse the home steps, full version */}
      <section className="py-20 lg:py-28 border-t border-ink-700/40">
        <Container>
          <SectionHeader
            eyebrow="Engagement timeline"
            title="From first call to working AI in weeks, not quarters."
            description="A straightforward, transparent process. You'll always know what's next, what it costs, and what you're getting."
          />
          <ol className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-4 relative">
            <div
              aria-hidden
              className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-ink-500/50 to-transparent"
            />
            {homeContent.processSteps.map((step) => (
              <li key={step.n} className="relative flex flex-col gap-4">
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink-800 hairline">
                  <span className="font-mono text-sm text-accent-300">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-ink-50">
                  {step.title}
                </h3>
                <p className="text-[15px] text-ink-200 leading-relaxed pretty">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 border-t border-ink-700/40">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="Common questions"
            title="Things people ask me upfront."
          />
            </div>
            <div className="lg:col-span-8 flex flex-col gap-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl bg-ink-700/70 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] p-6 transition-colors hover:bg-ink-700 hover:border-ink-400/50 open:bg-ink-700 open:border-ink-400/50"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                    <h3 className="font-display text-xl text-ink-50">
                      {f.q}
                    </h3>
                    <span
                      aria-hidden
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-700 hairline text-ink-100 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-ink-200 leading-relaxed pretty">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Start with a call"
        title="Ready to see where AI fits your business?"
        description="A 30-minute conversation is the easiest way to figure out if we're a good fit. No pitch, no pressure. Just two people talking shop."
        primaryCta={{ label: "Book a discovery call", href: "/book" }}
        secondaryCta={{ label: "Send a message instead", href: "/contact" }}
      />
    </>
  );
}
