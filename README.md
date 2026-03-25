# CliqAI Website

**Live site:** https://www.cliqai.ai
**GitHub repo:** https://github.com/VidhyaSiva/cliqai-website
**Vercel project:** https://vercel.com/vidhya-sivakumars-projects/cliqai-website

---

## What This Is

B2B marketing website for CliqAI — AI-Ready Data Platform Consulting. Built with Next.js 15, Tailwind CSS, and deployed on Vercel.

---

## Local Development

```bash
cd /Users/vidhyasivakumar/Desktop/Personal/Cliqai/cliqai-website
npm install
npm run dev        # http://localhost:3000
```

## Deploying

Push to GitHub — Vercel auto-deploys on every commit to `master`:

```bash
git add .
git commit -m "your change"
git push
```

No need to run `vercel --prod` manually anymore.

---

## Project Structure

```
app/
  layout.tsx          # SEO metadata, fonts
  page.tsx            # Assembles all sections
  globals.css         # Design system utilities (.gradient-text, .btn-primary etc.)
  sitemap.ts          # Auto-generates /sitemap.xml for Google
  robots.ts           # Auto-generates /robots.txt
  api/contact/
    route.ts          # Contact form API — sends email via Gmail SMTP

components/
  Navbar.tsx          # Sticky nav with mobile menu
  Hero.tsx            # Hero section with stats
  TrustBar.tsx        # Tech stack badges
  Services.tsx        # 6 service cards
  Process.tsx         # 4-step 90-day process
  WhyUs.tsx           # Differentiators + stats
  CTABanner.tsx       # Mid-page conversion banner
  ContactForm.tsx     # Lead capture form
  Footer.tsx          # Footer with links

hooks/
  useInView.ts        # Scroll animation hook (IntersectionObserver)

public/
  logo.png            # CliqAI logo (original from Cliq.ai.png)
```

---

## Scroll Animations

All sections use `hooks/useInView.ts` — a custom `IntersectionObserver` hook. Elements start visible on SSR (so the page never flashes blank), then animate in as you scroll using Tailwind transition classes with staggered `transitionDelay`.

---

## Contact Form

**How it works:**
1. Visitor fills out the form on the site
2. Form POSTs to `/api/contact`
3. API sends a formatted email via Gmail SMTP (nodemailer)
4. Email arrives in `cliqaiinfo@gmail.com`
5. Reply directly to the email to respond to the lead (Reply-To is set to the visitor's email)

**Environment variables (set in Vercel):**
| Variable | Value |
|----------|-------|
| `GMAIL_USER` | `cliqaiinfo@gmail.com` |
| `GMAIL_APP_PASSWORD` | Gmail App Password (see memory for value) |

**To update the App Password:**
1. Go to myaccount.google.com/apppasswords (logged in as cliqaiinfo@gmail.com)
2. Delete `CliqAI Website`, create a new one
3. Run:
```bash
vercel env rm GMAIL_APP_PASSWORD production --yes
vercel env add GMAIL_APP_PASSWORD production --value "new_password" --yes
git commit --allow-empty -m "redeploy" && git push
```

---

## Email Setup

| Email | Goes to |
|-------|---------|
| `hello@cliqai.ai` | Forwards to `cliqaiinfo@gmail.com` via ImprovMX |
| Contact form submissions | Direct to `cliqaiinfo@gmail.com` via Gmail SMTP |

**ImprovMX:** https://app.improvmx.com — manages `hello@cliqai.ai` forwarding
**Route 53 MX records:**
```
10 mx1.improvmx.com
20 mx2.improvmx.com
```

---

## DNS (AWS Route 53)

| Record | Type | Value |
|--------|------|-------|
| `cliqai.ai` | A | `76.76.21.21` (Vercel) |
| `www` | CNAME | `cname.vercel-dns.com` |
| `cliqai.ai` | MX | `10 mx1.improvmx.com`, `20 mx2.improvmx.com` |
| `cliqai.ai` | TXT | Google Search Console verification |

---

## SEO

- **Google Search Console:** Verified and sitemap submitted
- **Sitemap:** https://www.cliqai.ai/sitemap.xml
- **Robots:** https://www.cliqai.ai/robots.txt
- **Google Analytics:** Not yet added — need GA4 Measurement ID (G-XXXXXXXXXX) from analytics.google.com

**To add Google Analytics when ready:**
Get Measurement ID from analytics.google.com → add to `app/layout.tsx`

---

## Design System

Colors defined in `tailwind.config.ts`:
- `brand.navy` — `#050c1a` (page background)
- `brand.card` — `#0d1626` (card background)
- `brand.border` — `#1e2d45` (borders)
- `brand.indigo` — `#6366f1` (primary accent)
- `brand.cyan` — `#22d3ee` (secondary accent)

CSS utilities in `app/globals.css`:
- `.gradient-text` — indigo→cyan gradient text
- `.gradient-border-card` — dark card with indigo hover border
- `.btn-primary` — indigo gradient button
- `.btn-secondary` — outline button
- `.section-label` — small uppercase badge

---

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS v3 |
| **Icons** | lucide-react |
| **Email** | nodemailer + Gmail SMTP |
| **Hosting** | Vercel |
| **DNS** | AWS Route 53 |
| **Email forwarding** | ImprovMX |
| **Repo** | GitHub (VidhyaSiva/cliqai-website) |
