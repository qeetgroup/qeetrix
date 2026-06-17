---
"@qeetrix/ui": minor
---

Add Batch 5 navigation & structure components (additive, Base-UI-first):

- **NavigationMenu** — top-nav / mega-menu with a morphing floating viewport (`navigationMenuTriggerStyle()` for matching links).
- **Menubar** — desktop-style app menu bar (File / Edit / View), with items, checkbox/radio items, submenus, shortcuts.
- **ContextMenu** — right-click menus with the full menu surface (items, checkbox/radio, submenus, destructive variant), mirroring DropdownMenu styling.
- **HoverCard** — hover/focus preview card (user & entity previews) over Base UI Preview Card.
- **Toolbar** — action bar for tables/editors (`Toolbar`, `ToolbarButton`, `ToolbarLink`, `ToolbarGroup`, `ToolbarSeparator`).
- **Kbd** + **KbdGroup** — keyboard-shortcut hint glyphs.
- **PageHeader** — presentational title block (breadcrumb eyebrow + title + description + actions); promoted from qeetid-admin and made router-agnostic.
- **AppShell** (`AppShell` / `AppShellMain` / `AppShellHeader` / `AppShellContent`) — minimal full-height app layout frame that pairs with the Sidebar system and PageHeader.

No new runtime dependencies (all Base UI / hand-built). No breaking changes to existing components, exports, or tokens.
