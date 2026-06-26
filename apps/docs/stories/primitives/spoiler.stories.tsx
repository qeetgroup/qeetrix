import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spoiler } from "@qeetrix/ui";

const meta: Meta<typeof Spoiler> = {
  title: "Primitives/Spoiler",
  component: Spoiler,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Spoiler>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <Spoiler maxLines={2}>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Spoiler>
    </div>
  ),
};
