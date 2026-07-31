# DeckMason - AI Presentation Workflow

Create production-quality HTML slide decks from a topic, document, or outline. Your agent reads this workflow, builds the slides, and exports to PPTX or PDF. You review and ship.

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

---

## Pre-Flight Scoping (4 questions before generating any deck)

Lock in four decisions before writing a single slide. Only skip a question if the user already gave an unambiguous answer. If you skip, restate the assumption explicitly.

**1. Aesthetic direction** — propose 3 visual directions tailored to THIS specific topic and audience. Not from a fixed preset list. Each option combines a vibe word + a concrete visual cue (palette, typography, motif) so the user can picture it. The three directions must feel meaningfully different from each other, not three flavors of the same idea. Mark one as recommended.

For each direction, state the **color harmony** (monochromatic, analogous, complementary, split-complementary, triadic, neutral+accent), the **temperature** (warm, cool, neutral), and the **60-30-10 distribution** (which color is dominant, secondary, accent). This forces color decisions at the planning stage, not as an afterthought.

**2. Page count** — offer brackets:
- 3-5 slides: short / teaser
- 6-10 slides: standard
- 11-20 slides: deep dive
- Custom: user specifies

**3. Text density per page** — one of four levels:
- Minimal: one line or a big number
- Light: heading + 2-3 bullets
- Standard: heading + 4-5 bullets
- Dense: multi-column or detailed reference content

**4. Motion** — static, subtle live-review motion, or separate video asset. Choose static by default for PDF, PPTX, Google Slides, and read-ahead decks.

Only proceed to outline after these are locked.

---

## Slide Count Scaling

Adjust target based on content length (not always 12-15):

| Content Length | Slide Target |
|---|---|
| < 1000 words | 5-10 |
| 1000-3000 words | 10-18 |
| 3000-5000 words | 15-25 |
| > 5000 words | 20-30 (consider splitting into parts) |

When duration is known instead of content length:

| Duration | Slide target |
|---|---|
| 15 min | ~10 slides |
| 30 min | ~20 slides |
| 45 min | ~25-30 slides |

---

## The 6-Phase Workflow

### Phase 0: Brief

Record the user's original request, defaults used, and assumptions made. Write a brief with four sections:
1. **Audience** — who they are, what they optimize for, likely objections
2. **Arc** — what's the "what is" (current reality/pain) vs "what could be" (opportunity/transformation)
3. **Ask** — the specific decision or action the deck drives
4. **Success** — what does a win look like after they read it?

Read the brief before touching any slide in follow-up sessions.

### Phase 1: Structure the Story

Apply the **Pyramid Principle**: one conclusion, then 3-5 top-level reasons, then supporting evidence. Each slide conveys **only 1 core idea**. Headings must be **assertion sentences** (complete, testable statements), not topic labels.

Draft the thesis: **Thesis = [Your POV] + [What's at stake for the audience]**. Example: "Enterprise software buying is broken; the CIO model is dying, and the next $100B company will be built bottom-up." Every slide must ladder up to this thesis; cut anything that doesn't.

Then map contrast beats: where does the deck toggle between "what is" (status quo, pain, obstacle) and "what could be" (opportunity, resolution, transformation)? Don't front-load all problems. Oscillate throughout.

**Product Design Layers** (conditional — use when the deck is about product strategy, UX, roadmap, or design review; skip for generic reports or sales training):

Map the deck from bottom to top:
1. Observed behavior — what are users already doing?
2. Domain — what vocabulary, objects, constraints exist?
3. User needs — what job needs to get done?
4. Product strategy — what behavior should the product create?
5. Conceptual model — core objects, relationships, states, permissions
6. Interaction flow — path from intent to outcome
7. Surface — visual, copy, component, motion choices

Decision rule: do not make a surface-polish deck when the actual issue is lower in the stack. If the conceptual model is weak, the deck must expose and resolve that before showing UI polish.

### Phase 2: Outline & Slide Types

Create a slide-by-slide outline. Name the **slide type** before writing content. This forces structural intent at the outline stage.

**Page Type Taxonomy:**

| Type | Purpose |
|---|---|
| Cover | Title + subtitle, strong visual. Slide 1 always. |
| Agenda | What's coming. 3-5 items, no more. |
| Section divider | Big label between chapters. Almost nothing else on the slide. |
| Content | Heading + 2-5 bullets OR heading + one visual. |
| Big number | One statistic that fills the canvas. Nothing competes with it. |
| Quote | Pull-quote with attribution. One speaker, one idea. |
| Comparison | Two-column before/after or A vs B. |
| Closing | CTA, thanks, or contact. The last thing they see. |

**Editorial Layout Types** (10 named types for richer structure):

| # | Name | Use for |
|---|---|---|
| 1 | Opening cover | Slide 1 always; one dominant idea, no bullets |
| 2 | Chapter curtain | Section breaks; full-bleed, centered, large statement |
| 3 | Data headline | Lead with a single hard number or metric |
| 4 | Left-text / right-image | Story + visual evidence, case studies |
| 5 | Image grid | Multi-image comparison, screenshot proof |
| 6 | Pipeline flow | Process steps, workflow |
| 7 | Suspense question | Whet appetite before a reveal |
| 8 | Big quote | Full-bleed serif pull quote, memorable moment |
| 9 | Before/after comparison | Old model vs new model, transformation |
| 10 | Mixed layout | Information-dense pages with an anchor image |

Get user approval on the outline before proceeding to HTML.

### Phase 3: HTML Generation

Write the complete HTML presentation. This is the main creative work.

#### Canvas Scale Architecture

**Canvas:** Fixed at 1920x1080 (16:9). Do NOT use viewport-relative sizing for the canvas itself.

**Letterboxing:** A full-viewport stage wraps the canvas and letterboxes it via `transform: scale()`. Compute scale as `Math.min(viewportW / 1920, viewportH / 1080)`.

**Navigation controls:** Place prev/next controls and slide counter **outside** the scaled canvas element, otherwise they shrink with the canvas and become unusable on small screens.

**localStorage persistence:** Store the current slide index in `localStorage` on every change. Re-read on load. Prevents losing place on refresh during iterative design.

**Minimum font sizes for 1920x1080 canvas:** Text must never be smaller than 24px (rendered at native canvas resolution). Headings: 48px minimum. Body: 28-32px minimum. Footnotes: 24px minimum. The 1pt to 1.33px ratio at 96dpi applies.

#### Viewport Fitting Rules (non-negotiable)

**Core constraint:** Every `.slide` MUST fit exactly within 100vh. No scrolling within slides, ever. Content overflows? Split into multiple slides.

```css
.slide {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    scroll-snap-align: start;
}
html {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}
```

**Typography and spacing:** ALL font sizes and spacing values MUST use `clamp(min, preferred, max)`, never fixed px/rem values. Responsive breakpoints required at 700px, 600px, and 500px viewport height.

**CSS function negation gotcha:** Never negate CSS functions directly. `-clamp()`, `-min()`, `-max()` are silently ignored by browsers. Always use `calc(-1 * clamp(...))` instead.

**Content density limits per slide type:**

| Slide Type | Maximum Content |
|---|---|
| Title slide | 1 heading + 1 subtitle + optional tagline |
| Content slide | 1 heading + 4-6 bullets OR 1 heading + 2 paragraphs |
| Feature grid | 1 heading + 6 cards max (2x3 or 3x2) |
| Code slide | 1 heading + 8-10 lines of code |
| Quote slide | 1 quote (max 3 lines) + attribution |
| Image slide | 1 heading + 1 image (max 60vh height) |

#### Vertical Budget Math (run before writing every slide)

Before writing any slide, do the math. Sum all vertical content: `(font_size x line_height x lines) + gaps + (2 x padding)` must be <= slide height. If it's tight, split into two slides. Never use overflow, scroll, or shrink type below readable minimums to make things fit.

**Worked example at 1080px canvas (120px padding each side = 840px usable):**

| Element | Calculation | px |
|---|---|---|
| Heading (80px, 1.2 LH, 1 line) | 80 x 1.2 x 1 | 96 |
| Gap below heading | | 64 |
| Body text (40px, 1.6 LH, 3 lines) | 40 x 1.6 x 3 | 192 |
| Gap to bullets | | 48 |
| 5 bullets (40px, 1.6 LH, 1 line each) | 40 x 1.6 x 5 | 320 |
| 4 inter-bullet gaps (24px each) | 24 x 4 | 96 |
| **Total** | | **816 — fits** |

Add a 6th bullet and you're over 840px. Split the slide.

#### One Idea Per Slide (hard rule)

One idea per slide. If you're tempted to put two ideas on one slide, split them. A slide with two ideas is two slides waiting to be written. This is not a density preference, it's a structural requirement.

#### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Presentation Title]</title>
    <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=inter@400,500,600,700&f[]=space-grotesk@400,500,600,700">
    <style>
        :root {
            --bg-primary: #ffffff;
            --bg-dark: #0A0A0A;
            --text-primary: #1a1a1a;
            --text-secondary: #666666;
            --text-on-dark: #ffffff;
            --accent: #00E3AA;
            --font-display: 'Space Grotesk', sans-serif;
            --font-body: 'Inter', sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
            --slide-padding: 4rem;
            --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
        }
    </style>
</head>
<body>
    <section class="slide title-slide" data-slide="1" data-screen-label="01 Cover">
        <h1>Title</h1>
        <p class="subtitle">Subtitle</p>
    </section>
    <script>
        // Navigation, animations, speaker notes
    </script>
</body>
</html>
```

**Slide labels are 1-indexed.** Use `data-screen-label="01 Cover"`, `"02 Agenda"`, etc. When the user says "slide 5" they mean label `"05"`, never array index `[4]`.

#### Agent Authoring Discipline

- **Lock four style decisions before implementation:** topic/audience, rough slide count, text density, and motion level. If the user already gave clear direction, restate the assumption instead of asking.
- **Use canvas budget math before writing dense slides.**
- **Create reusable theme docs when a visual identity should persist:** capture palette, typography, layout padding, fixed title/footer/eyebrow components, motion philosophy, and what to avoid.
- **Use placeholders only for user-owned missing assets:** product screenshots, team photos, proprietary charts. Do not leave decorative stock-photo slots for the user to fill.
- **Keep repeated visuals edit-friendly:** cards, tiles, logos, comparison blocks, and timeline items should have stable per-item markup so a later edit can target one item cleanly.
- **Define a layout contract for reusable slides:** list `layout_id`, `layout_name`, allowed fields, string caps, array caps, image slots, chart/table schema, and fixed canvas ratio.
- **Separate decorative and content assets:** decorative backgrounds, borders, logos stay fixed in the template. Replaceable images, icons, charts, titles, bullets belong in the content schema.
- **Cap content before visual QA:** if a title, bullet list, table, or metric grid exceeds the layout contract, split the slide or choose a denser layout. Do not rely on overflow clipping.

#### File Size Limit

If the generated HTML presentation exceeds ~1000 lines, split into multiple files and import into a main file. Do NOT produce one massive file; it becomes uneditable.

### Phase 4: Images & Charts

#### Slide Background Image System

When a slide needs a visual asset behind the text, use this system. Slide images are distinct from HTML themes: they are the art layer beneath editable text.

**Default output spec:** 3840x2160 (fallback: 1920x1080), horizontal 16:9, 25-35% clean text-safe space, minimal baked-in text.

**7 named image roles:**

| Role | Purpose | Composition rule |
|---|---|---|
| Cover / Opening Hero | Stop attention; establish emotional premise | One dominant hero object, cinematic, clear title-safe zone |
| Section Divider | Reset rhythm between chapters | Simplified subject, more negative space than cover |
| Concept Visualization | Explain one abstract idea through one visual metaphor | One metaphor + one structural support layer |
| Comparison Plate | Visualize tension, tradeoff, or before/after | Split field or asymmetric confrontation |
| Data Backdrop | Support a stat or chart-heavy slide | Subdued structure, clean title area, calm edges |
| System / Workflow Plate | Visualize flow, hierarchy, or architecture | Large blocks, deliberate connectors, few node types |
| Closing Poster | Compress the deck's final judgment | Bold, simple, emotionally resolved |

**Pre-generation checklist (run before every image prompt):**
1. What is the slide role?
2. What is the single-sentence thesis for this slide?
3. Where is the safe zone? (left-safe, right-safe, or top-safe)
4. What should the viewer feel in one second?
5. What must be avoided?

**Image type taxonomy** (always pick the type before generating):

| Type | Ratio | Composition rule |
|---|---|---|
| Documentary photo | 16:9 or 16:10 | Real-scene feeling; no staged stock look |
| Infographic / flow diagram | 16:9 (match slide width) | Information graphic only, no baked-in chrome |
| UI scene shot / screenshot | 16:10 | Product UI or screen capture, redesigned for editorial consistency |
| System relationship diagram | 16:9 | Architecture, network, or org topology; nodes and edges only |
| Data callout | Tall narrow (portrait) | Single number or micro-chart; sits beside copy |
| Multi-photo collage | Wide slot, consistent heights | 2-4 photos cropped to identical height, horizontal |
| Full-slide concept render | Match final output | Static concept, cover, section break, or carousel frame |

**Series consistency rule:** Across a deck, images must belong to one visual system via consistent palette, light direction, texture, geometry, framing, and contrast behavior. Series consistency matters more than single-image cleverness. Declare the system variables upfront and lock them for the full set.

**Color system for slide images:** Use a presentation palette, 1 base mode + 1 accent family. Core neutrals: Paper White `#F6F1E8` (warm off-white for light decks), Ink Black `#111317` (dark anchor), Graphite `#2A2F36` (surfaces/shadows), Stone Gray `#A8A29A` (separators). Signal accents (pick one): Steel Blue `#345D7E` (rational, technical), Signal Orange `#D96A31` (transformation, urgency), Muted Gold `#B08A46` (premium, milestones).

#### Image Slides Mode (alternate output)

When the user asks for **slide images** (not HTML), or says "generate slide images", "image deck", "slide PNGs", or wants slides as individual image files for social media sharing — use this mode instead of the HTML pipeline.

Image slides are optimized for **reading and sharing**, not live presentation: each slide is self-explanatory without verbal commentary, with logical flow when scrolling. Output is a set of PNG image files plus optional PPTX/PDF merge.

**Style auto-selection by content signals:**

| Content Signals | Preset |
|---|---|
| tutorial, education, beginner | sketch-notes |
| architecture, system, data, technical | blueprint (default) |
| executive, minimal, clean | minimal |
| saas, product, dashboard | notion |
| investor, quarterly, corporate | corporate |
| launch, marketing, keynote | bold-editorial |
| entertainment, gaming, atmospheric | dark-atmospheric |
| biology, chemistry, medical | scientific |
| history, heritage, vintage | vintage |
| lifestyle, wellness, travel | watercolor |

**Workflow:**
1. Analyze content signals, auto-recommend style + slide count
2. Ask user to confirm style, audience, slide count, and whether to review outline/prompts before generating
3. Generate `outline.md` with per-slide titles, types, and layouts
4. Generate prompt files in `prompts/` (one per slide). MUST save all prompts before any image generation
5. Generate slide images sequentially using a shared session ID for style consistency; auto-retry once on failure
6. Merge into PPTX and PDF

**Partial workflows:** `--outline-only`, `--prompts-only`, `--images-only`, `--regenerate N` (regenerate specific slides).

#### Chart Anti-Patterns (enforce at generation time)

**Wrong chart type:**
- Pie/donut with more than 5 categories -> switch to horizontal bar chart
- Line chart for non-sequential category comparison -> use bar chart
- Bar chart for continuous time series with many points -> use line chart

**Color & accessibility failures:**
- Color as the only differentiator between series — always add direct labels, patterns, or distinct shapes
- Red/green only pairs for positive/negative — use blue/orange or add icons
- Data elements vs background contrast below 3:1

**Label & axis mistakes:**
- Missing axis labels or units
- Rotated axis labels on a slide — switch to horizontal bar or abbreviate
- For <=7 data series: use direct labels on the chart instead of a legend
- Numbers without locale formatting (write "1,200" not "1200"; "$1.2M" not "$1200000")

**Data integrity:**
- Heavy gradient fills obscuring the data signal — keep chart backgrounds clean
- Decorative 3D effects on bars/pies (distorts perceived proportions — never use)
- Truncated Y-axis that exaggerates small differences without labeling the break
- Dual-axis charts that imply correlation: split into small multiples
- KPI cards with giant numbers but no context: add sparkline, delta, threshold, or comparison

**Quantitative slide pass:** For any slide where a chart is central, choose the chart from the data shape and reader task before styling it. Default to sorted bars, dot plots, sparklines, small multiples, slopegraphs, compact tables, and direct labels. Remove non-data ink before final scoring. Avoid pie, donut, dual-axis, radar, gauges, decorative 3D, detached legends, and chart chrome unless the user explicitly requires them.

### Phase 5: Polish & Review

#### Page Rhythm Rules

**P0 error — 3 or more consecutive same-visual-weight slides.** This is the single most common reason a deck fatigues the audience.

- "Hero" slides: cover, chapter curtain, suspense question, big quote — full-bleed, visually dominant
- "Non-hero" slides: data, left-text/right-image, image grid, pipeline, comparison, mixed layout
- Hero and non-hero must alternate. Never run 3+ non-hero slides without a hero break.
- Insert a high-impact slide every 3-4 content slides.
- Self-check: list every slide's layout type after drafting. Any run of 3+ same-weight types = fix it.
- For decks of 8+ slides: must include at least one high-contrast dark hero AND one light hero.

#### Font Hierarchy (3-level rule)

Non-negotiable. Mixing these up is the fastest way to look AI-generated:

| Role | Font type | Use for |
|---|---|---|
| Opinions / headings | Serif | H1, pull quotes, chapter titles, big statements |
| Body / information | Sans-serif | Body copy, bullet points, labels, descriptions |
| Metadata / numbers | Monospace | Page numbers, dates, data labels, technical metadata |

Never use serif for body copy or sans-serif for display headings. The contrast between serif headings and sans body is what creates the editorial feel.

#### Color Theory System

Color is not a decoration choice. It is a structural decision that must be validated before writing a single slide. Every DeckMason deck must pass a color theory check at three points: theme selection, slide generation, and final review.

##### The 60-30-10 Rule (mandatory)

Every slide must distribute color in a 60-30-10 ratio:

| Proportion | Role | What it covers |
|---|---|---|
| 60% | Dominant | Background, large surface areas, the visual ground |
| 30% | Secondary | Card backgrounds, section panels, supporting shapes, text blocks on the dominant |
| 10% | Accent | CTAs, highlighted data points, active states, key emphasis |

If a slide has two colors fighting for the 10% accent role, it fails. If the 30% secondary is absent, the slide reads flat. If the 60% dominant is too saturated, the deck feels aggressive.

**Validation method:** Squint at the slide. You should see three distinct tonal layers. If you see only two, add a secondary surface. If you see four or more, remove one accent.

##### Color Harmony (pick one scheme per deck)

Each theme in STYLE_PRESETS.md declares a harmony type. The agent must verify the chosen theme's palette matches one of these six schemes before generating:

| Harmony | Structure | Emotional signal | Example presets |
|---|---|---|---|
| **Monochromatic** | One hue, 3-5 lightness levels | Calm, focused, premium, minimal | Modern SaaS, Swiss Modern, Cobalt Grid |
| **Analogous** | 2-3 adjacent hues on the wheel | Harmonious, natural, comfortable | Warm Editorial, Watercolor Map, Dark Botanical |
| **Complementary** | Two opposite hues | High contrast, energetic, attention-grabbing | Brutalist, Raw Grid, 8-Bit Orbit |
| **Split-complementary** | One hue + two adjacent to its complement | Balanced tension, dynamic, less jarring than complementary | Bold Signal, Creative Voltage |
| **Triadic** | Three hues at 120 degree intervals | Vibrant, playful, equal weight | Soft Pastel, Split Pastel |
| **Neutral + accent** | Grays/blacks/whites + one chromatic hue | Professional, restrained, data-forward | Paper & Ink, Midnight Executive, Terminal Green |

**Rule:** Never mix harmony schemes within a single deck. If the user's brand has a triadic palette, the entire deck is triadic. Switching to monochromatic mid-deck breaks the visual system.

##### Contrast Ratios (enforce at generation time)

Every text-on-background pair must meet WCAG minimums:

| Text role | Minimum contrast | Target contrast |
|---|---|---|
| Body text on background | 4.5:1 | 7:1 (AAA) |
| Large text (>= 24px bold or >= 18.66px) | 3:1 | 4.5:1 |
| UI components (borders, icons, focus states) | 3:1 | 4.5:1 |
| Decorative text (disabled, placeholder) | exempt | exempt |

**Common failures:**
- White text on `#1a2744` (Cobalt Grid bg): ratio 9.8:1, PASS
- `#a0a0a8` secondary on `#0a0a0f` (dark themes): ratio 7.2:1, PASS
- `#00E3AA` accent on `#0A0A0A` (Modern SaaS dark): ratio 10.4:1, PASS
- `#00E3AA` accent on white `#ffffff`: ratio 1.8:1, FAIL, never use accent for body text on light backgrounds
- `#8a99b8` on `#1a2744`: ratio 4.8:1, PASS (borderline, use for secondary only)

**Rule:** If any text pair falls below 4.5:1, darken the text or lighten the background. Never use accent colors for body text on light backgrounds, they are designed for dark surfaces and CTAs.

##### Color Temperature and Mood

Every palette has a temperature. Mixing temperatures without intention creates visual noise.

| Temperature | Signal | Typical hues | Preset examples |
|---|---|---|---|
| **Warm** | Human, inviting, energetic, close | Reds, oranges, yellows, warm browns | Warm Editorial, Bold Signal, Broadside |
| **Cool** | Rational, distant, calm, technical | Blues, greens, blue-purples | Cobalt Grid, Midnight Executive, Deep Space |
| **Neutral** | Professional, timeless, balanced | Grays, warm whites, ink blacks | Swiss Modern, Paper & Ink, Kami Warm Editorial |

**Rule:** A deck can shift temperature between slides (warm hero, cool content) if it is intentional and serves the narrative arc. Accidental temperature drift (one slide warm, next cool for no reason) is an AI tell.

##### Saturation Discipline

Saturation is the most overused lever in AI-generated decks. The rule: less is more.

| Element | Max saturation (HSL) | Reason |
|---|---|---|
| Background dominant | 15% | High saturation backgrounds fatigue the eye within 3 slides |
| Secondary surface | 25% | Supports the dominant without competing |
| Accent / CTA | 70% | High enough to pop against the dominant |
| Text on dark | 10% | Saturated text on dark backgrounds glows and becomes unreadable |
| Text on light | 60% | Needs enough chroma to be distinguishable from gray |

**Saturation check:** If three or more elements on a slide exceed 60% saturation, the slide will look AI-generated regardless of layout quality. Reduce saturation on the least important element until at most two high-saturation elements remain.

##### Lightness Hierarchy (LCH mapping)

Within a single palette, establish a clear lightness ladder. Every color must occupy a distinct rung:

```
L100  Background (lightest)
L95   Card surface / elevated panels
L90   Secondary surface
L40   Primary text
L20   Headings / emphasis
L10   Background (darkest, for dark sections)
L60   Accent (mid-lightness so it works on both light and dark)
```

**Rule:** No two colors in the same palette should share the same lightness value. If they do, they will visually merge and the hierarchy collapses. Verify by converting key colors to HSL lightness values and checking for collisions.

##### Per-Slide Color Validation (run before delivery)

Before shipping, run this check on every slide:

```
1. Does this slide follow 60-30-10? (squint test: 3 visible tonal layers)
2. Does every text pair pass 4.5:1 contrast?
3. Is the harmony scheme the same as the rest of the deck?
4. Is the temperature intentional (not drifting)?
5. Are there max 2 high-saturation (>60%) elements?
6. Does the accent color appear only on the 10% role (CTAs, key data)?
7. Are no two colors sharing the same lightness rung?
8. Does the color serve the slide's emotional goal, not just look pretty?
```

If any answer is no, fix before delivery. Do not ship slides that fail color validation.

##### Color and Slide Type Pairing

Each slide type has a color behavior expectation. Breaking these creates dissonance:

| Slide type | Color behavior | Failure mode |
|---|---|---|
| Cover | Dominant background + accent on title only | Too many colors on the opening = no hierarchy |
| Big number | Number in accent, everything else muted | If the number is not the most chromatic element, it loses impact |
| Quote | Pull-quote in accent or heading color, background neutral | If the background competes with the quote, the words lose weight |
| Comparison | Split field: one side cool, one side warm (if intentional) | If both sides share the same palette, the comparison reads flat |
| Data/chart | Chart elements in accent, axes/labels in neutral | If chart colors are random, the data loses credibility |
| Closing | CTA in accent at 10%, everything else recedes | If the CTA doesn't pop, the audience doesn't act |

##### Custom Brand Palette Validation

When importing a brand (from PPTX, URL, or PDF), validate the extracted palette against color theory before using it:

1. **Classify the harmony** — is the brand monochromatic, analogous, complementary, etc.?
2. **Check the 60-30-10 distribution** — does the brand have a clear dominant, secondary, and accent?
3. **Verify contrast** — do the brand's text-on-background pairs meet 4.5:1?
4. **Identify the temperature** — warm, cool, or neutral?
5. **Map to lightness rungs** — assign each brand color to a rung in the LCH ladder

If the brand palette violates color theory (e.g., two accents at the same lightness, body text failing contrast), flag it to the user and suggest a corrected version that preserves the brand identity while fixing the structural issue.

#### Design Anti-Patterns ("AI Tells")

**Content:**
- Startup jargon: "Seamless", "Unleash", "Elevate", "Nexus", "Transform your workflow" — rewrite with specific claims
- Rounded fake numbers: "99%", "50%", "10x" — use "47.2%", "8.3x", "3 of 4 customers"
- Generic placeholder names: "John Doe", "Jane Smith", "Company X"
- Title Case On Every Slide Heading — use sentence case; assertion headings are complete sentences
- "Quote slop": fabricated user testimonials — leave as `[PLACEHOLDER: real quote from user]`
- "Data slop": metric cards with invented numbers — leave as placeholder or ask user
- Banned words: `unleash`, `elevate`, `revolutionize`, `seamless`, `transformative`, `next-gen`, `powerful solution`, `transformative platform`

**Typography:**
- Banned fonts for professional decks: Inter, Roboto, Arial, Open Sans, Helvetica, Space Grotesk — use the theme's specified font or Geist, Cabinet Grotesk, DM Sans
- No variation in font weight across the deck (use bold headings, regular body, medium labels)
- Title-to-body ratio minimum: heading font size must be at least 2.5x body; 3x is the target
- Slide-scale minimums: body text never below 24px (28-36px ideal); section titles 80-160px; hero headlines 180-240px at 1920x1080

**Color:**
- "The LILA BAN": purple/blue/neon gradient combinations — applies to all decks except explicitly creative/entertainment contexts
- Cyberpunk neon ban: dark blue `#0D1117` background + neon glow/bloom is the most saturated AI-design cliche. Only override if the user explicitly requests a hacker/terminal aesthetic
- Multiple competing accent colors — one accent per deck, max
- Pure black (#000000) as a background — use near-black with slight hue
- Pure white (#FFFFFF) as a background — use paper-white with slight warm or cool tint
- Gradient rainbow fills on backgrounds — single-color-family only if gradient is needed
- Warm cream as the default "premium" background is now a visible AI tell. Use it only when tied to the subject, brand, or reference
- 60-30-10 violation: two colors fighting for the 10% accent role on the same slide
- Saturation overload: 3+ elements exceeding 60% HSL saturation on one slide
- Lightness collision: two palette colors sharing the same LCH lightness rung, causing visual merge
- Temperature drift: one slide warm, next slide cool, with no narrative reason
- Harmony mixing: switching color schemes mid-deck (e.g., monochromatic cover, triadic content slides)
- Body text in accent color on light backgrounds (accent colors are designed for dark surfaces and CTAs, not body text)

**Layout:**
- Rounded card + left colored border accent — the most recognizable AI slop pattern in decks; replace with background contrast, weight contrast, or plain divider
- Emoji as icons — use a real icon library (Lucide, Phosphor) or leave as placeholder
- SVG-drawn illustrations — a gray rectangle with "illustration placeholder" is infinitely better than AI-drawn SVG clip art
- Run the second-order slop check: if the deck avoids purple SaaS by becoming generic editorial, generic Swiss, or generic terminal, it still failed
- Name one unexpected but fitting decision before final render: unusual crop, asymmetrical rhythm, object-led metaphor, hard typographic contrast, or a distinctive proof treatment

**30% Copy Cut Rule:** After drafting any slide, ask: "Would cutting 30% of the copy make this clearer?" If yes, cut it.

**Data Slop Rule:** Never add statistics, icons, or supporting numbers the user did not provide. Never pad a slide with a third bullet just because two feels light. If a slide feels empty, solve it with layout and visual rhythm, not invented content. Ask before adding material.

#### Industry Theme Constraints

Check the audience domain first. These are banned combinations:

| Audience / Industry | Banned theme choices |
|---|---|
| Banking / Fintech / Legal | Neon Cyber, Gradient Wave — no neon, no playful gradients |
| Healthcare / Medical | Dark themes (Deep Space, Midnight Executive, Terminal Green) — dark feels unsafe |
| Wellness / Beauty / Lifestyle | High-contrast dark themes, cold blues, aggressive CTAs |
| Developer tools / Technical | Warm editorial themes, serif-heavy styles |
| Enterprise / Corporate | Brutalist, Y2K, heavy gradient themes |
| Education / Nonprofit | Neon or overly minimal cold themes |

When the recommended theme conflicts with the industry, fall back to Swiss Modern or Paper & Ink.

#### Voice Guidance by Deck Type

Adjust density, tone, and emphasis based on context:

**Fundraising / LP Decks** — LPs have seen hundreds of decks and pattern-match fast. They care about team track record, strategy differentiation, fund economics, and risk management. Acknowledge the messy middle, then explain why your team navigates it. Specificity is credibility: named companies, real outcomes, concrete numbers.

**Startup Pitch Decks** — Lead with the problem (make them feel it), then solution. You have ~30 seconds per slide. TAM slide is where most decks lose credibility — be rigorous. The team slide should be a memorable moment: why are YOU the ones to do this?

**Internal / Board Presentations** — Higher density is acceptable; these often function as read-ahead documents. But still one idea per slide and clear hierarchy. Substance over style, clarity always.

**Conference / Keynote** — Higher production value expected. Plan for re-engagement every 5-7 slides. Script but don't teleprompter: rehearse until it sounds natural.

**Sales / Marketing Decks** — Center the customer's world, not the product's features. Open by showing you understand their problem before mentioning your solution. Close with proof, not promises.

#### Designer's Eye Critique (5-Dimension Rubric)

After generation, optionally run this critique before delivery. Scores each dimension 0-10 and produces a Keep / Fix / Quick Wins punch list.

**1. Philosophy Coherence** — does every detail serve the chosen aesthetic? (9-10: every element has design rationale. 1-2: theme ignored.)

**2. Visual Hierarchy** — does the eye travel in the intended order? Squint test: close your eyes halfway and see whether hierarchy survives. At least 2.5x size ratio between heading and body; 3x is the target.

**3. Craft Quality** — pixel precision: consistent spacing system (8pt grid), max 4 colors, max 2 font families, edge alignment.

**4. Functionality** — every element earns its place. Delete test: "if I remove this, does the deck get worse?" If not, remove it.

**5. Originality** — not a template. Avoids all cliches. Has one "unexpected but fitting" decision.

**Critique output format:**
```
## Design Critique
Overall: X.X/10
- Philosophy Coherence: X/10 — [one sentence]
- Visual Hierarchy:     X/10 — [one sentence, squint test result]
- Craft Quality:        X/10 — [spacing/font/color issues]
- Functionality:        X/10 — [elements that don't earn their space]
- Originality:          X/10 — [cliches spotted / novel moves]
Keep: [what's working]
Fix (priority order):
  1. [name] — current -> fix -> why
Quick Wins (if only 5 min): [top 3]
```

#### Narrative Spine and Slide Rhythm

**Through-line concept:** Every deck needs a spine — a single concept that threads through all slides and makes the presentation feel authored rather than assembled. A deck with a concept feels like someone made a deliberate choice. A deck without one feels like slides happened.

Examples of through-line concepts:
- Tool / precision instrument — every slide is a specification, calibrated and purposeful
- Archive / dossier — information presented as evidence and classification
- Journey / pilgrimage — the audience is moving through a narrative arc
- Stage / spotlight — each slide gets a moment, then yields

Name the concept in Phase 0 and use it as a filter throughout. At review, ask whether each slide's visual and copy choices serve the concept or contradict it.

**Slide density rhythm:** Not every slide should carry the same visual weight. A deck where every slide is equally dense fatigues the audience before the pitch lands.
- Some slides content-rich: evidence, data, comparisons — high information density
- Some slides minimal/calm: a single number, a pull quote, a one-sentence assertion
- Dense slides separated by lighter ones — never stack three information-heavy slides back-to-back without a breath

### Phase 6: Export

Generate all deliverable formats.

**Step 6.1: PPTX Export (two paths)**

Path A — python-pptx (image-based, simpler):
```bash
python3 scripts/pptx_export.py [presentation].html --output [presentation].pptx
```
Handles slide backgrounds from CSS, image embedding, typography sizing, layout detection from CSS classes, speaker notes from HTML comments, 16:9 widescreen.

Path B — pptxgenjs (editable text boxes, better for PowerPoint editing):
```javascript
import pptxgen from 'pptxgenjs';

const prs = new pptxgen();
document.querySelectorAll('.slide').forEach((slide, i) => {
  const pSlide = prs.addSlide();
  const sw = slide.offsetWidth, sh = slide.offsetHeight;
  slide.querySelectorAll('h1,h2,h3,p,li').forEach(el => {
    const s = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    pSlide.addText(el.innerText, {
      x: `${(r.left / sw) * 100}%`,
      y: `${(r.top / sh) * 100}%`,
      w: `${(r.width / sw) * 100}%`,
      h: `${(r.height / sh) * 100}%`,
      fontSize: parseFloat(s.fontSize) * 0.75,  // px -> pt
      bold: parseInt(s.fontWeight) >= 600,
      color: s.color.replace(/[^\d,]/g, '').split(',').slice(0,3)
        .map(n => parseInt(n).toString(16).padStart(2,'0')).join(''),
    });
  });
});
prs.writeFile({ fileName: 'presentation.pptx' });
```
Key rules: convert px to pt (`fontSizePt = fontSizePx * 0.75`), convert CSS `rgb()` to hex manually, run in a browser context after the HTML deck is rendered so `getBoundingClientRect()` returns real layout positions.

**Step 6.2: PDF Export (via headless Chrome)**
```bash
chrome --headless --print-to-pdf=[presentation].pdf --run-all-compositor-stages-before-draw --virtual-time-budget=5000 [presentation].html
```
Or use Playwright for programmatic export with wait-for-animation support.

**Step 6.3: Delivery**

Provide all files:
- `[name].html` — Full experience with animations
- `[name].pptx` — Editable in Google Slides/PowerPoint
- `[name].pdf` — Shareable, print-ready

---

## Style Presets

See `STYLE_PRESETS.md` for 31 curated styles (11 original + 20 extended):

**Original 11:** Modern SaaS (default), Neon Cyber, Midnight Executive, Deep Space, Terminal Green, Paper & Ink, Swiss Modern, Soft Pastel, Warm Editorial, Brutalist, Gradient Wave

**Extended 20:** Bold Signal, Electric Studio, Creative Voltage, Dark Botanical, Notebook Tabs, Pastel Geometry, Split Pastel, Vintage Editorial, Liquid Glass Bento, Engineering Blueprint, Watercolor Map, Golden Serif Quote, Chalkboard Lesson, Exploded Layer Stack, Hyperreal Product, Summary Infographic, plus more.

**Kami Warm Editorial** — a full editorial spec for print-quality, paper-like decks. See the Kami section in `STYLE_PRESETS.md` for complete CSS tokens, slide-scale rules, section header component, code card component, and deck recipe rules.

Full CSS and font details in `STYLE_PRESETS.md`.

---

## Theme Variation Protocol

When the user has not pre-selected a theme, generate **3 distinct visual directions** before locking one:

- Direction A: safe and professional (Swiss Modern or Paper & Ink equivalent)
- Direction B: bold and signal-driven (high-contrast, strong type)
- Direction C: unexpected — pick something from the mood-to-preset table that surprises but fits

Show all three as mini previews (cover + 1 content slide each). The goal is atomic variations the user can mix and match, not "the right answer." Only then finalize the full deck in the chosen direction.

Each direction must represent a genuinely different aesthetic axis, not just color-swaps of the same layout.

---

## Design Philosophy School System (when brief is vague)

When the user's brief is too vague to pick a theme — "make something nice," "give me options," no brand provided — enter **Design Direction Advisor mode** instead of defaulting to a generic preset. Recommend 3 directions, each from a **different school**, never two from the same.

The 5 schools and their PPT fit:

| School | Examples | PPT Fit |
|---|---|---|
| Information Architecture | Pentagram, Swiss Grid, Fathom Data | Rigorous, typographic-first, evidence-heavy |
| Motion Poetics | Locomotive Scroll, Field.io | Bold, kinetic, scroll-driven |
| Minimalism | Build Studio, Experimental Jetset, Kenya Hara | High whitespace, subtle weight contrast, zen |
| Experimental Avant-garde | Sagmeister & Walsh, Irma Boom | Asymmetric, rule-breaking, high creativity |
| Technical Craft | Takram, Information Architects | System-like, precise, engineer-audience |

**Core heuristics per school:**
- **Pentagram/Swiss**: extreme typographic hierarchy, Helvetica/Univers family, 60%+ whitespace, black + 1 accent
- **Build Studio luxury**: 70%+ whitespace, subtle weight contrast (200-600), one strategic accent, breathing rhythm
- **Kenya Hara Eastern minimal**: radical emptiness, a single kanji-scale idea per slide, max 3 elements per surface
- **Sagmeister experimental**: a single visual metaphor for the whole deck, rule-breaking layout, typography as graphic element
- **Takram technical craft**: 8pt grid system, mathematical spacing, cold professional palette (grays + navy + one highlight)

For each direction, state the school name, flagship designer reference, 3 gestalt keywords, and the specific CSS color + font choices. Then generate 3 demo mini-previews in parallel before the user chooses.

---

## Cinematic Slide Mode

Use when a slide needs to demonstrate a workflow, product sequence, or process, not just describe it. Transforms a static "step 1 -> step 2" flow into a scene-driven animation that feels like a product launch film clip.

**When to apply:**
- User asks for an "animated demo slide," "workflow animation," "product walkthrough slide," or "video-style slide"
- Any slide that describes a multi-step process where showing is more powerful than telling
- Keynote or conference decks where one slide needs a "wow moment"

**Dual-layer architecture (default):**
- Layer 1 — Static Dashboard (always visible): complete, readable workflow diagram
- Layer 2 — Cinematic Overlay (triggered by a play button): 22-second film clip, auto-fades back to Layer 1 when complete

**5-scene structure (22 seconds total — tested golden length):**

| Scene | Name | Duration | What it shows |
|---|---|---|---|
| 1 | Invoke | 3-4s | User input trigger, typewriter terminal entry |
| 2 | Process | 5-6s | Core workflow visualization, unique visual language per demo |
| 3 | Result/Insight | 4-5s | The key output, extracted, visualized |
| 4 | Output | 3-4s | The artifact: file, diff, number |
| 5 | Hero Reveal | 4-5s | Big type + value proposition, the moment people screenshot |

Why 22 seconds: under 18s the audience hasn't settled; over 25s they lose attention.

**Visual language rule:** each demo must be visually distinct. If two workflow demos look identical with the text swapped, the design failed. Give each demo its own visual metaphor.

**Implementation rules:**
- Use a single `requestAnimationFrame(render)` loop with a global timeline object, not chained `setTimeout` calls
- Easing: always `expoOut` or `cubic-bezier(0.16, 1, 0.3, 1)`. Never `linear`
- Debug tools: `?seek=N` freezes render at second N; `?autoplay=1` skips the overlay for screenshot capture; a small REPLAY button top-right

---

## Speaker Notes Overlay (HTML Decks)

Every HTML presentation must wire `N` to toggle a speaker notes panel. This is absent from most AI-generated decks and is the single most-requested missing feature after delivery.

```javascript
const NOTES = {
  1: "Opening: state the problem in one sentence. Pause for 3 seconds.",
  2: "Evidence slide: walk through the three numbers left to right.",
};

const overlay = document.createElement('div');
overlay.id = 'speaker-notes';
overlay.style.cssText = `
  display: none; position: fixed; bottom: 0; left: 0; right: 0;
  background: rgba(0,0,0,0.85); color: #fff;
  font: 18px/1.6 system-ui, sans-serif;
  padding: 20px 32px; z-index: 9999;
  border-top: 2px solid rgba(255,255,255,0.15);
  max-height: 30vh; overflow-y: auto;
`;
document.body.appendChild(overlay);

let notesVisible = false;
function updateNotes(slideIndex) {
  overlay.textContent = NOTES[slideIndex] || '(no notes)';
}
document.addEventListener('keydown', e => {
  if (e.key === 'n' || e.key === 'N') {
    notesVisible = !notesVisible;
    overlay.style.display = notesVisible ? 'block' : 'none';
    if (notesVisible) updateNotes(currentSlide);
  }
});
```

**Rules:**
- `N` key toggles — no button required
- Notes overlay floats above the scaled canvas; never inside it
- Max height `30vh` so the deck remains visible behind it
- Auto-update content when the slide changes
- Include a footnote on the title slide: "Press N to toggle speaker notes"

---

## Animation Patterns for HTML Presentations

Motion is optional in decks. Use it only for live HTML review, keynote-style playback, or a specific walkthrough moment. PDF, PPTX, and Google Slides imports are static snapshots, so every slide must work as a still frame.

| Feeling | Animation approach |
|---|---|
| Dramatic/Cinematic | One authored hero sequence |
| Techy/Futuristic | Grid reveals, masked type, controlled glow |
| Playful/Friendly | Light press feedback, small stagger, no bounce |
| Professional/Corporate | Subtle fast animations 200-300ms |
| Calm/Minimal | Static or near-static, high whitespace |
| Editorial/Magazine | Staggered text reveals when presenting live |

**Standard entrance animation:**
```css
.reveal {
    opacity: 1;
    transform: translateY(0);
    transition:
        opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide:not(.visible) .reveal { opacity: 0; transform: translateY(14px); }
.slide.visible .reveal { opacity: 1; transform: translateY(0); }
```

Use Intersection Observer to add `.visible` class when slides enter viewport — never apply animations via scroll event listeners (performance).

**Deck motion guardrails:**
- No `transition: all`
- No `scale(0)` entrances
- No bounce or elastic easing in professional decks
- No animation on keyboard navigation. Arrow, space, and number keys should switch slides immediately
- No hidden-by-default reveal content in decks that will be exported. The static slide must contain the final readable state
- Add a `prefers-reduced-motion` path for every HTML deck with motion

---

## HTML Slide DOM Rules

**Never use `scrollIntoView()`** in HTML presentations — it corrupts the scroll-snap navigation system. Use direct `.scrollTop` or `scrollTo()` on the container instead.

**Slide labels are 1-indexed.** Use `data-screen-label="01 Cover"`, `"02 Agenda"`, etc. When the user says "slide 5" they mean label `"05"`, never array index `[4]`.

**System declaration before building:** Before writing HTML, vocalize the layout system you will use — which background colors, which slide layout for section headers/titles/images. State it out loud as "junior designer reporting to manager." This prevents layout drift across slides.

---

## HTML Slide Template Library

When generating HTML presentations, prefer cloning from the **beautiful-html-templates** library rather than improvising CSS per deck. The library has 32 production-quality HTML slide templates indexed in `index.json` with structured metadata per template.

**Library location:** `https://github.com/zarazhangrui/beautiful-html-templates`

**Index manifest:** `https://raw.githubusercontent.com/zarazhangrui/beautiful-html-templates/main/index.json`

Each entry in `index.json` has: `slug`, `name`, `tagline`, `mood[]`, `occasion[]`, `tone[]`, `formality`, `density`, `scheme`, `best_for`, `avoid_for`, `slide_count`.

### 6-Step Clone Workflow

1. Ask about **occasion and mood** before picking any template — not industry
2. Read `index.json`, match mood + occasion against template metadata, pick 3 diverse candidates
3. Build title-slide previews for each candidate using the user's actual content (not placeholders)
4. Open all 3 previews in browser, send paths to user for comparison
5. Once chosen, clone the template and adapt every slide; design missing layouts from scratch using the template's existing design system
6. Open final deck in browser, send file path with a one-line rationale

### Tone-First Matching Principle

**Lead with tone, not industry.** Match the *feeling* the user wants, not an assumed use case. A "tech pitch" could be Cobalt Grid (studied, editorial) or 8-Bit Orbit (retro-tech, rebellious) or Raw Grid (scrappy-confident, brutalist) depending on the speaker's register.

### Key Rules When Using Templates

- **Preserve the design system:** fonts, color palette, layout grid, CSS classes, decorative elements, and navigation runtime
- **Replace user content only:** headlines, body copy, stats, names, dates, image placeholders
- **Never mix layouts from different templates** — if a layout is missing, design it using the existing template's system
- **Never recolor or substitute fonts** — pick a different template instead
- **Never "modernize" an existing template** — its aesthetic is intentional

---

## Brand Import Workflow

Extract brand tokens from existing assets and auto-generate custom style presets.

### From PPTX (PowerPoint Files)

1. Unzip the file: `unzip -q company-deck.pptx -d pptx_extracted/`
2. Parse `ppt/theme/theme1.xml` for `<a:clrScheme>` (dk1, lt1, accent1-6) and `<a:fontScheme>` (majorFont, minorFont)
3. Parse `ppt/slideLayouts/slideLayout1.xml` for `<p:bg>` background styles
4. Map extracted values to CSS variables: dk1 -> --text-primary, lt1 -> --bg-primary, accent1 -> --accent, majorFont -> --font-display, minorFont -> --font-body

### From Website URL

1. Fetch the page: `curl -s https://linear.app > website.html`
2. Extract CSS color variables from `:root` blocks and linked CSS
3. Identify primary/secondary/accent colors (priority: explicit brand variables, button/link colors, header background, logo color)
4. Extract font families from CSS `font-family` declarations
5. Capture logo if accessible (SVG logos, favicon for color reference)

### From Brand Guidelines PDF

1. Read the PDF content, look for "Primary color", "Brand color", hex codes, RGB values, CMYK
2. Extract typography: "Primary typeface", headline vs body font distinctions
3. Note spacing/sizing rules if specified (logo clearspace, margin preferences, grid systems)
4. Apply extracted values to the standard preset format

### Custom Preset Template

```css
/* Custom Brand Preset: [Company Name] */
/* Auto-generated from: [source] */
:root {
    --bg-primary: #[from lt1 or website bg];
    --bg-secondary: #[lightened primary];
    --bg-dark: #[from dk1 or dark section];
    --text-primary: #[from dk1 or body text];
    --text-secondary: #[muted version];
    --text-on-dark: #[from lt1 or white];
    --accent: #[from accent1 or primary brand];
    --font-display: '[majorFont]', sans-serif;
    --font-body: '[minorFont]', sans-serif;
    --slide-padding: 4rem;
}
```

---

## Grid Ratios (for two-column layouts)

| Name | Left : Right | Best for |
|---|---|---|
| 7:5 | ~58% / 42% | Text-heavy left, supporting image right |
| 6:6 | 50% / 50% | Equal-weight comparison (before/after) |
| 8:4 | ~67% / 33% | Dominant content + caption/sidebar |

---

## Image Naming Convention

When the user will provide images, tell them the convention upfront:
- Format: `{zero-padded-page-number}-{semantic-name}.{ext}`
- Examples: `01-cover.jpg`, `04-comparison.png`, `07-dashboard.png`
- Zero-pad so files sort correctly in any file browser
- Semantic name: English, short, content-specific — not "photo1" or "image"
- JPG for photos/screenshots, PNG for UI elements with transparency
- Same-name overwrite = safest way to swap images without touching the HTML

---

## PPT-to-HTML Conversion

When the user provides a `.pptx` file and wants it converted to HTML:

1. Extract content with `python-pptx`: titles, body text, images, speaker notes
2. Confirm extracted slide titles, content summaries, and image counts with the user
3. Proceed to style selection (theme variation protocol — 3 directions)
4. Generate HTML preserving all text, images, slide order, and speaker notes

---

## HTML Presentation Delivery Options

After generating an HTML presentation, offer these sharing options:

**Deploy to Vercel (live URL):**
```bash
npx vercel --version  # check if installed
# Deploy the HTML file for a live, shareable URL
```
- Free tier, works on any device
- Redeploying overwrites same URL

**Export to PDF (static snapshot via Playwright):**
- Renders at 1920x1080 (standard) or 1280x720 (compact)
- Animations not preserved — static snapshot only
- Requires `.slide` class on all slide elements

---

## Swiss International Strict Mode

Use when the user asks for Swiss, International Typographic, editorial grid, ultra-clean, poster-like, Vignelli-inspired, or Helvetica-style deck design.

Rules:
- Use one anchor color for the whole deck. After selecting the theme, do not invent custom hex colors
- Build on a visible grid first, preferably 16 columns for widescreen decks
- Use extreme type contrast: very large display type paired with restrained body type
- Large type should use lighter weight where the font supports it
- Prefer straight pure-color blocks, hard edges, and generous whitespace
- Avoid radius, shadows, glass, gradients, soft blobs, and decorative chrome
- Avoid WebGL, 3D, and dynamic backgrounds in this mode
- Generate AI images as raw assets only. Do not bake slide text, borders, logos, page numbers, or template framing into the image

---

## Editorial Web Deck Mode

Use when the user asks for a magazine-style, keynote-style, personal-talk, launch, demo day, or horizontal swipe web deck. Keeps the normal story discipline but adds stricter HTML deck implementation rules:

- Build from a runnable single-file HTML template instead of improvising per-slide CSS
- Plan the light/dark/hero rhythm before writing slides
- Verify every layout class exists in the template before using it
- Use fixed image slot ratios before generating or inserting images
- Keep generated images as assets only, never complete slides with chrome baked into the image
- Run browser preview plus grep checks before delivery

---

## Memorable Moment

Flag at least one slide that will stick. Five types — pick one:
1. **Dramatization** — a reveal, demo, or before/after
2. **Sound bite** — a phrase crisp enough to become the headline
3. **Evocative visual** — a single number or image that imprints
4. **Emotive story** — a specific story that transfers feeling
5. **Shocking stat** — a number made visceral and tangible

The moment must reinforce the thesis, not decorate it.

---

## Self-Check Before Delivery

Run this checklist before shipping:

**Narrative:**
- Can you state the thesis in one sentence?
- Is there contrast between "what is" and "what could be"?
- Is the audience the hero?
- Is there a clear CTA at the end?
- Does each slide have exactly one idea?
- Does the opening hook?

**Visual:**
- Is it clear what to read first on every slide? (squint test)
- No two consecutive slides share the same visual weight?
- Headings are assertion sentences, not topic labels?
- Font weight varies across the deck (bold headings, regular body, medium labels)?
- Title-to-body ratio is at least 2.5x?

**Color theory:**
- Does every slide follow the 60-30-10 ratio? (squint test: 3 visible tonal layers)
- Does every text pair pass 4.5:1 contrast? (body text, large text, UI elements)
- Is the harmony scheme consistent across the entire deck?
- Is the color temperature intentional (no accidental drift between slides)?
- Are there max 2 high-saturation (>60%) elements per slide?
- Does the accent color appear only on the 10% role (CTAs, key data, active states)?
- Are no two colors sharing the same lightness rung in the LCH ladder?
- Does each slide type follow its color behavior expectation (cover, big number, quote, comparison, data, closing)?
- For brand-imported palettes: was the palette validated against color theory before use?

**Content:**
- No filler copy, no banned words?
- No invented statistics or fabricated quotes?
- Every word earns its space? (30% copy cut rule)
- No emoji as icons?
- No generic placeholder names?

**Technical:**
- Alt text on all images?
- Keyboard nav (arrows, space, page up/down)?
- `prefers-reduced-motion` path?
- Speaker notes overlay wired to N key?
- No `scrollIntoView()` in navigation?
- No `overflow: hidden` to hide content?
- All font sizes use `clamp()`?
- Canvas is fixed 1920x1080 with letterbox scaling?

**Taste:**
- Name the slide that best expresses the deck's point of view
- Name the slide most likely to be forgotten. Improve or cut it
- Name one unexpected but fitting decision before final render

---

## File Structure

```
presentation.html          # Self-contained presentation
presentation.pptx          # PowerPoint export
presentation.pdf           # PDF export
presentation-assets/       # Images, if any
    ├── 01-cover.jpg
    ├── 04-comparison.png
    └── 07-dashboard.png
```

---

## Navigation & Interactions

Every presentation includes:
- **Keyboard:** Arrow keys, Page Up/Down, Space, N (speaker notes)
- **Touch:** Swipe left/right
- **Mouse:** Scroll wheel, click navigation
- **Progress:** Visual indicator of slide position
- **localStorage:** Persists current slide index across refreshes

---

## Example Sessions

### AI-Generated Pitch Deck
```
User: "Create a pitch deck for my AI startup"
-> Pre-flight scoping (4 questions)
-> Brief (audience, arc, ask, success)
-> Outline with slide types -> Get approval
-> Write HTML with varied layouts + chosen theme
-> Generate custom product mockup image
-> Audit and apply fixes (page rhythm, AI tells, budget math)
-> Export PPTX + PDF
-> Deliver all files
```

### User Content to Slides
```
User: "Turn these notes into a presentation: [content]"
-> Structure into slide outline (Pyramid Principle)
-> Pick style (3-direction preview)
-> Generate HTML with Canvas Scale Architecture
-> Add relevant images (7 named roles)
-> Export formats
-> Self-check before delivery
-> Deliver
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

## Troubleshooting

| Issue | Solution |
|---|---|
| PPTX export fails | Check `python-pptx` installed: `pip3 install python-pptx` |
| Images not in PPTX | Verify image paths are relative to HTML file |
| Fonts not loading | Check Fontshare/Google Fonts URL |
| Animations not working | Verify Intersection Observer is running |
| PDF has blank pages | Wait for animations to settle before printing |
| Slide content overflows | Split the slide. Never use overflow:hidden to hide content |
| Text too small on projector | Body minimum 28px at 1920x1080. Never below 24px |
| Deck looks AI-generated | Run the Anti-Patterns checklist and Designer's Eye critique |
| Slides feel monotonous | Check page rhythm: no 3+ consecutive same-weight slides |
