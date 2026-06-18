---
"@qeetrix/tokens": minor
"@qeetrix/ui": minor
---

Promote **success / warning / info** to real, themeable semantic colors.

- `@qeetrix/tokens`: the `success` (emerald), `warning` (amber), and `info` (sky) ramps are now real oklch palettes (were neutral placeholders); `danger` (red) is unchanged. New bridged runtime vars `--success`/`--warning`/`--info` (+ `-foreground`, + `--destructive-foreground`) are emitted per theme — dark shades in light mode, light shades in dark — all WCAG-AA on the page/card surfaces.
- `@qeetrix/ui`: maps `--color-success`/`-warning`/`-info`(+`-foreground`) in `@theme`, and refactors ~15 components (Alert, Badge, Banner, Toast, StatusPill, Meter, PasswordStrengthMeter, Stat, FileUpload, CopyableSecret, and the PricingTier block) off hardcoded `emerald`/`amber`/`rose`/`sky` onto the semantic utilities (`text-success`, `bg-warning/10`, …). Status colors now theme consistently and have proper dark-mode parity. Decorative gold (Rating stars) and syntax highlighting (CodeBlock/JSONTree) intentionally keep palette colors.

No API changes; status elements look equivalent but are now tokenized.
