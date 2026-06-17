---
"@qeetrix/ui": minor
---

Add Batch 6 advanced components (additive) — completing the enterprise expansion:

- **Timeline** — vertical event/audit history (`Timeline`, `TimelineItem`, `TimelineIndicator`, `TimelineContent`, `TimelineTitle`, `TimelineTime`, `TimelineDescription`).
- **Stepper** — horizontal multi-step flow indicator (onboarding/checkout) driven by `steps` + `activeStep`.
- **TreeView** — data-driven hierarchical disclosure tree (file trees, nested scopes) with per-node expand state.
- **Banner** — full-width, intent-coloured, optionally dismissible announcement bar.
- **Meter** — quota/usage gauge over Base UI Meter (label + formatted value + `intent` colours).
- **Resizable** (`ResizablePanelGroup` / `ResizablePanel` / `ResizableHandle`) — split layouts via react-resizable-panels, horizontal & vertical.

Adds `react-resizable-panels@^4.11.2` as a dependency of `@qeetrix/ui`, scoped to Resizable. No breaking changes to existing components, exports, or tokens.
