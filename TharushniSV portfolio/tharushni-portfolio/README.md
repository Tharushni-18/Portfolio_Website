# Tharushni S.V. — Portfolio

A single-page, dark-mode developer portfolio built with plain HTML, CSS, and JavaScript (no build step required).

## Structure

```
portfolio/
├── index.html        All markup and section mount points
├── css/style.css      Design tokens, layout, components, animations
├── js/
│   ├── data.js         All content (skills, experience, projects, etc.) — edit this to update text
│   ├── icons.js         Inline SVG icon set
│   └── main.js          Renders data-driven sections + nav/scroll/form behavior
└── assets/               Put resume.pdf here
```

## Running locally

No build tools needed — just serve the folder, e.g.:

```
npx serve .
```

or open `index.html` directly in a browser.

## Two things to finish before publishing

1. **Resume file** — the "Download Resume" button links to `assets/resume.pdf`, which isn't included here. Drop your resume PDF into `assets/` with that filename (or update `person.resumeHref` in `js/data.js`).
2. **Project GitHub links** — the brief listed your GitHub profile as the primary repo source but not the individual repository URLs, so each project's GitHub button currently points to your profile (`https://github.com/Tharushni-18`). Once you confirm the exact repo URLs, update the `github` field for each project in `js/data.js`.

## Editing content

Everything text-based (skills, experience, project copy, certifications, achievements, extracurriculars, social links) lives in `js/data.js` — change it there and the page re-renders automatically, no markup edits needed.
