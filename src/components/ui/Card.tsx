import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
};

/**
 * Base card surface for the dark UI. Hairline border + subtle gradient on hover.
 */
export function Card({ children, className, hover = true, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "relative rounded-2xl bg-ink-700/70 backdrop-blur p-6 lg:p-8",
        "border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)]",
        hover &&
          "transition-all duration-300 hover:bg-ink-700 hover:border-ink-400/50 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.3)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
