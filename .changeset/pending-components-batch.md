---
"@qeetrix/ui": minor
---

Add 16 new components from the competitive backlog (`COMPONENT-PROPOSALS.md`), each with a Storybook story and Vitest/axe tests:

- **Inputs & selection:** `Autocomplete` (free-text + suggestions, Base UI), `Chip` / `ChipGroup` (single/multi-select, removable), `SegmentedControl` (animated indicator), `Listbox` (standalone APG listbox), `AngleSlider` (0–360°).
- **Feedback & data:** `Notification` (inline card), `Feed` (APG feed pattern), `NumberFormatter`, `RollingNumber`, `OverflowList` (collapse-to-overflow).
- **Content & layout:** `Blockquote`, `Highlight` (search emphasis), `Spoiler` (truncate + expand), `TableOfContents` (+ `useScrollSpy`), `Marquee`, `FloatingWindow` (+ `useFloatingWindow`).

Also exports a `usePrefersReducedMotion` hook. All additive — no breaking changes, no new runtime dependencies. Built on existing semantic tokens (no token changes).
