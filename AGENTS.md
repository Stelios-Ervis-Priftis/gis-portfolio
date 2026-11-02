# General Agent Guidelines

These rules provide a technology-neutral baseline for any software project. Follow the repository's more specific instructions when they exist, and keep project-specific architecture, commands, and operational details in a separate project-context section or file.

## 1. Understand the Repository First

- Read the relevant `AGENTS.md`, `README.md`, contributor guidance, configuration, and scripts before changing files.
- Run commands from the directory expected by the project. Do not assume every command runs from the repository root.
- Use the repository's existing package manager, runtime versions, locked dependencies, and tooling. Update lockfiles when dependencies change.
- Treat source code and current configuration as the implementation source of truth. Identify and update stale documentation rather than repeating it.
- Keep agent guides focused on durable working rules. Put setup tutorials and detailed command references in the appropriate documentation.

## 2. Keep Work Scoped

- Change only what is needed for the requested task. Do not modify unrelated components, infrastructure, or repositories.
- Follow existing module boundaries, architecture, import conventions, state ownership, and naming patterns unless the task explicitly changes them.
- Avoid unrelated refactors, formatting sweeps, dependency upgrades, and generated-file changes.
- Preserve user changes and existing work. Inspect before overwriting, deleting, or reverting anything.
- Do not commit planning notes, scratch files, caches, virtual environments, build artifacts, local archives, or environment files unless the repository intentionally tracks them.
- When a task is backend-only, frontend-only, or otherwise limited, treat that boundary as a hard constraint.

## 3. Implementation and Comments

- Prefer the smallest maintainable change that satisfies the requirement and fits the existing design.
- Preserve public contracts unless a breaking change is requested. Update all affected consumers when a contract changes.
- Keep configuration, labels, thresholds, and other shared values in their established source of truth rather than duplicating them.
- When the project has internationalization, put user-facing strings in its localization system instead of hardcoding them.
- Comments should explain current behavior, non-obvious invariants, and constraints. Do not narrate the history of a fix or describe what old code used to do.
- Do not add agent or tool attribution, co-author trailers, or similar metadata unless explicitly requested.

## 4. Tests and Verification

- Use test-first development for new behavior and bug fixes when the project has a test suite: write a failing test, confirm the failure, implement the change, and rerun the test.
- Tests must prove observable behavior and important invariants, not merely execute code.
- Use unit tests for isolated logic and integration tests for real database, migration, protocol, or component interactions when appropriate.
- Do not call live external services in automated tests. Use mocks, fixtures, recorded responses, or controlled local services.
- Isolate test data. Roll back transactions where possible; otherwise use unique fixtures and clean up only data created by the test. Never alter pre-existing fixtures.
- Run the relevant tests, lint, formatting, type checks, build, lockfile checks, and schema checks for the changed area. A successful unit run does not replace required integration or build verification.
- Do not claim a check passed if it was not run. Report failures, skipped checks, and environmental limitations accurately.
- Do not record volatile test counts in durable agent instructions.

## 5. Git and Branch Safety

- Do not commit, push, create a pull or merge request, rewrite history, or otherwise mutate Git history unless the user requested that operation.
- Never commit directly to the protected default branch. When tracked changes are intended for a commit or review, create a short, descriptive task branch from an up-to-date default branch.
- Read-only investigation and gitignored artifact generation do not require a task branch when no tracked files or Git history will change.
- Do not continue new task work on a branch that has already been merged.
- Do not force-push, rebase, squash, delete branches, or change the repository's merge strategy without explicit approval.
- Never run `git reset --hard`, `git clean`, `git stash drop`, or `git stash clear` without explicit approval. Resolve stash conflicts rather than discarding the stash.
- Use the repository's existing commit and branch conventions when they are documented.

## 6. Documentation

- Update relevant documentation in the same change when behavior, setup, prerequisites, runtime versions, dependencies, commands, configuration, deployment, public APIs, architecture, or contributor workflows change.
- Trivial internal changes need no documentation update when users and contributors are unaffected.
- Review the `README.md`, agent guidance, and other affected documents for stale statements before review or delivery.
- Update current-state summaries, known limitations, and working rules when they become outdated.
- Keep generated artifacts and derived-data procedures documented when users are expected to regenerate them.

## 7. Pull Requests and Merge Requests

- Use the repository's template and automation when available.
- Make the description understandable without reading commits or chat history. Include:
  - what changed and why;
  - important changes grouped by subsystem or file when useful;
  - documentation impact;
  - exact automated checks and manual verification performed, with expected results;
  - known risks, breaking changes, deferred work, or reviewer attention points;
  - the linked issue, when applicable.
- Omit detailed change and test sections only when the repository template allows it for trivial changes or promotion merges.
- Never describe unverified work as passing, complete, or production-ready.

## 8. Configuration and Secrets

- Never commit production secrets, real credentials, or local environment overrides. Keep local environment files gitignored.
- Do not print secrets, authenticated URLs, tokens, or connection strings in logs, commits, reviews, or final reports.
- Treat values bundled into browser or other client applications as public configuration, never as secrets. Enforce access control on a trusted server.
- Use environment-based configuration for deployment-owned endpoints and values that vary across environments. Follow existing conventions for stable public third-party endpoints.
- Keep development credentials separate from staging and production, and select non-development environments only intentionally.

## 9. Data, Databases, and External Systems

Apply these rules when the project uses persistent data or external services.

- Identify the authoritative source of truth. Treat caches, tiles, exports, search indexes, and other derived artifacts as replaceable outputs unless documented otherwise.
- Preserve source identifiers, explicit nulls, unknown fields where required, decimal precision, timestamps, and source semantics. Do not silently fabricate, round, simplify, repair, normalize, or discard source data.
- Make imports and repeated operations idempotent where the design requires repeatable synchronization.
- Make schema changes through the project's migration system. Do not manually alter managed schemas or bypass validation to make an operation pass.
- Never create, drop, reset, rename, or restore a database or persistent volume without explicit approval when that operation can destroy or disrupt data.
- Follow the project's backup procedure before risky data operations. Keep backups in persistent storage and verify that they are readable and restorable; do not assume a dump is valid merely because a command exited successfully.
- Respect environment scope, checkpoints, watermarks, and ownership boundaries in data pipelines. Never silently skip records or disable integrity checks to force completion.

## 10. Shell, Docker, and Infrastructure Safety

- Use narrowly scoped commands against the current project. Inspect resource ownership before stopping, removing, or reconfiguring anything.
- Do not use global or broad cleanup commands such as system-wide prune operations.
- Do not use forced or recursive deletion casually. Use a narrowly targeted plain removal only when deletion is intended, and request approval for destructive cleanup.
- Never remove persistent volumes or use equivalent destructive options without explicit approval.
- Do not stop an unidentified process or service to resolve a port or resource conflict. Identify the owner and prefer a project-scoped configuration change.
- Use heredocs or the CLI's supported input mechanism for multiline text instead of temporary body files when practical.
- Do not weaken validation, security, health checks, or resource limits merely to suppress an error.

## 11. Completion and Handoff

Before reporting completion:

- Review the final diff for scope, accidental files, secrets, stale documentation, and unrelated changes.
- Summarize the outcome rather than listing every action.
- Report the verification actually performed and any checks not run.
- Call out remaining risks, known limitations, required migrations, configuration changes, and follow-up work.
- Do not commit, push, merge, deploy, or perform destructive operations as an implied final step; these require the user's request or approval.

# Project Context

## Project Overview and Current State

- **Purpose:** Single-page professional portfolio for Stelios-Ervis Priftis, presenting GIS/Earth observation projects, experience, skills, contact details, and a downloadable CV.
- **Stack:** React 19, TypeScript 6, Vite 8, Tailwind CSS 4 via `@tailwindcss/vite`, self-hosted Space Grotesk via Fontsource, ESLint 10, npm. Netlify uses Node 24; local production verification also used Node 26.13.0.
- **Implemented:** Six responsive sections; typed content modules; local project screenshots and illustrative imagery; working social, project, and CV links; Netlify contact form with honeypot and accessible feedback; document metadata; favicon and robots.txt; Netlify static-build configuration; GitHub issue and PR templates.
- **Not implemented:** No custom backend, CMS, client-side routing, analytics, automated test suite, canonical production URL, or deployed site in this repository's current workflow.
- **Task boundaries:** Owner content belongs in `src/content/`; rendering belongs in `src/components/` and `src/sections/`. Never modify the separate structural-reference repository `stelios-priftis-portfolio-new` for this project.

## Repository Layout and Working Directories

```text
.github/                 Issue forms and PR template
public/                  CV, favicon, robots.txt; copied to dist/
src/
  assets/projects/       Local project illustrations
  components/            Reusable UI and preview rendering
  content/               Personal, project, experience, skills, and types
  sections/              Six page-section components
  App.tsx                Page composition
  index.css              Tailwind/theme/global responsive styles
  main.tsx               React entry
index.html               Metadata and Vite entry
netlify.toml             Netlify build and headers
```

- Run all npm commands from the repository root.
- Use npm and `package-lock.json`; do not introduce another package manager.

## Essential Commands

```bash
npm ci                 # Clean dependency installation
npm run dev            # Local Vite development
npm run lint           # ESLint
npm run build          # TypeScript checks and static build to dist/
npm run preview        # Serve the production build
```

- There is no automated test script. Do not claim unit or end-to-end tests ran; use lint, build, and real production-preview browser verification.
- For UI changes, verify narrow mobile and desktop layouts, keyboard focus, internal anchors, changed links, and console/network behavior.
- Run `npm audit --omit=dev` when dependency exposure is relevant. Do not apply forced downgrades to silence development advisories.

## Architecture and Coding Conventions

- **Module boundaries:** `src/content/` is the source of truth for owner content. Components render typed exports and must not become alternate biography/project data sources.
- **Content contracts:** Shared interfaces and `ProjectPreviewKind` live in `src/content/types.ts`. Project links are optional data; an empty array renders no control.
- **Imports and exports:** Use direct relative imports. Avoid unnecessary barrels, global state, routing, and client-side data fetching.
- **Styling:** Tailwind is integrated through `@tailwindcss/vite`; design tokens and custom section/layout styles live in `src/index.css`. Preserve mobile-first reflow, visible focus, adequate target sizes, and reduced-motion rules.
- **Assets:** Keep previews and other core assets local. Space Grotesk is imported from Fontsource in `src/main.tsx`. `src/assets/ljubljana-map.webp` is the local OSM Hero basemap, preloaded in `index.html`; retain visible OSM and HOT attribution and do not add runtime tile requests. Production project images live in `src/assets/projects/`, with source originals in `src/assets/source/`. Decorative images remain empty-alt; meaningful visuals require useful alternative text.
- **Interactive previews:** `src/components/EmberLensCompare.tsx` owns the pre/post-fire comparison. Pre-fire is left and post-fire right of the native range divider; preserve its accessible label/value text, keyboard/touch support, and focus reveal. Do not apply decorative-preview `aria-hidden` to this interactive component.
- **Metadata:** `index.html` owns static browser and social metadata. Do not invent a canonical production URL.
- **Public contracts:** Navigation anchors are `#about`, `#projects`, `#experience`, `#skills`, and `#contact`; accessibility/top anchors are `#main-content` and `#top`.
- **Contact form:** `index.html` owns Netlify's hidden static detection form. `src/sections/Contact.tsx` owns the matching visible React form, URL-encoded submission, and feedback. Keep the form name `contact`, hidden `form-name`, and honeypot `bot-field` synchronized. Localhost/127.0.0.1 submissions intentionally show an error without fetching; do not present local success.

## Environments and Configuration

- No environment variables are required for local development, builds, or Netlify.
- Netlify is configured with Node 24, `npm run build`, and `dist` in `netlify.toml`.
- This is a public static client application; never place secrets in source, `public/`, or Vite environment values.

## External Services and Test Isolation

- Basic rendering makes no required runtime calls to external services. External project/social links are navigation destinations, not data dependencies.
- Netlify Forms processes the visible contact form only after a user submits it on a deployed non-localhost site. Form detection and notification destinations are configured in Netlify, not in source.
- Do not send real form submissions or call live external services in automated checks. Validate URLs separately from UI tests and report services that block automated requests.

## CI, Deployment, and Review Workflow

- No CI workflow is currently configured.
- Use `.github/ISSUE_TEMPLATE/` for bug and content intake and `.github/pull_request_template.md` for review descriptions and verification.
- Netlify builds with `npm run build`, publishes `dist`, and applies the headers in `netlify.toml`. No SPA redirect is needed.
- Do not commit, push, create a PR, or deploy without the user's explicit request.

## Known Gotchas and Accepted Warnings

### Development dependency audit advisories

- **Symptom:** npm may report moderate minimatch advisories in the ESLint development dependency chain.
- **Cause or invariant:** Production dependencies audit clean; the warning is in development tooling.
- **Required behavior:** Reassess during normal dependency updates. Do not use `npm audit fix --force` to introduce a breaking downgrade.
- **Status or reference:** Current accepted development-tooling limitation; recheck rather than treating the warning count as durable.

### LinkedIn automated requests

- **Symptom:** An automated request to the public LinkedIn profile may return HTTP 999.
- **Cause or invariant:** LinkedIn can block non-browser automation.
- **Required behavior:** Preserve the verified supplied profile URL and report the limitation instead of replacing it.

## Common Tasks

### Update projects, experience, skills, or personal content

1. Edit the matching module in `src/content/`; update `types.ts` only when the data shape changes.
2. Keep facts, dates, metrics, and URLs accurate; never add placeholder controls.
3. Run `npm run lint && npm run build` and inspect the production preview.
4. Update `README.md` and this file if ownership or workflow changes.

### Replace a project preview

1. Add an optimized local asset under `src/assets/projects/`.
2. Update `src/components/ProjectPreview.tsx` and `ProjectPreviewKind` if adding a new kind.
3. Preserve responsive aspect ratio and appropriate alternative-text behavior.
4. Verify mobile/desktop output and absence of required external asset requests.

### Replace the CV

1. Replace `public/stelios-ervis-priftis-cv.pdf`, keeping the filename when possible.
2. Update `personal.cv.href` if the filename changes.
3. Build and exercise a real download from the production preview.

## Documentation Ownership

- `README.md`: Owner setup, commands, content editing, assets, deployment, and maintenance workflow.
- `AGENTS.md`: General working rules plus durable, verified project context for agents.
- `.github/pull_request_template.md`: PR outcome, documentation, verification, risk, and issue-link structure.
- `.github/ISSUE_TEMPLATE/`: Bug reproduction and factual content-update intake.
