import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const indexableRoutes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/book",
  "/privacy-policy",
  "/refund-policy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((pathname) => ({
    url: absoluteUrl(pathname),
  }));
}
