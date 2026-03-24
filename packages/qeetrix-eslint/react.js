import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

import { baseConfig } from "./base.js";

const reactConfig = [
  ...baseConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
  },
  {
    files: [
      "**/*.config.{js,mjs,cjs,ts,mts,cts}",
      "**/vite.config.{js,mjs,cjs,ts,mts,cts}",
      "**/scripts/**/*.{js,mjs,cjs,ts,mts,cts}",
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
];

export { reactConfig };
export default defineConfig(reactConfig);
