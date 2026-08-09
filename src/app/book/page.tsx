import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/Wordmark";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = withCanonical("/book", {
  title: "Book your AI Tools Assessment",
  description:
    "Book your $999 AI Tools Assessment: a 45-minute conversation, 3–7 tool recommendations, a quick-start plan, and a 30-minute review call."
});

const expectations = [
  {
    title: "A structured interview",
    body: "We walk through how your week actually goes, where work piles up, and which tasks are costing you the most time.",
  },
  {
    title: "Specific recommendations",
    body: "You get 3–7 off-the-shelf AI or SaaS tools matched to your workflows, budget, and existing stack.",
  },
  {
    title: "A plan you can use",
    body: "Your report includes an effort vs. impact matrix, a four-day quick-start plan, financial impact analysis, and a 30-minute review call.",
  },
];

const CALENDAR_SRC =
  "https://cal.com/strohm-partners";

export default function BookPage() {
  return (
    <>
      {/* Page hero | keeps the dark site shell */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" aria-hidden />
        <div
          className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
          aria-hidden
        />
        <Container className="relative pt-20 pb-10 sm:pt-28 sm:pb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-700/60 backdrop-blur px-4 py-1.5 border border-ink-400/20 text-xs font-mono uppercase tracking-[0.18em] text-ink-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            45 minutes · $999 one-time
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.0] text-ink-50 max-w-3xl mx-auto balance">
            Book your <span className="italic text-accent-300">AI assessment.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-200 max-w-2xl mx-auto leading-relaxed pretty">
            Pick a time to walk through your week. We’ll find the work worth
            changing and show you which tools to try first.
          </p>
        </Container>
      </section>

      {/* LIGHT SECTION | calendar wrapper has a light surface so the
          Cal.com embed's UI is fully visible. We transition
          from the dark site into a light "card" then back to dark. */}
      <section className="pb-16">
        <Container size="md">
          <div className="rounded-3xl bg-paper shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(15,19,32,0.06)] overflow-hidden">
            <div className="px-4 sm:px-6 pt-6 pb-2 flex items-center justify-between border-b border-ink-100">
              <Wordmark asLink={false} logoClassName="h-[5.25rem]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
                Calendar availability · Cal.com
              </span>
            </div>

            <div className="aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/10] w-full bg-white">
              <iframe
                src={CALENDAR_SRC}
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder={0}
                title="Book your AI Tools Assessment"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-ink-300 font-mono uppercase tracking-wider">
              Calendar not loading?{" "}
            <a
              href={CALENDAR_SRC}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-100 underline-offset-4 hover:underline"
            >
              Open in a new tab
            </a>
          </p>
        </Container>
      </section>

      {/* What to expect | back on dark */}
      <section className="py-16 lg:py-24 border-t border-ink-700/40">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {expectations.map((e, i) => (
              <div
                key={e.title}
                className="rounded-2xl bg-ink-700/70 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] p-8"
              >
                <span className="font-mono text-xs text-accent-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl text-ink-50">
                  {e.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-200 leading-relaxed pretty">
                  {e.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-ink-300">
              Questions before booking?{" "}
              <a
                href="mailto:hi@strohmpartners.com"
                className="text-ink-100 underline-offset-4 hover:underline"
              >
                hi@strohmpartners.com
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
