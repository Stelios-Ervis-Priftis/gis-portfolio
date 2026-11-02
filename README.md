# Stelios-Ervis Priftis — GIS Portfolio

A single-page professional portfolio for Stelios-Ervis Priftis, a GIS Developer specializing in Earth observation and geospatial web applications. The site presents selected projects, experience, skills, contact details, and a downloadable CV.

The site is a static React application with no backend, CMS, client-side router, or runtime dependency on external maps, fonts, images, or APIs.

## Stack

- React 19 and TypeScript 6
- Vite 8 with the React plugin
- Tailwind CSS 4 with `@tailwindcss/vite`
- Self-hosted Space Grotesk via `@fontsource-variable/space-grotesk`
- ESLint 10 and typescript-eslint
- npm and a committed `package-lock.json`
- Netlify static hosting, configured in `netlify.toml`

## Prerequisites

Use Node.js 24 LTS and npm. Netlify is pinned to Node 24. The production build has also been verified with Node 26.13.0.

## Local development

Run all commands from the repository root:

```bash
npm ci
npm run dev
```

Vite prints the local development URL. The available checks are:

```bash
npm run lint       # ESLint
npm run build      # TypeScript checks and static production build in dist/
npm run preview    # Serve the production build locally
```

There is no unit or end-to-end test script in this project. Validate content and UI changes with lint, a production build, and browser checks on the production preview.

## Where to edit content

Owner content is separate from rendering components. Edit these files:

| Content | Source of truth |
| --- | --- |
| Name, professional identity, location, About paragraphs, GitHub, LinkedIn, CV path | `src/content/personal.ts` |
| Contact form fields, validation, and submission feedback | `src/sections/Contact.tsx` |
| Netlify static form detection contract | `index.html` |
| Project summaries, roles, dates, metrics, technologies, and live/demo links | `src/content/projects.ts` |
| Experience timeline | `src/content/experience.ts` |
| Skill groups and items | `src/content/skills.ts` |
| Shared TypeScript content contracts | `src/content/types.ts` |
| Browser title, description, Open Graph metadata | `index.html` |
| Theme, layout, focus states, responsive rules | `src/index.css` |

Do not move biography, project, experience, or skills copy into components. Components in `src/components/` and `src/sections/` render the content modules.

### Add or update a project

1. Edit its record in `src/content/projects.ts`.
2. Keep dates, metrics, and technology names accurate.
3. Add only verified live URLs. A project without a public URL has an empty `links` array, which renders no link control.
4. Choose an existing `preview` kind or add a new `ProjectPreviewKind` and preview mapping.
5. Run `npm run lint && npm run build` and inspect the card in the production preview.

### Replace project previews with screenshots

Production project images live in `src/assets/projects/`; supplied source originals are kept in `src/assets/source/`. All three projects use optimized WebP screenshots. To replace an image:

1. Add the source original to `src/assets/source/` and an optimized WebP or AVIF to `src/assets/projects/`.
2. Update the imports, dimensions, and `previews` record in `src/components/ProjectPreview.tsx`.
3. Use the `photographic` option to preserve a screenshot's natural aspect ratio without cropping its interface or annotations.
4. Keep decorative images' `alt` empty when the adjacent project content provides the same information. Add meaningful alternative text only if a screenshot conveys information not available elsewhere.
5. Check desktop and mobile rendering and confirm that no external image requests are required.

Ember Lens is a special case: `src/components/EmberLensCompare.tsx` combines `ember-lens-pre-fire.webp` and `ember-lens-post-fire.webp` using a native range input. Pre-fire appears left of the divider and post-fire right. Keep the range label/value text, keyboard/touch behavior, visible focus, and shared muted/resting and original-color interaction styles intact.

### Hero typography and Ljubljana map

- Space Grotesk is self-hosted through `@fontsource-variable/space-grotesk` and imported in `src/main.tsx`; display typography is themed in `src/index.css`.
- `src/assets/ljubljana-map.webp` is a local, optimized OpenStreetMap mosaic centered on Ljubljana, preloaded in `index.html`. The Hero applies the palette treatment, coordinate marker, and cartographic overlays in `src/sections/Hero.tsx`.
- Keep the visible `© OpenStreetMap contributors` and `Humanitarian OpenStreetMap Team` attribution links when changing the map. Do not replace the local asset with runtime tile requests.

### Replace the CV

Replace `public/stelios-ervis-priftis-cv.pdf` with the new PDF using the same filename. The existing download links will then serve the updated file. If the filename changes, also update `personal.cv.href` in `src/content/personal.ts`.

## Project structure

```text
.github/
  ISSUE_TEMPLATE/       Bug and content-update forms
  pull_request_template.md
public/                 CV, favicon, robots.txt; copied unchanged to dist/
src/
  assets/               Local project illustrations and Ljubljana map
  components/           Reusable rendering and preview components
  content/              Typed owner content; primary maintenance location
  sections/             Hero, About, Projects, Experience, Skills, Contact
  App.tsx               Page composition
  index.css             Tailwind import, theme, and global styles
  main.tsx              React entry point
index.html              Document metadata and Vite entry
netlify.toml            Netlify build and response headers
```

## Netlify deployment

`netlify.toml` supplies the deployment configuration:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `24`
- Long-lived immutable caching for hashed files under `/assets/`
- Conservative security and referrer headers for all routes

For a new Netlify site, import the `gis-portfolio` GitHub repository and keep the values from `netlify.toml`. No environment variables are required. The site has no client-side routes, so no SPA redirect rule is needed.

Add a canonical URL or sitemap only after the final production domain is known. `public/robots.txt` currently allows crawling without inventing a sitemap URL.

## Contact form

The Contact section uses Netlify Forms; the portfolio does not expose the owner's email address or store a notification destination in the repository.

- `index.html` contains the hidden static `contact` form that Netlify detects during deployment.
- `src/sections/Contact.tsx` renders the matching React form and submits URL-encoded data with `form-name=contact`.
- The `bot-field` honeypot supplements Netlify's built-in Akismet spam filtering.
- Local development and production-preview submissions are intentionally blocked with an explanatory message; no message is sent.

After deploying to Netlify:

1. In the Netlify site dashboard, open **Forms** and enable form detection if it is not already enabled.
2. Deploy again if form detection was disabled, then confirm the `contact` form appears.
3. Open **Configuration → Notifications → Form submission notifications** and add the desired email notification.
4. Submit one real message from the deployed site and verify both the submission and notification.
5. Review verified and spam submissions in Netlify. Add Netlify reCAPTCHA later only if the honeypot and Akismet are insufficient.

See Netlify's [form setup](https://docs.netlify.com/forms/setup/) and [spam filters](https://docs.netlify.com/forms/spam-filters/) documentation.

## GitHub issue and PR workflow

- Use the bug-report form for layout, accessibility, link, or behavior problems.
- Use the content/project-update form for factual content and asset changes.
- Use the pull request template to record the outcome, documentation impact, exact checks, manual verification, and linked issue.

## Maintenance checklist

For each content or visual update:

1. Edit the appropriate content module or local asset.
2. Run `npm run lint && npm run build`.
3. Inspect the production preview at desktop and narrow mobile widths.
4. Exercise changed links and the CV download when relevant.
5. Check keyboard focus and reduced-motion behavior for interaction/style changes.
6. Review external requests and browser console output.
7. Update this README or `AGENTS.md` if commands, architecture, deployment, or ownership changes.

To run Lighthouse against a local production preview:

```bash
npx --yes lighthouse http://127.0.0.1:4173 \
  --quiet \
  --chrome-flags="--headless --no-sandbox" \
  --output=json \
  --output-path=/tmp/gis-portfolio-lighthouse.json
```

## Dependency audit note

`npm audit --omit=dev` reports no production dependency vulnerabilities. npm currently reports moderate advisories in the development-only ESLint/minimatch dependency chain. Do not apply a forced downgrade suggested by `npm audit fix --force`; review that chain during normal dependency updates.

