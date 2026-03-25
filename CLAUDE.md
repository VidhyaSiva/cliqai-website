# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

The new cliqai.ai marketing website — a B2B data platform consulting site. Single-page Next.js 15 app targeting mid-market enterprise buyers. Positioned as: AI-Ready Data Platform Consulting.

## Commands

```bash
npm run dev      # Dev server with Turbopack (localhost:3000)
npm run build    # Production build (also runs lint + type check)
npm run lint     # ESLint
```

## Architecture

Single-page app assembled in `app/page.tsx`. Sections flow top-to-bottom with anchor navigation:

`Navbar → Hero → TrustBar → Services → Process → WhyUs → CTABanner → ContactForm → Footer`

All components are in `/components/`. All server code is in `app/api/`.

## Contact Form

`app/api/contact/route.ts` receives POST submissions and currently logs them. To connect to an email service, add the integration there (see the TODO comment in that file). Environment variable for email service key should be `RESEND_API_KEY` or equivalent.

## Design System

Custom utilities are in `app/globals.css`:
- `.gradient-text` — indigo→cyan gradient text
- `.gradient-border-card` — dark card with hover border highlight
- `.btn-primary` — indigo gradient CTA button
- `.btn-secondary` — outline button
- `.section-label` — small uppercase badge above section headings

Custom Tailwind colors in `tailwind.config.ts`: `brand.navy`, `brand.card`, `brand.border`, `brand.indigo`, `brand.cyan`.

## Deployment

Deploy to Vercel by connecting the `cliqai-website/` directory. The `vercel.json` is pre-configured. No environment variables required for the base site — add `RESEND_API_KEY` (or equivalent) once you wire up contact form email delivery.
