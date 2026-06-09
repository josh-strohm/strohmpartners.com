import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Text wordmark for Strohm Partners. A geometric "S/P" monogram sits to the
 * left of the wordmark — replace with the real logo later.
 */
export function Wordmark({ className, asLink = true }: { className?: string; asLink?: boolean }) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent-400 to-accent-600 shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)]"
      >
        <span className="font-display text-[15px] leading-none text-ink-950">S</span>
      </span>
      <span className="font-display text-[19px] leading-none text-ink-50 tracking-tight">
        Strohm <span className="text-accent-300">Partners</span>
      </span>
    </span>
  );

  if (!asLink) return content;
  return (
    <Link href="/" aria-label="Strohm Partners Home" className="group">
      {content}
    </Link>
  );
}
