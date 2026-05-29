/**
 * WCAG 2.1 AA contrast verification (Foundations doc §5.6) over the generated
 * semantic token pairs, for both themes. Fails the build on any violation.
 *
 * Brand-dependent pairs (action.primary vs text.on-brand, focus ring) are
 * DEFERRED while the brand palette is a neutral placeholder (OD-DS-03) — they
 * are reported but not enforced. Disabled text is exempt per WCAG.
 */
import { wcagContrast } from "culori";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const tokensPath = join(ROOT, "../dist/qeetix.tokens.json");

let tokens;
try {
  tokens = JSON.parse(readFileSync(tokensPath, "utf8"));
} catch {
  console.error(`✗ ${tokensPath} not found. Run \`pnpm --filter @qeetix/tokens build\` first.`);
  process.exit(1);
}

const get = (theme, path) =>
  path.split(".").reduce((node, seg) => node?.[seg], tokens[theme]);

// [foregroundPath, backgroundPath, minRatio, label]
// Blocking: real body text on real (neutral) surfaces — these must hold AA.
const REQUIRED = [
  ["color.text.primary", "color.surface.canvas", 4.5, "body text on page"],
  ["color.text.primary", "color.surface.default", 4.5, "body text on card"],
  ["color.text.primary", "color.surface.elevated", 4.5, "body text on modal"],
  ["color.text.secondary", "color.surface.default", 4.5, "secondary text on card"],
  ["color.text.inverse", "color.surface.inverse", 4.5, "inverse text on tooltip"],
  ["color.text.tertiary", "color.surface.default", 3.0, "tertiary text (large/UI)"],
];

// Non-blocking. Reported so future palette changes are visible, but not enforced:
//  - placeholder text: inherited Qeet ID value; placeholder text is exempt from the AA body rule.
//  - brand-dependent pairs: brand is a neutral placeholder until OD-DS-03 lands.
const ADVISORY = [
  ["color.text.placeholder", "color.surface.default", 3.0, "placeholder text", "inherited Qeet ID value; exempt from AA body"],
  ["color.text.on-brand", "color.action.primary", 4.5, "button label on primary", "placeholder brand (OD-DS-03)"],
  ["color.border.focused", "color.surface.canvas", 3.0, "focus ring on page", "placeholder brand (OD-DS-03)"],
];

let failures = 0;

for (const theme of ["light", "dark"]) {
  console.log(`\n${theme.toUpperCase()}`);
  for (const [fg, bg, min, label] of REQUIRED) {
    const ratio = wcagContrast(get(theme, fg), get(theme, bg));
    const ok = ratio >= min;
    if (!ok) failures++;
    console.log(
      `  ${ok ? "✔" : "✗"} ${label.padEnd(26)} ${ratio.toFixed(2)} : 1  (min ${min})`,
    );
  }
  for (const [fg, bg, _min, label, why] of ADVISORY) {
    const ratio = wcagContrast(get(theme, fg), get(theme, bg));
    console.log(
      `  ⏸ ${label.padEnd(26)} ${ratio.toFixed(2)} : 1  (advisory — ${why})`,
    );
  }
}

if (failures > 0) {
  console.error(`\n✗ ${failures} required contrast check(s) failed.`);
  process.exit(1);
}
console.log("\n✓ All required contrast checks pass (AA).");
