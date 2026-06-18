---
"@qeetrix/ui": minor
---

Add an **elevation** and **motion-easing** scale to `@theme` and apply it consistently.

- Elevation utilities `shadow-rest` / `shadow-hover` / `shadow-popover` / `shadow-modal` (mirroring `@qeetrix/tokens` `shadow.json`). Overlays now use the ladder intentionally: menus/popovers/selects/tooltips/hover-cards/toasts → `shadow-popover`; dialogs/sheets/command-palette → `shadow-modal`; floating/inset sidebar → `shadow-rest` (replacing ad-hoc `shadow-md`/`shadow-lg`/`shadow-xl`).
- Easing utilities `ease-standard` / `ease-decelerate` / `ease-accelerate` / `ease-sharp` (mirroring `motion.json`) for consistent transition timing.
