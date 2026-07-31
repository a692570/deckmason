# AGENTS.md

This is the operating manual for any AI coding agent using DeckMason. Read this before building a deck.

## What DeckMason is

DeckMason is a presentation-generation skill. Your job is to read `SKILL.md`, follow the 6-phase workflow, and produce a self-contained HTML slide deck (with optional PPTX/PDF export). You write real files to disk, not chat output.

## How to use it

1. **Read `SKILL.md`** — it contains the full workflow, design rules, anti-patterns, and export instructions
2. **Read `STYLE_PRESETS.md`** — when you need to pick or apply a visual theme
3. **Run `scripts/pptx_export.py`** — only when the user asks for PPTX export

## Quick start

When the user asks for a deck:

```
"Create a pitch deck about [topic]"
"Turn these notes into slides: [content]"
"Make a presentation using the brand from company-deck.pptx"
```

Follow the workflow in `SKILL.md`:
1. Pre-Flight Scoping (4 questions)
2. Phase 0: Brief
3. Phase 1: Structure the story
4. Phase 2: Outline with slide types
5. Phase 3: HTML generation
6. Phase 4: Images & charts
7. Phase 5: Polish & review
8. Phase 6: Export

## Critical rules

- **One idea per slide** — split, don't cram
- **Canvas is fixed 1920x1080** — scale externally, never use vh/vw for canvas sizing
- **All font sizes use `clamp()`** — never fixed px/rem
- **No `scrollIntoView()`** — it breaks scroll-snap navigation
- **Speaker notes on N key** — every deck needs this
- **No `overflow: hidden` to hide content** — split the slide instead
- **`prefers-reduced-motion` path** — required for every animated deck
- **No AI slop** — run the anti-patterns checklist before delivery

## Theme selection

When the user hasn't picked a theme:
1. Generate 3 distinct visual directions (not color-swaps of the same layout)
2. Show mini previews (cover + 1 content slide each)
3. Let the user pick or mix

When the user picks a theme from `STYLE_PRESETS.md`, apply only that theme's CSS variables. Do not invent custom hex colors outside the theme tokens.

## Export

- **HTML** (default): self-contained file, works offline
- **PPTX Path A**: `python3 scripts/pptx_export.py input.html --output output.pptx` (python-pptx, image-based)
- **PPTX Path B**: pptxgenjs DOM traversal (documented in SKILL.md Phase 6, editable text boxes)
- **PDF**: headless Chrome or Playwright

## File structure

```
deckmason/
├── SKILL.md              # The workflow (read this)
├── STYLE_PRESETS.md      # 31 themes + Kami CSS spec
├── AGENTS.md             # This file
├── README.md             # Human-facing overview
├── MAINTAINER.md         # Sync process from canonical skill
├── CONTRIBUTING.md       # How to contribute
├── index.html            # SEO landing page (OG/Twitter cards)
├── LICENSE               # MIT
└── scripts/
    └── pptx_export.py    # PPTX export (Path A)
```

## What NOT to do

- Don't paste the workflow into a chat window — the agent reads the files and follows them
- Don't skip the Pre-Flight Scoping phase even if the user seems impatient — restate assumptions instead of asking
- Don't ship the first plausible deck — run the self-check checklist from SKILL.md
- Don't use system fonts (Arial, Roboto, Inter) unless the theme explicitly calls for them
- Don't add statistics, icons, or supporting numbers the user did not provide
- Don't use emoji as icons — use a real icon library or leave as placeholder
