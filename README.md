# THAPAK Trade and Overseas — corporate website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS site built from the
THAPAK Trade and Overseas master content brief.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build && npm run start` for a
production build.

## Design approach

The brief centres on a patented, electricity-free air-filtration process
and a 20-model spec sheet, so the site is built as a **technical dossier**
rather than a generic SaaS-style marketing page:

- **Layout** — a left margin rail carries a drawing-sheet section index
  (`§ 01`, `§ 02` …) instead of decorative eyebrow labels; content sits in
  a single confident column rather than scattered cards.
- **Diagrams** — the intake → passive filtration → purified-air process
  and the room/building/city scale comparison are drawn as real inline SVG
  schematics with registration ticks, echoing the patent drawings
  described in the source material, rather than stock icons.
- **Color** — ink (`#12201B`), paper (`#EFEDE3`), pine green (`#3F6656`)
  and a single amber accent (`#C1793A`), avoiding both the common
  cream+terracotta and dark+neon defaults.
- **Type** — Space Grotesk for headings/labels, Source Serif 4 for body
  copy, IBM Plex Mono for spec data (model numbers, capacities, tags) —
  three roles, not decoration.
- **Sequences** — numbered steps are used only where the source content is
  actually a sequence (the 3-step purification process, the 9-step
  development approach, the installation/support chain); everything else
  is unordered.

## Content notes

All copy is taken directly from
`THAPAK_Trade_and_Overseas_Corporate_Website_Master_Content.docx` and
centralised in `lib/data.ts`. Four fields are placeholders pending
client-supplied detail — update them in `components/Contact.tsx`:

- Registered office address
- Official email
- Contact number
- Website URL

## Structure

```
app/
  layout.tsx      — fonts, metadata
  page.tsx         — assembles all sections
  globals.css      — tokens, base styles
components/
  Nav, Hero, About, FlagshipTech, Patent, Paradigm, HowItWorks,
  Platforms, Products, Applications, Environmental, Engineering,
  DevApproach, Government, Business, Partner, WhySummary, Ecosystem,
  Contact, Footer
  ui.tsx           — Sheet/Prose/Card/Tag/ChainFlow primitives
  diagrams/        — inline SVG schematics
lib/data.ts         — all site copy/content, single source of truth
```

## Note on verification

This project was written in an environment without npm registry access, so
`npm install` / `next build` could not be run here to produce a rendered
preview. The code has been checked for structural correctness (balanced
JSX, consistent imports, valid Tailwind classes), but run `npm run build`
locally after install to catch anything a live compiler would surface.
