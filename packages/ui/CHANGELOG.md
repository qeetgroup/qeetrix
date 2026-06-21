# @qeetrix/ui

## 0.3.0

### Minor Changes

- c565778: Add **DirectionProvider** (+ `useDirection`) for right-to-left support. It wraps Base UI's direction context (so menus, sliders, etc. flip) and sets the `dir` attribute on a `display: contents` wrapper, so CSS logical properties and Tailwind `rtl:` variants resolve for the subtree. The component library already uses logical utilities throughout (`ps-`/`pe-`, `ms-`/`me-`, `start-`/`end-`), so most layout flips automatically.
- 5882cdb: Add an **elevation** and **motion-easing** scale to `@theme` and apply it consistently.
  - Elevation utilities `shadow-rest` / `shadow-hover` / `shadow-popover` / `shadow-modal` (mirroring `@qeetrix/tokens` `shadow.json`). Overlays now use the ladder intentionally: menus/popovers/selects/tooltips/hover-cards/toasts → `shadow-popover`; dialogs/sheets/command-palette → `shadow-modal`; floating/inset sidebar → `shadow-rest` (replacing ad-hoc `shadow-md`/`shadow-lg`/`shadow-xl`).
  - Easing utilities `ease-standard` / `ease-decelerate` / `ease-accelerate` / `ease-sharp` (mirroring `motion.json`) for consistent transition timing.

- 5882cdb: Promote **success / warning / info** to real, themeable semantic colors.
  - `@qeetrix/tokens`: the `success` (emerald), `warning` (amber), and `info` (sky) ramps are now real oklch palettes (were neutral placeholders); `danger` (red) is unchanged. New bridged runtime vars `--success`/`--warning`/`--info` (+ `-foreground`, + `--destructive-foreground`) are emitted per theme — dark shades in light mode, light shades in dark — all WCAG-AA on the page/card surfaces.
  - `@qeetrix/ui`: maps `--color-success`/`-warning`/`-info`(+`-foreground`) in `@theme`, and refactors ~15 components (Alert, Badge, Banner, Toast, StatusPill, Meter, PasswordStrengthMeter, Stat, FileUpload, CopyableSecret, and the PricingTier block) off hardcoded `emerald`/`amber`/`rose`/`sky` onto the semantic utilities (`text-success`, `bg-warning/10`, …). Status colors now theme consistently and have proper dark-mode parity. Decorative gold (Rating stars) and syntax highlighting (CodeBlock/JSONTree) intentionally keep palette colors.

  No API changes; status elements look equivalent but are now tokenized.

### Patch Changes

- c565778: Fix **Rating** accessibility: drop the `aria-readonly` / `aria-disabled` attributes from the read-only/disabled variant, which uses `role="img"` where those attributes aren't permitted (flagged by axe). The non-interactive state is already conveyed by the role, so no behaviour changes.
- 5882cdb: **Skeleton** now uses a moving shimmer sweep (a highlight gradient over the muted base) instead of a flat pulse, for a more premium loading feel. The animation is defined on `[data-slot="skeleton"]` and is disabled under `prefers-reduced-motion`. Applies anywhere `Skeleton` is used (DataState, sidebar menu skeletons, etc.).
- Updated dependencies [5882cdb]
- Updated dependencies [c565778]
- Updated dependencies [5882cdb]
  - @qeetrix/tokens@0.1.0

## 0.2.0

### Minor Changes

- 62ef506: Add **AspectRatio** — constrains content to a fixed width-to-height ratio via the native CSS `aspect-ratio` property. Pass a `ratio` (e.g. `16 / 9`, `4 / 3`, `1`); the immediate child fills the box with `className="size-full object-cover"`. Useful for media thumbnails, avatars, and embeds.

  No breaking changes: existing components, exports, tokens, and dependencies are untouched.

- fc3bf47: Add Batch 1 overlay & feedback components (additive, Base-UI-first):
  - **Dialog** — generic modal (`Dialog`, `DialogTrigger`, `DialogClose`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`), complementing the existing action-confirm `AlertDialog`.
  - **Toast / Toaster** — app-wide notifications. Mount `<Toaster />` once at the app root and call `toast()` / `toast.success|warning|error|info`, plus `toast.promise` and `toast.dismiss`, from anywhere.
  - **Alert** — inline callout with `default | info | success | warning | danger` intents (`Alert`, `AlertTitle`, `AlertDescription`).
  - **Drawer** — bottom-anchored sheet preset with a grab handle (`Drawer`, `DrawerTrigger`, `DrawerClose`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription`), built on the existing `Sheet`.

  No breaking changes: existing components, exports, tokens, and dependencies are untouched.

- fc3bf47: Add Batch 2 data & dashboard components (additive):
  - **DataTable** — TanStack-Table-powered table over the existing `Table` primitives, with sorting, global search, pagination, column visibility, and optional row selection + bulk-action strip wired up out of the box. Re-exports `ColumnDef`, `Row`, and `createColumnHelper` so consumers don't need `@tanstack/react-table` directly.
  - **Stat** — KPI/metric tile for dashboards (label, large value, trend-coloured delta, optional icon + hint), styled to match `Card`.
  - **DescriptionList** (`DescriptionList` / `DescriptionTerm` / `DescriptionDetails`) — responsive key-value detail view for entity & settings pages.
  - **EmptyState** — icon + title + description + action zero-state; pairs with `DataState` (pass as its `empty` slot) or drops straight into a `Card`.
  - **Spinner** — inline loading indicator with `sm | default | lg | xl` sizes, complementing `Skeleton`.

  Adds `@tanstack/react-table@^8.21.3` as a dependency of `@qeetrix/ui` (scoped to `DataTable`). No breaking changes to existing components, exports, or tokens.

- fc3bf47: Add Batch 3 forms & inputs components (additive, Base-UI-first):
  - **Combobox** — single-select autocomplete (type to filter, keyboard + clear), string-based `items`/`value` API over Base UI Combobox.
  - **MultiSelect** — multi-select / tag input with removable chips, sharing the Combobox primitive (`value: string[]`).
  - **NumberField** — numeric input with stepper buttons, scrubbing, and locale/`Intl` formatting (currency, percent); forwards all Base UI `NumberField.Root` props.
  - **InputGroup** (`InputGroup` / `InputGroupAddon` / `InputGroupInput`) — leading/trailing addons for currency symbols, units, and fixed prefixes.
  - **Form** + **FormActions** — deliberately **form-library-agnostic** wrapper: a styled `<form>` with vertical rhythm plus a footer action row, composing with the existing `Field` family for validation display. No form-lib dependency — works with TanStack Form, React Hook Form, or plain HTML.

  No new runtime dependencies (all Base UI, already a dep). No breaking changes to existing components, exports, or tokens.

- fc3bf47: Add Batch 4 date & time components (additive):
  - **Calendar** — the canonical shadcn Calendar component (built on react-day-picker v9), restyled to the qeetrix design tokens; supports all modes (`single` / `multiple` / `range`) and dropdown caption layouts. Also exports `CalendarDayButton`.
  - **DatePicker** — single-date picker: an outline trigger button opening a `Calendar` in a `Popover`; controlled or uncontrolled, formats via `Intl.DateTimeFormat`.
  - **DateRangePicker** — two-month range picker for log windows / billing periods; re-exports the `DateRange` type.

  Adds `react-day-picker@^9.9.0` (resolved 9.14.0) as a dependency of `@qeetrix/ui`, scoped to these components. No breaking changes to existing components, exports, or tokens.

- fc3bf47: Add Batch 5 navigation & structure components (additive, Base-UI-first):
  - **NavigationMenu** — top-nav / mega-menu with a morphing floating viewport (`navigationMenuTriggerStyle()` for matching links).
  - **Menubar** — desktop-style app menu bar (File / Edit / View), with items, checkbox/radio items, submenus, shortcuts.
  - **ContextMenu** — right-click menus with the full menu surface (items, checkbox/radio, submenus, destructive variant), mirroring DropdownMenu styling.
  - **HoverCard** — hover/focus preview card (user & entity previews) over Base UI Preview Card.
  - **Toolbar** — action bar for tables/editors (`Toolbar`, `ToolbarButton`, `ToolbarLink`, `ToolbarGroup`, `ToolbarSeparator`).
  - **Kbd** + **KbdGroup** — keyboard-shortcut hint glyphs.
  - **PageHeader** — presentational title block (breadcrumb eyebrow + title + description + actions); promoted from qeetid-admin and made router-agnostic.
  - **AppShell** (`AppShell` / `AppShellMain` / `AppShellHeader` / `AppShellContent`) — minimal full-height app layout frame that pairs with the Sidebar system and PageHeader.

  No new runtime dependencies (all Base UI / hand-built). No breaking changes to existing components, exports, or tokens.

- fc3bf47: Add Batch 6 advanced components (additive) — completing the enterprise expansion:
  - **Timeline** — vertical event/audit history (`Timeline`, `TimelineItem`, `TimelineIndicator`, `TimelineContent`, `TimelineTitle`, `TimelineTime`, `TimelineDescription`).
  - **Stepper** — horizontal multi-step flow indicator (onboarding/checkout) driven by `steps` + `activeStep`.
  - **TreeView** — data-driven hierarchical disclosure tree (file trees, nested scopes) with per-node expand state.
  - **Banner** — full-width, intent-coloured, optionally dismissible announcement bar.
  - **Meter** — quota/usage gauge over Base UI Meter (label + formatted value + `intent` colours).
  - **Resizable** (`ResizablePanelGroup` / `ResizablePanel` / `ResizableHandle`) — split layouts via react-resizable-panels, horizontal & vertical.

  Adds `react-resizable-panels@^4.11.2` as a dependency of `@qeetrix/ui`, scoped to Resizable. No breaking changes to existing components, exports, or tokens.

- 62ef506: Add a **blocks layer** — composed, page-level patterns under the new `@qeetrix/ui/blocks` subpath, so product teams stop rebuilding these by hand:
  - **Auth** — `AuthShell` plus `LoginForm`, `SignupForm`, `ForgotPasswordForm`, and `OtpForm` (composing `Field`/`Form`, `OTPInput`, `PasswordStrengthMeter`); library-agnostic, with logo/forgot/social slots.
  - **DashboardShell** — the reference app layout (`Sidebar` slot + sticky header + scrollable content) over the `AppShell` primitives.
  - **SettingsLayout** / **SettingsSection** — stacked-section settings page (profile / security / danger zone) with header, body, and footer slots.
  - **OnboardingWizard** — multi-step flow over `Stepper` with Back/Next→Finish navigation, controlled or uncontrolled.
  - **PricingTable** / **PricingTier** — marketing pricing grid with featured highlight, badge, and included/excluded feature lists.
  - **PageState** + presets **NotFound** / **ServerError** / **Maintenance** — full-page empty/error/404/maintenance screens.

  Import from `@qeetrix/ui/blocks`. Additive; no new dependencies and no breaking changes.

- 62ef506: Add **Carousel** — an accessible slider built on Embla (`embla-carousel-react`). Compose `Carousel` with `CarouselContent`, `CarouselItem`, and `CarouselPrevious` / `CarouselNext`; arrow keys move between slides and the region is announced as a carousel. Supports horizontal/vertical `orientation`, Embla `opts` (loop, align, multi-per-view via `basis-*`), a `setApi` escape hatch for dots/progress, and autoplay via `plugins={[Autoplay()]}`. `useCarousel` and the `CarouselApi` type are exported.

  Adds dependency: `embla-carousel-react`. No breaking changes.

- 62ef506: Add **chart presets** + **Sparkline** on top of the existing `ChartContainer` (Recharts), so dashboards don't hand-assemble charts:
  - **AreaChart**, **BarChart**, **LineChart** — cartesian presets taking `data`, a `ChartConfig`, a `categoryKey`, and one or more `dataKeys`. Series colours resolve from `config[key].color`; toggles for grid, axes, legend, tooltip, and `stacked`.
  - **DonutChart** (set `innerRadius={0}` for a pie) and **RadialChart** (gauge-style) — take `dataKey` + `nameKey`, colouring slices from `config`.
  - **Sparkline** — a tiny axis-less inline trend (line or area) for KPI tiles (`Stat`) and table cells; colour follows `currentColor` via a `text-*` class. Accepts `number[]` or `{ value }[]`.

  No new dependencies (reuses Recharts). No breaking changes.

- 62ef506: Upgrade **DataTable** with enterprise depth (all opt-in, fully backward-compatible — existing props and behaviour are unchanged):
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

- 62ef506: Add **File Upload** primitives — a composable, framework-agnostic upload pattern that generalizes the existing `LogoUploader`:
  - **Dropzone** — drag-and-drop (or click) picker with `accept` / `maxSize` / `maxFiles` validation, keyboard support, and an `onDrop(accepted, rejected)` callback. Inner content is overridable via a render-prop.
  - **FileList** / **FileUploadItem** — render the selected files with image thumbnails, size, per-file progress (`Progress`), success/error status, and a remove action.
  - Helpers **formatBytes** and **isFileAccepted** are exported for custom layouts.

  The parent owns the file array and upload logic, so it drops into any form library. No breaking changes.

- 62ef506: Add **Rating** — a star (or custom icon) rating control. Interactive when `onChange` is supplied (click to set, focus + arrow/Home/End keys to adjust, with `slider` semantics), or a read-only `img` for aggregate display. Supports `max`, half-icon precision via `allowHalf`, three `size`s, and a swappable `icon` (e.g. `HeartIcon`).

  No breaking changes.

- 62ef506: Add **TagInput** — a free-form chips input. Type and press Enter (or comma) to add a tag, Backspace on an empty field to remove the last one, and click a chip's × to remove it. Controlled via `value: string[]` / `onChange`, with `maxTags`, case-insensitive `dedupe`, and a `validate` hook for normalising/rejecting tags (e.g. emails). For a fixed option set, keep using `MultiSelect`.

  No breaking changes.

- 62ef506: Add **TimePicker** and **DateTimePicker** (no new dependencies):
  - **TimePicker** — time-of-day picker built from `Select` columns (hours / minutes / optional seconds / AM-PM). 12h or 24h display via `hourCycle`, configurable `minuteStep`, and `withSeconds`. The value is always emitted as a canonical 24h `"HH:mm"` (or `"HH:mm:ss"`) string. `parseTime` is exported for convenience.
  - **DateTimePicker** — a `Calendar` with a `TimePicker` footer in a Popover, emitting a single `Date`. Mirrors `DatePicker`'s controlled/uncontrolled API; selecting a day preserves the chosen time and vice-versa.

  No breaking changes.

- 62ef506: Add **Typography**, **Prose**, and **RichTextEditor**:
  - **Typography** — consistent styling for discrete copy via a `variant` prop (`h1`–`h4`, `p`, `lead`, `large`, `small`, `muted`, `blockquote`, `inlineCode`, `list`) with a sensible default element per variant and an `as` override.
  - **Prose** — self-contained typographic styles for rendered HTML/markdown (MDX, editor output). No `@tailwindcss/typography` dependency; the reusable `proseClassName` is exported.
  - **RichTextEditor** — WYSIWYG editor built on Tiptap (StarterKit) with a `Toggle`-based toolbar (bold/italic/strike/code, H1–H3, lists, quote, undo/redo). Outputs HTML (`onChange`) and ProseMirror JSON (`onChangeJSON`), styled with `proseClassName`, controlled or uncontrolled, and SSR-safe.

  Adds dependencies: `@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/pm`. No breaking changes.

## 0.1.0

### Minor Changes

- Add eight Base UI-backed primitives, built to match existing conventions (data-slot, cn(), token-driven classes, a11y-clean) with Storybook stories:
  - **Checkbox** + **CheckboxGroup** — wired to the `data-slot=checkbox-group`/`[role=checkbox]` hooks the Field system already anticipated; supports `indeterminate`.
  - **RadioGroup** + **Radio**.
  - **Tabs** (`Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`).
  - **Accordion** (`Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`) with single/`multiple` modes and animated panel height.
  - **Progress** — determinate and indeterminate.
  - **Toggle** + **ToggleGroup** (CVA `variant`/`size`; group uses `role="toolbar"`).
  - **Popover** (`Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverTitle`, `PopoverDescription`, `PopoverClose`).
  - **ScrollArea** + **ScrollBar** — styled custom scrollbars, vertical + horizontal.

### Patch Changes

- Fix accessibility violations in three primitives:
  - **Slider** — forward `aria-label`/`aria-labelledby` to the thumb's hidden range `<input>` (Base UI doesn't propagate them from the root), so a labelled `<Slider aria-label="…">` no longer trips axe's `label` rule.
  - **CommandPalette** — wrap the `role="option"` result buttons in a `role="listbox"` container so they have their ARIA-required parent (`aria-required-parent`).
  - **LogoUploader** — give the visually-hidden file `<input>` an `aria-label` so it's no longer an unlabelled form control.
