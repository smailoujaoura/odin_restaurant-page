# Odin Restaurant Page

A single-page restaurant website built as part of The Odin Project to practice **JavaScript modules**, **DOM rendering**, and a **Webpack-based frontend workflow**.

## Live Demo

- Website: [odin_restaurant-page/about](https://smailoujaoura.github.io/odin_restaurant-page/about)
- Local project walkthrough recording: `docs/Kooha-2026-04-07-20-53-12.webm`

<video src="./docs/Kooha-2026-04-07-20-53-12.webm" controls width="900"></video>

## Project Goals

- Build a multi-view SPA-like experience without a framework.
- Organize UI into reusable modules instead of one large script.
- Use Webpack to bundle JS/CSS and generate HTML from template.
- Practice browser navigation behavior via `history.pushState`.

## Tech Stack

- JavaScript (ES Modules)
- HTML5 + CSS3
- Webpack 5
- `webpack-dev-server`
- `html-webpack-plugin`
- `css-loader` + `style-loader`

## Architecture Overview

The app uses a single mount point (`.views`) and injects one view at a time (`home`, `menu`, `about`) as HTML template strings exported from `src/views.js`.

```mermaid
flowchart TD
    A[Browser loads bundle.js] --> B[main.js bootstraps app]
    B --> C[render(homeView, '/')]
    C --> D[Inject HTML into .views]
    D --> E[Attach nav button listeners]
    E --> F{User action}
    F -->|Click Home| G[render(homeView, '/')]
    F -->|Click Menu| H[render(menuView, '/menu')]
    F -->|Click About| I[render(aboutView, '/about')]
    G --> J[pushState updates URL]
    H --> J
    I --> J
    J --> K[Back/Forward triggers popstate]
    K --> L[Restore view from e.state.path]
```

## Key Implementation Notes

- **Module separation**  
  `src/main.js` handles routing/render orchestration, while `src/views.js` contains view templates.

- **Client-side navigation**  
  On every render, button handlers are rebound and URL is updated with `history.pushState`.

- **Template-driven rendering**  
  Each screen is represented as a template string, then mounted in a single container.

- **Webpack-powered development setup**  
  `src/template.html` is used by `HtmlWebpackPlugin`, and CSS is bundled through loader chain.

## What I Learned

- How to structure small projects with **clear module responsibilities**.
- Why browser history APIs matter for UX in multi-view JavaScript apps.
- How bundlers simplify dependency management and frontend build setup.
- How centralizing layout variables in CSS custom properties improves consistency.
- How iterative UI refinement (spacing, typography, card layout) improves readability and visual hierarchy.

## Challenges & How I Handled Them

- **State vs. markup coupling:**  
  Re-rendering replaced DOM nodes, so listeners had to be reattached each render cycle.

- **Navigation behavior consistency:**  
  Ensuring clicks and browser Back/Forward stayed aligned required explicit `popstate` handling.

- **Styling across sections:**  
  Creating distinct visual identities for Home/Menu/About while preserving coherent branding required careful CSS organization.

- **Static hosting constraints:**  
  Routing logic had to remain compatible with GitHub Pages-friendly paths.

## Optimization Decisions

- Kept rendering logic intentionally small for readability and easier debugging.
- Used one root mount node to avoid scattered DOM mutations.
- Applied CSS variables to reduce repeated color literals.
- Used `output.clean` in Webpack to keep builds deterministic and uncluttered.

## Academic and Recruiter Value

This project demonstrates:

- understanding of **frontend modularization** without relying on React/Vue/Angular,
- practical use of **build tooling** in a modern JS workflow,
- ability to translate a design concept into a navigable, styled web app,
- clear progression from static HTML ideas to dynamic client-rendered views,
- ownership of implementation trade-offs and iterative improvement.

## Suggested Next Improvements

- Add dedicated npm scripts (`start`, `build`, `deploy`) for smoother workflow.
- Add a small route table object to simplify path-to-view mapping.
- Introduce responsive breakpoints for tighter mobile adaptation.
- Replace external image URLs with local assets for stronger reliability.
- Add basic tests for route/view rendering behavior.

## Local Setup

```bash
npm install
npx webpack serve --open
```

For a production build:

```bash
npx webpack --mode production
```

---

If you are reviewing this project as a recruiter or mentor, feedback on architecture, routing ergonomics, and maintainability is especially welcome.
