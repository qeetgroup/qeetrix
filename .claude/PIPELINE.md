# Qeetrix — component delivery pipeline

How a design-system gap becomes a shipped, accessible, documented, semver'd component. The
**design-system-pm** finds gaps; this pipeline builds them.

## The agents

| Stage | Agent | Output | Model |
|---|---|---|---|
| 0. Research | `design-system-pm` | `qeet-files/qeetrix/COMPONENT-PROPOSALS.md` (PRD hub) | sonnet |
| 1. Spec | `component-architect` | `docs/specs/<component>.md` (Base-UI-vs-shadcn, API, a11y contract, tokens) | opus |
| 2. Build | `component-engineer` | `packages/ui/src/components/ui/<name>.tsx` + barrel/exports | sonnet |
| 2b. Tokens | `design-token-engineer` | W3C JSON tokens + Style Dictionary build + WCAG-AA validate | sonnet |
| 3. A11y + tests | `a11y-qa-engineer` | Vitest + Testing Library + vitest-axe (APG keyboard/roles) | opus |
| 4. Docs | `storybook-docs-engineer` | stories + MDX in `apps/docs/stories/**` | sonnet |
| 5. Release | `release-manager` | a `.changeset/*.md` + downstream qeet-id impact report | sonnet |

**Reuse (don't duplicate):** `/code-review` (general correctness), `/verify` (run Storybook & eyeball), `/simplify` (cleanup), `code-architect` (general design). No security-reviewer — **a11y-qa-engineer** is the specialized high-stakes review for a design system.

## The flow
```
qeet-files/qeetrix/COMPONENT-PROPOSALS.md
        │  pick one
        ▼
component-architect ──► docs/specs/<component>.md   (in the qeetrix repo)
        │
        ├─► component-engineer ─┐
        └─► design-token-engineer (only if new/changed tokens) ─┤
                                                                ▼
                                                  a11y-qa-engineer   (vitest + vitest-axe + APG keyboard/roles)
                                                                ▼
                                                  storybook-docs-engineer   (stories + docs; build-storybook)
                                                                ▼
                                                  release-manager   (changeset + semver + downstream qeet-id audit)
                                                                ▼
                                                  /code-review + /verify
                                                                ▼
                                                  YOU: review the diff and commit
```

## How to run it
Open a session in `qeetrix/` and drive the agents in turn (no nested auto-orchestrator):

> "Use the **component-architect** agent to spec the Toast proposal, then **component-engineer**
> to build it, then **a11y-qa-engineer** for tests, then **storybook-docs-engineer**, then
> **release-manager**. Stop before committing."

Tokens-first matters: `design-token-engineer` runs before `component-engineer` if the component needs new tokens (`@qeetrix/ui`'s build regenerates tokens before compiling anyway).

## Definition of done
- `pnpm build` (tokens → ui) + `pnpm typecheck` + `pnpm lint` green
- `pnpm --filter @qeetrix/ui test` (Vitest + vitest-axe) green; APG keyboard/roles covered
- `pnpm --filter @qeetrix/ui validate-tokens` (WCAG-AA contrast) green
- `pnpm --filter @qeetrix/docs build-storybook` green; a story per variant/state exists
- a `.changeset/*.md` added with the correct bump; **no unflagged breaking change** for qeet-id
- **You** reviewed the diff — then commit (agents never commit/publish/push; publish is CI on `main`)
