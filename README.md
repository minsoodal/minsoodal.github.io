# minsoodal.github.io

Academic personal website for Minhwa Lee.

This version uses **React + Vite** for the UI and **Markdown + front matter** for blog posts and project detail pages.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content organization

Blog posts and project detail pages are stored as Markdown files instead of JavaScript objects.

```text
src/content/blog/
├── index.js
├── clinical-ai-evaluation-beyond-accuracy.md
├── multi-agent-eligibility-reasoning.md
└── clinical-nlp-to-physical-ai-roadmap.md

src/content/projects/
├── index.js
├── academic-website-design-system.md
└── clinical-ai-evaluation-toolkit.md
```

The `index.js` files use Vite's `import.meta.glob` to import all Markdown files, then a small browser-safe parser in `src/utils/frontMatter.js` reads each file's front matter. This avoids Node-only APIs such as `Buffer` in the browser bundle.

## Add a new blog post

Create a new Markdown file under `src/content/blog/`:

```text
src/content/blog/my-new-post.md
```

Example:

```md
---
id: my-new-post
date: June 2026
dateSortKey: 2026-06-01
category: Clinical AI
readingTime: 4 min read
title: My New Post
excerpt: A short description shown on the blog list page.
links:
  - Related paper
---

## First section

Write your post here in normal Markdown.

- Lists work
- Tables work
- Code blocks work
```

The post appears automatically after saving the file and rebuilding the site.

## Add a new project page

Create a new Markdown file under `src/content/projects/`:

```text
src/content/projects/my-new-project.md
```

Example:

```md
---
id: my-new-project
title: My New Project
subtitle: Short project subtitle
status: In progress
year: 2026
description: Short description shown on the project list page.
links:
  - Demo
  - GitHub
stack:
  - React
  - Vite
goals:
  - First project goal
  - Second project goal
---

## Overview

Write the full project case study here.

## Design rationale

Explain your choices here.
```

## GitHub Pages

This repo is configured for the user site URL:

```text
https://minsoodal.github.io
```

Because the repository name is `minsoodal.github.io`, `vite.config.js` uses:

```js
base: "/"
```

In GitHub repo settings, set Pages source to **GitHub Actions**.

The workflow uses `npm install` before `npm run build`. If you later commit a `package-lock.json`, you may change the workflow back to `npm ci`.
