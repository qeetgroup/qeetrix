import type { Meta, StoryObj } from "@storybook/react-vite";

import { DateRangePicker } from "@qeetrix/ui";

const meta: Meta<typeof DateRangePicker> = {
  title: "Primitives/DateRangePicker",
  component: DateRangePicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <DateRangePicker />
    </div>
  ),
};
