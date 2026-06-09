import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Wordmark({ className, asLink = true }: { className?: string; asLink?: boolean }) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/strohmpartners-logo-nobg.png"
        alt="Strohm Partners"
        width={160}
        height={40}
        priority
        className="h-32 w-auto"
      />
    </span>
  );

  if (!asLink) return content;
  return (
    <Link href="/" aria-label="Strohm Partners Home" className="group">
      {content}
    </Link>
  );
}
