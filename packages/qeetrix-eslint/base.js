import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

const baseConfig = [
  globalIgnores(["coverage", "dist", "node_modules"]),
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
    },
  },
];

export { baseConfig };
export default defineConfig(baseConfig);
