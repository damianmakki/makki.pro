## [makki.pro](https://www.makki.pro)

## Getting started

```bash
npm install
```

## Development

Run the portfolio and blog dev servers concurrently:

```bash
npm run dev
```

Or separately:

```bash
npm start          # React portfolio → localhost:3000
npm run start:blog # Eleventy blog   → localhost:8081/blog/
```

## Building

```bash
npm run build
```

This generates the résumé PDF, builds React (which wipes `build/`), adds the direct résumé entrypoint, then builds Eleventy into the same output. The combined output in `build/` is what gets deployed.

To build each part individually:

```bash
npm run build:react  # CRA build → build/
npm run build:blog   # Eleventy  → build/blog/ pages
```

> **Note:** Always run `build:react` before `build:blog`. CRA wipes the `build/` directory on each run, which would delete the Eleventy output if the order were reversed.

## Deploying

```bash
npm run deploy
```

Runs the full build then pushes `build/` to the `gh-pages` branch, which GitHub Pages serves at [makki.pro](https://makki.pro).

### How it works

`predeploy` → `npm run build` (React + Eleventy into `build/`)  
`deploy` → `gh-pages -d build` pushes `build/` as the root of the `gh-pages` branch

The `homepage` field in `package.json` tells CRA to build assets with the correct base URL. The `public/CNAME` file is copied into `build/` automatically and tells GitHub Pages to serve the site on the custom domain.

### Subsequent deploys

Just run `npm run deploy` — it rebuilds everything and force-pushes to `gh-pages`. The live site updates within ~30 seconds.

## Writing a new blog post

1. Create a markdown file in `posts/` — e.g. `posts/my-post-title.md`
2. Add frontmatter at the top:

```yaml
---
title: "Your post title"
date: 2026-05-01
topic: design          # ai | design | engineering | notebook
excerpt: "One or two sentences shown in the listing."
read: "5 min"
permalink: /blog/my-post-title/index.html
layout: post.njk
---

Your content here in markdown.
```

3. Run `npm run deploy` to build and publish.

## Project structure

```
posts/              Markdown blog posts + Eleventy page templates
blog-src/           Eleventy templates and blog CSS
  _includes/
    base.njk        HTML shell (nav, theme, footer)
    post.njk        Individual post layout
  blog.css          Blog styles (mirrors src/index.css)
src/                React portfolio source
  components/
  pages/
  index.css         Source of truth for design tokens
public/             Static assets (CNAME, favicon, etc.)
.eleventy.js        Eleventy config
```

## Credit & Thanks

- [Eleventy](https://github.com/11ty/eleventy)
- [React](https://github.com/facebook/react)

## Résumé download and descriptions

The existing React layout is retained. `src/data/career.json` feeds the compact web résumé and the complete PDF. Each entry’s short `summary` appears as a byline on the web résumé and in the PDF. Longer `description` copy stays in `content-review/resume-copy.md` for review. Edit `summary` to update a public byline; verify claims and dates before adding detail.

Install the PDF tooling once:

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

Run `npm run build:pdf` to refresh the download before local React development. `npm run build` regenerates it automatically. The generator uses `.venv/bin/python`, or `PYTHON` if supplied. The generated PDF is copied to `public/` for the existing React build.

`npm run test:site` validates generated metadata and the PDF. `CI=true npm test -- --watchAll=false` checks the compact résumé and draft visibility. Deployment remains a separate step.

The generated `build/resume/index.html` is the existing React shell with résumé-specific metadata, allowing `/resume` and `/resume/` to load directly on GitHub Pages. Content still renders through React; this refinement does not migrate or pre-render the application.
