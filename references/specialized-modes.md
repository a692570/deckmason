# Specialized Modes

Summary: Cinematic Slide Mode, Swiss International Strict Mode, Editorial Web Deck Mode, HTML Slide Template Library, Theme Variation Protocol, Design Philosophy School System, Speaker Notes Overlay, and Brand Import Workflow. These are optional modes activated by specific user requests or vague briefs.

---

## Cinematic Slide Mode

Use when a slide needs to demonstrate a workflow, product sequence, or process, not just describe it. Transforms a static "step 1 -> step 2" flow into a scene-driven animation that feels like a product launch film clip.

**When to apply:**
- User asks for an "animated demo slide," "workflow animation," "product walkthrough slide," or "video-style slide"
- Any slide that describes a multi-step process where showing is more powerful than telling
- Keynote or conference decks where one slide needs a "wow moment"

**Dual-layer architecture (default):**
- Layer 1, Static Dashboard (always visible): complete, readable workflow diagram
- Layer 2, Cinematic Overlay (triggered by a play button): 22-second film clip, auto-fades back to Layer 1 when complete

**5-scene structure (22 seconds total, tested golden length):**

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

## HTML Slide Template Library

When generating HTML presentations, prefer cloning from the **beautiful-html-templates** library rather than improvising CSS per deck. The library has 32 production-quality HTML slide templates indexed in `index.json` with structured metadata per template.

**Library location:** `https://github.com/zarazhangrui/beautiful-html-templates`

**Index manifest:** `https://raw.githubusercontent.com/zarazhangrui/beautiful-html-templates/main/index.json`

Each entry in `index.json` has: `slug`, `name`, `tagline`, `mood[]`, `occasion[]`, `tone[]`, `formality`, `density`, `scheme`, `best_for`, `avoid_for`, `slide_count`.

### 6-Step Clone Workflow

1. Ask about **occasion and mood** before picking any template, not industry
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
- **Never mix layouts from different templates**: if a layout is missing, design it using the existing template's system
- **Never recolor or substitute fonts**: pick a different template instead
- **Never "modernize" an existing template**: its aesthetic is intentional

---

## Theme Variation Protocol

When the user has not pre-selected a theme, generate **3 distinct visual directions** before locking one:

- Direction A: safe and professional (Swiss Modern or Paper & Ink equivalent)
- Direction B: bold and signal-driven (high-contrast, strong type)
- Direction C: unexpected: pick something from the mood-to-preset table that surprises but fits

Show all three as mini previews (cover + 1 content slide each). The goal is atomic variations the user can mix and match, not "the right answer." Only then finalize the full deck in the chosen direction.

Each direction must represent a genuinely different aesthetic axis, not just color-swaps of the same layout.

---

## Design Philosophy School System (when brief is vague)

When the user's brief is too vague to pick a theme ("make something nice," "give me options," no brand provided), enter **Design Direction Advisor mode** instead of defaulting to a generic preset. Recommend 3 directions, each from a **different school**, never two from the same.

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
- `N` key toggles, no button required
- Notes overlay floats above the scaled canvas; never inside it
- Max height `30vh` so the deck remains visible behind it
- Auto-update content when the slide changes
- Include a footnote on the title slide: "Press N to toggle speaker notes"

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
