---
"@qeetrix/ui": minor
---

Add Batch 2 data & dashboard components (additive):

- **DataTable** — TanStack-Table-powered table over the existing `Table` primitives, with sorting, global search, pagination, column visibility, and optional row selection + bulk-action strip wired up out of the box. Re-exports `ColumnDef`, `Row`, and `createColumnHelper` so consumers don't need `@tanstack/react-table` directly.
- **Stat** — KPI/metric tile for dashboards (label, large value, trend-coloured delta, optional icon + hint), styled to match `Card`.
- **DescriptionList** (`DescriptionList` / `DescriptionTerm` / `DescriptionDetails`) — responsive key-value detail view for entity & settings pages.
- **EmptyState** — icon + title + description + action zero-state; pairs with `DataState` (pass as its `empty` slot) or drops straight into a `Card`.
- **Spinner** — inline loading indicator with `sm | default | lg | xl` sizes, complementing `Skeleton`.

Adds `@tanstack/react-table@^8.21.3` as a dependency of `@qeetrix/ui` (scoped to `DataTable`). No breaking changes to existing components, exports, or tokens.
