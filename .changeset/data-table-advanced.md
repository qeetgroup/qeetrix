---
"@qeetrix/ui": minor
---

Upgrade **DataTable** with enterprise depth (all opt-in, fully backward-compatible — existing props and behaviour are unchanged):

- **Column resizing** (`enableColumnResizing`) — drag column edges; widths persist via `persistKey`.
- **Column pinning** (`enablePinning`) — pin columns left/right (sticky) from each header's menu.
- **Row virtualization** (`enableVirtualization` + `maxHeight`) — render only visible rows for large datasets (adds `@tanstack/react-virtual`); disables pagination.
- **Expandable rows** (`enableExpanding` + `renderSubComponent`, `getRowCanExpand`) — inline detail panels.
- **Faceted filters** (`facetedFilters`) — toolbar multi-select filters with live counts (columns use `filterFn: "arrIncludesSome"`).
- **CSV export** (`enableExport`, `exportFilename`) — exports the currently filtered rows.
- **Density toggle** (`enableDensity`, `defaultDensity`) — comfortable/compact rows.
- **Sticky header** — automatic whenever `maxHeight` or virtualization is set.
- **State persistence** (`persistKey`) — sorting / visibility / sizing / pinning / density saved to `localStorage`.

Adds dependency: `@tanstack/react-virtual`.
