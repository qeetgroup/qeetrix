# Handoff Prompt — Qeetrix Icon Library

Paste everything below into a new Claude Opus 4.7 chat:

---

I'm building an SVG icon library at `/Users/a3097640/Desktop/QG/qeetrix/packages/qeetrix-icons/`. I need you to generate icons for a new category following the established conventions **exactly**. Do not invent your own conventions.

## Project structure
```
packages/qeetrix-icons/
├── preview.html              # auto-loads icons via <img>; CATEGORIES dict in <script>
└── svgs/
    ├── arrow/                # 77 icons × 5 styles = 385 files (DONE)
    ├── user/                 # 11 icons × 5 styles = 55 files (DONE)
    └── <new-category>/       # ← what you'll build
        ├── outline/  filled/  duotone/  rounded/  sharp/
```

## Locked specs for every SVG
- `viewBox="0 0 24 24"`, `width="24"`, `height="24"`
- Color: `currentColor` only — never hex or rgb
- Filename: kebab-case (e.g. `home.svg`, `arrow-up.svg`)
- All 5 styles per icon, in their respective folders

## The 5 style templates

### outline
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="..."/></svg>
```

### filled — pick the right approach per icon

**A. Pure silhouette** (preferred — for simple closed shapes like a triangle, circle, single user):
```svg
<svg ... fill="currentColor"><path d="..."/></svg>
```

**B. Silhouette with hole** (for "X-in-a-container" icons — arrow-in-circle, user-in-square, id-card with avatar cutout):
```svg
<svg ... fill="currentColor"><path fill-rule="evenodd" d="<outer-shape>...<hole-1>...<hole-2>"/></svg>
```

**C. Stroke-as-fill at width 2.5** (only for curve-heavy icons where a true silhouette is impractical — refresh, rotate, corners, reply, forward, shuffle, enter, exit, etc.):
```svg
<svg ... fill="none" stroke="currentColor" stroke-width="2.5"><path d="..."/></svg>
```
**Important:** do NOT add `stroke-linecap` or `stroke-linejoin` to filled — leave defaults (butt + miter) so it matches the sharp character of the silhouette icons. Round caps look "rounded" not "filled".

**D. Hybrid** (for icons with both closed shapes AND open strokes — e.g. `users`: front figure as silhouette + back figure as stroke):
```svg
<svg ...><path d="<closed-shape>" fill="currentColor"/><path d="<open-stroke>" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>
```

### duotone — pick the matching pattern

**For silhouette icons (A/B):** filled silhouette at 0.3 opacity + outline strokes on top:
```svg
<svg ...><path d="<silhouette>" fill="currentColor" opacity="0.3"/><path d="<outline-paths>" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
```

**For stroke-as-fill icons (C):** thick faded stroke halo + thin outline:
```svg
<svg ...><path d="..." fill="none" stroke="currentColor" stroke-width="3.5" opacity="0.3" stroke-linecap="round" stroke-linejoin="round"/><path d="..." fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
```

### rounded
```svg
<svg ... fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="..."/></svg>
```

### sharp
```svg
<svg ... fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter"><path d="..."/></svg>
```

## Workflow

1. I'll tell you the category name (e.g. `file`, `communication`, `media`, `weather`, `device`, `commerce`, `chart`, `layout`, `nature`, `transport`, etc.)
2. **Propose 10–15 icons** grouped into 3–4 sub-groups via `AskUserQuestion` so I can multi-select. Examples per common category:
   - file: file, file-plus, file-minus, file-check, file-text, folder, folder-plus, folder-open, archive, download, upload, cloud-upload, paperclip
   - communication: mail, mail-open, send, message, message-circle, chat-bubble, phone, phone-call, voicemail, bell, bell-off, megaphone
   - media: play, pause, stop, volume, volume-mute, mic, mic-off, camera, video, image, music
3. After I confirm, generate all selected icons (5 styles each).
4. **Always** update `preview.html` to add the new category. Open the file, find the `CATEGORIES` object in the `<script>` block, and add a new entry:
   ```js
   <new-category>: ['icon-1', 'icon-2', ...],
   ```
5. Verify with: `cd svgs/<category> && for d in outline filled duotone rounded sharp; do echo "$d: $(ls $d | wc -l)"; done` — all 5 should match the icon count.
6. Verify spec compliance: `grep -L 'viewBox="0 0 24 24"' */*.svg` (should be empty); `grep -lE '#[0-9a-fA-F]{3,6}|rgb\(' */*.svg` (should be empty).

## Tips that matter

- **Cardinal arrow shaft thickness in filled = 2** (Material-style: `M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z`). NOT 6 — chunky shafts read as "too bold".
- **For "X-with-modifier" icons** (like user-plus): user as silhouette + modifier as filled polygon (plus is a 12-vertex `M18 8h2v2h2v2h-2v2h-2v-2h-2v-2h2z`, minus is a rect, check/X are parallelograms).
- **Filled and outline must depict the same shape.** If you can't make a clean silhouette, use stroke-as-fill (option C) — don't drift to a totally different design like Material's chunky-donut refresh icon.
- **Symmetry matters.** For arrows like uturn-up, the apex must be centered over the body shaft — not offset.
- **Use `fill-rule="evenodd"`** when an icon has holes (avatar in card, arrow in circle).

## What to ask me now

Ask me which category to generate, then propose the icon list via `AskUserQuestion` before generating anything. Don't pre-emptively start generating without my confirmation.
