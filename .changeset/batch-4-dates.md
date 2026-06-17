---
"@qeetrix/ui": minor
---

Add Batch 4 date & time components (additive):

- **Calendar** — token-styled wrapper over react-day-picker (v9) supporting all modes (`single`, `multiple`, `range`); styled entirely through design tokens + `buttonVariants` (no external CSS import), with lucide chevrons.
- **DatePicker** — single-date picker: an outline trigger button opening a `Calendar` in a `Popover`; controlled or uncontrolled, formats via `Intl.DateTimeFormat`.
- **DateRangePicker** — two-month range picker for log windows / billing periods; re-exports the `DateRange` type.

Adds `react-day-picker@^9.9.0` (resolved 9.14.0) as a dependency of `@qeetrix/ui`, scoped to these components. No breaking changes to existing components, exports, or tokens.
