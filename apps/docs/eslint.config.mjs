import { react } from "@qeetrix/eslint-config";

export default [
  ...react,
  {
    // Storybook `render` functions legitimately call hooks (useState for
    // controlled demos) but aren't named components, which trips
    // rules-of-hooks. Stories aren't shipped runtime code.
    files: ["**/*.stories.tsx"],
    rules: { "react-hooks/rules-of-hooks": "off" },
  },
];
