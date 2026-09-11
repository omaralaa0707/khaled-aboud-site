# Khaled Aboud Automotive — site 07 of 46

A concept site built entirely from this dealership's own published material.
**Not affiliated with Khaled Aboud Automotive, and not an official site.**

- **Live:** https://khaled-aboud-site.vercel.app
- **Repo:** [khaled-aboud-site](https://github.com/omaralaa0707/khaled-aboud-site)

## What this page is about

Every site in this series is built around something true and checkable about
the dealer's own account — a pattern in what they publish, a contradiction
between two of their channels, or a fact about their showroom — rather than
around a generic template. The palette, type, 3D piece and motion below were
all chosen to serve that finding.

## Design record

**Palette**
: Achromatic shell (void black / steel / chalk) + cyan 'beam' from their cabin light strips; **every other colour on the page is a car's own published paint name**

**Type pairing**
: Syne + Bodoni Moda (spaced small-caps, echoing their "LUXURY & EXOTICS" line) / Readex Pro (AR)

**3D / signature technique**
: GPU point-cloud specimen scan: ~90k points displaced by image luminance, assembled from scattered dust, turning with the pointer

**Motion language**
: Scanline — a luminous rule sweeps and leaves content behind it; nothing fades or slides

## Sources

Everything on the page was sourced from:

- Instagram: https://www.instagram.com/khaledaboudauto/
- Facebook: https://www.facebook.com/khaledabouuto/
- Google Maps: https://www.google.com/maps/place/Khaled+Aboud+Automotive/data=!4m2!3m1!1s0x0:0xdc6483a4ed4c3a4

Photography belongs to the dealership (or, where their frames are watermarked
by an outside studio, to that studio) and is used here only to document their
own published material. No figure on the page is invented: anything the dealer
did not publish is marked as unpublished rather than estimated.

## Running it

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build — must pass before shipping
pnpm lint     # eslint, zero warnings
```

Requires `node-linker=hoisted` in `.npmrc` (already present) or three.js peer
deps fail to resolve.

## Structure

```
src/content/media.ts      verified facts and figures — the data layer
src/content/en.ts|ar.ts   all copy, both locales, identical shapes
src/content/schema-ext.ts the page-specific content contract
src/components/webgl/     the 3D piece
src/components/site/      the page composition
src/app/globals.css       palette tokens, type, RTL overrides, motion
```

Arabic/English toggle with full RTL. All CSS direction overrides key off
`[dir="rtl"]` (never `[lang]`) and live outside `@layer`. Every Latin or
numeric fragment inside Arabic copy is wrapped in `.latin` for correct bidi.

---

Part of a 46-site series. See the [top-level README](../README.md) for the full
index and [`TRACKING.md`](../TRACKING.md) for the differentiation log.
