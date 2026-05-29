import type { Preview } from "@storybook/react-vite";

import "./styles.css";

/**
 * Drives light/dark via the `.dark` class on <html> — the same class strategy
 * the Qeetix ThemeProvider uses in production, so stories look identical to apps.
 */
const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: { disable: true },
    layout: "centered",
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
