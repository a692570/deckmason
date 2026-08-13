# DeckMason: AI Presentation Workflow

Summary: Create production-quality HTML slide decks from a topic, document, or outline. This file is the entry point for the 6-phase workflow. Read this first, then load reference files on demand as you reach each phase. Do not load all reference files at once.

Requires an AI coding agent with file system access: Claude Code, Cursor, Codex CLI, Windsurf, Aider, or any agent that can read files and run scripts.

## Output Quality Standard

Every presentation should feel like it belongs on a top-tier SaaS marketing page or editorial spread. Clean, confident, minimal, professional. No AI slop. No generic gradients. No filler copy.

---

## Quick Start

**For a new presentation:**
```
"Create a pitch deck about [topic]"
"Make a presentation on [subject] for [audience]"
```

**With your own content:**
```
"Turn these notes into slides: [paste content]"
"Style this outline as a presentation"
```

**With a brand:**
```
"Create a presentation using the brand from company-deck.pptx"
"Match the style of https://linear.app for this pitch deck"
```

**Import an existing PPTX:**
```
"Convert company-deck.pptx into an HTML presentation"
```

---

## Pre-Flight Scoping (before generating any deck)

Lock in the aesthetic direction before writing a single slide. Only skip a question if the user already gave an unambiguous answer. If you skip, restate the assumption explicitly.

### Step 0: Visual Preview (preferred path)

Generate 3 quick visual preview slides using 3 different themes so the user can pick a direction visually:

```bash
python3 scripts/preview_themes.py "Your Topic Here"
```

This creates 3 single-slide HTML files in `previews/`:
- `previews/preview-1-dark.html` (Deep Space theme)
- `previews/preview-2-light.html` (Modern SaaS theme)
- `previews/preview-3-bold.html` (Bold Signal theme)

Tell the user to open the 3 files and pick a direction. The chosen direction becomes the aesthetic direction (step 1), skipping the text-based proposal below.

### Step 1: Aesthetic direction (text fallback)

If the user prefers text, propose 3 visual directions tailored to THIS specific topic and audience. Not from a fixed preset list. Each option combines a vibe word + a concrete visual cue (palette, typography, motif) so the user can picture it. The three directions must feel meaningfully different from each other, not three flavors of the same idea. Mark one as recommended.

For each direction, state the **color harmony** (monochromatic, analogous, complementary, split-complementary, triadic, neutral+accent), the **temperature** (warm, cool, neutral), and the **60-30-10 distribution** (which color is dominant, secondary, accent). This forces color decisions at the planning stage, not as an afterthought.

### Step 2: Page count

Offer brackets:
- 3-5 slides: short / teaser
- 6-10 slides: standard
- 11-20 slides: deep dive
- Custom: user specifies

### Step 3: Text density per page

One of four levels:
- Minimal: one line or a big number
- Light: heading + 2-3 bullets
- Standard: heading + 4-5 bullets
- Dense: multi-column or detailed reference content

### Step 4: Motion

Static, subtle live-review motion, or separate video asset. Choose static by default for PDF, PPTX, Google Slides, and read-ahead decks.

For GSAP-powered animation patterns (fade-in-up, stagger-reveal, clip-path-reveal, scale-in, slide-in-left/right, blur-in), see `references/animation-patterns.md`. Use these when the user wants live HTML review or keynote-style playback.

Only proceed to outline after these are locked.

---

## The 6-Phase Workflow (Overview)

Read this overview to understand the full pipeline. Load each reference file when you reach that phase.

| Phase | Name | What happens | Reference file |
|---|---|---|---|
| Pre-Flight | Scoping | Visual preview or 4 text questions: aesthetic direction, page count, text density, motion | This file (above) |
| 0 | Brief | Record the request, defaults, assumptions. Write a brief with audience, arc, ask, success. Also covers PPT import workflow. | `references/phase0-brief.md` |
| 1 | Structure | Pyramid Principle, assertion-evidence headings, thesis, contrast beats, Product Design Layers | `references/phase1-structure.md` |
| 2 | Outline | Page Type Taxonomy, 10 Editorial Layout Types, slide count scaling | `references/phase2-outline.md` |
| 3 | HTML | Canvas Scale Architecture, Viewport Fitting, Vertical Budget Math, One Idea Per Slide, HTML structure, animation patterns, DOM rules, grid ratios | `references/phase3-html.md` |
| 4 | Images | 7 named image roles, image type taxonomy, Image Slides Mode, Chart Anti-Patterns | `references/phase4-images.md` |
| 5 | Polish | Page Rhythm, Font Hierarchy, Color Theory System, AI Tells, Industry Constraints, Voice Guidance, Designer's Eye Critique, Narrative Spine | `references/phase5-polish.md` |
| 6 | Export | PPTX (python-pptx or pptxgenjs), PDF, Vercel deploy | `references/phase6-export.md` |

### Specialized modes (load on demand)

- **Cinematic Slide Mode**: 22-second film clip with 5 scenes for workflow demos
- **Swiss International Strict Mode**: Vignelli-inspired ultra-clean grid design
- **Editorial Web Deck Mode**: magazine-style keynote decks
- **HTML Slide Template Library**: 32 production-quality templates from `beautiful-html-templates`
- **Theme Variation Protocol**: 3 distinct visual directions before locking
- **Design Philosophy School System**: 5 schools for vague briefs
- **Speaker Notes Overlay**: N key toggle, auto-updating per slide
- **Brand Import Workflow**: extract theme from PPTX, website URL, or brand guidelines PDF

Full details for all specialized modes: `references/specialized-modes.md`

### Quality guardrails (load before delivery)

All quality guardrails, banned words, Data Slop Rule, 30% Copy Cut Rule, Self-Check Before Delivery, troubleshooting, and requirements: `references/quality-guardrails.md`

---

## Style Presets

See `STYLE_PRESETS.md` for 31 curated styles (11 original + 20 extended) plus Kami Warm Editorial:

**Original 11:** Modern SaaS (default), Neon Cyber, Midnight Executive, Deep Space, Terminal Green, Paper & Ink, Swiss Modern, Soft Pastel, Warm Editorial, Brutalist, Gradient Wave

**Extended 20:** Bold Signal, Electric Studio, Creative Voltage, Dark Botanical, Notebook Tabs, Pastel Geometry, Split Pastel, Vintage Editorial, Liquid Glass Bento, Engineering Blueprint, Watercolor Map, Golden Serif Quote, Chalkboard Lesson, Exploded Layer Stack, Hyperreal Product, Summary Infographic, Cobalt Grid, 8-Bit Orbit, Raw Grid, Broadside

**Kami Warm Editorial**: a full editorial spec for print-quality, paper-like decks. See the Kami section in `STYLE_PRESETS.md`.

Full CSS and font details in `STYLE_PRESETS.md`.

---

## How to Read This Skill

1. Read this file first. It contains the Quick Start, Pre-Flight Scoping, and the 6-phase overview.
2. Load reference files on demand when you reach that phase. Do not load all references at once.
3. Before delivering any deck, load `references/quality-guardrails.md` and run the Self-Check checklist.
4. For specialized modes (Cinematic, Swiss Strict, Editorial Web, etc.), load `references/specialized-modes.md` only when the user requests that mode.
5. For GSAP animations, load `references/animation-patterns.md` when the user wants motion beyond the standard CSS transitions.

This progressive disclosure structure saves context tokens. The original single-file SKILL.md was 1,195 lines. This entry point is ~200 lines. Each reference file is loaded only when needed.

---

## Export Quick Reference

```bash
# PPTX export (Path A: python-pptx, image-based)
python3 scripts/pptx_export.py presentation.html --output presentation.pptx

# PPTX import (convert existing .pptx to JSON for DeckMason)
python3 scripts/pptx_import.py input.pptx --output decks/input_deck.json

# Visual preview (3 themes for user to pick)
python3 scripts/preview_themes.py "Your Topic"

# PDF export (headless Chrome)
chrome --headless --print-to-pdf=presentation.pdf --run-all-compositor-stages-before-draw --virtual-time-budget=5000 presentation.html

# Vercel deploy (live URL)
npx vercel
```

---

## Requirements

- An AI coding agent with file system and terminal access
- Any capable LLM backend
- Python 3 + `python-pptx` for PPTX export path A (`pip3 install python-pptx`)
- Node.js + `pptxgenjs` for PPTX export path B (`npm install pptxgenjs`)
- Modern browser (Chrome/Edge/Firefox/Safari)

No additional API keys. Everything runs locally.

---

## npm Install (optional)

```bash
# Quick start without cloning
npx deckmason init [dir]

# Global install
npm install -g deckmason
deckmason init
deckmason themes
deckmason preview "Your Topic"
deckmason import company-deck.pptx
```

See README.md for full npm instructions.
