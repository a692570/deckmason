# Phase 0: Brief

Summary: Record the user's request, defaults, and assumptions before touching any slide. Write a structured brief with audience, arc, ask, and success. Also covers PPT import workflow for converting existing .pptx files into DeckMason source material.

---

## Brief Structure

Record the user's original request, defaults used, and assumptions made. Write a brief with four sections:

1. **Audience**: who they are, what they optimize for, likely objections
2. **Arc**: what is the "what is" (current reality/pain) vs "what could be" (opportunity/transformation)
3. **Ask**: the specific decision or action the deck drives
4. **Success**: what does a win look like after they read it?

Read the brief before touching any slide in follow-up sessions.

---

## PPT Import Workflow

When the user provides a `.pptx` file and wants it converted to HTML, or wants to use an existing deck as source material:

### Step 1: Extract content with the import script

```bash
python3 scripts/pptx_import.py input.pptx --output decks/input_deck.json
```

The script reads the .pptx file using python-pptx and extracts:
- Slide layout type for each slide
- Title text and body text/paragraphs
- Images with their positions and sizes
- Colors from the slide master theme (theme1.xml)
- Theme fonts from theme1.xml

The output is a structured JSON file with slide data and theme metadata.

### Step 2: Review the extracted content

Confirm extracted slide titles, content summaries, and image counts with the user. Read the JSON output and understand the original deck structure.

### Step 3: Map source slides to DeckMason slide types

Map each source slide to a DeckMason slide type:

| Source pattern | DeckMason slide type |
|---|---|
| Title slide with subtitle | Cover |
| Bullet list with heading | Content (light or standard density) |
| Single large number or metric | Big number |
| Two-column comparison | Comparison |
| Quote with attribution | Quote |
| Section break / divider | Section divider |
| Closing / thank you / contact | Closing |

### Step 4: Feed content into the brief

Use the extracted content as source material for the brief instead of asking the user for a topic. Preserve the original deck structure but apply DeckMason quality guardrails (see references/quality-guardrails.md):

- Apply the Pyramid Principle to restructure content (see references/phase1-structure.md)
- Map to DeckMason slide types (see references/phase2-outline.md)
- Apply color theory validation to the imported theme colors (see references/phase5-polish.md)
- Run the self-check checklist before delivery (see references/quality-guardrails.md)

### Step 5: Generate HTML

Proceed to style selection (theme variation protocol, 3 directions) and generate HTML preserving all text, images, slide order, and speaker notes from the original deck.

---

## PPT-to-HTML Conversion (legacy manual path)

Before the import script existed, the manual conversion path was:

1. Extract content with `python-pptx`: titles, body text, images, speaker notes
2. Confirm extracted slide titles, content summaries, and image counts with the user
3. Proceed to style selection (theme variation protocol, 3 directions)
4. Generate HTML preserving all text, images, slide order, and speaker notes

The import script (scripts/pptx_import.py) automates steps 1 and 2. Use the script when available; fall back to manual extraction only if the script fails.
