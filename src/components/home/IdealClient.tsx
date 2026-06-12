import { Container } from "@/components/ui/Container";

const criteria = [
  "You run a business with 1–250 employees",
  "You're spending hours every week on repetitive tasks a machine could handle",
  "You've been burned by consultants who over-promised and under-delivered",
  "You want a partner who actually builds things, not just talks about them",
];

export function IdealClient() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-300">
              Is this for you?
            </span>
            <h2 className="mt-4 font-display text-4xl text-ink-50 leading-tight">
              I work best with businesses that are ready to stop wasting time.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-ink-700/70 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] p-8 lg:p-10">
              <p className="text-ink-200 text-lg mb-6">
                Sound like you? Check the boxes:
              </p>
              <ul className="flex flex-col gap-4">
                {criteria.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[15px] text-ink-100">
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-400 shrink-0"
                    />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 border border-accent-500/30 px-6 py-3 text-sm text-accent-300 hover:bg-accent-500/20 hover:text-accent-200 transition-colors"
                >
                  Book a free AI audit →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
