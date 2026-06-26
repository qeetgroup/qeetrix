---
"@qeetrix/ui": minor
---

Add 15 PRD-driven reusable components, distilled from the Qeet product PRDs — each with a Storybook story and Vitest/axe tests, composed from existing primitives (no new runtime dependencies):

- **Filtering & analytics:** `TimeRangePicker`, `FilterBar`
- **Payments & files:** `CurrencyInput`, `FileTypeIcon`, `FileCard`
- **Notifications:** `NotificationCenter`, `NotificationPreferenceMatrix`
- **Collaboration:** `PresenceIndicator`, `ReactionBar`, `MentionInput`, `CommentThread`
- **Layout & data:** `MasterDetail`, `DiffViewer`, `OrgChart`, `AvailabilityGrid`

Product-specific UI (mail compose, Pay checkout/invoice, People payroll, ReBAC editor, LogQL/live-tail, News story-clustering, Meet captions) intentionally stays in the product apps. `KanbanBoard` and `ScheduleCalendar` remain deferred pending a drag-and-drop / scheduling dependency.
