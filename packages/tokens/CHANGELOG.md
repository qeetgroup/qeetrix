# @qeetrix/tokens

## 0.1.1

### Patch Changes

- 969f7f3: Updated

## 0.1.0

### Minor Changes

- 5882cdb: Promote **success / warning / info** to real, themeable semantic colors.
  - `@qeetrix/tokens`: the `success` (emerald), `warning` (amber), and `info` (sky) ramps are now real oklch palettes (were neutral placeholders); `danger` (red) is unchanged. New bridged runtime vars `--success`/`--warning`/`--info` (+ `-foreground`, + `--destructive-foreground`) are emitted per theme — dark shades in light mode, light shades in dark — all WCAG-AA on the page/card surfaces.
  - `@qeetrix/ui`: maps `--color-success`/`-warning`/`-info`(+`-foreground`) in `@theme`, and refactors ~15 components (Alert, Badge, Banner, Toast, StatusPill, Meter, PasswordStrengthMeter, Stat, FileUpload, CopyableSecret, and the PricingTier block) off hardcoded `emerald`/`amber`/`rose`/`sky` onto the semantic utilities (`text-success`, `bg-warning/10`, …). Status colors now theme consistently and have proper dark-mode parity. Decorative gold (Rating stars) and syntax highlighting (CodeBlock/JSONTree) intentionally keep palette colors.

  No API changes; status elements look equivalent but are now tokenized.

- c565778: Add **typography** and **density** primitive tokens:
  - **Typography** — `font.family` (`sans` / `heading` (Cal Sans Display) / `mono`), `font.line-height` (none → relaxed), and `font.letter-spacing` (tighter → wider), complementing the existing `font.size` and `font.weight` scales.
  - **Density** — `density.control-height`, `density.row-height`, `density.cell-padding-y`, and `density.field-gap`, each with `comfortable` / `compact` values (matching the `DataTable` density toggle).

  Exposed via the raw `--qx-*` export (`qeetrix.tokens.css`) and `qeetrix.tokens.json`. The shadcn/Base-UI bridge (`qeetrix.css`) and all existing tokens are unchanged; WCAG-AA contrast checks still pass.

### Patch Changes

- 5882cdb: Align `font.family` tokens with the design system's actual fonts: `sans` → **Cal Sans Text**, `heading` → **Cal Sans Display**, plus a new `ui` → **Cal Sans UI** family and a Cal-Sans-based `mono` stack (previously these pointed at generic system stacks).
