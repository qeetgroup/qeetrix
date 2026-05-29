# @qeetrix/brand

Qeet brand assets as React components: the **Qeet logo** (theme-adaptive) and a set of
**custom Qeet icons**. ESM-only, server-safe (no `"use client"`), `currentColor`-friendly.

```bash
pnpm add @qeetrix/brand
pnpm add react react-dom   # peers
```

## Logo

```tsx
import { QeetLogo, QeetLogoOnLight, QeetLogoOnDark } from "@qeetrix/brand";

<QeetLogo size={32} />                    {/* auto: light-surface mark in light theme, dark-surface in dark */}
<QeetLogo variant="on-light" />           {/* force the dark artwork (light background) */}
<QeetLogo variant="on-dark" />            {/* force the light artwork (dark background) */}
```

`variant="auto"` (default) swaps via the `.dark` class strategy + the Qeetrix Tailwind
`dark:` variant, so it Just Works when you import `@qeetrix/ui/styles.css`. Without those
styles, pass an explicit `variant`. `QeetLogoMark` is an alias of `QeetLogo` (the artwork is
the square "Q" mark; a separate wordmark/lockup is not yet available).

Raw SVGs are also shipped: `@qeetrix/brand/assets/qeet-logo-on-light.svg`, `.../qeet-logo-on-dark.svg`.

## Icons

```tsx
import { IconPasskey, IconMfaShield } from "@qeetrix/brand";

<IconPasskey size={20} />                 {/* decorative (aria-hidden) by default */}
<IconPasskey title="Passkey" />           {/* labelled (role="img") */}
```

Set: `IconPasskey`, `IconMfaShield`, `IconSamlConnector`, `IconScimSync`, `IconOidcConnector`,
`IconWebhook`, `IconApiKey`, `IconAuditLog`, `IconTenant`, `IconCrossDevice` (24×24, 1.5px stroke,
`currentColor`). `QEET_ICON_MIRROR` carries RTL mirror metadata (doc §14).

> ⚠️ Icon glyphs are **placeholders** (`TODO: final art`). Names, props and sizing are final;
> only the artwork will change. Logos regenerate from `assets/raw` via `pnpm --filter @qeetrix/brand generate`.
