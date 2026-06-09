import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Standardized section header. Eyebrow is small mono/uppercase, title is
 * display-serif, description is body. Use this for every section to keep
 * the rhythm consistent across the site.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-accent-300">
          <span className="h-px w-6 bg-accent-500/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink-50 balance max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg sm:text-xl text-ink-200 leading-relaxed max-w-2xl pretty">
          {description}
        </p>
      )}
    </header>
  );
}
