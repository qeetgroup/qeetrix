# Qeetrix

Qeetrix is a pnpm monorepo for the design system and its supporting packages.

## Workspace

This repository uses `pnpm-workspace.yaml` with the following package groups:

- `packages/*`
- `apps/*`

Current shared tooling packages:

- `@qeetrix/eslint`: reusable flat ESLint configs for workspace packages
- `@qeetrix/tsconfig`: reusable TypeScript base and environment presets

Current library packages:

- `@qeetrix/icons`: shared React icon package for workspace consumers
- `@qeetrix/react`: React package consuming the shared ESLint and TypeScript configs

## Getting Started

Install dependencies from the repository root:

```bash
pnpm install
```

## Shared Tooling

### ESLint

Shared ESLint configs live in `packages/qeetrix-eslint`.

Available exports:

- `@qeetrix/eslint/base`
- `@qeetrix/eslint/react`

Example package-level usage:

```js
export { default } from "@qeetrix/eslint/react";
```

### TypeScript

Shared TypeScript presets live in `packages/qeetrix-tsconfig`.

Available presets:

- `@qeetrix/tsconfig/base.json`
- `@qeetrix/tsconfig/react-vite.json`
- `@qeetrix/tsconfig/react-library.json`
- `@qeetrix/tsconfig/node.json`

Example package-level usage:

```json
{
  "extends": "@qeetrix/tsconfig/react-vite.json"
}
```

The root `tsconfig.json` also extends `@qeetrix/tsconfig/base.json`.

## Icons

The shared icons package lives in `packages/qeetrix-icons`.

Use it from other workspace packages like this:

```tsx
import { ArchiveLinear } from "@qeetrix/icons"
```

`@qeetrix/react` is already wired to resolve `@qeetrix/icons` from the monorepo source during local development.

When new SVG files are added under `packages/qeetrix-icons/svgs`, regenerate the React components with:

```bash
pnpm generate:icons
```

## Root Scripts

Run these from the repository root:

- `pnpm dev`: runs package `dev` scripts in parallel
- `pnpm lint`: runs all workspace `lint` scripts
- `pnpm typecheck`: runs all workspace `typecheck` scripts
- `pnpm build`: runs all workspace `build` scripts
- `pnpm check`: runs lint, typecheck, and Prettier checks
- `pnpm format:write`: formats the repository with Prettier
- `pnpm format:check`: checks formatting with Prettier

## Notes

- Prettier is configured at the root, so root-level formatting plugins should be installed in the root `package.json`.
- Use the root `pnpm-lock.yaml` as the single lockfile for the monorepo.
