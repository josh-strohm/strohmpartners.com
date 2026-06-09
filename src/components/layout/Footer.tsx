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
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink-700/50 bg-ink-950">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6 flex flex-col gap-5">
            <Wordmark />
            <p className="text-ink-200 max-w-md text-[15px] leading-relaxed">
              Your dedicated AI partner. I work with small and medium-sized businesses
              to find where AI saves time, cuts costs, and drives growth.
            </p>
            <div className="flex items-center gap-2 text-sm text-ink-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider">
                Currently accepting new clients
              </span>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="md:col-span-3 flex flex-col gap-4">
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
            Built with care · One client at a time
          </p>
        </div>
      </Container>
    </footer>
  );
}
