import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

/**
 * Brands the Storybook workshop chrome with the Qeet mark. The image is the Qeet
 * brand artwork (the same SVG behind @qeetrix/ui's QeetLogo), staged in ./public
 * because the manager chrome renders outside the preview iframe and can't mount a
 * React component.
 */
const qeetrix = create({
  base: "light",
  brandTitle: "Qeetrix — Qeet Group design system",
  brandUrl: "https://qeet.in",
  brandImage: "/qeet-logo.svg",
  brandTarget: "_self",
  colorSecondary: "#F26D0E",
});

addons.setConfig({ theme: qeetrix });
