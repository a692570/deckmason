# Contributing to DeckMason

Thanks for your interest in contributing! DeckMason is an open-source AI presentation skill. Here's how to help.

## Ways to contribute

- **New themes**: add a preset to `STYLE_PRESETS.md` with full CSS, font sources, and a mood-to-preset mapping entry
- **Better export scripts**: improve `scripts/pptx_export.py` or add new export paths
- **Workflow improvements**: propose changes to `SKILL.md` that make decks better
- **Bug fixes**: fix issues in the export script or CSS presets
- **Documentation**: improve README, examples, or add platform-specific guides

## How to add a new theme

1. Pick a name that describes the aesthetic, not the use case (e.g., "Cobalt Grid" not "Tech Pitch")
2. Define the full CSS token set in `:root` (backgrounds, text, accents, fonts, spacing)
3. Specify display font, body font, and mono font with their sources (Google Fonts, Fontshare)
4. List signature elements and animation style
5. Add a "when to use" section
6. Add an entry to the mood-to-preset mapping table
7. Test by generating a 3-slide preview deck using the theme

## How to propose workflow changes

1. Open an issue describing the problem and proposed solution
2. Reference which phase or section of `SKILL.md` is affected
3. If the change adds a new rule, explain what failure mode it prevents
4. If the change adds a new mode, explain when it should activate and when to skip it

## Pull request checklist

- [ ] No company names, brand-specific content, or internal path references
- [ ] No em dashes (use comma, colon, or rewrite)
- [ ] New themes include full CSS with font sources
- [ ] New rules include what failure mode they prevent
- [ ] README.md updated if new capabilities or themes were added
- [ ] MAINTAINER.md updated with sync date if porting from a canonical skill
- [ ] Tested by generating at least one deck using the change

## Style conventions

- Use sentence case for slide headings (assertion sentences, not title labels)
- One idea per rule or section
- No em dashes in any file
- No emoji unless explicitly requested
- Reference GitHub repos as `owner/repo` (e.g., `zarazhangrui/beautiful-html-templates`)
- Attribute borrowed patterns: "Adapted from [source]"

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
