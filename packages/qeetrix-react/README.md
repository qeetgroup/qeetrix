# @qeetrix/react

Qeetrix React components packaged for npm consumption.

## Install

```bash
pnpm add @qeetrix/react react react-dom
```

## Use

```tsx
import { Button, ThemeProvider } from "@qeetrix/react"

function App() {
  return (
    <ThemeProvider>
      <Button>Button</Button>
    </ThemeProvider>
  )
}
```

The package entry imports its generated stylesheet automatically. If your app prefers an explicit style import, you can also use:

```tsx
import "@qeetrix/react/styles.css"
```

## Scripts

```bash
pnpm --filter @qeetrix/react run dev
pnpm --filter @qeetrix/react run build
pnpm --filter @qeetrix/react run build:demo
pnpm --filter @qeetrix/react run pack
```

`build` creates the publishable `dist` folder, while `build:demo` builds the local Vite showcase app.
