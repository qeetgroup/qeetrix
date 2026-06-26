# Contributing to Qeetrix

## Setup

```bash
pnpm install
pnpm build
```

Node ≥ 20, pnpm 10 (pinned via `packageManager`).

## Add or change a token

Tokens live in [`packages/ui/tokens`](packages/ui/tokens) as W3C Design Tokens JSON
(`primitive/` → `theme/{light,dark}/{semantic,bridge}.json`). Edit those, then:

```bash
pnpm --filter @qeetrix/ui build-tokens      # regenerates src/styles/tokens.{css,raw.css,json}
pnpm --filter @qeetrix/ui validate-tokens   # WCAG-AA contrast guard
```

- The neutral ramp is real; **brand / accent / status ramps are placeholders that alias neutral**
  until the palette is ratified (OD-DS-03). To introduce the real palette, edit only the primitive
  ramps in `primitive/color.json` — semantic, bridge and component layers are untouched.
- Never hand-edit `:root` / `.dark` in `@qeetrix/ui` — those come from the generated `src/styles/tokens.css`.

## Add a component

```bash
cd packages/ui
npx shadcn@latest add <component>   # drops Base UI variants into src/components/ui
```

Then export it from `src/index.ts`, build (`pnpm --filter @qeetrix/ui build`), and add a story in
`apps/docs/stories/primitives/<component>.stories.tsx` importing from `@qeetrix/ui`.

- Components must stay **Base UI only** (no Radix). Client components keep their `"use client"`
  directive — the `tsc` build preserves it.

## Quality gates

```bash
pnpm turbo run lint typecheck build
pnpm --filter @qeetrix/ui validate-tokens
pnpm --filter @qeetrix/docs build-storybook
```

## Releasing

Record a changeset with every user-facing change:

```bash
pnpm changeset
```

Commit the generated file. Merging to `main` opens a **Version Packages** PR; merging that
publishes the changed public packages to npm. See [.changeset/README.md](.changeset/README.md).
