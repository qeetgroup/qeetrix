import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Storybook 10 workshop for the Qeetix design system.
 * Controls / actions / viewport / docs are built into core in SB10, so only
 * a11y and themes are added explicitly. Tailwind v4 is wired via its Vite plugin.
 */
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: { disableTelemetry: true },
  async viteFinal(cfg) {
    cfg.plugins ??= [];
    cfg.plugins.push(tailwindcss());
    return cfg;
  },
};

export default config;
