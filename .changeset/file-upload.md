---
"@qeetrix/ui": minor
---

Add **File Upload** primitives — a composable, framework-agnostic upload pattern that generalizes the existing `LogoUploader`:

- **Dropzone** — drag-and-drop (or click) picker with `accept` / `maxSize` / `maxFiles` validation, keyboard support, and an `onDrop(accepted, rejected)` callback. Inner content is overridable via a render-prop.
- **FileList** / **FileUploadItem** — render the selected files with image thumbnails, size, per-file progress (`Progress`), success/error status, and a remove action.
- Helpers **formatBytes** and **isFileAccepted** are exported for custom layouts.

The parent owns the file array and upload logic, so it drops into any form library. No breaking changes.
