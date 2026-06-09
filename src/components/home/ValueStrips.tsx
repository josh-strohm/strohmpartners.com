import { homeContent } from "@/content/home";

export function ValueStrips() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink-600/50 border border-ink-400/30 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.valueStrips.map((v) => (
            <div
              key={v.title}
              className="group bg-ink-800 px-6 py-7 transition-colors hover:bg-ink-700"
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-accent-500 transition-transform group-hover:scale-150"
                />
                <h3 className="font-display text-xl text-ink-50">{v.title}</h3>
              </div>
              <p className="mt-3 text-sm text-ink-200 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
