import type { Meta, StoryObj } from "@storybook/react-vite";

import { Separator } from "@qeetix/ui";

const meta: Meta<typeof Separator> = {
  title: "Primitives/Separator",
  component: Separator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-72 text-sm">
      <p>Account</p>
      <Separator className="my-3" />
      <p>Security</p>
    </div>
  ),
};
