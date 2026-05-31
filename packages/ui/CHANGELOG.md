# @qeetrix/ui

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
