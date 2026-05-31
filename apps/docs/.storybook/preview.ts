import type { Preview } from "@storybook/react-vite";

import "./styles.css";

/**
 * Drives light/dark via the `.dark` class on <html> — the same class strategy
 * the Qeetrix ThemeProvider uses in production, so stories look identical to apps.
 */
const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: { disable: true },
    layout: "centered",
    a11y: {
      // A story renders a single component into #storybook-root — not a full
      // document — so axe's "region" rule (every bit of page content must sit
      // inside a landmark like <main>/<nav>) is a false positive here: that's
      // the app shell's responsibility, not a primitive's. Left on, it flags
      // ~85 violations across nearly every story and drowns out the real ones.
      options: { rules: { region: { enabled: false } } },
    },
  },
  globalTypes: {
    theme: {
      description: "Light / dark",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      const theme = (ctx.globals as { theme?: string }).theme ?? "light";
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
      return Story();
    },
  ],
};

export default preview;
