---
"@qeetrix/ui": minor
---

Add **chart presets** + **Sparkline** on top of the existing `ChartContainer` (Recharts), so dashboards don't hand-assemble charts:

- **AreaChart**, **BarChart**, **LineChart** — cartesian presets taking `data`, a `ChartConfig`, a `categoryKey`, and one or more `dataKeys`. Series colours resolve from `config[key].color`; toggles for grid, axes, legend, tooltip, and `stacked`.
- **DonutChart** (set `innerRadius={0}` for a pie) and **RadialChart** (gauge-style) — take `dataKey` + `nameKey`, colouring slices from `config`.
- **Sparkline** — a tiny axis-less inline trend (line or area) for KPI tiles (`Stat`) and table cells; colour follows `currentColor` via a `text-*` class. Accepts `number[]` or `{ value }[]`.

No new dependencies (reuses Recharts). No breaking changes.
