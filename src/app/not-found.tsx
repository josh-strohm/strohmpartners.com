import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-mesh" aria-hidden />
      <div
        className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        aria-hidden
      />
      <Container className="relative py-20">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-300">
            404 · page not found
          </span>
          <h1 className="mt-4 font-display text-6xl sm:text-7xl text-ink-50 leading-[1.0] balance">
            That page <span className="italic text-accent-300">doesn't exist.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-200 max-w-xl leading-relaxed pretty">
            That link might be old, or I may have moved things around. Let's get
            you back to somewhere that actually works.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/" variant="primary" size="md">
              Back to home
            </Button>
            <Button href="/services" variant="outline" size="md">
              See services
            </Button>
            <Button href="/book" variant="ghost" size="md">
              Book a call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
