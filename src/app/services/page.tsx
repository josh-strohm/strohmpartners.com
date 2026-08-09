import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/layout/CTABand";
import { Button } from "@/components/ui/Button";
import { homeContent } from "@/content/home";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = withCanonical("/services", {
  title: "Services",
  description:
    "Start with a $999 AI Tools Assessment, then get help with process redesign, automation, knowledge systems, custom workflows, or ongoing support.",
});

const faqs = [
  {
    q: "What happens in the AI Tools Assessment?",
    a: "We meet on Google Meet for 45 minutes and walk through how your business actually runs. I review the conversation, compare the tools that fit, and send a report with 3–7 recommendations, a starting plan, savings estimates, and a 30-minute review call.",
  },
  {
    q: "What size business is this for?",
    a: "The best fit is usually a business with 2–20 employees and $500K–$5M in annual revenue. If you are smaller or larger, reach out and we can see whether the assessment makes sense.",
  },
  {
    q: "Do you work with our existing tools and vendors?",
    a: "Yes. I start with what you already use and look for the smallest change that solves the problem. I do not resell software or take vendor kickbacks.",
  },
  {
    q: "What does it cost?",
    a: "The AI Tools Assessment is $999, paid once. The tools I recommend usually cost about $60 per month combined. Any implementation work is optional, and I give you the price before we start.",
  },
  {
    q: "What if you can't find at least 5 hours of savings?",
    a: "You get the full assessment fee back. The report must identify at least five hours a week in possible savings, or your only cost is the 45 minutes we spend together.",
  },
  {
    q: "What happens after the assessment?",
    a: "Most clients can put the report to work themselves. If you want help, I can redesign the process, build a small automation, organize your knowledge, create a custom workflow, or stay on as your AI Concierge. None of that is required.",
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
            AI tools chosen for{" "}
            <span className="italic text-accent-300">the way you work.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-ink-200 max-w-2xl leading-relaxed pretty">
            The assessment shows where your week is going and gives you a short
            list of tools worth trying. When you want help putting them in place,
            I can stay involved through implementation.
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
                className={`group relative overflow-hidden rounded-2xl bg-ink-700/70 p-8 lg:p-10 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] transition-all hover:bg-ink-700 hover:border-ink-400/50 ${
                  s.title === "AI Concierge" ? "md:col-span-2" : ""
                }`}
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
                <div className="mt-8">
                  <a
                    href={s.tag.includes("Phase 01") ? "/book" : "/contact"}
                    className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 border border-accent-500/30 px-5 py-2.5 text-sm text-accent-300 hover:bg-accent-500/20 hover:text-accent-200 transition-colors"
                  >
                    {s.tag.includes("Phase 01") ? "Book your assessment" : "Discuss this next step"} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Hermes setup offer */}
      <section className="py-20 lg:py-24 border-t border-ink-700/40">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500/15 via-ink-800 to-ink-950 border border-accent-400/30 p-8 sm:p-12 lg:p-16">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" aria-hidden />
            <div className="relative max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                A hands-on option
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink-50 leading-tight">
                Want Hermes installed and configured for you?
              </h2>
              <p className="mt-5 text-lg text-ink-200 leading-relaxed pretty max-w-2xl">
                If you already know you want an agent, Hermes setup gives you a
                direct path to installation, configuration, and a working setup.
              </p>
              <div className="mt-8">
                <Button href="https://hermes.strohmpartners.com" variant="secondary" size="md">
                  Explore Hermes setup
                  <span aria-hidden>↗</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process | reuse the home steps, full version */}
      <section className="py-20 lg:py-28 border-t border-ink-700/40">
        <Container>
          <SectionHeader
            eyebrow="What happens next"
            title="A simple path from the assessment to the work."
            description="You get the report, choose what to try, and decide whether you want help putting it in place."
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
        eyebrow="Start with the assessment"
        title="Ready to reclaim some time?"
        description="Start with 45 minutes. You will leave with specific tools to try, a starting plan, and the numbers behind the recommendation."
        primaryCta={{ label: "Book your $999 assessment", href: "/book" }}
        secondaryCta={{ label: "Send a message instead", href: "/contact" }}
      />
    </>
  );
}
