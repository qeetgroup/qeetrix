/** Ship the raw brand SVGs alongside the compiled components. */
import { cpSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
cpSync(join(ROOT, "assets/raw"), join(ROOT, "dist/assets"), { recursive: true });
console.log("✔ postbuild: copied raw SVGs → dist/assets");
