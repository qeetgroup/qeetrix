/**
 * Ship the non-TS assets alongside the compiled output:
 *  - dist/index.css  — the Tailwind v4 entry. @source is rewritten to scan the
 *    COMPILED js (dist has no .tsx), so a consumer's Tailwind picks up the
 *    utility classes used by Qeetrix components.
 *  - dist/fonts/**   — self-hosted Cal Sans, referenced by @font-face in index.css.
 */
import { cpSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const css = readFileSync(join(ROOT, "src/index.css"), "utf8").replace(
  '@source "./**/*.{ts,tsx}";',
  '@source "./**/*.js";',
);
writeFileSync(join(ROOT, "dist/index.css"), css);
cpSync(join(ROOT, "src/fonts"), join(ROOT, "dist/fonts"), { recursive: true });

console.log("✔ postbuild: wrote dist/index.css (@source → *.js) and copied dist/fonts");
