# Maintainer Notes

This document describes how DeckMason relates to the canonical internal presentation skill and how to sync updates.

## Relationship to the canonical skill

DeckMason is the public, brand-agnostic distribution of a larger internal presentation skill (`ppt-creator`). The internal skill has 14 reference files, a chart generation script, and brand-specific content. DeckMason compresses the brand-agnostic advances into a self-contained 4-file repo that any AI coding agent can use without setup.

**What stays in the internal skill only:**
- Brand-specific themes (e.g., company brand theme with specific fonts and colors)
- Brand-specific auto-theme recommendation table entries
- Internal output path conventions
- Chart generation script (`chartkit.py`) and its dependencies
- Reference files split across 14 files (inlined into DeckMason's single SKILL.md)
- Internal examples that reference specific companies or products

**What ships in DeckMason:**
- All brand-agnostic workflow advances
- All 31 themes + Kami Warm Editorial (no brand-specific themes)
- PPTX export script (python-pptx path)
- pptxgenjs DOM-traversal approach (documented in SKILL.md, not as a separate script)
- All anti-pattern catalogs, industry constraints, voice guidance, critique rubrics

## Sync process

When the canonical skill advances and DeckMason needs updating:

1. **Read the canonical skill** (`ppt-creator/SKILL.md` and its reference files)
2. **Identify brand-agnostic advances** worth porting
3. **Strip all brand references**: company names, brand-specific themes, internal path conventions, internal examples
4. **Compress into the self-contained SKILL.md**: inline relevant reference file content, keep the 6-phase structure
5. **Update STYLE_PRESETS.md** if new themes were added
6. **Update this file** with the sync date and what changed
7. **Update README.md** if new capabilities or themes were added
8. **Commit and push** with a descriptive message

## What to strip (checklist)

Before publishing, grep for and remove:

- [ ] Company names in examples (replace with generic placeholders)
- [ ] Brand-specific theme entries in the auto-theme table
- [ ] Brand-specific CSS themes (colors, fonts, logos)
- [ ] Internal output path conventions (e.g., `~/.codex/output/presentations/`)
- [ ] References to internal skills by name that don't exist in this repo
- [ ] References to internal tooling (chartkit, HTML review runtime, etc.)
- [ ] Internal-only modes that depend on infrastructure not available in a standalone clone

## File structure mapping

| DeckMason file | Canonical skill source |
|---|---|
| `SKILL.md` | `ppt-creator/SKILL.md` (compressed, references inlined) |
| `STYLE_PRESETS.md` | `ppt-creator/references/HTML_THEMES.md` + `ppt-creator/SKILL.md` (Extended Presets + Kami sections) |
| `scripts/pptx_export.py` | `ppt-creator/scripts/pptx_export.py` (if it exists, otherwise from original DeckMason) |
| `README.md` | Written fresh, reflects current capabilities |
| `MAINTAINER.md` | This file |

## Last sync

**Date:** 2026-07-31
**From:** `ppt-creator` skill (1544-line SKILL.md + 14 reference files)
**What changed:** Full rewrite. Ported all brand-agnostic advances: Pyramid Principle, Canvas Scale Architecture, Viewport Fitting Rules, Editorial Layout Discipline, Agent Authoring Discipline, 20 Extended Style Presets + Kami Warm Editorial, Image Slides Mode, pptxgenjs PPTX path, Cinematic Slide Mode, Slide Background Image System (7 roles), Designer's Eye 5-Dimension Critique, Voice Guidance by Deck Type, Anti-patterns catalog, Industry Theme Constraints, Chart Anti-patterns, Pre-Flight Scoping, Page Type Taxonomy, HTML Slide Template Library (32 templates), Narrative Spine, Vertical Budget Math, One Idea Per Slide, Swiss International Strict Mode, Editorial Web Deck Mode, Theme Variation Protocol, Design Philosophy School System, Speaker Notes Overlay, Animation Patterns.
**Stripped:** All brand-specific content, internal path conventions, internal tooling references.
