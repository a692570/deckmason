# Style Presets Reference

Curated visual styles for DeckMason. Each preset includes specific font choices, color palettes, and animation approaches to ensure distinctive, non-generic designs.

Every preset is classified by **color harmony**, **temperature**, and **60-30-10 distribution** so the agent can validate color theory at theme selection time. See the Color Theory System in `SKILL.md` for the full rules.

## Color Theory Quick Reference (per preset)

| Preset | Harmony | Temperature | 60% Dominant | 30% Secondary | 10% Accent |
|---|---|---|---|---|---|
| Modern SaaS | Neutral + accent | Neutral | White / near-black | Light gray / dark gray | Green `#00E3AA` |
| Neon Cyber | Complementary | Cool | Dark blue `#0a0f1c` | `#111827` | Cyan `#00ffcc` / Magenta `#ff00aa` |
| Midnight Executive | Monochromatic (blue) | Cool | `#0f172a` | `#1e293b` | Blue `#3b82f6` / Gold `#fbbf24` |
| Deep Space | Analogous (blue-purple) | Cool | `#030712` | `#111827` | Indigo `#818cf8` / Purple `#c084fc` |
| Terminal Green | Neutral + accent | Neutral (dark) | `#0d1117` | `#161b22` | Green `#39d353` |
| Paper & Ink | Neutral + accent | Neutral (warm) | Cream `#faf9f7` | `#f5f3ef` | Crimson `#c41e3a` |
| Swiss Modern | Neutral + accent | Neutral | White | `#f7f7f7` | Red `#ff3300` |
| Soft Pastel | Triadic | Warm (soft) | `#fef3f2` | `#fef9f5` | Pink `#f472b6` / Lavender `#a78bfa` / Mint `#34d399` |
| Warm Editorial | Analogous (warm) | Warm | `#fffbf5` | `#f5efe6` | Amber `#b45309` / Blue `#0369a1` |
| Brutalist | Complementary | Neutral (stark) | White | Black | Red `#ff0000` |
| Gradient Wave | Analogous (blue-purple) | Cool | `#0f0f1a` | Gradient `#667eea` / `#764ba2` | Pink `#f472b6` |
| Bold Signal | Split-complementary | Warm | `#1a1a1a` | Dark gray | Orange `#FF5722` |
| Electric Studio | Neutral + accent | Cool | `#0a0a0a` / `#ffffff` | Mid gray | Blue `#4361ee` |
| Creative Voltage | Split-complementary | Cool (energetic) | `#1a1a2e` | `#0066ff` | Yellow-green `#d4ff00` |
| Dark Botanical | Analogous (dark warm) | Warm (dark) | `#0f0f0f` | Dark surfaces | Warm gold / muted pink |
| Notebook Tabs | Neutral + accent (multi-tab) | Neutral (warm) | Cream `#f8f6f1` | White cards | Multi-color tabs |
| Pastel Geometry | Triadic (soft) | Cool (soft) | `#c8d9e6` | White cards | Pastel pills |
| Split Pastel | Analogous (warm-cool split) | Warm + Cool split | Peach `#f5e6dc` / Lavender `#e4dff0` | White text | Outfit accent |
| Vintage Editorial | Neutral + accent | Warm | Cream `#f5f3ee` | Geometric shapes | Earth tones |
| Liquid Glass Bento | Neutral + accent | Cool | `#e8edf2` | White glass cards | Blue `#4361ee` |
| Engineering Blueprint | Monochromatic (blue) | Cool | `#1a3a5c` grid | White annotations | Orange `#ff8c00` callout |
| Watercolor Map | Analogous (warm earth) | Warm | `#faf3e8` cream | Muted washes | Ink `#2a2a2a` |
| Golden Serif Quote | Monochromatic (brown-gold) | Warm | `#3a2d1f` brown | Darker brown | Gold `#d4a843` |
| Chalkboard Lesson | Neutral + accent | Neutral (dark) | `#1f2d24` chalkboard | Dark surfaces | White chalk / `#f5e6c8` |
| Exploded Layer Stack | Neutral + accent | Neutral | `#fafafa` | `#1a1a1a` text | Blue `#0066cc` |
| Hyperreal Product | Monochromatic (dark) | Neutral (moody) | `#0a0a0a` | `#f5f5f5` | Single glow accent |
| Summary Infographic | Neutral + multi-accent | Neutral | White | Peach / mint / lavender cards | `#1a1a1a` text |
| Cobalt Grid | Monochromatic (blue) | Cool | `#1a2744` | `#202d4e` / `#243156` | Blue `#4a90d9` |
| 8-Bit Orbit | Complementary | Cool (retro) | `#1a1a2e` | `#16213e` | Red `#e94560` |
| Raw Grid | Complementary | Neutral (stark) | `#fafafa` | `#1a1a1a` | Red `#ff3300` |
| Broadside | Complementary (dark + fire) | Warm (dark) | `#1a1a1a` | Dark surfaces | Fire orange `#ff6b35` |
| Kami Warm Editorial | Neutral + accent | Warm | Parchment `#f5f4ed` | Ivory `#faf9f5` / sand `#e8e6dc` | Ink-blue `#1B365D` |

**Usage:** When selecting a preset, verify its harmony and temperature match the deck's emotional goal. When generating, confirm the 60-30-10 distribution is applied per slide. When reviewing, run the per-slide color validation checklist from `SKILL.md`.

---

## Recommended / Default

### 1. Modern SaaS ⭐

**Vibe:** Clean, confident, developer-friendly, professional SaaS

**The default choice.** Inspired by top-tier SaaS marketing pages (like Linear, Vercel, Stripe). Content-first with minimal decoration. Every slide feels intentional and polished.

**Typography:**
- Display: `Space Grotesk` (500/600/700) - Geometric, modern, confident
- Body: `Inter` (400/500/600) - Clean, highly readable
- Mono: `JetBrains Mono` (400/500) - For code, data, technical content

**Colors:**
```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --bg-dark: #0A0A0A;
    --text-primary: #1a1a1a;
    --text-secondary: #666666;
    --text-on-dark: #ffffff;
    --text-muted-on-dark: #a0a0a0;
    --accent: #00E3AA;           /* Modern Green */
    --accent-dark: #00c996;
    --border: #e5e5e5;
    --border-dark: #333333;
}
```

**Signature Elements:**
- Generous whitespace (content breathes)
- Clean lines, no gradients
- Subtle box shadows for depth
- Monospace for data/code
- High contrast sections (white ↔ dark)
- Minimal decoration, content-first

**Animation Style:**
- Subtle, purposeful (0.4-0.6s)
- Slide up + fade entrances
- Staggered reveals for lists
- Respect `prefers-reduced-motion`

**When to use:**
- Pitch decks
- Product presentations
- Technical talks
- Any professional context

---

## Dark Themes

### 2. Neon Cyber

**Vibe:** Futuristic, techy, confident, cutting-edge

**Typography:**
- Display: `Clash Display` (700) - Bold, geometric, modern
- Body: `Satoshi` (400/500) - Clean, technical, readable

**Colors:**
```css
:root {
    --bg-primary: #0a0f1c;
    --bg-secondary: #111827;
    --text-primary: #ffffff;
    --text-secondary: #94a3b8;
    --accent: #00ffcc;
    --accent-secondary: #ff00aa;
    --glow: rgba(0, 255, 204, 0.4);
}
```

**Signature Elements:**
- Particle system background (canvas)
- Neon glow on accent elements
- Custom cursor with trail
- Grid pattern overlay
- Glitch text effect on titles

**Animation Style:**
- Medium speed (0.5-0.8s)
- Slide up + fade entrances
- Staggered reveals

---

### 3. Midnight Executive

**Vibe:** Premium, trustworthy, sophisticated, corporate

**Typography:**
- Display: `Libre Baskerville` (700) - Classic, authoritative
- Body: `Source Sans 3` (400/600) - Professional, highly readable

**Colors:**
```css
:root {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --accent: #3b82f6;
    --accent-secondary: #818cf8;
    --gold: #fbbf24;
}
```

**Signature Elements:**
- Subtle gradient backgrounds
- Thin gold accent lines
- Data visualizations
- Minimal decorative elements
- Focus on whitespace

**Animation Style:**
- Fast, subtle (0.3-0.5s)
- Fade only, minimal movement
- Professional restraint

---

### 4. Deep Space

**Vibe:** Inspiring, vast, contemplative, visionary

**Typography:**
- Display: `Space Grotesk` (700) - Geometric, space-age
- Body: `DM Sans` (400/500) - Modern, friendly

**Colors:**
```css
:root {
    --bg-primary: #030712;
    --bg-secondary: #111827;
    --text-primary: #f9fafb;
    --text-secondary: #6b7280;
    --accent: #818cf8;
    --accent-secondary: #c084fc;
    --stars: rgba(255, 255, 255, 0.1);
}
```

**Signature Elements:**
- Starfield background (CSS or canvas)
- Radial gradient "spotlight" effects
- Floating elements
- Large, impactful typography
- Generous vertical spacing

**Animation Style:**
- Slow, cinematic (0.8-1.2s)
- Scale + fade entrances
- Parallax scrolling

---

### 5. Terminal Green

**Vibe:** Developer-focused, hacker aesthetic, retro-tech

**Typography:**
- Display: `JetBrains Mono` (700) - Monospace, code-like
- Body: `JetBrains Mono` (400) - Consistent monospace

**Colors:**
```css
:root {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --text-primary: #c9d1d9;
    --text-secondary: #8b949e;
    --accent: #39d353;
    --accent-dim: rgba(57, 211, 83, 0.2);
    --border: #30363d;
}
```

**Signature Elements:**
- Scan line overlay effect
- Blinking cursor
- Code blocks and syntax highlighting
- ASCII art decorations
- Terminal-style borders

**Animation Style:**
- Typewriter text reveals
- Quick, snappy transitions (0.2-0.3s)
- Character-by-character reveals

---

## Light Themes

### 6. Paper & Ink

**Vibe:** Editorial, literary, thoughtful, refined

**Typography:**
- Display: `Cormorant Garamond` (700) - Elegant, editorial
- Body: `Source Serif 4` (400) - Classic, readable

**Colors:**
```css
:root {
    --bg-primary: #faf9f7;
    --bg-secondary: #f5f3ef;
    --text-primary: #1a1a1a;
    --text-secondary: #666666;
    --accent: #c41e3a;
    --border: #e5e2db;
}
```

**Signature Elements:**
- Drop caps on opening paragraphs
- Pull quotes
- Subtle paper texture
- Elegant horizontal rules
- Classic column layouts

**Animation Style:**
- Gentle fades (0.4-0.6s)
- No dramatic movements
- Refined, understated

---

### 7. Swiss Modern

**Vibe:** Clean, precise, Bauhaus-inspired, geometric

**Typography:**
- Display: `Archivo` (800) - Strong, geometric
- Body: `Nunito` (400/600) - Friendly, rounded

**Colors:**
```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f7f7f7;
    --text-primary: #000000;
    --text-secondary: #555555;
    --accent: #ff3300;
    --grid: rgba(0, 0, 0, 0.05);
}
```

**Signature Elements:**
- Visible grid system
- Asymmetric layouts
- Red accent sparingly
- Bold black typography
- Geometric shapes

**Animation Style:**
- Precise, mechanical (0.3-0.4s)
- Linear or ease-out easing
- Grid-aligned movements

---

### 8. Soft Pastel

**Vibe:** Friendly, approachable, creative, playful

**Typography:**
- Display: `Nunito` (800) - Rounded, warm
- Body: `Nunito` (400/500) - Consistent warmth

**Colors:**
```css
:root {
    --bg-primary: #fef3f2;
    --bg-secondary: #fef9f5;
    --text-primary: #374151;
    --text-secondary: #6b7280;
    --accent: #f472b6;
    --accent-secondary: #a78bfa;
    --accent-tertiary: #34d399;
}
```

**Signature Elements:**
- Rounded corners everywhere
- Blob shapes in background
- Multiple pastel accents
- Soft shadows
- Illustrated icons

**Animation Style:**
- Bouncy spring physics
- Playful overshoots
- Floating/bobbing elements

---

### 9. Warm Editorial

**Vibe:** Human, storytelling, photographic, magazine

**Typography:**
- Display: `Playfair Display` (700) - Elegant, serif headlines
- Body: `Work Sans` (400) - Modern, readable

**Colors:**
```css
:root {
    --bg-primary: #fffbf5;
    --bg-secondary: #f5efe6;
    --text-primary: #2d2a24;
    --text-secondary: #78716c;
    --accent: #b45309;
    --accent-secondary: #0369a1;
}
```

**Signature Elements:**
- Large hero images
- Image overlays with text
- Warm photography
- Pull quotes in accent color
- Handwritten accent fonts

**Animation Style:**
- Cinematic crossfades
- Ken Burns effect on images
- Slow, emotional transitions (0.8-1s)

---

## Specialty Themes

### 10. Brutalist

**Vibe:** Raw, bold, unconventional, attention-grabbing

**Typography:**
- Display: `Anton` or `Bebas Neue` (900) - Massive, compressed
- Body: `IBM Plex Mono` (400) - Industrial

**Colors:**
```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #000000;
    --accent: #ff0000;
    --border: #000000;
}
```

**Signature Elements:**
- Thick black borders
- Asymmetric, chaotic layouts
- Oversized typography
- Raw, unpolished look
- High contrast

**Animation Style:**
- Instant or very fast
- Hard cuts, no easing
- Jarring transitions

---

### 11. Gradient Wave

**Vibe:** Modern SaaS, energetic, approachable tech

**Typography:**
- Display: `Cabinet Grotesk` (800) - Modern, confident
- Body: `Inter` (400/500) - Only allowed for this style

**Colors:**
```css
:root {
    --bg-primary: #0f0f1a;
    --gradient-1: #667eea;
    --gradient-2: #764ba2;
    --gradient-3: #f472b6;
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
}
```

**Signature Elements:**
- Animated gradient meshes
- Blob shapes with blur
- Glass-morphism cards
- Floating orbs
- Smooth curves

**Animation Style:**
- Smooth, flowing (0.5-0.7s)
- Continuous subtle animations
- Hover reveals

---

## Font Pairing Quick Reference

| Vibe | Display Font | Body Font | Source |
|------|--------------|-----------|--------|
| **SaaS/Professional (Default)** | **Space Grotesk** | **Inter** | **Google/Fontshare** |
| Techy/Modern | Clash Display | Satoshi | Fontshare |
| Professional | Libre Baskerville | Source Sans 3 | Google |
| Space/Future | Space Grotesk | DM Sans | Google |
| Developer | JetBrains Mono | JetBrains Mono | JetBrains |
| Editorial | Cormorant Garamond | Source Serif 4 | Google |
| Swiss/Minimal | Archivo | Nunito | Google |
| Playful | Nunito | Nunito | Google |
| Magazine | Playfair Display | Work Sans | Google |
| Brutalist | Anton | IBM Plex Mono | Google |
| SaaS Modern (Alt) | Cabinet Grotesk | Inter | Fontshare/Google |

---

## Animation Easing Reference

```css
:root {
    /* Standard curves */
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
    --ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);

    /* Bouncy */
    --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

    /* Smooth */
    --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);

    /* Snappy */
    --ease-snappy: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

---

## Background Effect Snippets

### Particle Field (Canvas)

```javascript
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.resize();
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
        this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            // Wrap around edges
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;
            // Draw
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 255, 204, 0.5)';
            this.ctx.fill();
        });
        requestAnimationFrame(() => this.animate());
    }
}
```

### Gradient Mesh (CSS)

```css
.gradient-mesh {
    background:
        radial-gradient(at 40% 20%, hsla(280, 100%, 70%, 0.3) 0px, transparent 50%),
        radial-gradient(at 80% 0%, hsla(200, 100%, 60%, 0.3) 0px, transparent 50%),
        radial-gradient(at 0% 50%, hsla(340, 100%, 70%, 0.3) 0px, transparent 50%),
        radial-gradient(at 80% 50%, hsla(180, 100%, 50%, 0.2) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(250, 100%, 60%, 0.3) 0px, transparent 50%),
        radial-gradient(at 80% 100%, hsla(20, 100%, 60%, 0.2) 0px, transparent 50%),
        var(--bg-primary);
}
```

### Animated Starfield (CSS)

```css
.starfield {
    background-image:
        radial-gradient(2px 2px at 20% 30%, white 0%, transparent 50%),
        radial-gradient(2px 2px at 40% 70%, white 0%, transparent 50%),
        radial-gradient(1px 1px at 50% 40%, white 0%, transparent 50%),
        radial-gradient(1px 1px at 60% 60%, white 0%, transparent 50%),
        radial-gradient(2px 2px at 90% 10%, white 0%, transparent 50%);
    background-size: 200% 200%;
    animation: twinkle 15s ease-in-out infinite;
}

@keyframes twinkle {
    0%, 100% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
}
```

### Noise Texture (SVG Data URI)

```css
.noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.05;
}
```

---

## Custom Brand Presets

Generate your own presets using the **Brand Import Workflow** (see `SKILL.md`). This lets you extract brand tokens from existing assets and create presentations that match your company's visual identity.

### How to Create Custom Presets

1. **From PPTX**: Unzip a PowerPoint file, parse `ppt/theme/theme1.xml` for colors and fonts
2. **From URL**: Fetch a website, extract CSS color variables and font-family declarations  
3. **From PDF**: Read brand guidelines, extract hex codes and typography rules

### Custom Preset Template

Use this format when generating brand-derived presets:

```css
/* Custom Brand Preset: [Source/Company Name] */
/* Generated from: [pptx/url/pdf source] */

:root {
    /* Core Backgrounds */
    --bg-primary: #ffffff;           /* Light background */
    --bg-secondary: #f8f9fa;         /* Subtle variation */
    --bg-dark: #0A0A0A;              /* Dark sections */
    
    /* Text Colors */
    --text-primary: #1a1a1a;         /* Main body text */
    --text-secondary: #666666;       /* Muted/caption text */
    --text-on-dark: #ffffff;         /* Text on dark bg */
    --text-muted-on-dark: #a0a0a0;   /* Subtle text on dark */
    
    /* Brand Accents */
    --accent: #00E3AA;               /* Primary brand color */
    --accent-secondary: #[hex];      /* Secondary accent */
    --accent-tertiary: #[hex];       /* Tertiary if needed */
    
    /* Typography */
    --font-display: '[Brand Display Font]', sans-serif;
    --font-body: '[Brand Body Font]', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    
    /* Spacing & Borders */
    --slide-padding: 4rem;
    --border: #e5e5e5;
    --border-dark: #333333;
    
    /* Animation */
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Preset Naming

Name your custom preset descriptively:
- `/* Custom: Linear App */`
- `/* Custom: Acme Corp Brand */`
- `/* Custom: 2024 Rebrand Guidelines */`

Store generated presets in your project or share them with your team for consistent presentation styling.

---

## DO NOT USE (Generic AI Patterns)

Avoid these overused patterns that create "AI slop":

**Fonts:**
- Inter (except in Gradient Wave style)
- Roboto
- Arial / Helvetica
- System font stacks as display fonts

**Colors:**
- `#6366f1` (generic indigo)
- Purple/violet gradients on white
- Generic blue primary buttons
- Equal distribution of accent colors

**Layouts:**
- Centered everything
- Generic hero with text left, image right
- Standard 3-column features grid
- Rounded rectangle cards with shadows

**Animations:**
- Identical timing on all elements
- No stagger on children
- Linear easing everywhere
- Excessive bounce

**Effects:**
- Drop shadows without intention
- Gratuitous glassmorphism
- Blurs that don't add meaning
- Gradients for no reason

---

## Extended Style Presets (20 additional themes)

Use when the 11 original presets don't fit the mood or when the user wants something more distinctive.

| Preset | Vibe | Display Font | Body Font | Key Colors |
|--------|------|-------------|-----------|------------|
| Bold Signal | Confident, high-impact | Archivo Black | Space Grotesk | #1a1a1a bg, #FF5722 card |
| Electric Studio | Bold, professional, split-panel | Manrope 800 | Manrope | #0a0a0a / #ffffff / #4361ee |
| Creative Voltage | Energetic, retro-modern | Syne | Space Mono | #0066ff / #1a1a2e / #d4ff00 |
| Dark Botanical | Elegant, sophisticated | Cormorant | IBM Plex Sans | #0f0f0f bg, warm gold/pink accents |
| Notebook Tabs | Editorial, organized | Bodoni Moda | DM Sans | Cream #f8f6f1, colorful tab accents |
| Pastel Geometry | Friendly, approachable | Plus Jakarta Sans | Plus Jakarta Sans | #c8d9e6 bg, white card, pill tabs |
| Split Pastel | Playful, two-color vertical split | Outfit | Outfit | Peach #f5e6dc / Lavender #e4dff0 |
| Vintage Editorial | Witty, editorial | Fraunces | Work Sans | Cream #f5f3ee, geometric shape accents |
| Liquid Glass Bento | Asymmetric glass cards, soft blur | Manrope 800 | Manrope | #e8edf2 bg, white glass, #4361ee accent |
| Engineering Blueprint | Annotated technical grid | JetBrains Mono Bold | DM Sans | #1a3a5c grid, white annotations, #ff8c00 callout |
| Watercolor Map | Hand-painted annotated map | Playfair Display | Source Serif 4 | #faf3e8 cream, muted washes, #2a2a2a ink |
| Golden Serif Quote | Oversized gold serif, interstitial | Cormorant Garamond | Cormorant Garamond | #3a2d1f brown bg, #d4a843 gold text |
| Chalkboard Lesson | Hand-drawn diagrams, teaching | Caveat | Patrick Hand | #1f2d24 chalkboard, white chalk, #f5e6c8 accent |
| Exploded Layer Stack | Hero exploded architecture diagram | Archivo 800 | IBM Plex Sans | #fafafa bg, #1a1a1a text, #0066cc accent |
| Hyperreal Product | Moody studio render, product hero | Clash Display (Fontshare) | Satoshi (Fontshare) | #0a0a0a near-black, #f5f5f5 soft white, single glow accent |
| Summary Infographic | Dense one-page summary, icon-led | Plus Jakarta Sans Bold | Plus Jakarta Sans | #ffffff bg, peach #f5e6dc / mint #d8ebd6 / lavender #e4dff0, #1a1a1a text |
| Cobalt Grid | Studious, editorial, data-heavy | Space Grotesk | Inter | Deep blue #1a2744 bg, #e8edf2 text, #4a90d9 accent |
| 8-Bit Orbit | Retro-tech, rebellious | Press Start 2P | VT323 | #1a1a2e bg, #e94560 accent, #16213e surface |
| Raw Grid | Neo-brutalist, founder pitch | Archivo Black | IBM Plex Mono | #fafafa bg, #1a1a1a text, #ff3300 accent, thick borders + offset shadows |
| Broadside | Dark editorial + fire orange | Playfair Display | DM Sans | #1a1a1a bg, #ff6b35 accent, #f5f3ee text, bilingual EN/CN |

### Mood-to-Preset Mapping

| Desired feeling | Preset |
|---|---|
| Impressed / Confident | Bold Signal, Electric Studio, Dark Botanical, Hyperreal Product |
| Excited / Energized | Creative Voltage, Neon Cyber, Split Pastel, 8-Bit Orbit |
| Calm / Focused | Notebook Tabs, Paper & Ink, Swiss Modern, Liquid Glass Bento, Summary Infographic |
| Inspired / Moved | Dark Botanical, Vintage Editorial, Pastel Geometry, Watercolor Map, Golden Serif Quote |
| Educational / Teaching | Chalkboard Lesson |
| Technical / Architectural | Engineering Blueprint, Exploded Layer Stack, Cobalt Grid |
| Scrappy / Founder | Raw Grid, Brutalist |
| Editorial / Data-heavy | Broadside, Cobalt Grid, Notebook Tabs |

**Font sources:** Use Fontshare (`api.fontshare.com`) for Clash Display, Satoshi, Cabinet Grotesk. Use Google Fonts for everything else. Never use system fonts (Arial, Inter, Roboto) in any generated presentation unless the theme explicitly calls for them.

---

## Kami Warm Editorial — Full CSS Spec

Use when: user wants a "polished", "editorial", "print-quality", or "paper-like" slide deck; research presentations, white papers converted to slides, academic decks, document-style investor briefs, or any context where "Warm Editorial" is the selected theme.

**Design invariants (enforce all):**
- Canvas background: `#f5f4ed` (parchment) — never pure white
- Single accent: ink-blue `#1B365D` — no second chromatic color
- All grays warm-toned (yellow-brown undertone)
- Serif (Newsreader) for display titles; sans (Inter) for body and labels
- Serif weight locked at 500 — no bold
- Depth via ring or whisper shadow only — no hard drop shadows
- No italic anywhere

**Full CSS token set:**
```css
:root {
  --parchment:    #f5f4ed;
  --ivory:        #faf9f5;
  --warm-sand:    #e8e6dc;
  --deep-dark:    #141413;
  --dark-surface: #30302e;
  --brand:        #1B365D;
  --brand-light:  #2D5A8A;
  --near-black:   #141413;
  --charcoal:     #4d4c48;
  --olive:        #5e5d59;
  --stone:        #87867f;
  --warm-silver:  #b0aea5;
  --border-cream: #e8e5da;
  --border-warm:  #e0ddd2;
  --ring-warm:    #d1cfc5;

  --serif: "Newsreader", "Source Serif 4", "Charter", Georgia, serif;
  --sans:  "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif;
  --mono:  "JetBrains Mono", "SF Mono", Consolas, monospace;
}
```

**Slide-scale rules (print pt to screen px conversion):**
- `1pt = ~1.33px`; slide letter-spacing = print value / 2
- Slide padding-top: 72-80px
- Display title: 64px / 500 weight
- Body: 22-26px / 400
- Labels/eyebrows: 13-14px / 600 / all-caps / 1.5px letter-spacing

**Section header component:**
```css
.kami-section-header .eyebrow {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--sans);
  font-size: 13px; font-weight: 600;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--stone); margin-bottom: 14px;
}
.kami-section-header .eyebrow::before {
  content: ""; display: inline-block;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--brand); flex-shrink: 0;
}
.kami-section-header .rule {
  height: 1px; background: var(--border-warm);
  margin-bottom: 36px;
}
.kami-section-header h1 {
  font-family: var(--serif); font-size: 38px;
  font-weight: 500; line-height: 1.1; color: var(--near-black);
}
```

**Code card component (pseudocode over real code):**
```css
.kami-code-card {
  background: var(--ivory);
  border: 1px solid var(--border-cream);
  border-radius: 8px; padding: 20px 24px;
}
.kami-code-card pre { font-family: var(--mono); font-size: 13px; line-height: 1.55; color: var(--near-black); margin: 0; }
.kami-code-card .k { color: var(--brand); }
.kami-code-card .c { color: var(--stone); }
```
Content philosophy: comments should outnumber code lines. Show logic, not syntax.

**Tag backgrounds — always solid hex (never rgba):**
| Alpha intent | Solid hex |
|---|---|
| 0.08 (lightest) | `#EEF2F7` |
| 0.18 (standard) | `#E4ECF5` |
| 0.30 (strong) | `#D6E1EE` |

**Deck Recipe rules (long decks >20 slides):**
| Rule | Content |
|---|---|
| R1 | Canvas fixed 1920x1080, scaled externally. No dynamic vh/vw on canvas |
| R2 | Display title 64px (not H1 30px) |
| R4 | Letter-spacing = print value / 2 |
| R5 | Section header: gap below rule >= 36px (>= 2x gap above) |
| R6 | Eyebrow dot: `align-items: center` not baseline |
| R7 | Slide padding-top 72-80px |
| R8 | Images: `object-fit: contain` + flex centering, never stretch |
| R9 | `.kami-slide-footer` absolutely positioned to bottom for page number + deck mark |
| R10 | Code: pseudocode style — more comment lines than code lines |

**When to use Kami over other themes:**
- Research / academic presentations
- Document-style investor briefs (conservative industries: finance, legal, consulting)
- White papers or long-form analyses converted to slide format
- Any deck where "Paper & Ink" or "Warm Editorial" is selected
- When user says "polished", "editorial", "typeset", "print-quality", or "clean sans-gradient"

**Font import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```
