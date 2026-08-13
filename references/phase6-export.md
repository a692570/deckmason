# Phase 6: Export

Summary: Generate all deliverable formats. PPTX export (two paths: python-pptx image-based and pptxgenjs editable text boxes), PDF export via headless Chrome, delivery file list, and HTML Presentation Delivery Options including Vercel deploy.

---

## Step 6.1: PPTX Export (two paths)

### Path A: python-pptx (image-based, simpler)

```bash
python3 scripts/pptx_export.py [presentation].html --output [presentation].pptx
```

Handles slide backgrounds from CSS, image embedding, typography sizing, layout detection from CSS classes, speaker notes from HTML comments, 16:9 widescreen.

### Path B: pptxgenjs (editable text boxes, better for PowerPoint editing)

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

---

## Step 6.2: PDF Export (via headless Chrome)

```bash
chrome --headless --print-to-pdf=[presentation].pdf --run-all-compositor-stages-before-draw --virtual-time-budget=5000 [presentation].html
```

Or use Playwright for programmatic export with wait-for-animation support.

---

## Step 6.3: Delivery

Provide all files:
- `[name].html`: Full experience with animations
- `[name].pptx`: Editable in Google Slides/PowerPoint
- `[name].pdf`: Shareable, print-ready

---

## HTML Presentation Delivery Options

After generating an HTML presentation, offer these sharing options:

### Deploy to Vercel (live URL)

```bash
npx vercel --version  # check if installed
# Deploy the HTML file for a live, shareable URL
```
- Free tier, works on any device
- Redeploying overwrites same URL

### Export to PDF (static snapshot via Playwright)

- Renders at 1920x1080 (standard) or 1280x720 (compact)
- Animations not preserved, static snapshot only
- Requires `.slide` class on all slide elements

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
