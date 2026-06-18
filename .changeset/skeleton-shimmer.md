---
"@qeetrix/ui": patch
---

**Skeleton** now uses a moving shimmer sweep (a highlight gradient over the muted base) instead of a flat pulse, for a more premium loading feel. The animation is defined on `[data-slot="skeleton"]` and is disabled under `prefers-reduced-motion`. Applies anywhere `Skeleton` is used (DataState, sidebar menu skeletons, etc.).
