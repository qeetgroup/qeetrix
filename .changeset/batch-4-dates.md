---
"@qeetrix/ui": minor
---

Add Batch 4 date & time components (additive):

- **Calendar** — the canonical shadcn Calendar component (built on react-day-picker v9), restyled to the qeetrix design tokens; supports all modes (`single` / `multiple` / `range`) and dropdown caption layouts. Also exports `CalendarDayButton`.
- **DatePicker** — single-date picker: an outline trigger button opening a `Calendar` in a `Popover`; controlled or uncontrolled, formats via `Intl.DateTimeFormat`.
- **DateRangePicker** — two-month range picker for log windows / billing periods; re-exports the `DateRange` type.

Adds `react-day-picker@^9.9.0` (resolved 9.14.0) as a dependency of `@qeetrix/ui`, scoped to these components. No breaking changes to existing components, exports, or tokens.
