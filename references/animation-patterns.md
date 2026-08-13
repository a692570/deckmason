# GSAP Animation Patterns

Summary: Optional GSAP-powered animations for slide entrance/exit and element reveals. Available patterns, when to use each, CDN inclusion, prefers-reduced-motion fallbacks, and code snippets. Load this file only when the user wants motion beyond standard CSS transitions.

---

## Including GSAP

Add the GSAP CDN script tag in the HTML head of your presentation:

```html
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
</head>
```

GSAP is ~50KB gzipped. It works alongside the standard CSS transition system. Use GSAP for complex timeline-based sequences; use CSS transitions for simple reveals.

---

## Available Patterns

### 1. fade-in-up

Best for: cover slide title entrance, section headers, general content reveals.

```javascript
gsap.from(".slide.visible .reveal-up", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "expo.out",
    stagger: 0.1,
});
```

```css
.reveal-up { opacity: 1; transform: translateY(0); }
```

**prefers-reduced-motion fallback:**
```css
@media (prefers-reduced-motion: reduce) {
    .reveal-up { opacity: 1 !important; transform: none !important; }
}
```

```javascript
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(".reveal-up", { opacity: 1, y: 0 });
} else {
    // run animation above
}
```

### 2. stagger-reveal

Best for: bullet lists, card grids, feature lists where each item should appear sequentially.

```javascript
gsap.from(".slide.visible .stagger-item", {
    y: 20,
    opacity: 0,
    duration: 0.4,
    ease: "expo.out",
    stagger: 0.08,
});
```

**prefers-reduced-motion fallback:**
```javascript
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(".stagger-item", { opacity: 1, y: 0 });
}
```

### 3. clip-path-reveal

Best for: data slides, big numbers, dramatic reveals where content wipes in from one direction.

```javascript
gsap.fromTo(".slide.visible .clip-reveal", 
    { clipPath: "inset(0 100% 0 0)" },
    { clipPath: "inset(0 0% 0 0)", duration: 0.8, ease: "expo.out" }
);
```

**prefers-reduced-motion fallback:**
```css
@media (prefers-reduced-motion: reduce) {
    .clip-reveal { clip-path: none !important; }
}
```

```javascript
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(".clip-reveal", { clipPath: "none" });
}
```

### 4. scale-in

Best for: big number slides, hero images, center-stage elements that should feel like they arrive with weight.

```javascript
gsap.from(".slide.visible .scale-in", {
    scale: 0.85,
    opacity: 0,
    duration: 0.7,
    ease: "expo.out",
});
```

**prefers-reduced-motion fallback:**
```javascript
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(".scale-in", { scale: 1, opacity: 1 });
}
```

### 5. slide-in-left / slide-in-right

Best for: comparison slides (left slides in from left, right from right), split layouts, before/after reveals.

```javascript
// Left side
gsap.from(".slide.visible .slide-left", {
    x: -80,
    opacity: 0,
    duration: 0.6,
    ease: "expo.out",
});

// Right side
gsap.from(".slide.visible .slide-right", {
    x: 80,
    opacity: 0,
    duration: 0.6,
    ease: "expo.out",
});
```

**prefers-reduced-motion fallback:**
```javascript
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set([".slide-left", ".slide-right"], { x: 0, opacity: 1 });
}
```

### 6. blur-in

Best for: keynote moments, cinematic transitions, editorial reveals where focus shifts from blurred to sharp.

```javascript
gsap.fromTo(".slide.visible .blur-in",
    { filter: "blur(20px)", opacity: 0 },
    { filter: "blur(0px)", opacity: 1, duration: 0.8, ease: "expo.out" }
);
```

**prefers-reduced-motion fallback:**
```css
@media (prefers-reduced-motion: reduce) {
    .blur-in { filter: none !important; opacity: 1 !important; }
}
```

```javascript
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(".blur-in", { filter: "none", opacity: 1 });
}
```

---

## When to Use Each Pattern

| Slide type | Recommended pattern | Why |
|---|---|---|
| Cover | fade-in-up or blur-in | Sets the tone; should feel intentional, not abrupt |
| Agenda | stagger-reveal | Items appear sequentially, builds anticipation |
| Big number | scale-in or clip-path-reveal | Number arrives with weight and focus |
| Comparison | slide-in-left + slide-in-right | Each side enters from its direction, reinforcing the split |
| Content (bullets) | stagger-reveal | Each bullet gets its moment |
| Quote | fade-in-up or blur-in | Text resolves into focus, like a thought forming |
| Data/chart | clip-path-reveal | Data wipes in, simulating chart draw-on |
| Closing | fade-in-up | Calm, resolved, not flashy |

---

## Integration with Slide Visibility

Use Intersection Observer to trigger GSAP animations when slides become visible, just like the standard CSS reveal system:

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Trigger GSAP animations for this slide
            const slide = entry.target;
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            
            if (!reducedMotion && window.gsap) {
                gsap.from(slide.querySelectorAll(".reveal-up"), {
                    y: 30, opacity: 0, duration: 0.6, ease: "expo.out", stagger: 0.1
                });
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll(".slide").forEach((slide) => observer.observe(slide));
```

---

## Deck Motion Guardrails (apply to GSAP too)

- No bounce or elastic easing in professional decks (use "expo.out" or "power3.out")
- No animation on keyboard navigation. Arrow, space, and number keys should switch slides immediately
- No hidden-by-default reveal content in decks that will be exported. The static slide must contain the final readable state
- prefers-reduced-motion path required for every GSAP-animated deck
- Keep total animation duration under 1.5 seconds per slide. The audience should see content, not wait for it
- Do not animate every element. Pick 2-3 key elements per slide and animate those; the rest should be static
