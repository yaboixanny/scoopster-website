# Frontend Design Skill — Avoiding Generic AI UI

## Purpose

This document provides just-in-time frontend design guidance to prevent generic, AI-looking interfaces when generating HTML/CSS/JS with LLMs.

Use this file as a Skill or reference when generating:
- Landing pages
- Marketing sites
- Dashboards
- UI components

---

## Core Principle

LLMs default to safe, high-probability design patterns unless explicitly steered.

Frontend quality improves when you:
- Specify what to avoid
- Provide concrete aesthetic alternatives
- Guide at the right abstraction level

---

## Avoid These Defaults

- Inter, Roboto, Open Sans, Lato, system fonts
- Purple gradients on white backgrounds
- Flat, unlayered backgrounds
- Generic component layouts
- Evenly distributed, timid color palettes

---

## Typography Guidelines

Typography is the fastest way to improve perceived quality.

### Rules
- Never use default or generic fonts
- Pick one distinctive primary font and commit
- Use extreme contrast (100/200 vs 800/900 weights)
- Use large size jumps (3x+)
- Load fonts from Google Fonts

### Good Font Categories
- Code / modern: JetBrains Mono, Fira Code, Space Grotesk
- Editorial: Playfair Display, Crimson Pro
- Technical: IBM Plex, Source Sans 3
- Distinctive: Bricolage Grotesque, Newsreader

---

## Color & Theme

- Commit to a single cohesive aesthetic
- Use dominant colors with sharp accents
- Prefer CSS variables
- Draw inspiration from IDE themes, print, or cultural aesthetics

Avoid neutral-only or theme-less palettes.

---

## Motion & Animation

- Prefer one strong orchestrated animation
- Use staggered reveals on page load
- Use CSS-only animations where possible
- For React, use a motion library

Focus motion on hierarchy and key moments.

---

## Backgrounds & Depth

Avoid default solid backgrounds.

Prefer:
- Layered CSS gradients
- Subtle geometric patterns
- Atmospheric background effects
- Light texture or noise

---

## Creative Constraint Reminder

Models tend to converge on new defaults.

Actively vary:
- Fonts
- Light vs dark themes
- Aesthetic references
- Layout rhythm

Interfaces should feel designed, not generated.

---

## Usage Notes

- Load only for frontend/UI generation
- Do not include in unrelated tasks
- Treat as reusable organizational design knowledge
