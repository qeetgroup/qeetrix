import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider } from "@qeetix/ui";

const meta: Meta<typeof Slider> = {
  title: "Primitives/Slider",
  component: Slider,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Slider defaultValue={40} max={100} step={1} />
    </div>
  ),
};
