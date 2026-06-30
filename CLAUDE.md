# qeetrix — CLAUDE.md

**Qeetrix** — shared design system, npm-published `@qeetrix/*` packages. pnpm + Turborepo monorepo, Tailwind v4 + shadcn/Base UI.

## Commands (`cd qeetrix`)

**pnpm@10.32.1** + Turborepo. `@qeetrix/ui`'s `build` regenerates tokens first (`build-tokens` → `tsc` → `tsc-alias` → `postbuild`).

```bash
pnpm install
pnpm build            # turbo run build (compiles @qeetrix/ui; tokens regenerated first)
pnpm tokens:build     # regenerate @qeetrix/ui design tokens (Style Dictionary)
pnpm tokens:validate  # WCAG-AA contrast check on generated semantic pairs
pnpm lint typecheck
pnpm --filter @qeetrix/docs storybook   # component workshop on :6006
pnpm changeset        # record a version bump; pnpm release publishes changed public pkgs
```

## Architecture

Single-package design system: **everything ships in `@qeetrix/ui`** (currently **0.4.0**). Design tokens (W3C JSON under `packages/ui/tokens/` → Style Dictionary via `packages/ui/scripts/build-tokens.mjs` → generated `src/styles/`, gitignored) are baked into `@qeetrix/ui/styles.css` and also exposed at `@qeetrix/ui/tokens.css` (raw `--qx-*`), `@qeetrix/ui/tokens.json`, and `@qeetrix/ui/qeetrix.css` (semantic). Components (**~114** shadcn + Base UI under `packages/ui/src/components/ui/` — new components go there), **composable blocks** (6 multi-component patterns under `packages/ui/src/blocks/` — `auth`, `dashboard-shell`, `onboarding-wizard`, `page-state`, `pricing-table`, `settings-layout` — exported at `@qeetrix/ui/blocks`), and brand (logos/icons under `packages/ui/src/brand/`, exported from the root barrel and `@qeetrix/ui/brand`) round it out. The full `exports` surface is: `.`, `/styles.css`, `/tokens.css`, `/tokens.json`, `/qeetrix.css`, `/brand`, `/blocks` (+ `/blocks/*`), and deep paths `/components/*`, `/lib/*`, `/hooks/*`, `/fonts/*`. The ui `build` runs `build-tokens` → `tsc` → `tsc-alias` → `postbuild` (postbuild copies fonts + `src/styles` into `dist`). Consumers import `@qeetrix/ui/styles.css` and drive light/dark via the `.dark` class managed by `ThemeProvider`. The shared `pnpm-workspace.yaml` **catalog** pins React/Tailwind/TS versions — add shared deps there, reference with `catalog:`. `@qeetrix/ui` is already a live dependency of qeet-id (`@qeet-id/console` + `@qeet-id/web`). (Tokens/brand were once separate `@qeetrix/tokens` / `@qeetrix/brand` packages — now folded in.) `packages/` also holds internal `tsconfig` + `eslint-config` packages and an **orphan `packages/themes/`** — a leftover build artifact (`dist/`/`presets/`/`scripts/`, **no `package.json`**, not published; pnpm ignores it).

Pins **pnpm@10.32.1** (qeet-id/frontend uses 9.15.4) — Corepack handles this from `packageManager`.
