#!/usr/bin/env node
/**
 * DeckMason CLI
 *
 * A minimal CLI for DeckMason. Pure Node.js stdlib, no external dependencies.
 *
 * Usage:
 *   deckmason init [dir]       Copy skill files to target directory
 *                              (default: ~/.claude/skills/deckmason)
 *   deckmason themes           List all 31 themes with descriptions
 *   deckmason preview <topic>  Generate 3 visual preview slides
 *   deckmason import <file>    Import a .pptx file to JSON
 *   deckmason help             Show this help message
 */

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync, spawn } = require("child_process");

const SCRIPT_DIR = __dirname;
const ROOT_DIR = path.dirname(SCRIPT_DIR);

// ============================================================
// THEMES: all 31 themes with descriptions
// ============================================================

const THEMES = [
  { name: "Modern SaaS", vibe: "Clean, confident, developer-friendly, professional SaaS", bestFor: "Pitch decks, product demos, technical talks" },
  { name: "Neon Cyber", vibe: "Futuristic, techy, cutting-edge", bestFor: "Tech talks, gaming" },
  { name: "Midnight Executive", vibe: "Premium, trustworthy, corporate", bestFor: "Board meetings, enterprise" },
  { name: "Deep Space", vibe: "Inspiring, vast, contemplative, visionary", bestFor: "Keynotes, vision talks" },
  { name: "Terminal Green", vibe: "Technical, terminal-style", bestFor: "Engineering presentations" },
  { name: "Paper & Ink", vibe: "Editorial, warm cream, crimson accent", bestFor: "Education, storytelling" },
  { name: "Swiss Modern", vibe: "Ultra-clean grid, red accent on white", bestFor: "Design presentations" },
  { name: "Soft Pastel", vibe: "Triadic, warm, playful", bestFor: "Marketing, community" },
  { name: "Warm Editorial", vibe: "Analogous warm, amber and blue", bestFor: "Brand storytelling" },
  { name: "Brutalist", vibe: "Stark, black and white with red", bestFor: "Creative pitches" },
  { name: "Gradient Wave", vibe: "Analogous blue-purple gradient", bestFor: "Startup pitches" },
  { name: "Bold Signal", vibe: "Confident, high-impact, orange accent on dark", bestFor: "Product launches, keynotes" },
  { name: "Electric Studio", vibe: "Bold, professional, split-panel", bestFor: "Studio decks, product" },
  { name: "Creative Voltage", vibe: "Energetic, retro-modern, yellow-green accent", bestFor: "Creative tech, startups" },
  { name: "Dark Botanical", vibe: "Elegant, sophisticated, warm gold on dark", bestFor: "Lifestyle, premium brands" },
  { name: "Notebook Tabs", vibe: "Editorial, organized, colorful tabs", bestFor: "Organized content, education" },
  { name: "Pastel Geometry", vibe: "Friendly, approachable, soft pastels", bestFor: "Community, friendly brands" },
  { name: "Split Pastel", vibe: "Playful, two-color vertical split", bestFor: "Playful decks, marketing" },
  { name: "Vintage Editorial", vibe: "Witty, editorial, earth tones", bestFor: "Heritage brands, essays" },
  { name: "Liquid Glass Bento", vibe: "Asymmetric glass cards, soft blur", bestFor: "Product showcases, bento layouts" },
  { name: "Engineering Blueprint", vibe: "Annotated technical grid", bestFor: "Architecture, engineering" },
  { name: "Watercolor Map", vibe: "Hand-painted annotated map", bestFor: "Geographic content, stories" },
  { name: "Golden Serif Quote", vibe: "Oversized gold serif, interstitial", bestFor: "Quote-driven decks, interstitials" },
  { name: "Chalkboard Lesson", vibe: "Hand-drawn diagrams, teaching", bestFor: "Education, tutorials" },
  { name: "Exploded Layer Stack", vibe: "Hero exploded architecture diagram", bestFor: "Architecture, system design" },
  { name: "Hyperreal Product", vibe: "Moody studio render, product hero", bestFor: "Product launches, hardware" },
  { name: "Summary Infographic", vibe: "Dense one-page summary, icon-led", bestFor: "Summaries, infographics" },
  { name: "Cobalt Grid", vibe: "Studious, editorial, data-heavy", bestFor: "Data decks, research" },
  { name: "8-Bit Orbit", vibe: "Retro-tech, rebellious", bestFor: "Gaming, retro tech" },
  { name: "Raw Grid", vibe: "Neo-brutalist, founder pitch", bestFor: "Founder pitches, startups" },
  { name: "Broadside", vibe: "Dark editorial with fire orange", bestFor: "Editorial decks, bilingual" },
];

// Add Kami Warm Editorial as the 32nd style (31 themes + Kami)
const KAMI = {
  name: "Kami Warm Editorial",
  vibe: "Print-quality, paper-like, parchment background",
  bestFor: "Research, white papers, academic, document-style investor briefs",
};

// ============================================================
// COMMANDS
// ============================================================

function cmdInit(targetDir) {
  const defaultDir = path.join(os.homedir(), ".claude", "skills", "deckmason");
  const dest = targetDir || defaultDir;

  console.log("Initializing DeckMason in: " + dest);

  // Files and directories to copy
  const toCopy = [
    "SKILL.md",
    "STYLE_PRESETS.md",
    "AGENTS.md",
    "README.md",
    "MAINTAINER.md",
    "CONTRIBUTING.md",
    "LICENSE",
    "package.json",
  ];

  const dirsToCopy = ["scripts", "references", "examples", "demo"];

  // Create destination
  fs.mkdirSync(dest, { recursive: true });

  // Copy individual files
  for (const file of toCopy) {
    const src = path.join(ROOT_DIR, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(dest, file));
      console.log("  copied: " + file);
    }
  }

  // Copy directories recursively
  for (const dir of dirsToCopy) {
    const src = path.join(ROOT_DIR, dir);
    if (fs.existsSync(src)) {
      copyDirRecursive(src, path.join(dest, dir));
      console.log("  copied: " + dir + "/");
    }
  }

  console.log("");
  console.log("DeckMason installed to: " + dest);
  console.log("");
  console.log("Next steps:");
  console.log("  1. Point your AI agent at " + path.join(dest, "SKILL.md"));
  console.log("  2. Ask: \"Create a pitch deck about [topic]\"");
  console.log("");
  console.log("Or use the CLI:");
  console.log("  deckmason themes           List all themes");
  console.log("  deckmason preview <topic>  Generate visual previews");
  console.log("  deckmason import <file>    Import a .pptx file");
}

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function cmdThemes() {
  console.log("DeckMason Themes (31 + Kami Warm Editorial)");
  console.log("==========================================");
  console.log("");

  console.log("Original 11:");
  for (let i = 0; i < 11; i++) {
    const t = THEMES[i];
    console.log("  " + (i + 1) + ". " + t.name);
    console.log("     Vibe: " + t.vibe);
    console.log("     Best for: " + t.bestFor);
  }

  console.log("");
  console.log("Extended 20:");
  for (let i = 11; i < 31; i++) {
    const t = THEMES[i];
    console.log("  " + (i + 1) + ". " + t.name);
    console.log("     Vibe: " + t.vibe);
    console.log("     Best for: " + t.bestFor);
  }

  console.log("");
  console.log("Special:");
  console.log("  32. " + KAMI.name);
  console.log("     Vibe: " + KAMI.vibe);
  console.log("     Best for: " + KAMI.bestFor);

  console.log("");
  console.log("Full CSS and font details in STYLE_PRESETS.md");
}

function cmdPreview(topic) {
  if (!topic) {
    console.error("ERROR: Please provide a topic.");
    console.error("Usage: deckmason preview \"Your Topic Here\"");
    process.exit(1);
  }

  const scriptPath = path.join(SCRIPT_DIR, "preview_themes.py");
  if (!fs.existsSync(scriptPath)) {
    console.error("ERROR: preview_themes.py not found at: " + scriptPath);
    process.exit(1);
  }

  console.log("Generating 3 visual previews for: " + topic);
  try {
    execSync("python3 \"" + scriptPath + "\" \"" + topic + "\"", {
      stdio: "inherit",
      cwd: process.cwd(),
    });
  } catch (e) {
    console.error("ERROR: Failed to run preview_themes.py");
    console.error(e.message);
    process.exit(1);
  }
}

function cmdImport(pptxFile) {
  if (!pptxFile) {
    console.error("ERROR: Please provide a .pptx file path.");
    console.error("Usage: deckmason import <file.pptx>");
    process.exit(1);
  }

  if (!fs.existsSync(pptxFile)) {
    console.error("ERROR: File not found: " + pptxFile);
    process.exit(1);
  }

  const scriptPath = path.join(SCRIPT_DIR, "pptx_import.py");
  if (!fs.existsSync(scriptPath)) {
    console.error("ERROR: pptx_import.py not found at: " + scriptPath);
    process.exit(1);
  }

  console.log("Importing: " + pptxFile);
  try {
    execSync("python3 \"" + scriptPath + "\" \"" + pptxFile + "\"", {
      stdio: "inherit",
      cwd: process.cwd(),
    });
  } catch (e) {
    console.error("ERROR: Failed to run pptx_import.py");
    console.error(e.message);
    process.exit(1);
  }
}

function showHelp() {
  console.log("DeckMason CLI v0.1.0");
  console.log("");
  console.log("AI Presentation Skill for Coding Agents");
  console.log("");
  console.log("Usage:");
  console.log("  deckmason init [dir]       Copy skill files to target directory");
  console.log("                              (default: ~/.claude/skills/deckmason)");
  console.log("  deckmason themes           List all 31 themes with descriptions");
  console.log("  deckmason preview <topic>  Generate 3 visual preview slides");
  console.log("  deckmason import <file>    Import a .pptx file to JSON");
  console.log("  deckmason help             Show this help message");
  console.log("");
  console.log("Examples:");
  console.log("  deckmason init");
  console.log("  deckmason init ./my-decks");
  console.log("  deckmason themes");
  console.log("  deckmason preview \"The Future of AI\"");
  console.log("  deckmason import company-deck.pptx");
  console.log("");
  console.log("npm install:");
  console.log("  npx deckmason init");
  console.log("  npm install -g deckmason");
}

// ============================================================
// MAIN
// ============================================================

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === "help" || command === "--help" || command === "-h") {
    showHelp();
    return;
  }

  switch (command) {
    case "init":
      cmdInit(args[1]);
      break;
    case "themes":
      cmdThemes();
      break;
    case "preview":
      cmdPreview(args[1]);
      break;
    case "import":
      cmdImport(args[1]);
      break;
    default:
      console.error("Unknown command: " + command);
      console.error("");
      showHelp();
      process.exit(1);
  }
}

main();
