---
"@qeetrix/ui": minor
---

Add **Typography**, **Prose**, and **RichTextEditor**:

- **Typography** — consistent styling for discrete copy via a `variant` prop (`h1`–`h4`, `p`, `lead`, `large`, `small`, `muted`, `blockquote`, `inlineCode`, `list`) with a sensible default element per variant and an `as` override.
- **Prose** — self-contained typographic styles for rendered HTML/markdown (MDX, editor output). No `@tailwindcss/typography` dependency; the reusable `proseClassName` is exported.
- **RichTextEditor** — WYSIWYG editor built on Tiptap (StarterKit) with a `Toggle`-based toolbar (bold/italic/strike/code, H1–H3, lists, quote, undo/redo). Outputs HTML (`onChange`) and ProseMirror JSON (`onChangeJSON`), styled with `proseClassName`, controlled or uncontrolled, and SSR-safe.

Adds dependencies: `@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/pm`. No breaking changes.
