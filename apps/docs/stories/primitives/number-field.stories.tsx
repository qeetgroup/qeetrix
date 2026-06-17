import type { Meta, StoryObj } from "@storybook/react-vite";

import { NumberField } from "@qeetrix/ui";

const meta: Meta<typeof NumberField> = {
  title: "Primitives/NumberField",
  component: NumberField,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NumberField>;

export const Default: Story = {
  render: () => (
    <div className="w-40">
      <NumberField defaultValue={1} min={0} max={99} />
    </div>
  ),
};

export const Currency: Story = {
  render: () => (
    <div className="w-48">
      <NumberField
        defaultValue={49}
        min={0}
        step={1}
        format={{ style: "currency", currency: "USD" }}
      />
    </div>
  ),
};

export const Percentage: Story = {
  render: () => (
    <div className="w-44">
      <NumberField
        defaultValue={0.2}
        min={0}
        max={1}
        step={0.05}
        format={{ style: "percent" }}
      />
    </div>
  ),
};
