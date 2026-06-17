---
"@qeetrix/ui": minor
---

Add **TimePicker** and **DateTimePicker** (no new dependencies):

- **TimePicker** — time-of-day picker built from `Select` columns (hours / minutes / optional seconds / AM-PM). 12h or 24h display via `hourCycle`, configurable `minuteStep`, and `withSeconds`. The value is always emitted as a canonical 24h `"HH:mm"` (or `"HH:mm:ss"`) string. `parseTime` is exported for convenience.
- **DateTimePicker** — a `Calendar` with a `TimePicker` footer in a Popover, emitting a single `Date`. Mirrors `DatePicker`'s controlled/uncontrolled API; selecting a day preserves the chosen time and vice-versa.

No breaking changes.
