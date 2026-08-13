#!/usr/bin/env python3
"""
Visual Preview Mode for DeckMason

Generates 3 quick visual preview slides (cover slide only) using 3 different
themes, so the user can pick a visual direction before the agent builds the
full deck.

Usage:
    python3 preview_themes.py "Your Topic Here"
    python3 preview_themes.py "Your Topic Here" --output-dir previews

Creates 3 HTML files:
    previews/preview-1-dark.html   (Deep Space theme)
    previews/preview-2-light.html  (Modern SaaS theme)
    previews/preview-3-bold.html   (Bold Signal theme)

Each file is a single cover slide with the topic as the title. The user opens
all 3 in a browser and picks a direction. The chosen direction becomes the
aesthetic direction for the full deck, skipping the text-based proposal.
"""

import argparse
import os
import sys

# Theme definitions: CSS variables for each preview theme
THEMES = {
    "dark": {
        "name": "Deep Space",
        "bg_primary": "#030712",
        "bg_secondary": "#111827",
        "text_primary": "#f9fafb",
        "text_secondary": "#6b7280",
        "accent": "#818cf8",
        "accent_secondary": "#c084fc",
        "font_display": "'Space Grotesk', sans-serif",
        "font_body": "'DM Sans', sans-serif",
        "font_url": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=DM+Sans:wght@400;500&display=swap",
    },
    "light": {
        "name": "Modern SaaS",
        "bg_primary": "#ffffff",
        "bg_secondary": "#f8f9fa",
        "text_primary": "#1a1a1a",
        "text_secondary": "#666666",
        "accent": "#00E3AA",
        "accent_secondary": "#00c996",
        "font_display": "'Space Grotesk', sans-serif",
        "font_body": "'Inter', sans-serif",
        "font_url": "https://api.fontshare.com/v2/css?f[]=inter@400;500;600&f[]=space-grotesk@400;500;600;700",
    },
    "bold": {
        "name": "Bold Signal",
        "bg_primary": "#1a1a1a",
        "bg_secondary": "#2a2a2a",
        "text_primary": "#ffffff",
        "text_secondary": "#a0a0a0",
        "accent": "#FF5722",
        "accent_secondary": "#FF7043",
        "font_display": "'Archivo Black', sans-serif",
        "font_body": "'Space Grotesk', sans-serif",
        "font_url": "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&display=swap",
    },
}


def generate_preview_html(topic, theme_key):
    """Generate a single cover slide HTML for the given topic and theme."""
    t = THEMES[theme_key]

    html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview: {theme_name}</title>
    <link rel="stylesheet" href="{font_url}">
    <style>
        :root {{
            --bg-primary: {bg_primary};
            --bg-secondary: {bg_secondary};
            --text-primary: {text_primary};
            --text-secondary: {text_secondary};
            --accent: {accent};
            --accent-secondary: {accent_secondary};
            --font-display: {font_display};
            --font-body: {font_body};
        }}

        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        html, body {{
            width: 100%;
            height: 100%;
            overflow: hidden;
        }}

        .slide {{
            width: 100vw;
            height: 100vh;
            height: 100dvh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: clamp(2rem, 6vw, 6rem);
            background: var(--bg-primary);
            font-family: var(--font-body);
            position: relative;
            overflow: hidden;
        }}

        .accent-bar {{
            position: absolute;
            top: 0;
            left: 0;
            width: clamp(4px, 1vw, 8px);
            height: 100%;
            background: var(--accent);
        }}

        .preview-label {{
            position: absolute;
            top: clamp(1rem, 3vh, 2rem);
            right: clamp(1rem, 3vw, 2rem);
            font-family: var(--font-body);
            font-size: clamp(10px, 1vw, 14px);
            font-weight: 500;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--text-secondary);
        }}

        .topic {{
            font-family: var(--font-display);
            font-size: clamp(2rem, 6vw, 5rem);
            font-weight: 700;
            line-height: 1.1;
            color: var(--text-primary);
            max-width: 85%;
            margin-bottom: clamp(0.5rem, 2vh, 1.5rem);
        }}

        .subtitle {{
            font-family: var(--font-body);
            font-size: clamp(0.9rem, 1.8vw, 1.4rem);
            font-weight: 400;
            line-height: 1.5;
            color: var(--text-secondary);
            max-width: 70%;
        }}

        .accent-dot {{
            display: inline-block;
            width: clamp(6px, 0.8vw, 10px);
            height: clamp(6px, 0.8vw, 10px);
            border-radius: 50%;
            background: var(--accent);
            margin-right: clamp(0.3rem, 0.8vw, 0.6rem);
            vertical-align: middle;
        }}

        .footer {{
            position: absolute;
            bottom: clamp(1rem, 3vh, 2rem);
            left: clamp(2rem, 6vw, 6rem);
            font-family: var(--font-body);
            font-size: clamp(10px, 0.9vw, 13px);
            color: var(--text-secondary);
            letter-spacing: 0.05em;
        }}
    </style>
</head>
<body>
    <section class="slide" data-slide="1" data-screen-label="01 Cover">
        <div class="accent-bar"></div>
        <div class="preview-label">Preview: {theme_name}</div>
        <h1 class="topic">{topic}</h1>
        <p class="subtitle"><span class="accent-dot"></span>DeckMason visual direction preview</p>
        <div class="footer">DeckMason | {theme_name} theme</div>
    </section>
</body>
</html>
""".format(
        theme_name=t["name"],
        font_url=t["font_url"],
        bg_primary=t["bg_primary"],
        bg_secondary=t["bg_secondary"],
        text_primary=t["text_primary"],
        text_secondary=t["text_secondary"],
        accent=t["accent"],
        accent_secondary=t["accent_secondary"],
        font_display=t["font_display"],
        font_body=t["font_body"],
        topic=topic,
    )

    return html


def generate_previews(topic, output_dir):
    """Generate all 3 preview HTML files."""
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    files = {
        "preview-1-dark.html": "dark",
        "preview-2-light.html": "light",
        "preview-3-bold.html": "bold",
    }

    print("Generating 3 visual previews for: {}".format(topic))
    for filename, theme_key in files.items():
        html = generate_preview_html(topic, theme_key)
        filepath = os.path.join(output_dir, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        theme_name = THEMES[theme_key]["name"]
        print("  {}/{} ({})".format(output_dir, filename, theme_name))

    print()
    print("Done. Open these 3 files in your browser and pick a direction:")
    for filename in files:
        filepath = os.path.join(output_dir, filename)
        print("  {}".format(os.path.abspath(filepath)))
    print()
    print("Tell your agent: 'I like the dark/light/bold direction.'")
    print("The chosen direction becomes the aesthetic direction for the full deck.")


def main():
    parser = argparse.ArgumentParser(
        description="Generate 3 visual preview slides for DeckMason theme selection."
    )
    parser.add_argument("topic", help="The presentation topic or title for the preview slides")
    parser.add_argument(
        "--output-dir", "-o",
        default="previews",
        help="Output directory for preview files (default: previews)"
    )
    args = parser.parse_args()

    generate_previews(args.topic, args.output_dir)


if __name__ == "__main__":
    main()
