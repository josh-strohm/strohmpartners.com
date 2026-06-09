# Design References — Strohm Partners LLC Website

Curated 2026-06-09. These are the sites and resources that informed the design direction in `PLAN.md`. We're inspired by patterns, not copying.

---

## Primary Anchor: Vercel

**Site:** [vercel.com](https://vercel.com)
**Why it's the anchor:** This is the aesthetic the client explicitly named as the desired direction — bold display type, motion, deep navy + electric accent, modular grids, interactive elements. We pull *patterns* from Vercel, not visual identity.

**What to learn from Vercel:**
- **Geist design system** is public and free. Use Geist Sans/Mono directly via `next/font` — apt homage, not copying.
- **Hero treatment:** Asymmetric, large display-serif-adjacent sans, sub-text below, dual CTA (primary + secondary). A small "trusted by" or context strip just below.
- **Grid background + subtle animation** in hero instead of stock photo. We can do this with CSS only.
- **Bento card layouts** for service/feature sections. One large + several smaller, hover reveals.
- **Scroll-reveal animations** that are *gentle* — fade + slight translate, not bounce. Library: Framer Motion.
- **High-contrast dark CTA bands** breaking up light sections for rhythm.
- **Marquee logo strips** for social proof (we'll use a placeholder until client provides logos).

**What NOT to copy from Vercel:**
- The triangle logo and the specific black-with-rainbow-rays hero animation (too recognizable, too "Vercel").
- Their specific section copy structure ("AI Apps / Web Apps / Ecommerce" tabbed layout — wrong fit for an SMB consultancy).
- The exact dark-by-default color scheme — we lead with light for warmth.

---

## Secondary: Anthropic

**Site:** [anthropic.com](https://anthropic.com)
**Why it matters:** One of the most-respected AI company sites. Demonstrates that "AI" doesn't require neon/cyberpunk aesthetics. Sophisticated, restrained, credible.

**What to learn:**
- **"Bold statement + CTA"** hero pattern. Their hero is one sentence, one button. We can borrow the confidence.
- **Restrained color palette:** warm cream/beige backgrounds, deep ink, one accent. Note: Anthropic uses *warm* tones; we'll go cooler (navy) but the *restraint* principle is the takeaway.
- **Product demo over abstract visuals** — they show Claude doing things, not AI brain imagery. We should show AI workflows or "before/after" of business processes, not abstract AI art.
- **Custom serif (Anthropic Serif) at display sizes** — the hero contrast of a refined serif headline + clean sans body. We can borrow this pairing with Instrument Serif or similar.

---

## AI Consultancy / SMB-Focused Patterns

### From Veza Digital's "Best AI Startup Website Design Examples (2026)"
[vezadigital.com/post/best-ai-website-design-examples](https://www.vezadigital.com/post/best-ai-website-design-examples)

**Key principles surfaced:**
- "Innovation without being alienating, technical while remaining accessible" — exactly the SMB challenge.
- **Dark mode dominates AI sites** (70%+), but combined with gradient accents. We're choosing *light* by default for warmth, with dark accents.
- **Bold confident sans-serif headlines** that establish authority.
- **Trust signals** (logos, testimonials) are *non-negotiable* for AI sites.
- **Universal patterns:** clear value prop, product-led hero, interactive elements, customer proof above the fold.

### From Webstacks' "AI Website Examples: Design Trends & Best Practices"
[webstacks.com/blog/ai-website-design-examples-inspiration](https://www.webstacks.com/blog/ai-website-design-examples-inspiration)

**Top patterns they identify:**
1. Dark mode + colorful backgrounds (we're inverting to light + electric accent, but the *color-as-branding* principle holds)
2. **Product illustrations / near-demo experiences** — showing the product, not describing it. For us: showing AI workflows/transformations.
3. **Trust signals everywhere** — logos, testimonials, security badges.
4. **"AI" used as a buzzword above the fold** in bold, snappy headings. (We do this with "AI strategy that actually fits your business.")
5. **CMS patterns:** Webflow for simple, headless for content-heavy. For a 5-page site, no CMS needed — content as TS modules.

**Featured examples worth a closer look for pattern-borrowing:**
- **Deepgram** — product-led, dark, animated demos. Borrow: the *interactive product demo* approach.
- **Cohere** — clean layout, colorful backgrounds, consistent shape language. Borrow: the *geometric consistency* principle.
- **Runway** — dark, cinematic, "product as hero." Borrow: the *visual confidence* — pick a strong point of view.
- **Harvey** — legal AI, professional, enterprise trust. Borrow: the *trust signaling* patterns even though we're SMB not enterprise.

---

## Consulting-Site Patterns

### From Consulting Success's "45 Best Consulting Websites"
[consultingsuccess.com/best-consulting-websites](https://www.consultingsuccess.com/best-consulting-websites)

**Universal patterns across all 45 top consulting sites:**
- **Clear value proposition in the hero** — "what you do, who you do it for, what outcome they get"
- **Process transparency** — show the engagement steps to reduce buyer anxiety
- **Social proof is non-negotiable** for consulting
- **"Website as 24/7 sales agent"** — design for the late-night researcher, not the in-person pitch
- **Pre-qualification mechanisms** — FAQ, "who this is/isn't for," pricing philosophy (where relevant)

**Quotable framing the article surfaces:**
> *"Your website isn't competing with other consulting websites. It's competing with the doubt in your prospect's mind about whether they should hire any consultant at all."*

We can apply this by being *specific and human* in our copy, not generic.

### From Webflow's "7 Consulting Website Examples"
[webflow.com/blog/consulting-website-examples](https://webflow.com/blog/consulting-website-examples)

**Highlighted examples:**
- **Ladder (ladder.io)** — interactive scrolling headline that cycles through variations of their value prop. Borrow: the *one-idea-many-angles* hero trick if we have time.
- **Over J Consulting** — navy + white + orange accent, bold "Engineering Greater Possibilities" headline with arrow to "Analysis, Strategy, Technology." Borrow: the *triple-pillar breakdown* pattern in hero.
- **Empathy Consulting** — "People First. Web3 Next" tagline that balances technical credibility with humanity. Borrow: the *human-first framing* in our copy.

---

## Technical / Implementation References

### Animation library: Framer Motion vs GSAP
[motion.dev/docs/gsap-vs-motion](https://motion.dev/docs/gsap-vs-motion)

**Decision: Framer Motion**
- 90% smaller bundle for basic animations
- Native scroll-triggered animations
- Declarative React API fits Next.js perfectly
- Good enough for the editorial motion we want

GSAP is more powerful for complex sequenced timelines (think Apple product pages), but we don't need that level.

### Framework: Next.js vs Astro
[cosmicjs.com/blog/nextjs-vs-astro-choosing-the-right-framework-for-your-project](https://www.cosmicjs.com/blog/nextjs-vs-astro-choosing-the-right-framework-for-your-project)

**Decision: Next.js**
- Astro is faster but Framer Motion integration is awkward
- We'll want React components for the contact form anyway
- Better DX for the iterative build process
- Future-proof for adding a blog/CMS later

### Color inspiration
- [Bungalow Web Design: 9 Best Color Palettes for IT Service Websites in 2025](https://bungalowwebdesign.com/9-best-color-palettes-for-it-service-websites-in-2025-examples/) — good reference for "navy + accent" patterns that feel professional but not boring.
- [Landing Page Flow: Best Color Combinations for Landing Pages 2026](https://www.landingpageflow.com/post/best-color-combinations-for-better-landing-pages) — has a "Navy `#1A1A40` + Sky Blue `#00A8E8` + White" combo that validates our direction.

---

## Typography Pairing

- **Body/UI:** [Geist Sans](https://vercel.com/font) (Vercel, open source, free via Google Fonts or `npm install geist`)
- **Display/Serif:** [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (Google Fonts, free) — high-contrast editorial feel, perfect for hero headlines. Alternative options: **Fraunces**, **PP Editorial New** (paid), or **GT Sectra** (paid).
- **Mono:** Geist Mono (matches Geist Sans perfectly)

**Pairing rationale:** Display serif (warm/editorial) + clean sans (modern/technical) creates the "thoughtful expert" tone we want. This is the same pairing philosophy Anthropic uses (Anthropic Serif + Anthropic Sans), just with our own font choices.

---

## Hero Section Patterns

For reference when designing the home hero:
- [LogRocket: 10 best hero section examples](https://blog.logrocket.com/ux-design/hero-section-examples-best-practices/)
- [Saaspo: 135 SaaS Hero Section Examples](https://saaspo.com/section-type/saas-hero-section-examples) — especially the *Vercel*, *Linear*, *Jasper*, *Ferndesk* examples in their gallery.
- [Modern CSS: 3 Popular Website Heroes with CSS Grid](https://moderncss.dev/3-popular-website-heroes-created-with-css-grid-layout/) — technical reference for grid-based hero construction.

---

## What We Will *Not* Look At

To avoid getting pulled into the wrong direction:
- Generic "AI agency" Upwork/Fiverr-style sites
- Crypto/web3 sites (similar aesthetic, wrong audience signal)
- Sites that lead with stock photos of diverse people in meetings
- Anything that uses a stock "neural network" hero illustration

---

*References curated for the Strohm Partners LLC website build. Update as new references are discovered during the build.*
