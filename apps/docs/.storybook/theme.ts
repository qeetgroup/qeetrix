import { create } from "storybook/theming";

/**
 * One branded Storybook theme, shared by the workshop chrome (manager.ts) and the
 * autodocs pages (preview.ts `docs.theme`). Typography mirrors the Qeetrix design
 * tokens — Cal Sans Text for body, Cal Sans Display for headings (loaded via
 * manager-head.html in the chrome, and already present in the preview iframe) — and
 * the accent is the Qeet brand orange. Keeping it in one place means the docs site
 * reads as one product, not stock Storybook.
 */
export const qeetrixTheme = create({
  base: "light",

  // Brand mark (rendered in the sidebar chrome, outside the preview iframe).
  brandTitle: "Qeetrix — Qeet Group design system",
  brandUrl: "https://qeet.in",
  brandImage: "/qeet-logo.svg",
  brandTarget: "_self",

  // Qeet brand orange.
  colorPrimary: "#F26D0E",
  colorSecondary: "#F26D0E",

  // Calm, premium neutral surface — hairline borders, soft off-white chrome.
  appBg: "#fafaf9",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#ececea",
  appBorderRadius: 10,

  // Typography from the design tokens (packages/ui/src/index.css @theme).
  fontBase: '"Cal Sans Text", "Cal Sans UI", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Fira Code", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',

  textColor: "#1a1a19",
  textMutedColor: "#6b6b68",
  textInverseColor: "#ffffff",

  // Top/side bars.
  barBg: "#ffffff",
  barTextColor: "#6b6b68",
  barSelectedColor: "#F26D0E",
  barHoverColor: "#F26D0E",

  // Controls / inputs.
  inputBg: "#ffffff",
  inputBorder: "#e4e4e1",
  inputTextColor: "#1a1a19",
  inputBorderRadius: 8,
});
