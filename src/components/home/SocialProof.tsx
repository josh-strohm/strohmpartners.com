import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/content/home";

export function SocialProof() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow={homeContent.socialProofEyebrow}
              title={homeContent.socialProofTitle}
              description={homeContent.socialProofDescription}
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-300">
              Industries I serve
            </p>
            <div className="flex flex-wrap gap-2">
              {homeContent.industries.map((ind) => (
                <span
                  key={ind}
                  className="inline-flex items-center rounded-full bg-ink-700/60 border border-ink-400/20 px-4 py-2 text-sm text-ink-100 transition-colors hover:bg-ink-700 hover:text-ink-50"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
            {homeContent.portfolio.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-ink-700/70 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] p-8 transition-all duration-300 hover:bg-ink-700 hover:border-ink-400/50"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-300">
                  {item.tag}
                </span>
                <h3 className="mt-3 font-display text-2xl text-ink-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink-200 leading-relaxed">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent-300 group-hover:text-accent-200 transition-colors">
                  Visit site
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
