# Qeetrix

**Qeetrix** is the shared design system for **Qeet Group** products (Qeet ID and future apps).
It is a pnpm + Turborepo monorepo of versioned, npm-publishable packages built on
**Tailwind CSS v4** and **shadcn/ui with the Base UI registry**.

## Packages

| Package | Scope | Status |
| --- | --- | --- |
| `@qeetrix/tokens` | Design tokens (W3C JSON → Style Dictionary → CSS/JSON) | ✅ Phase 1 |
| `@qeetrix/ui` | React component library (shadcn + Base UI) | ✅ Phase 2 |
| `@qeetrix/tsconfig` | Shared TypeScript configs | ✅ (added in Phase 2) |
| `@qeetrix/brand` | Logos (theme-adaptive) + custom Qeet icons | ✅ Phase 3 |
| `@qeetrix/eslint-config` | Shared ESLint flat config (base + react) | ✅ Phase 4 |
| `apps/docs` | Storybook 10 workshop (private) — foundations + every component | ✅ Phase 5 |

## Install & use (consumers)

```bash
pnpm add @qeetrix/ui @qeetrix/tokens @qeetrix/brand
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
import { ThemeProvider, Button } from "@qeetrix/ui";
import { QeetLogo } from "@qeetrix/brand";

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
`@qeetrix/tokens/tokens.css` (the `--qx-` raw export) and `@qeetrix/tokens/tokens.json`.

## Develop

```bash
pnpm install
pnpm build           # turbo run build (token build runs first)
pnpm tokens:build    # build only @qeetrix/tokens
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
