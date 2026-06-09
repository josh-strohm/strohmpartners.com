import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-reveal wrapper. **Currently a pass-through** (renders children
 * directly) — scroll-reveal animation is disabled while we sort out a
 * reliable implementation. Content is always visible.
 *
 * Keeping this component as a no-op so existing imports keep working
 * and the API is stable. Animation can be re-enabled by adding
 * the `useInView` + `is-revealed` class pattern back, but the content
 * will never be hidden regardless.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  repeat?: boolean;
}) {
  return <div className={cn(className)}>{children}</div>;
}
