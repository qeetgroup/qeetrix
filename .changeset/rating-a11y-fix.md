---
"@qeetrix/ui": patch
---

Fix **Rating** accessibility: drop the `aria-readonly` / `aria-disabled` attributes from the read-only/disabled variant, which uses `role="img"` where those attributes aren't permitted (flagged by axe). The non-interactive state is already conveyed by the role, so no behaviour changes.
