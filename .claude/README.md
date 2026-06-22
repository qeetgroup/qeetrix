# qeetrix `.claude/` — automation

> **👉 New here? Read [HOW-TO-RUN.md](HOW-TO-RUN.md) — plain-English steps.**

Two parts: a **design-system-pm** agent that finds component/token/a11y gaps, and a **6-agent delivery pipeline** that builds them — tailored to this repo (Base UI/shadcn + `cva` + `cn` + `data-slot`, W3C tokens + Style Dictionary + WCAG-AA validation, Vitest + vitest-axe, Storybook v10, Changesets, downstream qeet-id).

## Implementation pipeline (agents/)

Turns a `qeet-files/qeetrix/COMPONENT-PROPOSALS.md` row into a shipped component. Full flow + definition-of-done in **[PIPELINE.md](PIPELINE.md)**.

| Agent | Role |
|---|---|
| [`agents/component-architect.md`](agents/component-architect.md) | proposal → `docs/specs/<c>.md`: Base-UI-vs-shadcn, props/variants, **a11y contract (WAI-ARIA APG)**, tokens, `data-slot`. No code. |
| [`agents/component-engineer.md`](agents/component-engineer.md) | builds `packages/ui/src/components/ui/<name>.tsx` (cva + cn + data-slot) + barrel/exports; build/typecheck/lint. |
| [`agents/design-token-engineer.md`](agents/design-token-engineer.md) | W3C JSON tokens + Style Dictionary build + **WCAG-AA contrast gate** + light/dark + theme presets. |
| [`agents/a11y-qa-engineer.md`](agents/a11y-qa-engineer.md) ⭐ | Vitest + Testing Library + **vitest-axe**, keyboard/focus/ARIA per APG. The specialized high-stakes review. |
| [`agents/storybook-docs-engineer.md`](agents/storybook-docs-engineer.md) | stories (`apps/docs/stories/**`) + MDX + foundations; `build-storybook`. |
| [`agents/release-manager.md`](agents/release-manager.md) | adds a **changeset** + semver + changelog; audits **downstream qeet-id breaking-change** impact. No publish. |

## Find gaps (design-system-pm)

| File | Role |
|---|---|
| [`agents/design-system-pm.md`](agents/design-system-pm.md) | competitive research vs shadcn/Radix/Base UI/MUI/Mantine/Ark/Tremor + WAI-ARIA APG → deduped proposals. |
| [`scripts/run-design-system-pm.sh`](scripts/run-design-system-pm.sh) | manual headless runner (`claude -p`). |
| [`scripts/Run Qeetrix PM.command`](scripts/) | double-click launcher (no typing). |

**Outputs:** PM proposals live in the **PRD hub** (`qeet-files/qeetrix/COMPETITIVE-INTEL.md` + `COMPONENT-PROPOSALS.md`, mirrors qeet-id); architect build-specs stay **in-repo** at `docs/specs/`.

Reuse the existing `/code-review`, `/verify`, `/simplify` skills + `code-architect` plugin — don't duplicate them. Agents implement + run build/tests, but **don't commit or publish** — you review & commit; publishing is CI on `main`.
