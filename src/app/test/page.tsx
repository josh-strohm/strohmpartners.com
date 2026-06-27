import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { StrohmFormEmbed } from "@/components/contact/StrohmFormEmbed";

export const metadata: Metadata = {
  title: "Test",
  description: "Test page for the Strohm contact form embed.",
  robots: { index: false, follow: false },
};

export default function TestPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" aria-hidden />
        <div
          className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
          aria-hidden
        />
        <Container className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-700/60 backdrop-blur px-4 py-1.5 border border-ink-400/20 text-xs font-mono uppercase tracking-[0.18em] text-ink-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Test
          </span>
          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.0] text-ink-50 max-w-4xl balance">
            Form embed <span className="italic text-accent-300">test.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-ink-200 max-w-2xl leading-relaxed pretty">
            This page loads the inline Strohm contact form embed for testing.
          </p>
        </Container>
      </section>

      <section className="pb-16 lg:pb-24">
        <Container size="md">
          <div className="rounded-3xl bg-paper shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(15,19,32,0.06)] overflow-hidden p-6 sm:p-8">
            <StrohmFormEmbed />
          </div>
        </Container>
      </section>
    </>
  );
}