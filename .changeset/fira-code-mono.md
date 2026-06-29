---
"@qeetrix/ui": minor
---

The monospace font is now bundled **Fira Code** (SIL OFL 1.1), replacing the previous Cal Sans Text mono fallback. This repoints the `--font-mono` token, so every monospace surface picks it up automatically — code blocks, `<kbd>`, copyable secrets, JSON trees, diff viewers, OTP inputs, the color-picker hex value, and chart axis numbers. No API changes; purely a typographic upgrade for code-like content.
