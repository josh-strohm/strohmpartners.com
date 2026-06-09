import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
};

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  full: "max-w-[1440px]",
};

/**
 * Centered, horizontally-padded layout container.
 * `lg` (max-w-7xl) is the default site width.
 */
export function Container({ children, className, size = "lg" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", sizes[size], className)}>
      {children}
    </div>
  );
}
