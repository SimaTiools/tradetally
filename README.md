# TradeTally marketing site

Invoicing and expense tracking for UK sole traders — marketing homepage and pricing.

→ **[tradetally.co.uk](https://tradetally.co.uk)**

## Conversion redesign

This package implements the marketing conversion redesign:

- Homepage hero with outcome headline, primary/secondary CTAs, risk microcopy and objection chips
- Product-truthful Starter vs Professional plans (no Direct HMRC submission claims)
- Featured Professional plan contrast and honesty note (exports only — does not submit SA/MTD)
- Consistent primary CTA: **Start 14-day Pro trial**

Shared product facts live in `src/lib/product-truth.ts`.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
```

## Note on repository scope

The public `SimaTiools/tradetally` GitHub repository previously held only docs/wiki. The live product app is hosted separately. This branch adds an App Router marketing package (`src/app/page.tsx`, `src/app/_home-client.tsx`, `src/app/pricing/page.tsx`) so the conversion redesign can ship as a reviewable PR and be ported into the production app.
