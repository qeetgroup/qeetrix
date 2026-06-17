---
"@qeetrix/ui": minor
---

Add Batch 3 forms & inputs components (additive, Base-UI-first):

- **Combobox** — single-select autocomplete (type to filter, keyboard + clear), string-based `items`/`value` API over Base UI Combobox.
- **MultiSelect** — multi-select / tag input with removable chips, sharing the Combobox primitive (`value: string[]`).
- **NumberField** — numeric input with stepper buttons, scrubbing, and locale/`Intl` formatting (currency, percent); forwards all Base UI `NumberField.Root` props.
- **InputGroup** (`InputGroup` / `InputGroupAddon` / `InputGroupInput`) — leading/trailing addons for currency symbols, units, and fixed prefixes.
- **Form** + **FormActions** — deliberately **form-library-agnostic** wrapper: a styled `<form>` with vertical rhythm plus a footer action row, composing with the existing `Field` family for validation display. No form-lib dependency — works with TanStack Form, React Hook Form, or plain HTML.

No new runtime dependencies (all Base UI, already a dep). No breaking changes to existing components, exports, or tokens.
