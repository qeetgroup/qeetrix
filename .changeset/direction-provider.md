---
"@qeetrix/ui": minor
---

Add **DirectionProvider** (+ `useDirection`) for right-to-left support. It wraps Base UI's direction context (so menus, sliders, etc. flip) and sets the `dir` attribute on a `display: contents` wrapper, so CSS logical properties and Tailwind `rtl:` variants resolve for the subtree. The component library already uses logical utilities throughout (`ps-`/`pe-`, `ms-`/`me-`, `start-`/`end-`), so most layout flips automatically.
