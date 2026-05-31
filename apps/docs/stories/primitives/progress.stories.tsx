import type { Meta, StoryObj } from "@storybook/react-vite";

import { Progress } from "@qeetrix/ui";

const meta: Meta<typeof Progress> = {
  title: "Primitives/Progress",
  component: Progress,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Progress value={60} aria-label="Migration progress" />
    </div>
  ),
};

export const Complete: Story = {
  render: () => (
    <div className="w-72">
      <Progress value={100} aria-label="Migration progress" />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div className="w-72">
      <Progress value={null} aria-label="Loading" />
    </div>
  ),
};
