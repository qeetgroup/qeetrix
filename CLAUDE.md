# qeetrix — CLAUDE.md

**Qeetrix** — shared design system, npm-published `@qeetrix/*` packages. pnpm + Turborepo monorepo, Tailwind v4 + shadcn/Base UI.

## Commands (`cd qeetrix`)

**pnpm@10.32.1** + Turborepo. The token build must run before everything (`build` depends on `^build`).

```bash
pnpm install
pnpm build            # turbo run build (tokens build first, then ui/brand/etc.)
pnpm tokens:build     # only @qeetrix/tokens
pnpm tokens:validate  # WCAG-AA contrast check on generated semantic pairs
pnpm lint typecheck
pnpm --filter @qeetrix/docs storybook   # component workshop on :6006
pnpm changeset        # record a version bump; pnpm release publishes changed public pkgs
```

## Architecture

Design-system pipeline: `@qeetrix/tokens` (W3C JSON → Style Dictionary → CSS/JSON, exported as `--qx-*`) feeds `@qeetrix/ui` (~88 shadcn + Base UI components under `packages/ui/src/components/ui/` — new components go there) and `@qeetrix/brand` (logos/icons). Consumers import `@qeetrix/ui/styles.css` and drive light/dark via the `.dark` class managed by `ThemeProvider`. The shared `pnpm-workspace.yaml` **catalog** pins React/Tailwind/TS versions — add shared deps there, reference with `catalog:`. `@qeetrix/ui` is already a live dependency of qeet-id (`qeetid-admin` + `qeetid-web`).

Pins **pnpm@10.32.1** (qeet-id/frontend uses 9.15.4) — Corepack handles this from `packageManager`.
