import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/content/home";

export function HowWeWork() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)]"
      />
      <Container className="relative">
        <div className="flex flex-col gap-16">
          <SectionHeader
            eyebrow={homeContent.processEyebrow}
            title={homeContent.processTitle}
          />
          <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
            <div
              aria-hidden
              className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-ink-500/50 to-transparent"
            />
            {homeContent.processSteps.map((step, idx) => (
              <li key={step.n} className="relative flex flex-col gap-4">
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink-800 hairline">
                  <span className="font-mono text-sm text-accent-300">{step.n}</span>
                  <span
                    aria-hidden
                    className="absolute -inset-1 rounded-full border border-accent-500/20"
                  />
                </div>
                <h3 className="font-display text-2xl text-ink-50">{step.title}</h3>
                <p className="text-[15px] text-ink-200 leading-relaxed pretty">
                  {step.description}
                </p>
                {idx < homeContent.processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute top-7 -right-3 text-ink-500"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
