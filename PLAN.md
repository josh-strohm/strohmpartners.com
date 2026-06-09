# Strohm Partners LLC — Website Plan

**Project root:** `C:\code\strohmpartners_website`
**Status:** Draft v1 — awaiting client sign-off
**Last updated:** 2026-06-09

---

## 1. Project Brief

**Strohm Partners LLC** is an AI consultancy that helps small and medium-sized businesses identify where AI can benefit their operations, then designs and delivers plans and solutions tailored to their needs. The site must:

- Communicate technical credibility *and* approachability (audience: non-technical business owners)
- Avoid the generic "neon AI startup" trap
- Drive a single primary action: **book a discovery call** (Google Calendar embed)
- Feel distinctively *Strohm Partners* — not a template

**Anchor reference (inspiration only, never copy):** [Vercel.com](https://vercel.com) — bold display type, motion, deep navy + electric accent, modular grids, interactive demo elements. See `references.md` for the full curated list.

---

## 2. Design Direction

### 2.1 Visual identity (target)

| Dimension | Decision |
|---|---|
| **Aesthetic** | Editorial-tech hybrid. Modern, confident, restrained. "Thoughtful expert," not "tech vendor." Vercel/Linear territory. |
| **Color palette** | **Deep ink navy** (`#0A0E1A`) as the dominant background, with bright type and electric cyan/blue accent (`#4F8AFF`) throughout. Off-white (`#F5F4EE`) and neutral grays for text on dark. |
| **Typography** | **Geist Sans** (Vercel's open-source face — apt homage without copying) for UI/body. A high-contrast **display serif** (Instrument Serif, Fraunces, or PP Editorial New) for hero/feature headlines. **Geist Mono** for code/numeric accents. |
| **Motion** | Subtle, purposeful: scroll-triggered fades, marquee/scroll-velocity on logos, gentle parallax on hero, hover micro-interactions on cards. No bouncy/spring-everywhere. |
| **Layout** | 12-column grid, generous gutters, asymmetric feature sections (not all centered), bento-style service cards. |
| **Imagery** | Minimal stock. Where used: abstract geometric/gradient hero background, custom SVG diagrams, hand-drawn-feel section dividers. No generic robot/AI brain clichés. |
| **Theme** | **Dark-first** (deep navy default). Future: optional light-mode toggle. |

### 2.2 What we'll *deliberately avoid*

- Neon gradient overload ("Vercel clone" trap)
- Generic "neural network" hero art
- Stock photos of people in meetings
- Webflow-template sameness
- "AI is the future" vague hype copy

### 2.3 What makes this *distinctively Strohm Partners*

- A **"How we work" framing** that's *business-process* oriented, not *tech-feature* oriented
- **Concrete, plain-English service descriptions** aimed at a non-technical CEO
- A **discovery call CTA** that repeats throughout (primary conversion)
- A subtle **"for SMBs" positioning** woven into copy (most AI sites aim at enterprise)

---

## 3. Site Map

Five pages (per client spec):

| # | Page | Path | Purpose |
|---|---|---|---|
| 1 | **Home** | `/` | Brand impression, value prop, social proof, primary CTA |
| 2 | **About** | `/about` | Who we are, why we exist, the founding story |
| 3 | **Services** | `/services` | Detailed service offerings, how engagements work |
| 4 | **Contact** | `/contact` | Direct contact info, form, alternative CTAs |
| 5 | **Book a Call** | `/book` | Embedded Google Calendar scheduler (full-page focus) |

### 3.1 Site map rationale

- **No separate "Process" page** — process is woven into Services to reduce page count and friction.
- **No blog/insights in v1** — adds maintenance burden; can be added later (CMS-ready architecture).
- **No "Case Studies" page in v1** — none of the listed pages included case studies. We can add a `/work` route placeholder in the nav that 404s gracefully, or omit entirely. **Recommendation: omit and add later.**

---

## 4. Page-by-Page Specifications

### 4.1 Home (`/`)

**Goal:** 5-second clarity on what Strohm Partners does → drive to "Book a Call."

| Section | Content | Design notes |
|---|---|---|
| **Hero** | Headline: *"AI strategy that actually fits your business."* Sub: *"We help small and medium-sized businesses find where AI can help, then build the plan — and the solution."* Dual CTA: primary "Book a discovery call" (→ `/book`), secondary "See how we work" (→ `/services`) | Full-bleed, asymmetric. Display serif headline (oversized, ~96–120px desktop). Subtle animated gradient mesh or grid background. Small "trusted by" or stat row below CTA |
| **Value strip** (optional) | 3-4 short differentiators: "SMB-focused," "No vendor lock-in," "Plain English, not jargon," "Plans + implementation" | Horizontal pill row, small icons |
| **Services preview** | 3–4 service cards (link to Services page) | Bento grid: one large card + 2-3 smaller. Hover reveals short description |
| **How we work** (compressed) | 3-step horizontal: *Discover → Design → Deliver* | Numbered steps, connected by line, scroll-reveal animation |
| **Social proof** | Logo strip (when available — placeholder for v1) + 1-2 testimonials if client can provide | Marquee/scroll-velocity effect |
| **CTA band** | Full-bleed dark section: "Ready to find where AI can help your business?" + "Book a discovery call" button | High contrast against light page |

### 4.2 About (`/about`)

**Goal:** Build trust and humanize the brand. SMB owners buy from people.

| Section | Content | Design notes |
|---|---|---|
| **Page hero** | Headline: *"Built for the businesses everyone else overlooks."* Sub: short positioning | Smaller than home hero. Editorial feel |
| **Story** | Founding story: why Strohm Partners exists, the gap in the market, the team's experience | Two-column: text + supporting visual (photo of founders, or abstract illustration) |
| **Mission/values** | 3–4 values in a horizontal or stacked layout | Use display-serif headers for each value, short paragraphs |
| **Team** (optional) | Founder headshots + bio. **If client has no headshots yet, use placeholder cards with name/role and a styled monogram** | Grid of 2-4 cards. Skippable if client prefers |
| **CTA** | "Let's talk about your business" → Book a call | Reuse the dark CTA band component |

### 4.3 Services (`/services`)

**Goal:** Educate without overwhelming. Make it obvious that Strohm Partners handles both *strategy* and *implementation*.

| Section | Content | Design notes |
|---|---|---|
| **Page hero** | Headline: *"Two phases. One partner."* Sub: brief framing of the strategy-then-build approach | Editorial, magazine-like |
| **Phase 1: Strategy** | Cards for: *AI Opportunity Assessment*, *Roadmap & Strategy*, *Vendor/Tool Selection* | Each card: short description, "what you get" bullet list, indicative timeline |
| **Phase 2: Build & Run** | Cards for: *Custom AI Solutions*, *Workflow Automation*, *Integration & Training*, *Ongoing Optimization* | Same card pattern, with subtle visual divider between phases |
| **How an engagement works** | 4-step process: *Discovery call* → *Assessment* → *Proposal & Roadmap* → *Delivery & handoff* | Horizontal numbered timeline, scroll-reveal |
| **FAQ** (optional) | 4-6 common questions: pricing, timelines, industries served, etc. | Accordion or stacked details/summary |
| **CTA** | "Ready to start with an assessment?" → Book a call | |

### 4.4 Contact (`/contact`)

**Goal:** Frictionless contact for visitors who want to reach out directly (vs. booking).

| Section | Content | Design notes |
|---|---|---|
| **Page hero** | Headline: *"Get in touch."* Sub: short copy | Simple, direct |
| **Two-column layout** | Left: contact form (name, email, company, message). Right: alternative contact methods — email, phone, social links, business hours, "Prefer to book? → [link]" | Form should be unstyled, accessible, with simple validation |
| **Map / address** (optional) | If client has a physical address | Embed or styled placeholder |
| **FAQ mini** (optional) | 2-3 ultra-short Qs | Stacked, simple |

### 4.5 Book a Call (`/book`)

**Goal:** Minimize friction to scheduling. Single-focus page.

| Section | Content | Design notes |
|---|---|---|
| **Page hero** | Headline: *"Book a discovery call."* Sub: *"30 minutes. No pressure. We'll talk about your business and where AI might help."* | Lightweight, confident |
| **Calendar embed** | Full Google Calendar Appointment Scheduling iframe (client-provided) | Centered, max-width ~960px, generous padding. Wrapper component with rounded corners, subtle border |
| **What to expect** | 3-bullet list: what happens on the call, what we'll ask, what you'll leave with | Small section below the embed |
| **Alternative** | Small footer note: "Prefer email? hello@strohmpartners.com" | Plain text link |

---

## 5. Design System Foundation

### 5.1 Color tokens

```
--ink-900:    #0A0E1A   /* primary text, dark surfaces */
--ink-700:    #1A1F2E   /* secondary text */
--ink-500:    #4A5160   /* tertiary, borders */
--ink-300:    #A8AEB8   /* disabled, subtle */
--ink-100:    #E8E6DE   /* light dividers */
--paper:      #F5F4EE   /* warm off-white background */
--paper-pure: #FFFFFF
--accent:     #4F8AFF   /* electric blue (placeholder - tune with client) */
--accent-hot: #2563EB   /* hover/active */
--accent-soft:#DBE6FF   /* tinted backgrounds */
--success:    #10B981
--warning:    #F59E0B
```

### 5.2 Typography scale (Geist Sans + display serif)

```
Display XL:    96–120px / 1.0 / -0.03em   (hero headlines, display serif)
Display L:     64–80px   / 1.05 / -0.02em  (section openers)
Display M:     48–56px   / 1.1  / -0.02em
H1:            40px      / 1.15 / -0.01em
H2:            32px      / 1.2  / -0.01em
H3:            24px      / 1.3
Body L:        18px      / 1.55
Body:          16px      / 1.6
Body S:        14px      / 1.5
Caption:       12px      / 1.4   / 0.04em uppercase
Mono:          Geist Mono for code, numbers, timestamps
```

### 5.3 Spacing scale

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192` (px, on a 4px base)

### 5.4 Component inventory

- Button (primary, secondary, ghost; sizes sm/md/lg)
- Card (default, bento, feature, testimonial)
- SectionHeader (eyebrow + headline + optional sub)
- Badge / Pill
- Marquee (logo strip)
- Stepper (horizontal numbered process)
- Accordion (FAQ)
- FormField (text, email, textarea, error states)
- Nav (sticky, blur-on-scroll)
- Footer
- CTABand (dark full-bleed)
- CalendarEmbed (iframe wrapper)

---

## 6. Tech Stack Recommendation

**Recommended: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**

| Layer | Choice | Why |
|---|---|---|
| **Framework** | **Next.js 15 (App Router, static export)** | Best-in-class DX, SSG for performance, easy deployment, future-proofed for adding a blog/CMS later |
| **Language** | **TypeScript** | Strict typing prevents bugs in a multi-page build |
| **Styling** | **Tailwind CSS v4** | Fast iteration, consistent design tokens via `theme.extend`, plays well with custom design system |
| **Animations** | **Framer Motion** | 90% smaller than GSAP for basic animations, declarative React API, scroll-triggered animations built-in. Right tool for editorial motion |
| **Fonts** | `next/font` loading **Geist** (Vercel) + **Instrument Serif** (Google Fonts, free) for display | Performance, no FOUT |
| **Forms** | **React Hook Form** + **Zod** validation | Lightweight, type-safe |
| **Deployment** | **Vercel** (or Netlify) | Free tier, instant deploys, plays well with Next.js. *Could self-host on client infra if preferred* |
| **Email (contact form)** | **Resend** or **Formspree** | Dead-simple, no backend needed |
| **Analytics** | **Plausible** or **Vercel Analytics** | Privacy-friendly, no cookie banner required |

**Alternative considered:** **Astro** — slightly faster, but Framer Motion integration is more awkward, and we'll want React components for the contact form anyway. Next.js is the better fit for the requested motion-heavy feel.

---

## 7. Project Structure

```
strohmpartners_website/
├── PLAN.md                  ← this file
├── references.md            ← curated design references with takeaways
├── README.md                ← project setup, run/build/deploy instructions
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   ├── og-image.png
│   └── fonts/               (only if not using next/font)
├── src/
│   ├── app/
│   │   ├── layout.tsx       (root layout: nav, footer, fonts, theme)
│   │   ├── page.tsx         (home)
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── book/page.tsx
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/              (Button, Card, SectionHeader, etc.)
│   │   ├── layout/          (Nav, Footer, CTABand)
│   │   ├── home/            (Hero, ServicesPreview, HowWeWork, etc.)
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   └── book/            (CalendarEmbed)
│   ├── content/             (page copy as TS modules for easy editing)
│   │   ├── home.ts
│   │   ├── about.ts
│   │   ├── services.ts
│   │   └── ...
│   ├── lib/
│   │   ├── utils.ts         (cn helper, etc.)
│   │   └── motion.ts        (shared Framer Motion variants)
│   └── styles/
│       └── tokens.css       (CSS variables for colors, type, spacing)
```

---

## 8. Build Phases

### Phase 0 — Setup & Design System (small)
1. `npx create-next-app@latest` with TypeScript, Tailwind, App Router
2. Configure `tailwind.config.ts` with design tokens from §5
3. Set up `globals.css` with CSS variables, base typography
4. Install Geist + Instrument Serif via `next/font`
5. Build core UI primitives: `Button`, `SectionHeader`, `Container`
6. Build layout shell: `Nav` (sticky, blur-on-scroll), `Footer`, `CTABand`
7. **Deliverable:** dev server running with empty styled shell

### Phase 1 — Home page
1. Build `Hero` with the asymmetric display-serif headline
2. Build value-strip, services preview (bento), compressed "how we work" steps
3. Build social proof marquee
4. Add scroll-reveal animations
5. Mobile responsive pass
6. **Deliverable:** complete home page

### Phase 2 — Services + About
1. Build Services page (hero, phase cards, process timeline, FAQ)
2. Build About page (hero, story, values, team placeholders)
3. **Deliverable:** content pages complete

### Phase 3 — Contact + Book
1. Build Contact page (form with validation, contact info column)
2. Build Book page (centered calendar embed + supporting copy)
3. Wire up form submission (Resend or Formspree)
4. **Deliverable:** conversion pages complete

### Phase 4 — Polish
1. Dark mode toggle (optional but recommended)
2. SEO: page-level metadata, OG images, sitemap.xml, robots.txt
3. Accessibility pass: keyboard nav, focus rings, ARIA, color-contrast check
4. Performance: image optimization, font subsetting, lazy-load below-the-fold
5. Cross-browser + device testing
6. **Deliverable:** production-ready site

### Phase 5 — Deploy
1. Connect repo to Vercel
2. Configure custom domain (`strohmpartners.com` or whatever client owns)
3. Set up analytics
4. Smoke test on production URL
5. **Deliverable:** live site

---

## 9. Open Questions for Client (need answers before/during build)

1. **Domain** — what URL will this live at? (needed for sitemap, metadata, deploy config)
2. **Color accent** — I'm proposing electric blue (`#4F8AFF`). Is there a brand color we should use instead?
3. **Display serif font** — I'm proposing Instrument Serif (free, gorgeous). Are you open to that, or do you have a brand typeface?
4. **Logo** — do you have an existing logo? If yes, please provide SVG. If no, we'll create a wordmark.
5. **Team photos** — for About page, do you have headshots? If not, we'll use monogram placeholders for v1.
6. **Testimonials** — any past client quotes you can share for social proof?
7. **Client logos** — any past/present clients we can feature? (Or omit until you have them.)
8. **Contact form backend** — preference: Resend (you'll need an account), Formspree (zero setup, free tier), or just `mailto:`?
9. **Copy** — I'll write all copy in a tone-of-voice style consistent with the brief. Want to review drafts before they go live, or trust me to get it right?
10. **Hosting/ownership** — deploy to a Vercel account you own, or to my (client-managed) account? *(I recommend the client owns the deploy account and repo.)*

---

## 10. Success Criteria

The build is done when:
- [ ] All 5 pages render correctly on mobile, tablet, desktop
- [ ] All animations are smooth (60fps) and respect `prefers-reduced-motion`
- [ ] Lighthouse scores: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- [ ] Google Calendar embed is fully functional on `/book`
- [ ] Contact form submits successfully
- [ ] Site is deployed to a client-owned domain
- [ ] Client has a README explaining how to update copy and deploy changes

---

*End of plan. See `references.md` for the design references that informed this direction.*
