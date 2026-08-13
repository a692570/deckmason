# AGENTS.md

This is the operating manual for any AI coding agent using DeckMason. Read this before building a deck.

## What DeckMason is

DeckMason is a presentation-generation skill. Your job is to read `SKILL.md`, follow the 6-phase workflow, and produce a self-contained HTML slide deck (with optional PPTX/PDF export). You write real files to disk, not chat output.

## How to use it

1. **Read `SKILL.md`**: the entry point. Contains Quick Start, Pre-Flight Scoping, and the 6-phase overview with references to detail files.
2. **Load reference files on demand**: each phase has a dedicated reference file in `references/`. Do not load all references at once. Load the file for the phase you are currently working on.
3. **Read `STYLE_PRESETS.md`**: when you need to pick or apply a visual theme.
4. **Run `scripts/pptx_export.py`**: only when the user asks for PPTX export.
5. **Run `scripts/pptx_import.py`**: when the user wants to import an existing .pptx file.
6. **Run `scripts/preview_themes.py`**: to generate 3 visual preview slides for the user to pick a direction.

## Quick start

When the user asks for a deck:

```
"Create a pitch deck about [topic]"
"Turn these notes into slides: [content]"
"Make a presentation using the brand from company-deck.pptx"
"Convert company-deck.pptx into an HTML presentation"
```

Follow the workflow in `SKILL.md`:
1. Pre-Flight Scoping (visual preview or 4 text questions)
2. Phase 0: Brief (see references/phase0-brief.md, includes PPT import workflow)
3. Phase 1: Structure the story (see references/phase1-structure.md)
4. Phase 2: Outline with slide types (see references/phase2-outline.md)
5. Phase 3: HTML generation (see references/phase3-html.md)
6. Phase 4: Images and charts (see references/phase4-images.md)
7. Phase 5: Polish and review (see references/phase5-polish.md)
8. Phase 6: Export (see references/phase6-export.md)

## Critical rules

- **One idea per slide**: split, don't cram
- **Canvas is fixed 1920x1080**: scale externally, never use vh/vw for canvas sizing
- **All font sizes use `clamp()`**: never fixed px/rem
- **No `scrollIntoView()`**: it breaks scroll-snap navigation
- **Speaker notes on N key**: every deck needs this
- **No `overflow: hidden` to hide content**: split the slide instead
- **`prefers-reduced-motion` path**: required for every animated deck
- **No AI slop**: run the anti-patterns checklist before delivery (see references/quality-guardrails.md)
- **Progressive disclosure**: load reference files on demand, not all at once

## Theme selection

When the user hasn't picked a theme:
1. Generate 3 visual previews with `scripts/preview_themes.py "topic"`
2. Or generate 3 distinct visual directions (not color-swaps of the same layout)
3. Show mini previews (cover + 1 content slide each)
4. Let the user pick or mix

When the user picks a theme from `STYLE_PRESETS.md`, apply only that theme's CSS variables. Do not invent custom hex colors outside the theme tokens.

## Export

- **HTML** (default): self-contained file, works offline
- **PPTX Path A**: `python3 scripts/pptx_export.py input.html --output output.pptx` (python-pptx, image-based)
- **PPTX Path B**: pptxgenjs DOM traversal (documented in references/phase6-export.md, editable text boxes)
- **PDF**: headless Chrome or Playwright
- **PPT Import**: `python3 scripts/pptx_import.py input.pptx --output decks/input_deck.json` (see references/phase0-brief.md)

## File structure

```
deckmason/
├── SKILL.md                      # Entry point (read this first)
├── STYLE_PRESETS.md              # 31 themes + Kami CSS spec
├── AGENTS.md                     # This file
├── README.md                     # Human-facing overview
├── MAINTAINER.md                 # Sync process from canonical skill
├── CONTRIBUTING.md               # How to contribute
├── index.html                    # SEO landing page (OG/Twitter cards)
├── LICENSE                       # MIT
├── package.json                  # npm install support
├── references/                   # Phase detail files (load on demand)
│   ├── phase0-brief.md           # Phase 0: Brief + PPT import workflow
│   ├── phase1-structure.md       # Phase 1: Pyramid Principle, thesis, contrast beats
│   ├── phase2-outline.md         # Phase 2: Slide types, layout types, scaling
│   ├── phase3-html.md            # Phase 3: Canvas, viewport fitting, budget math
│   ├── phase4-images.md           # Phase 4: Image roles, chart anti-patterns
│   ├── phase5-polish.md          # Phase 5: Page rhythm, color theory, AI tells
│   ├── phase6-export.md          # Phase 6: PPTX, PDF, Vercel deploy
│   ├── specialized-modes.md      # Cinematic, Swiss, Editorial, Templates, Brand Import
│   ├── quality-guardrails.md     # Banned words, self-check, troubleshooting
│   └── animation-patterns.md     # GSAP animation patterns and reduced-motion fallbacks
├── scripts/
│   ├── pptx_export.py            # PPTX export (Path A: python-pptx)
│   ├── pptx_import.py            # PPTX import to JSON
│   ├── preview_themes.py         # Generate 3 visual preview slides
│   └── deckmason-cli.js          # CLI for npm install
├── demo/
│   ├── example-deck.html         # 9-slide demo deck
│   └── og-cover.png
└── examples/
    ├── deep-space-keynote-vision.html
    ├── paper-ink-editorial-essay.html
    └── swiss-modern-design-talk.html
```

## What NOT to do

- Don't paste the workflow into a chat window: the agent reads the files and follows them
- Don't load all reference files at once: load on demand per phase
- Don't skip the Pre-Flight Scoping phase even if the user seems impatient: restate assumptions instead of asking
- Don't ship the first plausible deck: run the self-check checklist from references/quality-guardrails.md
- Don't use system fonts (Arial, Roboto, Inter) unless the theme explicitly calls for them
- Don't add statistics, icons, or supporting numbers the user did not provide
- Don't use emoji as icons: use a real icon library or leave as placeholder
