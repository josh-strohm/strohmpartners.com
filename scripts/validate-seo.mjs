import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const productionOrigin = "https://strohmpartners.com";
const outputDirectory = resolve("out");
const sitemap = await readFile(resolve(outputDirectory, "sitemap.xml"), "utf8");
const robots = await readFile(resolve(outputDirectory, "robots.txt"), "utf8");

assert.match(
  sitemap,
  /^<\?xml version="1\.0" encoding="UTF-8"\?>\s*<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">[\s\S]*<\/urlset>\s*$/,
  "sitemap.xml must be a sitemap XML document",
);

const urls = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<\/url>/g)].map(
  ([, url]) => url,
);
const expectedPaths = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/book",
  "/privacy-policy",
  "/refund-policy",
  "/terms",
];
const outputFiles = new Map([
  ["/", "index.html"],
  ["/about", "about.html"],
  ["/services", "services.html"],
  ["/contact", "contact.html"],
  ["/book", "book.html"],
  ["/privacy-policy", "privacy-policy.html"],
  ["/refund-policy", "refund-policy.html"],
  ["/terms", "terms.html"],
]);

assert.equal(urls.length, expectedPaths.length, "sitemap URL count is unexpected");
assert.equal(new Set(urls).size, urls.length, "sitemap contains duplicate URLs");

for (const [index, url] of urls.entries()) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, productionOrigin, `${url} uses the wrong production origin`);
  assert.equal(parsed.search, "", `${url} must not contain tracking parameters`);
  assert.equal(parsed.hash, "", `${url} must not contain a fragment`);
  assert.equal(parsed.pathname, expectedPaths[index], `${url} is not an expected public route`);
  assert.notEqual(parsed.pathname, "/test", "test routes must not be in the sitemap");
  assert.ok(!parsed.pathname.startsWith("/api/"), "API routes must not be in the sitemap");
}

for (const pathname of expectedPaths) {
  const html = await readFile(resolve(outputDirectory, outputFiles.get(pathname)), "utf8");
  const canonicalUrls = [...html.matchAll(/<link rel="canonical" href="([^"]+)"\/>/g)].map(
    ([, url]) => url,
  );
  const expectedUrl = pathname === "/" ? productionOrigin : `${productionOrigin}${pathname}`;
  assert.deepEqual(canonicalUrls, [expectedUrl], `${pathname} must have one matching canonical URL`);
  assert.doesNotMatch(html, /<meta name="robots" content="noindex/, `${pathname} must be indexable`);
}

assert.match(robots, /^User-Agent: \*\s*$/m, "robots.txt must target all crawlers");
assert.match(robots, /^Allow: \/\s*$/m, "robots.txt must allow public pages");
assert.match(robots, /^Disallow: \/api\/\s*$/m, "robots.txt must disallow API routes");
assert.match(robots, /^Disallow: \/test\s*$/m, "robots.txt must disallow test routes");
assert.match(robots, new RegExp(`^Sitemap: ${productionOrigin.replaceAll(".", "\\.")}\\/sitemap\\.xml\\s*$`, "m"));

console.log(`SEO validation passed: ${urls.length} sitemap URLs, correct robots.txt sitemap reference.`);
