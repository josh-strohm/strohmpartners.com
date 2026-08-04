import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Wordmark({ className, asLink = true, logoClassName }: { className?: string; asLink?: boolean; logoClassName?: string }) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/strohm-partners-logo.png"
        alt="Strohm Partners"
        width={120}
        height={30}
        priority
        className={cn("w-auto", logoClassName || "h-40")}
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
