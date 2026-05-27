---
id: personal-website-design
title: Personal Website Design
# subtitle: GitHub Pages personal site
category: Web Development
status: Design demo
year: 2026
image: ""
description: A GitHub page for research demo, with blog posts and projects as a portfolio website
links:
  - Demo
  - GitHub
stack:
  - React
  - GitHub Pages
  - Vite
  - Markdown
goals:
  - Keep the homepage focused on identity and recent updates.
  - Separate publications, blog posts, and projects into dedicated pages.
  - Use a restrained academic visual style rather than a startup-style portfolio layout.
  - Make project pages readable as short technical case studies.
---

## Overview

This project explores a compact academic website structure for presenting research identity, selected publications, blog posts, and project case studies without making the homepage feel crowded. The design is intentionally minimal: a short bio, a news-first homepage, and dedicated pages for deeper content.

## Design rationale

The homepage is designed to behave like a research landing page: it quickly answers who I am, what question motivates my work, and what has happened recently. Longer artifacts are moved into their own pages so the site can grow without overwhelming first-time visitors.

## Information architecture

The site separates content into Publications, Blog, and Projects. Publications support filtering by keyword and year. Blog posts expand into article pages. Projects expand into project case studies with goals, stack, and implementation notes.

## Future improvements

A production version could add real URL routes, support search, and generate publication metadata from BibTeX or a structured JSON source.
