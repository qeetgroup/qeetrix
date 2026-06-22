#!/usr/bin/env bash
# Manual runner for the Qeetrix design-system-pm competitive-intelligence agent.
# Researches the design-system market and writes proposals into qeet-files/qeetrix/.
# Run whenever you want (no schedule); or double-click "Run Qeetrix PM.command".
set -euo pipefail

QGROOT="/Users/a3097640/Desktop/QG"
QX="$QGROOT/qeetrix"
QFILES="$QGROOT/qeet-files/qeetrix"   # outputs land here (the PRD hub, mirrors qeet-id)
CLAUDE_BIN="${CLAUDE_BIN:-/Users/a3097640/.local/bin/claude}"
MODEL="${PM_MODEL:-sonnet}"            # override with PM_MODEL=opus for a deeper run

# Optional focus arg: components | tokens | dx | all (default: all).
case "$(printf '%s' "${1:-}" | tr '[:upper:]' '[:lower:]')" in
  components|component)  FOCUS="Component coverage — patterns/components peers ship that Qeetrix lacks (incl. their accessibility depth)";;
  tokens|theming|a11y)  FOCUS="Tokens, theming & accessibility — design-token architecture, dark mode/density, WCAG, APG conformance";;
  dx|charts|docs)       FOCUS="Developer experience, charts/data-viz, blocks/templates, and docs quality";;
  ""|all)               FOCUS="ALL areas in one light pass: components, tokens/theming/a11y, and DX/charts/docs";;
  *)                    FOCUS="${1}";;
esac

LOGDIR="$QX/.claude/logs"; mkdir -p "$LOGDIR"
LOG="$LOGDIR/run-$(date +%Y%m%d-%H%M%S).log"

PROMPT="Use the design-system-pm subagent to run a competitive-intelligence sweep for the Qeetrix design system. Focus: ${FOCUS}.
First read packages/ui/src/index.ts and packages/ui/src/components/ui/ to dedupe against the components that already exist, then research the live market for that focus and update ${QFILES}/COMPETITIVE-INTEL.md and ${QFILES}/COMPONENT-PROPOSALS.md exactly per your output contract. Cite primary sources. If nothing material changed, say so and add nothing."

cd "$QX"                                # cwd = repo so the design-system-pm agent is discovered
echo "=== design-system-pm run $(date '+%Y-%m-%d %H:%M:%S %Z') (focus=${FOCUS%% (*}, model=$MODEL) ===" >> "$LOG"

TOOLS="WebSearch,WebFetch,Read,Grep,Glob,Write,Edit,Bash"
if [ -t 1 ]; then
  # Run from a Terminal (interactive): show progress on screen AND save to the log.
  echo "Researching '${FOCUS%% (*}' — this takes a few minutes. Leave this window open…"; echo
  "$CLAUDE_BIN" -p "$PROMPT" --model "$MODEL" --permission-mode acceptEdits --verbose \
    --add-dir "$QGROOT/qeet-files" --allowedTools "$TOOLS" 2>&1 | tee -a "$LOG"
  echo
  echo "✅ Done. Proposals written to: $QFILES/COMPONENT-PROPOSALS.md"
else
  # Unattended: log only.
  exec "$CLAUDE_BIN" -p "$PROMPT" --model "$MODEL" --permission-mode acceptEdits \
    --add-dir "$QGROOT/qeet-files" --allowedTools "$TOOLS" >> "$LOG" 2>&1
fi
