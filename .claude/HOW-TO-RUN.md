# How to use the Qeetrix agents

There are **two stages**, run by two sets of agents:

1. **Find gaps** — the **design-system-pm** agent researches other design systems (shadcn, Radix,
   Base UI, MUI, …) + accessibility guidelines and writes component/token/a11y proposals. → **Part 1**.
2. **Build a component** — a 6-agent **delivery pipeline** turns a proposal into an accessible,
   documented, semver'd component. → **Part 2** (you chat with Claude).

Outputs:
- `~/Desktop/QG/qeet-files/qeetrix/COMPETITIVE-INTEL.md` — research log (PRD hub, like qeet-id)
- `~/Desktop/QG/qeet-files/qeetrix/COMPONENT-PROPOSALS.md` — prioritized backlog
- `docs/specs/<component>.md` — build specs (in the qeetrix repo)

═══════════════════════════════════════════════════════════════

# Part 1 — Find gaps (design-system-pm)

## ⭐ Easiest way — double-click (no typing)
1. In **Finder**: `Desktop → QG → qeetrix → .claude → scripts` (press **⌘ + Shift + .** to show hidden folders).
2. Double-click **`Run Qeetrix PM.command`** → pick a focus (or just press Enter) → wait a few minutes.
3. First time, macOS may say "unidentified developer" → **right-click → Open → Open** (once).

## Alternative — one line in Terminal
```bash
bash ~/Desktop/QG/qeetrix/.claude/scripts/run-design-system-pm.sh
# scope it: components | tokens | dx     ·     deeper: PM_MODEL=opus bash …/run-design-system-pm.sh
```
Read results: `open ~/Desktop/QG/qeet-files/qeetrix/COMPONENT-PROPOSALS.md`

It looks quiet for a few minutes (it's researching the web), then prints a summary. Requires Full
Disk Access (see "If it fails" at the bottom).

═══════════════════════════════════════════════════════════════

# Part 2 — Build a component (the 6-agent pipeline)

You don't run a script for this — **you chat with Claude** and it drives the agents.
(Full details: [PIPELINE.md](PIPELINE.md).)

### Step 1 — open Claude in the qeetrix folder
```bash
cd ~/Desktop/QG/qeetrix
claude
```
(Opening it **inside `qeetrix`** is what makes the build agents available.)

### Step 2 — pick a proposal
Open `~/Desktop/QG/qeet-files/qeetrix/COMPONENT-PROPOSALS.md` and note one (e.g. a missing **Toast** or **Tree**).

### Step 3 — ask Claude to run the pipeline
> Build the **Toast** proposal. Use the **component-architect** agent to spec it (incl. the WAI-ARIA
> APG accessibility contract), then **component-engineer** to build it (and **design-token-engineer**
> if it needs new tokens), then **a11y-qa-engineer** for tests, then **storybook-docs-engineer** for
> stories, then **release-manager** for a changeset. Stop before committing so I can review.

Or one step at a time (recommended at first): *"Use the component-architect agent to spec Toast."* → review the spec in `docs/specs/` → *"Now the component-engineer agent."* … etc.

### What each agent does
| Agent | Does |
|---|---|
| **component-architect** | the plan → `docs/specs/<c>.md` (which Base UI primitive, props, a11y contract). No code. |
| **component-engineer** | builds the component (`packages/ui/src/components/ui/`) |
| **design-token-engineer** | adds/changes design tokens (with the WCAG-AA contrast check) |
| **a11y-qa-engineer** | accessibility + tests (keyboard, screen-reader roles, axe) |
| **storybook-docs-engineer** | the Storybook stories + docs |
| **release-manager** | a changeset (version bump) + checks it won't break qeet-id |

### Important to know
- **Agents don't commit or publish** — they leave changes for you to review; publishing happens in CI when a version PR is merged on `main`.
- **One component at a time.**
- You don't need to memorize agent names — *"build the Toast proposal end to end and stop before committing"* is enough; Claude picks the right agents in order.

═══════════════════════════════════════════════════════════════

## If it fails (Part 1 script)
- **`Operation not permitted`** → macOS Full Disk Access: **System Settings → Privacy & Security → Full Disk Access → +**, add **`/bin/bash`** and **`/Users/a3097640/.local/bin/claude`**, toggle ON.
- **Check the log:** `ls -t ~/Desktop/QG/qeetrix/.claude/logs/run-*.log | head -1 | xargs cat`

## Don't want to use Terminal at all?
Just ask Claude (in the qeetrix repo) — *"run the design-system-pm agent"*, or *"build the Toast proposal end to end."*
