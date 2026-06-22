#!/bin/bash
# Double-click in Finder to run the Qeetrix design-system-pm competitive sweep.
clear
echo "════════════════════════════════════════════════"
echo "   Qeetrix — Design-System PM competitive sweep"
echo "════════════════════════════════════════════════"
echo
echo "What should it research?"
echo "   1) Everything  (all areas)            [default]"
echo "   2) Components                          (gaps vs other libraries)"
echo "   3) Tokens / theming / accessibility"
echo "   4) Developer experience / charts / docs"
echo
read -r -p "Type 1-4 then Enter (or just press Enter for 1): " choice
case "$choice" in
  2) FOCUS=components ;;
  3) FOCUS=tokens ;;
  4) FOCUS=dx ;;
  *) FOCUS=all ;;
esac
echo
bash "/Users/a3097640/Desktop/QG/qeetrix/.claude/scripts/run-design-system-pm.sh" "$FOCUS"
echo
read -r -p "All done — press Enter to close this window."
