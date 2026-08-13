# Quality Guardrails

Summary: All quality guardrails, banned words, Data Slop Rule, 30% Copy Cut Rule, Self-Check Before Delivery checklist, troubleshooting, and requirements. Load this file before delivering any deck.

---

## One Idea Per Slide (hard rule)

One idea per slide. If you're tempted to put two ideas on one slide, split them. A slide with two ideas is two slides waiting to be written. This is not a density preference, it's a structural requirement.

---

## Banned Words

`unleash`, `elevate`, `revolutionize`, `seamless`, `transformative`, `next-gen`, `powerful solution`, `transformative platform`

Rewrite with specific claims instead of jargon.

---

## 30% Copy Cut Rule

After drafting any slide, ask: "Would cutting 30% of the copy make this clearer?" If yes, cut it.

---

## Data Slop Rule

Never add statistics, icons, or supporting numbers the user did not provide. Never pad a slide with a third bullet just because two feels light. If a slide feels empty, solve it with layout and visual rhythm, not invented content. Ask before adding material.

---

## No 3+ Consecutive Same Visual Weight Slides

"Hero" slides: cover, chapter curtain, suspense question, big quote.
"Non-hero" slides: data, left-text/right-image, image grid, pipeline, comparison, mixed layout.
Hero and non-hero must alternate. Never run 3+ non-hero slides without a hero break.
Insert a high-impact slide every 3-4 content slides.
For decks of 8+ slides: must include at least one high-contrast dark hero AND one light hero.

---

## Title-to-Body Font Ratio

Minimum 2.5x. Target 3x.

---

## Banned Patterns

- No `scrollIntoView()` in navigation
- No `overflow: hidden` to hide content (split the slide instead)
- No `scale(0)` entrances
- No `transition: all`
- No bounce or elastic easing in professional decks
- No animation on keyboard navigation
- No hidden-by-default reveal content in decks that will be exported
- `prefers-reduced-motion` path required for every animated deck
- No emoji as icons (use a real icon library or leave as placeholder)
- No SVG-drawn illustrations (a gray rectangle with "illustration placeholder" is better)

---

## Self-Check Before Delivery

Run this checklist before shipping:

### Narrative

- Can you state the thesis in one sentence?
- Is there contrast between "what is" and "what could be"?
- Is the audience the hero?
- Is there a clear CTA at the end?
- Does each slide have exactly one idea?
- Does the opening hook?

### Visual

- Is it clear what to read first on every slide? (squint test)
- No two consecutive slides share the same visual weight?
- Headings are assertion sentences, not topic labels?
- Font weight varies across the deck (bold headings, regular body, medium labels)?
- Title-to-body ratio is at least 2.5x?

### Color theory

- Does every slide follow the 60-30-10 ratio? (squint test: 3 visible tonal layers)
- Does every text pair pass 4.5:1 contrast? (body text, large text, UI elements)
- Is the harmony scheme consistent across the entire deck?
- Is the color temperature intentional (no accidental drift between slides)?
- Are there max 2 high-saturation (>60%) elements per slide?
- Does the accent color appear only on the 10% role (CTAs, key data, active states)?
- Are no two colors sharing the same lightness rung in the LCH ladder?
- Does each slide type follow its color behavior expectation (cover, big number, quote, comparison, data, closing)?
- For brand-imported palettes: was the palette validated against color theory before use?

### Content

- No filler copy, no banned words?
- No invented statistics or fabricated quotes?
- Every word earns its space? (30% copy cut rule)
- No emoji as icons?
- No generic placeholder names?

### Technical

- Alt text on all images?
- Keyboard nav (arrows, space, page up/down)?
- `prefers-reduced-motion` path?
- Speaker notes overlay wired to N key?
- No `scrollIntoView()` in navigation?
- No `overflow: hidden` to hide content?
- All font sizes use `clamp()`?
- Canvas is fixed 1920x1080 with letterbox scaling?

### Taste

- Name the slide that best expresses the deck's point of view
- Name the slide most likely to be forgotten. Improve or cut it
- Name one unexpected but fitting decision before final render

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

---

## Requirements

- An AI coding agent with file system and terminal access
- Any capable LLM backend
- Python 3 + `python-pptx` for PPTX export path A (`pip3 install python-pptx`)
- Node.js + `pptxgenjs` for PPTX export path B (`npm install pptxgenjs`)
- Modern browser (Chrome/Edge/Firefox/Safari)

No additional API keys. Everything runs locally.

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
