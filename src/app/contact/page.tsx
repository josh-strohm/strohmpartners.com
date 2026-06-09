import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
    description:
      "Get in touch with Strohm Partners. I read and respond to every message personally, usually within one business day."
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" aria-hidden />
        <div
          className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
          aria-hidden
        />
        <Container className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-700/60 backdrop-blur px-4 py-1.5 border border-ink-400/20 text-xs font-mono uppercase tracking-[0.18em] text-ink-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Contact
          </span>
          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.0] text-ink-50 max-w-4xl balance">
            Get in <span className="italic text-accent-300">touch.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-ink-200 max-w-2xl leading-relaxed pretty">
            I read and respond to every message personally, usually within one
            business day. Tell me a bit about your business and what you're
            wrestling with.
          </p>
        </Container>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-2xl bg-ink-700/70 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] p-8">
                <h3 className="font-display text-2xl text-ink-50">
                  Direct contact
                </h3>
                <dl className="mt-6 flex flex-col gap-5 text-[15px]">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-300">
                      Email
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={`mailto:${siteContent.contactEmail}`}
                        className="text-ink-50 hover:text-accent-300 transition-colors underline-offset-4 hover:underline"
                      >
                        {siteContent.contactEmail}
                      </a>
                    </dd>
                  </div>
                  {siteContent.contactPhone && (
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-300">
                        Phone
                      </dt>
                      <dd className="mt-1.5 text-ink-50">
                        {siteContent.contactPhone}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-300">
                      Hours
                    </dt>
                    <dd className="mt-1.5 text-ink-100">
                      {siteContent.businessHours}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-accent-500/15 via-ink-700/70 to-ink-700/70 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] p-8 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent-500/30 blur-3xl"
                />
                <div className="relative">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-300">
                    Prefer to talk live?
                  </span>
                  <h3 className="font-display text-2xl text-ink-50 leading-tight">
                    Book a 30-minute discovery call.
                  </h3>
                  <p className="mt-3 text-[15px] text-ink-200 leading-relaxed pretty">
                    Skip the email ping-pong. Pick a time that works for you and
                    we'll talk live.
                  </p>
                  <a
                    href="/book"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-ink-50 hover:text-accent-300 transition-colors"
                  >
                    Book a call
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-ink-700/70 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] p-8">
                <h3 className="font-display text-2xl text-ink-50">
                  Need support?
                </h3>
                <p className="mt-3 text-[15px] text-ink-200 leading-relaxed pretty">
                  Current clients can reach out for support directly. We're here to help.
                </p>
                <dl className="mt-6 flex flex-col gap-5 text-[15px]">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-300">
                      Email Support
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href="mailto:help@strohmpartners.com"
                        className="text-ink-50 hover:text-accent-300 transition-colors underline-offset-4 hover:underline"
                      >
                        help@strohmpartners.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-300">
                      Phone Support
                    </dt>
                    <dd className="mt-1.5 text-ink-50">
                      (814) 931-3981
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
