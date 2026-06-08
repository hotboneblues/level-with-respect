# Level With Respect

An independent, resident-led advocacy website encouraging responsible operation
and community accountability from LEVEL Venue at 9320 W Pico Blvd, Los Angeles.

Built with Next.js 15, TypeScript, Tailwind CSS v4, shadcn-style components,
Framer Motion, and Supabase. Designed for Vercel.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in Supabase keys (optional for preview)
npm run dev
```

The site runs without Supabase configured — forms politely decline and the
counter stays hidden — so you can preview design and content immediately.

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor**, paste the contents of `supabase/schema.sql`, run it.
   This creates the tables, the `media` storage bucket, and locked-down RLS.
3. Copy the project URL and keys into `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only; never exposed to the browser)

## Operating the site

**Moderation.** Stories (`stories` table) and issue documentation (`reports`
table) arrive with `status = 'pending'` and never appear publicly until you set
`status = 'approved'` in the Supabase Table Editor. Set `rejected` to archive.
Pages revalidate every 5 minutes, so approvals appear automatically.

**Petition list.** Pre-launch signups land in `petition_interest`
(name, email, street). Export as CSV from the Table Editor when you launch.

**Community counter.** Hidden by default, by design — it only displays real
numbers. When the petition launches, set `counter_visible` to `true` in
`site_settings`. The homepage then shows the live signup count. The
`counter_baseline` setting exists for adding verified offline signatures
(paper petitions); only add numbers you can stand behind.

## Deploying to Vercel

1. Push this folder to a Git repository.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is detected
   automatically.
3. Add the three Supabase env vars plus
   `NEXT_PUBLIC_SITE_URL=https://levelwithrespect.com`.
4. Add the custom domain `levelwithrespect.com` in Project → Domains.

Analytics: Vercel Web Analytics is already integrated (`@vercel/analytics`).
Enable it in the Vercel dashboard under Project → Analytics (cookie-free,
no consent banner needed).

## What's inside

- `/` — hero, petition CTA + modal, What We Love, What Needs Improvement, The Ask
- `/issues` — Noise, Alley Access, Traffic, Neighborhood Impact, each with a
  chronological timeline of approved resident reports (photos/video supported)
  and a documentation submission form
- `/stories` — moderated resident stories with anonymous option and media upload
- `/blog` — 11 fully written, SEO-oriented essays
- `/faq` — with FAQPage structured data
- `/privacy` — plain-language privacy policy
- SEO: per-page metadata, canonical URLs, Open Graph + Twitter cards,
  Organization/WebSite/FAQPage/Article JSON-LD, `sitemap.xml`, `robots.txt`

## Legal posture (read before editing copy)

- The footer disclaimer of independence appears on every page. Keep it.
- Copy uses "residents have reported" phrasing — experiences and opinions,
  not allegations of unlawful conduct. Maintain that standard in moderation:
  approve first-hand, factual accounts; do not publish personal attacks,
  names of private individuals, or claims you cannot attribute to resident
  experience.
- No LEVEL Venue logos, photography, or branding anywhere on the site.
