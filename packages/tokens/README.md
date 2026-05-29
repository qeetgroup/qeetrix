# @qeetrix/tokens

The single source of truth for Qeetrix design tokens. Authored as **W3C Design Tokens**
JSON under [`tokens/`](./tokens) and built with **Style Dictionary** into three artifacts.

## Outputs (`dist/`)

| File | Export | What it is |
| --- | --- | --- |
| `qeetrix.css` | `@qeetrix/tokens/qeetrix.css` | **shadcn / Base-UI bridge** — `:root` + `.dark` with the *unprefixed* runtime vars (`--background`, `--primary`, `--radius`, `--sidebar-*`, `--chart-*`). `@qeetrix/ui` imports this. Value-for-value identical to the original Qeet ID `index.css`. |
| `qeetrix.tokens.css` | `@qeetrix/tokens/tokens.css` | Full raw token export, **`--qx-`** prefixed (`--qx-color-text-primary`, `--qx-space-l`, `--qx-radii-base`, …). For advanced / white-label consumers. |
| `qeetrix.tokens.json` | `@qeetrix/tokens/tokens.json` | Resolved tokens per theme `{ light, dark }`. Cross-platform (marketing, future Flutter SDK). |

## Token tiers (`tokens/`)

- `primitive/` — raw values. `color` (neutral ramp is real; **brand / accent / status ramps are
  neutral placeholders** until the palette is ratified, OD-DS-03), `space`, `size`, `radii`,
  `shadow`, `motion`, `zindex`.
- `theme/{light,dark}/semantic.json` — intent-named tokens (`color.text.*`, `surface.*`, `border.*`,
  `action.*`) referencing primitives, one value per theme.
- `theme/{light,dark}/bridge.json` — the shadcn/Base-UI runtime var names, mapped to primitives.

To introduce the real brand palette later, edit only the `color.brand` / `color.accent` /
status ramps in `primitive/color.json` — semantic, bridge, and component layers are unchanged.

## Scripts

```bash
pnpm --filter @qeetrix/tokens build      # regenerate dist/
pnpm --filter @qeetrix/tokens validate   # WCAG-AA contrast check (blocks on body-text regressions)
```

> `validate` enforces AA on real body-text/surface pairs and **reports** (non-blocking) the
> placeholder-brand and placeholder-text pairs, so a future brand palette that breaks contrast
> is caught immediately.
