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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-ink-700/70 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] p-8"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-300">
                  Testimonial · {String(i).padStart(2, "0")}
                </span>
                <p className="mt-5 font-display text-2xl text-ink-200 italic leading-snug">
                  &ldquo;Client quote goes here. Josh became a true partner and
                  found time we didn&rsquo;t know we had.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    aria-hidden
                    className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-400 to-accent-700 flex items-center justify-center font-mono text-xs text-ink-950"
                  >
                    {String.fromCharCode(64 + i * 4)}
                  </div>
                  <div>
                    <div className="text-sm text-ink-50">Client Name</div>
                    <div className="text-xs text-ink-300">Title, Company</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
