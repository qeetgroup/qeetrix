---
"@qeetrix/ui": minor
---

Add Batch 1 overlay & feedback components (additive, Base-UI-first):

- **Dialog** — generic modal (`Dialog`, `DialogTrigger`, `DialogClose`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`), complementing the existing action-confirm `AlertDialog`.
- **Toast / Toaster** — app-wide notifications. Mount `<Toaster />` once at the app root and call `toast()` / `toast.success|warning|error|info`, plus `toast.promise` and `toast.dismiss`, from anywhere.
- **Alert** — inline callout with `default | info | success | warning | danger` intents (`Alert`, `AlertTitle`, `AlertDescription`).
- **Drawer** — bottom-anchored sheet preset with a grab handle (`Drawer`, `DrawerTrigger`, `DrawerClose`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription`), built on the existing `Sheet`.

No breaking changes: existing components, exports, tokens, and dependencies are untouched.
