import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABand } from "@/components/layout/CTABand";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Josh Strohm, founder of Strohm Partners. I work hands-on with small and medium-sized businesses as their AI partner, finding where AI saves time, cuts costs, and actually helps the team."
};

const values = [
  {
    title: "Keep it simple",
            body: "I'd rather build something your team actually uses every day than something fancy that sits in a folder. AI for the sake of AI is just expensive noise.",
  },
  {
    title: "Your business comes first",
            body: "I don't push a specific tool or vendor. I pick what fits your team, your budget, and your workflow, even if it's not the shiny option everyone's talking about."
  },
  {
    title: "Talk like humans",
            body: "Strategy documents full of fancy words don't help anyone. I explain things in plain language so your whole team knows what we're doing and why."
  },
  {
    title: "Built to last",
            body: "I build things your team can run and improve without calling me every week. (But I'm always around if you want to bounce ideas around.)",
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
                I'm Josh Strohm, founder of Strohm Partners. I work shoulder-to-
                shoulder with small and medium-sized businesses to find where AI
                can save time, cut costs, and free up their teams. Then I roll up
                my sleeves and help make it happen.
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
                Most AI advice is built for two kinds of people: big enterprises
                with seven-figure budgets, or tech founders building the next unicorn.
                The small and medium-sized business in between. The 25-person
                professional services firm, the 60-person manufacturer, the local
                business owner doing 8 figures. They get left out in the cold.
              </p>
              <p>
                I started Strohm Partners because I know what it's like to run a
                business and wish you had an extra pair of hands. I bring the
                strategic thinking of a good consultant, the technical skills of a
                product builder, and the pragmatism of someone who's actually had
                P&L responsibility.
              </p>
              <p>
                What you get: AI that fits your business, not the other way around.
                No lock-in. No fancy words. No 90-day engagement that ends with a slide
                deck nobody reads. Just a real partner who sticks with you until
                the work is actually done.
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
            title="Four principles I actually live by."
            description="These aren't motivational posters. They're the rules I use to decide what to build, what to recommend, and when to tell you AI isn't the answer right now."
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
            description="When you hire Strohm Partners, you work directly with the founder. No account managers, no hand-offs, no surprises."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Direct access",
                body: "The person you talk to on the first call is the person building your solution. No bait-and-switch with junior staff.",
              },
              {
                title: "Undivided focus",
                body: "I only take on a handful of clients at a time so you get my full attention, not whatever time I have left over.",
              },
              {
                title: "Long-term partner",
                body: "I'm not here for a quick project and a goodbye. I stick around, learn your business, and become the person you call when AI questions come up.",
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
        description="Whether you're just curious about AI or already trying things out, I'd love to hear what you're working on and where you're stuck."
        primaryCta={{ label: "Book a free AI audit", href: "/book" }}
        secondaryCta={{ label: "Read about my services", href: "/services" }}
      />
    </>
  );
}
