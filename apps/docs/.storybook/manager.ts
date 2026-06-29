import { addons } from "storybook/manager-api";

import { qeetrixTheme } from "./theme";

/**
 * Brands the Storybook workshop chrome with the shared Qeetrix theme (see theme.ts).
 * The brand image is the Qeet mark (the same SVG behind @qeetrix/ui's QeetLogo),
 * staged in ./public because the manager chrome renders outside the preview iframe
 * and can't mount a React component; brand fonts are loaded via manager-head.html.
 */
addons.setConfig({ theme: qeetrixTheme });
