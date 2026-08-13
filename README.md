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
- [Examples](#examples)
- [Example Prompts](#example-prompts)
- [Repository Layout](#repository-layout)
- [Contributing](#contributing)
- [License](#license)

## Live Demo

An 9-slide demo deck built with DeckMason using the Bold Signal preset (split-complementary, warm). Color theory validated: 60-30-10 distribution, WCAG 4.5:1 contrast on all text pairs, 13-rung lightness ladder with zero collisions, page rhythm with no 3+ consecutive same-weight slides.

**[View the live demo](https://a692570.github.io/deckmason/demo/example-deck.html)**

## Examples

Four example decks, each using a different preset to show the range of the workflow. Each is color-theory validated (60-30-10, WCAG contrast, lightness ladder, saturation discipline, page rhythm).

| Deck | Preset | Harmony | Temperature | Slides | Topic | Live link |
|------|--------|---------|-------------|-------|-------|-----------|
| Product Pitch | Bold Signal | Split-complementary | Warm | 9 | Why structured workflows beat prompt templates | [View](https://a692570.github.io/deckmason/demo/example-deck.html) |
| Editorial Essay | Paper & Ink | Neutral + accent | Warm | 5 | The case for boring technology | [View](https://a692570.github.io/deckmason/examples/paper-ink-editorial-essay.html) |
| Keynote Vision | Deep Space | Analogous | Cool | 5 | The next decade of AI: constraints, not compute | [View](https://a692570.github.io/deckmason/examples/deep-space-keynote-vision.html) |
| Design Talk | Swiss Modern | Neutral + accent | Neutral | 5 | Why grid systems still matter | [View](https://a692570.github.io/deckmason/examples/swiss-modern-design-talk.html) |

### What each example demonstrates

**Product Pitch (Bold Signal, 9 slides)** - The hero demo. Full workflow: cover, big number, content-light, comparison, suspense question, pipeline, quote, themes grid, closing. Shows dark/light alternation, 6-phase pipeline layout, and the widest slide-type variety.

**Editorial Essay (Paper & Ink, 5 slides)** - Serif typography (Cormorant Garamond + Source Serif 4). Cream paper background, crimson accent. Shows how the editorial preset handles essay-style content with pull quotes and drop-cap-style bullets.

**Keynote Vision (Deep Space, 5 slides)** - Dark space aesthetic with indigo/purple analogous palette. Shows how a keynote/vision talk uses big numbers and atmospheric spacing. Diamond-shaped bullet markers are the preset's signature element.

**Design Talk (Swiss Modern, 5 slides)** - Ultra-clean grid system with Archivo 800 display type. Red accent only on headings and CTAs (large text, 3:1+ contrast). Hard edges, no border-radius, no shadows. Shows how the Swiss discipline handles comparison and stat slides.

The demo exercises:
- Canvas Scale Architecture (1920x1080 + letterbox scaling)
- Viewport Fitting Rules (clamp, scroll-snap, 100vh)
- Color Theory System (harmony, contrast, saturation, lightness)
- Page Rhythm (hero/non-hero alternation, split-bleed comparison slide)
- Speaker Notes Overlay (press N)
- 7 slide types (cover, big number, content-light, comparison, pipeline, quote, themes, closing)
- localStorage persistence

## Quick Start

**Option A: npm (recommended for quick setup)**

```bash
# Initialize in the default location (~/.claude/skills/deckmason)
npx deckmason init

# Or initialize in a specific directory
npx deckmason init ./my-decks

# Or install globally
npm install -g deckmason
deckmason init
```

**Option B: git clone**

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

## Visual Preview Mode

Instead of asking 4 text questions, generate 3 quick visual preview slides using 3 different themes and let the user pick a direction visually.

```bash
python3 scripts/preview_themes.py "Your Topic Here"
```

Creates 3 single-slide HTML files in `previews/`:
- `preview-1-dark.html` (Deep Space theme, dark, cool, visionary)
- `preview-2-light.html` (Modern SaaS theme, light, clean, professional)
- `preview-3-bold.html` (Bold Signal theme, high-contrast, warm, confident)

Open all 3 in your browser, pick a direction, and tell your agent. The chosen direction becomes the aesthetic direction for the full deck, skipping the text-based proposal. The 4 text questions remain as a fallback if you prefer text.

```
"Create a pitch deck about AI agents"
-> Agent runs: python3 scripts/preview_themes.py "AI Agents"
-> You open the 3 previews and pick "dark"
-> Agent proceeds with the Deep Space aesthetic direction
```

## PPT Import

Convert an existing .pptx file into DeckMason's HTML slide format. The import script reads the presentation and extracts slide content, images, theme colors, and fonts into a structured JSON file.

```bash
python3 scripts/pptx_import.py company-deck.pptx --output decks/input_deck.json
```

The extracted JSON contains:
- Slide layout type, title, subtitle, body text, and paragraphs (with indentation levels)
- Images with positions and sizes (converted from EMU to pixels)
- Speaker notes from each slide
- Theme colors (from theme1.xml color scheme) and fonts (major and minor)

### Import Workflow

1. Run the import script on your .pptx file
2. Your agent reads the JSON output and maps each source slide to a DeckMason slide type (cover, content, big number, comparison, etc.)
3. The agent feeds the content into Phase 0 as source material instead of asking for a topic
4. DeckMason preserves the original deck structure but applies its quality guardrails

```
"Convert company-deck.pptx into an HTML presentation"
"Import sales-deck.pptx and restyle it with the Deep Space theme"
```

See `references/phase0-brief.md` for the full PPT import workflow.

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

## GSAP Animations

DeckMason supports optional GSAP-powered animations for slide entrance/exit and element reveals. Animations are optional: PDF, PPTX, and Google Slides exports are static snapshots, so every slide must work as a still frame.

Available patterns:
- **fade-in-up**: cover titles, section headers, general reveals
- **stagger-reveal**: bullet lists, card grids, sequential item reveals
- **clip-path-reveal**: data slides, big numbers, dramatic wipes
- **scale-in**: big number slides, hero images, center-stage elements
- **slide-in-left / slide-in-right**: comparison slides, split layouts
- **blur-in**: keynote moments, cinematic transitions, editorial reveals

Every pattern includes a `prefers-reduced-motion` fallback for accessibility. See `references/animation-patterns.md` for full code snippets, when-to-use guidance, and integration with the Intersection Observer system.

```
"Create a deck with animated reveals for live presentation"
"Add GSAP stagger animations to the bullet lists"
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
