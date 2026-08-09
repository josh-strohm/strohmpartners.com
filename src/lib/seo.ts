import type { Metadata } from "next";

export const siteUrl = "https://strohmpartners.com";

export function absoluteUrl(pathname: string): string {
  return pathname === "/" ? siteUrl : new URL(pathname, siteUrl).toString();
}

export function withCanonical(pathname: string, metadata: Metadata): Metadata {
  return {
    ...metadata,
    alternates: {
      canonical: absoluteUrl(pathname),
    },
  };
}
