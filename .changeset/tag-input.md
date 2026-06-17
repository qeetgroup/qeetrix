---
"@qeetrix/ui": minor
---

Add **TagInput** — a free-form chips input. Type and press Enter (or comma) to add a tag, Backspace on an empty field to remove the last one, and click a chip's × to remove it. Controlled via `value: string[]` / `onChange`, with `maxTags`, case-insensitive `dedupe`, and a `validate` hook for normalising/rejecting tags (e.g. emails). For a fixed option set, keep using `MultiSelect`.

No breaking changes.
