import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/content/home";

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-16">
          <SectionHeader
            eyebrow={homeContent.servicesEyebrow}
            title={homeContent.servicesTitle}
            description={homeContent.servicesDescription}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {homeContent.services.map((s, i) => {
              const isLarge = i === 0;
              return (
                <a
                  key={s.title}
                  href="/services"
                  className={`group relative overflow-hidden rounded-2xl bg-ink-700/70 p-8 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-ink-700 hover:border-ink-400/50 hover:-translate-y-0.5 hover:shadow-[0_0_50px_-12px_rgba(56,189,248,0.35)] block ${
                    isLarge ? "md:col-span-2 lg:col-span-2 lg:row-span-1" : ""
                  }`}
                >
                  <div
                    className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent-500/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative flex h-full flex-col">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
                      {s.tag}
                    </span>
                    <h3 className="mt-4 font-display text-3xl lg:text-4xl text-ink-50 leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-ink-200 leading-relaxed pretty max-w-prose">
                      {s.summary}
                    </p>
                    {isLarge && (
                      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-ink-100"
                          >
                            <span
                              aria-hidden
                              className="mt-1.5 h-1 w-1 rounded-full bg-accent-400 shrink-0"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent-300 group-hover:text-accent-200 transition-colors">
                      Learn more
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
