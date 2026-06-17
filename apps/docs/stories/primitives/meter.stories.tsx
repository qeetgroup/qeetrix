import type { Meta, StoryObj } from "@storybook/react-vite";

import { Meter } from "@qeetrix/ui";

const meta: Meta<typeof Meter> = {
  title: "Primitives/Meter",
  component: Meter,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Meter>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Meter
        label="Storage used"
        value={0.68}
        max={1}
        format={{ style: "percent" }}
      />
    </div>
  ),
};

export const Intents: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-5">
      <Meter label="Seats used" value={18} max={50} />
      <Meter label="Bandwidth" value={0.82} max={1} format={{ style: "percent" }} intent="warning" />
      <Meter label="API quota" value={0.96} max={1} format={{ style: "percent" }} intent="danger" />
    </div>
  ),
};
