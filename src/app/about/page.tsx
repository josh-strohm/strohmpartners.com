import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/layout/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Josh Strohm. I work directly with small and medium businesses as their AI partner. I find practical places where AI saves time and money, then build it with them."
};

const values = [
  {
    title: "Keep it simple",
    body: "I'd rather build something your team actually uses than something impressive that nobody touches. If AI isn't the right answer, I'll say so up front.",
  },
  {
    title: "Your business comes first",
    body: "I don't have a favorite tool or vendor. I pick whatever fits your team, budget, and how you actually work, even if it's not the shiny new thing.",
  },
  {
    title: "Talk like humans",
    body: "Buzzword-filled decks don't help. I explain things plainly so the whole team understands what we're doing and why it matters.",
  },
  {
    title: "Built to last",
    body: "I build things your team can run without me. (I'm still here when you want to talk through the next idea though.)",
  },
];

export default function AboutPage() {
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
            About Strohm Partners
          </span>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.0] text-ink-50 max-w-4xl balance">
                Your dedicated{" "}
                <span className="italic text-accent-300">AI partner.</span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-ink-200 max-w-2xl leading-relaxed pretty">
                I'm Josh Strohm, founder of Strohm Partners. I work directly with
                small and medium businesses to find the places where AI can save
                real time and real money. Then I stick around and actually build it.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-60 h-60 sm:w-68 sm:h-68 lg:w-76 lg:h-76 rounded-2xl overflow-hidden border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)]">
                <Image
                  src="/josh-strohm.png"
                  alt="Josh Strohm, founder of Strohm Partners"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-300">
                The story
              </span>
              <h2 className="mt-4 font-display text-4xl text-ink-50 leading-tight">
                Why I do this.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5 text-ink-100 text-lg leading-relaxed pretty">
              <p>
                Most AI advice is written for huge companies with big budgets or
                for startups chasing the next big thing. The regular businesses in
                between, like the 25-person firm, the manufacturer with 60 people,
                or the local company doing solid numbers, usually get ignored.
              </p>
              <p>
                I started Strohm Partners because I've been the person running a
                business and wishing I had an extra set of hands that actually
                understood the work. I bring consultant thinking, builder skills,
                and the practical sense of someone who's had to make payroll.
              </p>
              <p>
                What you get is AI that fits how you work, not the other way around.
                No lock-in. No jargon. No fancy deck that sits on a shelf. I stay
                until the work is actually done.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 border-t border-ink-700/40">
        <Container>
          <SectionHeader
            eyebrow="What I believe"
            title="Four principles I live by."
            description="These are the rules I use to decide what to build, what to recommend, and when to tell you AI isn't the answer right now."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-2xl bg-ink-700/70 p-8 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-ink-700 hover:border-ink-400/50"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-ink-50">
                    {v.title}
                  </h3>
                </div>
                <p className="mt-4 text-ink-200 leading-relaxed pretty">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why work with me */}
      <section className="py-20 lg:py-28 border-t border-ink-700/40">
        <Container>
          <SectionHeader
            eyebrow="Why work with me"
            title="You get me, not a revolving door of consultants."
            description="When you hire Strohm Partners, you work directly with the founder. The same person from day one."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Direct access",
                body: "The person on the first call is the one who builds it. No passing you off to someone else partway through.",
              },
              {
                title: "Undivided focus",
                body: "I keep my client list small so you get real attention, not whatever's left at the end of the week.",
              },
              {
                title: "Long-term partner",
                body: "I'm not here to drop off a project and disappear. I learn your business and become the person you call when AI stuff comes up.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-ink-700/70 p-8 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] transition-colors hover:bg-ink-700 hover:border-ink-400/50"
              >
                <div
                  aria-hidden
                  className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-700/10 mb-5 hairline flex items-center justify-center"
                >
                  <span className="font-display text-2xl text-accent-300">
                    {item.title[0]}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink-50">
                  {item.title}
                </h3>
                <p className="text-[15px] text-ink-200 mt-3 leading-relaxed pretty">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Get in touch"
        title="Let's talk about your business."
        description="Tell me what's going on and where things are slow or expensive. I'll give you a straight answer on whether AI is worth it right now."
        primaryCta={{ label: "Book a free AI audit", href: "/book" }}
        secondaryCta={{ label: "Read about my services", href: "/services" }}
      />
    </>
  );
}
