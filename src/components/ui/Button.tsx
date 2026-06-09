import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-ink-900 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-50 text-ink-950 hover:bg-white shadow-[0_0_30px_-8px_rgba(56,189,248,0.5)] " +
    "hover:shadow-[0_0_40px_-6px_rgba(56,189,248,0.7)]",
  secondary:
    "bg-accent-500 text-white hover:bg-accent-400 shadow-[0_0_30px_-8px_rgba(56,189,248,0.6)]",
  outline:
    "border border-ink-500 text-ink-100 hover:border-ink-300 hover:bg-ink-800/50 backdrop-blur",
  ghost:
    "text-ink-200 hover:text-ink-50 hover:bg-ink-800/50",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = CommonProps & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
