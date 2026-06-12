import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { Container } from "@/components/ui/Container";

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Book a call", href: "/book" },
      { label: "Services overview", href: "/services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund & Cancellation", href: "/refund-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink-700/50 bg-ink-950">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4 flex flex-col gap-5">
            <Wordmark />
            <p className="text-ink-200 max-w-md text-[15px] leading-relaxed">
              Your AI partner for small and medium-sized businesses. I find where AI
              saves time, cuts costs, and frees your team up for higher-value work.
            </p>
            <div className="flex items-center gap-2 text-sm text-ink-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider">
                Currently taking on new clients
              </span>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="md:col-span-2 flex flex-col gap-4 md:col-start-auto">
              <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-300">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[15px] text-ink-100 hover:text-accent-300 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-700/50 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-300 font-mono uppercase tracking-wider">
            © {new Date().getFullYear()} Strohm Partners LLC. All rights reserved.
          </p>
          <p className="text-xs text-ink-300 font-mono uppercase tracking-wider">
            Built with care · one business at a time
          </p>
        </div>
      </Container>
    </footer>
  );
}
