---
"@qeetrix/ui": minor
---

Fold `@qeetrix/tokens` and `@qeetrix/brand` into `@qeetrix/ui` — one package now ships components, design tokens, and brand, so consumers install a single dependency.

- **Tokens** are baked into `@qeetrix/ui/styles.css` and exposed as new subpaths: `@qeetrix/ui/tokens.css` (raw `--qx-*`), `@qeetrix/ui/tokens.json` (resolved per theme), and `@qeetrix/ui/qeetrix.css` (semantic `:root` / `.dark` only).
- **Brand** (Qeet logos + custom icons) is now re-exported from the root barrel (`import { QeetLogo } from "@qeetrix/ui"`) and the `@qeetrix/ui/brand` subpath.

Migration: replace `@qeetrix/tokens` imports with the matching `@qeetrix/ui/tokens.*` / `@qeetrix/ui/qeetrix.css` subpaths, and `@qeetrix/brand` imports with `@qeetrix/ui` or `@qeetrix/ui/brand`. The standalone `@qeetrix/tokens` and `@qeetrix/brand` packages are deprecated.
