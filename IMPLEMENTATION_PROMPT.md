# Implementation Prompt — Build the **Qeetix** Design System (`qeetrix/`)

> Paste this whole file to Claude Code (or an agent) from inside `/Users/a3097640/Desktop/QG`.
> Work **phase by phase**. After each phase, run the phase's acceptance checks and stop if they fail.

---

## 0. Mission & guardrails

Build **Qeetix** — the shared, npm-publishable design system for **Qeet Group** products
(Qeet ID, and future apps). It is created by **copying** the existing `@qeetid/ui` package
into a new standalone monorepo at `/Users/a3097640/Desktop/QG/qeetrix/`, then expanding it
with a real token pipeline, a brand/logo package, docs, and a release setup.

> **Scope of "qeetrix implementation" = Phases 0–6 only.** All work happens **inside `qeetrix/`**.
> `qeet-identity` is **NOT** modified during this effort — it is touched only later, in a
> **separate, approval-gated** step (Phase 7) that runs **only after Qeetix is fully implemented
> and the user explicitly approves**. Do not start Phase 7 as part of this build.

**Hard constraints — do not violate:**

1. **Do NOT modify `/Users/a3097640/Desktop/QG/qeet-identity` during Phases 0–6.** It is a
   **read-only reference** — you may *read/copy from* `qeet-identity/frontend/packages/qeetid-ui`
   and the docs, but **never edit, move, or delete anything inside `qeet-identity`**. Leave its
   `@qeetid/ui` package fully intact and working. (Rewiring/removal happens only in the deferred
   Phase 7, with explicit approval.)
2. **Do NOT touch `/Users/a3097640/Desktop/QG/qeet.in`** at all. Not for reading patterns, not for edits.
3. **Components stay on shadcn + Base UI only** — the exact stack already in `@qeetid/ui`
   (`components.json` style `base-nova`, imports from `@base-ui/react/*`). Do **not** introduce
   Radix or any other primitive library. Keep the `shadcn` CLI working so `npx shadcn add <x>`
   pulls Base UI variants.
4. **Preserve component behaviour and public API.** This is a copy + repackage, not a rewrite.
   Keep dependency versions identical to today's `@qeetid/ui` (use the catalog).
5. **npm scope is `@qeetix/*`.** Publishable packages are public scoped (`publishConfig.access: "public"`).

**Source-of-truth references (read these first, do not edit them):**

- Current package: `/Users/a3097640/Desktop/QG/qeet-identity/frontend/packages/qeetid-ui/`
- Token spec (authoritative): `/Users/a3097640/Desktop/QG/qeet-identity/frontend/apps/qeetid-docs/docs/qeetid-reqs/phase-3/Qeet ID — Design System Foundations & Tokens.md`
- Monorepo conventions: `qeet-identity/frontend/{pnpm-workspace.yaml,turbo.json,eslint.config.mjs,package.json}`
- Brand assets: `/Users/a3097640/Desktop/QG/assets/` (`qeet-logo-on-dark.svg`, `qeet-logo-on-light.svg`, `qeet-logo-light-detailed.svg`, `qeet_logo.svg`, `qeet-logo-8k-{dark,light}.png`)

---

## 1. Decisions already made (apply, don't re-ask)

| Topic | Decision |
| --- | --- |
| NPM scope | `@qeetix/*` (e.g. `@qeetix/ui`, `@qeetix/tokens`, `@qeetix/brand`) |
| Structure | Full design-system **pnpm + Turbo monorepo** with multiple packages + a docs app |
| Brand colour | **Keep neutral/greyscale now**; wire brand/accent/status semantic slots that default to neutral so a palette drops in later with zero component changes |
| Tokens | **W3C Design Tokens JSON → Style Dictionary** build to CSS + JSON (Flutter target stubbed for later) |
| CSS var prefix | Raw token export uses **`--qx-`** (Qeetix). The shadcn/Base-UI runtime vars stay **unprefixed** (`--background`, `--primary`, …) and are generated from the same token source — see §4.3. (Note: the Foundations doc says `--qf-`; we standardise on `--qx-` for the Qeetix brand and treat the doc's `--qf-` as historical.) |
| Package manager | pnpm 9.x, Node ≥ 20, TypeScript, ESM-only output |

---

## 2. Target structure to create

```
qeetrix/
├─ package.json                 # private root; turbo + changesets scripts
├─ pnpm-workspace.yaml          # workspace globs + catalog (copied from qeet-identity)
├─ turbo.json
├─ tsconfig.json                # root solution tsconfig
├─ eslint.config.mjs
├─ .npmrc
├─ .prettierrc  .prettierignore
├─ .gitignore
├─ .changeset/config.json       # changesets release config
├─ README.md                    # what Qeetix is + install/usage
├─ CONTRIBUTING.md              # how to add a component / token, release flow
├─ .github/workflows/
│   ├─ ci.yml                   # install, lint, typecheck, build, token-validate
│   └─ release.yml              # changesets → npm publish on main
├─ packages/
│  ├─ tokens/                   # @qeetix/tokens   (PUBLISHED)
│  ├─ ui/                       # @qeetix/ui       (PUBLISHED) — migrated qeetid-ui
│  ├─ brand/                    # @qeetix/brand    (PUBLISHED) — logos + custom icons
│  ├─ tsconfig/                 # @qeetix/tsconfig (PUBLISHED, config only)
│  └─ eslint-config/            # @qeetix/eslint-config (PUBLISHED, config only)
└─ apps/
   └─ docs/                     # Storybook workshop for the DS (private, not published)
```

`pnpm-workspace.yaml`: globs `packages/*` and `apps/*`; **copy the entire `catalog:` block**
from `qeet-identity/frontend/pnpm-workspace.yaml` verbatim (react 19, tailwind 4, lucide,
cva, clsx, tailwind-merge, recharts, zod, next, etc.) and add any new shared deps (e.g.
`style-dictionary`, `tsup`, `@changesets/cli`, `storybook`) to the catalog so versions stay single-sourced.

`turbo.json`: copy from qeet-identity and add a `tokens#build` (or generic `build`) pipeline so
`@qeetix/tokens` builds before `@qeetix/ui` (`"build": { "dependsOn": ["^build"] }` already covers this
via workspace deps).

---

## 3. Phase 0 — Scaffold the monorepo

1. `git init` in `qeetrix/` (it is not yet a git repo). Add `.gitignore` (node_modules, dist, .turbo,
   build, .next, storybook-static, *.log, .DS_Store).
2. Create root `package.json` (private), `pnpm-workspace.yaml` (+ catalog), `turbo.json`, `.npmrc`
   (`auto-install-peers=true` etc., copy from qeet-identity), prettier config, root `eslint.config.mjs`,
   root `tsconfig.json` (references the packages).
3. `pnpm install` should succeed with empty packages.

**Acceptance:** `pnpm install` clean; `pnpm turbo run build` is a no-op success (no packages yet).

---

## 4. Phase 1 — `@qeetix/tokens` (the foundation)

Implement the 3-tier token system from the Foundations doc, authored as **W3C Design Tokens
JSON** and built with **Style Dictionary v4**.

### 4.1 Package layout
```
packages/tokens/
├─ package.json                 # name @qeetix/tokens
├─ style-dictionary.config.mjs
├─ tokens/
│  ├─ primitive/                # raw values, neutral palette real; brand/accent/status = greyscale placeholders
│  │  ├─ color.json             # neutral-0..1000 (real, OKLCH); brand/accent/success/warning/danger/info/passkey ramps = neutral aliases for now
│  │  ├─ space.json             # 4px base T-shirt scale (§7)
│  │  ├─ size.json              # type scale 11→64 + line-heights/tracking (§6.2)
│  │  ├─ radius.json            # §9
│  │  ├─ shadow.json            # §10 (light + dark)
│  │  ├─ duration.json easing.json   # §11
│  │  └─ z-index.json           # §13
│  ├─ semantic/
│  │  ├─ color.light.json  color.dark.json   # color.text.*, surface.*, border.*, action.* (§5.4) — both themes
│  │  ├─ space.json font.json radius.json motion.json
│  └─ component/                # button.*, input.*, etc. mapping to semantic (§ component tokens)
├─ build/                       # generated (gitignored)
└─ dist/                        # published artifacts
```

### 4.2 What to encode (from the doc — implement faithfully)
- **Primitive colour:** neutral ramp `0,50,100,200,300,400,500,600,700,800,850,900,950,1000` in OKLCH,
  visually matching today's `index.css` greys. `brand`, `accent`, `success`, `warning`, `danger`,
  `info`, `passkey`, `code-bg`, `chart-1..6` ramps **exist as token entries but alias the neutral ramp**
  (placeholder) so introducing a palette later is a value change, not a structural change. Leave a clear
  `// TODO(OD-DS-03): real brand ramp` marker.
- **Type scale** (§6.2), **weights** (§6.3), **spacing** (§7.2–7.3), **radius** (§9, base `0.45rem`
  matching today), **shadow** (§10, light+dark), **duration/easing** (§11.2–11.3) incl. reduced-motion
  override block, **z-index** (§13).
- **Semantic tokens** for light AND dark per §5.4.1–5.4.4 (text/surface/border/action), referencing
  primitives only.

### 4.3 Style Dictionary outputs (critical integration)
Produce **three** outputs from the single source:

1. **`dist/qeetix.css`** — the **shadcn/Base-UI bridge**. Emit `:root { … }` (light) and `.dark { … }`
   blocks using the **exact unprefixed variable names the components already consume**:
   `--background --foreground --card(-foreground) --popover(-foreground) --primary(-foreground)
   --secondary(-foreground) --muted(-foreground) --accent(-foreground) --destructive --border
   --input --ring --chart-1..5 --radius --sidebar*`. Values come from the **semantic** tokens.
   This file replaces the hand-written `:root/.dark` blocks in `ui/src/index.css`. **The generated
   output for the neutral theme must be visually identical to today's `index.css`** (diff-check the OKLCH values).
2. **`dist/qeetix.tokens.css`** — full raw token export with **`--qx-`** prefix
   (`--qx-color-text-primary`, `--qx-space-gutter`, `--qx-radius-m`, …) for advanced/white-label consumers.
3. **`dist/qeetix.tokens.json`** — flattened JSON for cross-platform (marketing, future Flutter SDK).
   Add a `flutter` Style Dictionary target as a **stub/TODO** (don't fully build Dart now).

### 4.4 package.json (tokens)
```jsonc
{
  "name": "@qeetix/tokens",
  "version": "0.0.1",
  "type": "module",
  "files": ["dist"],
  "exports": {
    "./qeetix.css": "./dist/qeetix.css",
    "./tokens.css": "./dist/qeetix.tokens.css",
    "./tokens.json": "./dist/qeetix.tokens.json"
  },
  "scripts": {
    "build": "style-dictionary build --config style-dictionary.config.mjs",
    "validate": "node scripts/validate-contrast.mjs"
  },
  "publishConfig": { "access": "public" },
  "sideEffects": ["*.css"]
}
```

### 4.5 Contrast validation
Add `scripts/validate-contrast.mjs` implementing the §5.6 checks (body 4.5:1, large/UI 3:1) over the
generated semantic pairs; fail the build on violation. Wire into `pnpm validate` and CI. (For the
greyscale placeholder palette this should pass trivially; it guards future brand colours.)

**Acceptance:**
- `pnpm --filter @qeetix/tokens build` emits the three `dist/` files.
- `dist/qeetix.css` neutral `:root/.dark` values match current `qeetid-ui/src/index.css` (within rounding).
- `pnpm --filter @qeetix/tokens validate` passes.

---

## 5. Phase 2 — `@qeetix/ui` (migrate `qeetid-ui`, make it publishable)

### 5.1 Migrate
- Copy `qeet-identity/frontend/packages/qeetid-ui/src/**` → `packages/ui/src/**` **unchanged**
  (all 36 `components/ui/*`, `components/theme-provider.tsx`, `hooks/use-mobile.ts`, `lib/utils.ts`,
  `fonts/*`, `stories/*`, `index.ts`).
- Copy `components.json` (keep `style: base-nova`, lucide, base color neutral, aliases) and `.storybook/`.
- Rename package `@qeetid/ui` → `@qeetix/ui`. Update internal `@qeetid/tsconfig` → `@qeetix/tsconfig`.
- Keep the `@/` path alias (`@/*` → `./src/*`).

### 5.2 Wire tokens into the stylesheet
Rework `src/index.css` so it **imports the generated bridge** instead of hand-defining `:root/.dark`:
```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "@qeetix/tokens/qeetix.css";     /* generated :root + .dark semantic vars */
@source "./**/*.{ts,tsx}";
/* keep: @font-face Cal Sans (Display/Text/UI), @theme inline mapping, @layer base */
```
Keep the `@theme inline { --color-*: var(--*) … --font-* … --radius-* }` block and `@layer base`
exactly as today (font wiring, `border-border`, heading font, button cursor). Remove only the
now-generated `:root{}` and `.dark{}` value blocks.
Add `@qeetix/tokens` as a dependency.

### 5.3 Make it npm-publishable (build with tsup)
The current package ships raw `src` via `workspace:*` — that won't work off-monorepo. Add a real build:
- `tsup.config.ts`: ESM only, `dts: true`, `treeshake`, `external` = react/react-dom + all peer/deps,
  preserve `"use client"` banners (theme-provider, sidebar, etc. — verify directives survive bundling;
  if tsup strips them, keep components as separate entry points or add a banner).
  **Prefer multiple entry points** (one per component) so consumers tree-shake and so the `./components/*`
  subpath export keeps working.
- Copy `fonts/*` and the built `index.css` into `dist/` (tsup `publicDir`/copy or a `cpy` postbuild).
- `package.json`:
```jsonc
{
  "name": "@qeetix/ui",
  "version": "0.0.1",
  "type": "module",
  "sideEffects": ["**/*.css"],
  "files": ["dist"],
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
    "./styles.css": "./dist/index.css",
    "./components/*": { "types": "./dist/components/*.d.ts", "import": "./dist/components/*.js" },
    "./lib/*": "./dist/lib/*.js",
    "./fonts/*": "./dist/fonts/*"
  },
  "scripts": { "build": "tsup", "storybook": "storybook dev -p 6006", "build-storybook": "storybook build" },
  "peerDependencies": { "react": ">=19", "react-dom": ">=19" },
  "dependencies": {
    "@qeetix/tokens": "workspace:*",
    "@base-ui/react": "...", "class-variance-authority": "...", "clsx": "...",
    "lucide-react": "...", "recharts": "...", "tailwind-merge": "...", "tw-animate-css": "..."
    /* keep exact versions from current qeetid-ui via catalog */
  },
  "devDependencies": { "tailwindcss": "catalog:", "@tailwindcss/vite": "catalog:", "shadcn": "...", "tsup": "catalog:", "typescript": "catalog:", "@qeetix/tsconfig": "workspace:*" },
  "publishConfig": { "access": "public" }
}
```
- **Tailwind v4 consumer note** (put in README): consumers must run Tailwind v4, then add
  `@import "@qeetix/ui/styles.css";` and `@source "../../node_modules/@qeetix/ui/dist/**/*.js";`
  to their global css so utility classes used by Qeetix components are generated.

### 5.4 Keep `shadcn add` working
Update `components.json` `aliases`/`tailwind.css` paths for the new location so contributors can still
`npx shadcn@latest add <component>` and get Base-UI variants dropped into `src/components/ui/`.

**Acceptance:**
- `pnpm --filter @qeetix/ui build` produces `dist/` with `index.js`, `index.d.ts`, per-component files,
  `index.css`, `fonts/`.
- `pnpm --filter @qeetix/ui typecheck` and `lint` pass.
- `"use client"` is preserved in client components (grep `dist/`).
- `npm pack --dry-run` in `packages/ui` lists only `dist/**` and is reasonably sized.

---

## 6. Phase 3 — `@qeetix/brand` (logos + custom icons)

Centralise Qeet brand assets (the dark/light logos in `assets/`) as a small, tree-shakeable package.

```
packages/brand/
├─ src/
│  ├─ logos/
│  │  ├─ QeetLogo.tsx           # adaptive: picks on-dark/on-light by theme (currentColor or .dark)
│  │  ├─ QeetLogoMark.tsx       # the "Q" mark only
│  │  ├─ QeetWordmark.tsx
│  │  └─ raw/  (qeet-logo-on-dark.svg, qeet-logo-on-light.svg, detailed, etc.)
│  ├─ icons/                    # custom Qeet ID icons from doc §12.3 (passkey, mfa-shield, saml,
│  │                            #   scim, oidc, webhook, api-key, audit-log, tenant, cross-device)
│  │                            #   1.5px stroke, 24×24, mirror metadata for RTL (§14)
│  └─ index.ts
├─ assets/                      # raw svg + the 8k PNGs (for marketing/download)
└─ package.json                 # @qeetix/brand
```
- Convert `assets/qeet-logo-on-dark.svg` / `qeet-logo-on-light.svg` into React components (follow the
  `@thesvg/react` ergonomics already used in the apps: accept `className`, `size`, `aria-label`).
- `QeetLogo` should resolve light/dark variant via the `.dark` class (same strategy as `ThemeProvider`),
  with an explicit `variant?: "light" | "dark"` override.
- Custom icons: scaffold the §12.3 set as stroke-1.5/24×24 components; if a real drawing isn't available,
  create a clean placeholder and mark `// TODO: final art` so they're API-stable now.
- Same npm build treatment as `@qeetix/ui` (tsup, ESM, dts, `files: ["dist","assets"]`, public).

**Acceptance:** `import { QeetLogo, QeetLogoMark, IconPasskey } from "@qeetix/brand"` builds & renders;
logo swaps with theme; `pnpm --filter @qeetix/brand build` clean.

---

## 7. Phase 4 — Shared configs

- `@qeetix/tsconfig`: copy `qeet-identity/frontend/packages/qeetid-tsconfig/*` (base/next/node/react-vite),
  rename scope. Publishable (config-only, `files` lists the json).
- `@qeetix/eslint-config`: the current `qeetid-eslint` package is **empty** — create a real flat-config
  package from `qeet-identity/frontend/eslint.config.mjs` (react-hooks, react-refresh, typescript-eslint,
  prettier-compatible). Export a base config the other packages and `apps/docs` extend. Publishable.

**Acceptance:** all packages reference `@qeetix/tsconfig` and `@qeetix/eslint-config`; `pnpm turbo run lint typecheck` green.

---

## 8. Phase 5 — `apps/docs` (Storybook workshop)

- Stand up the Storybook already scaffolded in `qeetid-ui/.storybook/` as a private `apps/docs` workspace
  (`@qeetix/docs`, `private: true`, **not published**). Install the storybook deps the scaffold lists
  (`storybook`, `@storybook/react-vite`, `@storybook/addon-essentials`, `addon-themes`, `addon-a11y`,
  `@storybook/test`) via the catalog.
- Import `@qeetix/ui/styles.css` in `preview`; keep the light/dark `class` decorator.
- Write stories for **every** exported component (start from the existing `button`/`status-pill` stories;
  cover variants/sizes/states). Add MDX "Foundations" pages that render the tokens (colour swatches from
  `@qeetix/tokens`, type scale, spacing, radius, shadow, motion) — this is the human-readable token reference.
- Add an a11y check pass (addon-a11y) as part of `build-storybook`.

**Acceptance:** `pnpm --filter @qeetix/docs storybook` runs; `build-storybook` succeeds; every exported
component has at least one story.

---

## 9. Phase 6 — Versioning, release & CI (npm)

- Add **Changesets** (`@changesets/cli`) at the root; `pnpm changeset` / `pnpm version-packages` /
  `pnpm release` scripts. `.changeset/config.json`: independent or fixed versioning — use **independent**
  (`linked: []`) so `tokens`/`ui`/`brand` can version separately; `access: "public"`, base branch `main`.
- `ci.yml`: on PR/push → `pnpm install --frozen-lockfile`, `turbo run lint typecheck build`,
  `@qeetix/tokens validate` (contrast), `build-storybook`.
- `release.yml`: on `main` → changesets action publishes changed public packages to npm
  (needs `NPM_TOKEN` secret; document this in README/CONTRIBUTING).
- README: install (`pnpm add @qeetix/ui @qeetix/tokens @qeetix/brand`), the Tailwind v4 `@import` +
  `@source` consumer setup, ThemeProvider usage, and a components/tokens overview.

**Acceptance:** `pnpm changeset` works; a dry-run (`pnpm release -- --dry-run` or `npm publish --dry-run`
per package) shows correct files/versions; CI workflow lints clean.

---

## 10. Phase 7 — Cut `qeet-identity` over to `@qeetix/ui` — ⛔ DEFERRED / SEPARATE EFFORT

> **DO NOT run this as part of building Qeetix.** This phase is **out of scope** for the qeetrix
> implementation (Phases 0–6). It is the **first thing in `qeet-identity` that may ever be touched**,
> and it runs **only after** (a) Qeetix is fully implemented and verified, **and** (b) the user
> **explicitly says to proceed**. Until then, `qeet-identity` stays exactly as-is. The steps below
> are documented now so the future cutover is unambiguous — they are not instructions for this build.

Goal (future): `qeet-identity` apps use Qeetix; the old local package is removed.

1. **Dev linking:** in `qeet-identity/frontend`, replace the `@qeetid/ui` workspace dep in
   `@qeetid/web`, `@qeetid/admin`, `@qeetid/docs` with `@qeetix/ui` (and add `@qeetix/brand`,
   `@qeetix/tokens` where used). For local dev before the first npm publish, point at the sibling repo
   via pnpm `link:`/`file:` or a pnpm workspace overlay — pick whichever keeps installs reproducible;
   document the choice. After first publish, switch to the published `^` range.
2. **Codemod imports:** `@qeetid/ui` → `@qeetix/ui` across `apps/*/src/**`. The export surface is identical
   (you migrated `index.ts` unchanged), so this is a string swap. Update `globals.css`
   `@import "@qeetid/ui/styles.css"` → `@import "@qeetix/ui/styles.css"` and add the `@source` line for
   `node_modules/@qeetix/ui/dist`.
3. **Remove the old package:** delete `qeet-identity/frontend/packages/qeetid-ui` and its
   `pnpm-workspace`/turbo references; clean lockfile (`pnpm install`).
4. **Verify qeet-identity still runs:** `pnpm --filter @qeetid/web dev` (port 3001),
   `@qeetid/admin`, `@qeetid/docs` build and render with Qeetix; theme toggle works; no missing styles/fonts.
5. **Leave `@qeetid/tsconfig`/`@qeetid/eslint` in qeet-identity as-is** (or optionally switch to
   `@qeetix/*` later — out of scope, don't block on it).

**Acceptance:**
- No remaining `@qeetid/ui` references in `qeet-identity` (`grep -r "@qeetid/ui" qeet-identity` empty).
- `qeet-identity/frontend` builds (`pnpm turbo run build`) and `@qeetid/web` renders identically to before.
- `qeet.in` untouched (`git status` in qeet.in clean / no diffs).

---

## 11. Definition of done — "Qeetix fully implemented" = Phases 0–6 (NOT Phase 7)

- [ ] `qeetrix/` is a self-contained pnpm+turbo monorepo; `pnpm install && pnpm turbo run build` green from scratch.
- [ ] `@qeetix/tokens`, `@qeetix/ui`, `@qeetix/brand`, `@qeetix/tsconfig`, `@qeetix/eslint-config` all
      build, lint, typecheck, and `npm publish --dry-run` cleanly with `dist`-only payloads.
- [ ] Tokens are single-sourced (W3C JSON → Style Dictionary); neutral theme is visually identical to the
      old `qeetid-ui`; brand/accent/status slots exist as neutral placeholders; contrast validation passes.
- [ ] Components are unchanged in behaviour, still Base-UI-only, still `shadcn add`-able.
- [ ] Storybook documents every component + token foundation.
- [ ] **`qeet-identity` is completely unchanged** (`git -C qeet-identity status` shows no diffs; its
      `@qeetid/ui` still present and intact).
- [ ] **`qeet.in` has zero changes.**

> Phase 7 (cutover of `qeet-identity` to `@qeetix/*` + removal of the old package) is a **separate,
> later, approval-gated** effort and is **explicitly excluded** from this definition of done.

## 12. Suggested commit/PR sequence (all inside `qeetrix/`)
1. `chore(qeetrix): scaffold monorepo` (Phase 0)
2. `feat(tokens): @qeetix/tokens W3C + style-dictionary` (Phase 1)
3. `feat(ui): copy qeetid-ui → @qeetix/ui, add tsup build` (Phase 2)
4. `feat(brand): @qeetix/brand logos + icons` (Phase 3)
5. `chore(config): shared tsconfig + eslint-config` (Phase 4)
6. `docs(storybook): @qeetix/docs` (Phase 5)
7. `ci: changesets + publish workflows` (Phase 6) ← **Qeetix is "fully implemented" here**

— STOP. Get explicit user approval before anything below. —

8. *(Deferred, separate PR in `qeet-identity`)* `refactor(qeetid): consume @qeetix/ui, remove local package` (Phase 7)
