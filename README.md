<div align="center">

# DeckMason

**AI Presentation Skill for Coding Agents**

Generate production-quality HTML slide decks with any AI coding agent. 31 curated themes, Pyramid Principle storytelling, PPTX/PDF export, brand import. No API keys needed.

[![GitHub stars](https://img.shields.io/github/stars/a692570/deckmason?style=social)](https://github.com/a692570/deckmason/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![No API Keys](https://img.shields.io/badge/No%20API%20Keys-needed-success)](#requirements)
[![Themes](https://img.shields.io/badge/Themes-31-purple)](STYLE_PRESETS.md)
[![Made with HTML](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-orange)](#)

**Works with:** Claude Code, Cursor, Codex CLI, Windsurf, Aider, OpenClaw, or any agent that reads files and runs scripts

</div>

---

## Table of Contents

- [Quick Start](#quick-start)
- [What It Does](#what-it-does)
- [Themes](#themes)
- [Workflow](#workflow)
- [Brand Import](#brand-import)
- [Output](#output)
- [Requirements](#requirements)
- [Live Demo](#live-demo)
- [Examples](#example-prompts)
- [Repository Layout](#repository-layout)
- [Contributing](#contributing)
- [License](#license)

## Live Demo

An 8-slide demo deck built with DeckMason using the Bold Signal preset (split-complementary, warm). Color theory validated: 60-30-10 distribution, WCAG 4.5:1 contrast on all text pairs, 13-rung lightness ladder with zero collisions, page rhythm with no 3+ consecutive same-weight slides.

**[View the live demo](https://a692570.github.io/deckmason/demo/example-deck.html)**

The demo exercises:
- Canvas Scale Architecture (1920x1080 + letterbox scaling)
- Viewport Fitting Rules (clamp, scroll-snap, 100vh)
- Color Theory System (harmony, contrast, saturation, lightness)
- Page Rhythm (hero/non-hero alternation, split-bleed comparison slide)
- Speaker Notes Overlay (press N)
- 7 slide types (cover, big number, content-light, comparison, pipeline, quote, themes, closing)
- localStorage persistence

## Quick Start

```bash
git clone https://github.com/a692570/deckmason.git
```

Point your agent at `SKILL.md` when you ask it to build a deck:

```
"Create a 12-slide pitch deck for an AI customer support startup. Audience: Series A investors."
"Convert these notes into a technical presentation on Kubernetes autoscaling: [paste notes]"
"15-slide conference talk on the future of AI agents. Visionary tone, deep space theme."
```

**For OpenClaw / OpenCode:**
```bash
cd ~/.openclaw/skills
git clone https://github.com/a692570/deckmason.git
```

## What It Does

DeckMason is a structured, multi-phase workflow. It's not a prompt template you paste into a chat window. Your agent reads `SKILL.md`, follows the phases, and writes real files to disk.

The output is a self-contained HTML file with:
- Animated slide transitions (keyboard, touch, scroll-snap navigation)
- Speaker notes overlay (press N)
- Canvas Scale Architecture (1920x1080 fixed, letterbox-scaled)
- Responsive layout with `clamp()` typography
- Optional PPTX and PDF export

No external API calls. No cloud dependencies. Everything runs locally.

## Themes

31 curated styles (11 original + 20 extended), plus Kami Warm Editorial (full CSS spec for print-quality decks), plus custom brand import.

### Original 11

| Theme | Best for |
|-------|----------|
| **Modern SaaS** (default) | Pitch decks, product demos |
| Neon Cyber | Tech talks, gaming |
| Midnight Executive | Board meetings, enterprise |
| Deep Space | Keynotes, vision talks |
| Terminal Green | Engineering presentations |
| Paper & Ink | Education, storytelling |
| Swiss Modern | Design presentations |
| Soft Pastel | Marketing, community |
| Warm Editorial | Brand storytelling |
| Brutalist | Creative pitches |
| Gradient Wave | Startup pitches |

### Extended 20

Bold Signal, Electric Studio, Creative Voltage, Dark Botanical, Notebook Tabs, Pastel Geometry, Split Pastel, Vintage Editorial, Liquid Glass Bento, Engineering Blueprint, Watercolor Map, Golden Serif Quote, Chalkboard Lesson, Exploded Layer Stack, Hyperreal Product, Summary Infographic, Cobalt Grid, 8-Bit Orbit, Raw Grid, Broadside.

### Kami Warm Editorial

A full editorial CSS spec for print-quality, paper-like decks. Includes complete CSS tokens, slide-scale rules, section header and code card components, and deck recipe rules for long decks (>20 slides). Best for research presentations, white papers, academic decks, and document-style investor briefs.

Full CSS and font details in [`STYLE_PRESETS.md`](STYLE_PRESETS.md).

## Workflow

The `SKILL.md` covers the full pipeline:

| Phase | What happens |
|-------|-------------|
| Pre-Flight Scoping | 4 questions: aesthetic direction, page count, text density, motion |
| Phase 0: Brief | Audience, arc, ask, success definition |
| Phase 1: Structure | Pyramid Principle, assertion-evidence headings, thesis, contrast beats |
| Phase 2: Outline | Page Type Taxonomy, 10 Editorial Layout Types, slide count scaling |
| Phase 3: HTML | Canvas Scale Architecture, Viewport Fitting, Vertical Budget Math, One Idea Per Slide |
| Phase 4: Images | 7 named image roles, image type taxonomy, Chart Anti-Patterns |
| Phase 5: Polish | Page Rhythm, Font Hierarchy, AI Tells checklist, Designer's Eye Critique |
| Phase 6: Export | PPTX (python-pptx or pptxgenjs), PDF, Vercel deploy |

### Specialized modes

- **Cinematic Slide Mode** — 22-second film clip with 5 scenes for workflow demos
- **Swiss International Strict Mode** — Vignelli-inspired ultra-clean grid design
- **Editorial Web Deck Mode** — magazine-style keynote decks
- **Image Slides Mode** — PNG deck output for social media sharing
- **HTML Slide Template Library** — 32 production-quality templates from `beautiful-html-templates`
- **Theme Variation Protocol** — 3 distinct visual directions before locking
- **Design Philosophy School System** — 5 schools for vague briefs
- **Speaker Notes Overlay** — N key toggle, auto-updating per slide
- **Brand Import** — extract theme from PPTX, website URL, or brand guidelines PDF

### Quality guardrails built into the workflow

- One Idea Per Slide (hard rule, not a guideline)
- No 3+ consecutive same visual weight slides
- Title-to-body font ratio minimum 2.5x (target 3x)
- No `scrollIntoView()`, no `overflow: hidden` to hide content, no `scale(0)` entrances
- `prefers-reduced-motion` path required for every animated deck
- Banned words list (unleash, elevate, seamless, transformative, etc.)
- Data Slop Rule: never add statistics the user did not provide
- 30% Copy Cut Rule: would cutting 30% make this clearer?
- Industry Theme Constraints (banned combinations per audience)
- Chart Anti-Patterns enforced at generation time

## Brand Import

Extract a theme from existing assets instead of picking a preset:

- **From a PPTX**: Unzip, parse `theme1.xml` for colors and fonts
- **From a website URL**: Fetch page, extract CSS variables and font families
- **From a brand guidelines PDF**: Parse hex codes, typography rules, spacing

```
"Create a presentation using the brand from company-deck.pptx"
"Match the style of https://linear.app for this pitch deck"
"Use our brand-guidelines.pdf to style a 10-slide launch deck"
```

## Output

| File | Description |
|------|-------------|
| `presentation.html` | Self-contained, works offline, full animations, speaker notes (press N) |
| `presentation.pptx` | Editable PowerPoint via export script |
| `presentation.pdf` | Print from browser or headless Chrome |
| `presentation-assets/` | Generated images, charts, diagrams |

```bash
python3 scripts/pptx_export.py presentation.html --output presentation.pptx
```

Two PPTX export paths:
- **Path A** (python-pptx): image-based layout detection, simpler, included as `scripts/pptx_export.py`
- **Path B** (pptxgenjs): DOM-traversal producing editable text boxes, documented in `SKILL.md` Phase 6

## Requirements

- An AI coding agent with file system and terminal access
- Any capable LLM backend
- Python 3 + `python-pptx` for PPTX export Path A (`pip3 install python-pptx`)
- Node.js + `pptxgenjs` for PPTX export Path B (`npm install pptxgenjs`)
- Modern browser (Chrome/Edge/Firefox/Safari)

**No additional API keys. Everything runs locally.**

## Example Prompts

```
"Build a 12-slide pitch deck for an AI customer support startup. Audience: Series A investors."
```

```
"Convert these notes into a technical presentation on Kubernetes autoscaling: [paste notes]"
```

```
"15-slide conference talk on the future of AI agents. Visionary tone, deep space theme."
```

```
"Create a presentation using the brand from company-deck.pptx"
"Match the style of https://linear.app for this pitch deck"
"Use our brand-guidelines.pdf to style a 10-slide launch deck"
```

```
"Make 3 style options for my deck"
"Generate slide images for social media sharing"
```

## Repository Layout

```
deckmason/
├── SKILL.md              # The workflow your agent follows (1045 lines)
├── STYLE_PRESETS.md      # 31 themes + Kami CSS spec (796 lines)
├── AGENTS.md             # Operating manual for AI agents
├── README.md             # This file
├── MAINTAINER.md         # Sync process from canonical skill
├── CONTRIBUTING.md       # How to contribute
├── index.html            # SEO landing page (OG/Twitter/structured data)
├── LICENSE               # MIT
└── scripts/
    └── pptx_export.py    # PowerPoint export (Path A: python-pptx)
```

## Design Principles

- Clean typography with intentional font pairings
- Plenty of whitespace
- No two consecutive slides share the same visual weight
- Content first, decoration second
- No filler copy, no generic gradients, no AI slop
- One idea per slide (hard rule, not a guideline)
- Every slide must work as a still frame (PDF/PPTX exports are static)

## Contributing

New themes, better export scripts, workflow improvements. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

PRs welcome. Before submitting, run the self-check checklist from `SKILL.md` against any deck you generate with your changes.

## License

[MIT](LICENSE). Free for personal and commercial use.
