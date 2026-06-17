---
"@qeetrix/tokens": minor
---

Add **typography** and **density** primitive tokens:

- **Typography** — `font.family` (`sans` / `heading` (Cal Sans Display) / `mono`), `font.line-height` (none → relaxed), and `font.letter-spacing` (tighter → wider), complementing the existing `font.size` and `font.weight` scales.
- **Density** — `density.control-height`, `density.row-height`, `density.cell-padding-y`, and `density.field-gap`, each with `comfortable` / `compact` values (matching the `DataTable` density toggle).

Exposed via the raw `--qx-*` export (`qeetrix.tokens.css`) and `qeetrix.tokens.json`. The shadcn/Base-UI bridge (`qeetrix.css`) and all existing tokens are unchanged; WCAG-AA contrast checks still pass.
