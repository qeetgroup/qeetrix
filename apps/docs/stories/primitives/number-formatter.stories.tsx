import type { Meta, StoryObj } from "@storybook/react-vite";

import { NumberFormatter } from "@qeetrix/ui";

const meta: Meta<typeof NumberFormatter> = {
  title: "Primitives/NumberFormatter",
  component: NumberFormatter,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NumberFormatter>;

export const Examples: Story = {
  render: () => (
    <div className="space-y-1 text-sm">
      <div>
        <NumberFormatter value={1234567.89} locale="en-US" decimals={2} />
      </div>
      <div>
        <NumberFormatter value={1500000} notation="compact" locale="en-US" />
      </div>
      <div>
        <NumberFormatter value={499900} prefix="₹" locale="en-IN" />
      </div>
      <div>
        <NumberFormatter value={87} suffix="%" />
      </div>
    </div>
  ),
};
