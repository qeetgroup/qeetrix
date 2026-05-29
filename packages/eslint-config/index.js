import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

/** Shared ignore globs for every Qeetix package/app. */
export const ignores = {
  ignores: [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.turbo/**",
    "**/.next/**",
    "**/storybook-static/**",
    "**/coverage/**",
  ],
};

/**
 * Base config: plain JS + TypeScript. Formatting is owned by Prettier, so no
 * stylistic rules here. `no-unused-vars` is delegated to the TS rule with an
 * underscore escape hatch (matches the Qeet ID convention).
 */
export const base = [
  ignores,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
];

/**
 * React preset: base + React hooks rules. `react-refresh` is registered for
 * app/dev contexts (Storybook, Vite) but left rule-less for the component
 * library, which legitimately exports non-component values (cva variants, etc.).
 */
export const react = [
  ...base,
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default base;
