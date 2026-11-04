# BlueRidge Plumbing & HVAC: Next.js demo

A Next.js (App Router, TypeScript) port of the TradePro WordPress theme, built to be shown as a live demo on Vercel. BlueRidge is a fictional business.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (or run `npx vercel` in this folder).
2. In Vercel choose **Add New > Project**, import the repo. Next.js is detected automatically; no settings are needed.

All pages are statically generated. No environment variables are required.

## Where things live

| Path | What |
| --- | --- |
| `app/globals.css` | The theme's `main.css`, unchanged |
| `app/wp-shim.css` | The few WordPress core block styles the theme CSS relied on |
| `lib/site.ts` | Business name, phone, hours, areas, brand colours, nav |
| `lib/content.ts` | Services, testimonials, team, plans, FAQ, steps, stats |
| `lib/illustrations.ts` | The animated SVG scenes (hero, pipes, mascot) |
| `components/home/Sections.tsx` | Home page sections |
| `app/actions.ts` | Quote form server action |

Re-brand by editing `brand` in `lib/site.ts` (primary and accent colours flow through the whole site).

## Quote form

This is a demo: **no email is sent and nothing is stored.** The form validates and shows a confirmation. To forward submissions, set `QUOTE_WEBHOOK_URL` in Vercel (Project Settings > Environment Variables); each valid submission is POSTed there as JSON. There is no rate limiting, so add one before using this for a real business.
