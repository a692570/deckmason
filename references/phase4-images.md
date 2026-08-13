# Phase 4: Images and Charts

Summary: Slide Background Image System with 7 named image roles, image type taxonomy, series consistency rules, color system for slide images, Image Slides Mode (alternate PNG output), and Chart Anti-Patterns enforced at generation time.

---

## Slide Background Image System

When a slide needs a visual asset behind the text, use this system. Slide images are distinct from HTML themes: they are the art layer beneath editable text.

**Default output spec:** 3840x2160 (fallback: 1920x1080), horizontal 16:9, 25-35% clean text-safe space, minimal baked-in text.

### 7 named image roles

| Role | Purpose | Composition rule |
|---|---|---|
| Cover / Opening Hero | Stop attention; establish emotional premise | One dominant hero object, cinematic, clear title-safe zone |
| Section Divider | Reset rhythm between chapters | Simplified subject, more negative space than cover |
| Concept Visualization | Explain one abstract idea through one visual metaphor | One metaphor + one structural support layer |
| Comparison Plate | Visualize tension, tradeoff, or before/after | Split field or asymmetric confrontation |
| Data Backdrop | Support a stat or chart-heavy slide | Subdued structure, clean title area, calm edges |
| System / Workflow Plate | Visualize flow, hierarchy, or architecture | Large blocks, deliberate connectors, few node types |
| Closing Poster | Compress the deck's final judgment | Bold, simple, emotionally resolved |

### Pre-generation checklist (run before every image prompt)

1. What is the slide role?
2. What is the single-sentence thesis for this slide?
3. Where is the safe zone? (left-safe, right-safe, or top-safe)
4. What should the viewer feel in one second?
5. What must be avoided?

### Image type taxonomy (always pick the type before generating)

| Type | Ratio | Composition rule |
|---|---|---|
| Documentary photo | 16:9 or 16:10 | Real-scene feeling; no staged stock look |
| Infographic / flow diagram | 16:9 (match slide width) | Information graphic only, no baked-in chrome |
| UI scene shot / screenshot | 16:10 | Product UI or screen capture, redesigned for editorial consistency |
| System relationship diagram | 16:9 | Architecture, network, or org topology; nodes and edges only |
| Data callout | Tall narrow (portrait) | Single number or micro-chart; sits beside copy |
| Multi-photo collage | Wide slot, consistent heights | 2-4 photos cropped to identical height, horizontal |
| Full-slide concept render | Match final output | Static concept, cover, section break, or carousel frame |

### Series consistency rule

Across a deck, images must belong to one visual system via consistent palette, light direction, texture, geometry, framing, and contrast behavior. Series consistency matters more than single-image cleverness. Declare the system variables upfront and lock them for the full set.

### Color system for slide images

Use a presentation palette, 1 base mode + 1 accent family. Core neutrals: Paper White `#F6F1E8` (warm off-white for light decks), Ink Black `#111317` (dark anchor), Graphite `#2A2F36` (surfaces/shadows), Stone Gray `#A8A29A` (separators). Signal accents (pick one): Steel Blue `#345D7E` (rational, technical), Signal Orange `#D96A31` (transformation, urgency), Muted Gold `#B08A46` (premium, milestones).

---

## Image Slides Mode (alternate output)

When the user asks for **slide images** (not HTML), or says "generate slide images", "image deck", "slide PNGs", or wants slides as individual image files for social media sharing, use this mode instead of the HTML pipeline.

Image slides are optimized for **reading and sharing**, not live presentation: each slide is self-explanatory without verbal commentary, with logical flow when scrolling. Output is a set of PNG image files plus optional PPTX/PDF merge.

### Style auto-selection by content signals

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

### Workflow

1. Analyze content signals, auto-recommend style + slide count
2. Ask user to confirm style, audience, slide count, and whether to review outline/prompts before generating
3. Generate `outline.md` with per-slide titles, types, and layouts
4. Generate prompt files in `prompts/` (one per slide). MUST save all prompts before any image generation
5. Generate slide images sequentially using a shared session ID for style consistency; auto-retry once on failure
6. Merge into PPTX and PDF

### Partial workflows

`--outline-only`, `--prompts-only`, `--images-only`, `--regenerate N` (regenerate specific slides).

---

## Chart Anti-Patterns (enforce at generation time)

### Wrong chart type

- Pie/donut with more than 5 categories: switch to horizontal bar chart
- Line chart for non-sequential category comparison: use bar chart
- Bar chart for continuous time series with many points: use line chart

### Color and accessibility failures

- Color as the only differentiator between series: always add direct labels, patterns, or distinct shapes
- Red/green only pairs for positive/negative: use blue/orange or add icons
- Data elements vs background contrast below 3:1

### Label and axis mistakes

- Missing axis labels or units
- Rotated axis labels on a slide: switch to horizontal bar or abbreviate
- For <=7 data series: use direct labels on the chart instead of a legend
- Numbers without locale formatting (write "1,200" not "1200"; "$1.2M" not "$1200000")

### Data integrity

- Heavy gradient fills obscuring the data signal: keep chart backgrounds clean
- Decorative 3D effects on bars/pies (distorts perceived proportions, never use)
- Truncated Y-axis that exaggerates small differences without labeling the break
- Dual-axis charts that imply correlation: split into small multiples
- KPI cards with giant numbers but no context: add sparkline, delta, threshold, or comparison

### Quantitative slide pass

For any slide where a chart is central, choose the chart from the data shape and reader task before styling it. Default to sorted bars, dot plots, sparklines, small multiples, slopegraphs, compact tables, and direct labels. Remove non-data ink before final scoring. Avoid pie, donut, dual-axis, radar, gauges, decorative 3D, detached legends, and chart chrome unless the user explicitly requires them.
