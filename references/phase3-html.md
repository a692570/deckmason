# Phase 3: HTML Generation

Summary: Write the complete HTML presentation. Covers Canvas Scale Architecture (1920x1080 fixed), Viewport Fitting Rules (100vh, clamp, scroll-snap), Vertical Budget Math, One Idea Per Slide, HTML structure template, Agent Authoring Discipline, file size limits, animation patterns, DOM rules, and grid ratios.

---

## Canvas Scale Architecture

**Canvas:** Fixed at 1920x1080 (16:9). Do NOT use viewport-relative sizing for the canvas itself.

**Letterboxing:** A full-viewport stage wraps the canvas and letterboxes it via `transform: scale()`. Compute scale as `Math.min(viewportW / 1920, viewportH / 1080)`.

**Navigation controls:** Place prev/next controls and slide counter **outside** the scaled canvas element, otherwise they shrink with the canvas and become unusable on small screens.

**localStorage persistence:** Store the current slide index in `localStorage` on every change. Re-read on load. Prevents losing place on refresh during iterative design.

**Minimum font sizes for 1920x1080 canvas:** Text must never be smaller than 24px (rendered at native canvas resolution). Headings: 48px minimum. Body: 28-32px minimum. Footnotes: 24px minimum. The 1pt to 1.33px ratio at 96dpi applies.

---

## Viewport Fitting Rules (non-negotiable)

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

### Content density limits per slide type

| Slide Type | Maximum Content |
|---|---|
| Title slide | 1 heading + 1 subtitle + optional tagline |
| Content slide | 1 heading + 4-6 bullets OR 1 heading + 2 paragraphs |
| Feature grid | 1 heading + 6 cards max (2x3 or 3x2) |
| Code slide | 1 heading + 8-10 lines of code |
| Quote slide | 1 quote (max 3 lines) + attribution |
| Image slide | 1 heading + 1 image (max 60vh height) |

---

## Vertical Budget Math (run before writing every slide)

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
| **Total** | | **816, fits** |

Add a 6th bullet and you're over 840px. Split the slide.

---

## One Idea Per Slide (hard rule)

One idea per slide. If you're tempted to put two ideas on one slide, split them. A slide with two ideas is two slides waiting to be written. This is not a density preference, it's a structural requirement.

---

## HTML Structure

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

---

## Agent Authoring Discipline

- **Lock four style decisions before implementation:** topic/audience, rough slide count, text density, and motion level. If the user already gave clear direction, restate the assumption instead of asking.
- **Use canvas budget math before writing dense slides.**
- **Create reusable theme docs when a visual identity should persist:** capture palette, typography, layout padding, fixed title/footer/eyebrow components, motion philosophy, and what to avoid.
- **Use placeholders only for user-owned missing assets:** product screenshots, team photos, proprietary charts. Do not leave decorative stock-photo slots for the user to fill.
- **Keep repeated visuals edit-friendly:** cards, tiles, logos, comparison blocks, and timeline items should have stable per-item markup so a later edit can target one item cleanly.
- **Define a layout contract for reusable slides:** list `layout_id`, `layout_name`, allowed fields, string caps, array caps, image slots, chart/table schema, and fixed canvas ratio.
- **Separate decorative and content assets:** decorative backgrounds, borders, logos stay fixed in the template. Replaceable images, icons, charts, titles, bullets belong in the content schema.
- **Cap content before visual QA:** if a title, bullet list, table, or metric grid exceeds the layout contract, split the slide or choose a denser layout. Do not rely on overflow clipping.

---

## File Size Limit

If the generated HTML presentation exceeds ~1000 lines, split into multiple files and import into a main file. Do NOT produce one massive file; it becomes uneditable.

---

## Animation Patterns for HTML Presentations

Motion is optional in decks. Use it only for live HTML review, keynote-style playback, or a specific walkthrough moment. PDF, PPTX, and Google Slides imports are static snapshots, so every slide must work as a still frame.

For optional GSAP-powered animations, see `references/animation-patterns.md` for available patterns, when to use each, CDN inclusion, and prefers-reduced-motion fallbacks.

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

Use Intersection Observer to add `.visible` class when slides enter viewport. Never apply animations via scroll event listeners (performance).

**Deck motion guardrails:**
- No `transition: all`
- No `scale(0)` entrances
- No bounce or elastic easing in professional decks
- No animation on keyboard navigation. Arrow, space, and number keys should switch slides immediately
- No hidden-by-default reveal content in decks that will be exported. The static slide must contain the final readable state
- Add a `prefers-reduced-motion` path for every HTML deck with motion

---

## HTML Slide DOM Rules

**Never use `scrollIntoView()`** in HTML presentations. It corrupts the scroll-snap navigation system. Use direct `.scrollTop` or `scrollTo()` on the container instead.

**Slide labels are 1-indexed.** Use `data-screen-label="01 Cover"`, `"02 Agenda"`, etc. When the user says "slide 5" they mean label `"05"`, never array index `[4]`.

**System declaration before building:** Before writing HTML, vocalize the layout system you will use: which background colors, which slide layout for section headers/titles/images. State it out loud as "junior designer reporting to manager." This prevents layout drift across slides.

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
- Semantic name: English, short, content-specific, not "photo1" or "image"
- JPG for photos/screenshots, PNG for UI elements with transparency
- Same-name overwrite = safest way to swap images without touching the HTML

---

## Navigation and Interactions

Every presentation includes:
- **Keyboard:** Arrow keys, Page Up/Down, Space, N (speaker notes)
- **Touch:** Swipe left/right
- **Mouse:** Scroll wheel, click navigation
- **Progress:** Visual indicator of slide position
- **localStorage:** Persists current slide index across refreshes
