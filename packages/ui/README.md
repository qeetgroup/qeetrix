# @qeetrix/ui

Qeetrix UI — the Qeet Group React component library. Built on **shadcn/ui with the Base UI
registry** and **Tailwind CSS v4**, themed by [`@qeetrix/tokens`](../tokens). ESM-only,
ships compiled JS + types + the Tailwind entry + self-hosted Cal Sans fonts.

## Install

```bash
pnpm add @qeetrix/ui @qeetrix/tokens
# peers
pnpm add react react-dom
```

## Setup (Tailwind v4 consumer)

1. Import the stylesheet in your global CSS (this pulls in the tokens, fonts and base layer):

   ```css
   @import "@qeetrix/ui/styles.css";
   /* Let Tailwind scan the compiled component classes: */
   @source "../node_modules/@qeetrix/ui/dist/**/*.js";
   ```

2. Wrap your app in the theme provider:

   ```tsx
   import { ThemeProvider } from "@qeetrix/ui";

   export default function App({ children }) {
     return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
   }
   ```

3. Use components:

   ```tsx
   import { Button, Badge, cn } from "@qeetrix/ui";

   <Button variant="default" size="sm">Save</Button>;
   ```

Client components ship with their `"use client"` directive preserved, so they work in
React Server Component setups (Next.js App Router) out of the box.

## Imports

- Barrel: `import { Button, ... } from "@qeetrix/ui"`
- Subpath: `import { Button } from "@qeetrix/ui/components/ui/button"`
- Utils/hooks: `@qeetrix/ui/lib/utils`, `@qeetrix/ui/hooks/use-mobile`
- Styles: `@qeetrix/ui/styles.css`

## Develop

```bash
pnpm --filter @qeetrix/ui build       # tsc → dist (preserves "use client"), tsc-alias adds .js, copies css+fonts
pnpm --filter @qeetrix/ui typecheck
npx shadcn@latest add <component>    # adds Base UI variants into src/components/ui (components.json)
```
