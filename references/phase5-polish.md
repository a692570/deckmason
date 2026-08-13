# Phase 5: Polish and Review

Summary: Page Rhythm Rules (no 3+ consecutive same-weight slides), Font Hierarchy (3-level rule), the full Color Theory System (60-30-10, harmony, contrast, temperature, saturation, lightness, per-slide validation, slide type pairing, brand palette validation), AI Tells / Design Anti-Patterns, Industry Theme Constraints, Voice Guidance by Deck Type, Designer's Eye Critique rubric, Narrative Spine and Slide Rhythm, Memorable Moment, and Self-Check Before Delivery.

---

## Page Rhythm Rules

**P0 error: 3 or more consecutive same-visual-weight slides.** This is the single most common reason a deck fatigues the audience.

- "Hero" slides: cover, chapter curtain, suspense question, big quote: full-bleed, visually dominant
- "Non-hero" slides: data, left-text/right-image, image grid, pipeline, comparison, mixed layout
- Hero and non-hero must alternate. Never run 3+ non-hero slides without a hero break.
- Insert a high-impact slide every 3-4 content slides.
- Self-check: list every slide's layout type after drafting. Any run of 3+ same-weight types = fix it.
- For decks of 8+ slides: must include at least one high-contrast dark hero AND one light hero.

---

## Font Hierarchy (3-level rule)

Non-negotiable. Mixing these up is the fastest way to look AI-generated:

| Role | Font type | Use for |
|---|---|---|
| Opinions / headings | Serif | H1, pull quotes, chapter titles, big statements |
| Body / information | Sans-serif | Body copy, bullet points, labels, descriptions |
| Metadata / numbers | Monospace | Page numbers, dates, data labels, technical metadata |

Never use serif for body copy or sans-serif for display headings. The contrast between serif headings and sans body is what creates the editorial feel.

---

## Color Theory System

Color is not a decoration choice. It is a structural decision that must be validated before writing a single slide. Every DeckMason deck must pass a color theory check at three points: theme selection, slide generation, and final review.

### The 60-30-10 Rule (mandatory)

Every slide must distribute color in a 60-30-10 ratio:

| Proportion | Role | What it covers |
|---|---|---|
| 60% | Dominant | Background, large surface areas, the visual ground |
| 30% | Secondary | Card backgrounds, section panels, supporting shapes, text blocks on the dominant |
| 10% | Accent | CTAs, highlighted data points, active states, key emphasis |

If a slide has two colors fighting for the 10% accent role, it fails. If the 30% secondary is absent, the slide reads flat. If the 60% dominant is too saturated, the deck feels aggressive.

**Validation method:** Squint at the slide. You should see three distinct tonal layers. If you see only two, add a secondary surface. If you see four or more, remove one accent.

### Color Harmony (pick one scheme per deck)

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

### Contrast Ratios (enforce at generation time)

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

### Color Temperature and Mood

Every palette has a temperature. Mixing temperatures without intention creates visual noise.

| Temperature | Signal | Typical hues | Preset examples |
|---|---|---|---|
| **Warm** | Human, inviting, energetic, close | Reds, oranges, yellows, warm browns | Warm Editorial, Bold Signal, Broadside |
| **Cool** | Rational, distant, calm, technical | Blues, greens, blue-purples | Cobalt Grid, Midnight Executive, Deep Space |
| **Neutral** | Professional, timeless, balanced | Grays, warm whites, ink blacks | Swiss Modern, Paper & Ink, Kami Warm Editorial |

**Rule:** A deck can shift temperature between slides (warm hero, cool content) if it is intentional and serves the narrative arc. Accidental temperature drift (one slide warm, next cool for no reason) is an AI tell.

### Saturation Discipline

Saturation is the most overused lever in AI-generated decks. The rule: less is more.

| Element | Max saturation (HSL) | Reason |
|---|---|---|
| Background dominant | 15% | High saturation backgrounds fatigue the eye within 3 slides |
| Secondary surface | 25% | Supports the dominant without competing |
| Accent / CTA | 70% | High enough to pop against the dominant |
| Text on dark | 10% | Saturated text on dark backgrounds glows and becomes unreadable |
| Text on light | 60% | Needs enough chroma to be distinguishable from gray |

**Saturation check:** If three or more elements on a slide exceed 60% saturation, the slide will look AI-generated regardless of layout quality. Reduce saturation on the least important element until at most two high-saturation elements remain.

### Lightness Hierarchy (LCH mapping)

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

### Per-Slide Color Validation (run before delivery)

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

### Color and Slide Type Pairing

Each slide type has a color behavior expectation. Breaking these creates dissonance:

| Slide type | Color behavior | Failure mode |
|---|---|---|
| Cover | Dominant background + accent on title only | Too many colors on the opening = no hierarchy |
| Big number | Number in accent, everything else muted | If the number is not the most chromatic element, it loses impact |
| Quote | Pull-quote in accent or heading color, background neutral | If the background competes with the quote, the words lose weight |
| Comparison | Split field: one side cool, one side warm (if intentional) | If both sides share the same palette, the comparison reads flat |
| Data/chart | Chart elements in accent, axes/labels in neutral | If chart colors are random, the data loses credibility |
| Closing | CTA in accent at 10%, everything else recedes | If the CTA doesn't pop, the audience doesn't act |

### Custom Brand Palette Validation

When importing a brand (from PPTX, URL, or PDF), validate the extracted palette against color theory before using it:

1. **Classify the harmony**: is the brand monochromatic, analogous, complementary, etc.?
2. **Check the 60-30-10 distribution**: does the brand have a clear dominant, secondary, and accent?
3. **Verify contrast**: do the brand's text-on-background pairs meet 4.5:1?
4. **Identify the temperature**: warm, cool, or neutral?
5. **Map to lightness rungs**: assign each brand color to a rung in the LCH ladder

If the brand palette violates color theory (e.g., two accents at the same lightness, body text failing contrast), flag it to the user and suggest a corrected version that preserves the brand identity while fixing the structural issue.

---

## Design Anti-Patterns ("AI Tells")

### Content

- Startup jargon: "Seamless", "Unleash", "Elevate", "Nexus", "Transform your workflow": rewrite with specific claims
- Rounded fake numbers: "99%", "50%", "10x": use "47.2%", "8.3x", "3 of 4 customers"
- Generic placeholder names: "John Doe", "Jane Smith", "Company X"
- Title Case On Every Slide Heading: use sentence case; assertion headings are complete sentences
- "Quote slop": fabricated user testimonials: leave as `[PLACEHOLDER: real quote from user]`
- "Data slop": metric cards with invented numbers: leave as placeholder or ask user
- Banned words: `unleash`, `elevate`, `revolutionize`, `seamless`, `transformative`, `next-gen`, `powerful solution`, `transformative platform`

### Typography

- Banned fonts for professional decks: Inter, Roboto, Arial, Open Sans, Helvetica, Space Grotesk: use the theme's specified font or Geist, Cabinet Grotesk, DM Sans
- No variation in font weight across the deck (use bold headings, regular body, medium labels)
- Title-to-body ratio minimum: heading font size must be at least 2.5x body; 3x is the target
- Slide-scale minimums: body text never below 24px (28-36px ideal); section titles 80-160px; hero headlines 180-240px at 1920x1080

### Color

- "The LILA BAN": purple/blue/neon gradient combinations. Applies to all decks except explicitly creative/entertainment contexts
- Cyberpunk neon ban: dark blue `#0D1117` background + neon glow/bloom is the most saturated AI-design cliche. Only override if the user explicitly requests a hacker/terminal aesthetic
- Multiple competing accent colors: one accent per deck, max
- Pure black (#000000) as a background: use near-black with slight hue
- Pure white (#FFFFFF) as a background: use paper-white with slight warm or cool tint
- Gradient rainbow fills on backgrounds: single-color-family only if gradient is needed
- Warm cream as the default "premium" background is now a visible AI tell. Use it only when tied to the subject, brand, or reference
- 60-30-10 violation: two colors fighting for the 10% accent role on the same slide
- Saturation overload: 3+ elements exceeding 60% HSL saturation on one slide
- Lightness collision: two palette colors sharing the same LCH lightness rung, causing visual merge
- Temperature drift: one slide warm, next slide cool, with no narrative reason
- Harmony mixing: switching color schemes mid-deck (e.g., monochromatic cover, triadic content slides)
- Body text in accent color on light backgrounds (accent colors are designed for dark surfaces and CTAs, not body text)

### Layout

- Rounded card + left colored border accent: the most recognizable AI slop pattern in decks; replace with background contrast, weight contrast, or plain divider
- Emoji as icons: use a real icon library (Lucide, Phosphor) or leave as placeholder
- SVG-drawn illustrations: a gray rectangle with "illustration placeholder" is infinitely better than AI-drawn SVG clip art
- Run the second-order slop check: if the deck avoids purple SaaS by becoming generic editorial, generic Swiss, or generic terminal, it still failed
- Name one unexpected but fitting decision before final render: unusual crop, asymmetrical rhythm, object-led metaphor, hard typographic contrast, or a distinctive proof treatment

### 30% Copy Cut Rule

After drafting any slide, ask: "Would cutting 30% of the copy make this clearer?" If yes, cut it.

### Data Slop Rule

Never add statistics, icons, or supporting numbers the user did not provide. Never pad a slide with a third bullet just because two feels light. If a slide feels empty, solve it with layout and visual rhythm, not invented content. Ask before adding material.

---

## Industry Theme Constraints

Check the audience domain first. These are banned combinations:

| Audience / Industry | Banned theme choices |
|---|---|
| Banking / Fintech / Legal | Neon Cyber, Gradient Wave: no neon, no playful gradients |
| Healthcare / Medical | Dark themes (Deep Space, Midnight Executive, Terminal Green): dark feels unsafe |
| Wellness / Beauty / Lifestyle | High-contrast dark themes, cold blues, aggressive CTAs |
| Developer tools / Technical | Warm editorial themes, serif-heavy styles |
| Enterprise / Corporate | Brutalist, Y2K, heavy gradient themes |
| Education / Nonprofit | Neon or overly minimal cold themes |

When the recommended theme conflicts with the industry, fall back to Swiss Modern or Paper & Ink.

---

## Voice Guidance by Deck Type

Adjust density, tone, and emphasis based on context:

**Fundraising / LP Decks**: LPs have seen hundreds of decks and pattern-match fast. They care about team track record, strategy differentiation, fund economics, and risk management. Acknowledge the messy middle, then explain why your team navigated it. Specificity is credibility: named companies, real outcomes, concrete numbers.

**Startup Pitch Decks**: Lead with the problem (make them feel it), then solution. You have ~30 seconds per slide. TAM slide is where most decks lose credibility, be rigorous. The team slide should be a memorable moment: why are YOU the ones to do this?

**Internal / Board Presentations**: Higher density is acceptable; these often function as read-ahead documents. But still one idea per slide and clear hierarchy. Substance over style, clarity always.

**Conference / Keynote**: Higher production value expected. Plan for re-engagement every 5-7 slides. Script but don't teleprompter: rehearse until it sounds natural.

**Sales / Marketing Decks**: Center the customer's world, not the product's features. Open by showing you understand their problem before mentioning your solution. Close with proof, not promises.

---

## Designer's Eye Critique (5-Dimension Rubric)

After generation, optionally run this critique before delivery. Scores each dimension 0-10 and produces a Keep / Fix / Quick Wins punch list.

**1. Philosophy Coherence**: does every detail serve the chosen aesthetic? (9-10: every element has design rationale. 1-2: theme ignored.)

**2. Visual Hierarchy**: does the eye travel in the intended order? Squint test: close your eyes halfway and see whether hierarchy survives. At least 2.5x size ratio between heading and body; 3x is the target.

**3. Craft Quality**: pixel precision: consistent spacing system (8pt grid), max 4 colors, max 2 font families, edge alignment.

**4. Functionality**: every element earns its place. Delete test: "if I remove this, does the deck get worse?" If not, remove it.

**5. Originality**: not a template. Avoids all cliches. Has one "unexpected but fitting" decision.

**Critique output format:**
```
## Design Critique
Overall: X.X/10
- Philosophy Coherence: X/10: [one sentence]
- Visual Hierarchy:     X/10: [one sentence, squint test result]
- Craft Quality:        X/10: [spacing/font/color issues]
- Functionality:        X/10: [elements that don't earn their space]
- Originality:          X/10: [cliches spotted / novel moves]
Keep: [what's working]
Fix (priority order):
  1. [name]: current -> fix -> why
Quick Wins (if only 5 min): [top 3]
```

---

## Narrative Spine and Slide Rhythm

**Through-line concept:** Every deck needs a spine, a single concept that threads through all slides and makes the presentation feel authored rather than assembled. A deck with a concept feels like someone made a deliberate choice. A deck without one feels like slides happened.

Examples of through-line concepts:
- Tool / precision instrument: every slide is a specification, calibrated and purposeful
- Archive / dossier: information presented as evidence and classification
- Journey / pilgrimage: the audience is moving through a narrative arc
- Stage / spotlight: each slide gets a moment, then yields

Name the concept in Phase 0 and use it as a filter throughout. At review, ask whether each slide's visual and copy choices serve the concept or contradict it.

**Slide density rhythm:** Not every slide should carry the same visual weight. A deck where every slide is equally dense fatigues the audience before the pitch lands.
- Some slides content-rich: evidence, data, comparisons: high information density
- Some slides minimal/calm: a single number, a pull quote, a one-sentence assertion
- Dense slides separated by lighter ones: never stack three information-heavy slides back-to-back without a breath

---

## Memorable Moment

Flag at least one slide that will stick. Five types, pick one:
1. **Dramatization**: a reveal, demo, or before/after
2. **Sound bite**: a phrase crisp enough to become the headline
3. **Evocative visual**: a single number or image that imprints
4. **Emotive story**: a specific story that transfers feeling
5. **Shocking stat**: a number made visceral and tangible

The moment must reinforce the thesis, not decorate it.
