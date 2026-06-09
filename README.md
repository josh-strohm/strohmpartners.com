# Strohm Partners LLC — Website

The official website for **Strohm Partners LLC**, an AI consultancy helping small and medium-sized businesses identify where AI can help, and deliver plans and solutions tailored to their needs.

## Project status

🟢 **Initial build complete** — 5 pages scaffolded, design system in place, ready for review.
See [PLAN.md](./PLAN.md) for the full plan and [references.md](./references.md) for the design references that informed it.

## Tech stack

- **Next.js 16.2** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** (with custom design tokens)
- **Framer Motion** for animations
- **Geist Sans / Geist Mono** (UI) + **Instrument Serif** (display) via `next/font/google`
- **react-hook-form + zod** for the contact form
- **clsx + tailwind-merge** for class composition
- **N8N** for contact form intake (webhook URL set via env var)

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/contact` — Contact (form posts to N8N webhook)
- `/book` — Book a discovery call (embedded Google Calendar)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file in the project root with:

```bash
# Contact form webhook (N8N). When unset, the form simulates success
# (logs payload to console) so it's still usable in dev.
NEXT_PUBLIC_N8N_WEBHOOK_URL="https://your-n8n-instance.com/webhook/YOUR_WEBHOOK_ID"
```

When the env var contains the placeholder `YOUR_N8N_WEBHOOK_URL` (or is missing), the form short-circuits and shows the success state without actually posting.

## Build & deploy

```bash
npm run build
npm run start
```

Recommended host: **Vercel** (free tier, instant deploys). Connect the repo at
vercel.com/new and the env var above.

## File map

```
src/
├── app/
│   ├── layout.tsx          root layout: nav, footer, fonts
│   ├── page.tsx            home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   ├── book/page.tsx
│   ├── not-found.tsx
│   └── globals.css         design tokens
├── components/
│   ├── ui/                 Button, Card, Container, SectionHeader
│   ├── layout/             Nav, Footer, CTABand
│   ├── home/               Hero, ValueStrips, ServicesPreview, HowWeWork, SocialProof
│   └── contact/            ContactForm
├── content/                page copy as TS modules (easy to edit)
├── lib/                    utils, motion variants
└── ...
```

## Editing copy

Page copy lives in `src/content/` as TypeScript modules. Edit those files to update page text without touching layout/components.

## License

Proprietary — © Strohm Partners LLC. All rights reserved.
