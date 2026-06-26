# Qeetrix

**Qeetrix** is the shared design system for **Qeet Group** products (Qeet ID and future apps).
It is a pnpm + Turborepo monorepo of versioned, npm-publishable packages built on
**Tailwind CSS v4** and **shadcn/ui with the Base UI registry**.

## Packages

| Package | Scope | Status |
| --- | --- | --- |
| `@qeetrix/ui` | React component library (shadcn + Base UI) **+ design tokens + brand** — the one package consumers install | ✅ |
| `@qeetrix/tsconfig` | Shared TypeScript configs | ✅ |
| `@qeetrix/eslint-config` | Shared ESLint flat config (base + react) | ✅ |
| `apps/docs` | Storybook 10 workshop (private) — foundations + every component | ✅ |

> Tokens and brand were previously separate packages (`@qeetrix/tokens`, `@qeetrix/brand`); they
> are now folded into `@qeetrix/ui` so there's a single install. Tokens are exposed at
> `@qeetrix/ui/tokens.css` / `@qeetrix/ui/tokens.json` (and `@qeetrix/ui/qeetrix.css` for the
> semantic layer); brand at `@qeetrix/ui/brand` (and the root barrel).

## Install & use (consumers)

```bash
pnpm add @qeetrix/ui       # components + tokens + brand, all in one
pnpm add react react-dom   # peers (>=19)
```

In your Tailwind v4 global stylesheet:

```css
@import "@qeetrix/ui/styles.css";
/* Let Tailwind generate the classes used by Qeetrix components: */
@source "../node_modules/@qeetrix/ui/dist/**/*.js";
```

Then wrap the app and use components:

```tsx
import { ThemeProvider, Button, QeetLogo } from "@qeetrix/ui";

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <QeetLogo size={28} />
      <Button>Authenticate with Qeet</Button>
    </ThemeProvider>
  );
}
```

Tailwind v4 is a peer of the consumer build. Light/dark is driven by the `.dark` class on the
root element (managed by `ThemeProvider`). Tokens can be consumed directly too —
`@qeetrix/ui/tokens.css` (the `--qx-` raw export) and `@qeetrix/ui/tokens.json`.

## Develop

```bash
pnpm install
pnpm build           # turbo run build (@qeetrix/ui regenerates tokens first, then compiles)
pnpm tokens:build    # regenerate only the @qeetrix/ui design tokens
pnpm tokens:validate # WCAG-AA contrast check on generated semantic pairs
pnpm lint
pnpm typecheck
pnpm --filter @qeetrix/docs storybook   # component workshop on :6006
```

## Release

Versioning and npm publishing are driven by [Changesets](.changeset/README.md):

```bash
pnpm changeset          # record a change (pick packages + bump)
pnpm version-packages   # apply bumps + changelogs (usually done by CI)
pnpm release            # build all, then publish changed public packages
```

CI (`.github/workflows/ci.yml`) runs lint + typecheck + build + token contrast + Storybook on
every PR. The release workflow opens a **Version Packages** PR and publishes on merge to `main`
(needs an `NPM_TOKEN` repo secret and the `@qeetrix` npm org).

## Status

**Phases 0–6 complete — Qeetrix is fully implemented** (per [`IMPLEMENTATION_PROMPT.md`](./IMPLEMENTATION_PROMPT.md)),
entirely inside this folder: monorepo + tokens + ui + brand + shared configs + Storybook +
Changesets/CI. Wiring `qeet-identity` onto `@qeetrix/*` (Phase 7) is a separate, **approval-gated**
step and is **not** part of this build.
# qeetrix
