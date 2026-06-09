import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CTABandProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/**
 * Full-bleed dark CTA band. Breaks the rhythm between light sections.
 * Subtle accent gradient + grid texture.
 */
export function CTABand({
  eyebrow = "Ready to start?",
  title,
  description,
  primaryCta = { label: "Book a discovery call", href: "/book" },
  secondaryCta,
}: CTABandProps) {
  return (
    <section className="relative my-24 lg:my-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-800/40 to-transparent" aria-hidden />
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 hairline-strong">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
          <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" aria-hidden />

          <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-accent-300">
                <span className="h-px w-6 bg-accent-500/60" />
                {eyebrow}
                <span className="h-px w-6 bg-accent-500/60" />
              </span>
            )}
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 leading-[1.05] balance max-w-3xl mx-auto">
              {title}
            </h2>
            {description && (
              <p className="mt-5 text-lg text-ink-200 max-w-2xl mx-auto pretty">
                {description}
              </p>
            )}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={primaryCta.href} size="lg" variant="primary">
                {primaryCta.label}
                <span aria-hidden>→</span>
              </Button>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="text-sm text-ink-200 hover:text-ink-50 transition-colors"
                >
                  {secondaryCta.label} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
